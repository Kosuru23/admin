import React, {useState} from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer 
} from 'recharts';
import { TrendingUp } from 'lucide-react';

const chartData = {
  Daily: [
    { name: '08', value: 10 }, { name: '10', value: 35 }, { name: '12', value: 48 },
    { name: '14', value: 70 }, { name: '16', value: 150 }, { name: '19', value: 165 },
  ],
  Weekly: [
    { name: 'Mon', value: 400 }, { name: 'Tue', value: 300 }, { name: 'Wed', value: 600 },
    { name: 'Thu', value: 800 }, { name: 'Fri', value: 500 }, { name: 'Sat', value: 900 },
  ],
  Annually: [
    { name: '2022', value: 2000 }, { name: '2023', value: 4500 }, { name: '2024', value: 8000 },
    { name: '2025', value: 12700 },
  ]
};

export default function DashboardScreen() {
  return (
    <div className="min-h-screen bg-gray-50 no-scrollbar">
      <Header />
      <div className="p-6 mt-4"> {/* Pulled up slightly to overlap header if desired */}
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatCard title="Total Users" value="1,245" />
          <StatCard title="Scanned Schedules" value="87" />
          <StatCard title="Active Sessions" value="3,421" />
        </div>

        {/* Main Analytics Chart */}
        <div className="mb-8">
          <SalesChart />
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4 text-slate-800">Recent Activity</h2>
          <ul className="space-y-4 text-sm text-gray-600">
            <li className="flex items-center gap-3">
              <span className="p-2 bg-green-50 rounded-lg">👤</span> 
              New user registered: john.doe
            </li>
            <li className="flex items-center gap-3">
              <span className="p-2 bg-orange-50 rounded-lg">🕒</span> 
              Faculty announcement posted
            </li>
            <li className="flex items-center gap-3">
              <span className="p-2 bg-purple-50 rounded-lg">📄</span> 
              Schedule scan processed
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function SalesChart() {
  // 2. State to track the active filter
  const [activeFilter, setActiveFilter] = useState('Daily');

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Sales 2025</p>
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-bold text-slate-900">
              {/* Dynamic total based on filter */}
              {activeFilter === 'Daily' ? '₱12.7k' : activeFilter === 'Weekly' ? '₱45.2k' : '₱1.2M'}
            </h2>
            <div className="flex items-center text-emerald-500 text-sm font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
              <TrendingUp size={14} className="mr-1" />
              1.3% <span className="text-[10px] ml-1 text-emerald-600/70 font-medium">VS LAST YEAR</span>
            </div>
          </div>
        </div>
        
        {/* 3. Logic-driven Toggle Buttons */}
        <div className="flex bg-gray-100 p-1 rounded-xl">
          {['Daily', 'Weekly', 'Annually'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeFilter === filter 
                  ? 'bg-slate-900 text-white shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          {/* 4. Pass the specific data array based on activeFilter */}
          <AreaChart data={chartData[activeFilter]} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis 
              dataKey="name" 
              axisLine={false} d
              tickLine={false} 
              tick={{fill: '#94a3b8', fontSize: 12}} 
              dy={10}
            />
            <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
            <Tooltip />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#6366f1" 
              strokeWidth={3} 
              fill="url(#colorSales)" 
              animationDuration={500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 hover:border-indigo-200 transition-colors">
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <p className="text-3xl font-bold mt-1 text-slate-900">{value}</p>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-linear-to-r from-indigo-100 via-blue-50 to-amber-50 p-8 h-48 flex items-end">
      <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>
    </div>
  )
}