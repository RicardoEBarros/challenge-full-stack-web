import { StudentCreationModel } from "@/src/domain/models/student-creation-model"
import { AddNewRegistration } from "@/src/domain/usecases/add-new-registration"
import { DbAddNewRegister } from "@/src/infra/protocols/db-add-new-register"

export class DbAddRegistrationPostgresRepository<T> implements AddNewRegistration<T> {

  constructor(private readonly dbAddNewRegister: DbAddNewRegister<T>) {}

  async add(registration: StudentCreationModel): Promise<T> {
    
    return await this.dbAddNewRegister.create({
      data: registration
    })

  }
  
}
