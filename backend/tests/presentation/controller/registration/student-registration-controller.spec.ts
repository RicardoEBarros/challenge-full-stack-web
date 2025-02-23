import { badRequest, internalServerError } from "@/src/presentation/helpers/http-helper"
import { StudentRegistrationObjectMother } from "@/tests/mocks/common/student-registration.mother"
import { makeStudentRegistrationControllerFactory } from "@/tests/mocks/factories/presentation/controllers/student-registration-controller.factory"
import { describe, test, expect, jest } from "@jest/globals"

describe("Student Registration Suíte", () => {

  test("Should call Validator with correct values", async () => {

    const { sut, validatorStub } = makeStudentRegistrationControllerFactory()
    const validateSpy = jest.spyOn(validatorStub, "validate")
    const httpRequest = { body: StudentRegistrationObjectMother.withoutRaField() }
    await sut.handle(httpRequest)

    expect(validateSpy).toHaveBeenNthCalledWith(1, httpRequest.body)

  })

  test("Should return 400 if Validator fails", async () => {

    const { sut, validatorStub } = makeStudentRegistrationControllerFactory()
    jest.spyOn(validatorStub, "validate").mockReturnValueOnce(new Error())
    const httpRequest = { body: StudentRegistrationObjectMother.withoutRaField() }
    const httpResponse = await sut.handle(httpRequest)

    expect(httpResponse).toEqual(badRequest(new Error()))

  })

  test("Should return 500 if Validator throws", async () => {

    const { sut, validatorStub } = makeStudentRegistrationControllerFactory()
    jest.spyOn(validatorStub, "validate").mockImplementationOnce(() => { throw new Error() })
    const httpRequest = { body: StudentRegistrationObjectMother.withoutRaField() }
    const httpResponse = await sut.handle(httpRequest)

    expect(httpResponse).toEqual(internalServerError())

  })

  test("Should call AddNewRegistration with correct values", async () => {

    const { sut, addNewRegistrationStub } = makeStudentRegistrationControllerFactory()
    const addSpy = jest.spyOn(addNewRegistrationStub, "add")
    const httpRequest = { body: StudentRegistrationObjectMother.withoutRaField() }
    await sut.handle(httpRequest)

    expect(addSpy).toHaveBeenNthCalledWith(1, httpRequest.body)

  })

  test.todo("Shouldn't throws an error if AddNewRegistration throws")
  test.todo("Should return 200 on success")

})
