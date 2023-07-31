import{_ as s,v as a,b as n,R as e}from"./chunks/framework.99ac92c4.js";const F=JSON.parse('{"title":"burn","description":"","frontmatter":{"title":"burn","order":5,"deploy":["staging","mainnet"]},"headers":[],"relativePath":"contracts/NFT Contract/NFT Actions/burn.md","filePath":"contracts/NFT Contract/NFT Actions/burn.md","lastUpdated":null}'),o={name:"contracts/NFT Contract/NFT Actions/burn.md"},t=e(`<h1 id="burn" tabindex="-1">burn <a class="header-anchor" href="#burn" aria-label="Permalink to &quot;burn&quot;">​</a></h1><p>This action can be used to burn a token, see more details in burn.</p><h2 id="behavior" tabindex="-1">Behavior <a class="header-anchor" href="#behavior" aria-label="Permalink to &quot;Behavior&quot;">​</a></h2><p>Used to burn a non-fungible token from one user. This requires the <strong>token_id</strong> of a minted token in order to successfully burn the token. As well as the permission of the user who owns the token.</p><h2 id="technical-behavior" tabindex="-1">Technical Behavior <a class="header-anchor" href="#technical-behavior" aria-label="Permalink to &quot;Technical Behavior&quot;">​</a></h2><p><strong>Parameter validation</strong></p><p>Upon the usage of the burn action the action verifies that the parameters supplied in the action have values. This includes owner, token_ids, and memo. The memo specifically has a 256 byte limitation. The required authorization is the owner user. The token_ids vector is verified to not be empty.</p><p><strong>On-the-fly migration</strong></p><p>After v1 is activated by activers action, token exists either in v0 token table, token.a, or v1 token table, token.b. If the token exists in token.a, then the token factory from which the token was minted exists in v0 factory table, factory.a, which, in this case, is moved to factory.b. In the following descriptions, token factory and token are either v0 or v1 data structures.</p><p><strong>Main operations</strong></p><p>The token from the token table includes a token factory id and this is used to fetch the token factory data. The token factory must exist for a token to be burned. The token will not be able to be burned if the owner does not own this token. If the token is up for resale then the token is removed from the resale table.</p><p>After this data is verified the token quantity in the token factory is subtracted and checked for underflow. The token is then erased from the owner. The owner ensures that the fractional parts are truncated and they go to <code>eosio.pool</code>. <code>eosio.nftram</code> refunds the fee to each account.</p><h2 id="action-parameters" tabindex="-1">Action Parameters <a class="header-anchor" href="#action-parameters" aria-label="Permalink to &quot;Action Parameters&quot;">​</a></h2><p>Try to think of the action parameters as a <strong>JSON Object</strong> when reading this table. There will be a <strong>JavaScript</strong> example of the action below this table.</p><p><strong>Notifications</strong></p><p><code>require_recipient</code> is done for <code>owner</code> account and for asset managers of corresponding token factories</p><h3 id="v0" tabindex="-1">V0 <a class="header-anchor" href="#v0" aria-label="Permalink to &quot;V0&quot;">​</a></h3><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>owner</td><td>eosio::name</td><td>The token owner</td></tr><tr><td>token_ids</td><td>std::vector<code>&lt;uint64_t&gt;</code></td><td>The array of tokens to burn</td></tr><tr><td>memo</td><td>std::string</td><td>A short operation description.</td></tr></tbody></table><h3 id="v1" tabindex="-1">V1 <a class="header-anchor" href="#v1" aria-label="Permalink to &quot;V1&quot;">​</a></h3><p>No Changes</p><h2 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h2><h3 id="v0-v1" tabindex="-1">V0 / V1 <a class="header-anchor" href="#v0-v1" aria-label="Permalink to &quot;V0 / V1&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">action</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio.nft.ft</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">burn</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[{ &quot;owner&quot;: &quot;owner.user.acc&quot;, &quot;token_ids&quot;: [1], &quot;memo&quot;: &quot;bye bye tokens&quot; }]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">owner.user.acc@active</span></span></code></pre></div><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><h3 id="v0-v1-1" tabindex="-1">V0 / V1 <a class="header-anchor" href="#v0-v1-1" aria-label="Permalink to &quot;V0 / V1&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> api</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">transact</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">actions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">account</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">eosio.nft.ft</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">burn</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">authorization</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">actor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">owner.user.acc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">permission</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">active</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#F07178;">burn</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#F07178;">owner</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">owner.user.acc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#F07178;">token_ids</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#F07178;">memo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bye bye tokens</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">blocksBehind</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">expireSeconds</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h1 id="behavior-changes" tabindex="-1">Behavior Changes <a class="header-anchor" href="#behavior-changes" aria-label="Permalink to &quot;Behavior Changes&quot;">​</a></h1><p>After v1 is activated, if the token has already been migrated to token.b table, the UOS locked up for the token will be refunded from eosio.nfram to the relevant parties. The refund split is as follows:</p><ul><li><p>15% goes to the factory’s asset manager</p></li><li><p>70% goes to the token owner</p></li><li><p>the rest including the fractional part(about 15%) fee goes to eosio.pool</p></li></ul><p>See more detail in RAM rules for NFTs</p><h1 id="changes-in-tables-to-read-write" tabindex="-1">Changes in tables to Read/Write <a class="header-anchor" href="#changes-in-tables-to-read-write" aria-label="Permalink to &quot;Changes in tables to Read/Write&quot;">​</a></h1><p>it will migrate factory.a to factory.b, before reading the factory.b object.</p>`,32),l=[t];function r(p,c,i,h,y,D){return a(),n("div",null,l)}const C=s(o,[["render",r]]);export{F as __pageData,C as default};
