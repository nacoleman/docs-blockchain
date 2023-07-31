import{_ as s,v as a,b as n,R as o}from"./chunks/framework.99ac92c4.js";const C=JSON.parse('{"title":"authmint.b","description":"","frontmatter":{"title":"authmint.b","order":4,"deploy":["staging","mainnet"]},"headers":[],"relativePath":"contracts/NFT Contract/NFT Actions/authmint.b.md","filePath":"contracts/NFT Contract/NFT Actions/authmint.b.md","lastUpdated":null}'),t={name:"contracts/NFT Contract/NFT Actions/authmint.b.md"},e=o(`<h1 id="authmint-b" tabindex="-1">authmint.b <a class="header-anchor" href="#authmint-b" aria-label="Permalink to &quot;authmint.b&quot;">​</a></h1><p>Authorize an account to be able to mint tokens.</p><h2 id="behavior" tabindex="-1">Behavior <a class="header-anchor" href="#behavior" aria-label="Permalink to &quot;Behavior&quot;">​</a></h2><p>This action can be used to delegate minting power to other accounts.</p><h2 id="technical-behavior" tabindex="-1">Technical Behavior <a class="header-anchor" href="#technical-behavior" aria-label="Permalink to &quot;Technical Behavior&quot;">​</a></h2><p><strong>Parameter validation</strong></p><p>The action requires authorization of authorizer which can be either the token_factory’s asset_manager or another authorized minter. The account being authorized - authorized_minter should exist. token_factory_id is required and must exist. quantity should be a non-zero value. The optional maximum_uos_payment specifies the maximum amount of UOS that the authorizer want to pay. memo value has a 256 byte limitation.</p><p><strong>On-the-fly migration</strong></p><p>After v1 is activated by activers action, token factory exists either in v0 factory table, factory.a, or v1 factory table, factory.b. If the token factory exists in factory.a, then the token factory is moved to factory.b.</p><p><strong>Main operations</strong></p><p>This action allows a factory asset manager to be able to authorize (delegate) minting of factory tokens to another account called authorized minter. The following rules apply for this action:</p><ul><li><p>If max_mintable_tokens is specified in the token factory, the asset manager can authorize equal to or less than the totally available tokens, which is max_mintable_tokens - minted_tokens_no - sum of delegated tokens.</p></li><li><p>An asset manager cannot authorize themselves, an authorized minter cannot return tokens to the asset manager.</p></li><li><p>An authorized minter can authorize (re-delegate) yet another authorized minter from their available amount of tokens.</p></li><li><p>An authorized minter can mint their authorized quantity of tokens.</p></li><li><p>Authorized minter info is stored into the authmintrs.a table of eosio.nft.ft contract with the token factory ID scope.</p></li></ul><p><strong>RAM usage/cost calculation and payment/refund</strong></p><ul><li><p>RAM usage used to store authorized minter info is covered by <code>eosio.nftram</code> account. If the unused RAM of eosio.nftram is less than or equal to 200MB, the action can’t be executed.</p></li><li><p>The cost of a authorized minter entry is paid to <code>eosio.nftram</code> and it will be locked up in the authorized minter entry. The funds are released back to the orinigal payer after the authorized tokens are minted</p><pre><code>-   First, the cost in USD is (factory RAM payment size) \\* (RAM price), where

    -   NFT RAM payment size: **124 bytes**

    -   RAM price: **0.15 USD/KB**

-   The cost is paid in UOS. The action gets \`1 MINUTE\` conversion rate in USD/UOS from \`eosio.oracle\` contract. and calculates the cost by
    (124B/1024B \\* 0.15USD/KB) / (conversion rate) = \`0.01816406\` **USD**/(conversion rate)
</code></pre></li><li><p>When a manager (i.e., factory’s asset manager)/authorized minter add a new authorized minter</p><ul><li><p>RAM usage will be charged according to RAM pricing rules, and its payment is sent from the manager/authorized minter to eosio.nftram in UOS.</p></li><li><p>The payment and RAM usage are accumulated and book-kept in the manager&#39;s RAM vault as a record in RAM vault table, ramvault.a. Update the existing authorized minter’s quota (i.e., the amount of tokens that an authorized minter can mint) doesn&#39;t cost anything.</p></li><li><p>If maximum_uos_payment is specified, the amount of payment will be checked to confirm whether payment is no more than maximum_uos_payment.</p></li></ul></li><li><p>When an authorized minter’s quota becomes zero (by minting their quota or by delegating their quota to another authorized minter)</p><ul><li><p>The authorized minter’s info is removed from authmintrs.a table.</p></li><li><p>The factory’s manager will get the refund proportional to the amount of RAM released from the RAM vault, i.e. refund = (accumulated RAM payment) * (released amount of RAM)/(accumulated amount of RAM usage).</p></li></ul></li></ul><p><strong>Notifications</strong></p><p><code>require_recipient</code> is done for <code>authorizer</code>, <code>authorized_minter</code> and for of a token under resell and for asset manager of the token factory.</p><h2 id="action-parameters" tabindex="-1">Action Parameters <a class="header-anchor" href="#action-parameters" aria-label="Permalink to &quot;Action Parameters&quot;">​</a></h2><p>The action parameters as an <strong>JSON Array of Objects.</strong> The Object description is listed in the table below.</p><h3 id="v0" tabindex="-1">V0 <a class="header-anchor" href="#v0" aria-label="Permalink to &quot;V0&quot;">​</a></h3><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>authorizer</td><td>eosio::name</td><td>The account that authorizes</td></tr><tr><td>authorized_minter</td><td>eosio::name</td><td>The account being authorized</td></tr><tr><td>quantity</td><td>uint32_t</td><td>The number of tokens being authorized</td></tr><tr><td>token_factory_id</td><td>std::optional&lt;uint64_t&gt;</td><td>The issuing token factory ID</td></tr><tr><td>memo</td><td>std::string</td><td>A short operation description.</td></tr></tbody></table><h3 id="v1" tabindex="-1">V1 <a class="header-anchor" href="#v1" aria-label="Permalink to &quot;V1&quot;">​</a></h3><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>authorizer</td><td>eosio::name</td><td>The account that authorizes</td></tr><tr><td>authorized_minter</td><td>eosio::name</td><td>The account being authorized</td></tr><tr><td>token_factory_id</td><td>uint64_t</td><td>The issuing token factory ID</td></tr><tr><td>quantity</td><td>uint32_t</td><td>The number of tokens being authorized</td></tr><tr><td>maximum_uos_payment</td><td>std::optional&lt;uint64_t&gt;</td><td>Maximum UOS payment the authorizer is willing to pay</td></tr><tr><td>memo</td><td>std::string</td><td>A short operation description.</td></tr></tbody></table><h2 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h2><h3 id="v0-1" tabindex="-1">V0 <a class="header-anchor" href="#v0-1" aria-label="Permalink to &quot;V0&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">action</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio.nft.ft</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">authminter</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;authorizer&quot;: &quot;carol&quot;, &quot;authorized_minter&quot;: &quot;diane&quot;, &quot;token_factory_id&quot;: &quot;4503599627370496&quot;, &quot;quantity&quot;: &quot;1&quot;, &quot;memo&quot;: &quot;&quot;}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">carol@active</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># to view the authorization records (alice is the Asset Manager):</span></span>
<span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio.nft.ft</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alice</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">authmintrs.a</span></span></code></pre></div><h3 id="v1-1" tabindex="-1">V1 <a class="header-anchor" href="#v1-1" aria-label="Permalink to &quot;V1&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">action</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio.nft.ft</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">authmint.b</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;authorizer&quot;: &quot;carol&quot;, &quot;authorized_minter&quot;: &quot;diane&quot;, &quot;token_factory_id&quot;: 0, &quot;quantity&quot;: 1, &quot;maximum_uos_payment&quot;: &quot;1.00000000 UOS&quot;, memo&quot;: &quot;&quot;}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">carol@active</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># to view the authorization records (alice is the autorhize minter):</span></span>
<span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">table</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio.nft.ft</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alice</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">authmintrs.a</span></span></code></pre></div><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><h3 id="v0-2" tabindex="-1">V0 <a class="header-anchor" href="#v0-2" aria-label="Permalink to &quot;V0&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">transact</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    [</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">account</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">eosio.nft.ft</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">authminter</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">authorization</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">actor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">carol</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">permission</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">active</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">authorizer</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">carol</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">authorized_minter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">diane</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">token_factory_id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">4503599627370496</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">quantity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">memo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">blocksBehind</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">expireSeconds</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h3 id="v1-2" tabindex="-1">V1 <a class="header-anchor" href="#v1-2" aria-label="Permalink to &quot;V1&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">transact</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    [</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">account</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">eosio.nft.ft</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">authmint.b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">authorization</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">actor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">carol</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">permission</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">active</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">authorizer</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">carol</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">authorized_minter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">diane</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">token_factory_id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">quantity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">maximum_uos_payment</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1.00000000 UOS</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">memo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">blocksBehind</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">expireSeconds</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,32),l=[e];function p(r,c,i,y,D,h){return a(),n("div",null,l)}const F=s(t,[["render",p]]);export{C as __pageData,F as default};
