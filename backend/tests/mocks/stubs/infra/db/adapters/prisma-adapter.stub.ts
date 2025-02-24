import { DbAddNewRegister } from "@/src/infra/protocols/db-add-new-register"

export class PrismaAdapterStub implements DbAddNewRegister {
  
  async create(params: Record<string, unknown>): Promise<Record<string, unknown>> {
    return null
  }

}
