import { Validator } from "@/src/data/protocols/validator"
import { HttpRequest, HttpResponse, Controller, StatusCode } from "../../protocols"
import { AddNewRegistration } from "@/src/domain/usecases/add-new-registration"
import { badRequest } from "../../helpers/http-helper"

export class StudentRegistrationController implements Controller {

  constructor(
    private readonly validator: Validator,
    private readonly addNewRegistration: AddNewRegistration
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

    const error = this.validator.validate(httpRequest.body)
    if (error) {
      return badRequest(error)
    }

    return Promise.resolve({
      statusCode: StatusCode.ok,
      body: null
    })
  }

}
