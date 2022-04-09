import create from "zustand";
import { directusUrl, tokenKey } from "../static";

export const useAuth = create((set) => {
  return {
    token: "",
    auth: false,
    login: (newToken) => {
      set({ auth: true, token: newToken });
    },
    logout: () => {
      set({ auth: false, token: "" });
      fetch(directusUrl + "/auth/logout", {
        method: "POST",
        body: JSON.stringify({
          refresh_token: localStorage.getItem(tokenKey),
        }),
      }).then(() => {
        localStorage.removeItem(tokenKey);
      });
    },
  };
});
