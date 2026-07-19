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
"bebidasCalientesConCafe/cafeBombon.md": {
	id: "bebidasCalientesConCafe/cafeBombon.md";
  slug: "bebidascalientesconcafe/cafebombon";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"bebidasCalientesConCafe/cappuccino.md": {
	id: "bebidasCalientesConCafe/cappuccino.md";
  slug: "bebidascalientesconcafe/cappuccino";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"bebidasCalientesConCafe/espresso.md": {
	id: "bebidasCalientesConCafe/espresso.md";
  slug: "bebidascalientesconcafe/espresso";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"bebidasCalientesConCafe/espressoDoble.md": {
	id: "bebidasCalientesConCafe/espressoDoble.md";
  slug: "bebidascalientesconcafe/espressodoble";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"bebidasCalientesConCafe/flatWhite.md": {
	id: "bebidasCalientesConCafe/flatWhite.md";
  slug: "bebidascalientesconcafe/flatwhite";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"bebidasCalientesConCafe/latte.md": {
	id: "bebidasCalientesConCafe/latte.md";
  slug: "bebidascalientesconcafe/latte";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"bebidasCalientesConCafe/macchiato.md": {
	id: "bebidasCalientesConCafe/macchiato.md";
  slug: "bebidascalientesconcafe/macchiato";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"bebidasCalientesConCafe/mocaccino.md": {
	id: "bebidasCalientesConCafe/mocaccino.md";
  slug: "bebidascalientesconcafe/mocaccino";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"bebidasCalientesConCafe/tentacionDeNutella.md": {
	id: "bebidasCalientesConCafe/tentacionDeNutella.md";
  slug: "bebidascalientesconcafe/tentaciondenutella";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"bebidasCalientesSinCafe/chocolateEnAgua.md": {
	id: "bebidasCalientesSinCafe/chocolateEnAgua.md";
  slug: "bebidascalientessincafe/chocolateenagua";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"bebidasCalientesSinCafe/chocolateEnLeche.md": {
	id: "bebidasCalientesSinCafe/chocolateEnLeche.md";
  slug: "bebidascalientessincafe/chocolateenleche";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"bebidasCalientesSinCafe/milo.md": {
	id: "bebidasCalientesSinCafe/milo.md";
  slug: "bebidascalientessincafe/milo";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"bebidasConLicor/cafeIrlandes.md": {
	id: "bebidasConLicor/cafeIrlandes.md";
  slug: "bebidasconlicor/cafeirlandes";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"bebidasConLicor/cappuccinoBaileys.md": {
	id: "bebidasConLicor/cappuccinoBaileys.md";
  slug: "bebidasconlicor/cappuccinobaileys";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"bebidasConLicor/cappuccinoConAmaretto.md": {
	id: "bebidasConLicor/cappuccinoConAmaretto.md";
  slug: "bebidasconlicor/cappuccinoconamaretto";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"bebidasConLicor/cappuccinoConWhisky.md": {
	id: "bebidasConLicor/cappuccinoConWhisky.md";
  slug: "bebidasconlicor/cappuccinoconwhisky";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"bebidasFriasConCafe/affogatoTropical.md": {
	id: "bebidasFriasConCafe/affogatoTropical.md";
  slug: "bebidasfriasconcafe/affogatotropical";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"bebidasFriasConCafe/latteFrio.md": {
	id: "bebidasFriasConCafe/latteFrio.md";
  slug: "bebidasfriasconcafe/lattefrio";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"bebidasFriasSinCafe/miloFrio.md": {
	id: "bebidasFriasSinCafe/miloFrio.md";
  slug: "bebidasfriassincafe/milofrio";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"bebidasFriasSinCafe/sodaMichelada.md": {
	id: "bebidasFriasSinCafe/sodaMichelada.md";
  slug: "bebidasfriassincafe/sodamichelada";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"bebidasFriasSinCafe/sodaSaborizadaDeFrutosAmarillos.md": {
	id: "bebidasFriasSinCafe/sodaSaborizadaDeFrutosAmarillos.md";
  slug: "bebidasfriassincafe/sodasaborizadadefrutosamarillos";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"bebidasFriasSinCafe/sodaSaborizadaDeFrutosRojos.md": {
	id: "bebidasFriasSinCafe/sodaSaborizadaDeFrutosRojos.md";
  slug: "bebidasfriassincafe/sodasaborizadadefrutosrojos";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"bebidasFriasSinCafe/sodaSaborizadaDeLychee.md": {
	id: "bebidasFriasSinCafe/sodaSaborizadaDeLychee.md";
  slug: "bebidasfriassincafe/sodasaborizadadelychee";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"bebidasFriasSinCafe/sodaSaborizadaDeMangoBiche.md": {
	id: "bebidasFriasSinCafe/sodaSaborizadaDeMangoBiche.md";
  slug: "bebidasfriassincafe/sodasaborizadademangobiche";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"hojaldresPastelesYTortas/croissantDeChocolate.md": {
	id: "hojaldresPastelesYTortas/croissantDeChocolate.md";
  slug: "hojaldrespastelesytortas/croissantdechocolate";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"hojaldresPastelesYTortas/croissantDeQueso.md": {
	id: "hojaldresPastelesYTortas/croissantDeQueso.md";
  slug: "hojaldrespastelesytortas/croissantdequeso";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"hojaldresPastelesYTortas/croissantSencillo.md": {
	id: "hojaldresPastelesYTortas/croissantSencillo.md";
  slug: "hojaldrespastelesytortas/croissantsencillo";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"hojaldresPastelesYTortas/palitoDeQueso.md": {
	id: "hojaldresPastelesYTortas/palitoDeQueso.md";
  slug: "hojaldrespastelesytortas/palitodequeso";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"hojaldresPastelesYTortas/pastelArequipe.md": {
	id: "hojaldresPastelesYTortas/pastelArequipe.md";
  slug: "hojaldrespastelesytortas/pastelarequipe";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"hojaldresPastelesYTortas/pastelCarneVerduras.md": {
	id: "hojaldresPastelesYTortas/pastelCarneVerduras.md";
  slug: "hojaldrespastelesytortas/pastelcarneverduras";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"hojaldresPastelesYTortas/pastelDeEspinacaYQueso.md": {
	id: "hojaldresPastelesYTortas/pastelDeEspinacaYQueso.md";
  slug: "hojaldrespastelesytortas/pasteldeespinacayqueso";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"hojaldresPastelesYTortas/pastelGloria.md": {
	id: "hojaldresPastelesYTortas/pastelGloria.md";
  slug: "hojaldrespastelesytortas/pastelgloria";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"hojaldresPastelesYTortas/pastelGuayaba.md": {
	id: "hojaldresPastelesYTortas/pastelGuayaba.md";
  slug: "hojaldrespastelesytortas/pastelguayaba";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"hojaldresPastelesYTortas/pastelItaliano.md": {
	id: "hojaldresPastelesYTortas/pastelItaliano.md";
  slug: "hojaldrespastelesytortas/pastelitaliano";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"hojaldresPastelesYTortas/pastelJamonYQueso.md": {
	id: "hojaldresPastelesYTortas/pastelJamonYQueso.md";
  slug: "hojaldrespastelesytortas/pasteljamonyqueso";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"hojaldresPastelesYTortas/pastelPolloChampinones.md": {
	id: "hojaldresPastelesYTortas/pastelPolloChampinones.md";
  slug: "hojaldrespastelesytortas/pastelpollochampinones";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"hojaldresPastelesYTortas/pastelPolloVerduras.md": {
	id: "hojaldresPastelesYTortas/pastelPolloVerduras.md";
  slug: "hojaldrespastelesytortas/pastelpolloverduras";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"hojaldresPastelesYTortas/pastelRanchero.md": {
	id: "hojaldresPastelesYTortas/pastelRanchero.md";
  slug: "hojaldrespastelesytortas/pastelranchero";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"hojaldresPastelesYTortas/pastelTresQuesos.md": {
	id: "hojaldresPastelesYTortas/pastelTresQuesos.md";
  slug: "hojaldrespastelesytortas/pasteltresquesos";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"hojaldresPastelesYTortas/portionDeTortaDeZanahoria.md": {
	id: "hojaldresPastelesYTortas/portionDeTortaDeZanahoria.md";
  slug: "hojaldrespastelesytortas/portiondetortadezanahoria";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"hojaldresPastelesYTortas/portionDeTortaRedVelvet.md": {
	id: "hojaldresPastelesYTortas/portionDeTortaRedVelvet.md";
  slug: "hojaldrespastelesytortas/portiondetortaredvelvet";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"metodosDeFiltrado/aeropress.md": {
	id: "metodosDeFiltrado/aeropress.md";
  slug: "metodosdefiltrado/aeropress";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"metodosDeFiltrado/chemex2Tazas.md": {
	id: "metodosDeFiltrado/chemex2Tazas.md";
  slug: "metodosdefiltrado/chemex2tazas";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"metodosDeFiltrado/chemex4Tazas.md": {
	id: "metodosDeFiltrado/chemex4Tazas.md";
  slug: "metodosdefiltrado/chemex4tazas";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"metodosDeFiltrado/prensaFrancesa2Tazas.md": {
	id: "metodosDeFiltrado/prensaFrancesa2Tazas.md";
  slug: "metodosdefiltrado/prensafrancesa2tazas";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"metodosDeFiltrado/prensaFrancesa4Tazas.md": {
	id: "metodosDeFiltrado/prensaFrancesa4Tazas.md";
  slug: "metodosdefiltrado/prensafrancesa4tazas";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"metodosDeFiltrado/v602Tazas.md": {
	id: "metodosDeFiltrado/v602Tazas.md";
  slug: "metodosdefiltrado/v602tazas";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"metodosDeFiltrado/v604Tazas.md": {
	id: "metodosDeFiltrado/v604Tazas.md";
  slug: "metodosdefiltrado/v604tazas";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"otrasBebidas/agua.md": {
	id: "otrasBebidas/agua.md";
  slug: "otrasbebidas/agua";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"otrasBebidas/cervezaAguila.md": {
	id: "otrasBebidas/cervezaAguila.md";
  slug: "otrasbebidas/cervezaaguila";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"otrasBebidas/cervezaCoronita.md": {
	id: "otrasBebidas/cervezaCoronita.md";
  slug: "otrasbebidas/cervezacoronita";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"otrasBebidas/cervezaCusquenaDorada.md": {
	id: "otrasBebidas/cervezaCusquenaDorada.md";
  slug: "otrasbebidas/cervezacusquenadorada";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"otrasBebidas/cervezaCusquenaTrigo.md": {
	id: "otrasBebidas/cervezaCusquenaTrigo.md";
  slug: "otrasbebidas/cervezacusquenatrigo";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"otrasBebidas/cervezaPilsen.md": {
	id: "otrasBebidas/cervezaPilsen.md";
  slug: "otrasbebidas/cervezapilsen";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"otrasBebidas/cervezaStella.md": {
	id: "otrasBebidas/cervezaStella.md";
  slug: "otrasbebidas/cervezastella";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"otrasBebidas/cocaCola.md": {
	id: "otrasBebidas/cocaCola.md";
  slug: "otrasbebidas/cocacola";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"otrasBebidas/gaseosaManzana.md": {
	id: "otrasBebidas/gaseosaManzana.md";
  slug: "otrasbebidas/gaseosamanzana";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"otrasBebidas/soda1976ManzanaMichelada.md": {
	id: "otrasBebidas/soda1976ManzanaMichelada.md";
  slug: "otrasbebidas/soda1976manzanamichelada";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"otrasBebidas/soda1976TamarindoMichelada.md": {
	id: "otrasBebidas/soda1976TamarindoMichelada.md";
  slug: "otrasbebidas/soda1976tamarindomichelada";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"otrasBebidas/soda1976ToronjaMichelada.md": {
	id: "otrasBebidas/soda1976ToronjaMichelada.md";
  slug: "otrasbebidas/soda1976toronjamichelada";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"otrasBebidas/sodaBretana.md": {
	id: "otrasBebidas/sodaBretana.md";
  slug: "otrasbebidas/sodabretana";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"platosFuertes/amanecerRaices.md": {
	id: "platosFuertes/amanecerRaices.md";
  slug: "platosfuertes/amanecerraices";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"platosFuertes/lasanaDePollo.md": {
	id: "platosFuertes/lasanaDePollo.md";
  slug: "platosfuertes/lasanadepollo";
  body: string;
  collection: "menu";
  data: any
} & { render(): Render[".md"] };
"platosFuertes/wrapDePollo.md": {
	id: "platosFuertes/wrapDePollo.md";
  slug: "platosfuertes/wrapdepollo";
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
