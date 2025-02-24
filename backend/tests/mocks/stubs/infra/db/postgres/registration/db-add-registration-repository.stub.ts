import { StudentCreationModel } from "@/src/domain/models/student-creation-model"
import { AddNewRegistration } from "@/src/domain/usecases/add-new-registration"
import { StudentRegistrationObjectMother } from "@/tests/mocks/common/student-registration.mother"

export class DbAddRegistrationPostgresRepositoryStub<T> implements AddNewRegistration<T> {

  async add(registration: StudentCreationModel): Promise<T> {
    return Promise.reject(StudentRegistrationObjectMother.valid())
  }
  
}
