import{_ as t,v as a,b as e,R as n}from"./chunks/framework.99ac92c4.js";const v=JSON.parse('{"title":"Activating the Chain","description":"","frontmatter":{"title":"Activating the Chain","deploy":["staging","mainnet"],"outline":[0,4],"order":-94},"headers":[],"relativePath":"learn/Block Producers/Launch Procedures/activating-the-chain.md","filePath":"learn/Block Producers/Launch Procedures/activating-the-chain.md","lastUpdated":null}'),o={name:"learn/Block Producers/Launch Procedures/activating-the-chain.md"},i=n('<h1 id="activating-the-chain" tabindex="-1">Activating the Chain <a class="header-anchor" href="#activating-the-chain" aria-label="Permalink to &quot;Activating the Chain&quot;">​</a></h1><h2 id="difference-from-eosio" tabindex="-1">Difference from EOSIO <a class="header-anchor" href="#difference-from-eosio" aria-label="Permalink to &quot;Difference from EOSIO&quot;">​</a></h2><p>Ultra is responsible for activating the chain and the <code>ultra</code> account is the only account that can activate the chain. It is important to understand that instead of having <code>eosio</code> relieve its permissions we opted instead for the <code>ultra</code> account to complete this task.</p><h2 id="how-to-activate" tabindex="-1">How to Activate <a class="header-anchor" href="#how-to-activate" aria-label="Permalink to &quot;How to Activate&quot;">​</a></h2><p>Once everything is verified for the resignation of accounts; we can do a final step to activate the chain.</p><p>This is the final step before the producers begin <strong>PRODUCING</strong> blocks.</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos push action eosio activatechn </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p ultra</span></span></code></pre></div>',7),s=[i];function c(r,h,l,p,d,u){return a(),e("div",null,s)}const g=t(o,[["render",c]]);export{v as __pageData,g as default};
