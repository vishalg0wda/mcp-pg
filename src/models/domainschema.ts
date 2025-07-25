/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The registered domain record.
 */
export type RegisteredDomain = {
  id: string;
  createdAt: string;
  expiresAt: string;
};

export const RegisteredDomain$zodSchema: z.ZodType<
  RegisteredDomain,
  z.ZodTypeDef,
  unknown
> = z.object({
  createdAt: z.string(),
  expiresAt: z.string(),
  id: z.string(),
}).describe("The registered domain record.");

export type DomainSchema = {
  id: string;
  slug: string;
  verified?: boolean | undefined;
  primary?: boolean | undefined;
  archived?: boolean | undefined;
  placeholder: string | null;
  expiredUrl: string | null;
  notFoundUrl: string | null;
  assetLinks?: string | null | undefined;
  appleAppSiteAssociation?: string | null | undefined;
  logo: string | null;
  createdAt: string;
  updatedAt: string;
  registeredDomain: RegisteredDomain | null;
};

export const DomainSchema$zodSchema: z.ZodType<
  DomainSchema,
  z.ZodTypeDef,
  unknown
> = z.object({
  appleAppSiteAssociation: z.string().nullable().default(null),
  archived: z.boolean().default(false),
  assetLinks: z.string().nullable().default(null),
  createdAt: z.string(),
  expiredUrl: z.string().nullable(),
  id: z.string(),
  logo: z.string().nullable(),
  notFoundUrl: z.string().nullable(),
  placeholder: z.string().nullable(),
  primary: z.boolean().default(false),
  registeredDomain: z.lazy(() => RegisteredDomain$zodSchema).nullable(),
  slug: z.string(),
  updatedAt: z.string(),
  verified: z.boolean().default(false),
});
