import { StudentRegistrationModel } from "../models/student-registration-model"

export interface AddNewRegistration {
  add(params: StudentRegistrationModel): Promise<void>
}
