# Decentralized Exchanges

While there several major [cryptocurrency exchanges](/guides/fundamentals/6-buying-cryptocurrency-basics.md) exist today pretty much all of them are centralized. 

Centralized exchanges provide a platform where people can buy/sell cryptocurrency with/for fiat currency like USD, EUR etc. When dealing with centralized exchanges expect to see:
 
- ability to deposit and withdraw fiat currencies like USD
- ability trade between cryptocurrency and fiat currency
- through identity verification and KYC/AML checks
- the funds deposited are in exchange's custody

The decentralized exchanges (DEXes) began to emerge over the last couple of years as the Ethereum ecosystem began to attract more people. 

> A decentralized exchange allows buying and selling cryptocurrency. 
>
> It operates like a stock exchange, except it is run by a smart contract on the Ethereum blockchain that enforces the rules and executes trades.

In just about 2-3 years we have seen a number of decentralized exchanges emerge with some now averaging over 100 million worth of USD in trading volume over 24-hour period.

Unlike the centralized counterparts, DEX enables cryptocurrency trading without any limitations or requirements. 

> Anyone with some cryptocurrency can trade on a decentralized exchange without the need to go through identity checks or account verification procedures. 
>
> Typically, DEXes operate solely with cryptocurrency without an option to use the fiat currency. While fiat currency not supported the users may cryptocurrency stablecoins which are pegged to fiat currencies.

The DEX lives on a blockchain which esnures the service online and accessible to anyone worldwide.

DEXes typically designed in non-custodial way to ensure that user always maintains full control over the assets. 

> While the security on a DEX guaranteed by smart contracts, keep in mind that there may be software bugs in smart contracts which may lead to the loss of funds.

The process of exchanging tokens on a DEX is fairly simple and intuitive: 

- A user picks an input token that will be sold, and an output token that will be bought. 

- Then DEX smart contract calculates how much of the output token they’ll receive. 

- Shortly after transaction is executed, a bout token appears in user's wallet.

When using DEX make sure you always access the officially advertised website for the DEX. 

> There are a lot of fake websites for various DEXes which look just like the original one.

While different models of decentralized exchanges exist, the ones that achieve high liquidity and public attention are those with liquidity pools.

## DEXes & Liquidity Pools

Liquidity Pools are yet another DeFi service offered by decentralized exchanges. These instruments are aimed at incentivizing trading liquidity on a given DEX. 

> Traditionally token exchanges require buyers and sellers to create liquidity via order books, current generation of DEX create liquidity with the help liquidity pools.

The first generation of decentralized exchanges been struggling to attract cryptocurrency traders due to low trading volumes for most trading pairs. As a result most people been using centralized exchanges which typically have more people and therefore higher trading volumes.
 
The idea behind these liquidity pools is simple: anyone with idle cryptocurrency can deposit these funds into a liquidity pool belonging to DEX which then uses these funds to settle buy and sell orders on a DEX.

- Typically, liquidity pool is a smart contract belonging to DEX that is fully autonomous and not controlled by any entity.

- Liquidity pool contributors get a share of all trading fees originated from these buy/sell orders. 

- Each trader making use of the liquidity pool pays a service fee to the liquidity pool as a result of each trader. 

- The pool contributors can withdraw their assets from the pool (along with a portion of accumulated fees) at any time.

In general, each trading pair on a DEXes has its own liquidity pool. To make it clear let's take and ETH/USDT trading pair on some DEX that supports liquidity pools.
 
- an ETH/USDT trading pair on a DEX will have a liquidity pool set up specifically for that pair.

- the liquidity pool can accept cryptocurrency funds (ETH and USDT) from third party entities and then use these funds to serve traders looking to sell/buy ETH for USDT.

- liquidity pool smart contract will require user to deposit both tokens in equal amounts taking into account current exchange rate between the two. The liquidity provider in general receives a certain number of tokens representing the ownership of the pool.

- traders pay so called "liquidity provider fee" to settle each trade, which typically varies between 0.02 - 0.04 %.

- anyone who deposited ETH and USDT into a liquidity pool gets to claim trading fees.

To sum up, each trading pair on a DEX is underpinned by a massive community-funded liquidity pool. Anyone can join the pool by depositing cryptocurrency assets accepted by the pool.

### 1. Uniswap DEX

[Uniswap](https://uniswap.info/home) is a peer-to-peer, decentralized cryptocurrency exchange to trade Ethereum and Ethereum-based tokens without a risk of fraud.

To this day still one of the biggest DEXes with [over 100 million](https://migrate.uniswap.info/home) in 24-hour trading volume.

For traders:

- When trading on Uniswap traders may see significant price slippage (deviation from market price) for large orders. In other words, trading very large amounts of a token will have significantly less favorable price than when trading smaller amounts.

- Trading fee is 0.03%

For liquidity providers:

- Uniswap uses a simple math formula and tokens available in its liquidity pool to determine price and execute trades. An overview of this mechanics can be found [here](https://uniswap.org/docs/v2/protocol-overview/how-uniswap-works) and [here](https://uniswap.org/docs/v2/core-concepts/swaps/).

- Anyone can create a liquidity pool for any Ethereum-based ERC20 token on Uniswap, even if the given token not yet listed on exchange.

The Uniswap can be accessed through its front-end at [uniswap.org](https://app.uniswap.org/). Uniswap doesn't have any native project token associated with the project.

### 2. Curve Finance DEX

[Curve Finance](https://curve.fi) is a decentralized, Uniswap-like exchange but built specifically for [stablecoins](/guides/defi/8-stablecoins.md).

Curve has a lot of trading volume, frequently exceeding over 50 million USD in [trading volume](https://www.curve.fi/dailystats). 

For traders:

- Curve's uniques selling point comes from its trading algorithm which provides better prices when buying or selling large amount of cryptocurrency stablecoins.

- There is a 0.04% fee for each trade.

For liquidity providers:

- Curve's liquidity pools typically provide better return on investments than pools on Uniswap.

- Curve's liquidity pools can lend spare funds to external [DeFi lending](/guides/defi/7-lending-borrowing.md) services and earn liquidity providers passive income even when there is no trading activity. Some liquidity pools do not use any lending protocols.

- The DEX trading fees are split between liquidity providers.

- Curve liquidity pools do not require liquidity provider to deposit all pool tokens. The provider can just deposit one stablecoin, it then gets split between each token in the pool.

Curve DEX has a governance token CRV which provides [additional perks](https://guides.curve.fi/crv-launches-curve-dao-and-crv/) when interacting with Curve services including voting capabilities on important decisions.

For more info on Curve check out the [FAQ page](https://www.curve.fi/rootfaq) on project website.

### 3. Balancer DEX

[Balancer](https://balancer.exchange/) is a newer DEX that launched in March 2020 that supports trading Ethereum-based cryptocurrency tokens.

> From Balancer website:
>
> Balancer is a very new protocol. Although we are taking every precaution and doing extensive audits, this is still very much a beta product. Use small amounts of funds to start.

For traders:

- Balancer able to provide lower trading fees for various pairs due to some incentives for liquidty providers to keep the fees low.

For liquidity providers:

- Just like Curve and Uniswap, Balancer has a custom mechanism for liquidity pools.

- One of the key uniques selling points of Balancer lies in ability to setup personal index fund without undertaking complex re-balancing actions.

- Balancer recently introduced its native governance tokens called BAL which is distributed to liquidity providers.

- The lower the pool fees, the more BAL the pool receives. The higher the trading fees, the less BAL the pool receives. Ultimately, this creates a rather elegant design as pool creators (as well as liquidity providers) will have to factor in whether they’d prefer to play the short-game and potentially earn higher trading fees or play the long-game by minimizing trading fees to maximize their BAL earnings.

- Balancer is permissionless in that the pools cannot be censored nor can the smart contracts be edited or shut down once they’ve been activated. 

Balancer liquidity pools:

- Private Pools: The creator of the pool has full permissions and only he/she can contribute liquidity. The owner has full control over pool parameters i.e. accepted crypto tokens and fee traders have to pay to access liquidity in the pool.

- Shared Pools: Shared Pools where the pool’s tokens, weights, and fees are permanently set. Pool creator has no special privileges. Anyone may add liquidity to shared pools and ownership of the pool’s liquidity is tracked with a specific token called BPT - Balancer Pool Token. This is similar to how liquidity pools work on Uniswap.

- Smart Pools: Like Shared Pools, ownership is tracked by BPTs. These pools can also accept liquidity from anyone and at the same time can have arbitrary restrictions on how pool parameters can be changed.

The Balancer DEX can be accessed at [balancer.exchange](https://balancer.exchange).

### 4. Kyber DEX

[Kyber](https://kyberswap.com/) DEX launched back in 2017, Kyber raised approximately $50 million through its successful ICO sale of the KNC token and Vitalik Buterin (founder of Ethereum) is listed as an advisor. 

For traders:

- For users looking to exchange Ethereum based tokens, the main difference for users is the ability to place limit orders. 

- Limit order allows executing trade at a price that is guaranteed to be higher or equal to a specific rate, so you don't have to monitor the crypto market 24x7 to swap manually. 

Highlights:

- Various DeFi service DApps already integrate with Kyber and use it for various purposes. For instance, an app looking to accept payments in some cryptocurrency stablecoin may use Kyber to accept payments in various cryptocurrencies and have them auto-converted to a desired one.

- Kyber has a native cryptocurrency token KNC which is a governance token for KyberDAO. Right now the KNC token can be used for voting on important decisions and in the future all aspects of the platform are to be decided by KNC owners.

## 5. Bancor DEX

[Bancor](https://www.bancor.network/) is Uniswap-like decentralized exchange that offers yet another place to trade Ethereum-based tokens.

Bancor has a native token called Bancor Network Token. Users who trade on Bancor do not need to hold BNT; however, users creating a liquidity pool on Bancor or providing liquidity to an existing pool must hold BNT.

There are some additional incentives for liquidity providers:

- Bancor V2 takes this a step further by enabling liquidity providers to get into a liquidity pool with just one token, removing the two-sided liquidity deposit requirement.

- Just like the other DEXes, Bancor liquidity pool tokens can accrue value by collecting trading fees.

- In addition to trading fees, pool rewards can be also provided by the Bancor Protocol itself (via BNT token inflation) as well as a project behind the token via 'liquidity provider incentive programs'.

- Every liquidity pool on Bancor holds BNT in its reserves as well as the “base token” receiving liquidity. BNT serves as the intermediary token connecting pools in the network and across blockchains. For example, a trade from DAI to BAT has the following conversion path: DAI > BNT > BAT.

For more information about Bancor and its working mechanics refer to [official documentation](https://support.bancor.network/hc/en-us/sections/360000256751-Bancor-Network).

### 6. dYdX DEX

Most DEX platforms allow investors to take long positions in various cryptocurrency assets. However, it is currently very difficult to take short, hedged, or more complex financial positions.

dYdX is a decentralized exchange for short selling and derivatives built on the Ethereum blockchain.

- Short positions allow investors to profit on price decreases, and can be used for speculation or to hedge existing positions.

- Fully-collateralized low risk loans for short sellers allow token holders to earn interest fees

- On dYdX someone can trade on margin with up to 10x leverage. Back your positions with any supported collateral.

### 7. 1inch.exchanges

The above mentioned DEXes are not the only decentralized exchanges on Ethereum blockchain, there are [many other](https://defiprime.com/exchanges#ethereum).

There are slo instruments like [1inch.exchange](https://1inch.exchange/) which provide the best exchange prices on the market by splitting a trade order among multiple DEXes in one single transaction.
