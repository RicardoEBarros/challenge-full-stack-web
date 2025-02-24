import { StudentCreationModel } from "@/src/domain/models/student-creation-model"
import { StudentRegistrationModel } from "@/src/domain/models/student-registration-model"
import { AddNewRegistration } from "@/src/domain/usecases/add-new-registration"
import { DbAddNewRegister } from "@/src/infra/protocols/db-add-new-register"

export class DbAddRegistrationPostgresRepository implements AddNewRegistration {

  constructor(private readonly dbAddNewRegister: DbAddNewRegister) {}

  async add(registration: StudentCreationModel): Promise<StudentRegistrationModel> {
    await this.dbAddNewRegister.create({ data: "fake" })
    return null
  }
  
}
