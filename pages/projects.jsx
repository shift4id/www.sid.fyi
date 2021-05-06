import Layout from "@/components/layout";
import Card from "@/components/projects/card";
import projects from "@/data/projects";

const Projects = () => {
  return (
    <Layout title="Projects" description="Here are a few projects that I've been working on">
      {projects.map((project) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Card key={project.title} {...project} />
      ))}
    </Layout>
  );
};

export default Projects;
