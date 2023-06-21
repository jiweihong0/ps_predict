import React, { useContext, useState, useEffect } from 'react';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    console.log(email, password);
  }

  function login(email, password) {
    console.log(email, password);
  }

  function logout() {
    console.log('logout');
  }

  useEffect(() => {
    // 假設這是一個異步操作，例如從後端獲取當前使用者資訊
    // 假設 fetchCurrentUser 是一個異步函數，返回當前使用者的資訊
    async function fetchCurrentUser() {
      try {
        // 執行獲取當前使用者的操作
        const user = 132;

        setCurrentUser(user); // 設置當前使用者
        setLoading(false); // 設置載入狀態為完成
      } catch (error) {
        console.log('Failed to fetch current user:', error);
      }
    }

    fetchCurrentUser();
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  if (loading) {
    // 在載入狀態時可以顯示一個載入中的訊息或元件
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
