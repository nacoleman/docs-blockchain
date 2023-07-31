import{_ as r,v as i,b as C,E as a,O as e,R as n,M as o,F as l,L as s}from"./chunks/framework.ead9a57c.js";const k=JSON.parse('{"title":"Compile a Contract","description":"","frontmatter":{"title":"Compile a Contract","deploy":["staging","mainnet"],"order":-99997,"oultine":[0,4]},"headers":[],"relativePath":"guides/CDT/compile-a-contract.md","filePath":"guides/CDT/compile-a-contract.md","lastUpdated":null}'),y={name:"guides/CDT/compile-a-contract.md"},d=n('<h1 id="compile-a-contract" tabindex="-1">Compile a Contract <a class="header-anchor" href="#compile-a-contract" aria-label="Permalink to &quot;Compile a Contract&quot;">​</a></h1><p>You can follow <a href="./create-a-contract.html">Create A Contract</a> to create a simple Hello World contract.</p><p>Or example contract can found at this <a href="https://github.com/ultraio/eosio.cdt/tree/master/examples/hello" target="_blank" rel="noreferrer">https://github.com/ultraio/eosio.cdt/tree/master/examples/hello</a></p><h2 id="compile-via-cli" tabindex="-1">Compile via CLI <a class="header-anchor" href="#compile-via-cli" aria-label="Permalink to &quot;Compile via CLI&quot;">​</a></h2><p>Follow these steps to compile your contract</p><h3 id="step-1" tabindex="-1">Step 1 <a class="header-anchor" href="#step-1" aria-label="Permalink to &quot;Step 1&quot;">​</a></h3><p>Navigate to the hello folder in examples (./examples/hello), you should then see the <code>./src/hello.cpp</code> file</p><h3 id="step-2" tabindex="-1">Step 2 <a class="header-anchor" href="#step-2" aria-label="Permalink to &quot;Step 2&quot;">​</a></h3><p>Run the following commands</p>',9),A=l("div",{class:"language-shell"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"shell"),l("pre",{class:"shiki material-theme-palenight"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"$"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"mkdir"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"build")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"$"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"cd"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"build")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"$"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"eosio-cpp"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-abigen"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"../src/hello.cpp"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-o"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"hello.wasm"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-I"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"../include/")])])])],-1),h=l("div",{class:"language-shell"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"shell"),l("pre",{class:"shiki material-theme-palenight"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"$"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"mkdir"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"build")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"$"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"cd"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"build")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"$"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"eosio-cpp"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-abigen"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"../src/hello.cpp"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-o"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"hello.wasm"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-I"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"../include/")])])])],-1),D=l("div",{class:"language-shell"},[l("button",{title:"Copy Code",class:"copy"}),l("span",{class:"lang"},"shell"),l("pre",{class:"shiki material-theme-palenight"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"$"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"mkdir"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"build")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"$"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"cd"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"build")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#FFCB6B"}},"$"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"cdt-cpp"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-abigen"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"../src/hello.cpp"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-o"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"hello.wasm"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"-I"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C3E88D"}},"../include/")])])])],-1),m=n(`<p>This will generate 2 files</p><ul><li>The compiled binary wasm, <code>hello.wasm</code></li><li>The generated ABI file, <code>hello.abi</code></li></ul><h2 id="compile-via-cmake" tabindex="-1">Compile via Cmake <a class="header-anchor" href="#compile-via-cmake" aria-label="Permalink to &quot;Compile via Cmake&quot;">​</a></h2><p>You can have a look at <code>CMakeLists.txt</code> in <code>./examples/hello/src</code> as an example on how to configure a Cmake file.</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">project</span><span style="color:#A6ACCD;">(hello)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(EOSIO_WASM_OLD_BEHAVIOR </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Off</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">find_package</span><span style="color:#A6ACCD;">(eosio</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cdt)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">add_contract</span><span style="color:#A6ACCD;">( hello hello hello</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cpp )</span></span>
<span class="line"><span style="color:#82AAFF;">target_include_directories</span><span style="color:#A6ACCD;">( hello PUBLIC $</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">CMAKE_SOURCE_DIR</span><span style="color:#89DDFF;">}/../</span><span style="color:#A6ACCD;">include )</span></span>
<span class="line"><span style="color:#82AAFF;">target_ricardian_directory</span><span style="color:#A6ACCD;">( hello $</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">CMAKE_SOURCE_DIR</span><span style="color:#89DDFF;">}/../</span><span style="color:#A6ACCD;">ricardian )</span></span></code></pre></div><p>Follow these steps to compile your contract</p><h3 id="step-1-1" tabindex="-1">Step 1 <a class="header-anchor" href="#step-1-1" aria-label="Permalink to &quot;Step 1&quot;">​</a></h3><p>Navigate to the hello folder in examples (./examples/hello), you should then see the <code>./src/hello.cpp</code> file</p><h3 id="step-2-1" tabindex="-1">Step 2 <a class="header-anchor" href="#step-2-1" aria-label="Permalink to &quot;Step 2&quot;">​</a></h3><p>Run the following commands</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cmake</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">..</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">make</span></span></code></pre></div><p>This will generate 2 files under <code>./build/hello</code> directory</p><ul><li>The compiled binary wasm, <code>hello.wasm</code></li><li>The generated ABI file, <code>hello.abi</code></li></ul>`,13);function u(F,E,g,_,b,f){const t=o("Staging"),p=o("Mainnet"),c=o("Experimental");return i(),C("div",null,[d,a(t,null,{default:e(()=>[A]),_:1}),a(p,null,{default:e(()=>[h]),_:1}),a(c,null,{default:e(()=>[D]),_:1}),m])}const v=r(y,[["render",u]]);export{k as __pageData,v as default};
