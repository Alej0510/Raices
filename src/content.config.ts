import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import Menu from "./pages/menu.astro";

const menu = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/menu" }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        price: z.number(),
    }),
});

export const collections = {
    Menu
};


