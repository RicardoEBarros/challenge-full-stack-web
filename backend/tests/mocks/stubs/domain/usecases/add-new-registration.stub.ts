import { StudentRegistrationModel } from "@/src/domain/models/student-registration-model";
import { AddNewRegistration } from "@/src/domain/usecases/add-new-registration";

export class AddNewRegistrationStub implements AddNewRegistration {
  async add(params: StudentRegistrationModel): Promise<void> {
    Promise.resolve(null)
  }
}