import React, { createContext, useState, ReactNode } from 'react';

// User type
type User = {
  username: string;
  password: string;
  sex: string;
  image: string;
};

// Context type
type AuthContextType = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  updateUser: (data: Partial<User>) => void; // update user info
};

// Context with default values
export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  updateUser: () => {},
});

// Props for provider
type Props = {
  children: ReactNode;
};

// AuthProvider component
export default function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);

  // login function
  function login(newUser: User) {
    setUser(newUser);
  }

  // logout function
  function logout() {
    setUser(null);
  }

  // updateUser function
  function updateUser(data: Partial<User>) {
    // Merge new data with existing user
    setUser(prev => (prev ? { ...prev, ...data } : null));
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}
