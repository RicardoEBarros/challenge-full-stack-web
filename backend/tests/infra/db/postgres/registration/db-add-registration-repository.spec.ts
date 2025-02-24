import { StudentRegistrationObjectMother } from "@/tests/mocks/common/student-registration.mother"
import { makeDbAddRegistrationRepositoryFactory } from "@/tests/mocks/factories/infra/db/postgres/registration/db-add-registration-repository.factory"
import { describe, test, expect, jest } from "@jest/globals"

describe("Db Add Registration Postgres Repository Suíte", () => {

  test("Should call PrismaAdapter with correct values", async () => {

    const { sut, prismaAdapterStub } = makeDbAddRegistrationRepositoryFactory()
    const createSpy = jest.spyOn(prismaAdapterStub, "create")
    const registrationFake = StudentRegistrationObjectMother.withoutRaField()
    await sut.add(registrationFake)

    expect(createSpy).toHaveBeenCalledTimes(1)
    expect(createSpy).not.toHaveBeenCalledWith({})

  })

  test.todo("Should throw 500 if DbAddNewRegister fails")
  
  test.todo("Should return an registration on success")

})
