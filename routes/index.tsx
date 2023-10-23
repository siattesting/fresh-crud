import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div>
      <h2>Index page</h2>
      <p>count is {count}</p>
    </div>
  );
}
