import{_ as s,v as a,b as n,R as t}from"./chunks/framework.a49639fc.js";const A=JSON.parse('{"title":"newebact - create an EBA account","description":"","frontmatter":{"title":"newebact - create an EBA account","order":1,"deploy":["staging","mainnet"]},"headers":[],"relativePath":"contracts/System Contract/System Actions/newebact.md","filePath":"contracts/System Contract/System Actions/newebact.md","lastUpdated":1690815193000}'),o={name:"contracts/System Contract/System Actions/newebact.md"},l=t(`<h1 id="newebact-create-an-eba-account" tabindex="-1">newebact - create an EBA account <a class="header-anchor" href="#newebact-create-an-eba-account" aria-label="Permalink to &quot;newebact - create an EBA account&quot;">​</a></h1><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>creator</td><td>eosio::name</td><td>The account that pays for the new account</td></tr><tr><td>owner</td><td>eosio::authority</td><td>The owner authority of new account</td></tr><tr><td>active</td><td>eosio::authority</td><td>The active authority of new account</td></tr><tr><td>max_payment</td><td>eosio::asset</td><td>The max payment for the new account creation in UOS</td></tr></tbody></table><h2 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">action</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">delegatebw</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[&quot;from&quot;,&quot;receiver&quot;,&quot;5.0000 UOS&quot;,true]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">from</span></span></code></pre></div><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">await api</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">transact</span><span style="color:#89DDFF;">({</span></span>
<span class="line"><span style="color:#A6ACCD;">  actions</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      account</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">eosio</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      name</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">delegatebw</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      authorization</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[{</span><span style="color:#A6ACCD;"> actor</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">from</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> permission</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">active</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}],</span></span>
<span class="line"><span style="color:#A6ACCD;">      data</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        from</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">from</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        receiver</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">receiver</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        stake_net_quantity</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">5.00000000 UOS</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        transfer</span><span style="color:#89DDFF;font-style:italic;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#89DDFF;">});</span></span></code></pre></div>`,6),e=[l];function p(c,r,D,y,i,F){return a(),n("div",null,e)}const d=s(o,[["render",p]]);export{A as __pageData,d as default};
