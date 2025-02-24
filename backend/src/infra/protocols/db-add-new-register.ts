export interface DbAddNewRegister {
  create(params: Record<string, unknown>): Promise<Record<string, unknown>>
}
