import { Validator } from "@/src/data/protocols/validator"
import { StudentRegistrationModel } from "@/src/domain/models/student-registration-model"
import { AddNewRegistration } from "@/src/domain/usecases/add-new-registration"
import { StudentRegistrationController } from "@/src/presentation/controller/registration/student-registration-controller"
import { Controller } from "@/src/presentation/protocols"
import { DbAddRegistrationPostgresRepositoryStub } from "@/tests/mocks/stubs/infra/db/postgres/registration/db-add-registration-repository.stub"
import { ValidatorStub } from "@/tests/mocks/stubs/presentation/controller/validator.stub"

interface SutStudentRegistrationType {
  sut: Controller,
  validatorStub: Validator,
  dbAddRegistrationPostgresRepositoryStub: AddNewRegistration<StudentRegistrationModel>
}

export const makeStudentRegistrationControllerFactory = (): SutStudentRegistrationType => {
  const validatorStub = new ValidatorStub()
  const dbAddRegistrationPostgresRepositoryStub = new DbAddRegistrationPostgresRepositoryStub<StudentRegistrationModel>() 
  const sut = new StudentRegistrationController(validatorStub, dbAddRegistrationPostgresRepositoryStub)
  return {
    sut, 
    validatorStub,
    dbAddRegistrationPostgresRepositoryStub
  }
}
