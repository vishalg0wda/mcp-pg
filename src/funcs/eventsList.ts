/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { DubCore } from "../core.js";
import { encodeFormQuery } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import { APIError } from "../models/errors/apierror.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import {
  ListEventsRequest,
  ListEventsRequest$zodSchema,
  ListEventsResponse,
  ListEventsResponse$zodSchema,
} from "../models/listeventsop.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

/**
 * Retrieve a list of events
 *
 * @remarks
 * Retrieve a paginated list of events for the authenticated workspace.
 */
export function eventsList(
  client$: DubCore,
  request?: ListEventsRequest | undefined,
  options?: RequestOptions,
): APIPromise<
  Result<
    ListEventsResponse,
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  return new APIPromise($do(
    client$,
    request,
    options,
  ));
}

async function $do(
  client$: DubCore,
  request?: ListEventsRequest | undefined,
  options?: RequestOptions,
): Promise<
  [
    Result<
      ListEventsResponse,
      | APIError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >,
    APICall,
  ]
> {
  const parsed$ = safeParse(
    request,
    (value$) => ListEventsRequest$zodSchema.optional().parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return [parsed$, { status: "invalid" }];
  }
  const payload$ = parsed$.value;
  const body$ = null;
  const path$ = pathToFunc("/events")();
  const query$ = encodeFormQuery({
    "browser": payload$?.browser,
    "city": payload$?.city,
    "continent": payload$?.continent,
    "country": payload$?.country,
    "customerId": payload$?.customerId,
    "device": payload$?.device,
    "domain": payload$?.domain,
    "end": payload$?.end,
    "event": payload$?.event,
    "externalId": payload$?.externalId,
    "folderId": payload$?.folderId,
    "interval": payload$?.interval,
    "key": payload$?.key,
    "limit": payload$?.limit,
    "linkId": payload$?.linkId,
    "order": payload$?.order,
    "os": payload$?.os,
    "page": payload$?.page,
    "partnerId": payload$?.partnerId,
    "programId": payload$?.programId,
    "qr": payload$?.qr,
    "referer": payload$?.referer,
    "refererUrl": payload$?.refererUrl,
    "region": payload$?.region,
    "root": payload$?.root,
    "sortBy": payload$?.sortBy,
    "sortOrder": payload$?.sortOrder,
    "start": payload$?.start,
    "tagId": payload$?.tagId,
    "tagIds": payload$?.tagIds,
    "tenantId": payload$?.tenantId,
    "timezone": payload$?.timezone,
    "trigger": payload$?.trigger,
    "url": payload$?.url,
    "utm_campaign": payload$?.utm_campaign,
    "utm_content": payload$?.utm_content,
    "utm_medium": payload$?.utm_medium,
    "utm_source": payload$?.utm_source,
    "utm_term": payload$?.utm_term,
  });

  const headers$ = new Headers(compactMap({
    Accept: "application/json",
  }));
  const securityInput = await extractSecurity(client$._options.security);
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    baseURL: options?.serverURL ?? client$._baseURL ?? "",
    operationID: "listEvents",
    oAuth2Scopes: [],
    resolvedSecurity: requestSecurity,
    securitySource: client$._options.security,
    retryConfig: options?.retries
      || client$._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || [
      "429",
      "500",
      "502",
      "503",
      "504",
    ],
  };

  const requestRes = client$._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    baseURL: options?.serverURL,
    path: path$,
    headers: headers$,
    query: query$,
    body: body$,
    timeoutMs: options?.timeoutMs || client$._options.timeoutMs
      || -1,
  }, options);
  if (!requestRes.ok) {
    return [requestRes, { status: "invalid" }];
  }
  const req$ = requestRes.value;

  const doResult = await client$._do(req$, {
    context,
    errorCodes: [],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return [doResult, { status: "request-error", request: req$ }];
  }
  const response = doResult.value;
  const responseFields$ = {
    HttpMeta: { Response: response, Request: req$ },
  };

  const [result$] = await M.match<
    ListEventsResponse,
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, ListEventsResponse$zodSchema, { key: "ResponseBodies" }),
    M.json(400, ListEventsResponse$zodSchema, { key: "BadRequest" }),
    M.json(401, ListEventsResponse$zodSchema, { key: "Unauthorized" }),
    M.json(403, ListEventsResponse$zodSchema, { key: "Forbidden" }),
    M.json(404, ListEventsResponse$zodSchema, { key: "NotFound" }),
    M.json(409, ListEventsResponse$zodSchema, { key: "Conflict" }),
    M.json(410, ListEventsResponse$zodSchema, { key: "InviteExpired" }),
    M.json(422, ListEventsResponse$zodSchema, { key: "UnprocessableEntity" }),
    M.json(429, ListEventsResponse$zodSchema, { key: "RateLimitExceeded" }),
    M.json(500, ListEventsResponse$zodSchema, { key: "InternalServerError" }),
  )(response, req$, { extraFields: responseFields$ });

  return [result$, { status: "complete", request: req$, response }];
}
