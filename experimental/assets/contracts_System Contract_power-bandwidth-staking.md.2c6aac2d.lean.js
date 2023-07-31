import{_ as t,v as a,b as e,R as o}from"./chunks/framework.a49639fc.js";const b=JSON.parse('{"title":"Power Bandwidth Staking","description":"","frontmatter":{"title":"Power Bandwidth Staking","order":5,"deploy":["staging","mainnet"]},"headers":[],"relativePath":"contracts/System Contract/power-bandwidth-staking.md","filePath":"contracts/System Contract/power-bandwidth-staking.md","lastUpdated":1690815193000}'),n={name:"contracts/System Contract/power-bandwidth-staking.md"},r=o('<h1 id="power-bandwidth-staking" tabindex="-1">Power Bandwidth Staking <a class="header-anchor" href="#power-bandwidth-staking" aria-label="Permalink to &quot;Power Bandwidth Staking&quot;">​</a></h1><h2 id="how-it-works" tabindex="-1">How it works <a class="header-anchor" href="#how-it-works" aria-label="Permalink to &quot;How it works&quot;">​</a></h2><p>A block producer includes the transactions into a block in a prioritized way so that the transactions from accounts which staked the most UOS for POWER bandwidth get into a block first. When all the transactions from the accounts that staked for POWER bandwidth get into a block, a BP starts including the “free” transactions from accounts that do not have staked POWER bandwidth.</p><p>The POWER bandwidth covers both CPU bandwidth and NET bandwidth which are employed in the process of transaction handling. Let us think that for processing a block of 3 transactions a block producer CPU requires spending 40 milliseconds, 20 ms for the first 2 transactions and 20 ms for the 3rd one. If the first 2 transactions belong to Account A and the 3rd one belongs to Account B, then accounts A and B should both have staked approximately same amount of UOS for the POWER at their accounts. The network bandwidth is handled alike: the account transactions size is proportional to the fraction of the POWER bandwidth that was staked to this account.</p><p>Both CPU and NET bandwidth usage for the accounts that submitted the transactions to the block are calculated and the distribution of the bandwidth usage per account should be approximately the same as the amounts of UOS staked for the POWER bandwidth per account.</p><h2 id="relevant-actions" tabindex="-1">Relevant actions <a class="header-anchor" href="#relevant-actions" aria-label="Permalink to &quot;Relevant actions&quot;">​</a></h2><p><a href="./System Actions/delegatebw.html">delegatebw - stake tokens for POWER</a></p><p><a href="./System Actions/undelegatebw.html">undelegatebw - unstake tokens for POWER</a></p><h2 id="relevant-tables" tabindex="-1">Relevant tables <a class="header-anchor" href="#relevant-tables" aria-label="Permalink to &quot;Relevant tables&quot;">​</a></h2><p><a href="./data-structures-overview.html#userres-resource-allocation-per-account">userres - resource-allocation-per-account</a></p><p><a href="./data-structures-overview.html#delband-delegated-power-bandwidth-per-account">delband - delegated-POWER-bandwidth-per-account</a></p><p><a href="./data-structures-overview.html#refunds-information-on-refunding-of-the-delegated-power">refunds - information-on-refunding-of-the-delegated-POWER</a></p>',12),s=[r];function i(d,h,c,l,u,p){return a(),e("div",null,s)}const f=t(n,[["render",i]]);export{b as __pageData,f as default};
