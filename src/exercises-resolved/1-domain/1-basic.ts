import { Equal, Expect } from "@type-challenges/utils";

/*
  1 - Basic
  -------
  
  ### Exercise

  Create a basic type with the following fields:
    - title
    - description
*/

/* _____________ Your Code Here _____________ */

type Task = {
  title: string;
  description: string;
};

/* _____________ Test Cases _____________ */

type testCases = [Expect<Equal<ExpectedTask, Task>>];

interface ExpectedTask {
  title: string;
  description: string;
}
