import { StudentRegistrationModel } from "@/src/domain/models/student-registration-model"

export class StudentRegistrationBuilder {

  private studentFake: StudentRegistrationModel | null = null

  constructor() {
    this.studentFake = {
      name: "any_name",
      email: "any_email@mail.com",
      cpf: "any_cpf",
      ra: 1234
    }
  }

  static aStudentRegistrationBuilder(): StudentRegistrationBuilder {
    return new StudentRegistrationBuilder
  }

  hideRa(): StudentRegistrationBuilder {
    Reflect.deleteProperty(this.studentFake, "ra")
    return this
  }

  build(): StudentRegistrationModel {
    return this.studentFake
  }

}
