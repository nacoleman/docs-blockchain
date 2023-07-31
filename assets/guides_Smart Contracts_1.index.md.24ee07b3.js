import{_ as s,v as a,b as n,R as o}from"./chunks/framework.99ac92c4.js";const u=JSON.parse('{"title":"1. Intro","description":"","frontmatter":{"title":"1. Intro","deploy":["staging","mainnet"],"outline":[0,5],"order":0,"prev":false},"headers":[],"relativePath":"guides/Smart Contracts/1.index.md","filePath":"guides/Smart Contracts/1.index.md","lastUpdated":null}'),l={name:"guides/Smart Contracts/1.index.md"},p=o(`<h1 id="intro-to-smart-contracts" tabindex="-1">Intro to Smart Contracts <a class="header-anchor" href="#intro-to-smart-contracts" aria-label="Permalink to &quot;Intro to Smart Contracts&quot;">​</a></h1><p>Smart contracts are pieces of code that are applied on-chain and have functions that can be called to run code.</p><p>Think of it like a REST endpoint that requires a POST request to run under specific parameters.</p><h2 id="language" tabindex="-1">Language <a class="header-anchor" href="#language" aria-label="Permalink to &quot;Language&quot;">​</a></h2><p>Smart contracts on Ultra are written in C++ and compiled down into Web Assembly.</p><p>It&#39;s not as intimidating as you think; here&#39;s an example <code>hello-world.cpp</code> contract.</p><details class="details custom-block"><summary>hello-world.cpp</summary><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">eosio/eosio.hpp</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">eosio/print.hpp</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">namespace</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">mycontract</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">using</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#F78C6C;">using</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">eosio</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    CONTRACT hello : public </span><span style="color:#FFCB6B;">eosio</span><span style="color:#89DDFF;">::</span><span style="color:#F07178;">contract </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#F78C6C;">using</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">eosio</span><span style="color:#89DDFF;">::</span><span style="color:#FFCB6B;">contract</span><span style="color:#89DDFF;">::</span><span style="color:#F07178;">contract</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">public</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">            ACTION </span><span style="color:#82AAFF;">hi</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">name user</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hi there, </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">   </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></details>`,7),t=[p];function e(c,r,F,i,y,D){return a(),n("div",null,t)}const C=s(l,[["render",e]]);export{u as __pageData,C as default};
