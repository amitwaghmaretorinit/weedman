import { type SchemaTypeDefinition } from "sanity";
import hero from "./hero";
import feature from "./feature";
import location from "./location";
import testimonial from "./testimonial";
import resourceCard from "./resourceCard";
import gallery from "./gallery";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, feature, location, testimonial, resourceCard, gallery],
};
