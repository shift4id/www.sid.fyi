import Layout from "@/components/layout";
import { getAllGradients } from "@/lib/gradients";

const invis = [
  [
    "from-amber-500",
    "from-blue-500",
    "from-cyan-500",
    "from-emerald-500",
    "from-fuchsia-500",
    "from-green-500",
    "from-indigo-500",
    "from-lightBlue-500",
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
    "via-lightBlue-500",
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
    "to-lightBlue-500",
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

const Gradients = () => {
  const all = getAllGradients();

  return (
    <Layout
      title="Gradients"
      description="Here are a bunch of gradients that use tailwind classes!"
    >
      <div className="grid grid-cols-1 gap-4 mt-4 w-full md:grid-cols-3">
        {all.map((gradient) => (
          <div
            key={gradient}
            className={`mb-2 w-full h-16 bg-gradient-to-r ${gradient} rounded-md`}
          />
        ))}
      </div>
      <span className="hidden">{JSON.stringify(invis)}</span>
    </Layout>
  );
};

export default Gradients;
