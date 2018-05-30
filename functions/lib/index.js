"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
exports.addUser = functions.https.onRequest((req, resp) => {
    const { name } = req.body;
    return admin.database().ref('/users').push({ name }).then(snapshot => {
        return resp.status(200).send(`Welcome ${name}`);
    });
});
//# sourceMappingURL=index.js.map