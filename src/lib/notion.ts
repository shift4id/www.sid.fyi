import { Client } from "@notionhq/client";
import { PageObjectResponse, TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import redis from "./redis";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

type Book = {
  id: string;
  title: string;
  author: string;
  image: string;
};

const getBookData = (page: PageObjectResponse): Book => ({
  id: page.id,
  title: (page.properties.Title as { title: Array<TextRichTextItemResponse> }).title[0].text.content,
  author: (page.properties.Author as { rich_text: Array<TextRichTextItemResponse> }).rich_text[0].text.content,
  image: (page.properties.Image as { url: string }).url,
});

const getBooks = async (): Promise<Book[]> => {
  const storedBooks = await redis.get<Book[]>("books");
  if (storedBooks) return storedBooks;

  const pages = await notion.databases.query({
    database_id: process.env.BOOK_DATABASE_ID,
    sorts: [{ property: "Author", direction: "ascending" }],
  });

  const books = pages.results.filter((page): page is PageObjectResponse => page.object === "page").map(getBookData);
  await redis.set("books", books, { ex: 24 * 60 * 60 });
  return books;
};

export type { Book };
export { getBooks };
