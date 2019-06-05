import { string, number, shape } from "prop-types";

export const course = shape({
  title: string.isRequired,
  authorId: number.isRequired,
  category: string.isRequired
});
