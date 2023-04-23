const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });
admin.initializeApp();

exports.sendNotification = functions.https.onRequest(async (req, res) => {
    cors(req, res, async () => {
      if (req.method !== 'POST') {
        res.status(405).send('Method Not Allowed');
        return;
      }
  
      const { token, todo } = req.body;
  
      const message = {
        notification: {
          title: 'TodoList时间提醒！',
          body: `重要: ${todo.title}`,
        },
        token,
      };
  
      try {
        const response = await admin.messaging().send(message);
        console.log('Successfully sent message:', response);
        res.status(200).send('Notification sent');
      } catch (error) {
        console.log('Error sending message:', error);
        res.status(500).send('Error sending notification');
      }
    });
  });
  