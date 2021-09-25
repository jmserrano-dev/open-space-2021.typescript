import { Alike, Equal, Expect } from "@type-challenges/utils";

/*
  3 - Domain
  -------
  
  ### Exercise

  Apply intersection types to improve this code
    - intersection: An intersection type is a way of combining
      multiple types into one. This means that you can merge a given
      type A with a type B or more and get back a single type with all properties.

    - Union types allow you to have different types annotation within a given variable.
*/

/* _____________ Your Code Here _____________ */

type TaskIdentifier = {
  id: number;
};

type TaskFields = {
  title: string;
  description?: string;
};

type CreateTask = TaskFields;

type ReadTask = TaskIdentifier & TaskFields;

type UpdateTask = TaskIdentifier & Partial<TaskFields>;

type DeleteTask = TaskIdentifier;

/* _____________ Test Cases _____________ */

type testCases = [
  Expect<Alike<ExpectedCreateTask, CreateTask>>,
  Expect<Alike<ExpectedReadTask, ReadTask>>,
  Expect<Alike<ExpectedUpdateTask, UpdateTask>>,
  Expect<Alike<ExpectedDeleteTask, DeleteTask>>
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
