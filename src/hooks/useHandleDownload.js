// import { useAuth } from "./useAuth";
// import { directusUrl } from "../static";
import { useSnack } from "./useSnack";

export const useHandleDownload = () => {
  // const token = useAuth((state) => state.token);
  const setSnackContent = useSnack((state) => state.setSnackContent);

  const handleDownload = async (event) => {
    event.preventDefault();
    // const form = new FormData(event.target);
    // const data = Object.fromEntries(form.entries());
    // try {
    //   window.location.assign(
    //     directusUrl +
    //       "/items/accident?" +
    //       `filter[created_at][_between]=[${data.from},${data.to}]` +
    //       (data.reporter ? `&filter[reporter.id][_eq]=${data.reporter}` : "") +
    //       `&access_token=${token}` +
    //       "&export=csv"
    //   );
    // } catch (error) {
    setSnackContent([
      "error",
      "An Error Occured",
      "Oops, something went wrong",
    ]);
    // }
  };

  return { handleDownload };
};
