import { Equal, Expect } from "@type-challenges/utils";

/*
  3 - Avoid conditionals

  -------
  
  ### Exercise

  Create a object FORMATTER for avoid conditionals
    - Tip: use reserved keyword 'key' and create a strong type
    - Tip: The 'key' should be used as dictionary
*/

/* _____________ Your Code Here _____________ */

type Formatter<T> = (props: T) => string;

type FormatterProps = { title: string };

const ShortFormatComponent: Formatter<FormatterProps> = ({ title }): string => {
  return `Short format ${title}`;
};

const MediumFormatComponent: Formatter<FormatterProps> = ({
  title,
}): string => {
  return `Medium format ${title}`;
};

const FullFormatComponent: Formatter<FormatterProps> = ({ title }): string => {
  return `Full format ${title}`;
};

type FormatterType = any;

const FORMATTER = {};

/* _____________ Example _____________ */

const MyComponent = () => {
  const title = "my title";
  const formatter: FormatterType = "short";

  const Format =
    formatter === "short"
      ? ShortFormatComponent
      : formatter === "medium"
      ? MediumFormatComponent
      : FullFormatComponent;

  return Format({ title });
};

/* _____________ Test Cases _____________ */

type testCases = [Expect<Equal<typeof FORMATTER, ExpectedComponent>>];

type ExpectedComponent = {
  short: Formatter<FormatterProps>;
  medium: Formatter<FormatterProps>;
  full: Formatter<FormatterProps>;
};
