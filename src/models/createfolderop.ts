/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { BadRequest, BadRequest$zodSchema } from "./badrequest.js";
import { Conflict, Conflict$zodSchema } from "./conflict.js";
import { FolderSchema, FolderSchema$zodSchema } from "./folderschema.js";
import { Forbidden, Forbidden$zodSchema } from "./forbidden.js";
import {
  InternalServerError,
  InternalServerError$zodSchema,
} from "./internalservererror.js";
import { InviteExpired, InviteExpired$zodSchema } from "./inviteexpired.js";
import { NotFound, NotFound$zodSchema } from "./notfound.js";
import {
  RateLimitExceeded,
  RateLimitExceeded$zodSchema,
} from "./ratelimitexceeded.js";
import { Unauthorized, Unauthorized$zodSchema } from "./unauthorized.js";
import {
  UnprocessableEntity,
  UnprocessableEntity$zodSchema,
} from "./unprocessableentity.js";

/**
 * The access level of the folder within the workspace.
 */
export const CreateFolderAccessLevel$zodSchema = z.enum([
  "write",
  "read",
]).describe("The access level of the folder within the workspace.");

export type CreateFolderAccessLevel = z.infer<
  typeof CreateFolderAccessLevel$zodSchema
>;

export type CreateFolderRequest = {
  name: string;
  accessLevel?: CreateFolderAccessLevel | null | undefined;
};

export const CreateFolderRequest$zodSchema: z.ZodType<
  CreateFolderRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  accessLevel: CreateFolderAccessLevel$zodSchema.nullable().default(null),
  name: z.string(),
});

export type CreateFolderResponse = {
  ContentType: string;
  StatusCode: number;
  RawResponse: Response;
  FolderSchema?: FolderSchema | undefined;
  BadRequest?: BadRequest | undefined;
  Unauthorized?: Unauthorized | undefined;
  Forbidden?: Forbidden | undefined;
  NotFound?: NotFound | undefined;
  Conflict?: Conflict | undefined;
  InviteExpired?: InviteExpired | undefined;
  UnprocessableEntity?: UnprocessableEntity | undefined;
  RateLimitExceeded?: RateLimitExceeded | undefined;
  InternalServerError?: InternalServerError | undefined;
};

export const CreateFolderResponse$zodSchema: z.ZodType<
  CreateFolderResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  BadRequest: BadRequest$zodSchema.optional(),
  Conflict: Conflict$zodSchema.optional(),
  ContentType: z.string(),
  FolderSchema: FolderSchema$zodSchema.optional(),
  Forbidden: Forbidden$zodSchema.optional(),
  InternalServerError: InternalServerError$zodSchema.optional(),
  InviteExpired: InviteExpired$zodSchema.optional(),
  NotFound: NotFound$zodSchema.optional(),
  RateLimitExceeded: RateLimitExceeded$zodSchema.optional(),
  RawResponse: z.instanceof(Response),
  StatusCode: z.number().int(),
  Unauthorized: Unauthorized$zodSchema.optional(),
  UnprocessableEntity: UnprocessableEntity$zodSchema.optional(),
});
