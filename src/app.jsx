import { useState } from "preact/hooks";
import DesktopSidebar from "./components/layout/DesktopSidebar";
import MobileSidebar from "./components/layout/MobileSidebar";
import MobileHeader from "./components/layout/MobileHeader";
import Dashboard from "./pages/Dashboard";

export function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <MobileSidebar {...{ sidebarOpen, setSidebarOpen }} />
      <DesktopSidebar />
      <div className='md:pl-64 flex flex-col flex-1'>
        <MobileHeader {...{ sidebarOpen, setSidebarOpen }} />
        <main className='flex-1'>
          <Dashboard />
        </main>
      </div>
    </div>
  );
}
