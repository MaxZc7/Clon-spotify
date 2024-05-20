/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, g as renderComponent, e as addAttribute, i as renderTransition } from '../astro_CWJUlqew.mjs';
import 'kleur/colors';
import 'html-escaper';
import { u as usePlayerStore, P as PauseIcon, b as PlayIcon, p as playlists, $ as $$Layout } from './_id__BsYRURne.mjs';
import { jsx } from 'react/jsx-runtime';

function CardItem({ PlaylistId }) {
  const { isPlaying, setIsPlaying, currentMusic, setCurrentMusic } = usePlayerStore((set) => set);
  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id == PlaylistId;
  const handlePlay = () => {
    setCurrentMusic({ playlist: PlaylistId });
    if (isPlayingPlaylist) {
      setIsPlaying(false);
      return;
    }
    fetch(`/api/data-playlist.json?id=${PlaylistId}`).then((res) => res.json()).then((data) => {
      const { playlist, songs } = data;
      setIsPlaying(true);
      setCurrentMusic({
        playlist,
        musics: songs,
        music: songs[0]
      });
    });
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: "rounded-full bg-green-600 p-4",
      onClick: () => handlePlay(),
      children: isPlayingPlaylist ? /* @__PURE__ */ jsx(PauseIcon, {}) : /* @__PURE__ */ jsx(PlayIcon, {})
    }
  );
}

const $$Astro$1 = createAstro();
const $$PlaylistItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PlaylistItem;
  const { playlist } = Astro2.props;
  const { id, albumId, artists, color, cover, title } = playlist;
  return renderTemplate`${maybeRenderHead()}<article class="relative group mr-3 bg-[#31323484] hover:bg-[#37383ac3] rounded-lg shadow-xl transition-all duration-300"> <div class="z-20 absolute flex transition-all duration-300 bottom-20 right-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"> ${renderComponent($$result, "CardItem", CardItem, { "PlaylistId": id, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/CardItem", "client:component-export": "default" })} </div> <a${addAttribute(`playlist/${id}`, "href")} class="flex relative gap-3 flex-col overflow-hidden p-2 w-44"${addAttribute(renderTransition($$result, "wqstppyq", "", `playlist ${id} xax`), "data-astro-transition-scope")}> <picture class="aspect-square w-full h-auto flex-none"> <img${addAttribute(cover, "src")}${addAttribute(`Cover of ${title}`, "alt")} class="rounded-md"${addAttribute(renderTransition($$result, "eq2hu5ut", "", `playlist ${id} image`), "data-astro-transition-scope")}> </picture> <div class="text-white"> <h4${addAttribute(renderTransition($$result, "wojxblrd", "", `playlist ${playlist?.id} title`), "data-astro-transition-scope")}> ${title} </h4> <span class="text-[#a7a7a7] text-sm"${addAttribute(renderTransition($$result, "zjirzrn6", "", `playlist ${id} artists`), "data-astro-transition-scope")}> ${artists} </span> </div> </a> </article>`;
}, "D:/Users/Maximo/Desktop/Astro Proyectos/Clon Spotify/src/components/PlaylistItem.astro", "self");

/** @returns {void} */

function run(fn) {
	return fn();
}

function blank_object() {
	return Object.create(null);
}

/**
 * @param {Function[]} fns
 * @returns {void}
 */
function run_all(fns) {
	fns.forEach(run);
}

let current_component;

/** @returns {void} */
function set_current_component(component) {
	current_component = component;
}

const ATTR_REGEX = /[&"]/g;
const CONTENT_REGEX = /[&<]/g;

/**
 * Note: this method is performance sensitive and has been optimized
 * https://github.com/sveltejs/svelte/pull/5701
 * @param {unknown} value
 * @returns {string}
 */
function escape(value, is_attr = false) {
	const str = String(value);
	const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
	pattern.lastIndex = 0;
	let escaped = '';
	let last = 0;
	while (pattern.test(str)) {
		const i = pattern.lastIndex - 1;
		const ch = str[i];
		escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
		last = i + 1;
	}
	return escaped + str.substring(last);
}

let on_destroy;

/** @returns {{ render: (props?: {}, { $$slots, context }?: { $$slots?: {}; context?: Map<any, any>; }) => { html: any; css: { code: string; map: any; }; head: string; }; $$render: (result: any, props: any, bindings: any, slots: any, context: any) => any; }} */
function create_ssr_component(fn) {
	function $$render(result, props, bindings, slots, context) {
		const parent_component = current_component;
		const $$ = {
			on_destroy,
			context: new Map(context || (parent_component ? parent_component.$$.context : [])),
			// these will be immediately discarded
			on_mount: [],
			before_update: [],
			after_update: [],
			callbacks: blank_object()
		};
		set_current_component({ $$ });
		const html = fn(result, props, bindings, slots);
		set_current_component(parent_component);
		return html;
	}
	return {
		render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
			on_destroy = [];
			const result = { title: '', head: '', css: new Set() };
			const html = $$render(result, props, {}, $$slots, context);
			run_all(on_destroy);
			return {
				html,
				css: {
					code: Array.from(result.css)
						.map((css) => css.code)
						.join('\n'),
					map: null // TODO
				},
				head: result.title + result.head
			};
		},
		$$render
	};
}

/* D:/Users/Maximo/Desktop/Astro Proyectos/Clon Spotify/src/components/Saludos.svelte generated by Svelte v4.2.12 */

const Saludos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const current_time = /* @__PURE__ */ new Date();
	const current_Hour = current_time.getHours();
	let saludos = "";

	if (current_Hour < 12) {
		saludos = "Buenas dias";
	} else if (current_Hour > 12 && current_Hour < 18) {
		saludos = "Buenas tardes";
	} else {
		saludos = "Buenas noches";
	}

	return `<h4 class="text-white text-3xl pt-5 font-bold ">${escape(saludos)}</h4>`;
});

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Clon Spotify By Max" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative transition-all duration-1000 bg-green-600"> <div class="relative z-10 px-6"> ${renderComponent($$result2, "Saludos", Saludos, {})} <div class="flex"> ${playlists.map((playlistT) => renderTemplate`${renderComponent($$result2, "PlaylistItem", $$PlaylistItem, { "playlist": playlistT })}`)} </div> </div> <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/75"></div> </div> ` })}`;
}, "D:/Users/Maximo/Desktop/Astro Proyectos/Clon Spotify/src/pages/index.astro", void 0);

const $$file = "D:/Users/Maximo/Desktop/Astro Proyectos/Clon Spotify/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
