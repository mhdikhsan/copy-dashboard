import { subDays } from "date-fns";
import create from "zustand";

export const useGraphFilter = create((set) => {
  return {
    fromDate: subDays(new Date(), 7),
    toDate: new Date(),
    reporterId: "",
    setFromDate: (newDate) => set({ fromDate: newDate }),
    setToDate: (newDate) => set({ toDate: newDate }),
    setReporterId: (newId) => set({ reporterId: newId }),
    handleApplyFilter: (event) => {
      event.preventDefault();
      const form = new FormData(event.target);
      const data = Object.fromEntries(form.entries());
      set({
        fromDate: new Date(data.from),
        toDate: new Date(data.to),
        reporterId: data.reporter,
      });
    },
  };
});
