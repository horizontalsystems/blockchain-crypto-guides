![](https://raw.githubusercontent.com/horizontalsystems/blockchain-crypto-guides/master/fundamentals/images/05-main-l.png)

# Unstoppable Wallet

In this section we will focus on practical aspects and go through 'things to know' when using non-custodial wallet apps.

From user's perspective, basic expectations from any non-custodial wallet app should be:

1. the wallet app should generate private keys in a standard-compliant manner. This ensures that private keys are safe and are compatible with other third party wallet apps.

2. the wallet app supporting multiple cryptocurrencies should correctly manage the payment addresses for each cryptocurrency. For example, the user's address for receiving payments in Bitcoin varies from the address for receiving Ethereum.

3. the wallet app should store private keys as per documented guidelines. Both the iOS and Android wallet apps should make use of safe storage mechanisms provided by the operating system to keep the private key secure.

Apart from the above must-haves, there may be other expectations from the wallet depending on the target user. Someone looking for extensive privacy may require extra private features which are not available in most wallet apps.

> _**Disclaimer: The [Unstoppable Wallet](https://unstoppable.money) was built by [Horizontal Systems](https://horizontalsystems.io), the company behind these guides.**_

Below we will go through some important points to keep in mind when using non-custodial wallet apps. We are going to use Unstoppable wallet app to illustrate these important aspects. 

### 1. Setup / Restore 

Every non-custodial wallet starts either with the process of a wallet setup or migration of the existing wallet.

![portrait](https://raw.githubusercontent.com/horizontalsystems/blockchain-crypto-guides/master/fundamentals/images/05-02-p.png)

- The 'Create Wallet' button generates a new private key and shows it in a form of 12 words which needs to be backed up.
- The 'Restore Wallet' option restores an existing wallet that might have been created earlier in Unstoppable or some other standard compliant wallet. 

Keep in mind that non-custodial wallets will require anywhere from a few minutes to a couple of hours to complete restore process. 

### 2. Authorization Lock

It's important for any non-custodial wallet app to come with inbuilt unauthorized access measures. Both mobile and hardware wallets implement that in a form of unlock code which is required in order to access the wallet.

![portrait](https://raw.githubusercontent.com/horizontalsystems/blockchain-crypto-guides/master/fundamentals/images/05-03-p.png)

This measure is essential to keep your funds safe even when an unauthorized entity gets your wallet device.

### 3. Supported Cryptocurrencies
       
The more currencies the wallet able to handle the better. It's a matter of convenience interacting with one app rather than switching between many apps for different cryptocurrencies.

![portrait](https://raw.githubusercontent.com/horizontalsystems/blockchain-crypto-guides/master/fundamentals/images/05-04-p.png)

The wallet app also needs to have access to current cryptocurrency prices. Current prices necessary for the wallet to calculate and display your asset balance in currency you're used to (like USD). 

Moreover, current prices are necessary for sending payments. Sending someone 90$ worth of Bitcoin is not easy when you try to do the math in your head.

### 4. Coin Overviews

Each cryptocurrency is essentially a project with its own set of specifics. 

While there are a lot of different cryptocurrencies there is lack of well-researched information describing these projects in accessible manner. Many projects are fairly obscure even for the experienced newcomers with a technical background.

Unstoppable aims to provide a comprehensive overview for various cryptocurrencies in simple terms.

![portrait](https://raw.githubusercontent.com/horizontalsystems/blockchain-crypto-guides/master/fundamentals/images/05-05-p.png)

An investor-friendly wallet app should provide detailed information about each supported cryptocurrency. . 

### 5. Price Charts

Always look for the wallet that displays historical market exchange rates for each supported cryptocurrency. 

![portrait](https://raw.githubusercontent.com/horizontalsystems/blockchain-crypto-guides/master/fundamentals/images/05-06-p.png)

Historical prices provide an overview of how the price of the cryptocurrency has changed in the past.

### 6. Price Alerts

In addition to price charts it is helpful to have notifications for price changes.

A wallet like Unstoppable can notify the user when the asset price has experienced a change over 2/3/5% in 24-hour period. 

![portrait](https://raw.githubusercontent.com/horizontalsystems/blockchain-crypto-guides/master/fundamentals/images/05-07-p.png)

Moreover, the Unstoppable can send alerts when the price trend for cryptocurrency changes indicating a good time to purchase or sell any given cryptocurrency.

### 7. Privacy

When it comes to non-custodial wallets, the privacy aspect has many sides and may vary substantially between wallets.

![portrait](https://raw.githubusercontent.com/horizontalsystems/blockchain-crypto-guides/master/fundamentals/images/05-08-p.png)

Certain points should be taken into consideration when evaluating non-custodial wallet for privacy features:

- **Basic User Data**
    
    Depending on how the wallet built, it may be possible for the wallet provider to know some non-identifiable data like the user's IP address and location. When that data kept on some server there is always a risk of leak.
    
- **Balance and Transactions**

    Non-custodial wallets allow users to restore existing wallets via private keys. Generally, wallet providers keep a special server to serve these users. While this method is convenient for wallet provider it potentially means that provider may to some extent know about user's balance and transaction history.
    
    To address this, some wallets like Unstoppable support restoring directly from the blockchain network itself rather than via a third-party server. This ensures that wallet provider has no clue about balance or transactions.
    
- **Blockchain Privacy**

    Different blockchains provide varying level of privacy. For instance, when you transact in Bitcoin the level of privacy is higher than when transacting with Ethereum. 
    
    The transaction privacy aspect will be covered in detail later on. Meanwhile, keep in mind that certain non-custodial wallets may have additional features which increase the privacy on that specific blockchain.

While many wallets brand themselves as non-custodial and peer to peer they may still have privacy risks. The most private wallet is the one which knows absolutely nothing about the user.

### 8. Censorship-Resistance

Due to the young and revolutionary nature of cryptocurrencies some governments are reluctant to legalize cryptocurrencies and provide clear regulations.

Therefore, look for a wallet app which is engineered in a way where it's impossible for someone:

- censor your access to the app
- censor the app in your region
- stop you from transacting

A genuine non-custodial wallet should be built in a way where it works everywhere and always accessible for transactions.

Keep in mind, if you're using a non-custodial which was somehow blocked in your region you should be able to migrate your private key to another non-custodial wallet app.