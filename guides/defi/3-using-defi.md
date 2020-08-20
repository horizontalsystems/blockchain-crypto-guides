# Using DeFi

The only requirements for someone to start engaging with most DeFi services are the working internet and some amount in cryptocurrency. 

There are no age, experience, geographical or any other conditions. DeFi services are open to all, at any time.

There are also some caveats which makes DeFi a risky place to keep your assets. 

- Should something go wrong with the service, there’s no insurance (i.e. Federal Deposit Insurance Corporation) protecting these funds.

- Being a new field, a lot of first generation of DeFi products which operate with real funds but are considered in an experimental phase.

When it comes to DeFi you're expected to have an understanding that if something goes wrong you're on your own to bear the responsibilities.

## Get Started

Let's go over tools and know-how needed to get you started on a practical level.

- Go to a website or mobile application for the DeFi service. Note that each DeFi service can have multiple websites/apps depending on its popularity. Since smart contracts reside on always-online blockchain anyone can build a graphical gateway to them in a form of a website or a mobile app.

- DeFi services require user to connect to the service using a non-custodial cryptocurrency wallet. The wallet is your way to authenticate and connect to the smart contract. Only some non-custodial wallets are currently supporting DeFi services. 

The most common way is to use a [Chrome](https://www.google.com/chrome/) browser and a [Metamask](https://metamask.io) non-custodial wallet for Chrome. 

To install Metamask, go to its website and look for the extension for your web browser. There are extensions for Chrome, Firefox, Opera and Brave browsers. Metamask is a [non-custodial](/guides/fundamentals/2-wallets-basics.md) cryptocurrency wallet specifically built for Chrome and Ethereum ecosystem.

Once it has been installed, an icon the shape of a fox will appear on the top right-hand corner of your browser.

To Setup Metamask:

1. Setup Wallet
   
   Click on 'Get started' on Metamask site and select the option to create a new wallet.

2. Add Password
   
   The password is a necessary measure in case someone gets access to your browser. Having password ensures that no unauthorized party can access your wallet. Metamask is a non-custodial wallet and therefore keeps wallet [private keys](/guides/fundamentals/3-private-keys-basics.md) on your machine instead of storing it on some remote server.

3. Backup Private Key

   You will then be provided with a unique 12-word representation of your private key. As the case with all non-custodial wallets it's crucial for you to [safely backup](/guides/fundamentals/4-safe-storage-basics.md) that key. This key will be needed to regain access to your wallet funds should your computer or operating system malfunction and break.

4. Ready To Use

    Once you have your Metamask wallet ready you're good to go. As a first step, deposit some funds from a wallet where you keep your crypto to your Metamask wallet. 
    
    Once you have funded your Metamask wallet, open the browser (where you installed Metamask) and navigate to the DeFi service website you would like to use. 
    
    Once on DeFi site look for 'connect wallet' button or a similar option. When you have connected your Metamask wallet you can begin utilize the services it provides.

Metamask is not the only wallet that you can use for DeFi, but it's by far the most popular one.

## DeFi Risks

Majority of DeFi services operate in non-custodial manner where user communicates directly with the smart contracts that control the service. The user always remain in control of the funds and can withdraw funds from the service at any time without relying on an entity that built the DeFi service.

The security of user's funds are guaranteed by the smart contract itself which cannot do anything outside the scope of its programmed functionality. Typically, no external entity can interfere with the user assets on a smart contract or restrict him/her engaging with the service.

> That said, DeFi field is just a few years old and potentially there can be undiscovered security issues in the code powering DeFi smart contracts. 

While some major DeFi services go through extensive third-party audits not all services do that. That potentially exposes funds controlled by a DeFi smart contract to theft by hackers, should a vulnerability be discovered in smart contract's code.

This risk is present in all DeFi products, especially those that are not audited and have a lot of logic encoded into a smart contract. Therefore, keep that in mind and never invest more than you're willing to lose should something go wrong.

To give you a better understanding of what can go wrong, look at some of the biggest [DeFi hacks](https://defirate.com/hacks/) in 2020. While hacks are not uncommon the majority of DeFi protocols remain safe while operating large sums. 

There are also some DeFi services which allow someone to get insured against vulnerabilities in the code powering major DeFi services. One such service is [Nexus Mutual](https://nexusmutual.io) where someone may purchase insurance for various DeFi products and get compensated if the product is hacked.

## DeFi Privacy

As most of the DeFi projects built on top of Ethereum blockchain the privacy on DeFi is basically the privacy you get with the Ethereum. 

All DeFi related transactions will expose your Ethereum address. While there is no way for someone to match that address to your identity it allows the person to see the entire history of actions associated with that address as well as balances for other Ethereum based tokens.

One simple tip to mitigate this is to use multiple Ethereum wallets: 

- For Asset Storage

    This wallet can be used for [safely storing](/guides/fundamentals/4-safe-storage-basics.md) your Ethereum tokens and assets. It should not be used for transacting with other entities as it will expose you balances to the receiving party.
     
- For Generic Payments

    Setup a separate wallet for all-purpose transactions. It can be used for transacting with people.
    
- For DeFi Transactions

    Consider setting up yet another wallet for DeFi transactions. Just like the 'storage wallet' this wallet should not be used for transacting with entities, especially ones that know you.

## DeFi Transactions

Generic [Ethereum transactions](/guides/fundamentals/8-transactions-basics.md) that send Ethereum or Ethereum-based tokens from one address to another are typically a lot cheaper than DeFi transactions.

Typical Generic Transaction:

> SEND x Ethereum (ETH) FROM addressA TO addressB

Generic transactions are cheaper to execute as they consume minimum computational resources.
    
Typical DeFi Transaction:

> 1. SEND X Ethereum (ETH) FROM addressC TO a smart contract belonging to a Uniswap DEX.
> 2. Convert ETH to some USDC stablecoin.
> 3. Send USDC stablecoins to Curve.fi DEX
> 4. Convert USDC on Curve.fi to USDT stablecoin
> 5. Send USDT to Kyber DEX
> 6. Convert USDT to Ethereum on Kyber DEX

DeFi transactions (like above) can consist of a lot of computational steps which take significantly more computing resources on a blockchain. Therefore, DeFi transactions are costly.

> DeFi transactions are expensive because the blockchain transaction fees go in parallel with the computational and other blockchain resources (i.e. size of transaction) needed to execute a transaction.

While sending ETH from one address to another may cost less than a dollar, executing a DeFi transaction involving can sometimes cost more than 1000$. It goes without saying that anyone executing such transaction likely to operate with large sums so paying such fees usually is not an issue. We will look at such transactions in the upcoming section about [earning on DeFi](/guides/defi/4-making-money-defi.md).

The high fee issue may no longer be relevant when Ethereum blockchain expands its capacity to be able to handle more transactions. Until then DeFi transactions costs are likely to keep increasing, especially as DeFi ecosystem and services attract more and more people.

So, keeping in mind above, it makes more sense to use DeFi for transacting with larger sums. A DeFi transactions involving 20$ worth of funds may require a fee equivalent to the half of the amount. Paying a 10$ fee for a transaction that involves $5000 worth of cryptocurrency may be acceptable.
