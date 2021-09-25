import { Alike, Equal, Expect } from "@type-challenges/utils";

/*
  3 - Domain
  -------
  
  ### Exercise

  Apply clean code y DRY principle
*/

/* _____________ Your Code Here _____________ */

type Task = {
  id: number;
  title: string;
  description?: string;
};

type CreateTask = Omit<Task, "id">;

type ReadTask = Task;

type UpdateTask = Pick<Task, "id"> & Partial<Task>;

type DeleteTask = Pick<Task, "id">;

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
