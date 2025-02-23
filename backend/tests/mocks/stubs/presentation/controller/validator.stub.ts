import { Validator } from "@/src/data/protocols/validator";

export class ValidatorStub implements Validator {

  validate(data: any): Error | null {
    return null
  }
  
}