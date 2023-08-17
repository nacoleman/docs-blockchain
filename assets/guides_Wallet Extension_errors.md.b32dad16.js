import{_ as t,v as e,b as r,R as d}from"./chunks/framework.99ac92c4.js";const g=JSON.parse('{"title":"Errors","description":"","frontmatter":{"title":"Errors","deploy":["staging","mainnet"],"order":9,"outline":[0,4]},"headers":[],"relativePath":"guides/Wallet Extension/errors.md","filePath":"guides/Wallet Extension/errors.md","lastUpdated":null}'),o={name:"guides/Wallet Extension/errors.md"},s=d('<h1 id="errors" tabindex="-1">Errors <a class="header-anchor" href="#errors" aria-label="Permalink to &quot;Errors&quot;">​</a></h1><p>When making requests to the Ultra Wallet, it may respond with one of the following errors.</p><table><thead><tr><th>Code</th><th>Title</th><th>Description</th></tr></thead><tbody><tr><td>4001</td><td>User Rejected Request</td><td>The user rejected the request.</td></tr><tr><td>4100</td><td>Unauthorized</td><td>The requested method and/or account has not been authorized by the user.</td></tr><tr><td>4900</td><td>Disconnected</td><td>Could not connect to the network.</td></tr><tr><td>-32000</td><td>Invalid Input</td><td>Missing or invalid parameters.</td></tr><tr><td>-32002</td><td>Resource unavailable</td><td>Requested resource not available.</td></tr><tr><td>-32003</td><td>Transaction Rejected</td><td>An error occurred while processing the transaction.</td></tr><tr><td>-32005</td><td>Limit Exceeded</td><td>Request exceeds defined limit.</td></tr><tr><td>-32601</td><td>Method Not Found</td><td>The method does not exist.</td></tr><tr><td>-32603</td><td>Internal Error</td><td>Something went wrong within the wallet extension.</td></tr></tbody></table><p>These error messages are inspired by Ethereum&#39;s <a href="https://eips.ethereum.org/EIPS/eip-1474#error-codes" target="_blank" rel="noreferrer">EIP-1474</a> and <a href="https://eips.ethereum.org/EIPS/eip-1193#provider-errors" target="_blank" rel="noreferrer">EIP-1193</a>.</p>',4),a=[s];function n(i,h,l,c,u,p){return e(),r("div",null,a)}const _=t(o,[["render",n]]);export{g as __pageData,_ as default};
