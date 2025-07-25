/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { tagsUpdate } from "../../funcs/tagsUpdate.js";
import { UpdateTagRequest$zodSchema } from "../../models/updatetagop.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: UpdateTagRequest$zodSchema,
};

export const tool$tagsUpdate: ToolDefinition<typeof args> = {
  name: "tags-update",
  description: `Update a tag

Update a tag in the workspace.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await tagsUpdate(
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
