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
  PartnerAnalyticsCount,
  PartnerAnalyticsCount$zodSchema,
} from "./partneranalyticscount.js";
import {
  PartnerAnalyticsTimeseries,
  PartnerAnalyticsTimeseries$zodSchema,
} from "./partneranalyticstimeseries.js";
import {
  PartnerAnalyticsTopLinks,
  PartnerAnalyticsTopLinks$zodSchema,
} from "./partneranalyticstoplinks.js";
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
 * The interval to retrieve analytics for. If undefined, defaults to 24h.
 */
export const RetrievePartnerAnalyticsInterval$zodSchema = z.enum([
  "24h",
  "7d",
  "30d",
  "90d",
  "1y",
  "mtd",
  "qtd",
  "ytd",
  "all",
]).describe(
  "The interval to retrieve analytics for. If undefined, defaults to 24h.",
);

export type RetrievePartnerAnalyticsInterval = z.infer<
  typeof RetrievePartnerAnalyticsInterval$zodSchema
>;

/**
 * The parameter to group the analytics data points by. Defaults to `count` if undefined.
 */
export const RetrievePartnerAnalyticsGroupBy$zodSchema = z.enum([
  "top_links",
  "timeseries",
  "count",
]).describe(
  "The parameter to group the analytics data points by. Defaults to `count` if undefined.",
);

export type RetrievePartnerAnalyticsGroupBy = z.infer<
  typeof RetrievePartnerAnalyticsGroupBy$zodSchema
>;

export type RetrievePartnerAnalyticsRequest = {
  partnerId?: string | undefined;
  tenantId?: string | undefined;
  interval?: RetrievePartnerAnalyticsInterval | undefined;
  start?: string | undefined;
  end?: string | undefined;
  timezone?: string | undefined;
  groupBy?: RetrievePartnerAnalyticsGroupBy | undefined;
};

export const RetrievePartnerAnalyticsRequest$zodSchema: z.ZodType<
  RetrievePartnerAnalyticsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  end: z.string().describe(
    "The end date and time when to retrieve analytics from. If not provided, defaults to the current date. If set along with `start`, takes precedence over `interval`.",
  ).optional(),
  groupBy: RetrievePartnerAnalyticsGroupBy$zodSchema.default("count"),
  interval: RetrievePartnerAnalyticsInterval$zodSchema.optional(),
  partnerId: z.string().describe(
    "The ID of the partner to retrieve analytics for.",
  ).optional(),
  start: z.string().describe(
    "The start date and time when to retrieve analytics from. If set, takes precedence over `interval`.",
  ).optional(),
  tenantId: z.string().describe(
    "The ID of the tenant that created the link inside your system.",
  ).optional(),
  timezone: z.string().default("UTC").describe(
    "The IANA time zone code for aligning timeseries granularity (e.g. America/New_York). Defaults to UTC.",
  ),
});

/**
 * Partner analytics data
 */
export type RetrievePartnerAnalyticsResponseBody =
  | PartnerAnalyticsCount
  | Array<PartnerAnalyticsTimeseries>
  | Array<PartnerAnalyticsTopLinks>;

export const RetrievePartnerAnalyticsResponseBody$zodSchema: z.ZodType<
  RetrievePartnerAnalyticsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([
  PartnerAnalyticsCount$zodSchema,
  z.array(PartnerAnalyticsTimeseries$zodSchema),
  z.array(PartnerAnalyticsTopLinks$zodSchema),
]).describe("Partner analytics data");

export type RetrievePartnerAnalyticsResponse = {
  ContentType: string;
  StatusCode: number;
  RawResponse: Response;
  oneOf?:
    | PartnerAnalyticsCount
    | Array<PartnerAnalyticsTimeseries>
    | Array<PartnerAnalyticsTopLinks>
    | undefined;
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

export const RetrievePartnerAnalyticsResponse$zodSchema: z.ZodType<
  RetrievePartnerAnalyticsResponse,
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
  oneOf: z.union([
    PartnerAnalyticsCount$zodSchema,
    z.array(PartnerAnalyticsTimeseries$zodSchema),
    z.array(PartnerAnalyticsTopLinks$zodSchema),
  ]).optional(),
});
