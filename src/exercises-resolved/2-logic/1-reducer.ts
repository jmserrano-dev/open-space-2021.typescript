import { Equal, Expect, ExpectValidArgs, IsTrue } from "@type-challenges/utils";
import { CRUD, Task } from "../1-domain/6-generics";

/*
  1 - Reducer
  -------
  
  ### Exercise

  Create a type for task reducer:
    - create a type for 'state'
    - create a type for 'action'
      - CRUD operations
      - Tip: use 'union types'
    - the reducer function should return the 'state' type
*/

/* _____________ Your Code Here _____________ */

type StateTaskReducer = {
  tasks: Task[];
};

type ActionTaskReducer<T extends Task = Task> =
  | {
      type: "CREATE";
      payload: CRUD<T, "Create">;
    }
  | {
      type: "UPDATE";
      payload: CRUD<T, "Update">;
    }
  | {
      type: "DELETE";
      payload: CRUD<T, "Delete">;
    };

type TaskReducer = (
  state: StateTaskReducer,
  action: ActionTaskReducer
) => StateTaskReducer;

export { TaskReducer };

/* _____________ Example _____________ */

const taskReducer: TaskReducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      const taskFields = action.payload;
      const newTaskIdentifier = Math.max(...state.tasks.map((x) => x.id)) + 1;
      const newTask = { id: newTaskIdentifier, ...taskFields };

      return { ...state, tasks: [...state.tasks, newTask] };
    }

    default:
      return state;
  }
};

/* _____________ Test Cases _____________ */

type testCases = [
  IsTrue<
    ExpectValidArgs<TaskReducer, [StateReducerExpected, ActionReducerExpected]>
  >,
  Expect<Equal<ReturnType<TaskReducer>, StateReducerExpected>>
];

interface StateReducerExpected {
  tasks: Task[];
}

type ActionReducerExpected<T extends Task = Task> =
  | {
      type: "CREATE";
      payload: CRUD<T, "Create">;
    }
  | {
      type: "UPDATE";
      payload: CRUD<T, "Update">;
    }
  | {
      type: "DELETE";
      payload: CRUD<T, "Delete">;
    };
