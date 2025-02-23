import { StudentCreationModel } from "@/src/domain/models/student-creation-model"
import { AddNewRegistration } from "@/src/domain/usecases/add-new-registration"

export class AddNewRegistrationStub implements AddNewRegistration {
  async add(params: StudentCreationModel): Promise<void> {
    Promise.resolve(null)
  }
}
