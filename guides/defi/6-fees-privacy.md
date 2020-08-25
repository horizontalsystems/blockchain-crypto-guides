# Transacting on DeFi

Generic [Ethereum transactions](/guides/fundamentals/8-transactions-basics.md) that send Ethereum or Ethereum-based tokens from one address to another are typically a lot cheaper than DeFi transactions.

## Fees

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

## Approvals & Allowance

sdfsdfsdf

# DeFi Privacy

As most of the DeFi projects built on top of Ethereum blockchain the privacy on DeFi is basically the privacy you get with the Ethereum. 

All DeFi related transactions will expose your Ethereum address. While there is no way for someone to match that address to your identity it allows the person to see the entire history of actions associated with that address as well as balances for other Ethereum based tokens.

One simple tip to mitigate this is to use multiple Ethereum wallets: 

- For Asset Storage

    This wallet can be used for [safely storing](/guides/fundamentals/4-safe-storage-basics.md) your Ethereum tokens and assets. It should not be used for transacting with other entities as it will expose you balances to the receiving party.
     
- For Generic Payments

    Setup a separate wallet for all-purpose transactions. It can be used for transacting with people.
    
- For DeFi Transactions

    Consider setting up yet another wallet for DeFi transactions. Just like the 'storage wallet' this wallet should not be used for transacting with entities, especially ones that know you.

