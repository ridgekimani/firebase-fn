import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

exports.addUser = functions.https.onRequest((req, resp) => {
  const { name } = req.body
  return admin.database().ref('/users').push({ name }).then(snapshot => {
    return resp.status(200).send(`Welcome ${name}`)
  })
})