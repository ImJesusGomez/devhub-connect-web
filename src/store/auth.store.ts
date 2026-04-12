import { queryClient } from "@/DevHubConnect";
import type { User } from "@/interfaces/user.interface";
import { create } from "zustand";

interface AuthState {
  // Properties
  user: User | null;
  accessToken: string | null;

  // Setters
  setToken: (accessToken: string) => void;
  setUser: (user: User) => void;

  // Methods
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: JSON.parse(localStorage.getItem("user") || "null"),
  accessToken: localStorage.getItem("accessToken"),

  setToken: (accessToken) => {
    localStorage.setItem("accessToken", accessToken);
    set({ accessToken });
  },

  setUser: (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    set({ user });
  },

  logout: () => {
    localStorage.clear();
    set({ user: null, accessToken: null });
    queryClient.clear();
  },
}));
