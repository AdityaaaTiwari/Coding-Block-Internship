import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../../redux/features/auth/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const result = await dispatch(registerUser(form));

    if (registerUser.fulfilled.match(result)) {
      navigate("/login");
    } else {
      alert(result.payload || "Registration failed");
    }
  };

  return (
    <section className="mx-auto max-w-md px-6 py-20">
      <div className="rounded-[24px] bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold">Create Account</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded-[10px] border border-slate-300 p-3 outline-none focus:border-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-[10px] border border-slate-300 p-3 outline-none focus:border-blue-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full rounded-[10px] border border-slate-300 p-3 outline-none focus:border-blue-500"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            className="w-full rounded-[10px] border border-slate-300 p-3 outline-none focus:border-blue-500"
          />

          <button type="submit" className="w-full rounded-[10px] bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
