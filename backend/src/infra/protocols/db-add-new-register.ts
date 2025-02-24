export interface DbAddNewRegister<T> {
  create(params: Record<string, unknown>): Promise<T>
}
