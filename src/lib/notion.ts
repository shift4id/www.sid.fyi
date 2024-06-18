import { Client } from "@notionhq/client";
import {
  PageObjectResponse as Page,
  TextRichTextItemResponse as RichText,
} from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

interface Book {
  id: string;
  title: string;
  author: string;
  image: string;
}

const getBookData = (page: Page): Book => ({
  id: page.id,
  title: (page.properties.Title as { title: RichText[] }).title[0].text.content,
  author: (page.properties.Author as { rich_text: RichText[] }).rich_text[0].text.content,
  image: (page.properties.Image as { url: string }).url,
});

const getBooks = async (): Promise<Book[]> =>
  await notion.databases
    .query({
      database_id: process.env.BOOK_DATABASE_ID,
      sorts: [{ property: "Author", direction: "ascending" }],
    })
    .then(({ results }) => results.filter((page): page is Page => page.object === "page").map(getBookData));

export type { Book };
export { getBooks };
