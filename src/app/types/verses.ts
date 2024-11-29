// snake_case is used because the downloaded Bible in JSON format uses it
export type Verse = {
  book_id: string;
  book_name: string;
  chapter: number;
  text: string;
  translation_id: string;
  verse: number;
};
