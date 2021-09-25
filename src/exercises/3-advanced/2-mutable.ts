import { Equal, Expect } from "@type-challenges/utils";

/*
  1 - Mutable
  -------
  
  ### Exercise

  Create a generic type to make it mutable
*/

/* _____________ Your Code Here _____________ */

type Task = {
  readonly title: string;
  readonly description: string;
};

type Mutable<T> = any;

/* _____________ Example _____________ */

const immutableTask: Task = {
  title: "Mutable task",
  description: "",
};

//@ts-expect-error
immutableTask.title = "Title changed";

const mutableTask: Mutable<Task> = {
  title: "Mutable task",
  description: "",
};

mutableTask.title = "Title changed";

/* _____________ Test Cases _____________ */

type testCases = [Expect<Equal<ExpectedTask, Mutable<Task>>>];

interface ExpectedTask {
  title: string;
  description: string;
}
