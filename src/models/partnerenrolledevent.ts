/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export const PartnerEnrolledEventEvent$zodSchema = z.enum([
  "partner.enrolled",
]);

export type PartnerEnrolledEventEvent = z.infer<
  typeof PartnerEnrolledEventEvent$zodSchema
>;

/**
 * The status of the partner's enrollment in the program.
 */
export const Status$zodSchema = z.enum([
  "pending",
  "approved",
  "rejected",
  "invited",
  "declined",
  "banned",
  "archived",
]).describe("The status of the partner's enrollment in the program.");

export type Status = z.infer<typeof Status$zodSchema>;

export type PartnerEnrolledEventLink = {
  id: string;
  domain: string;
  key: string;
  shortLink: string;
  url: string;
  clicks?: number | undefined;
  leads?: number | undefined;
  sales?: number | undefined;
  saleAmount?: number | undefined;
};

export const PartnerEnrolledEventLink$zodSchema: z.ZodType<
  PartnerEnrolledEventLink,
  z.ZodTypeDef,
  unknown
> = z.object({
  clicks: z.number().default(0),
  domain: z.string(),
  id: z.string(),
  key: z.string(),
  leads: z.number().default(0),
  saleAmount: z.number().default(0),
  sales: z.number().default(0),
  shortLink: z.string(),
  url: z.string(),
});

export type PartnerEnrolledEventData = {
  id: string;
  name: string;
  email: string | null;
  image: string | null;
  description?: string | null | undefined;
  country: string | null;
  website: string | null;
  youtube: string | null;
  twitter: string | null;
  linkedin: string | null;
  instagram: string | null;
  tiktok: string | null;
  paypalEmail: string | null;
  stripeConnectId: string | null;
  payoutsEnabledAt: string | null;
  createdAt: string;
  status: Status;
  programId: string;
  tenantId: string | null;
  links: Array<PartnerEnrolledEventLink> | null;
  clicks?: number | undefined;
  leads?: number | undefined;
  sales?: number | undefined;
  saleAmount?: number | undefined;
  totalCommissions?: number | undefined;
  netRevenue?: number | undefined;
  earnings?: number | undefined;
};

export const PartnerEnrolledEventData$zodSchema: z.ZodType<
  PartnerEnrolledEventData,
  z.ZodTypeDef,
  unknown
> = z.object({
  clicks: z.number().default(0),
  country: z.string().nullable(),
  createdAt: z.string(),
  description: z.string().nullable().optional(),
  earnings: z.number().default(0),
  email: z.string().nullable(),
  id: z.string(),
  image: z.string().nullable(),
  instagram: z.string().nullable(),
  leads: z.number().default(0),
  linkedin: z.string().nullable(),
  links: z.array(z.lazy(() => PartnerEnrolledEventLink$zodSchema)).nullable(),
  name: z.string(),
  netRevenue: z.number().default(0),
  payoutsEnabledAt: z.string().nullable(),
  paypalEmail: z.string().nullable(),
  programId: z.string(),
  saleAmount: z.number().default(0),
  sales: z.number().default(0),
  status: Status$zodSchema,
  stripeConnectId: z.string().nullable(),
  tenantId: z.string().nullable(),
  tiktok: z.string().nullable(),
  totalCommissions: z.number().default(0),
  twitter: z.string().nullable(),
  website: z.string().nullable(),
  youtube: z.string().nullable(),
});

/**
 * Triggered when a partner is enrolled.
 */
export type PartnerEnrolledEvent = {
  id: string;
  event: PartnerEnrolledEventEvent;
  createdAt: string;
  data: PartnerEnrolledEventData;
};

export const PartnerEnrolledEvent$zodSchema: z.ZodType<
  PartnerEnrolledEvent,
  z.ZodTypeDef,
  unknown
> = z.object({
  createdAt: z.string(),
  data: z.lazy(() => PartnerEnrolledEventData$zodSchema),
  event: PartnerEnrolledEventEvent$zodSchema,
  id: z.string(),
}).describe("Triggered when a partner is enrolled.");
