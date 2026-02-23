import { X, Calendar } from 'lucide-react';

export default function UserDetailsModal({ isOpen, onClose, user }) {
  if (!isOpen) return null;

  // Determine if we should show the schedule section
  const showSchedule = user?.role === "Student" || user?.role === "Faculty";

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto no-scrollbar">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h2 className="text-xl font-bold text-slate-800">User Profile</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} className="text-slate-500" />
          </button>
        </div>

        {user && (
          <div className="space-y-6">
            {/* Header Section */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
                {user.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">{user.name}</h3>
                <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full uppercase tracking-wider">
                  {user.role}
                </span>
              </div>
            </div>

            {/* Basic Info Grid */}
            <div className="grid grid-cols-2 gap-4">
              <DetailItem label="Email Address" value={user.email} />
              <DetailItem label="Status" value={user.status} color={user.status === 'Active' ? 'text-emerald-600' : 'text-slate-400'} />
              <DetailItem label="Joined On" value={user.joinDate} />
            </div>

            {showSchedule && (
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  <h4 className="text-sm font-bold text-slate-800 uppercase tracking-tight">Schedule</h4>
                </div>

                {user.schedule && user.schedule.length > 0 ? (
                  <div className="space-y-3">
                    {user.schedule.map((item, idx) => (
                      <div key={idx} className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                        <div className="flex justify-between items-start mb-1">
                          <p className="font-bold text-indigo-700 text-sm">{item.subject_code}</p>
                          <p className="text-[10px] font-bold text-gray-400 bg-white px-2 py-0.5 rounded-md border border-gray-100">
                            {item.location}
                          </p>
                        </div>
                        <p className="text-xs text-slate-500">
                          {item.start_time} — {item.end_time}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-400 italic bg-gray-50 p-4 rounded-xl text-center">
                    No COR scanned / No active schedule for this user.
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function DetailItem({ label, value, color = "text-slate-600" }) {
  return (
    <div>
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{label}</p>
      <p className={`text-sm font-medium break-all ${color}`}>{value}</p>
    </div>
  );
}