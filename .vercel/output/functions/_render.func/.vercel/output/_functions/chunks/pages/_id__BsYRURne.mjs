/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderSlot, g as renderComponent, h as renderHead, i as renderTransition } from '../astro_CWJUlqew.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsxs, jsx } from 'react/jsx-runtime';
import * as React from 'react';
import { useRef, useEffect, useState } from 'react';
import { create } from 'zustand';
import * as SliderPrimitive from '@radix-ui/react-slider';
import cn from 'clsx';

const colors = {
  red: { accent: "#da2735", dark: "#7f1d1d" },
  orange: { accent: "#cc5400", dark: "#7c2d12" },
  yellow: { accent: "#ffae00", dark: "#78350f" },
  green: { accent: "#21c872", dark: "#14532d" },
  teal: { accent: "#2ee9d7", dark: "#134e4a" },
  blue: { accent: "#1e3a8a", dark: "#1e3a8a" },
  indigo: { accent: "#394bd5", dark: "#312e81" },
  purple: { accent: "#df24ff", dark: "#581c87" },
  pink: { accent: "#f33b73", dark: "#831843" },
  emerald: { accent: "#0c6e54", dark: "#064e3b" },
  rose: { accent: "#ed2377", dark: "#871b48" },
  gray: { accent: "#555555", dark: "#27272a" }
};

const playlists = [
  {
    id: "1",
    albumId: 1,
    title: "Chill Lo-Fi Music",
    color: colors.yellow,
    cover: "https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353",
    artists: ["NoSpirit", "Casiio"]
  },
  {
    id: "2",
    albumId: 2,
    title: "Lo-Fi Chill Session",
    color: colors.green,
    cover: "https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187",
    artists: ["Kupla", "Blue Fox"]
  },
  {
    id: "3",
    albumId: 3,
    title: "Study Session",
    color: colors.rose,
    cover: "https://f4.bcbits.com/img/a1435058381_65.jpg",
    artists: ["Tenno", "xander", "Team Astro"]
  },
  {
    id: "4",
    albumId: 4,
    title: "Blue Note Study Time",
    color: colors.blue,
    cover: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Raimu", "Yasumu"]
  },
  {
    id: "5",
    albumId: 5,
    title: "Chau Saura Session",
    color: colors.purple,
    cover: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["Chau Saura", "amies", "kyu"]
  },
  {
    id: "6",
    albumId: 6,
    title: "Like a Necessity",
    color: colors.orange,
    cover: "https://f4.bcbits.com/img/a0363730459_16.jpg",
    artists: ["WFS", "Nadav Cohen"]
  }
];
const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more"
}));
const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side"
}));
const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists
];
const songs = [
  {
    id: 1,
    albumId: 1,
    title: "Moonlit Walk",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "3:12"
  },
  {
    id: 2,
    albumId: 1,
    title: "Coffee Daze",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "4:50"
  },
  {
    id: 3,
    albumId: 1,
    title: "Skyline Serenade",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "3:50"
  },
  {
    id: 4,
    albumId: 1,
    title: "Urban Echoes",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "3:30"
  },
  {
    id: 5,
    albumId: 1,
    title: "Night's End",
    image: `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "4:20"
  },
  {
    id: 1,
    albumId: 2,
    title: "Silent Rain",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Urban Nocturne"],
    album: "Midnight Tales",
    duration: "3:40"
  },
  {
    id: 2,
    albumId: 2,
    title: "Lost Pages",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Urban Nocturne"],
    album: "Midnight Tales",
    duration: "3:20"
  },
  {
    id: 3,
    albumId: 2,
    title: "Midnight Tales",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Urban Nocturne"],
    album: "Midnight Tales",
    duration: "3:50"
  },
  {
    id: 4,
    albumId: 2,
    title: "City Lights",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Urban Nocturne"],
    album: "Midnight Tales",
    duration: "3:30"
  },
  {
    id: 5,
    albumId: 2,
    title: "Night Drive",
    image: `https://vinyl.lofirecords.com/cdn/shop/files/2amsynth-vinyl.png?v=1693312187`,
    artists: ["Urban Nocturne"],
    album: "Midnight Tales",
    duration: "4:20"
  },
  {
    id: 1,
    albumId: 3,
    title: "Lunar",
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ["Tenno"],
    album: "Study Session",
    duration: "3:40"
  },
  {
    id: 2,
    albumId: 3,
    title: "Go go go!",
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ["Tenno"],
    album: "Study Session",
    duration: "3:20"
  },
  {
    id: 3,
    albumId: 3,
    title: "Keep focus!",
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ["Tenno"],
    album: "Study Session",
    duration: "2:40"
  },
  {
    id: 4,
    albumId: 3,
    title: "JavaScript is the way",
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ["Tenno"],
    album: "Study Session",
    duration: "3:10"
  },
  {
    id: 5,
    albumId: 3,
    title: "No more TypeScript for me",
    image: `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    artists: ["Tenno"],
    album: "Study Session",
    duration: "2:10"
  },
  {
    id: 1,
    albumId: 4,
    title: "Lunar2",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Tenno"],
    album: "Study Session",
    duration: "3:40"
  },
  {
    id: 2,
    albumId: 4,
    title: "Go go go!",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Tenno"],
    album: "Study Session",
    duration: "3:20"
  },
  {
    id: 3,
    albumId: 4,
    title: "Keep focus!",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Tenno"],
    album: "Study Session",
    duration: "2:40"
  },
  {
    id: 4,
    albumId: 4,
    title: "JavaScript is the way",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Tenno"],
    album: "Study Session",
    duration: "3:10"
  },
  {
    id: 5,
    albumId: 4,
    title: "No more TypeScript for me",
    image: "https://f4.bcbits.com/img/a1962013209_16.jpg",
    artists: ["Tenno"],
    album: "Study Session",
    duration: "2:10"
  },
  {
    id: 1,
    albumId: 5,
    title: "Moonlit Walk",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "3:12"
  },
  {
    id: 2,
    albumId: 5,
    title: "Coffee Daze",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "4:07"
  },
  {
    id: 3,
    albumId: 5,
    title: "Skyline Serenade",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "3:50"
  },
  {
    id: 4,
    albumId: 5,
    title: "Urban Echoes",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "3:30"
  },
  {
    id: 5,
    albumId: 5,
    title: "Night's End",
    image: "https://f4.bcbits.com/img/a2793859494_16.jpg",
    artists: ["LoFi Dreamer"],
    album: "Chill Lo-Fi Music",
    duration: "4:20"
  }
];

const usePlayerStore = create((set) => ({
  isPlaying: false,
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  volume: 1,
  setVolume: (volume) => set({ volume }),
  currentMusic: { playlist: null, musics: null, music: null },
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
}));

const Slider = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(
  SliderPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex touch-none select-none items-center group",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx(SliderPrimitive.Track, { className: "relative h-1 w-full grow overflow-hidden rounded-full bg-gray-800", children: /* @__PURE__ */ jsx(SliderPrimitive.Range, { className: "absolute h-full bg-white group-hover:bg-green-400" }) }),
      /* @__PURE__ */ jsx(SliderPrimitive.Thumb, { className: "hidden group-hover:block h-3 w-3 bg-white rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Slider.displayName = SliderPrimitive.Root.displayName;

const PauseIcon$1 = () => /* @__PURE__ */ jsx("svg", { role: "img", height: "16", width: "16", "aria-hidden": "true", viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx("path", { d: "M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z" }) });
const PlayIcon$1 = () => /* @__PURE__ */ jsx("svg", { role: "img", height: "16", width: "16", "aria-hidden": "true", viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx("path", { d: "M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z" }) });
const SoundSilenceIcon = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    fill: "currentColor",
    role: "presentation",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    "aria-label": "Volumen apagado",
    viewBox: "0 0 16 16",
    children: [
      /* @__PURE__ */ jsx("path", { d: "M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z" }),
      /* @__PURE__ */ jsx("path", { d: "M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z" })
    ]
  }
);
const SoundIcon1 = () => /* @__PURE__ */ jsx(
  "svg",
  {
    fill: "currentColor",
    role: "presentation",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    "aria-label": "Volumen alto",
    id: "volume-icon",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ jsx("path", { d: "M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z" })
  }
);
const SoundIcon2 = () => /* @__PURE__ */ jsx(
  "svg",
  {
    fill: "currentColor",
    role: "presentation",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    "aria-label": "Volumen alto",
    id: "volume-icon",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ jsx("path", { d: "M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 6.087a4.502 4.502 0 0 0 0-8.474v1.65a2.999 2.999 0 0 1 0 5.175v1.649z" })
  }
);
const SoundIcon3 = () => /* @__PURE__ */ jsxs(
  "svg",
  {
    fill: "currentColor",
    role: "presentation",
    height: "16",
    width: "16",
    "aria-hidden": "true",
    "aria-label": "Volumen alto",
    id: "volume-icon",
    viewBox: "0 0 16 16",
    children: [
      /* @__PURE__ */ jsx("path", { d: "M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z" }),
      /* @__PURE__ */ jsx("path", { d: "M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z" })
    ]
  }
);
const PlayBar = ({ audioRef }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", handleTimeChangue);
    return () => {
      audioRef.current.removeEventListener("timeupdate", handleTimeChangue);
    };
  }, []);
  const handleTimeChangue = () => {
    setCurrentTime(audioRef.current.currentTime);
  };
  const timeAdjust = (value) => {
    const segs = Math.floor(value / 60);
    const mins = Math.floor(value % 60).toString().padStart(2, "0");
    const totalTime = `${segs}:${mins}`;
    return totalTime;
  };
  const handleDragging = (value) => {
    if (!isDragging) {
      audioRef.current.currentTime = value;
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-2 text-base", children: [
    /* @__PURE__ */ jsx("span", { className: "w-8", children: timeAdjust(currentTime) ? timeAdjust(currentTime) : "0:00" }),
    /* @__PURE__ */ jsx(
      Slider,
      {
        value: [currentTime],
        max: audioRef?.current?.duration ?? 0,
        min: 0,
        onValueChange: (value) => handleDragging(value),
        className: "w-[622px]"
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "w-8", children: timeAdjust(audioRef?.current?.duration) != "NaN:NaN" ? timeAdjust(audioRef?.current?.duration) : "-:--" })
  ] });
};
function Player() {
  const { currentMusic, isPlaying, setIsPlaying, volume, setVolume } = usePlayerStore((state) => state);
  const audioRef = useRef();
  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);
  const volume1 = volume >= 0.01 && volume <= 0.33;
  const volume2 = volume > volume1 && volume <= 0.66;
  const volume3 = volume > volume2 && volume <= 1;
  const preVolumeValue = useRef(volume);
  const handleClickVolume = () => {
    if (volume < 0.1) {
      setVolume(preVolumeValue.current);
    } else {
      preVolumeValue.current = volume;
      setVolume(0);
    }
  };
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else
      audioRef.current.pause();
  }, [isPlaying]);
  useEffect(() => {
    const { music: music2, playlist: playlist2 } = currentMusic;
    if (music2) {
      const src = `/music/${playlist2?.id}/0${music2.id}.mp3`;
      audioRef.current.src = src;
      audioRef.current.play();
    }
  }, [currentMusic]);
  const handlePlayAudio = () => {
    setIsPlaying(!isPlaying);
  };
  const { music, playlist } = currentMusic;
  return /* @__PURE__ */ jsxs("div", { className: "flex justify-between flex-1 px-3 pt-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex gap-4 relative w-[250px]", children: [
      /* @__PURE__ */ jsx("picture", { className: "w-14 h-14 bg-[#31323484] rounded-md", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: playlist?.cover,
          className: " rounded-sm",
          alt: playlist?.title
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center ", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-sm font-semibold", children: music?.title }),
        /* @__PURE__ */ jsx("p", { className: "text-xs opacity-75", children: music?.artists.join(",") })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 items-center", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: " bg-white  text-white p-2 rounded-full ",
          onClick: () => handlePlayAudio(),
          children: isPlaying ? /* @__PURE__ */ jsx(PauseIcon$1, {}) : /* @__PURE__ */ jsx(PlayIcon$1, {})
        }
      ),
      /* @__PURE__ */ jsx(PlayBar, { audioRef })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 w-[250px] justify-end", children: [
      /* @__PURE__ */ jsx("button", { className: "", onClick: () => handleClickVolume(), children: volume1 ? /* @__PURE__ */ jsx(SoundIcon1, {}) : volume2 ? /* @__PURE__ */ jsx(SoundIcon2, {}) : volume3 ? /* @__PURE__ */ jsx(SoundIcon3, {}) : /* @__PURE__ */ jsx(SoundSilenceIcon, {}) }),
      /* @__PURE__ */ jsx(
        Slider,
        {
          onValueChange: (val) => {
            const newVal = val;
            setVolume(newVal / 100);
          },
          type: "range",
          defaultValue: [100],
          value: [volume * 100],
          min: 0,
          max: 100,
          className: "w-24 h-[0.25rem] cursor-pointer accent-white hover:accent-green-600  rounded-2xl"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("audio", { ref: audioRef })
  ] });
}

const $$Astro$a = createAstro();
const $$Home = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Home;
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"></path></svg>`;
}, "D:/Users/Maximo/Desktop/Astro Proyectos/Clon Spotify/src/icons/Home.astro", void 0);

const $$Astro$9 = createAstro();
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Search;
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path></svg>`;
}, "D:/Users/Maximo/Desktop/Astro Proyectos/Clon Spotify/src/icons/Search.astro", void 0);

const $$Astro$8 = createAstro();
const $$Library = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Library;
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>`;
}, "D:/Users/Maximo/Desktop/Astro Proyectos/Clon Spotify/src/icons/Library.astro", void 0);

const $$Astro$7 = createAstro();
const $$AsideItems = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$AsideItems;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <li> <a class="flex gap-4 text-zinc-300 hover:text-zinc-100 py-3 px-5 font-medium items-center"${addAttribute(href, "href")}> ${renderSlot($$result, $$slots["default"])} </a> </li> </div>`;
}, "D:/Users/Maximo/Desktop/Astro Proyectos/Clon Spotify/src/components/AsideItems.astro", void 0);

const $$Astro$6 = createAstro();
const $$AsideCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$AsideCard;
  const { playlist } = Astro2.props;
  const { id, albumId, artists, color, cover, title } = playlist;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/playlist/${id}`, "href")} class="flex relative p-2 items-center gap-3 rounded-lg hover:bg-[#1A1A1A]"> <picture class="h-12 w-12 flex-none"> <img${addAttribute(cover, "src")} alt="coverImg" class="rounded-md"> </picture> <div class="text-white"> <h4> ${title} </h4> <span class="text-[#a7a7a7] text-sm"> ${artists} </span> </div> </a>`;
}, "D:/Users/Maximo/Desktop/Astro Proyectos/Clon Spotify/src/components/AsideCard.astro", void 0);

const $$Astro$5 = createAstro();
const $$AsideComponent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$AsideComponent;
  return renderTemplate`${maybeRenderHead()}<nav class="flex gap-2 flex-col flex-1"> <div class="p-2 bg-[#121212] rounded-lg"> <ul class=""> ${renderComponent($$result, "AsideItems", $$AsideItems, { "href": "/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HomeIcon", $$Home, {})}
Inicio
` })} ${renderComponent($$result, "AsideItems", $$AsideItems, { "href": "/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SearchIcon", $$Search, {})}
Buscar
` })} </ul> </div> <div class="p-2 bg-[#121212] rounded-lg flex-1"> <ul> ${renderComponent($$result, "AsideItems", $$AsideItems, { "href": "/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LibraryIcon", $$Library, {})}
Tu Biblioteca
` })} </ul> <div class=""> ${playlists.map((playlistT) => renderTemplate`${renderComponent($$result, "AsideCard", $$AsideCard, { "playlist": playlistT })}`)} </div> </div> </nav>`;
}, "D:/Users/Maximo/Desktop/Astro Proyectos/Clon Spotify/src/components/AsideComponent.astro", void 0);

const $$Astro$4 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "D:/Users/Maximo/Desktop/Astro Proyectos/Clon Spotify/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$3 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "fallback": "none" })}<link rel="icon" sizes="32x32" type="image/png" href="https://open.spotifycdn.com/cdn/images/favicon32.b64ecc03.png">${renderHead()}</head><body> <div id="grid" class="h-screen p-2 gap-2"> <aside id="aside" class="overflow-y-auto flex"> ${renderComponent($$result, "AsideComponent", $$AsideComponent, {})} </aside> <main id="main" class="overflow-y-auto bg-[#1A1A1A] rounded-lg"> ${renderSlot($$result, $$slots["default"])} </main> <footer id="player" class="min-h-16 flex items-center bg-black text-white text-xl rounded-lg"> ${renderComponent($$result, "Player", Player, { "data-astro-transition-persist": "player", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/Player", "client:component-export": "default", "data-astro-transition-scope": renderTransition($$result, "4vhbyfto", "", "player") })} </footer> </div>  </body> </html>`;
}, "D:/Users/Maximo/Desktop/Astro Proyectos/Clon Spotify/src/layouts/Layout.astro", "self");

const PauseIcon = () => /* @__PURE__ */ jsx(
  "svg",
  {
    fill: "currentColor",
    role: "img",
    height: "13",
    width: "13",
    "aria-hidden": "true",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ jsx("path", { d: "M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z" })
  }
);
const PlayIcon = () => /* @__PURE__ */ jsx(
  "svg",
  {
    fill: "currentColor",
    role: "img",
    height: "13",
    width: "13",
    "aria-hidden": "true",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ jsx("path", { d: "M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z" })
  }
);
function tablePlay({ albumId, songId }) {
  const { isPlaying, setIsPlaying, currentMusic, setCurrentMusic } = usePlayerStore((set) => set);
  const isPlayingSong = isPlaying && currentMusic?.music?.id == songId && currentMusic?.playlist.id == albumId;
  const handlePlay = () => {
    setCurrentMusic({ playlist: albumId });
    if (isPlayingSong) {
      setIsPlaying(false);
      return;
    }
    fetch(`/api/data-playlist.json?id=${albumId}`).then((res) => res.json()).then((data) => {
      const { playlist, songs } = data;
      setIsPlaying(true);
      setCurrentMusic({
        playlist,
        musics: songs,
        music: songs[songId - 1]
      });
    });
  };
  return /* @__PURE__ */ jsx("button", { onClick: () => handlePlay(), children: isPlayingSong ? /* @__PURE__ */ jsx(PauseIcon, {}) : /* @__PURE__ */ jsx(PlayIcon, {}) });
}

const $$Astro$2 = createAstro();
const $$Time = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Time;
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path><path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path></svg>`;
}, "D:/Users/Maximo/Desktop/Astro Proyectos/Clon Spotify/src/icons/Time.astro", void 0);

const $$Astro$1 = createAstro();
const $$TableMusics = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TableMusics;
  const { songs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<table class="table-auto divide-y min-w-full divide-gray-600"> <thead class="text-white"> <td class="px-4 py-1">#</td> <td class="px-4 py-1">Title</td> <td class="px-4 py-1">Album</td> <td class="px-4 py-1"><div class="pl-1"> ${renderComponent($$result, "TimeIcon", $$Time, {})} </div></td> </thead> <tbody> <tr class="h-[14px]"></tr> ${songs.map((song, index) => renderTemplate`<tr class="text-white border-spacing-0 hover:bg-[#2A2A2A] group"> <td class="px-4 py-2 w-12 "> <span class="group-hover:hidden">${index + 1}</span> <div class="hidden group-hover:block"> ${renderComponent($$result, "TablePlay", tablePlay, { "albumId": song.albumId, "songId": song.id, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Users/Maximo/Desktop/Astro Proyectos/Clon Spotify/src/components/TablePlay", "client:component-export": "default" })} </div> </td> <td class="flex gap-3 px-4 py-2"> <picture> <img${addAttribute(song.image, "src")} alt="" class="w-12 h-12 rounded-md"> </picture> <div> <h4>${song.title}</h4> <span>${song.artists.join(",")}</span> </div> </td> <td class="px-4 py-2">${song.album}</td> <td class="px-4 py-2">${song.duration}</td> </tr>`)} </tbody> </table> <tfoot></tfoot>`;
}, "D:/Users/Maximo/Desktop/Astro Proyectos/Clon Spotify/src/components/TableMusics.astro", void 0);

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const playlist = allPlaylists.find((playlistT) => playlistT.id == id);
  const playlistSongs = songs.filter((song) => song.albumId == playlist?.albumId);
  function duracionASegundos(durationString) {
    var tiempo = durationString.split(":");
    var minutos = parseInt(tiempo[0]);
    var segundos = parseInt(tiempo[1], 10);
    return minutos * 60 + segundos;
  }
  var total_segundos = 0;
  playlistSongs.forEach(function(e) {
    var duracion_str = e.duration;
    total_segundos += duracionASegundos(duracion_str);
  });
  function formatedTime(value) {
    const mins = Math.floor(value / 60).toString().padStart(2, "0");
    const segs = Math.floor(value % 60);
    return `${mins}:${segs}`;
  }
  const totalTime = formatedTime(total_segundos);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${playlist?.title}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative transition-all duration-1000"${addAttribute(renderTransition($$result2, "lwbbxtwc", "", `playlist ${id} xax`), "data-astro-transition-scope")}> <header class="flex gap-4 p-6"> <picture class="aspect-square relative z-10 w-52 h-52 flex-none mt-16"> <img${addAttribute(playlist?.cover, "src")}${addAttribute(`Cover of ${playlist?.title}`, "alt")} class="rounded-md object-cover h-full w-full hover:scale-105 transition-all duration-200"${addAttribute(renderTransition($$result2, "447rgqct", "", `playlist ${playlist?.id} image`), "data-astro-transition-scope")}> </picture> <div class="flex flex-col justify-between text-white z-10"> <h2 class="flex flex-1 items-end">Playlist</h2> <div> <h1 class="font-bold block text-5xl"> ${playlist?.title} <span${addAttribute(renderTransition($$result2, "xqvi2465", "", `playlist ${playlist?.id} title`), "data-astro-transition-scope")}></span> </h1> </div> <div class="flex-1 flex items-end"> <div class="text-sm text-gray-300 font-normal"> <div${addAttribute(renderTransition($$result2, "c5icwrtu", "", `playlist ${playlist?.id} artists`), "data-astro-transition-scope")}> <span>${playlist?.artists.join(", ")}</span> </div> <p class="mt-1"> <span>${playlistSongs.length} canciones</span>, ${totalTime != "00:0" ? totalTime : "-:--"} </p> </div> </div> </div> </header> <div class="relative z-10 px-6"></div> <div class="relative z-10"></div> <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/75 -z-10"></div> </div> <div class="p-6"> ${renderComponent($$result2, "TableMusics", $$TableMusics, { "songs": playlistSongs })} </div> ` })}`;
}, "D:/Users/Maximo/Desktop/Astro Proyectos/Clon Spotify/src/pages/playlist/[id].astro", "self");

const $$file = "D:/Users/Maximo/Desktop/Astro Proyectos/Clon Spotify/src/pages/playlist/[id].astro";
const $$url = "/playlist/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, PauseIcon$1 as P, _id_ as _, allPlaylists as a, PlayIcon$1 as b, playlists as p, songs as s, usePlayerStore as u };
