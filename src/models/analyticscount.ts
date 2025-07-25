/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type AnalyticsCount = {
  clicks?: number | undefined;
  leads?: number | undefined;
  sales?: number | undefined;
  saleAmount?: number | undefined;
};

export const AnalyticsCount$zodSchema: z.ZodType<
  AnalyticsCount,
  z.ZodTypeDef,
  unknown
> = z.object({
  clicks: z.number().default(0),
  leads: z.number().default(0),
  saleAmount: z.number().default(0),
  sales: z.number().default(0),
});
