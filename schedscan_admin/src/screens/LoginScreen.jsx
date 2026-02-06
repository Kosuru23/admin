import { useNavigate } from "react-router-dom"; 

export default function LoginScreen({ onLogin }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin();
    navigate("/");  
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-80">
        <h1 className="text-xl font-bold mb-6 text-center">SchedScan Admin</h1>

        <input
          className="w-full mb-3 px-3 py-2 border rounded-lg"
          placeholder="Username"
        />
        <input
          type="password"
          className="w-full mb-4 px-3 py-2 border rounded-lg"
          placeholder="Password"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-slate-600 text-white py-2 rounded-lg hover:bg-slate-700"
        >
          Login
        </button>
      </div>
    </div>
  );
}
