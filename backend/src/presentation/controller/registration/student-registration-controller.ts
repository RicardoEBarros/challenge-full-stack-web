import { Validator } from "@/src/data/protocols/validator"
import { HttpRequest, HttpResponse, Controller, StatusCode } from "../../protocols"
import { AddNewRegistration } from "@/src/domain/usecases/add-new-registration"
import { badRequest, internalServerError } from "../../helpers/http-helper"

export class StudentRegistrationController implements Controller {

  constructor(
    private readonly validator: Validator,
    private readonly addNewRegistration: AddNewRegistration
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

    try {
      
      const error = this.validator.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      await this.addNewRegistration.add(httpRequest.body)
  
      return Promise.resolve({
        statusCode: StatusCode.ok,
        body: null
      })

    } catch (error) {
      return internalServerError()
    }

  }

};