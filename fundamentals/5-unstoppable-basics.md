![](https://raw.githubusercontent.com/horizontalsystems/blockchain-crypto-guides/master/fundamentals/images/05-main-l.png)

# Unstoppable Wallet

In this section we go through 'things to know' when using the non-custodial wallet app. 

We are going to use Unstoppable non-custodial wallet to illustrate things you should know when interacting with wallets. 

From user's perspective, basic expectations from any non-custodial wallet app should be:

1. the wallet app should generate private keys in a standard-compliant manner. This ensures that private keys are safe and are compatible with other third party wallet apps.

2. the wallet app supporting multiple cryptocurrencies should correctly manage the payment addresses for each cryptocurrency. For example, the user's address for receiving payments in Bitcoin varies from the address for receiving Ethereum.

3. the wallet app should store private keys as per documented guidelines. The iOS and Android wallet apps should keep the private in safe storage provided by the operating system.

Apart from above non-custodial wallets may vary substantially depending on the target user. For instance, a privacy focused wallets may have a lot of privacy features which are not needed for most.

> _**Disclaimer:**_
>
> _**The [Unstoppable Wallet](https://unstoppable.money) was built by [Horizontal Systems](https://horizontalsystems.io), the company behind these guides.**_

Below are essential features to look for  expect from their wallet app.

### 1. Setup / Restore 

Every non-custodial wallet starts either with the process of a wallet setup or migration of existing wallet.

![portrait](https://raw.githubusercontent.com/horizontalsystems/blockchain-crypto-guides/master/fundamentals/images/05-02-p.png)

- The 'Create Wallet' button generates a new private key in a form of 12 words which needs to be backed up.
- The 'Restore Wallet' option restores an existing wallet that might have been created earlier in Unstoppable or some other standard compliant wallet. 

**Note that, wallet restore process can take a few hours to complete.**

### 2. PIN Lock

It's important for any non-custodial wallet app to come with inbuilt unauthorized access measures. 

Both mobile and hardware wallets implement that in a form of unlock code which is required in order to access the wallet.

![portrait](https://raw.githubusercontent.com/horizontalsystems/blockchain-crypto-guides/master/fundamentals/images/05-03-p.png)

This measure is essential to keep your funds safe even when an unauthorized entity gets your wallet device.

### 3. Supported Cryptocurrencies
       
The more currencies the wallet able to store the better.

![portrait](https://raw.githubusercontent.com/horizontalsystems/blockchain-crypto-guides/master/fundamentals/images/05-04-p.png)

It's a matter of convenience interacting with one app rather than switching between many apps for different cryptocurrencies.

The wallet app also needs to have access to current cryptocurrency prices. Current prices necessary for the wallet to calculate and display your asset balance in currency you're used to (like USD). 

Moreover, current rates are needed for sending payments. Sending someone 90$ worth of Bitcoin is not easy when you try to do the math in your head.

### 4. Coin Overviews

Each cryptocurrency is essentially a project with its own set of specifics. 

While there are a lot of different cryptocurrencies there is lack of well-researched information describing these projects in accessible manner. Many projects are fairly obscure even for the experienced newcomers with a technical background.

Unstoppable aims to provide a comprehensive overview for each supported cryptocurrency in simple terms.

![portrait](https://raw.githubusercontent.com/horizontalsystems/blockchain-crypto-guides/master/fundamentals/images/05-05-p.png)

An investor-friendly wallet app should provide detailed information about each supported cryptocurrency.

- project overview
- current progress
- project community

There is a strong need for the educational content on pretty much every aspect of the cryptocurrencies and blockchain ecosystem. 

### 5. Price Charts

Always look for the wallet that displays historical market exchange rates for each supported cryptocurrency. 

![portrait](https://raw.githubusercontent.com/horizontalsystems/blockchain-crypto-guides/master/fundamentals/images/05-06-p.png)

Historical prices provide an overview of how the price of the cryptocurrency has changed in the past.

### 6. Price Alerts

In addition to price charts over extended period it's helpful to have notifications for price changes.

A wallet like Unstoppable can notify the user when the asset price has experienced a change over 2/3/5% in 24 hour period. 

![portrait](https://raw.githubusercontent.com/horizontalsystems/blockchain-crypto-guides/master/fundamentals/images/05-07-p.png)

Moreover, Unstoppable can send an alert when the price trend for the cryptocurrency changes indicating a good time to purchase or sell given cryptocurrency.

### 7. Privacy

When it comes to non-custodial wallets, the privacy aspect has many sides and may vary substantially between wallets.

![portrait](https://raw.githubusercontent.com/horizontalsystems/blockchain-crypto-guides/master/fundamentals/images/05-08-p.png)

Certain points should be taken into consideration when evaluating non-custodial wallet for privacy features:

- **Basic User Data**
    
    Depending on how the wallet built, it may be possible for the wallet provider to know some non identifiable data like the user's IP address and location. When that data kept on some server there is always a risk of leak.
    
- **Balance and Transactions**

    Non-custodial wallets allow users to restore existing wallets via private keys. Generally, wallet providers keep a special blockchain server to server those users. While this method is convenient for wallet providers it potentially means that wallet provider may to some extent know the balance and transaction history.
    
    To address the issue above, some wallets like Unstoppable support restoring from the blockchain network rather than some specific server. This ensures that wallet provider has no clue about balance or transactions.
    
- **Blockchain Privacy**

    Different blockchains provide varying level of privacy depending on hwo that blockchain is built. 
    
    For instance, when you transact in Bitcoin the level of privacy is higher than when transacting with Ethereum. This will be covered in detail later on. Meanwhile, keep in mind that certain non-custodial wallets may have features which increase the privacy on that specific blockchain.

To sum up, the most private wallet is the one which knows absolutely nothing about the user.

While many wallets brand themselves as non-custodial and peer to peer they may still have privacy risks as a result of how some features are implemented.

### 8. Censorship-Resistance

Due to the young and revolutionary nature of cryptocurrencies some governments are reluctant to legalize cryptocurrencies and provide clear regulations.

While it's yet to be seen how this going to evolve in the coming years we believe that no entity should have means to interfere with your funds.

Therefore, when looking at the aspect of censorship look for a wallet app which is engineered in a way where it's impossible for someone:

- censor your access to the app
- censor the app in your region
- stop you from transacting

A genuine non-custodial wallet should be built in a way where it works everywhere, 24/7. Always online and always working.

**Note that if you're using a non-custodial which was blocked in your region or even has means to restrict your access to the app, you can easily migrate to another wallet.**