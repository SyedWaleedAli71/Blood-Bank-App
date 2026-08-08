import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import { auth, db } from "../../firebase";

const ProtectedRoute = ({ children, allowedRole }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        setUser(null);
        setRole(null);
        setLoading(false);
        return;
      }

      setUser(currentUser);

      try {
        const userDoc = await getDoc(
          doc(db, "users", currentUser.uid)
        );

        if (userDoc.exists()) {
          setRole(userDoc.data().role);
        } else {
          setRole(null);
        }
      } catch (error) {
        console.error("Error fetching user role:", error);
        setRole(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Firebase abhi user check kar raha hai
  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#230000",
          color: "white",
          fontSize: "20px",
        }}
      >
        Checking access...
      </div>
    );
  }

  // Login nahi hai
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Role allowed nahi hai
  if (allowedRole && role !== allowedRole) {
    if (role === "admin") {
      return <Navigate to="/dashboard" replace />;
    }

    return <Navigate to="/user-dashboard" replace />;
  }

  return children;
};

export default ProtectedRoute;