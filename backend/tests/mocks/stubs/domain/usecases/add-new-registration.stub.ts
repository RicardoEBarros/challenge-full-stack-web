import { StudentCreationModel } from "@/src/domain/models/student-creation-model"
import { StudentRegistrationModel } from "@/src/domain/models/student-registration-model"
import { AddNewRegistration } from "@/src/domain/usecases/add-new-registration"
import { StudentRegistrationObjectMother } from "@/tests/mocks/common/student-registration.mother"

export class AddNewRegistrationStub implements AddNewRegistration {
  async add(params: StudentCreationModel): Promise<StudentRegistrationModel> {
    return Promise.resolve(StudentRegistrationObjectMother.valid() as StudentRegistrationModel)
  }
}
