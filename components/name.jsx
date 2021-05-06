import { useEffect, useState } from "react";

const Name = () => {
  const [name, setName] = useState("SIDDHARTH ADUSUMELLI ");

  useEffect(() => {
    const interval = setInterval(() => {
      setName(() => {
        const nameArray = name.split("");
        nameArray.push(nameArray.shift());
        return nameArray.join("");
      });
    }, 1000);

    return () => clearInterval(interval);
  });

  return <p className="mx-auto mt-6 text-sm text-center">{name}</p>;
};

export default Name;
