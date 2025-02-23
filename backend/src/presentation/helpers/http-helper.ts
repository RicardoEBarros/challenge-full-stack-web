import { HttpResponse, StatusCode } from "../protocols";

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: StatusCode.badRequest,
  body: error
})
