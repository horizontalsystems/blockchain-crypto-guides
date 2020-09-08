![](../images/snx-Main-l.png)

# Synthetix In Simple Terms

[Synthetix](https://synthetix.io/) is a decentralized platform for creating and trading synthetic assets (called Synths) on Ethereum blockchain.
 
> Synths are ERC-20 token representations of cryptocurrencies, stocks, fiat currencies, precious metals, and potentially any other tradable asset.

The purpose of the Synthetix is to allow users on Ethereum blockchain to bet on the price of various financial instruments (outside Ethereum) without holding the actual asset. 

Synth assets:

- sUSD : synthetic USD
- sEUR : synthetic EUR
- sAUD : synthetic Australian Dollar
- sBTC : synthetic Bitcoin
- sETH : synthetic Ether
- sMKR : synthetic Maker
- sBNB : synthetic Binance Token
- sXAU : synthetic Gold

Synthetix enables someone to go long or short on cryptocurrencies, fiat currencies, precious metals, commodities etc directly from Ethereum blockchain.

> Synths are programmed to copy the price of an asset they are linked to and leave behind all of its other properties.

For instance:

- sBTC is a synthetic Bitcoin synth asset whose price is pegged to the price of Bitcoin (BTC). 

- In the same way, sMKR is a synthetic asset representing [MakerDAO's](../../token_guides/en/makerdao.md) MKR token.

> An sMKR synth token has the same price as a real MKR token, but without the voting rights an actual MKR token holder would have. 

To sum up, from an asset price perspective owning synth tokens has same benefits as owning the tokens these synths represent.

Therefore, Synthetix enables creation of Ethereum-based tokens of ERC20 type which represent real-world assets.

## Synth Assets

Anyone looking for exposure to the price of Bitcoin on Ethereum can do so via one of the following options:

1. by acquiring sBTC tokens on [Synthetix.Exchange](https://synthetix.exchange/#/) or some other [decentralized exchange](../../defi/en/3-decentralized-exchanges.md), generally using Ethereum's ETH tokens.

2. or via Synthetix's [Mintr](https://mintr.synthetix.io/) smart contract to create sUSD synth tokens by locking personal SNX tokens. Typically, the amount which needs to be locked is somewhere between 600-800 % of the issued sUSD token value.

Synthetix allows anyone to create any of supported synth assets against the market value of SNX tokens.

> This is done by locking own SNX tokens into a smart contract at an approximate ratio of 600% to the synth token being minted. 

> If 1000 SNX is locked at a price value of 6 USD, at most 1000 sUSD tokens can be minted against it. 

The ratio is chosen by Synthetix community and meant to provide a protection to the stability of the synth asset against the price fluctuations of the backing SNX token. 

> As SNX price fluctuates, the SNX stakers need to monitor the value of their locked SNX and make sure overall value of the locked SNX tokens to minted debt always remain above the required ratio.

### SNX Staking

Those willing to stake their SNX into Synthetix platform receive two kinds of rewards: 

1. SNX staking rewards, which are created through the inflationary monetary policy of SNX token.     

    Between March 2019 - August 2023, the total SNX supply will increase from 100,000,000 to 260,263,816, with a weekly decay rate of 1.25%. 

2. Exchanging synths on [Synthetix.Exchange](https://synthetix.exchange/#/) costs traders between 0.1% - 1% (typically 0.3%) for each trade.  
   
    These fees are sent to a fee pool, available for SNX stakers to claim their proportion from it each week.

As explained above, stakers essentilly create a debt position when they lock and stake their SNX tokens. 

- This debt begins as the amount of sUSD they initially mint and changes according to price gains or losses made by all other Synth assets in the ecosystem. 

- If at any time there is a Synth asset that appreciates in value, that gain is covered proportionally by all the staked SNX holders’ debts. 

- Every staker must pay off their debt to a smart contract before they can unlock their staked SNX tokens.

For example:

- If 100% of the Synths in the Synthetix ecosystem were synthetic Bitcoin (sBTC), which say halved in price, the total debt in the system would halve as well. Every staker’s debt would also halve as a result. 

- On the other hand, if only 50% of the ecosystem were sBTC, and BTC doubled in price, each staker’s debt—would increase by one quarter. 

In this way, SNX stakers act as a pooled counterparty to all Synth exchanges; stakers take on the risk of the overall debt in the system. 

## Synthetix.Exchange

[Synthetix.Exchange](https://synthetix.exchange) offers a decentralized trading platform for its synth tokens, allowing someone to go long or short on those synths.

- Before traders can participate, SNX investors stake their tokens to mint liquidity for the network. 

- When traders execute a transaction, they pay a fee to trade against the stakers. 

- A trader's profit adds to the global debt pool and a trader's loss subtracts from it.

## Links

- [Synthetix stats](https://defipulse.com/synthetix)
- https://messari.io/asset/synthetix/profile
