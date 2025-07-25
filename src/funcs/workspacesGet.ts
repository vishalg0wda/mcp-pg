/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { DubCore } from "../core.js";
import { encodeSimple } from "../lib/encodings.js";
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
  GetWorkspaceRequest,
  GetWorkspaceRequest$zodSchema,
  GetWorkspaceResponse,
  GetWorkspaceResponse$zodSchema,
} from "../models/getworkspaceop.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

/**
 * Retrieve a workspace
 *
 * @remarks
 * Retrieve a workspace for the authenticated user.
 */
export function workspacesGet(
  client$: DubCore,
  request: GetWorkspaceRequest,
  options?: RequestOptions,
): APIPromise<
  Result<
    GetWorkspaceResponse,
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
  request: GetWorkspaceRequest,
  options?: RequestOptions,
): Promise<
  [
    Result<
      GetWorkspaceResponse,
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
    (value$) => GetWorkspaceRequest$zodSchema.parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return [parsed$, { status: "invalid" }];
  }
  const payload$ = parsed$.value;
  const body$ = null;

  const pathParams$ = {
    idOrSlug: encodeSimple("idOrSlug", payload$.idOrSlug, {
      explode: false,
      charEncoding: "percent",
    }),
  };
  const path$ = pathToFunc("/workspaces/{idOrSlug}")(
    pathParams$,
  );

  const headers$ = new Headers(compactMap({
    Accept: "application/json",
  }));
  const securityInput = await extractSecurity(client$._options.security);
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    baseURL: options?.serverURL ?? client$._baseURL ?? "",
    operationID: "getWorkspace",
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
    GetWorkspaceResponse,
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, GetWorkspaceResponse$zodSchema, { key: "WorkspaceSchema" }),
    M.json(400, GetWorkspaceResponse$zodSchema, { key: "BadRequest" }),
    M.json(401, GetWorkspaceResponse$zodSchema, { key: "Unauthorized" }),
    M.json(403, GetWorkspaceResponse$zodSchema, { key: "Forbidden" }),
    M.json(404, GetWorkspaceResponse$zodSchema, { key: "NotFound" }),
    M.json(409, GetWorkspaceResponse$zodSchema, { key: "Conflict" }),
    M.json(410, GetWorkspaceResponse$zodSchema, { key: "InviteExpired" }),
    M.json(422, GetWorkspaceResponse$zodSchema, { key: "UnprocessableEntity" }),
    M.json(429, GetWorkspaceResponse$zodSchema, { key: "RateLimitExceeded" }),
    M.json(500, GetWorkspaceResponse$zodSchema, { key: "InternalServerError" }),
  )(response, req$, { extraFields: responseFields$ });

  return [result$, { status: "complete", request: req$, response }];
}
