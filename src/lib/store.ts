import { create } from "zustand"

type User = {
  id: string
  name: string
  email: string
}

type AuthStore = {
  user: User | null
  isLoggedIn: boolean
  login: (user: User) => void
  logout: () => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLoggedIn: false,
  login: (user) => set({ user, isLoggedIn: true }),
  logout: () => set({ user: null, isLoggedIn: false }),
}))

