import{v as s}from"./vue-3d-loader.esm.4b585ab0.js";import{f as n,I as a,o as r,q as c,h as i,_ as u}from"../app.538f4fe4.mjs";const p=n({__name:"ParallelLoadModels",setup(d){const e=a();e.value=["/models/fbx/Samba Dancing.fbx","/models/collada/pump/pump.dae","/models/ply/Lucy100k.ply"];const o=a();o.value=[{x:100,y:100,z:100},{x:300,y:300,z:300}];const l=a();l.value=[{x:0,y:0,z:0},{x:10,y:1,z:1}];const t=a();return t.value=[{x:5,y:5,z:5},{x:3,y:3,z:3}],(f,m)=>(r(),c(i(s),{filePath:e.value,scale:t.value,position:o.value,rotation:l.value,cameraPosition:{x:100,y:200,z:3e3},parallelLoad:!0,height:350,backgroundColor:"#F2F2F2"},null,8,["filePath","scale","position","rotation"]))}}),v=u(p,[["__file","ParallelLoadModels.vue"]]);export{v as default};
