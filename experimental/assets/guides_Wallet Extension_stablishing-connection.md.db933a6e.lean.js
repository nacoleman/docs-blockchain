import{_ as s,v as n,b as a,R as e}from"./chunks/framework.a49639fc.js";const h=JSON.parse('{"title":"Establishing a Connection","description":"","frontmatter":{"title":"Establishing a Connection","deploy":["staging","mainnet"],"order":5,"outline":[0,4]},"headers":[],"relativePath":"guides/Wallet Extension/stablishing-connection.md","filePath":"guides/Wallet Extension/stablishing-connection.md","lastUpdated":1692281711000}'),o={name:"guides/Wallet Extension/stablishing-connection.md"},t=e(`<h1 id="establishing-a-connection" tabindex="-1">Establishing a Connection <a class="header-anchor" href="#establishing-a-connection" aria-label="Permalink to &quot;Establishing a Connection&quot;">​</a></h1><p>To begin interacting with the Ultra Wallet, a web application must first establish a connection. This connection request will ask the user for permission to share its blockchain id and public key, indicating that they are willing to continue interacting. Once the permission is set for the first time, the web application domain will be whitelisted for future connection requests. Similarly, it is possible to terminate the connection both on the application and on the user side.</p><h2 id="connecting" tabindex="-1">Connecting <a class="header-anchor" href="#connecting" aria-label="Permalink to &quot;Connecting&quot;">​</a></h2><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">response</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ultra</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">connect</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">response</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">blockchainId</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// ej1vx2ft3ht4</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">response</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">publicKey</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// EOS7uRb72dR8jrLjNuC9UoevBBH3YbVZfNKUtYCfLkV7aPGcmDjs7</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#A6ACCD;"> (err) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// { status: &quot;error&quot;, message: &quot;Connection rejected&quot; }</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>The <code>connect()</code> call will return a Promise that is resolved when the user accepts the connection request and is rejected when the user rejects the request or closes the popup.</p><h3 id="eagerly-connecting" tabindex="-1">Eagerly Connecting <a class="header-anchor" href="#eagerly-connecting" aria-label="Permalink to &quot;Eagerly Connecting&quot;">​</a></h3><p>After a web application connects to the Ultra Wallet for the first time, it gains a trusted status. Once this trust is established, the application can seamlessly link with Ultra Wallet during future visits or when the page is refreshed, eliminating the need to ask the user for authorization. This concept is commonly known as &quot;eagerly connecting&quot;.</p><p>To implement this, web applications should pass an <code>onlyIfTrusted</code> option into the <code>connect()</code> call.</p><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ultra</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">connect</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">onlyIfTrusted</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#A6ACCD;"> (err) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// { status: &#39;error&#39;, code: 4001, message: &#39;The user rejected the request.&#39; }</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h3 id="sending-a-referral-code" tabindex="-1">Sending a referral code <a class="header-anchor" href="#sending-a-referral-code" aria-label="Permalink to &quot;Sending a referral code&quot;">​</a></h3><p>An application can send its referral code to the wallet. The referral code will be used if the user signs up during the connection process.</p><p>To implement this, applications should pass the referralCode option into the connect() call.</p><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ultra</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">connect</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">referralCode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ecd1f052-9d0d-4b84-8dd3-10a753d044b5</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>To get your referral code, go to the Ultra Desktop client and then to the Wallet, and look for the &quot;My referral link&quot; section, click on the link to copy it.</p><p>Once you copy your referral link you can get the referral code from the URL. For example, the next link <a href="https://ultra.io/register/ecd1f052-9d0d-4b84-8dd3-10a753d044b5" target="_blank" rel="noreferrer">https://ultra.io/register/ecd1f052-9d0d-4b84-8dd3-10a753d044b5</a> has the referral code <code>ecd1f052-9d0d-4b84-8dd3-10a753d044b5</code>.</p><h2 id="disconnecting" tabindex="-1">Disconnecting <a class="header-anchor" href="#disconnecting" aria-label="Permalink to &quot;Disconnecting&quot;">​</a></h2><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ultra</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">disconnect</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#A6ACCD;"> (err) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// { status: &quot;error&quot;, message: &quot;Forbidden&quot; }</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>The <code>disconnect()</code> method revokes the connection permission that the user granted to the web application, if the application is already disconnected, the Promise will throw an error.</p><p>To handle disconnections, the app can also subscribe to disconnect events.</p><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">ultra</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">disconnect</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Disconnected from Ultra Wallet</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div>`,20),l=[t];function p(c,r,i,y,D,F){return n(),a("div",null,l)}const u=s(o,[["render",p]]);export{h as __pageData,u as default};
