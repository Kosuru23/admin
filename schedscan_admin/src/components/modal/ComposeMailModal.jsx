import React, { useState, useEffect } from 'react';
import { Send, X, ChevronDown } from 'lucide-react';

const TEMPLATES = {
  custom: { subject: "", body: "" },
  deactivation: {
    subject: "Account Deactivation Notice - SchedScan",
    body: "Hi {name},\n\nWe are writing to inform you that your SchedScan account has been deactivated by an administrator. As a result, you will no longer be able to log in or access your schedules.\n\nIf you believe this is a mistake, please reply to this email."
  },
  reactivation: {
    subject: "Your SchedScan Account is Now Active",
    body: "Hi {name},\n\nGood news! Your SchedScan account has been reactivated. You can now log in and continue managing your schedules as usual.\n\nWelcome back!"
  },
  schedule_issue: {
    subject: "Action Required: Schedule Scan Issue",
    body: "Hi {name},\n\nWe noticed an issue with your recent schedule scan. The image appears to be blurry or incomplete. Please log in and re-upload a clear copy of your schedule so we can process it correctly."
  }
};

export default function ComposeMailModal({ isOpen, onClose, user }) {
  const [template, setTemplate] = useState('custom');
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (user) {
      const selected = TEMPLATES[template];
      setSubject(selected.subject);
      setBody(selected.body.replace("{name}", user.name));
    }
  }, [template, user]);

  if (!isOpen || !user) return null;

  const handleSend = () => {
    console.log(`Sending email to ${user.email}`, { subject, body });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/20" onClick={onClose} />
      
      <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl flex flex-col max-h-[90vh]">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-bold text-slate-900">Compose Message</h3>
            <p className="text-sm text-slate-500">Sending to: <span className="font-semibold text-indigo-600">{user.email}</span></p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-xl text-gray-400"><X size={20} /></button>
        </div>

        <div className="p-6 space-y-4 overflow-y-auto">
          {/* Template Selector */}
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Choose Template</label>
            <div className="relative">
              <select 
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                value={template}
                onChange={(e) => setTemplate(e.target.value)}
              >
                <option value="custom">Custom Message</option>
                <option value="deactivation">Account Deactivation</option>
                <option value="reactivation">Account Reactivation</option>
                <option value="schedule_issue">Schedule Scan Issue</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
            </div>
          </div>

          {/* Subject Line */}
          <input 
            type="text"
            placeholder="Subject"
            className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-400 font-medium"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          {/* Message Body */}
          <textarea 
            rows="8"
            placeholder="Write your message here..."
            className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-400 resize-none text-slate-700"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 flex gap-3">
          <button onClick={onClose} className="flex-1 px-4 py-3 border border-gray-200 text-slate-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors">
            Discard
          </button>
          <button 
            onClick={handleSend}
            className="flex-1 px-4 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-100"
          >
            <Send size={18} />
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
}