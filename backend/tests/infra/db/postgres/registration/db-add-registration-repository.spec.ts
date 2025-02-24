import { DbAddRegistrationPostgresRepository } from "@/src/infra/db/postgres/registration/db-add-registration-repository"
import { StudentRegistrationObjectMother } from "@/tests/mocks/common/student-registration.mother"
import { PrismaAdapterStub } from "@/tests/mocks/stubs/infra/db/adapters/prisma-adapter.stub"
import { describe, test, expect, jest } from "@jest/globals"

describe("Add Registration Postgres Repository Suíte", () => {

  test("Should call PrismaAdapter with correct values", async () => {

    const prismaAdapterStub = new PrismaAdapterStub()
    const sut = new DbAddRegistrationPostgresRepository(prismaAdapterStub)
    const createSpy = jest.spyOn(prismaAdapterStub, "create")
    const registrationFake = StudentRegistrationObjectMother.withoutRaField()
    await sut.add(registrationFake)

    expect(createSpy).toHaveBeenCalledTimes(1)
    expect(createSpy).not.toHaveBeenCalledWith({})

  })

  test.todo("Should throw 500 if DbAddNewRegister fails")
  test.todo("Should return an registration on success")

})
