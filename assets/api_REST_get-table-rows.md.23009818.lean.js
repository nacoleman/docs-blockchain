import{_ as a,v as o,b as t,E as n,R as e,M as l}from"./chunks/framework.99ac92c4.js";const q=JSON.parse('{"title":"/get_table_rows","description":"","frontmatter":{"title":"/get_table_rows","deploy":["staging","mainnet"]},"headers":[],"relativePath":"api/REST/get-table-rows.md","filePath":"api/REST/get-table-rows.md","lastUpdated":null}'),p={name:"api/REST/get-table-rows.md"},r=e(`<h1 id="post-get-table-rows" tabindex="-1">POST - /get_table_rows <a class="header-anchor" href="#post-get-table-rows" aria-label="Permalink to &quot;POST - /get_table_rows&quot;">​</a></h1><p>Returns rows in a table given a code, table, and a scope. Rows will return empty if there is no table available under that table, or scope.</p><h3 id="body" tabindex="-1">Body <a class="header-anchor" href="#body" aria-label="Permalink to &quot;Body&quot;">​</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">code</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">eosio.nft.ft</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">table</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">factory.a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scope</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">eosio.nft.ft</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">json</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">limit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="additional-parameters" tabindex="-1">Additional Parameters <a class="header-anchor" href="#additional-parameters" aria-label="Permalink to &quot;Additional Parameters&quot;">​</a></h3><p>There are many additional parameters but here are the useful ones.</p><ul><li><p>lower_bound - The lowest matching start point in table rows. Useful for looking from forward to back.</p></li><li><p>upper_bound - The highest matching point in the table rows. Useful for looking from back to forward.</p></li><li><p>limit - How many entries to return.</p></li><li><p>json - convert from serialized to readable json. Should always set this to true.</p></li></ul><h3 id="request" tabindex="-1">Request <a class="header-anchor" href="#request" aria-label="Permalink to &quot;Request&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">curl -X POST -d &#39;{&quot;code&quot;: &quot;eosio.nft.ft&quot;, &quot;table&quot;: &quot;factory.a&quot;, &quot;scope&quot;: &quot;eosio.nft.ft&quot;, &quot;json&quot;: true, &quot;limit&quot;: 5}&#39;  https://api.ultra.eossweden.org/v1/chain/get_table_rows</span></span></code></pre></div><h3 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-label="Permalink to &quot;Response&quot;">​</a></h3><p>If the response has &quot;more&quot; with an account name that means there are more entries below and potentially above.</p><details class="details custom-block"><summary>Response</summary><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rows</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: [</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">asset_manager</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ultra.nft.ft</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">more</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">here</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">	]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">more</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">next_key</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></details><h2 id="try-it" tabindex="-1">Try It <a class="header-anchor" href="#try-it" aria-label="Permalink to &quot;Try It&quot;">​</a></h2>`,13);function c(i,y,F,D,u,d){const s=l("DemoApi");return o(),t("div",null,[r,n(s,{type:"POST",query:"/v1/chain/get_table_rows",body:[{key:"code",value:"eosio.nft.ft"},{key:"table",value:"factory.b"},{key:"scope",value:"eosio.nft.ft"},{key:"limit",value:5}]},null,8,["body"])])}const b=a(p,[["render",c]]);export{q as __pageData,b as default};
