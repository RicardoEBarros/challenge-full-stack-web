import { Validator } from "@/src/data/protocols/validator"
import { AddNewRegistration } from "@/src/domain/usecases/add-new-registration"
import { StudentRegistrationController } from "@/src/presentation/controller/registration/student-registration-controller"
import { Controller } from "@/src/presentation/protocols"
import { AddNewRegistrationStub } from "@/tests/mocks/stubs/domain/usecases/add-new-registration.stub"
import { ValidatorStub } from "@/tests/mocks/stubs/presentation/controller/validator.stub"

interface SutStudentRegistrationType {
  sut: Controller,
  validatorStub: Validator,
  addNewRegistrationStub: AddNewRegistration
}

export const makeStudentRegistrationControllerFactory = (): SutStudentRegistrationType => {
  const validatorStub = new ValidatorStub()
  const addNewRegistrationStub = new AddNewRegistrationStub() 
  const sut = new StudentRegistrationController(validatorStub, addNewRegistrationStub)
  return {
    sut, 
    validatorStub,
    addNewRegistrationStub
  }
}
