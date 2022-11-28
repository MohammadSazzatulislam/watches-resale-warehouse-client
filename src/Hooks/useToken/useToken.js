import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (email) {
      fetch(`https://watches-resale-warehouse-server.vercel.app/jwt/${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            localStorage.setItem("watchToken", data.token);
            setToken(data.token);
          }
        })
        .catch((err) => console.log(err.message));
    }
  }, [email]);
  return [token];
};

export default useToken;
