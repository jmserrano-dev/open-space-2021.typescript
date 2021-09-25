import { Alike, Equal, Expect } from "@type-challenges/utils";

/*
  3 - Domain
  -------
  
  ### Exercise

  Apply generic types for create the following types:
    - Create<T>
    - Read<T>
    - Update<T>
    - Delete<T>
  
  Apply 'conditional types' and create a new yype CRUD<T, O>
*/

/* _____________ Your Code Here _____________ */

type Identifier = {
  id: number;
};

type Task = {
  id: number;
  title: string;
  description?: string;
};

type Create<Type extends Identifier> = Omit<Type, "id">;

type Read<Type extends Identifier> = Type;

type Update<Type extends Identifier> = Pick<Type, "id"> & Partial<Type>;

type Delete<Type extends Identifier> = Pick<Type, "id">;

type CRUD<
  Type extends Identifier,
  Operation extends "Create" | "Read" | "Update" | "Delete"
> = Operation extends "Create"
  ? Create<Type>
  : Operation extends "Read"
  ? Read<Type>
  : Operation extends "Update"
  ? Update<Type>
  : Delete<Type>;

export { Task, CRUD };

/* _____________ Test Cases _____________ */

type testCases = [
  Expect<Alike<ExpectedCreateTask, Create<Task>>>,
  Expect<Alike<ExpectedReadTask, Read<Task>>>,
  Expect<Alike<ExpectedUpdateTask, Update<Task>>>,
  Expect<Alike<ExpectedDeleteTask, Delete<Task>>>,

  Expect<Alike<ExpectedCreateTask, CRUD<Task, "Create">>>,
  Expect<Alike<ExpectedReadTask, CRUD<Task, "Read">>>,
  Expect<Alike<ExpectedUpdateTask, CRUD<Task, "Update">>>,
  Expect<Alike<ExpectedDeleteTask, CRUD<Task, "Delete">>>
];

interface ExpectedCreateTask {
  title: string;
  description?: string;
}

interface ExpectedReadTask {
  id: number;
  title: string;
  description?: string;
}

type ExpectedUpdateTask = {
  id: number;
  title?: string;
  description?: string;
};

interface ExpectedDeleteTask {
  id: number;
}
