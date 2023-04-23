import * as idb from 'idb'

// IndexedDB 是一个允许在离线状态下存储和检索数据的 API

// 定义数据库名称和版本号
const DB_NAME = 'todo_db';
const DB_VERSION = 1;

// 创建一个打开数据库的函数
// 该函数创建了一个新的IndexedDB数据库，并定义了在升级数据库版本时应该执行的操作
export async function openDB() {
    const db = await idb.openDB(DB_NAME, DB_VERSION, {
        // 在数据库升级时，IndexedDB 会在后台创建一个新的数据库，
        // 并复制旧数据库中的数据到新的数据库，然后将新数据库中的数据移动到旧数据库中，完成升级。

        // 如果新旧数据库的结构一样，但是内容改变了会怎么样？

        // 如果新旧数据库的结构一样但内容不同，那么在升级数据库版本时，不需要使用upgrade函数，
        // 因为已经有了正确的对象仓库，只需打开现有的数据库并进行读写操作即可。在打开现有数据库时，
        // 会自动匹配现有数据库的结构，而不是尝试创建新的对象仓库。因此，即使数据内容发生变化，
        // 只要数据库结构保持不变，代码就可以顺利工作。
        upgrade(database) {
        database.createObjectStore('todos', { keyPath: 'id' });
        },
    });
    return db;
}
  
// 创建一个函数来添加 todo 项目到数据库
// 注意，这个函数的实现是异步的，因为需要等待一些Promise对象的结果，
// 包括openDB()返回的Promise对象，tx.complete返回的Promise对象等等。
export async function addTodoToDB(todo) {
    
    // 调用openDB()函数来获取一个IndexedDB数据库实例，并将其赋值给变量db。
    const db = await openDB();
    // 使用db实例创建一个读写事务，即将IndexedDB数据库标识为“写入模式”，并将其赋值给变量transaction。
    // transaction终究是读写事物，是事物！
    const transaction = db.transaction('todos', 'readwrite');
    // 使用transaction事务对象获取名为“todos”的对象仓库，
    // 即使用transaction.objectStore('todos')来获取一个具有“todos”名称的对象仓库，将其赋值给变量store。
    // store是一个存储数据的仓库
    const store = transaction.objectStore('todos');

    // transaction终究是读写事物而store是一个存储数据的仓库对吗？
    // transaction代表了一个对数据库的读写事务，而store则代表了事务中的一个具体的存储数据的仓库。
    // 在一个事务中，可以有多个存储数据的仓库进行读写操作。

    // 调用store.add(todo)方法，将todo对象添加到store对象仓库中。
    store.add(todo);
    // 使用await transaction.complete来确保在tx事务中的所有操作都成功完成。

    // 如果不使用await transaction.complete来确保在tx事务中的所有操作都成功完成会怎样？
    // 使用 await tx.complete 确保在 tx 事务中的所有操作都成功完成，是为了防止出现操作不完整的情况。
    // 如果没有这个操作，当你提交一个事务后直接关闭数据库，可能会导致一些操作没有完成，这会产生一些问题，例如数据不一致、事务回滚等等。
    await transaction.complete;
    // 最后，在控制台输出一条消息，指示已成功将todo对象添加到IndexedDB数据库中。
}
  

// 创建一个函数来获取所有的 todo 项目
export async function getAllTodosFromDB() {
    const db = await openDB();
    const transaction = db.transaction('todos', 'readonly');
    const store = transaction.objectStore('todos');
    const todos = await store.getAll();
    return todos;
}
  


export async function updateIndexedDB(setData) {
    const db = await openDB();
    const transaction = db.transaction("todos", "readwrite");
    const store = transaction.objectStore("todos");
  
    // 清空对象存储
    await store.clear();
  
    // 将setData中的所有待办事项添加到IndexedDB
    for (const todo of setData) {
      await store.add(todo);
    }
  
    // 等待事务完成
    await transaction.complete;
  }

//   创建一个名为initializeState的异步函数，从IndexedDB中获取待办事项并设置初始状态
  export async function initializeState() {
    const todosFromDB = await getAllTodosFromDB();
    console.log("todosFromDB: ")
    console.log(todosFromDB)

    return {
      id: 1,
      setData: todosFromDB,
      setShowData: todosFromDB,
      setSearchText: "",
    };
  }