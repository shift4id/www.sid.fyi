import fs from "fs";
import matter from "gray-matter";
import mdxPrism from "mdx-prism";
import { serialize } from "next-mdx-remote/serialize";

export const getFiles = async (type) => fs.readdirSync(`./data/${type}`);

export const getFileBySlug = async (type, slug) => {
  const source = fs.readFileSync(`./data/${type}/${slug}.mdx`, "utf8");

  const { data, content } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [mdxPrism],
    },
  });

  return { mdxSource, frontMatter: { slug, ...data } };
};

export const getAllFilesFrontMatter = async (type) => {
  const files = await getFiles(type);

  return files.map(async (file) => {
    const slug = file.replace(".mdx", "");
    return (await getFileBySlug(type, slug)).frontMatter;
  }, []);
};
