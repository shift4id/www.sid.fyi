import { Client } from "@notionhq/client";
import { PageObjectResponse, TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

type Book = {
  id: string;
  title: string;
  author: string;
  image: string;
};

async function getBooks(): Promise<Book[]> {
  const pages = await notion.databases.query({
    database_id: process.env.BOOK_DATABASE_ID,
    sorts: [{ property: "Author", direction: "ascending" }],
  });

  return pages.results.map((page: PageObjectResponse) => ({
    id: page.id,
    title: (page.properties.Title as { title: Array<TextRichTextItemResponse> }).title[0].text.content,
    author: (page.properties.Author as { rich_text: Array<TextRichTextItemResponse> }).rich_text[0].text.content,
    image: (page.properties.Image as { url: string }).url,
  }));
}

export type { Book };
export { getBooks };