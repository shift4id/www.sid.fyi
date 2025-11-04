import type {
  PageObjectResponse as Page,
  TextRichTextItemResponse as RichText,
} from "@notionhq/client/build/src/api-endpoints";
import { Client } from "@notionhq/client";
import { serverEnv } from "@/constants/env";

const notion = new Client({ auth: serverEnv.NOTION_API_KEY });

interface Book {
  id: string;
  title: string;
  author: string;
  image: string;
}

function getBookData(page: Page): Book {
  return {
    id: page.id,
    title: (page.properties.Title as { title: RichText[] }).title[0].text.content,
    author: (page.properties.Author as { rich_text: RichText[] }).rich_text[0].text.content,
    image: (page.properties.Image as { url: string }).url,
  };
}

async function getBooks(): Promise<Book[]> {
  return await notion.dataSources
    .query({
      data_source_id: serverEnv.BOOK_DATA_SOURCE_ID,
      sorts: [{ property: "Author", direction: "ascending" }],
    })
    .then(({ results }) => results.filter((page): page is Page => page.object === "page").map(getBookData));
}

export type { Book };
export { getBooks };
