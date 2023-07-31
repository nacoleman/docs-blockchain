import{_ as a,v as e,b as t,R as o}from"./chunks/framework.a49639fc.js";const C=JSON.parse('{"title":"Basics Introduction","description":"","frontmatter":{"title":"Basics Introduction","deploy":["staging","mainnet"],"order":-99999,"oultine":[0,4],"prev":false},"headers":[],"relativePath":"guides/Basics/introduction.md","filePath":"guides/Basics/introduction.md","lastUpdated":1690815193000}'),s={name:"guides/Basics/introduction.md"},n=o('<h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h1><p>Ultra&#39;s blockchain is fast, easy to use, and friendly for developers. There are a few concepts that you as a developer will need to get to grips with so that you can successfully integrate our stack into your application.</p><p>Here will cover some of those basics that are necessary for working with the Ultra Blockchain.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><p>You&#39;ll be running images that we provide inside of Docker, which instantiates VMs for use in development or production environments.</p><ul><li><a href="https://docs.docker.com/get-docker/" target="_blank" rel="noreferrer">Docker</a> - Provided for free for Linux, Mac, and Windows</li></ul><h3 id="obtain-latest-image" tabindex="-1">Obtain Latest Image <a class="header-anchor" href="#obtain-latest-image" aria-label="Permalink to &quot;Obtain Latest Image&quot;">​</a></h3><p>Ultra does not provide direct access to our proprietary source code. Instead, we provide images which can be run in Docker. These images provide compiled versions of all the software you&#39;ll need to get up and running.</p><p>To obtain the latest image, pull the docker image down from quay.io</p><p>You can run this command in any Terminal or CLI application after installing <a href="https://docs.docker.com/get-docker/" target="_blank" rel="noreferrer">Docker</a>.</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">quay.io/ultra.io/3rdparty-devtools:latest</span></span></code></pre></div><p>Depending on your internet connection, this may take a while to complete.</p><h3 id="start-docker-container" tabindex="-1">Start Docker Container <a class="header-anchor" href="#start-docker-container" aria-label="Permalink to &quot;Start Docker Container&quot;">​</a></h3><p>After pulling the image down, you can start the container and access it by running the following command in any Terminal or CLI application.</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-it</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ultra</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8888</span><span style="color:#C3E88D;">:8888</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9876</span><span style="color:#C3E88D;">:9876</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">quay.io/ultra.io/3rdparty-devtools</span></span></code></pre></div><h2 id="sections" tabindex="-1">Sections <a class="header-anchor" href="#sections" aria-label="Permalink to &quot;Sections&quot;">​</a></h2><ol><li><a href="./start-local-chain.html">Start a Local Chain</a></li><li><a href="./using-cleos.html">Using CLEOS</a></li><li><a href="./pushing-transactions.html">Pushing Transactions</a></li><li><a href="./creating-a-wallet.html">Creating a Wallet</a></li><li><a href="./create-a-testnet-account.html">Creating a Testnet Account</a></li></ol>',17),r=[n];function i(l,c,p,d,h,u){return e(),t("div",null,r)}const m=a(s,[["render",i]]);export{C as __pageData,m as default};
