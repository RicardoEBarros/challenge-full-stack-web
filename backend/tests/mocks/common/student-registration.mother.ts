import { StudentRegistrationModel } from "@/src/domain/models/student-registration-model"
import { StudentRegistrationBuilder } from "./student-registration.builder"
import { StudentCreationModel } from "@/src/domain/models/student-creation-model"

export class StudentRegistrationObjectMother {

  static valid(): StudentRegistrationModel  {
    return StudentRegistrationBuilder
      .aStudentRegistrationBuilder()
      .build()
  }

  static withoutRaField(): StudentCreationModel {
    return StudentRegistrationBuilder
      .aStudentRegistrationBuilder()
      .hideRa()
      .build()
  }

}
