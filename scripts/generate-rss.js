const { promises: fs } = require("fs");
const matter = require("gray-matter");
const path = require("path");
const RSS = require("rss");

const generate = async () => {
  const feed = new RSS({
    title: "Sid Adusumelli",
    site_url: "https://sid.fyi",
    feed_url: "https://sid.fyi/feed.xml",
  });

  const posts = await fs.readdir(path.join(__dirname, "../data/thoughts"));

  await Promise.all(
    posts.map(async (name) => {
      const content = await fs.readFile(path.join(__dirname, "../data/thoughts", name));
      const {
        data: { title, date, description },
      } = matter(content);

      feed.item({
        title,
        date,
        description,
        url: `https://sid.fyi/thoughts/${name.replace(/\.mdx?/, "")}`,
      });
    })
  );

  await fs.writeFile("./public/feed.xml", feed.xml({ indent: true }));
};

generate();
