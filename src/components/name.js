import { useEffect, useState } from "react";

export default function Name() {
  const [name, setName] = useState("SIDDHARTH ADUSUMELLI ");

  useEffect(() => {
    const interval = setInterval(() => {
      setName((prev) => {
        const nameArray = prev.split("");
        nameArray.push(nameArray.shift());
        return nameArray.join("");
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [setName]);

  return <p className="mx-auto mt-6 text-sm text-center">{name}</p>;
}
