import { Equal, Expect } from "@type-challenges/utils";

/*
  3 - Domain
  -------
  
  ### Exercise

  Create a CRUD model from 'task'
*/

/* _____________ Your Code Here _____________ */

type CreateTask = any;

type ReadTask = any;

type UpdateTask = any;

type DeleteTask = any;

/* _____________ Test Cases _____________ */

type testCases = [
  Expect<Equal<ExpectedCreateTask, CreateTask>>,
  Expect<Equal<ExpectedReadTask, ReadTask>>,
  Expect<Equal<ExpectedUpdateTask, UpdateTask>>,
  Expect<Equal<ExpectedDeleteTask, DeleteTask>>
];

interface ExpectedCreateTask {
  title: string;
  description?: string;
}

type ExpectedReadTask = {
  id: number;
  title: string;
  description?: string;
};

type ExpectedUpdateTask = {
  id: number;
  title?: string;
  description?: string;
};

type ExpectedDeleteTask = {
  id: number;
};
