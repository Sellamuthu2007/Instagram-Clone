import Sidebar from "./components/sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-4">
        <Outlet /> 
      </div>
    </div>
  );
}
