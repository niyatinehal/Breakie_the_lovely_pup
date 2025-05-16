"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
const compliments = [
    "You're coding like a legend 🐶💻",
    "Woof! That logic is *chef’s kiss* 💋",
    "You and clean code? A match made in heaven 💘",
    "Did it just get hotter in here or did you refactor that? 🔥",
    "You debug like a boss 😎",
    "Can I clone your repo... and your heart? 💖",
];
function activate(context) {
    const interval = setInterval(() => {
        const compliment = compliments[Math.floor(Math.random() * compliments.length)];
        vscode.window.showInformationMessage(`🐾 ${compliment}`);
    }, 10000); // every 10 seconds
    context.subscriptions.push({
        dispose: () => clearInterval(interval)
    });
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map