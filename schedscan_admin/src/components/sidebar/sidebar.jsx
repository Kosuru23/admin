import { NavLink } from "react-router-dom";

export default function Sidebar({ onLogout }) {
  return (
    <aside className="w-64 bg-white border-r flex flex-col">
      <div className="h-20 flex items-center px-6 font-bold text-xl">
        SchedScan
      </div>

      <nav className="flex-1 px-3">
        <NavLink to="/" className="block px-4 py-3 rounded-lg">Dashboard</NavLink>
        <NavLink to="/analytics" className="block px-4 py-3 rounded-lg">Analytics</NavLink>
        <NavLink to="/users" className="block px-4 py-3 rounded-lg">Users</NavLink>
        <NavLink to="/calendar" className="block px-4 py-3 rounded-lg">Calendar</NavLink>
        <NavLink to="/settings" className="block px-4 py-3 rounded-lg">Settings</NavLink>
      </nav>

      <div className="p-4 border-t">
        <button
          onClick={onLogout}
          className="w-full bg-slate-600 text-white py-2 rounded-lg hover:bg-slate-700"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
