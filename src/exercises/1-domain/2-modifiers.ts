import { Equal, Expect } from "@type-challenges/utils";

/*
  2 - Domain
  -------
  
  ### Exercise

  Add to 'task' type the following changes:
    - add a 'identifier' field
    - 'title' must be required
    - 'title' must be required
    - 'description' is optional
*/

/* _____________ Your Code Here _____________ */

type Task = {
  title: string;
  description: string;
};

/* _____________ Test Cases _____________ */

type testCases = [Expect<Equal<ExpectedTask, Task>>];

interface ExpectedTask {
  id: number;
  title: string;
  description?: string;
}
