import{u as s,d as r,v as c,b as u,E as t,O as a,R as d,M as l,L as h}from"./chunks/framework.a49639fc.js";const p="/experimental/images/uwax_main.png",m=d('<h1 id="ultra-wallet-browser-extension" tabindex="-1">Ultra Wallet Browser Extension <a class="header-anchor" href="#ultra-wallet-browser-extension" aria-label="Permalink to &quot;Ultra Wallet Browser Extension&quot;">​</a></h1><p><img src="'+p+'" alt=""></p><p>The Ultra Wallet browser extension is a crypto wallet that allows you to access decentralized applications on Ultra&#39;s blockchain and securely manage your digital assets.</p><p>The principal functions are to create and manage private keys on behalf of its users, to manage the connections between the wallet and web applications, and allow users to securely sign transactions.</p><p>To interact with the wallet, the wallet injects an object named <code>ultra</code> into the javascript context of every site. This object contains all the methods required to obtain the user&#39;s blockchain id, their public key, and to sign blockchain transactions.</p><h2 id="links" tabindex="-1">Links <a class="header-anchor" href="#links" aria-label="Permalink to &quot;Links&quot;">​</a></h2><ul><li><a href="./installing-extension.html">How to install the extension</a></li><li><a href="./get-tokens-testnet.html">How to get tokens on Testnet</a></li><li><a href="https://stackblitz.com/edit/ultra-wallet-test" target="_blank" rel="noreferrer">Demo application</a></li><li><a href="./developer-resources.html">Developer resources</a></li><li><a href="https://github.com/Stuyk/ultra-wallet-app-template" target="_blank" rel="noreferrer">App Template</a></li></ul><h2 id="try-it" tabindex="-1">Try It <a class="header-anchor" href="#try-it" aria-label="Permalink to &quot;Try It&quot;">​</a></h2><p>Use the button below to try connecting with the Ultra Wallet, it should pop up when clicked if the extension is installed.</p>',9),x=JSON.parse('{"title":"Introduction","description":"","frontmatter":{"title":"Introduction","deploy":["staging","mainnet"],"order":-1,"oultine":[0,4]},"headers":[],"relativePath":"guides/Wallet Extension/index.md","filePath":"guides/Wallet Extension/index.md","lastUpdated":1692281711000}'),w={name:"guides/Wallet Extension/index.md"},k=s({...w,setup(f){let e=r(!1);async function n(){e.value||(e.value=!0,window&&window.ultra?(await window.ultra.connect(),alert("Wallet Connected!")):alert("Wallet Unavailable"),e.value=!1)}return(b,_)=>{const i=l("Button"),o=l("ClientOnly");return c(),u("div",null,[m,t(o,null,{default:a(()=>[t(i,{onOnClick:n,align:"left"},{default:a(()=>[h("Open Wallet")]),_:1})]),_:1})])}}});export{x as __pageData,k as default};
