# petstore

Model Context Protocol (MCP) Server for the *petstore* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=petstore&utm_campaign=mcp-typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This MCP Server is not yet ready for production use. Delete this notice before publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary

Dub API: Dub is link management infrastructure for companies to create marketing campaigns, link sharing features, and referral programs.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [petstore](#petstore)
  * [Installation](#installation)
  * [Development](#development)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start Installation [installation] -->
## Installation

> [!TIP]
> To finish publishing your MCP Server to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).

<details>
<summary>DXT (Desktop Extension)</summary>

Install the MCP server as a Desktop Extension using the pre-built `mcp-server.dxt` file:

Simply drag and drop the `mcp-server.dxt` file onto Claude Desktop to install the extension.

The DXT package includes the MCP server and all necessary configuration. Once installed, the server will be available without additional setup.

> [!NOTE]
> DXT (Desktop Extensions) provide a streamlined way to package and distribute MCP servers. Learn more about [Desktop Extensions](https://www.anthropic.com/engineering/desktop-extensions).

</details>
https://www.anthropic.com/engineering/desktop-extensions
<details>
<summary>Claude</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "Dub": {
      "command": "npx",
      "args": [
        "-y",
        "--package",
        "Dub",
        "--",
        "mcp",
        "start",
        "--api-token",
        "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor</summary>

[![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/install-mcp?name=Dub&config=eyJtY3BTZXJ2ZXJzIjp7IkR1YiI6eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIi0tcGFja2FnZSIsIkR1YiIsIi0tIiwibWNwIiwic3RhcnQiLCItLWFwaS10b2tlbiIsIi4uLiJdfX19)

Or manually:

1. Open Cursor Settings
2. Select Tools and Integrations
3. Select New MCP Server
4. Paste the following JSON into the MCP Server Configuration field:

```json
{
  "mcpServers": {
    "Dub": {
      "command": "npx",
      "args": [
        "-y",
        "--package",
        "Dub",
        "--",
        "mcp",
        "start",
        "--api-token",
        "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Claude Code CLI</summary>

```bash
npx -y --package Dub -- mcp start --api-token ...
```

</details>

<details>
<summary>Manual installation</summary>




To start the MCP server, run:

```bash
npx -y --package Dub -- mcp start --api-token ...
```

For a full list of server arguments, run:

```bash
npx -y --package Dub -- mcp start --help
```

</details>
<!-- End Installation [installation] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

## Development

Run locally without a published npm package:
1. Clone this repository
2. Run `npm install`
3. Run `npm run build`
4. Run `node ./bin/mcp-server.js start --api-token ...`

To use this local version with Cursor, Claude or other MCP Clients, you'll need to add the following config:

```json
{
  "mcpServers": {
    "Petstore": {
      "command": "node",
      "args": [
        "./bin/mcp-server.js",
        "start",
        "--api-token",
        "..."
      ]
    }
  }
}
```

Or to debug the MCP server locally, use the official MCP Inspector: 

```bash
npx @modelcontextprotocol/inspector node ./bin/mcp-server.js start --api-token ...
```



## Contributions

While we value contributions to this MCP Server, the code is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### MCP Server Created by [Speakeasy](https://www.speakeasy.com/?utm_source=petstore&utm_campaign=mcp-typescript)
