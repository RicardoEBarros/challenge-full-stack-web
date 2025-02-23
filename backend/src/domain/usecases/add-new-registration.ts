import { StudentCreationModel } from "../models/student-creation-model"

export interface AddNewRegistration {
  add(params: StudentCreationModel): Promise<void>
}
