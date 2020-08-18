# DeFi Lending & Borrowing

A large segment of DeFi services built for enabling borrowing and lending cryptocurrencies in a decentralized manner.

Decentralized Lending and Borrowing
DeFi lending platforms aim to give users the ability to make their crypto work for them. People can lock up funds in smart contracts and set certain conditions for them to release to each participant. This can take the form of contributing to lending pools, or to offering personal loans. Borrows can gain access to the crypto they need, often using their existing crypto as collateral.
The problem with many of the DeFi lending platforms that have been developed so far is that they offer over-collateralized loans. That means that in order to borrow one type of crypto, you have to put up a greater amount of another coin as collateral. This does not do much to make borrowing more accessible to people of limited means, as it requires them to have excess funds. As such, currently decentralized lending and borrowing does not seem to do much towards the goal of “banking the unbanked”.
Why take out an over-collateralized crypto loan? Why not just use an exchange to trade your ETH for some other sort of crypto? This primarily comes down to the different earning potentials of various cryptocurrencies. If you have a significant sum of ETH that you want to continue to hold because you believe it will gain in value, but in the short term you need some money to pay bills or make a purchase, you can collateralize your ETH, get the loan of the other cryptocurrency, convert it to fiat, and your ETH will continue to earn value while it is held in escrow on the loaning platform.

Some users also like to use DeFi loans to perform a sort of leverage trading, where they put their ETH up as collateral to take out a loan of another cryptocurrency, then convert the funds they borrowed into more ETH. This sort of strategy counts on ETH gaining in value faster than the borrowed cryptocurrency, allowing the user to pay off their loan after earning a profit on the ETH they purchased with the loan. Like any form of leverage trading, this involves taking on a certain amount of risk, since they could lose value rather than gaining if the market does not go in the borrower’s favor.

Users of DeFi lending platforms must closely monitor the value of ETH and the currency they have borrowed, as well. If the values of these currencies change and your collateral falls below the required percentage, your collateral will be liquidated.

Why Do These Platforms Require Such High Collateral?
The high collateral requirements of DeFi lending platforms are intended as a sort of insurance policy, to protect the platform but especially to protect the funds which users have dedicated to the lending pool. If you are contributing your DAI to the lending pool, you want to know you are going to get it back. Thus you rely on the fact that the borrower will want to be able to redeem the ETH which they have put up as collateral.
Copyright 2020 Cointelligence LTD. All rights reserved. 43
 In general, you can trust that no one is going to willingly give up on a large amount of crypto which they have staked on their loan. Any economically rational actor will do everything within their power to pay back their loan and prevent their collateral from being liquidated. Thus, lenders can invest their funds into the pool confident that either the loan will be paid back, or they will receive recompense from the liquidated collateral.
 
 On the surface it appears that there is no risk for lenders in these situations. However, there is still potential for things to go wrong that could cause a lender to lose their funds. Some protocols, such as the MakerDAO system, have to sell the liquidated collateral. If the value of ETH were to drop rapidly and the system took a while to find a buyer, the lender could end up receiving less value back than they lent out.
 Likewise, as with all DeFi ecosystems, there is the possibility of a hack or exploit which could drain the liquidity pool, causing lenders to lose their assets. And as with all financial systems (and life in general, really) one must keep in mind the remote possibility of a totally unforeseen event that could have negative or positive effects on the market (one example being the coronavirus pandemic of 2020).
 Decentralized lending protocols are designed to give lenders the best possible chance of getting their funds back, but as with everything, lenders must be sure not to commit more money than they can afford to lose. It is also advisable to research any lending pool before participating in it to determine if there is a history of hacks or exploits, and if so, what steps were taken to address them.

- For borrowers:

    Borrowing services allow someone to borrow cryptocurrency from a smart contract in exchange for a collateral in a form of another cryptocurrency as well as the service fee (in a form of interest rate).
    
    The borrower can generally repay the loan at any time and withdraw the deposited collateral. The way these services are built ensures that user collateral always remains under control of a smart contract which is programmed to repay it to the borrower on the loan return.
    
    Generally speaking, borrowing services allow someone to access liquidity without selling their cryptocurrency.
    
- For lenders:

    Lending DeFi services allow cryptocurrency holders to lend their assets to a smart contract and earn interest on the deposited assets.
    
    Many people in possession of cryptocurrencies are able to deposit their assets and earn passive income, with minimal risks.
    
    The interest rate for lending usually is significantly higher than it's for borrowing. This ensures that smart contract are always able to serve both borrower and lenders.
        
Some top DeFi services in that category include [Compound Finance](https://compound.finance/markets), [Aave](https://app.aave.com/home) and [Oasis](https://oasis.app/).

If you would like to get a thorough overview of popular borrowing/lending DeFi services and how they differ head on to our [DeFi borrowing and lending](/DeFi/7-lending-borrowing.md) guide.

## Flash Loans

Flash Loans
There is another form of crypto lending and borrowing which does not involve collateral, called
6
7
A flash loan allows the lender to borrow funds without any collateral, provided they pay back the loan within the same transaction. This sounds confusing on the surface. Why take out a loan if you have to pay it back immediately?
There are a few legitimate applications for flash loans. They are primarily designed to allow users to essentially refinance their crypto loans, or perform arbitrage to take advantage of better rates on various exchanges. They do this by allowing the user to set up a chain of actions that happen within a single smart contract. This set of actions is considered “atomic” -- meaning it either happens or it doesn’t. If the end result of the contract does not allow the borrower to pay back their original loan and any required gas or interest, then the entire contract is reverted and none of the transactions happen.
It is really easy to conceptualize this if you play video games. Imagine if you will that you are playing a game where you have a “time stop” ability. Using this ability, you can take all of the
a flash loan . Flash loans made major news in 2020 when they were used to perform the attacks
on bZx , inspiring arguments as to the utility and value of this technology. Indeed, many of the articles you will find about flash loans discuss how they can be used to exploit the system, and you have to dig deeper to find non-exploitative applications.
Copyright 2020 Cointelligence LTD. All rights reserved. 44
 time you need to set up a chain of abilities which will all go off when time resumes. A flash loan allows you to essentially simultaneously perform multiple financial transactions in an instant: borrowing the funds, using them to make several arbitrage trades across multiple DeFi platforms, and then paying them back to the original lender, all in one go.
