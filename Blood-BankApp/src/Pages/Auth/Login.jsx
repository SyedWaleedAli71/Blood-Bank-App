// import React, { useState } from "react";
// import "./Login.css";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from "../../firebase";
// import { doc, getDoc } from "firebase/firestore";
// import { Link, useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.email || !formData.password) {
//       alert("Please enter email and password!");
//       return;
//     }

//     try {
//       setLoading(true);

//       // Firebase Authentication Login
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         formData.email.trim().toLowerCase(),
//         formData.password
//       );

//       const user = userCredential.user;

//       // Get user data from Firestore
//       const userDoc = await getDoc(doc(db, "users", user.uid));

//       if (!userDoc.exists()) {
//         alert("User profile not found!");
//         return;
//       }

//       const userData = userDoc.data();

//       // Role based navigation
//       if (userData.role === "admin") {
//         alert("Admin Login Successful!");
//         navigate("/dashboard");
//       } else {
//         alert("Login Successful!");
//         navigate("/user-dashboard");
//       }

//     } catch (error) {
//       console.error(error);

//       if (error.code === "auth/invalid-credential") {
//         alert("Invalid email or password!");
//       } else if (error.code === "auth/user-not-found") {
//         alert("User does not exist!");
//       } else if (error.code === "auth/wrong-password") {
//         alert("Wrong password!");
//       } else {
//         alert(error.message);
//       }

//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-container">

//       <div className="login-card">

//         <h1>🩸 Blood Bank</h1>

//         <p>Welcome Back! Login to your account</p>

//         <form onSubmit={handleSubmit}>

//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={handleChange}
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//           />

//           <button type="submit" disabled={loading}>
//             {loading ? "Logging in..." : "Login"}
//           </button>

//         </form>

//         <p className="signup-text">
//           Don't have an account?{" "}
//           <Link to="/signup" className="signup-link">
//             Create Account
//           </Link>
//         </p>

//       </div>

//     </div>
//   );
// };

// export default Login;
// 
import React, { useState } from "react";
import "./Login.css";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // LOGIN
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please enter email and password!");
      return;
    }

    try {
      setLoading(true);

      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email.trim().toLowerCase(),
        formData.password
      );

      const user = userCredential.user;

      // Get user information from Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));

      if (!userDoc.exists()) {
        alert("User profile not found!");
        return;
      }

      const userData = userDoc.data();

      // Role based redirect
      if (userData.role === "admin") {
        alert("Admin Login Successful!");
        navigate("/dashboard");
      } else {
        alert("Login Successful!");
        navigate("/user-dashboard");
      }
    } catch (error) {
      console.error(error);

      if (
        error.code === "auth/invalid-credential" ||
        error.code === "auth/wrong-password"
      ) {
        alert("Invalid email or password!");
      } else if (error.code === "auth/user-not-found") {
        alert("User does not exist!");
      } else if (error.code === "auth/too-many-requests") {
        alert("Too many attempts. Please try again later.");
      } else {
        alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // FORGOT PASSWORD
  // =========================
  const handleForgotPassword = async () => {
    const email = formData.email.trim().toLowerCase();

    if (!email) {
      alert("Please enter your email address first!");
      return;
    }

    try {
      setResetLoading(true);

      await sendPasswordResetEmail(auth, email);

      alert(
        "Password reset email sent successfully! Please check your email."
      );
    } catch (error) {
      console.error(error);

      if (error.code === "auth/user-not-found") {
        alert("No account found with this email!");
      } else if (error.code === "auth/invalid-email") {
        alert("Please enter a valid email address!");
      } else {
        alert(error.message);
      }
    } finally {
      setResetLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h1>🩸 Blood Bank</h1>

        <p>Welcome Back! Login to your account</p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        {/* Forgot Password */}
        <button
          type="button"
          className="forgot-password"
          onClick={handleForgotPassword}
          disabled={resetLoading}
        >
          {resetLoading
            ? "Sending reset email..."
            : "Forgot Password?"}
        </button>

        {/* Signup */}
        <p className="signup-text">
          Don't have an account?{" "}
          <Link to="/signup" className="signup-link">
            Create Account
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;