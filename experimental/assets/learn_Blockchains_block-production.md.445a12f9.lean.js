import{_ as t,v as n,b as e,F as o,L as s}from"./chunks/framework.a49639fc.js";const i="/experimental/images/ultra-bp-production.jpg",v=JSON.parse('{"title":"Block Production","description":"","frontmatter":{"title":"Block Production","deploy":["staging","mainnet"],"outline":[0,4],"order":-99},"headers":[],"relativePath":"learn/Blockchains/block-production.md","filePath":"learn/Blockchains/block-production.md","lastUpdated":1690815193000}'),r={name:"learn/Blockchains/block-production.md"},c=o("h1",{id:"block-production",tabindex:"-1"},[s("Block Production "),o("a",{class:"header-anchor",href:"#block-production","aria-label":'Permalink to "Block Production"'},"​")],-1),a=o("p",null,"Block production is the base function for the network.",-1),d=o("p",null,"Each Block Producer is either producing or is on standby, waiting in the wings in case a producing team needs to be swapped out.",-1),l=o("p",null,"The production schedule decides in which order that the network sends transactions to a BP’s node. In a traditional EOSIO network, this order is decided by the token holders voting the Block Producers up and down the ranks. In Ultra’s network, we tightly control the production schedule and optimize it to increase the network’s throughput.",-1),h=o("p",null,"Typically, EOSIO-based networks have 21 producing BPs and many more in standby. Ultra currently has 7 producing BPs, and none in standby.",-1),u=o("p",null,"The default block time is 500ms, meaning that a new block is produced by the network twice a second.",-1),p=o("p",null,[o("strong",null,"Ultra Block Production Strategy")],-1),_=o("p",null,[o("img",{src:i,alt:""})],-1),k=[c,a,d,l,h,u,p,_];function b(m,g,w,B,P,f){return n(),e("div",null,k)}const x=t(r,[["render",b]]);export{v as __pageData,x as default};
