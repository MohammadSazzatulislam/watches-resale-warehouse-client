import React, { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  const [isAdmins, setIsAdmin] = useState(false);

  useEffect(() => {
    if (email) {
      fetch(`https://watches-resale-warehouse-server.vercel.app/users/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.isAdmin);
          setIsAdminLoading(false);
        });
    }
  }, [email]);
  return [isAdmins, isAdminLoading];
};

export default useAdmin;
