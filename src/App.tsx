import "./App.css";
import { Sidebar } from "./components/ui/sidebar/Sidebar";

function App() {
  return (
    <div class="flex h-dvh w-full">
      <Sidebar />

      <main>
        Hello World!
      </main>
    </div>
  );
}

export default App;
