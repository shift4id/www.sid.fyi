import Layout from "@/components/layout";
import Card from "@/components/resume/card";
import resume from "@/data/resume";

const Resume = () => {
  return (
    <Layout title="Resume" description="Here are a few of my accomplishments!">
      <h3 className="mt-6 text-3xl font-bold">Siddharth Adusumelli</h3>
      <h4 className="my-2 text-2xl font-semibold">Computer Science Student</h4>
      {resume.map((section) => (
        <>
          <h5 className="pb-2 mt-4 text-xl font-bold tracking-widest border-b border-gray-300 dark:border-gray-700">
            {section.title}
          </h5>
          {section.items.map((item) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <Card {...item} />
          ))}
        </>
      ))}
    </Layout>
  );
};

export default Resume;
