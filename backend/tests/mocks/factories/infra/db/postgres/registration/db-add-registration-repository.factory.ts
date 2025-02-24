import { AddNewRegistration } from "@/src/domain/usecases/add-new-registration"
import { DbAddRegistrationPostgresRepository } from "@/src/infra/db/postgres/registration/db-add-registration-repository"
import { DbAddNewRegister } from "@/src/infra/protocols/db-add-new-register"
import { PrismaAdapterStub } from "@/tests/mocks/stubs/infra/db/adapters/prisma-adapter.stub"

interface SutDbAddRegistrationRepositoryType {
  sut: AddNewRegistration,
  prismaAdapterStub: DbAddNewRegister
}

export const makeDbAddRegistrationRepositoryFactory = (): SutDbAddRegistrationRepositoryType => {
  const prismaAdapterStub = new PrismaAdapterStub()
  const sut = new DbAddRegistrationPostgresRepository(prismaAdapterStub)
  return {
    sut, 
    prismaAdapterStub
  }
}


