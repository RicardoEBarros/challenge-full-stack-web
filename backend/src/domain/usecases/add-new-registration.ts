import { StudentCreationModel } from "../models/student-creation-model"

export interface AddNewRegistration<T> {
  add(registration: StudentCreationModel): Promise<T>
}
