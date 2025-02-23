import { StudentRegistrationModel } from "@/src/domain/models/student-registration-model";
import { StudentRegistrationBuilder } from "./student-registration.builder";

export class StudentRegistrationObjectMother {

  static valid(): StudentRegistrationModel {
    return StudentRegistrationBuilder
      .aStudentRegistrationBuilder()
      .build()
  }

}
