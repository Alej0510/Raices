declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"menu": {
"Food/LasagnaMixta.md": {
	id: "Food/LasagnaMixta.md";
  slug: "food/lasagnamixta";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"Food/WaffleConHelado.md": {
	id: "Food/WaffleConHelado.md";
  slug: "food/waffleconhelado";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"Food/WrapPollo.md": {
	id: "Food/WrapPollo.md";
  slug: "food/wrappollo";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"withAlcohol/CafeIrlandes.md": {
	id: "withAlcohol/CafeIrlandes.md";
  slug: "withalcohol/cafeirlandes";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"withAlcohol/CapuchinoConAmaretto.md": {
	id: "withAlcohol/CapuchinoConAmaretto.md";
  slug: "withalcohol/capuchinoconamaretto";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"withAlcohol/CapuchinoConBaileys.md": {
	id: "withAlcohol/CapuchinoConBaileys.md";
  slug: "withalcohol/capuchinoconbaileys";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"withAlcohol/CapuchinoConWhiskey.md": {
	id: "withAlcohol/CapuchinoConWhiskey.md";
  slug: "withalcohol/capuchinoconwhiskey";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"withCoffee/Affogato.md": {
	id: "withCoffee/Affogato.md";
  slug: "withcoffee/affogato";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"withCoffee/AffogatoTropical.md": {
	id: "withCoffee/AffogatoTropical.md";
  slug: "withcoffee/affogatotropical";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"withCoffee/Americano.md": {
	id: "withCoffee/Americano.md";
  slug: "withcoffee/americano";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"withCoffee/CafeBombon.md": {
	id: "withCoffee/CafeBombon.md";
  slug: "withcoffee/cafebombon";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"withCoffee/Capuchino.md": {
	id: "withCoffee/Capuchino.md";
  slug: "withcoffee/capuchino";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"withCoffee/Espresso.md": {
	id: "withCoffee/Espresso.md";
  slug: "withcoffee/espresso";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"withCoffee/EspressoDoble.md": {
	id: "withCoffee/EspressoDoble.md";
  slug: "withcoffee/espressodoble";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"withCoffee/FlatWhite.md": {
	id: "withCoffee/FlatWhite.md";
  slug: "withcoffee/flatwhite";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"withCoffee/Latte.md": {
	id: "withCoffee/Latte.md";
  slug: "withcoffee/latte";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"withCoffee/Macchiato.md": {
	id: "withCoffee/Macchiato.md";
  slug: "withcoffee/macchiato";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"withCoffee/Mocaccino.md": {
	id: "withCoffee/Mocaccino.md";
  slug: "withcoffee/mocaccino";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"withoutCoffee/ChocolateConAgua.md": {
	id: "withoutCoffee/ChocolateConAgua.md";
  slug: "withoutcoffee/chocolateconagua";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"withoutCoffee/ChocolateConLeche.md": {
	id: "withoutCoffee/ChocolateConLeche.md";
  slug: "withoutcoffee/chocolateconleche";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"withoutCoffee/Milo.md": {
	id: "withoutCoffee/Milo.md";
  slug: "withoutcoffee/milo";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"withoutCoffee/SodaFrutosAmarillos.md": {
	id: "withoutCoffee/SodaFrutosAmarillos.md";
  slug: "withoutcoffee/sodafrutosamarillos";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"withoutCoffee/SodaFrutosRojos.md": {
	id: "withoutCoffee/SodaFrutosRojos.md";
  slug: "withoutcoffee/sodafrutosrojos";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"withoutCoffee/SodaLychee.md": {
	id: "withoutCoffee/SodaLychee.md";
  slug: "withoutcoffee/sodalychee";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"withoutCoffee/SodaMango.md": {
	id: "withoutCoffee/SodaMango.md";
  slug: "withoutcoffee/sodamango";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
