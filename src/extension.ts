import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      "flirtyView",
      new FlirtyViewProvider(context.extensionUri)
    )
  );
}

export function deactivate() {}

class FlirtyViewProvider implements vscode.WebviewViewProvider {
  constructor(private readonly _extensionUri: vscode.Uri) {}

  resolveWebviewView(webviewView: vscode.WebviewView) {
    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [vscode.Uri.joinPath(this._extensionUri, 'media')]
    };

    const mediaUri = (file: string) =>
      webviewView.webview.asWebviewUri(
        vscode.Uri.joinPath(this._extensionUri, 'media', file)
      );

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
         <video src="${mediaUri('dog_bg.mp4')}" autoplay loop muted></video>
        <div id="flirt-box">🐶 Loading sweet talk...</div>
      </body>
      </html>
    `;

    webviewView.webview.html = html;
  }
}
