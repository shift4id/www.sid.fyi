import { remark } from "remark";
import html from "remark-html";

const markdownToHtml = async function (markdown: string): Promise<string> {
  return (await remark().use(html).process(markdown)).toString();
};

export default markdownToHtml;
