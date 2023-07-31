import{_ as e,v as a,b as t,R as r}from"./chunks/framework.ead9a57c.js";const m=JSON.parse('{"title":"About Contract Builder","description":"","frontmatter":{"title":"About Contract Builder","deploy":["staging","mainnet"],"order":-99999999},"headers":[],"relativePath":"tools/contract-builder/index.md","filePath":"tools/contract-builder/index.md","lastUpdated":null}'),o={name:"tools/contract-builder/index.md"},l=r('<h1 id="contract-builder-overview" tabindex="-1">Contract Builder Overview <a class="header-anchor" href="#contract-builder-overview" aria-label="Permalink to &quot;Contract Builder Overview&quot;">​</a></h1><p>The contract builder allows you to easily build smart contracts in various ways.</p><p>You can drag &amp; drop, or use the <code>cli</code> directly, or even integrate it as a library into your own tools.</p><p>The contract builder comes in three different flavors.</p><ul><li>Library</li><li>Global <code>cli</code> application</li><li>Binary File</li></ul><p>Each of these are available to download from the main repository.</p><p>Usage as a library can be viewed inside of the README in the official repository.</p><p><a href="https://github.com/ultraio/contract-builder" target="_blank" rel="noreferrer">https://github.com/ultraio/contract-builder</a></p><h2 id="supports" tabindex="-1">Supports <a class="header-anchor" href="#supports" aria-label="Permalink to &quot;Supports&quot;">​</a></h2><ul><li>eosio-cpp</li><li>cdt-cpp</li><li>cmake</li></ul><h2 id="dependencies" tabindex="-1">Dependencies <a class="header-anchor" href="#dependencies" aria-label="Permalink to &quot;Dependencies&quot;">​</a></h2><ul><li><a href="https://docs.docker.com/engine/install/" target="_blank" rel="noreferrer">Docker</a></li></ul><h2 id="installing-with-nodejs" tabindex="-1">Installing with NodeJS <a class="header-anchor" href="#installing-with-nodejs" aria-label="Permalink to &quot;Installing with NodeJS&quot;">​</a></h2><p>Keep in mind we use at least Node v16+ for this.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm i -g @ultraos/contract-builder</span></span></code></pre></div><h2 id="obtaining-binary-files" tabindex="-1">Obtaining Binary Files <a class="header-anchor" href="#obtaining-binary-files" aria-label="Permalink to &quot;Obtaining Binary Files&quot;">​</a></h2><p>Binaries can be <a href="https://github.com/ultraio/contract-builder/releases" target="_blank" rel="noreferrer">obtained here</a></p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>If you are on windows, you can drag / drop the folder onto the binary file to compile.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">contract-builder ./some-folder/some-example-contract-folder</span></span></code></pre></div><h3 id="build-parameters" tabindex="-1">Build Parameters <a class="header-anchor" href="#build-parameters" aria-label="Permalink to &quot;Build Parameters&quot;">​</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">contract-builder</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./test/example-contract</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">-DTEST=true</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><p>See <a href="https://github.com/ultraio/contract-builder/tree/main/test" target="_blank" rel="noreferrer">https://github.com/ultraio/contract-builder/tree/main/test</a> for example contracts to utilize with this project.</p>',24),i=[l];function s(n,c,p,d,u,h){return a(),t("div",null,i)}const g=e(o,[["render",s]]);export{m as __pageData,g as default};
