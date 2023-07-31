import{_ as t,v as e,b as a,R as r}from"./chunks/framework.ead9a57c.js";const m=JSON.parse('{"title":"Variant Example Use Cases","description":"","frontmatter":{"title":"Variant Example Use Cases","deploy":["staging","mainnet"]},"headers":[],"relativePath":"guides/Uniq Variants/Examples/variant-example-use-cases.md","filePath":"guides/Uniq Variants/Examples/variant-example-use-cases.md","lastUpdated":null}'),d={name:"guides/Uniq Variants/Examples/variant-example-use-cases.md"},o=r('<h1 id="variant-example-use-cases" tabindex="-1">Variant example use cases <a class="header-anchor" href="#variant-example-use-cases" aria-label="Permalink to &quot;Variant example use cases&quot;">​</a></h1><p>Variant standard is quite flexible and allows for a variety of potential projects and use cases. This page will cover some of them and explain how they work</p><h2 id="video-game-token-factory" tabindex="-1">Video game token factory <a class="header-anchor" href="#video-game-token-factory" aria-label="Permalink to &quot;Video game token factory&quot;">​</a></h2><p>The simplest example is providing the same metadata to all the tokens minted from the factory. Such example could be tokens of a specific game, where each token is identical. This factory utilizes <code>default_token_uri</code> to avoid duplication inside each minted token</p><table><thead><tr><th>Property</th><th>Value</th></tr></thead><tbody><tr><td>factory.default_token_uri</td><td>MyGame.com/Metadata</td></tr><tr><td>factory.default_token_hash</td><td>b0dafd687d5527cef28300392e</td></tr><tr><td>token.uri (per token)</td><td><em>null</em></td></tr><tr><td>token.hash (per token)</td><td><em>null</em></td></tr></tbody></table><h2 id="video-game-token-factory-with-a-rare-unique-copy" tabindex="-1">Video game token factory with a rare unique copy <a class="header-anchor" href="#video-game-token-factory-with-a-rare-unique-copy" aria-label="Permalink to &quot;Video game token factory with a rare unique copy&quot;">​</a></h2><p>Similar to the previous example we have a simple factory for game tokens where all of them are identical except for a few unique cases. For those unique tokens (here it is token #1000000) we provide a specific URI and hash so it does not fallback to default</p><table><thead><tr><th>Property</th><th>Value</th></tr></thead><tbody><tr><td>factory.default_token_uri</td><td>MyGame.com/DefaultMetadataMyGame.com/Metadata</td></tr><tr><td>factory.default_token_hash</td><td>b0dafd687d5527cef28300392e</td></tr><tr><td>token.uri (#1000000)</td><td>MyGame.com/1MthMetadata</td></tr><tr><td>token.hash (#1000000)</td><td>4e3304e9af1ec7aaa05206b</td></tr><tr><td>token.uri (rest of Uniqs)</td><td><em>null</em></td></tr><tr><td>token.hash (rest of Uniqs)</td><td><em>null</em></td></tr></tbody></table><h2 id="simple-profile-picture-project" tabindex="-1">Simple profile picture project <a class="header-anchor" href="#simple-profile-picture-project" aria-label="Permalink to &quot;Simple profile picture project&quot;">​</a></h2><p>Common situation for profile picture projects is that there is a base URI with serial number utilized as an identifier to find the metadata for a specific token. By using a dynamic value inside <code>default_token_uri</code> we can avoid duplication of base URI inside each of the minted tokens and can still provide a hash to each of the tokens for the purposes of data provenance.</p><table><thead><tr><th>Property</th><th>Value</th></tr></thead><tbody><tr><td>factory.default_token_uri</td><td><a href="https://AngryBananas/Uniq/%7Btoken_serial_number%7D" target="_blank" rel="noreferrer">https://AngryBananas/Uniq/{token_serial_number}</a></td></tr><tr><td>factory.default_token_hash</td><td><em>null</em></td></tr><tr><td>token.uri (#1)</td><td><em>null</em></td></tr><tr><td>token.hash (#1)</td><td>bea34b0a7cdef454f4</td></tr><tr><td>...</td><td>...</td></tr><tr><td>token.uri (#1000)</td><td><em>null</em></td></tr><tr><td>token.hash (#1000)</td><td>def454f46557a96ff84</td></tr></tbody></table><h2 id="obfuscated-profile-picture-project" tabindex="-1">Obfuscated profile picture project <a class="header-anchor" href="#obfuscated-profile-picture-project" aria-label="Permalink to &quot;Obfuscated profile picture project&quot;">​</a></h2><p>In some cases it may be desired for a profile picture project to not be able to probe metadata beforehand by substituting different serial numbers. Since serial numbers are sequential it is easy to go through all of them. In this example we use token hash which is not known beforehand as a part of dynamic <code>deafult_token_uri</code>. Hash of the token will only be known after the token is minted.</p><table><thead><tr><th>Property</th><th>Value</th></tr></thead><tbody><tr><td>factory.default_token_uri</td><td><a href="https://AngryBananas/Uniq/%7Btoken_hash%7D" target="_blank" rel="noreferrer">https://AngryBananas/Uniq/{token_hash}</a></td></tr><tr><td>factory.default_token_hash</td><td><em>null</em></td></tr><tr><td>token.uri (#1)</td><td><em>null</em></td></tr><tr><td>token.hash (#1)</td><td>bea34b0a7cdef454f4</td></tr><tr><td>...</td><td>...</td></tr><tr><td>token.uri (#1000)</td><td><em>null</em></td></tr><tr><td>token.hash (#1000)</td><td>def454f46557a96ff84</td></tr></tbody></table><h2 id="ipfs-based-profile-picture-project" tabindex="-1">IPFS-based profile picture project <a class="header-anchor" href="#ipfs-based-profile-picture-project" aria-label="Permalink to &quot;IPFS-based profile picture project&quot;">​</a></h2><p>Alternative storage solutions may have a different way of naming the metadata URIs. This example demonstrates how in case of IPFS you could provide both a URI and a hash for all the tokens you mint as each metadata file on IPFS will have a unique URI.</p><table><thead><tr><th>Property</th><th>Value</th></tr></thead><tbody><tr><td>factory.default_token_uri</td><td><a href="https://ipfs.io/ipfs/Qme7ss3ARVgxv6rX" target="_blank" rel="noreferrer">https://ipfs.io/ipfs/Qme7ss3ARVgxv6rX</a></td></tr><tr><td>factory.default_token_hash</td><td>b0dafd687d5527cef28300392e</td></tr><tr><td>token.uri (#1)</td><td><a href="https://ipfs.io/ipfs/04e9af1ec7aaa0520" target="_blank" rel="noreferrer">https://ipfs.io/ipfs/04e9af1ec7aaa0520</a></td></tr><tr><td>token.hash (#1)</td><td>bea34b0a7cdef454f4</td></tr><tr><td>...</td><td>...</td></tr><tr><td>token.uri (#1000)</td><td><a href="https://ipfs.io/ipfs/cdef454f46557a96ff84" target="_blank" rel="noreferrer">https://ipfs.io/ipfs/cdef454f46557a96ff84</a></td></tr><tr><td>token.hash (#1000)</td><td>def454f46557a96ff84</td></tr></tbody></table>',17),i=[o];function n(s,l,h,f,p,c){return e(),a("div",null,i)}const b=t(d,[["render",n]]);export{m as __pageData,b as default};
