// Some data to make the trick
import categoryRepository from "./categoryRepository";
const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

import type { RequestHandler } from "express";

// Declare the actions
const browse: RequestHandler = async (req, res) => {
  const categoriesFromDB = await categoryRepository.readAll();
  res.json(categoriesFromDB);
};

const read: RequestHandler = (req, res) => {
  const parsedId = Number.parseInt(req.params.id);

  const categorie = categories.find((p) => p.id === parsedId);

  if (categorie != null) {
    res.json(categorie);
  } else {
    res.sendStatus(404);
  }
};
/* Here you code */

// Export them to import them somewhere else

export default {
  browse,
  read,
};
