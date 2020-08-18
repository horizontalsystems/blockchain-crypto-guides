# Liquidity Pools Explained

The first generation of decentralized exchanges been struggling to attract cryptocurrency traders due to low trading volumes for most trading pairs. As a result most people been using centralized exchanges which typically have more people and therefore higher trading volumes.

Liquidity pools emerged as a solution to increase the trading volume and liquidity on decentralized exchanges. These pools are controlled by smart contracts associated with DEXes and offer a new mechanism for trading cryptocurrency assets while allowing investors to earn a yield on their holdings. In essence, these services solve two problems:

- For cryptocurrency holders: 

    Holders can deposit their holdings into a liquidity pool and earn some cryptocurrency as a result without loosing access to the assets.
    
- For cryptocurrency traders:

    Cryptocurrency traders are able to buy/sell a given cryptocurrency at market price (or close to) at any time.

Liquidity pools have no listing fees, or other barriers. Anyone can invest their cryptocurrency in an existing liquidity pool, at any time, and get compensated for it by the liquidity pool smart contract. The assets together with earnings can be withdrawn from the pool at any time as well. 

Multi-Token Exposure
AMMs commonly require liquidity providers to deposit two different tokens to supply equal liquidity on both sides of the trade. As a result, liquidity providers are unable to keep their long exposure to a single token, and instead have to split their exposure by holding an additional ERC20 reserve asset. A team owning a large quantity of one token or individual holders wishing to provide liquidity are forced to purchase another asset in order to provide liquidity, decreasing their holdings in the pool’s base token and adding exposure to another asset.

https://blog.chain.link/challenges-in-defi-how-to-bring-more-capital-and-less-risk-to-automated-market-maker-dexs/

====
What are liquidity pools?
If you are new to Ethereum or DeFi, liquidity pools are a seemingly complicated concept to understand so I will do my best to help.

Liquidity pools are pools of tokens that sit in smart contracts. If you were to create a pool of DAI and USDC where 1 DAI = 1 USDC. You would have the same amount of tokens, let’s say 1,000 tokens (1,000 DAI and 1,000 USDC) in the pool.

If trader 1 comes and exchange 100 DAI for 100 USDC, you would then have 1,100 DAI and 900 USDC in the pool so the price would tilt slightly lower for USDC to encourage another trader to exchange USDC for DAI and average the pool back.

You can see those details for each pool and it is something you can take advantage of when depositing.
===
//liquidity-pool-curve.png

On the screenshot above for the y Pool, DAI is low which means you could sell it for a bit more tokens. The basic idea is that you incentivise traders to push the price back to what it should be (in this case, 1).

Major liquidity pools:

- [Uniswap](https://uniswap.info/home)
- [Curve Finance](https://curve.fi)
- [Balancer](https://balancer.exchange/#/swap)

To sum up, liquidity pools allow cryptocurrency owners to earn additional income from their holding with limited risks. 

As demonstrated below the steps are fairly straightforward:

1. For demo purposes let's assume the user has some Ethereum and DAI tokens on balance. 
2. The user decides to earn some passive income from the assets and locks them into a liquidity pool for ETH-DAI trading pair on a DEX like Uniswap.
3. Liquidity pool smart contract will require user to deposit both tokens in equal amounts taking into account current exchange rate.
4. Smart contract then uses these funds to create liquidity for anyone buying/selling ETH for DAI on Uniswap.
5. Anyone buying/selling ETH for DAI on Uniswap pays a 0.3% trading fee which goes to the liquidity providers.
6. User can withdraw deposited funds at any time and claim a portion of the trading fees generated as a result of each trade.

For an in-depth and simple overview of how liquidity pools work, the differences between popular pools and expected profits explained in a standalone section dedicated to [liquidity pools](/guides/defies/defi/6-liquidity-pools.md). Meanwhile, think of them as automated instruments that pay you for utilizing your cryptocurrency.

## Curve Liquidity Pools

Getting started with Curve isn’t easy, there is a lot to grasp and the unique UI can be difficult to get started with. 

This small FAQ is intended for Curve beginners with an understanding of DeFi and Crypto. It tries to answer recurring questions about how to get started with Curve and how it works or makes money for liquidity providers.

What is Curve.fi?
The easiest way to understand Curve is to see it as an exchange. Its main goal is to let users and other decentralised protocols exchange stablecoins (DAI to USDC for example) through it with low fees and low slippage. Unlike exchanges out there that match a buyer and a seller, the behaviour of Curve is different, it uses liquidity pools like Uniswap. To achieve this, Curve needs liquidity (tokens) which is rewarded by those who provide it.

Curve is non-custodial meaning the Curve developers do not have access to your tokens.

How does Curve.fi achieve such high APRs?
Every time someone makes a trade on Curve.fi, liquidity providers (people who have deposited funds onto Curve) get a small fee split evenly between all providers, this is why you will see high APRs on days with high volume and high volatility.

But there is more, the liquidity pools are also supplied to lending protocols like Compound (for cPool) in the background so you get extra interests on top of the trading fees. The y pools (all the pools using yTokens: PAX, Y and BUSD) use a protocol called iEarn explained below.

It’s important to note that because fees are dependant on volume, daily APRs can often be quite low just like they can be very high.

Some pools (sUSD, ren and sbtc) do not use any lending protocols.

So if you’re wondering where those returns come from, the short answer is trading fees and interests (for the pools using lending protocols).
What is the y in the y pools (also what is iEarn)?
iEarn is a yield aggregator. You might think that Compound doesn’t always have the best lending rates and you would be right and thus the yToken balances automatically your stable coin to the protocol(s) with the better rates (Compound, Aave and dYdX). It’s free and non-custodial (as is Curve) but it is also why the yPools are considered more risky as you use a series of protocols that could themselves have critical vulnerabilities.

What is the “deposit wrapped” option?
(This only applies to tokens with c tokens or y tokens). If you deposit a stable coin to one of the pools with lending, Curve will automatically wrap your token to a cToken (for Compound) or a yToken(for iEarn). The option is simply there is you have already previously wrapped your tokens on iEarn or lent them on Compound. If your stable coin is in its original form, you can ignore this option.

What happens when you provide liquidity on Curve?
When you go to the deposit page and deposit one stable coin, it then gets split between each token in the pool. That’s something you have to keep in mind because if you were to deposit 1000 DAI in the yPool, a per the screenshot below, you would then get 46.1 DAI, 314.5 USDC, 490.2 USDT and 149.2 TUSD. Those values change constantly as people trade and arb the price of stable coins.

Does the coin I deposit matter?
Besides the deposit bonus explained below, it doesn’t matter. Your tokens will get split into the pool and it doesn’t affect your returns so you can deposit one, some or all the coins into the pool without worrying about it affecting your returns.

Understanding deposit bonuses
On the screenshot above, you can see DAI is quite low on the pool so if your plan was to join the yPool, you would ideally deposit DAI into it. As you can see on the screenshot, you would get an instant 0.755% bonus for depositing DAI into the pool.

The main reason for this is that DAI is currently slightly more expensive so if you went to a centralised exchange you might sell it for $1.007 instead of $1. The deposit bonus reflects that.

The other reason behind this is that the pools are always trying to balance themselves and go back to equal parts (in this case 25% DAI) so depositing the coin with the lowest share will get you a deposit bonus and that also applies to BTC pools.

But does that mean I can still withdraw in my favourite stable coin?
When you withdraw, the same principle applies (but reversed). If you withdraw the stable coin with the biggest share, you would get a bonus but you still choose what stable coin you want to withdraw.

How quickly does interest accrue/compound?
Interests for pools using lending protocols compound every block or 15 seconds or immediately after fees are paid. It’s also compounded automatically.

What is arbitrage?
Arbitrage is the simultaneous buying and selling of, in our case, a token to make a profit. Because cryptocurrency markets can often lack liquidity, there are often opportunities for traders to take advantage of price discrepancies to make a profit which can be helped by protocols like Curve.

An example of that below:

https://etherscan.io/tx/0x259b7ac1f50554fe5ddcfeea7b4fa90ad70356ddfbbd341289db0dfbf99447f9

On this transaction, someone used Curve and OasisDex and made around $200. This goes back to what was discussed earlier with liquidity pools. The idea is that is you incentivise traders to take advantage of price discrepancies which we all get rewarded for.

What are incentivised pools?
Liquidity pools (particularly one without an opportunity cost) are a great way to help stable coins keep their pegs. It makes easy for traders to arb (see question above) when the price slips off the peg which is very important for all the companies and foundations developing stable coins as having a $0.98 stable coin is never a good look.

As a result, some pools on Curve are “incentivised”. That means that on top of trading fees and lending fees, the companies (currently Synthetix and Ren) will give rewards to people providing liquidity to the pools with their coins.


Currently there are two incentivised pools.

How do I take advantage of those incentivised pools?
Once you deposit in the sUSD or sBTC pools on Curve, you will get LP tokens that you can then stake on Mintr. (https://mintr.synthetix.io/)

Once you stake those LP tokens, you will start accruing your rewards for participating in the pool which you can claim as often as you would like.


What are the incentives on the new sBTC pool?
With Bitcoin growing exponentially on Ethereum under different variants, Curve.fi has added two new liquidity pools to help those tokenised Bitcoin keep their peg.

The new sBTC pool has been incentivised by REN and SNX. The pool is looking for liquidity in different flavours of Bitcoin on Ethereum (wBTC, sBTC and renBTC) which can be acquired on the open market or via the renBridge (https://bridge.renproject.io/) with native Bitcoin. The concepts explained above all apply to this new pool except that you provide tokenised Bitcoin instead of a stable coin. It is a very interesting pool to participate in as you would receive the following rewards for providing liquidity on top of trading fees:

SNX
REN
CRV (to be released Curve token)
BAL (https://balancer.finance/ native token)
Those incentives will run for 10 weeks (starting on the 19th of June 2020) and may be extended as the sUSD pool was.

You can read more about it there: https://blog.synthetix.io/btc-yield-farming-pool/

What makes the incentives APR move?
The sUSD pool currently earns another 38.31% of SNX per year and there are three variables that can make this change:

The SNX distributed is based on the number of people staking their LP tokens on Mintr which means your share of rewards gets lower if more people start staking
The price of SNX (price of SNX going up would make the yearly bonus go up)
The size of weekly rewards (48,000 SNX as of today) could also be lowered as Synthetix reevaluates their partnership with Curve
What is the CRV token?
CRV token is a governance and utility token for Curve that has recently released. All those who have participated in the Curve pools will retroactively receive CRV tokens.

Has Curve.fi smart contracts been audited?
Curve smart contracts were Audited by Trail of Bits.

Where can I find Curve smart contracts?
There: https://www.curve.fi/contracts !

https://guides.curve.fi/curve-fi-how-to-get-started/
https://guides.curve.fi/
