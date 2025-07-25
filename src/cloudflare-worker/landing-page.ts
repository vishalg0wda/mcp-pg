/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

export function landingPage(req: Request) {
  const url = new URL(req.url).origin;

  const cloudflareUrl = null;
  const o = cloudflareUrl && cloudflareUrl.trim() !== "" ? cloudflareUrl : url;

  const mcpConfig = {
    "mcpServers": {
      "Dub": {
        "type": "sse",
        "url": `${o}/mcp`,
        "headers": {
          "authorization": "$" + "{" + "DUB_TOKEN" + "}",
        },
      },
    },
  };

  return new Response(
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dub MCP</title>
    <style>
        body { 
            font-family: 'Inter', Arial, sans-serif; 
            margin: 0; 
            padding: 0; 
            background: #fff; 
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }
        header { display: flex; justify-content: space-between; align-items: center; padding: 24px 40px; border-bottom: 1px solid #e5e5e5; }
        .company-logo { font-weight: bold; font-size: 2rem; letter-spacing: 2px; }
        .company-logo span { font-family: monospace; }
        .company-name { font-size: 1.5rem; font-weight: bold; }
        main { 
            max-width: 800px; 
            margin: 40px auto; 
            padding: 0 24px; 
            flex: 1;
        }
        h1 { font-size: 2.5rem; margin-bottom: 0.5em; }
        .desc { font-size: 1.1rem; margin-bottom: 1.5em; }
        .card { background: #faf9f6; border: 1px solid #e5e5e5; border-radius: 8px; padding: 24px; margin-top: 24px; }
        .code-container { position: relative; }
        .code-container:hover .copy-button { opacity: 1; }
        .copy-button { 
            position: absolute; 
            top: 12px; 
            right: 12px; 
            background: #333; 
            color: white; 
            border: none; 
            border-radius: 4px; 
            padding: 6px 12px; 
            font-size: 12px; 
            cursor: pointer; 
            opacity: 0; 
            transition: opacity 0.2s ease, background-color 0.2s ease;
            z-index: 10;
        }
        .copy-button:hover { background: #555; }
        .copy-button.copied { opacity: 1; }
        pre { background: #f6f3ef; padding: 16px; border-radius: 6px; font-size: 1rem; overflow-x: auto; margin: 0; }
        .section-title { font-weight: 600; margin-bottom: 0.5em; }
        .logo-container { display: flex; align-items: center; gap: 16px; margin-bottom: 0.5em; align-self: flex-end; justify-content: space-between; }
        .logo-container .section-title { margin-bottom: 0; }
        .client-logos { display: flex; align-items: center; gap: 12px; }
        .client-logo { height: 24px; width: auto; }
        .installation-group { margin-top: 24px; }
        .installation-section { margin-top: 24px; }
        .installation-header { 
            background: #f8f9fa; 
            border: 1px solid #e5e5e5; 
            border-radius: 8px 8px 0 0; 
            padding: 16px 20px; 
            margin: 0; 
            font-weight: 600;
            font-size: 1.1rem;
        }
        .installation-content { 
            background: #faf9f6; 
            border: 1px solid #e5e5e5; 
            border-top: none; 
            border-radius: 0 0 8px 8px; 
            padding: 20px;
        }
        .installation-method { 
            margin-bottom: 24px; 
            border: 1px solid #e5e5e5; 
            border-radius: 8px; 
            overflow: hidden;
        }
        .installation-method:last-child { margin-bottom: 0; }
        .method-header { 
            display: flex; 
            align-items: center; 
            justify-content: space-between; 
            cursor: pointer; 
            padding: 16px 20px; 
            background: #faf9f6; 
            border-bottom: 1px solid #e5e5e5; 
            margin: 0; 
            font-weight: 600;
            transition: background-color 0.2s ease;
        }
        .method-header:hover { background: #e9ecef; }
        .method-header.active { 
            background: #e2e3e5; 
            border-bottom: 1px solid #e5e5e5;
        }
        .method-content { 
            display: none; 
            padding: 20px;
            background: #faf9f6;
            border-top: 1px solid #e5e5e5;
        }
        .method-content.active { 
            display: block !important; 
        }
        .chevron { 
            transition: transform 0.2s ease; 
            font-size: 14px; 
            color: #666;
        }
        .chevron.active { transform: rotate(90deg); }
        .method-title { 
            font-weight: 600; 
            margin-bottom: 12px; 
            color: #333;
        }
        .method-description { 
            margin-bottom: 12px; 
            color: #666; 
            font-size: 0.9rem;
        }
        footer { 
            text-align: right; 
            padding: 24px; 
            border-top: 1px solid #e5e5e5; 
            color: #666; 
            font-size: 0.9rem; 
            margin-top: auto;
        }
        footer a { 
            color: #333; 
            text-decoration: none; 
            font-weight: 500; 
        }
        footer a:hover { 
            text-decoration: underline; 
        }
    </style>
</head>
<body>
    <main>
        <h1>Dub MCP</h1>
        <div class="desc">
            Welcome! This is the MCP server for interacting with the Dub API. Use it with Claude, Cursor, or any other tool that supports MCP.
        </div>
        <h2 style="margin-top: 48px; font-size: 1.5rem; font-weight: 700; margin-bottom: 0;">Getting Started</h2>
        <hr />
        <div class="card">
            <div class="section-title">MCP URL</div>
            <div class="code-container">
                <button class="copy-button" onclick="copyToClipboard('mcp-url', this)">Copy</button>
                <pre id="mcp-url">${o}/mcp</pre>
            </div>
        </div>

        <h2 style="margin-top: 48px; font-size: 1.5rem; font-weight: 700; margin-bottom: 0;">Installation</h2>
        <hr  />
        <div class="installation-group">
        <div class="installation-method">
            <div class="method-header" onclick="toggleMethod('claude-desktop')">
                <span>Claude Desktop</span>
                <span class="chevron">▶</span>
            </div>
            <div class="method-content" id="claude-desktop-content">
                <div class="method-description">One-click installation for Claude Desktop users</div>
                <div style="margin-bottom: 16px;">
                    <a href="claude://mcp/install?url=${o}/mcp-server.dxt" style="display: inline-block; background: #333; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500; margin-right: 12px;">
                        📱 Open in Claude Desktop
                    </a>
                    <a href="${o}/mcp-server.dxt" download="mcp-server.dxt" style="display: inline-block; background: #f8f9fa; color: #333; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500; border: 1px solid #e5e5e5;">
                        📥 Download DXT File
                    </a>
                </div>
                <p><strong>Instructions:</strong></p>
                <ol>
                    <li>Click "Open in Claude Desktop" to automatically install the MCP server</li>
                    <li>Or download the DXT file and drag it into Claude Desktop</li>
                </ol>
                <div class="method-description" style="margin-top: 12px; font-size: 0.85rem; color: #888;">
                    The DXT file contains all necessary configuration for the MCP server.
                </div>
            </div>
        </div>        
        <div class="installation-method">
            <div class="method-header" onclick="toggleMethod('cursor')">
                <span>Cursor</span>
                <span class="chevron">▶</span>
            </div>
            <div class="method-content" id="cursor-content">
                <div class="method-description">One-click installation for Cursor users</div>
                <a href="https://cursor.com/install-mcp?name=Dub&config=eyJtY3BTZXJ2ZXJzIjp7IkR1YiI6eyJ0eXBlIjoic3NlIiwidXJsIjoiaHR0cHM6Ly9leGFtcGxlLWNsb3VkZmxhcmUtd29ya2VyLmNvbS9zc2UiLCJoZWFkZXJzIjp7ImF1dGhvcml6YXRpb24iOiIke0RVQl9UT0tFTn0ifX19fQ==">
    <img
        src="https://cursor.com/deeplink/mcp-install-dark.svg"
        alt="Add Dub MCP server to Cursor"
        height="32" />
</a>
                <p>Or manually:</p>
                <ol>
                    <li>Open Cursor Settings</li>
                    <li>Select Tools and Integrations</li>
                    <li>Select New MCP Server</li>
                    <li>Paste the following JSON into the MCP Server Configuration field:</li>
                </ol>
                <pre id="cursor-manual">${
      JSON.stringify(mcpConfig, null, 2)
    }</pre>
            </div>
        </div>
        <div class="installation-method">
            <div class="method-header" onclick="toggleMethod('claude-cli')">
                <span>Claude Code CLI</span>
                <span class="chevron">▶</span>
            </div>
            <div class="method-content" id="claude-cli-content">
                <div class="method-description">Use the Claude Code CLI to add the MCP server:</div>
                <div class="code-container">
                    <button class="copy-button" onclick="copyToClipboard('claude-cli', this)">Copy</button>
                    <pre id="claude-cli">claude mcp add --transport sse Dub ${o}/mcp --header "authorization: ..." </pre>
                </div>
            </div>
        </div>
        <div class="installation-method">
            <div class="method-header" onclick="toggleMethod('manual')">
                <span>Manual Installation</span>
                <span class="chevron">▶</span>
            </div>
            <div class="method-content" id="manual-content">
                <div class="method-description">Start the MCP server manually using npx:</div>
                <div class="code-container">
                    <button class="copy-button" onclick="copyToClipboard('manual-install', this)">Copy</button>
                    <pre id="manual-install">npx Dub start --api-token ...</pre>
                </div>
                <div class="method-description" style="margin-top: 12px;">For a full list of server arguments:</div>
                <div class="code-container">
                    <button class="copy-button" onclick="copyToClipboard('manual-help', this)">Copy</button>
                    <pre id="manual-help">npx -y --package Dub -- mcp start --help</pre>
                </div>
            </div>
        </div>
        </div>

    </main>
    <script>
        function copyToClipboard(elementId, button) {
            const element = document.getElementById(elementId);
            const text = element.textContent;

            navigator.clipboard.writeText(text).then(function() {
                const originalText = button.textContent;
                button.textContent = 'Copied!';
                button.classList.add('copied');

                setTimeout(function() {
                    button.textContent = originalText;
                    button.classList.remove('copied');
                }, 2000);
            }).catch(function(err) {
                console.error('Failed to copy text: ', err);
            });
        }
        function toggleMethod(methodId) {
            const methodHeader = event.target.closest('.method-header');
            const methodContent = document.getElementById(methodId + '-content');
            const chevron = methodHeader.querySelector('.chevron');

            methodHeader.classList.toggle('active');
            methodContent.classList.toggle('active');
            chevron.classList.toggle('active');
        }
    </script>
</body>
</html>`,
    {
      headers: { "Content-Type": "text/html" },
    },
  );
}
