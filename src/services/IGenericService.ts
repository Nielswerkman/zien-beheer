export interface IGenericService<T> {
  post(object: T): boolean;

  put(object: T): boolean;

  get(id: number): T;

  getAll(): T[];

  delete(id: number): boolean;
}
