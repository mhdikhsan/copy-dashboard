import { differenceInMinutes } from "date-fns";
import { useCallback, useState } from "preact/hooks";
import { timeRelatedField } from "../static";

export const useRecalculateDuration = () => {
  const [duration, setDuration] = useState(0);

  const recalculateDuration = useCallback(() => {
    const elements = [];
    timeRelatedField.forEach(({ name }) => {
      elements.push(document.getElementById(name));
    });
    const startTimestamp = new Date(
      `${elements[0].value}, ${elements[1].value}`
    );
    const endTimestamp = new Date(`${elements[2].value}, ${elements[3].value}`);
    endTimestamp &&
      startTimestamp &&
      setDuration(differenceInMinutes(endTimestamp, startTimestamp));
  }, []);

  return { duration, recalculateDuration };
};
