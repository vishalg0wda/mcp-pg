/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * A short code indicating the error code returned.
 */
export const InternalServerErrorCode$zodSchema = z.enum([
  "internal_server_error",
]).describe("A short code indicating the error code returned.");

export type InternalServerErrorCode = z.infer<
  typeof InternalServerErrorCode$zodSchema
>;

export type InternalServerErrorError = {
  code: InternalServerErrorCode;
  message: string;
  doc_url?: string | undefined;
};

export const InternalServerErrorError$zodSchema: z.ZodType<
  InternalServerErrorError,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: InternalServerErrorCode$zodSchema,
  doc_url: z.string().optional(),
  message: z.string(),
});

/**
 * The server has encountered a situation it does not know how to handle.
 */
export type InternalServerError = { error: InternalServerErrorError };

export const InternalServerError$zodSchema: z.ZodType<
  InternalServerError,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: z.lazy(() => InternalServerErrorError$zodSchema),
}).describe(
  "The server has encountered a situation it does not know how to handle.",
);
