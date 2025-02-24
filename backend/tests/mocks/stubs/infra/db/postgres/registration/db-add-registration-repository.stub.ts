import { StudentCreationModel } from "@/src/domain/models/student-creation-model";
import { StudentRegistrationModel } from "@/src/domain/models/student-registration-model";
import { AddNewRegistration } from "@/src/domain/usecases/add-new-registration";
import { StudentRegistrationObjectMother } from "@/tests/mocks/common/student-registration.mother";

export class DbAddRegistrationPostgresRepositoryStub implements AddNewRegistration {

  async add(registration: StudentCreationModel): Promise<StudentRegistrationModel> {
    return Promise.reject(StudentRegistrationObjectMother.valid())
  }
  
}
