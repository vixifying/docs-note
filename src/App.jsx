import Foreground from "./Foreground";
import Background from "./components/Background";

export default function App() {
  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <Background />
      <Foreground />
    </div>
  );
}
