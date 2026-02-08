import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../services/firebase";

function AdminRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    async function checkAdmin() {
      const user = auth.currentUser;

      if (!user) {
        setLoading(false);
        return;
      }

      const token = await user.getIdTokenResult();
      setIsAdmin(!!token.claims.admin);
      setLoading(false);
    }

    checkAdmin();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!isAdmin) return <Navigate to="/" />;

  return children;
}

export default AdminRoute;
