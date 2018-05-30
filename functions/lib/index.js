"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const buffer = require("safe-buffer");
admin.initializeApp();
exports.addUser = functions.https.onRequest((req, resp) => {
    const { name } = req.body;
    return admin.database().ref('/users').push({ name }).then(snapshot => {
        return resp.status(200).send(`Welcome ${name}`);
    });
});
exports.helloPubSub = (event, callback) => {
    const pubsubMessage = event.data;
    const name = pubsubMessage.data ? buffer.Buffer.from(pubsubMessage.data, 'base64').toString() : 'World';
    console.log(`Hello, ${name}!`);
    callback();
};
//# sourceMappingURL=index.js.map