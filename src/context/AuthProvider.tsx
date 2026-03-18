import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }: any) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <AuthContext.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
