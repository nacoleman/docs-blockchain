import{_ as e,v as a,b as t,R as r}from"./chunks/framework.a49639fc.js";const f=JSON.parse('{"title":"2nd Hand Sale (Uniqs)","description":"","frontmatter":{"title":"2nd Hand Sale (Uniqs)","deploy":["staging","mainnet"],"outline":[0,4],"order":-92},"headers":[],"relativePath":"learn/Ultra Blockchain/2nd-hand-sale.md","filePath":"learn/Ultra Blockchain/2nd-hand-sale.md","lastUpdated":1690815193000}'),l={name:"learn/Ultra Blockchain/2nd-hand-sale.md"},n=r('<h1 id="_2nd-hand-sale" tabindex="-1">2nd Hand Sale <a class="header-anchor" href="#_2nd-hand-sale" aria-label="Permalink to &quot;2nd Hand Sale&quot;">​</a></h1><p>2nd hand sales include resell (in version a), auction (in a future version), and potentially other forms. Different parties can set up certain settings relevant to reselling a token in any form.</p><p>There is a global share for Ultra.</p><p>When a token factory allows NFT trading, the token factory manager can configure certain resale settings, e.g., minimum resale price, resale shares</p><p>An owner can also set up promoter share in the direct resell feature.</p><h2 id="how-it-works" tabindex="-1">How it works <a class="header-anchor" href="#how-it-works" aria-label="Permalink to &quot;How it works&quot;">​</a></h2><h3 id="global-share-set-by-ultra" tabindex="-1">Global Share set by Ultra <a class="header-anchor" href="#global-share-set-by-ultra" aria-label="Permalink to &quot;Global Share set by Ultra&quot;">​</a></h3><ul><li><p>Ultra can set up a global resale share that applies to any resale.</p><ul><li>By default it is 2.5%.</li><li>It can be updated to any value between 0% to 10%, <strong>which will be applied to all existing token factories and new token factories</strong>.</li></ul></li></ul><h3 id="resale-shares-beneficiaries-set-by-creator-and-manager" tabindex="-1">Resale Shares(beneficiaries) set by creator and manager <a class="header-anchor" href="#resale-shares-beneficiaries-set-by-creator-and-manager" aria-label="Permalink to &quot;Resale Shares(beneficiaries) set by creator and manager&quot;">​</a></h3><ul><li>A token factory manager can set up the following information when creating a token factory.</li></ul><table><thead><tr><th>Resell Configs</th><th>Meaning</th></tr></thead><tbody><tr><td>minimum resale price</td><td>All NFTs from this token factory must be listed at a price larger than or equal to this price for resale.</td></tr><tr><td>resale shares</td><td>resale shares in percentages for all beneficiaries set up by the creator and the manager. The sum of all resale shares must be between 0% and 70% ( configurable at factory creation, Ultra use Ultra.royal as Ultra’s beneficiary account at moment)</td></tr></tbody></table><p>The above information cannot be updated once the token factory is created, no matter whether it’s active or inactive.</p><h3 id="promoter-shares-set-by-seller-and-buyers" tabindex="-1">Promoter shares set by seller and buyers <a class="header-anchor" href="#promoter-shares-set-by-seller-and-buyers" aria-label="Permalink to &quot;Promoter shares set by seller and buyers&quot;">​</a></h3><ul><li>The seller can specify the share for a promoter when reselling an NFT</li></ul><table><thead><tr><th>Resell Configs</th><th>Meaning</th></tr></thead><tbody><tr><td>promoter share</td><td>How much share for a promoter, it must be between 2.5% and 10%. If given value is less than 2.5%, it will use 2.5%. If given value is more than 10%, it will fail to list for resale.</td></tr></tbody></table><p>The buyer can specify the name of the promoter when buying an NFT. In Ultra marketplace, Ultra can set it to an Ultra’s account, but buyer could edit it with some effort.</p><h3 id="overall-2nd-hand-shares-distribution-in-a-buy-event" tabindex="-1">Overall 2nd hand Shares distribution in a buy event <a class="header-anchor" href="#overall-2nd-hand-shares-distribution-in-a-buy-event" aria-label="Permalink to &quot;Overall 2nd hand Shares distribution in a buy event&quot;">​</a></h3><ul><li>Once an NFT is sold at X amount of UOS. The shares are as follows:</li></ul><table><thead><tr><th>Shares</th><th>Meaning</th></tr></thead><tbody><tr><td>X * Ultra global share percentage [0-10%]</td><td>The amount of UOS goes to Ultra.nft.ft account (configurable)</td></tr><tr><td>X * resale share percentages [0-70%]</td><td>Resale shares go to all beneficiaries</td></tr><tr><td>X * promoter share percentage [0-10%]</td><td>The promoter share goes to the promoter that is confrimed by the buyer. If no promoter, then this share is 0</td></tr><tr><td>X * (1 - global share percentage - sum of resale percentages - promoter share percentage)</td><td>After given shares to Ultra, token factory beneficiaries, promoter, the rest goes to the owner of the NFT</td></tr></tbody></table><p>For example; Token A from token Factory F is on resell at the price of 100 UOS.</p><ul><li><p>Ultra global share is 2.5%</p></li><li><p>Resale shares of token factory F are (dev1, 10%), (dev2,20%)</p></li><li><p>promoter share for token A is 5%</p></li></ul><p>When a user buys token A specify the promoter opensea.</p><ul><li><p>Ultra receives 2.5% * 100 UOS = 2.5 UOS</p></li><li><p>dev1 receives 10% * 100 UOS = 10 UOS</p></li><li><p>dev2 receives 20% *100 UOS = 20 UOs</p></li><li><p>Promoter opensea receives 5% * 100 UOS = 5 UOS</p></li><li><p>Seller A got 100 UOS - 2.5UOS - 10 UOS - 20 UOS - 5UOS = 62.5UOS</p></li></ul><h2 id="relevant-actions" tabindex="-1">Relevant actions <a class="header-anchor" href="#relevant-actions" aria-label="Permalink to &quot;Relevant actions&quot;">​</a></h2><ul><li><p><a href="./../../contracts/NFT Contract/NFT Actions/create.html">create</a>: A token factory manager can configure the trading window when creating a token factory</p></li><li><p><a href="./../../contracts/NFT Contract/NFT Actions/resell.html">resell</a>: An owner of the NFT can use this action to resell an NFT when allowed by the trading window</p></li></ul><h2 id="relevant-tables" tabindex="-1">Relevant tables <a class="header-anchor" href="#relevant-tables" aria-label="Permalink to &quot;Relevant tables&quot;">​</a></h2><ul><li><p><a href="./../../contracts/NFT Contract/nft-tables.html#factory-a">factory.a</a>: stores factory resale shares.</p></li><li><p><a href="./../../contracts/NFT Contract/nft-tables.html#resale-a">resale.a</a>: stores promoter share.</p></li></ul>',27),s=[n];function o(i,h,d,c,p,u){return a(),t("div",null,s)}const m=e(l,[["render",o]]);export{f as __pageData,m as default};
