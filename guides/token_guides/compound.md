![](images/comp-Main-l.png)

# Compound in Simple Terms

https://compound.finance/docs/comptroller#account-liquidity

Compound operates similar to a bank. You can deposit various cryptocurrencies and earn an annual interest on your deposits, similar to depositing your money into the bank. 

- earn interest when you deposit (Compound refers to this as “supply”) cryptocurrencies onto their platform. Once you have supplied cryptocurrencies onto the platform, you would be able to use Compound’s other features such as using these supplied cryptocurrencies as collateral to take out loans.

- An important point to note is that Compound has floating interest rates which are subject to change. How Compound determines the interest rate is similar to the Federal Reserve, Compound would analyse the supply and demand for a particular cryptocurrency and then set a floating interest rate that will adjust based on market conditions. Compound also takes a 10% cut off your earned interest. Users can take back their cryptocurrencies at any time with a 15 second lag between executing the instruction and receiving their crypto.

- Compound requires users to put up 100% of the value of your intended loan. There are risks of doing this though which will be explained below where we look at Compound’s liquidation clause.

- Borrowing cryptocurrencies does also require you to pay fees. For example in the below image you can see that taking out a loan of BAT will cost you a whopping 29.4% per year.

- You can also see from the above image how Compound makes money, since there is a spread between the amount of interest generated from depositing, say BAT and the amount of fees you need to pay for borrowing the same.

## Compound Finance vs. Aave

However, both have unique features that set them apart. 

- Compound does have USDT as a usable asset, but Aave has a wider range of tokens on offer. 

- For Aave, their new interest rates and regulations, like rate switching gives them a slight edge. 

- For first time users, Aave offers great incentive rates. However, lending rates and Borrow fees are higher on average with Aave.

## COMP Token

Since May 2020, Compound has transitioned to community governance. This means holders of Compound’s token, $COMP can make proposals and vote on decisions relating to how Compound is to be developed or run, e.g. what kind of collateral should Compound support, or what the interest rates should be.

There is a total supply of 10 million $COMP, of which 42.3% is reserved for distribution to users to earn when they use Compound e.g. by supplying or borrowing cryptocurrencies. For every Ethereum block, 0.5 $COMP is distributed across Compound’s 9 markets in proportion to the interest accrued in the market. And within each of these markets, the amount of distributed $COMP is divided 50:50 between suppliers and borrowers of that particular cryptocurrency. Hence the cryptocurrency which is earning the most COMP per day is always changing. Users should check Compound’s User Distribution page, where they can see the amount of interest paid per day as well as the amount of $COMP distributed to suppliers and borrowers.

- You can also earn $COMP by voting on various governance proposals concerning how Compound should be run.

- Users earn COMP when they supply or borrow cryptocurrencies on the platform. 

So in the below image we deposited 500 USDC and borrowed 300 USDT to get a net effective interest of -12.27% which on the face of it does not look profitable.

BUT at the same time we are also earning $COMP. This calculator shows you how much $COMP would be distributed depending on the type and amount of tokens supplied or borrowed. So as seen in the below image, whilst the net interest was -12.27% per annum, we EARNED 13.94% APY of $COMP. Basically, you are being PAID to take out a loan.

$COMP mining: Another way to potentially earn more $COMP

$COMP mining goes beyond simply supplying cryptocurrencies and profiting off the interest rates on Compound. Rather it is about getting as much $COMP rewards as possible in the shortest amount of time. Some methods even allow you to multiply your earnings by folding your position 4x.

In a nutshell, people have have been finding ways to do this by first depositing USDC, borrowing USDT and then converting the USDT to USDC. Then depositing the USDC onto the platform, leveraging it, withdrawing USDT and depositing it onto the Compound platform several times over.

What cryptocurrencies does Compound support?

Compound currently supports 9 cryptocurrencies, namely: Ether (ETH), USD Coin (USDC), Basic Attention Token (BAT), Tether (USDT), 0x (ZRX), Wrapped BTC (WBTC), Dai (DAI), Augur (Rep) and Sai (Legacy DAI) (SAI).

Developer Guide for Supplying Crypto Assets to the Compound Protocol

The Compound Protocol is a series of interest rate markets running on the Ethereum blockchain. When users and applications supply an asset to the Compound protocol, they begin earning a variable interest income instantly. Interest accrues every Ethereum block (~15 seconds), and users can withdraw their principal plus interest anytime.
Under the hood, users are contributing their assets to a large pool of liquidity (a “market”) that is available for other users to borrow, and they share in the interest that borrowers pay back to the pool.
When users supply assets, they receive cTokens from Compound in exchange. cTokens are ERC20 tokens that can be redeemed for their underlying assets at any time. As interest accrues to the assets supplied, cTokens are redeemable at an exchange rate (relative to the underlying asset) that constantly increases over time, based on the rate of interest earned by the underlying asset.
Non-technical users can interact with the Compound protocol using an interface like Dharma or app.compound.finance; developers can create their own applications that interact with Compound’s smart contracts.
