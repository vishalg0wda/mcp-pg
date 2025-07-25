/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { foldersUpdate } from "../../funcs/foldersUpdate.js";
import { UpdateFolderRequest$zodSchema } from "../../models/updatefolderop.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: UpdateFolderRequest$zodSchema,
};

export const tool$foldersUpdate: ToolDefinition<typeof args> = {
  name: "folders-update",
  description: `Update a folder

Update a folder in the workspace.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await foldersUpdate(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
