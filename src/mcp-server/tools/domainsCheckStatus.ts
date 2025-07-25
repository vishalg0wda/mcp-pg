/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { domainsCheckStatus } from "../../funcs/domainsCheckStatus.js";
import { CheckDomainStatusRequest$zodSchema } from "../../models/checkdomainstatusop.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: CheckDomainStatusRequest$zodSchema,
};

export const tool$domainsCheckStatus: ToolDefinition<typeof args> = {
  name: "domains-check-status",
  description: `Check the availability of one or more domains

Check if a domain name is available for purchase. You can check multiple domains at once.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await domainsCheckStatus(
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
