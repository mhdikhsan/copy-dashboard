import create from "zustand";

export const useSnack = create((set, get) => ({
  visible: false,
  content: [
    "success",
    "Successfully saved!",
    "Anyone with a link can now view this file.",
  ],
  openSnack: () => {
    set({ visible: true });
    setTimeout(() => {
      set({ visible: false });
    }, 3000);
  },
  closeSnack: () => set({ visible: false }),
  setSnackContent: (newContent) => {
    set({ content: newContent });
    get().openSnack();
  },
}));
