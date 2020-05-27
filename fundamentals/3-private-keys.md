# Private Keys Explained

As we have explained in the previous section, non-custodial cryptocurrency wallets provide safe storage of the cryptographic keys that have control over the coins on the wallet's balance.

This cryptographic key is usually referred to as private key. So, when you hear a term private key keep in mind that it's the key with unconditional control over the funds.

> The private key is never meant to be shared. You should NEVER share it with anyone. There is no valid reason for someone to ask for your private key. 
>
> Quite often scammers impersonate support teams and trick users looking for help into sharing private keys and then steal funds on the balance. Keep that in mind.

Any non-custodial wallet should provide means for the user to access and view that key from within the wallet app. If that option isn't there then there is a good chance the wallet is a custodial one.

By now you should have an idea about what wallets and private keys are. 

> The wallet is a device that essentially stores your private key. This private key is what gives you control over certain amount of coins which cumulatively define your balance. That private key must never be revealed or published.

It is clear, therefore, that safely storing your private key is extremely important. Failure to do so could result in a loss of your assets. If you lose the key or unknowingly expose it to someone, they can get control of your crypto. That's the only thing you need to understand. The rest is secondary.

Now, we are going to be looking a bit deeper into security to give you a better understanding of private keys, and the wallet security in general.

## Backing Up Private Key

To make it easier for the average person to backup the private key, blockchain engineers came up with a way to convert that hard to read private key to plain set of 12 or 24 regular words. So, most of the non-custodial wallets will display the private key in a human-readable form.

Most non-custodial wallets prompt users store a backup of the private keys somewhere safely offline. The user will need the private key to restore access to wallet funds should the device with the wallet app become inaccessible. This can happen if user's phone (with a mobile wallet on it) gets stolen or simply stops working. The private key will be required to regain access to the wallet after that. If the wallet owner doesn't have it then there is no way to recover access to the wallet. 

Therefore, always backup the private key and make sure there are no typos in your backup. Other than actual words, the ordering is just as important. The 12/24 words should be backed up in the correct order. A non-custodial wallet may understand if you make a typo in one of the words and show an appropriate warning. However, if the words positioned incorrectly a non-custodial wallet will still restore some wallet out of them, it just won't be yours. So, the correct order is just as important.

## Setting Up Private Key

When you first create a non-custodial wallet, the code powering the wallet app randomly generates a secure Private Key.

For the private key to be truly secure it's important for a wallet app to generate a private key which is truly random. If it's not random it's potentially not as safe.

That's one of the reasons why non-custodial wallets keep the code open. If the code is open then third-party engineers can analyze it and make sure wallet does the private key generation correctly.
   
There are well documented manuals for engineers describing how to do that on a platform on which the wallet is built for.

The websites like WalletScrutiny.com (linked below) exist to ensure that wallet's published on Google Play and App Store infact use the same code that's publicly shared with the community.

* https://walletscrutiny.com/posts/io.horizontalsystems.bankwallet/

## One Key, Many Coins

So, now you know what a private key is and how it's generated. 

Another essential aspect you should understand is that a single private key can be used to control balances for multiple cryptocurrencies. 

For instance, when you set up a new wallet on a wallet like Unstoppable over time you may endup with dozens of balances spanning wide range of supported currencies. Restoring a single private key will essentially restore access to all balances as well as history of transactions for each coin where you had some activity.

When creating the wallet on Unstoppable user gets a single private key for 5 cryptocurrencies:

- Bitcoin
- Dash
- Bitcoin Cash
- Litecoin
- Ethereum

So never reveal your private keys even if the balance on some of its coins is empty. By doing that you unintentionally expose the balance of some other cryptocurrency, as well as your entire past history of transactions.

## How Private Key Knows Balance

So, you might be wondering how the wallet app can take a single private key and from that restore your balances for various currencies as well as your past transactions for each.

As was mentioned above there a certain commonly accepted standards that were designed by engineers throughout the years. Any wallet app that follows these standards setups wallets per these standards to ensure wallets controlling balances on multiple cryptocurrencies can easily be migrated to another wallet app.

In simple terms, using the private key the wallet app can derive all addresses the swallet owner can use to receive funds, for any given coin. Once the app knows the addresses for say Bitcoin, it connects to the Bitcoin blockchain and looks for transactions involving those addresses. As a result of that process the wallet app can display the balance and past transactions.

It should further be noted that best non-custodial wallets are able to restore balance/transactions directly from the blockchain without relying on a intermediary server. 

This ensures that wallet app can connect to one of thousands of servers powering any given blockchain and download your history from it rather than requesting it from a third party server which at some point can become unreachable. 

## Moving Between Wallets

Moreover, good non-custodial wallets enable private key migration between wallets. In other words, a private key created on one non-custodial wallet can be used (restored) in another non-custodial wallet. This means that the user is not restricted to a single wallet provider and may easily migrate between non-custodial wallets built by different parties. 

The feature means that even if your phone breaks, or the wallet app stops working, your funds are still safe; you will always be able to restore access to your crypto funds using the private key the wallet generated. 

There are no time frames---the same key would work years later.

Not all non-custodial wallets provide an Import (or Restore) wallet feature. When choosing a wallet you should for ones that migration/import/export of private keys between different wallets.

A good breed of non-custodial wallets (including Unstoppable Wallet) follow the commonly accepted standards when dealing with private keys. The private keys are set up in a way where a person can easily migrate to another wallet and vice versa.

Note that when migrating your private key from one wallet to another you need the destination wallet to support all cryptocurrencies that private key controls. If your private key has some balance on Bitcoin and Ethereum but the destination wallet supports only Bitcoin then your Ethereum balance won't be visible. It will still be yours and accessible from some other wallet.