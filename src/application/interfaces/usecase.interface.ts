export abstract class UseCaseInterface<I, O> {
  abstract execute(input: I): Promise<O>
}
