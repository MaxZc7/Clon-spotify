import{u as p,j as n}from"./playerStore.BDwdrwOU.js";import{P as m,a as y}from"./Player.l8JNN-oY.js";import"./index.CydYXOmc.js";import"./index.C_GN8oIK.js";function g({PlaylistId:t}){const{isPlaying:o,setIsPlaying:a,currentMusic:l,setCurrentMusic:e}=p(s=>s),i=o&&l?.playlist.id==t,u=()=>{if(e({playlist:t}),i){a(!1);return}fetch(`/api/data-playlist.json?id=${t}`).then(s=>s.json()).then(s=>{const{playlist:c,songs:r}=s;a(!0),e({playlist:c,musics:r,music:r[0]})})};return n.jsx("button",{className:"rounded-full bg-green-600 p-4",onClick:()=>u(),children:i?n.jsx(m,{}):n.jsx(y,{})})}export{g as default};