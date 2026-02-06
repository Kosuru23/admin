export default function AnalyticsScreen() {
  // Dummy data for demonstration
  const stats = [
    { title: "Total Users", value: 1245 },
    { title: "Active Users", value: 842 },
    { title: "New Signups", value: 56 },
    { title: "Revenue", value: "$12,340" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Analytics</h1>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between"
          >
            <p className="text-gray-500">{stat.title}</p>
            <p className="text-xl font-bold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Dummy chart */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-gray-500 mb-4">User Growth (Last 7 Days)</p>
        <div className="h-64 flex items-end gap-2">
          {/* Simple bar chart */}
          {[20, 35, 25, 50, 40, 30, 45].map((val, i) => (
            <div
              key={i}
              className="bg-slate-600 rounded w-6"
              style={{ height: `${val * 2}px` }}
              title={`${val} users`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
