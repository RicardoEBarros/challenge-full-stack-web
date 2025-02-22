import { Validator } from "@/src/data/protocols/validator"
import { HttpRequest, HttpResponse, Controller, StatusCode } from "../../protocols"
import { AddNewRegistration } from "@/src/domain/usecases/add-new-registration"

export class StudentRegistrationController implements Controller {

  constructor(
    private readonly validator: Validator,
    private readonly addNewRegistration: AddNewRegistration
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {

    this.validator.validate(httpRequest.body)


    return Promise.resolve({
      statusCode: StatusCode.ok,
      body: null
    })
  }

}
