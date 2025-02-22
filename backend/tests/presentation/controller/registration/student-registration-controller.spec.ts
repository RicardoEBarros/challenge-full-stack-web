import { Validator } from "@/src/data/protocols/validator"
import { StudentRegistrationModel } from "@/src/domain/models/student-registration-model"
import { AddNewRegistration } from "@/src/domain/usecases/add-new-registration"
import { StudentRegistrationController } from "@/src/presentation/controller/registration/student-registration-controller"
import { describe, test, expect, jest } from "@jest/globals"

describe("Student Registration Suíte", () => {

  test("Should call Validator with correct values", async () => {

    class ValidatorStub implements Validator {

      validate(): Error | null {
        return null
      }
      
    }

    class AddNewRegistrationStub implements AddNewRegistration {
      
      async add(params: StudentRegistrationModel): Promise<void> {
        Promise.resolve(null)
      }
      
    }

    const validatorStub = new ValidatorStub()
    const addNewRegistrationStub = new AddNewRegistrationStub() 
    const validateSpy = jest.spyOn(validatorStub, 'validate')
    const sut = new StudentRegistrationController(validatorStub, addNewRegistrationStub)
    const httpRequest = { body: { name: "any_name", cpf: "any_cpf" } }
    await sut.handle(httpRequest)

    expect(validateSpy).toHaveBeenNthCalledWith(1, httpRequest.body)

  })

  test.todo("Should return an error if Validator fails")
  test.todo("Should't throws an error if Validator throws")
  test.todo("Should call AddRegistration with correct values")
  test.todo("Shouldn't throws an error if AddRegistration throws")
  test.todo("Should return 200 on success")

})
