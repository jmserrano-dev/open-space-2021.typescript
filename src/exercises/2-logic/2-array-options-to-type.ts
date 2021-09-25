import { Equal, Expect } from "@type-challenges/utils";

/*
  2 - Array options to type

  -------
  
  ### Exercise

  Create a type 'Available options' which is the union of the values of the array
*/

/* _____________ Your Code Here _____________ */

const availableOptions = ["option-1", "option-2"];

type AvailableOptions = any;

/* _____________ Test Cases _____________ */

type testCases = [Expect<Equal<AvailableOptions, ExpectedAvailableOptions>>];

type ExpectedAvailableOptions = "option-1" | "option-2";
