/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { linksUpdate } from "../../funcs/linksUpdate.js";
import { UpdateLinkRequest$zodSchema } from "../../models/updatelinkop.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: UpdateLinkRequest$zodSchema,
};

export const tool$linksUpdate: ToolDefinition<typeof args> = {
  name: "links-update",
  description: `Update a link

Update a link for the authenticated workspace. If there's no change, returns it as it is.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await linksUpdate(
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
