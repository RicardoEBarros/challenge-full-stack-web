import { StudentRegistrationModel } from "@/src/domain/models/student-registration-model"
import faker from "faker"

export class StudentRegistrationBuilder {

  private studentFake: StudentRegistrationModel | null = null

  constructor() {
    this.studentFake = {
      name: faker.name.firstName(),
      email: faker.internet.email(),
      cpf: faker.random.alphaNumeric(11),
      ra: faker.random.number({ max: 5 })
    }
  }

  static aStudentRegistrationBuilder(): StudentRegistrationBuilder {
    return new StudentRegistrationBuilder
  }

  build(): StudentRegistrationModel {
    return this.studentFake
  }

}
