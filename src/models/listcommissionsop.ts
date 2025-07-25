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

export const QueryParamType$zodSchema = z.enum([
  "click",
  "lead",
  "sale",
  "custom",
]);

export type QueryParamType = z.infer<typeof QueryParamType$zodSchema>;

/**
 * Filter the list of commissions by their corresponding status.
 */
export const QueryParamStatus$zodSchema = z.enum([
  "pending",
  "processed",
  "paid",
  "refunded",
  "duplicate",
  "fraud",
  "canceled",
]).describe("Filter the list of commissions by their corresponding status.");

export type QueryParamStatus = z.infer<typeof QueryParamStatus$zodSchema>;

/**
 * The field to sort the list of commissions by.
 */
export const ListCommissionsSortBy$zodSchema = z.enum([
  "createdAt",
  "amount",
]).describe("The field to sort the list of commissions by.");

export type ListCommissionsSortBy = z.infer<
  typeof ListCommissionsSortBy$zodSchema
>;

/**
 * The sort order for the list of commissions.
 */
export const ListCommissionsSortOrder$zodSchema = z.enum([
  "asc",
  "desc",
]).describe("The sort order for the list of commissions.");

export type ListCommissionsSortOrder = z.infer<
  typeof ListCommissionsSortOrder$zodSchema
>;

/**
 * The interval to retrieve commissions for.
 */
export const ListCommissionsInterval$zodSchema = z.enum([
  "24h",
  "7d",
  "30d",
  "90d",
  "1y",
  "mtd",
  "qtd",
  "ytd",
  "all",
]).describe("The interval to retrieve commissions for.");

export type ListCommissionsInterval = z.infer<
  typeof ListCommissionsInterval$zodSchema
>;

export type ListCommissionsRequest = {
  type?: QueryParamType | undefined;
  customerId?: string | undefined;
  payoutId?: string | undefined;
  partnerId?: string | undefined;
  invoiceId?: string | undefined;
  status?: QueryParamStatus | undefined;
  sortBy?: ListCommissionsSortBy | undefined;
  sortOrder?: ListCommissionsSortOrder | undefined;
  interval?: ListCommissionsInterval | undefined;
  start?: string | undefined;
  end?: string | undefined;
  page?: number | undefined;
  pageSize?: number | undefined;
};

export const ListCommissionsRequest$zodSchema: z.ZodType<
  ListCommissionsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().describe(
    "Filter the list of commissions by the associated customer.",
  ).optional(),
  end: z.string().describe(
    "The end date of the date range to filter the commissions by.",
  ).optional(),
  interval: ListCommissionsInterval$zodSchema.default("all"),
  invoiceId: z.string().describe(
    "Filter the list of commissions by the associated invoice. Since invoiceId is unique on a per-program basis, this will only return one commission per invoice.",
  ).optional(),
  page: z.number().default(1).describe("The page number for pagination."),
  pageSize: z.number().default(100).describe("The number of items per page."),
  partnerId: z.string().describe(
    "Filter the list of commissions by the associated partner.",
  ).optional(),
  payoutId: z.string().describe(
    "Filter the list of commissions by the associated payout.",
  ).optional(),
  sortBy: ListCommissionsSortBy$zodSchema.default("createdAt"),
  sortOrder: ListCommissionsSortOrder$zodSchema.default("desc"),
  start: z.string().describe(
    "The start date of the date range to filter the commissions by.",
  ).optional(),
  status: QueryParamStatus$zodSchema.optional(),
  type: QueryParamType$zodSchema.optional(),
});

export const ListCommissionsTypeResponse$zodSchema = z.enum([
  "click",
  "lead",
  "sale",
  "custom",
]);

export type ListCommissionsTypeResponse = z.infer<
  typeof ListCommissionsTypeResponse$zodSchema
>;

export const ListCommissionsStatusResponse$zodSchema = z.enum([
  "pending",
  "processed",
  "paid",
  "refunded",
  "duplicate",
  "fraud",
  "canceled",
]);

export type ListCommissionsStatusResponse = z.infer<
  typeof ListCommissionsStatusResponse$zodSchema
>;

export type ListCommissionsResponseBody = {
  id: string;
  type?: ListCommissionsTypeResponse | undefined;
  amount: number;
  earnings: number;
  currency: string;
  status: ListCommissionsStatusResponse;
  invoiceId?: string | null | undefined;
  description?: string | null | undefined;
  createdAt: string;
  updatedAt: string;
};

export const ListCommissionsResponseBody$zodSchema: z.ZodType<
  ListCommissionsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: z.number(),
  createdAt: z.string(),
  currency: z.string(),
  description: z.string().nullable().optional(),
  earnings: z.number(),
  id: z.string(),
  invoiceId: z.string().nullable().optional(),
  status: ListCommissionsStatusResponse$zodSchema,
  type: ListCommissionsTypeResponse$zodSchema.optional(),
  updatedAt: z.string(),
});

export type ListCommissionsResponse = {
  ContentType: string;
  StatusCode: number;
  RawResponse: Response;
  ResponseBodies?: Array<ListCommissionsResponseBody> | undefined;
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

export const ListCommissionsResponse$zodSchema: z.ZodType<
  ListCommissionsResponse,
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
  ResponseBodies: z.array(z.lazy(() => ListCommissionsResponseBody$zodSchema))
    .describe("The list of commissions.").optional(),
  StatusCode: z.number().int(),
  Unauthorized: Unauthorized$zodSchema.optional(),
  UnprocessableEntity: UnprocessableEntity$zodSchema.optional(),
});
