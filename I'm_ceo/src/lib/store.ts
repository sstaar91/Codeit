import { create } from "zustand";

interface AlertModalContent {
  title: string;
  description: string;
  changeText: (title: string, description: string) => void;
}

export const useAlertModalStore = create<AlertModalContent>((set) => ({
  title: "",
  description: "",
  changeText: (title: string, description: string) =>
    set({ title, description }),
}));
