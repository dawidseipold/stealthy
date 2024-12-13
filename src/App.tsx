import { ParentComponent } from "solid-js";
import { PrimarySidebar } from "./components/layout/primary-sidebar/PrimarySidebar";


const App: ParentComponent = (props) => {

  return (
    <div class="flex max-h-dvh">
      <PrimarySidebar />

      {props.children}
    </div>
  )
}

export default App
