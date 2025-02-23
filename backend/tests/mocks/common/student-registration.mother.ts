import { StudentRegistrationModel } from "@/src/domain/models/student-registration-model";
import { StudentRegistrationBuilder } from "./student-registration.builder";

export class StudentRegistrationObjectMother {

  static valid(): Record<string, any> {
    return StudentRegistrationBuilder
      .aStudentRegistrationBuilder()
      .build()
  }

  static withoutRaField(): Record<string, any> {
    return StudentRegistrationBuilder
      .aStudentRegistrationBuilder()
      .hideRa()
      .build()
  }

}
