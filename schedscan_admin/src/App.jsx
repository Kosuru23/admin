import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Sidebar from "./components/sidebar/sidebar";
import LoginScreen from "./screens/LoginScreen";

import DashboardScreen from "./screens/DashboardScreen";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      {isAuthenticated ? (
        // 🔒 AUTHENTICATED LAYOUT
        <div className="flex h-screen">
          <Sidebar onLogout={() => setIsAuthenticated(false)} />

          <main className="flex-1 bg-gray-50 p-6 overflow-y-auto">
            <Routes>
              <Route path="/" element={<DashboardScreen />} />
              <Route path="/analytics" element={<AnalyticsScreen />} />
              <Route path="/users" element={<UsersScreen />} />
              <Route path="/calendar" element={<CalendarScreen />} />
              <Route path="/settings" element={<SettingsScreen />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
        </div>
      ) : (
        <Routes>
          <Route
            path="/login"
            element={<LoginScreen onLogin={() => setIsAuthenticated(true)} />}
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
