import{_ as e,v as n,b as t,R as a}from"./chunks/framework.ead9a57c.js";const y=JSON.parse('{"title":"Launching an Instance","description":"","frontmatter":{"title":"Launching an Instance","deploy":["staging","mainnet"],"outline":[0,4],"order":-98},"headers":[],"relativePath":"learn/Block Producers/Maintenance/launching-a-new-instance.md","filePath":"learn/Block Producers/Maintenance/launching-a-new-instance.md","lastUpdated":null}'),s={name:"learn/Block Producers/Maintenance/launching-a-new-instance.md"},o=a(`<h1 id="launching-an-instance" tabindex="-1">Launching an Instance <a class="header-anchor" href="#launching-an-instance" aria-label="Permalink to &quot;Launching an Instance&quot;">​</a></h1><p>Before the nodeos launcher script is executed, it is important to create a wallet using <em>cleos</em>. The wallet will import and maintain all the keys that shall be required by the Block Producer. It is important that all the private keys generated in the <a href="./account-administration.html">Account Administration</a> section are imported to this wallet. The commands for creating a wallet and importing the keys are given below.</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cleos wallet create </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">name YOUR_WALLET_NAME </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">file WALLET_PASSWD_FILE</span></span>
<span class="line"><span style="color:#A6ACCD;">cleos wallet </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> --name YOUR_WALLET_NAME --private-key YOUR_PRIVATE_KEY</span></span></code></pre></div><p><strong>Please note</strong> that it is not a requirement to run <em>cleos</em> and have a wallet on all of the node instances, however, this is a <em>requirement</em> for <a href="./../Launch Procedures/synchronizing-with-genesis-node.html">Synchronizing with Genesis Node</a> .</p><p>It is important to save the password for your wallet in a file and keep it secure. Once the unlocked wallet has not been used for more than 15 minutes (the default timeout duration) <em>cleos</em> is locks your wallet as a safety measure.</p><p>If you attempt to run a command using the wallet, it will be required to unlock it first by providing the password.</p><p>In addition to the aforementioned, you are also required to create a genesis.json file for being able to launch your block producer in the genesis mode.</p><p>Finally, it is time to run your node. To run nodeos, all you will need to do is to run the start script provided by Ultra. Nodeos will replay the blockchain and after some time will start the block production process.</p><p>Once that process is running, you will be able to interact with the blockchain.</p>`,9),i=[o];function l(r,c,p,h,d,u){return n(),t("div",null,i)}const g=e(s,[["render",l]]);export{y as __pageData,g as default};
