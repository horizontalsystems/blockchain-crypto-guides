![](./images/defi2-lendborrow-l.png)

# Lending Pools

There are DeFi services which facilitate cryptocurrency lending and borrowing services in non-custodial manner.

- For borrowers

    Decentralized borrowing services allow someone to borrow cryptocurrency from a smart contract in exchange for a collateral in other cryptocurrency.
    
    The borrower may repay the loan at any time and return the collateral.
    
    Generally speaking, borrowing services allow someone to access liquidity without having to sell their cryptocurrency. 
    
    There are also loans where the borrower can borrow without a collateral. More on that below.
        
- For lenders

    Lending DeFi services allow cryptocurrency holders to lend assets to a smart contract and earn interest. 
    
    The lender can pull deposits out of smart contract at any time along with accrued interest.

Typically, cryptocurrency market participants borrow assets from smart contract in order to utilize these funds in activity where these assets can make more returns than the cost of borrowing them.

For instance, someone may borrow one cryptocurrency from one DeFi service and then lend it to another DeFi service with higher returns.

## Collateralized Loans

There is a growing segment of DeFi services which provide access to collateralized loans:

- The borrower has to put up another cryptocurrency as collateral, often significantly more than borrowed amount.

- High collateral is necessary to protect the lenders on the platform should the value of collateral assets drop sharply.

- If collateral value falls below the required, smart contract attempts to liquidate the collateral in an effort to repurchase lent assets. 

A borrower is incentivized to pay back loan and prevent their collateral from being liquidated in order not to lose part of the collateral.

## Flash Loans

There is another form of cryptocurrency borrowing which does not involve the collateral at all. 

> A flash loan allows the lender to borrow funds without any collateral, provided they pay back the loan within the same transaction. 

A single DeFi transaction may consist of multiple steps interacting with various DeFi services. 

> While most DeFi transactions are simple and involve a single action it's practically possible to create transactions that interact with any number of services, in a single transaction.

To demo this, let's assume a sample DeFi transaction that may look as below: 

1. take out a flash tokenA from a smart contract
2. convert tokenA on DEX1 to tokenB
3. convert tokenB to tokenC on DEX2
4. convert tokenC to tokenA on DEX3
5. repay borrowed tokenA to a smart contract

If any steps in transaction chain fail then preceding steps would be reverted and transaction would fail as well, like it never happened.

Practically speaking, anyone and anywhere can make use of flash loans and borrow as much as needed without a collateral, given that loan is returned within the same transaction.

> Taking advantage of flash loans as a method of arbitrage or leverage trading requires having an intimate knowledge of the market, as well how various DApps work and where favorable price fluctuations can be found.

A flash loan allows you to essentially simultaneously perform multiple financial transactions in an instant: borrowing the funds, using them to make several arbitrage trades across multiple DeFi platforms, and then paying them back to the original lender, all in one go.

## Top Services for Borrowing

There are a lot of DeFi services where someone can borrow cryptocurrency. The borrowing rate, terms and collateral requirements will vary from one service to another.

- [Compound Finance](https://compound.finance/markets)

    Perhaps the most popular decentralized service for borrowing and lending. 
    
    Compound loans typically require a collateral that may change between 0-90% of the borrowed asset. Each asset on Compound can have a different collateral requirement.
    
    Read: [Compound in Simple Terms](/guides/token_guides/compound.md)
    
- [Aave](https://app.aave.com/home)

    Aave has one feature that sets it apart from others: Flash loans allow customers or to take out loans without any collateral. It's a type of loan that is made on the condition that the loan is returned before the transaction ends. 
    
    The flash loans are provided from a liquidity pool which is financed by other users. Aave charges a 0.09% fee on flash loans.
    
    Aave provides collateralized loans as well, a 0.01% of the loan amount is collected on loan origination.
    
    Read: [Aave in Simple Terms](/guides/token_guides/aave.md)    
    
- [Oasis Exchange](https://oasis.app/)

    Oasis is a DEX developed by MakerDAO which facilitates lending and borrowing of DAI stablecoin. 
    
    Users may borrow DAI from MakerDAO smart contracts which creates new DAI (increasing total circulation) in exchange for a cryptocurrency collateral (i.e. 150% of loan value) from a borrower.
    
    When DAI tokens are returned, the collateral paid back to the borrower and returned DAI tokens are destroyed by a smart contract.
    
    Read: [MakerDAO in Simple Terms](/guides/token_guides/makerdao.md)
  
Keep in mind that despite being fully automated and human free there are significant risks when dealing with these services.

> As with other DeFi services, there is always a possibility of a hack or exploit which could drain the liquidity pool of the smart contract, causing lenders to lose their assets.

Therefore, lenders must be sure not to commit more money than they can afford to lose. 
