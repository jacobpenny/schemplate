import { useMachine } from "@xstate/react";
import { machine } from "./machines/Toggle.machine";
import styles from "./App.module.scss";

export function App() {
  const [current, send] = useMachine(machine, {
    devTools: true,
  });

  const active = current.matches("active");
  const { count } = current.context;

  return (
    <div>
      <h1 className={styles.heading}>Schemplate</h1>
      <button onClick={() => send({ type: "TOGGLE" })}>
        Click me ({active ? "✅" : "❌"})
      </button>{" "}
      <code>
        Toggled <strong>{count}</strong> times
      </code>
    </div>
  );
}
