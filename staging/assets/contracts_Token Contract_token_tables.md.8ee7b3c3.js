import{_ as s,v as o,b as t,R as a}from"./chunks/framework.ead9a57c.js";const D=JSON.parse('{"title":"Token Tables","description":"","frontmatter":{"title":"Token Tables","order":1,"deploy":["staging","mainnet"]},"headers":[],"relativePath":"contracts/Token Contract/token_tables.md","filePath":"contracts/Token Contract/token_tables.md","lastUpdated":null}'),e={name:"contracts/Token Contract/token_tables.md"},l=a('<h1 id="token-tables" tabindex="-1">Token Tables <a class="header-anchor" href="#token-tables" aria-label="Permalink to &quot;Token Tables&quot;">​</a></h1><h2 id="accounts" tabindex="-1">accounts <a class="header-anchor" href="#accounts" aria-label="Permalink to &quot;accounts&quot;">​</a></h2><p>Store all account balance created by this contract</p><ul><li>Code: <code>eosio.token</code></li><li>Table: <code>accounts</code></li><li>Scope: <code>user</code></li><li>Key: <code>symbol_raw_value</code></li><li>Data</li></ul><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>balance</code></td><td>eosio::asset</td><td>Token balance</td></tr></tbody></table><ul><li><code>cleos</code> Query Example</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio.token</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">USE</span><span style="color:#A6ACCD;">R</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">accounts</span></span></code></pre></div><ul><li><code>curl</code> query example</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">NODEOS_API_I</span><span style="color:#A6ACCD;">P</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">/v1/chain/get_table_rows</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-X</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">POST</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;scope&quot;:&quot;&lt;USER&gt;&quot;, &quot;code&quot;:&quot;eosio.token&quot;, &quot;table&quot;:&quot;accounts&quot;, &quot;json&quot;: true}</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><h2 id="stat" tabindex="-1">stat <a class="header-anchor" href="#stat" aria-label="Permalink to &quot;stat&quot;">​</a></h2><p>Store token supply created by this contract</p><ul><li>Code: <code>eosio.token</code></li><li>Table: <code>stat</code></li><li>Scope: <code>symbol_raw_value</code></li><li>Key: <code>symbol_raw_value</code></li><li>Data</li></ul><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>supply</code></td><td>eosio::asset</td><td>Available token supply</td></tr><tr><td><code>max_supply</code></td><td>eosio::asset</td><td>Maximum token supply</td></tr><tr><td><code>issuer</code></td><td>eosio::name</td><td>Issuer of this token</td></tr></tbody></table><ul><li><code>cleos</code> Query Example</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio.token</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">SYMBOL_RAW_VALU</span><span style="color:#A6ACCD;">E</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stat</span></span></code></pre></div><ul><li><code>curl</code> query example</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">NODEOS_API_I</span><span style="color:#A6ACCD;">P</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">/v1/chain/get_table_rows</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-X</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">POST</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;scope&quot;:&quot;&lt;SYMBOL_RAW_VALUE&gt;&quot;, &quot;code&quot;:&quot;eosio.token&quot;, &quot;table&quot;:&quot;stat&quot;, &quot;json&quot;: true}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">s</span></span></code></pre></div>',17),n=[l];function p(c,r,d,i,u,y){return o(),t("div",null,n)}const h=s(e,[["render",p]]);export{D as __pageData,h as default};
