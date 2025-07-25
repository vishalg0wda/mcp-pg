/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { BadRequest, BadRequest$zodSchema } from "./badrequest.js";
import { Conflict, Conflict$zodSchema } from "./conflict.js";
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
import {
  WorkspaceSchema,
  WorkspaceSchema$zodSchema,
} from "./workspaceschema.js";

export type GetWorkspaceRequest = { idOrSlug: string };

export const GetWorkspaceRequest$zodSchema: z.ZodType<
  GetWorkspaceRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  idOrSlug: z.string().describe("The ID or slug of the workspace."),
});

export type GetWorkspaceResponse = {
  ContentType: string;
  StatusCode: number;
  RawResponse: Response;
  WorkspaceSchema?: WorkspaceSchema | undefined;
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

export const GetWorkspaceResponse$zodSchema: z.ZodType<
  GetWorkspaceResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  BadRequest: BadRequest$zodSchema.optional(),
  Conflict: Conflict$zodSchema.optional(),
  ContentType: z.string(),
  Forbidden: Forbidden$zodSchema.optional(),
  InternalServerError: InternalServerError$zodSchema.optional(),
  InviteExpired: InviteExpired$zodSchema.optional(),
  NotFound: NotFound$zodSchema.optional(),
  RateLimitExceeded: RateLimitExceeded$zodSchema.optional(),
  RawResponse: z.instanceof(Response),
  StatusCode: z.number().int(),
  Unauthorized: Unauthorized$zodSchema.optional(),
  UnprocessableEntity: UnprocessableEntity$zodSchema.optional(),
  WorkspaceSchema: WorkspaceSchema$zodSchema.optional(),
});
