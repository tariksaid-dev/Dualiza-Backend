interface SeedData {
  news: SeedNews[];
}

interface SeedNews {
  title: string;
  content: string;
  image: string;
  category: string;
}

export const initialData: SeedData = {
  news: [
    {
      title: "Title test 1",
      content: "Proident magna ea adipisicing magna est mollit commodo.",
      image: "Sunt proident magna incididunt elit non excepteur ex sunt sunt laborum.",
      category: "Category test 1"
    },
    {
      title: "Title test 2",
      content: "Proident magna ea adipisicing magna est mollit commodo.",
      image: "Sunt proident magna incididunt elit non excepteur ex sunt sunt laborum.",
      category: "Category test 2"
    },
    {
      title: "Title test 3",
      content: "Proident magna ea adipisicing magna est mollit commodo.",
      image: "Sunt proident magna incididunt elit non excepteur ex sunt sunt laborum.",
      category: "Category test 3"
    },
    {
      title: "Title test 4",
      content: "Proident magna ea adipisicing magna est mollit commodo.",
      image: "Sunt proident magna incididunt elit non excepteur ex sunt sunt laborum.",
      category: "Category test 4"
    },
    {
      title: "Title test 5",
      content: "Proident magna ea adipisicing magna est mollit commodo.",
      image: "Sunt proident magna incididunt elit non excepteur ex sunt sunt laborum.",
      category: "Category test 5"
    },
  ],
};
