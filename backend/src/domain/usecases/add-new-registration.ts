import { StudentCreationModel } from "../models/student-creation-model"
import { StudentRegistrationModel } from "../models/student-registration-model"

export interface AddNewRegistration {
  add(params: StudentCreationModel): Promise<StudentRegistrationModel>
}
