import { useCallback } from "preact/hooks";
import { directusUrl, tokenKey } from "../static";
import { tryRefresh } from "../utils";
import { useAuth } from "./useAuth";
import { useSnack } from "./useSnack";

export const useLoginSubmit = () => {
  const login = useAuth((state) => state.login);
  const logout = useAuth((state) => state.logout);
  const setSnackContent = useSnack((state) => state.setSnackContent);

  const loginSubmit = useCallback(async (event) => {
    event.preventDefault();
    try {
      const form = new FormData(event.target);
      let data = Object.fromEntries(form.entries());
      const res = await fetch(directusUrl + "/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (res.status > 299) throw Error();
      ({ data } = await res.json());
      setSnackContent([
        "success",
        "Successfully Logged In",
        "Welcome back gorgeous reporter!",
      ]);
      login(data.access_token);
      localStorage.setItem(tokenKey, data.refresh_token);
      setTimeout(() => {
        tryRefresh(data.refresh_token, login, logout);
      }, data.expires - 1000);
    } catch (error) {
      setSnackContent([
        "error",
        "An Error Occured",
        "You might miss something on your login form",
      ]);
    }
  }, []);

  return { loginSubmit };
};
