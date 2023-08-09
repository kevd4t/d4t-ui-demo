import { RootLayout } from "./layouts/RootLayout";
import { FormLogin } from "./examples/FormLogin";
import { Sidebar } from "./components/sidebar"
import { SidebarContent } from "./components/sidebar/content";

function App() {
  return (
    <RootLayout>
      <Sidebar>
        <SidebarContent>

        </SidebarContent>
      </Sidebar>

      <FormLogin />
    </RootLayout>
  )
}

export default App;
