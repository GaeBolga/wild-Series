import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

// Declaration of a "Welcome" route

import programs from "./modules/api/programs";
import categoryActions from "./modules/category/categoryActions";
import sayActions from "./modules/say/sayActions";

router.get("/", sayActions.sayWelcome);
router.get("/api/programs", programs.browse);
+router.get("/api/programs/:id", programs.read);
router.get("/api/categories", categoryActions.browse);
+router.get("/api/categories/:id", categoryActions.read);

/* ************************************************************************* */

export default router;
