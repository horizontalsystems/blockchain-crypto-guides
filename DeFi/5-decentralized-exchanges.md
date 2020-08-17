# Decentralized Exchanges

While there are a number of major [cryptocurrency exchanges](/fundamentals/6-buying-cryptocurrency-basics.md) exists today pretty much all of them are centralized. 

In simple terms, centralized exchanges provide a platform where people can buy/sell cryptocurrency with/for fiat currency like USD, EUR etc. 

Centralized exchanges typically have following attributes:
 
- support a wide range of cryptocurrencies
- have high liquidity for major trading pairs i.e. BTC/USD
- allow deposits/withdrawals for fiat currencies i.e. US Dollar.
- allow deposits/withdrawals of cryptocurrencies
- require users to go through identity verification and KYC/AML checks.
- hosted on some centralized servers and can go offline

- available in certain countries

The decentralized exchanges(or DEXes) began to emerge fairly recently as the Ethereum ecosystem began to attract more and more engineers. 

In just about 2-3 years we have seen a number of decentralized exchanges emerge. At this point, there are already DEXes that average over 100 million worth of USD in trading volume over 24-hour period.

Unlike the centralized counterparts, DEX enables cryptocurrency trading without any limitations or requirements. 

> Anyone with some cryptocurrency can trade on a decentralized exchange without the need to go through identity checks or account verification procedures. 
>
> DEXes operate solely with cryptocurrency (mainly ETH and Ethereum based tokens) usually without any means to use the fiat currency. 

When trading on DEX the exchange occurs without having to rely on the exchange operator which acts as intermediary between the buyer and seller. The trades are usually governed by smart contracts which cannot do anything outside the standard feature set. 









Automated Market Makers (AMMs) use algorithmic “Money Robots” to mimic these price actions within electronic markets like DeFi. 
While different designs of Decentralized Exchanges exist, AMM-based DEXs have consistently achieved the most liquidity and the highest amount of average daily trading volume.

Constant Function Market Makers (CFMMs) are the most popular class of AMMs, and are specifically designed to enable the decentralized exchange of digital assets. These AMM exchanges are based on a constant function, where the combined asset reserves of trading pairs must remain unchanged. In non-custodial AMMs, user deposits for trading pairs are pooled within a smart contract, which any trader can leverage for token swap liquidity. Thus, users trade against the smart contract (pooled assets) as opposed to directly with counterparty like in order book exchanges.

There are three primary designs of Constant Function Market Makers that have emerged since 2017.

The first type to emerge was the Constant Product Market Maker (CPMM) and it was popularized in the first AMM-based DEXs, Bancor and Uniswap. CPMMs are based on the function x*y=k, which establishes a range of prices for two tokens according to the available quantities (liquidity) of each token. When the supply of token X increases, the token supply of Y must decrease, and vice-versa, to maintain the constant product K. When plotted, the result is a hyperbola where liquidity is always available, but at increasingly higher prices that approach infinity at both ends.




Some of the currently popular decentralized exchanges are: 

- [Uniswap](https://uniswap.info/home)

    Uniswap is a peer-to-peer, decentralized cryptocurrency exchange which allows you to trade Ethereum and Ethereum based tokens. Uniswap is one of the first and to this day still one of the biggest DEXes with [over 100 million](https://migrate.uniswap.info/home) in 24-hour trading volume.
    
    Let’s take Uniswap as an example. Uniswap is an “automated market maker,” or AMM (another DeFi term of art). This means Uniswap is a robot on the internet that is always willing to buy and it’s also always willing to sell any cryptocurrency for which it has a market.
    
    On Uniswap, there is at least one market pair for almost any token on Ethereum. Behind the scenes, this means Uniswap can make it look like it is making a direct trade for any two tokens, which makes it easy for users, but it’s all built around pools of two tokens. And all these market pairs work better with bigger pools.
    
    Let’s say there was a market for USDC and DAI. These are two tokens (both stablecoins but with different mechanisms for retaining their value) that are meant to be worth $1 each all the time, and that generally tends to be true for both.
    
    The price Uniswap shows for each token in any pooled market pair is based on the balance of each in the pool. So, simplifying this a lot for illustration’s sake, if someone were to set up a USDC/DAI pool, they should deposit equal amounts of both. In a pool with only 2 USDC and 2 DAI it would offer a price of 1 USDC for 1 DAI. But then imagine that someone put in 1 DAI and took out 1 USDC. Then the pool would have 1 USDC and 3 DAI. The pool would be very out of whack. A savvy investor could make an easy $0.50 profit by putting in 1 USDC and receiving 1.5 DAI. That’s a 50% arbitrage profit, and that’s the problem with limited liquidity.
    
    (Incidentally, this is why Uniswap’s prices tend to be accurate, because traders watch it for small discrepancies from the wider market and trade them away for arbitrage profits very quickly.)
    
    However, if there were 500,000 USDC and 500,000 DAI in the pool, a trade of 1 DAI for 1 USDC would have a negligible impact on the relative price. That’s why liquidity is helpful.
    
    Similar effects hold across DeFi, so markets want more liquidity. Uniswap solves this by charging a tiny fee on every trade. It does this by shaving off a little bit from each trade and leaving that in the pool (so one DAI would actually trade for 0.997 USDC, after the fee, growing the overall pool by 0.003 USDC). This benefits liquidity providers because when someone puts liquidity in the pool they own a share of the pool. If there has been lots of trading in that pool, it has earned a lot of fees, and the value of each share will grow.
    
    Liquidity added to Uniswap is represented by a token, not an account. So there’s no ledger saying, “Bob owns 0.000000678% of the DAI/USDC pool.” Bob just has a token in his wallet. And Bob doesn’t have to keep that token. He could sell it. Or use it in another product. We’ll circle back to this, but it helps to explain why people like to talk about DeFi products as “money Legos.”
    
    Note the instance of fake coins being listed on Uniswap.
    
- [Curve Finance](https://curve.fi)

    Curve is a decentralized, UniSwap-like exchange but built specifically for stablecoins. Curve selling point comes from the fact that it's trading algorithm can provide better rates when buying or selling large amount of cryptocurrency stablecoins.

- [Balancer](https://balancer.exchange/#/swap)

Balancer, an AMM that allows users to set up self-rebalancing crypto index funds.


- Kyber

- Bancor

- dYdX

https://www.reddit.com/r/btc/comments/gj21cg/dydxs_btc_perpetual_market_is_live/?utm_source=share&utm_medium=ios_app&utm_name=iossmf

Bancor V2 takes this a step further by enabling liquidity providers to maintain exposure to a single token, removing the two-sided liquidity deposit requirement. By pegging liquidity reserves via Chainlink oracles, users can maintain exposure to any token in the AMM ranging from 100% exposure to any ERC20 token, 100% exposure to BNT, or any distribution between the two. This is ideal for cryptocurrency investors wanting to keep full exposure to their preferred assets, especially when combined with mitigation of impermanent loss. This is likely to attract token teams and investment funds wanting to provide low risk liquidity on an AMM without needing to purchase additional reserves.


- DeversiFi
- Oasis


## Curve Finance

Stablecoins have become an inherent part of cryptocurrency for a long time but they now come in many different flavours (DAI, TUSD, sUSD, bUSD, USDC and so on). 

There is a much bigger need for cryptocurrency users to move from a stablecoin to another. Centralised exchanges tend to have high fees which are problematic for those trying to move from a stable coin to another. 

As a result, Curve.fi has become the best place to exchange stable coins because of its low fees and low slippage.
