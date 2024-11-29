import { Book, BooksWithCategories } from "@app/types";

export const oldTestamentBooks: BooksWithCategories = {
  "Пятикнижие Моисея": [
    { name: "Бытие", id: "GENESIS", chapterQty: 50 },
    { name: "Исход", id: "EXODUS", chapterQty: 40 },
    { name: "Левит", id: "LEVITICUS", chapterQty: 27 },
    { name: "Числа", id: "NUMBERS", chapterQty: 36 },
    { name: "Второзаконие", id: "DEUTERONOMY", chapterQty: 34 },
  ],
  "Книги исторические": [
    { name: "Иисуса Навина", id: "JOSHUA", chapterQty: 24 },
    { name: "Судей Израилевых", id: "JUDGES", chapterQty: 21 },
    { name: "Руфь", id: "RUTH", chapterQty: 4 },
    { name: "Царств (1)", id: "SAMUEL1", chapterQty: 31 },
    { name: "Царств (2)", id: "SAMUEL2", chapterQty: 24 },
    { name: "Царств (3)", id: "KINGS1", chapterQty: 22 },
    { name: "Царств (4)", id: "KINGS2", chapterQty: 25 },
    { name: "Паралипоменон (1)", id: "CHRONICLES1", chapterQty: 29 },
    { name: "Паралипоменон (2)", id: "CHRONICLES2", chapterQty: 36 },
    { name: "Ездры", id: "EZRA", chapterQty: 10 },
    { name: "Неемии", id: "NEHEMIAH", chapterQty: 13 },
    { name: "Есфирь", id: "ESTHER", chapterQty: 10 },
  ],
  "Книги учительные": [
    { name: "Иова", id: "JOB", chapterQty: 42 },
    { name: "Псалтирь", id: "PSALMS", chapterQty: 151 },
    { name: "Притчей Соломоновых", id: "PROVERBS", chapterQty: 31 },
    { name: "Екклезиаста", id: "ECCLESIASTES", chapterQty: 12 },
    { name: "Песни Песней Соломона", id: "SONG_OF_SOLOMON", chapterQty: 8 },
  ],
  "Книги пророческие": [
    { name: "Исаии", id: "ISAIAH", chapterQty: 66 },
    { name: "Иеремии", id: "JEREMIAH", chapterQty: 52 },
    { name: "Плач Иеремии", id: "LAMENTATIONS", chapterQty: 5 },
    { name: "Иезекииля", id: "EZEKIEL", chapterQty: 48 },
    { name: "Даниила", id: "DANIEL", chapterQty: 12 },
    { name: "Осии", id: "HOSEA", chapterQty: 14 },
    { name: "Иoиля", id: "JOEL", chapterQty: 3 },
    { name: "Амоса", id: "AMOS", chapterQty: 9 },
    { name: "Авдия", id: "OBADIAH", chapterQty: 1 },
    { name: "Ионы", id: "JONAH", chapterQty: 4 },
    { name: "Михея", id: "MICAH", chapterQty: 7 },
    { name: "Наума", id: "NAHUM", chapterQty: 3 },
    { name: "Аввакума", id: "HABAKKUK", chapterQty: 3 },
    { name: "Софонии", id: "ZEPHANIAH", chapterQty: 3 },
    { name: "Аггея", id: "HAGGAI", chapterQty: 2 },
    { name: "Захарии", id: "ZECHARIAH", chapterQty: 14 },
    { name: "Малахии", id: "MALACHI", chapterQty: 4 },
  ],
};

export const newTestamentBooks: BooksWithCategories = {
  Евангелия: [
    { name: "От Матфея", id: "MATTHEW", chapterQty: 28 },
    { name: "От Марка", id: "MARK", chapterQty: 16 },
    { name: "От Луки", id: "LUKE", chapterQty: 24 },
    { name: "От Иоанна", id: "JOHN", chapterQty: 21 },
    {
      name: "Деяния святых Апостолов",
      id: "ACTS_OF_THE_APOSTLES",
      chapterQty: 28,
    },
  ],
  "Соборные Послания": [
    { name: "Иакова", id: "JAMES", chapterQty: 5 },
    { name: "Петра (1)", id: "PETER1", chapterQty: 5 },
    { name: "Петра (2)", id: "PETER2", chapterQty: 3 },
    { name: "Иоанна (1)", id: "JOHN1", chapterQty: 5 },
    { name: "Иоанна (2)", id: "JOHN2", chapterQty: 1 },
    { name: "Иоанна (3)", id: "JOHN3", chapterQty: 1 },
    { name: "Иуды", id: "JUDE", chapterQty: 1 },
  ],
  "Послания св. Апостола Павла": [
    { name: "К римлянам", id: "ROMANS", chapterQty: 16 },
    { name: "К коринфянам (1)", id: "CORINTHIANS1", chapterQty: 16 },
    { name: "К коринфянам (2)", id: "CORINTHIANS2", chapterQty: 13 },
    { name: "К галатам", id: "GALATIANS", chapterQty: 6 },
    { name: "К ефесянам", id: "EPHESIANS", chapterQty: 6 },
    { name: "К филиппийцам", id: "PHILIPPIANS", chapterQty: 4 },
    { name: "К колоссянам", id: "COLOSSIANS", chapterQty: 4 },
    { name: "К фессалоникийцам (1)", id: "THESSALONIANS1", chapterQty: 5 },
    { name: "К фессалоникийцам (2)", id: "THESSALONIANS2", chapterQty: 3 },
    { name: "К Тимофею (1)", id: "TIMOTHY1", chapterQty: 6 },
    { name: "К Тимофею (2)", id: "TIMOTHY2", chapterQty: 4 },
    { name: "К Титу", id: "TITUS", chapterQty: 3 },
    { name: "К Филимону", id: "PHILEMON", chapterQty: 1 },
    { name: "К евреям", id: "HEBREWS", chapterQty: 13 },
  ],
  "Книга пророческая": [
    {
      name: "Откровение Иоанна Богослова (Апокалипсис)",
      id: "REVELATION",
      chapterQty: 22,
    },
  ],
};

export const listOfBooksWithCategories: BooksWithCategories = {
  ...oldTestamentBooks,
  ...newTestamentBooks,
};

export const listOfBooks: Book[] = [
  ...oldTestamentBooks["Пятикнижие Моисея"],
  ...oldTestamentBooks["Книги исторические"],
  ...oldTestamentBooks["Книги учительные"],
  ...oldTestamentBooks["Книги пророческие"],
  ...newTestamentBooks["Евангелия"],
  ...newTestamentBooks["Соборные Послания"],
  ...newTestamentBooks["Послания св. Апостола Павла"],
  ...newTestamentBooks["Книга пророческая"],
];

export const listOfCategories = Object.keys(listOfBooksWithCategories);
