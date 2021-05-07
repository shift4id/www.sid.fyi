import { DateTime } from "luxon";
import { useEffect, useState } from "react";

const getTime = () => DateTime.now().setZone("America/Los_Angeles");

const useTime = (refreshFrequency = 250) => {
  const [now, setNow] = useState(getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      if (getTime().get("second") !== now.get("second")) setNow(getTime());
    }, refreshFrequency);
    return () => clearInterval(interval);
  });

  return now;
};

export default useTime;
