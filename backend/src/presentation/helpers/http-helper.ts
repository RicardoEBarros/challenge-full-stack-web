import { InternalServerError } from "../errors/internal-server-error"
import { HttpResponse, StatusCode } from "../protocols"

export const ok = (data: any): HttpResponse => ({
  statusCode: StatusCode.badRequest,
  body: data
})

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: StatusCode.badRequest,
  body: error
})

export const internalServerError = (): HttpResponse => ({
  statusCode: StatusCode.serverError,
  body: new InternalServerError()
})
