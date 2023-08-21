import{_ as e,v as t,b as a,R as s}from"./chunks/framework.ead9a57c.js";import{_ as o}from"./chunks/download.3a22489a.js";const n="/staging/images/token-factories/new-token-factory.png",l="/staging/images/token-factories/great_success.png",q=JSON.parse('{"title":"Your First Token Factory","description":"","frontmatter":{"title":"Your First Token Factory","deploy":["staging","mainnet"],"order":5,"outline":[0,4]},"headers":[],"relativePath":"guides/Building Token Factories/firsttokenfactory.md","filePath":"guides/Building Token Factories/firsttokenfactory.md","lastUpdated":null}'),r={name:"guides/Building Token Factories/firsttokenfactory.md"},i=s('<h1 id="your-first-token-factory" tabindex="-1">Your First Token Factory <a class="header-anchor" href="#your-first-token-factory" aria-label="Permalink to &quot;Your First Token Factory&quot;">​</a></h1><h2 id="make-sure-you-re-ready" tabindex="-1">Make sure you&#39;re ready <a class="header-anchor" href="#make-sure-you-re-ready" aria-label="Permalink to &quot;Make sure you&#39;re ready&quot;">​</a></h2><p>Once you have your <a href="./creatingmetadata.html">metadata set up</a>, you&#39;ll be ready to create your first token factory.</p><p>Just to be absolutely clear, the expected flow for building a Token Factory is:</p><ol><li>Upload images</li><li>Generate metadata</li><li>Calculate hashes</li><li>Push on-chain</li></ol><p>Without the images already in situ, the metadata tool can not verify that they exist, nor can it create the unique hashes that identify them.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><strong>It is up to you to manage the Token Factory images and ensure that they are permanently available for the network to access.</strong></p></div><p>If you&#39;d prefer to focus just on this section and learn how to push the on-chain transaction that generates the Token Factory, we have prepared a simple example zip file for you that already has been generated based on files that are located in this developer guide. You&#39;re welcome to upload this to anywhere semi-permanent for your learning purposes. We suggest Github, and you can access it as a RAW file from there.</p><p><a href="/staging/zip/example_token_factory.zip"><img src="'+o+'" alt="Download"></a></p><p>To create a Token Factory on Testnet, you&#39;ll be using the Ultra Developer Tools. If you haven&#39;t set up your developer environment, we&#39;ve <a href="./yourdevelopmentenv.html">set up a quick checklist</a> for you to be able to hit the ground running.</p><p>Once you&#39;re inside your docker image, have your wallet set up, and have your Testnet account ready, you&#39;re good to go for the next step.</p><h2 id="creating-your-first-token-factory" tabindex="-1">Creating your first Token Factory <a class="header-anchor" href="#creating-your-first-token-factory" aria-label="Permalink to &quot;Creating your first Token Factory&quot;">​</a></h2><p><img src="'+n+`" alt=""></p><p>Once you have everything set up, you&#39;ll be ready to create this Token Factory on the Testnet.</p><p>The following is an example transaction. You will have to fill in the missing details:</p><ul><li><code>&lt;YOUR ACCOUNT&gt;</code> - Your Testnet account</li><li><code>&lt;MINT WINDOW START&gt;</code> - A datetime in the format <code>2021-05-31T00:00:00</code></li><li><code>&lt;TRADING WINDOW START&gt;</code> - A datetime in the format <code>2021-05-31T00:00:00</code></li><li><code>&lt;YOUR UNIQ FACTORY URI&gt;</code> - The URI of the metadata either as a zip file, or targeting the <code>factory.json</code> file with a full path</li><li><code>&lt;YOUR META HASH&gt;</code> - The hash of the filename, you can find this in <code>upload.json</code> in the <code>factory</code> block at the top</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cleos</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-u</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://ultratest.api.eosnation.io</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">action</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eosio.nft.ft</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[</span></span>
<span class="line"><span style="color:#C3E88D;">      {</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;memo&quot;:&quot;thirdPartyUniqNewMeta&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;version&quot;:0,</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;asset_manager&quot;:&quot;&lt;YOUR ACCOUNT&gt;&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;asset_creator&quot;:&quot;&lt;YOUR ACCOUNT&gt;&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;conversion_rate_oracle_contract&quot;:null,</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;chosen_rate&quot;:null,</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;minimum_resell_price&quot;:null,</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;resale_shares&quot;:null,</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;mintable_window_start&quot;:&quot;&lt;MINT WINDOW START&gt;&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;mintable_window_end&quot;:null,</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;trading_window_start&quot;: &quot;&lt;TRADING WINDOW START&gt;&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;trading_window_end&quot;:null,</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;recall_window_start&quot;: null,</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;recall_window_end&quot;:null,</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;max_mintable_tokens&quot;:10,</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;lockup_time&quot;:null,</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;conditionless_receivers&quot;:null,</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;stat&quot;:0,</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;meta_uris&quot;:[&quot;&lt;YOUR UNIQ FACTORY URI&gt;&quot;],</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;meta_hash&quot;:&quot;&lt;YOUR META HASH&gt;&quot;,</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;authorized_minters&quot;:[],</span></span>
<span class="line"><span style="color:#C3E88D;">        &quot;account_minting_limit&quot;:1</span></span>
<span class="line"><span style="color:#C3E88D;">      }</span></span>
<span class="line"><span style="color:#C3E88D;">    ]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-p </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">YOUR</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ACCOUN</span><span style="color:#A6ACCD;">T</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>Once you&#39;ve run this command, you should get a message confirming that your transaction has been executed locally.</p><p>To see it in action on the Testnet, hop on over to the <a href="https://explorer.testnet.ultra.io/" target="_blank" rel="noreferrer">Testnet block explorer</a> and input your account name into the search box at the top.</p><p>You should see a new transaction that shows that your new Token Factory has been successfully created.</p><p><img src="`+l+'" alt=""></p><p>We are glossing over a lot of functionality here, in the interest of getting yup up and running quickly. Later guides will cover some of the more advanced features that our NFT standard supports, including variants, authorized minters, and much more.</p><p>In the meantime, congratulations on creating your first Token Factory. <strong>Now, let&#39;s go mint your first Uniq!</strong></p>',23),p=[i];function c(u,y,d,h,g,m){return t(),a("div",null,p)}const D=e(r,[["render",c]]);export{q as __pageData,D as default};
