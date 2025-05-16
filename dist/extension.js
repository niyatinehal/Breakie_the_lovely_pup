"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(require("vscode"));
function activate(context) {
    context.subscriptions.push(vscode.window.registerWebviewViewProvider("flirtyView", new FlirtyViewProvider(context.extensionUri)));
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
class FlirtyViewProvider {
    constructor(_extensionUri) {
        this._extensionUri = _extensionUri;
    }
    resolveWebviewView(webviewView) {
        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [vscode.Uri.joinPath(this._extensionUri, 'media')]
        };
        const mediaUri = (file) => webviewView.webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', file));
        const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="${mediaUri('style.css')}" rel="stylesheet">
        <script defer src="${mediaUri('script.js')}"></script>
      </head>
      <body>
        <video src="${mediaUri('doggy.webm')}" autoplay loop muted></video>
        <div id="flirt-box">🐶 Loading sweet talk...</div>
      </body>
      </html>
    `;
        webviewView.webview.html = html;
    }
}
//# sourceMappingURL=extension.js.map