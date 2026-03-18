import React, { createContext, useState, ReactNode } from 'react';

// user type
type User = {
  username: string;
  password: string;
  sex: string;
  image: string;
};

// context type
type AuthContextType = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

// context
export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

// props
type Props = {
  children: ReactNode;
};

export default function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);

  // simply update the user
  function login(user: User) {
    setUser(user);
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
