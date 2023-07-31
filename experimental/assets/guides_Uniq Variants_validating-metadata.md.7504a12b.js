import{_ as s,v as a,b as n,R as e}from"./chunks/framework.a49639fc.js";const C=JSON.parse('{"title":"Validating Metadata","description":"","frontmatter":{"title":"Validating Metadata","deploy":["staging","mainnet"],"order":-99991},"headers":[],"relativePath":"guides/Uniq Variants/validating-metadata.md","filePath":"guides/Uniq Variants/validating-metadata.md","lastUpdated":1690815193000}'),l={name:"guides/Uniq Variants/validating-metadata.md"},o=e(`<h1 id="validating-metadata" tabindex="-1">Validating Metadata <a class="header-anchor" href="#validating-metadata" aria-label="Permalink to &quot;Validating Metadata&quot;">​</a></h1><p>The factory metadata contains information about each file, including its integrity. This integrity is established by calculating a hash using the SHA256 algorithm, which is typically represented in hex format. Additionally, the type of hash used is usually SHA256 for uniqs created on Ultra.</p><p>However, it is important to discuss the specific methods employed to generate these SHA256 values in the first place.</p><h2 id="why-sha256" tabindex="-1">Why SHA256? <a class="header-anchor" href="#why-sha256" aria-label="Permalink to &quot;Why SHA256?&quot;">​</a></h2><p>SHA256 become a popular and widely adopted cryptographic hash function.</p><p>Its speed and efficiency are quite good when generating hash values.</p><p>SHA256 is easily implementable in all programming languages with minimal effort.</p><h2 id="integrity-building-process" tabindex="-1">Integrity Building Process <a class="header-anchor" href="#integrity-building-process" aria-label="Permalink to &quot;Integrity Building Process&quot;">​</a></h2><ol><li>Walk through each object in the metadata and determine if it is a <code>StaticResource</code>.</li></ol><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">StaticResource</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">contentType</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MimeTypes</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">uris</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">integrity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">SHA256</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">hash</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ol start="2"><li>If the <code>integrity</code> in a <code>StaticResource</code> is set to <code>null</code> then we need to generate it.</li><li>We loop through each of the <code>uris</code> and generate a <code>hash</code> for each <code>uri</code> and append it to a single <code>string</code>.</li></ol><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> contentHashes </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> (</span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> someData</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">uris</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">++</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newHash</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">someHashBuilder</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">someData</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">uris</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">])</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// Usually checks if local or external</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">contentHashes</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">newHash</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ol start="4"><li>We generate a <code>SHA256</code> of the <code>contentHashes</code>.</li><li>We append that <code>SHA256</code> hash and generate the <code>integrity</code> for that <code>StaticResource</code> in the file.</li><li>Repeat until all <code>StaticResource</code> objects have integrity generated.</li><li>Hash the contents of the metadata file (<code>json</code>) and that will be the <code>hash</code> that you pass to the chain.</li></ol><h2 id="create-hash-from-file" tabindex="-1">Create HASH from File <a class="header-anchor" href="#create-hash-from-file" aria-label="Permalink to &quot;Create HASH from File&quot;">​</a></h2><p>In most cases we use the standard <code>crypto</code> <a href="https://nodejs.org/api/crypto.html#class-hash" target="_blank" rel="noreferrer">library the comes with NodeJS</a>.</p><p>However there is a fairly simple process for generating the <code>hash</code> data.</p><h3 id="ts-js-example" tabindex="-1">TS/JS Example <a class="header-anchor" href="#ts-js-example" aria-label="Permalink to &quot;TS/JS Example&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> stream </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> fs</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createReadStream</span><span style="color:#A6ACCD;">(someFilePath)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> hash </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createHash</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sha256</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">encoding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hex</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">stream</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pipe</span><span style="color:#A6ACCD;">(hash)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">resolve</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Function</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">stream</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">end</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> hash</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">read</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="create-hash-from-external-content" tabindex="-1">Create HASH from External Content <a class="header-anchor" href="#create-hash-from-external-content" aria-label="Permalink to &quot;Create HASH from External Content&quot;">​</a></h2><p>In some cases we have <code>external</code> content that needs to be hashed as well. This means that the file is already uploaded on an external server somewhere and we need to fetch the content and create a <code>hash</code> from that data.</p><p>We <strong>do not format</strong> anything that comes back from a URL; we ensure that the response is okay and assume the content is correct.</p><h3 id="ts-js-example-1" tabindex="-1">TS/JS Example <a class="header-anchor" href="#ts-js-example-1" aria-label="Permalink to &quot;TS/JS Example&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> response </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fetch</span><span style="color:#A6ACCD;">(url)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">response</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ok) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">undefined;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> hash </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createHash</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sha256</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">encoding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hex</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">response</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pipe</span><span style="color:#A6ACCD;">(hash)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">resolve</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Function</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">response</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">end</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> hash</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">read</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="single-file-verification" tabindex="-1">Single File Verification <a class="header-anchor" href="#single-file-verification" aria-label="Permalink to &quot;Single File Verification&quot;">​</a></h2><p>To verify a single <code>.json</code> file along with its data, it is advisable to use the hash that is available on-chain and compare it with the contents of the file. By hashing the contents of the <code>.json</code> file and verifying it against the chain, you can ensure the validity of the entire file and its contents.</p><p>However, if you require more extensive verification, you will need to inspect each <code>uri</code> and validate the contents of all <code>uris</code> that are present in <code>uris</code> property, and then follow the aforementioned steps to ensure the validity of the data.</p>`,26),p=[o];function t(c,r,i,y,D,F){return a(),n("div",null,p)}const h=s(l,[["render",t]]);export{C as __pageData,h as default};
