import { create } from "zustand";

interface AlertModalContent {
  title: string;
  description: string;
  changeText: (title: string, description: string) => void;
}

export const useAlertModalStore = create<AlertModalContent>((set) => ({
  title: "",
  description: "",
  changeText: (title: string, description: string) => set({ title, description }),
}));

interface UserTypeStorage {
  type: string;
  isEmployer: boolean;
  changeType: (type: string) => void;
}

export const userTypeStore = create<UserTypeStorage>((set) => ({
  type: localStorage.getItem("userType") || "",
  isEmployer: localStorage.getItem("userType") === "employer",
  changeType: (type: string) => set({ type, isEmployer: type === "employer" }),
}));
