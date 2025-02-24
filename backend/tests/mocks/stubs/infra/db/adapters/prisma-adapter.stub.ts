import { DbAddNewRegister } from "@/src/infra/protocols/db-add-new-register"
import { StudentRegistrationObjectMother } from "@/tests/mocks/common/student-registration.mother"

export class PrismaAdapterStub<T> implements DbAddNewRegister<T> {
  
  async create(params: Record<string, unknown>): Promise<T> {
    return Promise.resolve(StudentRegistrationObjectMother.valid() as T)
  }

}
