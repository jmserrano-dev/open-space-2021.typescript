import { Equal, Expect } from "@type-challenges/utils";

/*
  1 - Immutable
  -------
  
  ### Exercise

  Create a generic type to make it immutable
*/

/* _____________ Your Code Here _____________ */

type Task = {
  title: string;
  description: string;
};

type Immutable<T> = any;

/* _____________ Example _____________ */

const mutableTask: Task = {
  title: "Mutable task",
  description: "",
};

mutableTask.title = "Title changed";

const inmmutableTask: Immutable<Task> = {
  title: "Mutable task",
  description: "",
};

inmmutableTask.title = "Title changed";

/* _____________ Test Cases _____________ */

type testCases = [Expect<Equal<ExpectedTask, Immutable<Task>>>];

interface ExpectedTask {
  readonly title: string;
  readonly description: string;
}
