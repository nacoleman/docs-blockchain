import{_ as e,v as t,b as a,R as r}from"./chunks/framework.a49639fc.js";const i="/experimental/images/ultra-unreal-OpenID-guide/image2.png",n="/experimental/images/ultra-unreal-OpenID-guide/image5.png",l="/experimental/images/ultra-unreal-OpenID-guide/image4.png",o="/experimental/images/ultra-unreal-OpenID-guide/image3.png",s="/experimental/images/ultra-unreal-OpenID-guide/image1.png",u="/experimental/images/ultra-unreal-OpenID-guide/image6.png",x=JSON.parse('{"title":"Ultra Unreal OpenID guide","description":"","frontmatter":{"title":"Ultra Unreal OpenID guide","deploy":["staging","mainnet"],"outline":[0,5],"order":4},"headers":[],"relativePath":"guides/Integrating Ultra/ultra-unreal-OpenID-guide.md","filePath":"guides/Integrating Ultra/ultra-unreal-OpenID-guide.md","lastUpdated":1690815193000}'),d={name:"guides/Integrating Ultra/ultra-unreal-OpenID-guide.md"},p=r('<h1 id="ultra-unreal-openid-guide" tabindex="-1">Ultra Unreal OpenID guide <a class="header-anchor" href="#ultra-unreal-openid-guide" aria-label="Permalink to &quot;Ultra Unreal OpenID guide&quot;">​</a></h1><p>If you&#39;re a developer working on Unreal, have an established game, and would like to deploy your game to Ultra Games, then this guide is for you.</p><p>You&#39;ll be using OpenID to connect via Epic&#39;s Online Service.</p><p>To have access to Ultra&#39;s OpenID, each development partner must <a href="./requesting-a-client_id.html">request a client_id</a> from Ultra.</p><h2 id="_1-select-product-settings" tabindex="-1">1. Select Product Settings <a class="header-anchor" href="#_1-select-product-settings" aria-label="Permalink to &quot;1. Select Product Settings&quot;">​</a></h2><p><img src="'+i+'" alt=""></p><h2 id="_2-select-identity-providers" tabindex="-1">2. Select Identity Providers <a class="header-anchor" href="#_2-select-identity-providers" aria-label="Permalink to &quot;2. Select Identity Providers&quot;">​</a></h2><p><img src="'+n+'" alt=""></p><h2 id="_3-add-identity-provider" tabindex="-1">3. Add Identity Provider <a class="header-anchor" href="#_3-add-identity-provider" aria-label="Permalink to &quot;3. Add Identity Provider&quot;">​</a></h2><p><img src="'+l+'" alt=""></p><h2 id="_4-select-openid" tabindex="-1">4. Select OpenID <a class="header-anchor" href="#_4-select-openid" aria-label="Permalink to &quot;4. Select OpenID&quot;">​</a></h2><p>Input the following <img src="'+o+'" alt=""></p><p>Easy copying:</p><ul><li>issuer - <a href="https://auth.ultra.io/auth/realms/ultraio" target="_blank" rel="noreferrer">https://auth.ultra.io/auth/realms/ultraio</a></li><li>jwks_uri - <a href="https://auth.ultra.io/auth/realms/ultraio/protocol/openid-connect/certs" target="_blank" rel="noreferrer">https://auth.ultra.io/auth/realms/ultraio/protocol/openid-connect/certs</a></li></ul><h2 id="_5-set-it-in-your-sandboxes-so-that-you-can-use-it" tabindex="-1">5.Set it in your Sandboxes so that you can use it <a class="header-anchor" href="#_5-set-it-in-your-sandboxes-so-that-you-can-use-it" aria-label="Permalink to &quot;5.Set it in your Sandboxes so that you can use it&quot;">​</a></h2><p>Set the Sandbox <img src="'+s+'" alt=""></p><p>Make sure to select Ultra.io! <img src="'+u+'" alt=""></p>',17),c=[p];function g(h,m,_,I,b,f){return t(),a("div",null,c)}const O=e(d,[["render",g]]);export{x as __pageData,O as default};
