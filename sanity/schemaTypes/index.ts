import { type SchemaTypeDefinition } from "sanity";
import page from "./page";
import hero from "./hero";
import program from "./program";
import language from "./language";
import translations from "./translations";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [page,hero,program,language,translations],
};
