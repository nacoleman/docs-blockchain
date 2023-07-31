import{_ as e,v as t,b as o,R as a}from"./chunks/framework.99ac92c4.js";const i="/images/gdc/tf-1.png",n="/images/gdc/tf-2.png",r="/images/gdc/tf-3.png",s="/images/gdc/tf-4.png",l="/images/gdc/tf-5.png",c="/images/gdc/tf-6.png",u="/images/gdc/tf-7.png",h="/images/gdc/tf-8.png",p="/images/gdc/tf-9.png",d="/images/gdc/tf-10.png",f="/images/gdc/tf-11.png",m="/images/gdc/tf-12.png",y="/images/gdc/tf-14.png",g="/images/gdc/tf-15.png",b="/images/gdc/tf-16.png",k="/images/gdc/tf-17.png",I=JSON.parse('{"title":"Creating Token Factories","description":"","frontmatter":{"title":"Creating Token Factories","deploy":["staging","mainnet"],"order":10},"headers":[],"relativePath":"guides/Game Dev Center/10. creating-token-factories.md","filePath":"guides/Game Dev Center/10. creating-token-factories.md","lastUpdated":null}'),w={name:"guides/Game Dev Center/10. creating-token-factories.md"},v=a('<h1 id="creating-token-factories" tabindex="-1">Creating Token Factories <a class="header-anchor" href="#creating-token-factories" aria-label="Permalink to &quot;Creating Token Factories&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>The Token factory is the place where you will mint your game as an item (token) in the Ultra ecosystem. You will be able to set all your commercial requirements and token rules into the Store token factory. Set a game for internal usage or to organize a restricted close beta (both planned). Every token factory and token will be represented in our platform through a token ID card, which will contain all token functionalities and is contextualized all over the platform.</p><p>Additionally, this is where you will set all the rules for your game lifecycle. Once done, everyone who buys from this factory will receive a token bound by these rules. Currently, our token factories are only able to create an atomic token.</p><p>What are tokens? A token is an immutable unit of your content, it follows the rules set of the emitting token factory. Which will give access to the content that it contains. Token factories have a real numeric version of your retail game, which provides you more features and more control on your side. There are different types of token factories such as Game, Demo, DLC, etc… This will help you to create, search for them. Token factory status helps you to keep track of them along their lifecycle.</p><p>The following is the lifecycle statuses of a token factory Draft, ready to publish, publish, expired (not available yet), unpublish (not available yet)</p><p>An atomic token: is a type of token that will give specific content access defined by the selected branch to a player. This is only the first type of token but we are planning to add more in the future to give you more flexibility and open new business opportunities through</p><p>Game package: is a single token that gives access to a game several different contents to a user(Example: Game with DLC on a single token). Such as bundles and packs that can be sold together as tokens</p><h2 id="creating-token-factories-1" tabindex="-1">Creating Token Factories <a class="header-anchor" href="#creating-token-factories-1" aria-label="Permalink to &quot;Creating Token Factories&quot;">​</a></h2><p>This type of token factory is dedicated to content you will sell in the ultra store. You are currently able to create games, demos, and DLC tokens that have their own preset rules.</p><ul><li>Games: You can freely configure your game without restriction.</li><li>DLC: You can freely configure your game without restriction.</li><li>DEMO: A Demo is a Free content and non-tradable.</li><li>Language pack: Not available yet</li><li>Dedicated server: Not available yet</li></ul><p>Reminder: To create a token factory you should have published an assembly build. You will only be able to see published content in the store token factory.</p><h3 id="create-a-store-token-factory" tabindex="-1">Create a Store token factory <a class="header-anchor" href="#create-a-store-token-factory" aria-label="Permalink to &quot;Create a Store token factory&quot;">​</a></h3><p>Click on “Create a new token factory”</p><p><img src="'+i+'" alt="tf-1"></p><h3 id="set-your-factory-name" tabindex="-1">Set your factory name <a class="header-anchor" href="#set-your-factory-name" aria-label="Permalink to &quot;Set your factory name&quot;">​</a></h3><p>Note:</p><ul><li>this name will be visible by your customer</li><li>You can start your factory from scratch or you can create a factory from an existing one to keep the same settings, you can edit this after.</li></ul><p><img src="'+n+'" alt="tf-2"></p><ul><li>If you are starting from scratch then you need to choose the type of token you want to use.</li><li>Click on Create to start the creation of your token</li><li>Congratulations, at this point your token is now created, you can come back to finish it later.</li></ul><p><img src="'+r+'" alt="tf-3"></p><h3 id="set-store-token-factory" tabindex="-1">Set Store token factory <a class="header-anchor" href="#set-store-token-factory" aria-label="Permalink to &quot;Set Store token factory&quot;">​</a></h3><ul><li>If you left you token factory in an incomplete state then you can retrieve it from the list</li></ul><p><img src="'+s+'" alt="tf-4"></p><ul><li><p>To access the editing section and continue setting your token, drag your token in the list and click on “Edit Factory”</p></li><li><p>The starting page is the main information page you will be able to set the following information:</p></li><li><p>Token name, that should represent the uniqueness of your token, example: standard/gold… edition</p></li><li><p>A short description (only one language localization is available)</p></li><li><p>A small picture which will be the representation of the content in the platform</p></li><li><p>The image used in the background of your token id card</p></li><li><p>The default language contained in this token</p></li></ul><p>Note: On the side, you will find a card which contains a summary of your factory settings, this info will evolve as your setup progresses.</p><p><img src="'+l+'" alt="tf-5"></p><ul><li>Then type the content description then you will be able to set the content you want to put inside the token factory or change the type of token factory.</li></ul><p>Note: Only the published assemble build content is displayed here.</p><p><img src="'+c+'" alt="tf-6"></p><ul><li>The Geofencing section allows you to set what region your token factory and token will be available, based on the user location. This allows you to select the entire world, regions, countries that you want your content to be available for users to view, buy and play. Selecting countries is fully customizable. Users that are not within the available area will not be able to view the content in the store.</li></ul><p>Note:</p><ul><li>There is a search field to find countries.</li><li>Be careful once a token factory is published geofencing is not editable</li></ul><p><img src="'+u+'" alt="tf-7"></p><ul><li><p>Then set the Price of the content and the Revenue share distribution</p><p>You have two choices: Free or Paid content.</p><p>If you set a price then you need to select the revenue share distribution. Ultra always takes a 15% commission. It is up to you to distribute the remaining 85%. Currently you can only distribute between you and promoters. More options will be available in the future.</p><p>If you select free there are no other settings on this page.</p></li></ul><p>Note:</p><ul><li>If you select free this implies that your token is not tradable (In other words your user will not be able to resell this free token)</li><li>Promoter will be rewarded after a purchase</li><li>Currently you can’t set a promoter</li></ul><p><img src="'+h+'" alt="tf-8"></p><h3 id="tradability-and-resellability" tabindex="-1">Tradability and resellability <a class="header-anchor" href="#tradability-and-resellability" aria-label="Permalink to &quot;Tradability and resellability&quot;">​</a></h3><p>You have two choices: Tradable and nontradable</p><p><strong>Non tradable</strong> will prevent your token from appearing in the second hand market. More settings are required for this page.</p><p><strong>Tradable</strong> will unlock the settings to set the tradability rules. This will open your token to be used in the second hand market but following the rules you set. Caution once published the rules are immutable so choose them carefully.</p><ul><li>You can set a minimum resale price to prevent your game from being sold under a certain price.</li><li>You can set the revenue share to be earned from the second hand market, you can either set a fixed price or a % of the selling price set by the customer. Note: To set a fixed amount you need to choose a minimum resale price</li><li>Setting a time restriction is optional. Time restrictions define when the content is tradable. You can select a start date and the end date is optional.</li></ul><p><img src="'+p+'" alt="tf-9"></p><p><img src="'+d+'" alt="tf-10"></p><ul><li><strong>Availability and quantity restrictions are not available yet</strong> In this section, you can set when your game will become playable after a pre-sale or limited time beta.</li><li><strong>Media</strong> In this section, you can put up to 8 pictures to advertise your token(product) so your content will be more appealing in the store and across the whole ultra platform. These pictures are associated with your token in order to make the content more personalized and unique.</li></ul><p><img src="'+f+'" alt="tf-11"></p><p><img src="'+m+'" alt="tf-12"></p><p>Congratulations! your token is now ready to be published. You can view the token on the side menu section, which is continuously updated through the creation process from an empty token to a published token.</p><p><img src="'+y+'" alt="tf-14"></p><ul><li>Preview is now available with your token, to view what it will look like in Ultra. In addition now you can publish your token on the store page.</li></ul><p><img src="'+g+'" alt="tf-15"></p><p><img src="'+b+'" alt="tf-16"></p><p><img src="'+k+'" alt="tf-17"></p>',54),_=[v];function T(C,q,x,D,S,P){return t(),o("div",null,_)}const F=e(w,[["render",T]]);export{I as __pageData,F as default};
