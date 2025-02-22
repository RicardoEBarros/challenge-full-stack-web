export enum StatusCode {
  "ok" = 200,
  "badRequest" = 400,
  "unauthorized" = 401,
  "serverError" = 500
}

export interface HttpRequest {
  body?: any
}

export interface HttpResponse {
  statusCode: StatusCode,
  body: any
}
