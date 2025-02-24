import { StudentRegistrationModel } from "@/src/domain/models/student-registration-model"
import { AddNewRegistration } from "@/src/domain/usecases/add-new-registration"
import { DbAddRegistrationPostgresRepository } from "@/src/infra/db/postgres/registration/db-add-registration-repository"
import { DbAddNewRegister } from "@/src/infra/protocols/db-add-new-register"
import { PrismaAdapterStub } from "@/tests/mocks/stubs/infra/db/adapters/prisma-adapter.stub"

interface SutDbAddRegistrationRepositoryType {
  sut: AddNewRegistration<StudentRegistrationModel>,
  prismaAdapterStub: DbAddNewRegister<StudentRegistrationModel>
}

export const makeDbAddRegistrationRepositoryFactory = (): SutDbAddRegistrationRepositoryType => {
  const prismaAdapterStub = new PrismaAdapterStub<StudentRegistrationModel>()
  const sut = new DbAddRegistrationPostgresRepository(prismaAdapterStub)
  return {
    sut, 
    prismaAdapterStub
  }
}


