export default function DashboardScreen() {
  return (
    <div>
      {/* Page Title */}
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Users" value="1,245" />
        <StatCard title="Active Classes" value="87" />
        <StatCard title="Schedules Scanned" value="3,421" />
        <StatCard title="Pending Issues" value="5" />
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>

        <ul className="space-y-3 text-sm text-gray-600">
          <li>📅 Schedule updated for BSCS 3A</li>
          <li>👤 New user registered: john.doe</li>
          <li>🕒 Faculty announcement posted</li>
          <li>📄 Schedule scan processed</li>
        </ul>
      </div>
    </div>
  );
}

/* Small reusable card */
function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
}
