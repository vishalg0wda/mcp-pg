/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The error code.
 */
export const LinkErrorSchemaCode$zodSchema = z.enum([
  "bad_request",
  "not_found",
  "internal_server_error",
  "unauthorized",
  "forbidden",
  "rate_limit_exceeded",
  "invite_expired",
  "invite_pending",
  "exceeded_limit",
  "conflict",
  "unprocessable_entity",
]).describe("The error code.");

export type LinkErrorSchemaCode = z.infer<typeof LinkErrorSchemaCode$zodSchema>;

export type LinkErrorSchema = {
  link?: any | undefined;
  error: string;
  code: LinkErrorSchemaCode;
};

export const LinkErrorSchema$zodSchema: z.ZodType<
  LinkErrorSchema,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: LinkErrorSchemaCode$zodSchema,
  error: z.string(),
  link: z.any().optional(),
});
