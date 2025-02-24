import { StudentCreationModel } from "../models/student-creation-model"
import { StudentRegistrationModel } from "../models/student-registration-model"

export interface AddNewRegistration {
  add(registration: StudentCreationModel): Promise<StudentRegistrationModel>
}
