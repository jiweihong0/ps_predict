import { useState, useEffect } from "react";

export default function useLogin() {
  const [isLogin, setIsLogin] = useState(false);
  const [isToken, setToken] = useState("");

  const login = async (data) => {
    try {
      const response = await fetch("http://localhost:8500/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        setToken(responseData.access_token);
        localStorage.setItem("token", responseData.access_token);
        setIsLogin(true);
      } else {
        setIsLogin(false);
        setToken("");
        localStorage.removeItem("token");
      }
    } catch (error) {
      console.error("Authentication error:", error);
      setIsLogin(false);
      setToken("");
      localStorage.removeItem("token");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
  }, []);

  return { isLogin, isToken, login };
}
