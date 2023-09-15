import { createMachine, assign } from "xstate";

interface Context {
  count: number;
}

type Events = { type: "TOGGLE" };

export const machine = createMachine<Context, Events>({
  id: "toggle",
  initial: "inactive",
  context: {
    count: 0,
  },
  states: {
    inactive: {
      on: { TOGGLE: "active" },
    },
    active: {
      entry: assign({ count: (ctx) => ctx.count + 1 }),
      on: { TOGGLE: "inactive" },
    },
  },
  predictableActionArguments: true,
});
