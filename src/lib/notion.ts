import { Client } from "@notionhq/client";
import {
  DatePropertyItemObjectResponse,
  PageObjectResponse,
  TextRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

type Essay = {
  id: string;
  title: string;
  description: string;
  slug: string;
  date: string;
  content?: string;
};

type Book = {
  id: string;
  title: string;
  author: string;
  image: string;
};

async function getEssays(): Promise<Essay[]> {
  const pages = await notion.databases.query({
    database_id: process.env.ESSAY_DATABASE_ID,
    filter: { property: "Published", checkbox: { equals: true } },
    sorts: [{ property: "Date", direction: "descending" }],
  });

  return pages.results.map((page: PageObjectResponse) => ({
    id: page.id,
    title: (page.properties.Name as { title: Array<TextRichTextItemResponse> }).title[0].text.content,
    description: (page.properties.Description as { rich_text: Array<TextRichTextItemResponse> }).rich_text[0].text
      .content,
    slug: (page.properties.Slug as { rich_text: Array<TextRichTextItemResponse> }).rich_text[0].text.content,
    date: (page.properties.Date as DatePropertyItemObjectResponse).date.start,
  }));
}

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

async function getEssayBySlug(slug: string): Promise<Essay> {
  const pages = await notion.databases.query({
    database_id: process.env.ESSAY_DATABASE_ID,
    filter: {
      and: [
        { property: "Published", checkbox: { equals: true } },
        { property: "Slug", rich_text: { equals: slug } },
      ],
    },
    sorts: [{ property: "Date", direction: "descending" }],
    page_size: 1,
  });

  const n2m = new NotionToMarkdown({ notionClient: notion });
  const mdString = n2m.toMarkdownString(await n2m.pageToMarkdown(pages.results[0].id));

  return pages.results.map((page: PageObjectResponse) => ({
    id: page.id,
    title: (page.properties.Name as { title: Array<TextRichTextItemResponse> }).title[0].text.content,
    description: (page.properties.Description as { rich_text: Array<TextRichTextItemResponse> }).rich_text[0].text
      .content,
    slug: (page.properties.Slug as { rich_text: Array<TextRichTextItemResponse> }).rich_text[0].text.content,
    date: (page.properties.Date as DatePropertyItemObjectResponse).date.start,
    content: mdString,
  }))[0];
}

export type { Book, Essay };
export { getBooks, getEssays, getEssayBySlug };
