import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import Menu from "./pages/menu.astro";

const menu = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/menu" }),
    schema: z.object({
        index: z.number(),
        title: z.string(),
        description: z.string(),
        price: z.number(),
    }),
});

export const collections = {
    Menu
};


