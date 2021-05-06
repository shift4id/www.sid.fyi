import { Clock } from "react-feather";

import useTime from "@/lib/hooks/useTime";

const Time = () => {
  const now = useTime();
  const time = now.toFormat("h:mm:ss a");
  const date = now.toFormat("LLLL d, y");

  return (
    <p className="flex items-center text-sm">
      <span className="hidden mr-2 md:inline-block">
        <Clock width="16" height="16" />
      </span>
      <span>
        It is️ {time} on {date} in California
      </span>
    </p>
  );
};

export default Time;
