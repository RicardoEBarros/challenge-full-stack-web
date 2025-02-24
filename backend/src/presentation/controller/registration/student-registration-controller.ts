import { Validator } from "@/src/data/protocols/validator"
import { HttpRequest, HttpResponse, Controller } from "../../protocols"
import { AddNewRegistration } from "@/src/domain/usecases/add-new-registration"
import { badRequest, internalServerError, ok } from "../../helpers/http-helper"
import { StudentRegistrationModel } from "@/src/domain/models/student-registration-model"

export class StudentRegistrationController implements Controller {

  constructor(
    private readonly validator: Validator,
    private readonly addNewRegistration: AddNewRegistration<StudentRegistrationModel>
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

    try {
      
      const error = this.validator.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      const registration = await this.addNewRegistration.add(httpRequest.body)
  
      return ok(registration)

    } catch {
      return internalServerError()
    }

  }

}
