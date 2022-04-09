import { useCallback } from "preact/hooks";
import { useSnack, useAuth } from ".";
import { directusUrl } from "../static";
import { nanoid } from "nanoid";
import { formatLanes } from "../utils";

export const useFormSubmit = () => {
  const setSnackContent = useSnack((state) => state.setSnackContent);
  const token = useAuth((state) => state.token);

  const formSubmit = useCallback(
    async (event) => {
      event.target.reportValidity();
      event.preventDefault();
      try {
        const form = new FormData(event.target);
        const data = Object.fromEntries(form.entries());
        data.lanes_blocked = formatLanes(data.lanes_blocked);
        data.unique_id = nanoid();
        const res = await fetch(directusUrl + "/items/accident", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.status > 299) throw Error();
        setSnackContent([
          "success",
          "Property Data Saved",
          "Your accident data successfully submitted",
        ]);
        event.target.reset();
      } catch (error) {
        setSnackContent([
          "error",
          "An Error Occured",
          "You might miss something on your accident data",
        ]);
      }
    },
    [token]
  );

  return { formSubmit };
};
