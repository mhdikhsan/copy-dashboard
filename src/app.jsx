import { useState } from "preact/hooks";
import DesktopSidebar from "./components/layout/DesktopSidebar";
import MobileSidebar from "./components/layout/MobileSidebar";
import MobileHeader from "./components/layout/MobileHeader";
import Snackbar from "./components/layout/Snackbar";
import Usage from "./pages/Usage";
import Key from "./pages/Key";
import { Route, Switch } from "wouter-preact";
import LoginForm from "./components/auth/LoginForm";

export function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <MobileSidebar {...{ sidebarOpen, setSidebarOpen }} />
      <DesktopSidebar />
      <div className='md:pl-64 flex flex-col flex-1'>
        <MobileHeader {...{ sidebarOpen, setSidebarOpen }} />
        <main className='flex-1'>
          <Switch>
            <Route path='/key'>
              <Key />
            </Route>
            <Route path='/'>
              <Usage />
            </Route>
          </Switch>
        </main>
      </div>
      <Snackbar />
      <LoginForm />
    </>
  );
}
