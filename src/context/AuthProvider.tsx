import React, { createContext, useState, ReactNode } from 'react';

// types
type AuthContextType = {
  username: string;
  password: string;
  login: (user: string, pass: string) => void;
  logout: () => void;
};

// context
export const AuthContext = createContext<AuthContextType>({
  username: '',
  password: '',
  login: () => {},
  logout: () => {},
});

// props
type Props = {
  children: ReactNode;
};

export default function AuthProvider({ children }: Props) {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function login(user: string, pass: string) {
    setUsername(user);
    setPassword(pass);
  }

  function logout() {
    setUsername('');
    setPassword('');
  }

  return (
    <AuthContext.Provider
      value={{
        username,
        password,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
