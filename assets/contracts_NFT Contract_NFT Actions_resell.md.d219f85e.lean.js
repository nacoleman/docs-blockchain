import{_ as s,v as a,b as e,R as n}from"./chunks/framework.99ac92c4.js";const F=JSON.parse('{"title":"resell","description":"","frontmatter":{"title":"resell","order":20,"deploy":["staging","mainnet"]},"headers":[],"relativePath":"contracts/NFT Contract/NFT Actions/resell.md","filePath":"contracts/NFT Contract/NFT Actions/resell.md","lastUpdated":null}'),o={name:"contracts/NFT Contract/NFT Actions/resell.md"},t=n(`<h1 id="resell" tabindex="-1">resell <a class="header-anchor" href="#resell" aria-label="Permalink to &quot;resell&quot;">​</a></h1><p>Place tokens for sale on the resell marketplace.</p><h2 id="behavior" tabindex="-1">Behavior <a class="header-anchor" href="#behavior" aria-label="Permalink to &quot;Behavior&quot;">​</a></h2><p>Allows a user to set their token for resale and to specify the expected price. Think of it like marking a token for sale in a marketplace.</p><h2 id="technical-behavior" tabindex="-1">Technical Behavior <a class="header-anchor" href="#technical-behavior" aria-label="Permalink to &quot;Technical Behavior&quot;">​</a></h2><p>Upon the usage of the <strong>resell action</strong> the action will verify that the parameters supplied in the action have values. This includes <strong>seller, token_id, price, promoter_basis_point, and memo.</strong></p><p>The memo specifically has a 256 byte limitation. The required authorization is the <strong>seller</strong> as the seller is the one who is meant to own the token that is being sold. During this process there must be a price, and the <strong>promoter_basis_point</strong> has a minimum value of <strong>250</strong> (meaning <strong>2.5%</strong>) which serves as a share of the potential promoter of the future purchase of the token being sold. Otherwise it cannot exceed the maximum resale_share_limit value for the promoter. The current value is <strong>1000 (10%)</strong>. This means that that <strong>promoter_basis_point</strong> should be between <strong>250 - 1000.</strong> The token has its version looked up and then proceeds with the following resale behavior.</p><p>Once a version is determined and the <strong>token</strong> has determined its route for resale it will retrieve the <strong>token</strong> from the token table. It will validate that the <strong>token_factory</strong> exists by using the <strong>token_factory_id</strong> specified inside of the token. It will fail if it cannot determine these values.</p><p>During the resale verification it will determine if the price specified by the user is greater than the minimum specified by the <strong>token_factory</strong>. It will also check to ensure that the token can be traded and is valid for the trading window.</p><p>It will also ensure that the token has exceeded the lockup time specified by the <strong>token_factory</strong>. Meaning that at this stage it is fully available for being resold or traded.</p><p>Once this has been completed it will ensure that the <strong>sale_shares</strong> does not exceed the maximum <strong>sales_share</strong> percentage which is 10000 basis points (100%) and normally this should always be the case.</p><p>The resale table will try to find the token and ensure it doesn’t already exist in the token resale table.</p><p>If it doesn’t exist it gets placed and the transaction is completed.</p><p><strong>Notifications</strong></p><p><code>require_recipient</code> is done for <code>seller</code> and asset manager of the token factory</p><h2 id="action-parameters" tabindex="-1">Action Parameters <a class="header-anchor" href="#action-parameters" aria-label="Permalink to &quot;Action Parameters&quot;">​</a></h2><p>Try to think of the action parameters as a <strong>JSON Object</strong> when reading this table. There will be a <strong>JavaScript</strong> example of the action below this table.</p><table><thead><tr><th>Fields</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>seller</td><td>eosio::name</td><td>The current Owner account</td></tr><tr><td>token_id</td><td>uint64_t</td><td>The NFT ID</td></tr><tr><td>price</td><td>eosio::asset</td><td>The resale price</td></tr><tr><td>promoter_basis_point</td><td>uint16_t</td><td>The resale promoter comission.</td></tr><tr><td>memo</td><td>std::string</td><td>A short operation description</td></tr></tbody></table><h2 id="cli-cleos" tabindex="-1">CLI - cleos <a class="header-anchor" href="#cli-cleos" aria-label="Permalink to &quot;CLI - cleos&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">action</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio.nft.ft</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">resell</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[{ &quot;seller&quot;: &quot;seller.acc&quot;, &quot;token_id&quot;: 25, &quot;price&quot;: &quot;4.00000000 UOS&quot;, &quot;promoter_basis_point&quot;: 250, &quot;memo&quot;: &quot;Up for Sale!&quot; }]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">seller.acc@active</span></span></code></pre></div><h2 id="javascript-eosjs" tabindex="-1">JavaScript - eosjs <a class="header-anchor" href="#javascript-eosjs" aria-label="Permalink to &quot;JavaScript - eosjs&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> api</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">transact</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">actions</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">account</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">eosio.nft.ft</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">resell</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">authorization</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">actor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">seller.acc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">permission</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">active</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#F07178;">resell</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#F07178;">seller</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">seller.acc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#F07178;">token_id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">25</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#F07178;">price</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">4.00000000 UOS</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#F07178;">promoter_basis_point</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">250</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#F07178;">memo</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Up for Sale!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">blocksBehind</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">expireSeconds</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,22),l=[t];function p(r,c,i,D,y,h){return a(),e("div",null,l)}const C=s(o,[["render",p]]);export{F as __pageData,C as default};
