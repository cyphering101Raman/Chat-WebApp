import { create } from 'zustand'
import axiosInstance from '../utils/axiosInstance'

export const useAuthStore = create((set) => ({
  authUser: null,
  userStatus: "idle",
  isAuthLoading: false,

  signup: async (userData) => {
    set({ isAuthLoading: true })
    try {
      const res = await axiosInstance.post("/auth/signup", userData)
      set({ authUser: res.data, userStatus: "authenticated" })
      return res.data.data;
    } catch (error) {
      const msg = error?.response?.data?.message || "Signup failed";
      set({ userStatus: "unauthenticated" })
      throw new Error(msg);
    } finally {
      set({ isAuthLoading: false })
    }
  },

  login: async (userData) => {
    set({ isAuthLoading: true })
    try {
      const res = await axiosInstance.post("/auth/login", userData)
      set({ authUser: res.data, userStatus: "authenticated" })
      return res.data.data;
    } catch (error) {
      const msg = error?.response?.data?.message || "Login failed";
      set({ userStatus: "unauthenticated" })
      throw new Error(msg);
    } finally {
      set({ isAuthLoading: false })
    }
  },


  logout: async () => {
    set({ isAuthLoading: true });
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null, userStatus: "unauthenticated" });
      return true;
    } catch (error) {
      const msg = error?.response?.data?.message || "Logout failed";
      throw new Error(msg);
    } finally {
      set({ isAuthLoading: false });
    }
  },

  checkAuth: async () => {
    set({ isAuthLoading: true });
    try {
      const { data } = await axiosInstance.get("/auth/check")
      set({ authUser: data, userStatus: "authenticated" })
    } catch (error) {
      set({ authUser: null, userStatus: "unauthenticated" })
    } finally{
      set({ isAuthLoading: false });
    }
  },


}))