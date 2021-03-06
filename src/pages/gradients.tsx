import { NextPage } from "next";
import Container from "@/components/container";
import { getGradients } from "@/lib/gradients";

[
  [
    "from-amber-500",
    "from-blue-500",
    "from-cyan-500",
    "from-emerald-500",
    "from-fuchsia-500",
    "from-green-500",
    "from-indigo-500",
    "from-sky-500",
    "from-lime-500",
    "from-orange-500",
    "from-pink-500",
    "from-purple-500",
    "from-red-500",
    "from-rose-500",
    "from-teal-500",
    "from-violet-500",
    "from-yellow-500",
  ],
  [
    "via-amber-500",
    "via-blue-500",
    "via-cyan-500",
    "via-emerald-500",
    "via-fuchsia-500",
    "via-green-500",
    "via-indigo-500",
    "via-sky-500",
    "via-lime-500",
    "via-orange-500",
    "via-pink-500",
    "via-purple-500",
    "via-red-500",
    "via-rose-500",
    "via-violet-500",
    "via-teal-500",
    "via-yellow-500",
  ],
  [
    "to-amber-500",
    "to-blue-500",
    "to-cyan-500",
    "to-emerald-500",
    "to-fuchsia-500",
    "to-green-500",
    "to-indigo-500",
    "to-sky-500",
    "to-lime-500",
    "to-orange-500",
    "to-pink-500",
    "to-purple-500",
    "to-red-500",
    "to-rose-500",
    "to-teal-500",
    "to-violet-500",
    "to-yellow-500",
  ],
];

const Gradients: NextPage = function () {
  const all = getGradients();

  return (
    <Container description="A collection of all the gradients that are used on this website." title="Gradients">
      <div className="mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-4">
        {all.map((gradient) => (
          <div key={gradient} className={`mb-2 h-16 w-full rounded-md bg-gradient-to-r ${gradient}`} />
        ))}
      </div>
    </Container>
  );
};

export default Gradients;
