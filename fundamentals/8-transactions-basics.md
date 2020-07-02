![](https://raw.githubusercontent.com/horizontalsystems/blockchain-crypto-guides/master/fundamentals/images/08-main-l.png)

# Transactions Explained

Time to learn the ins and outs of cryptocurrency transactions.

While the process of sending and receiving payments is similar for all cryptocurrencies there are some aspects which tend to change from one cryptocurrency to another. 

In this section we'll go over the essentials to give you a clear understanding of how the transactions work on almost all blockchains.

## Send & Receive

The process of Sending and Receiving crypto is pretty much the same on all wallets.

- To Send Crypto
    
    Within your wallet app, look for the option to "send" or the app's equivalent. If the wallet app supports multiple currencies make sure to select the correct cryptocurrency.
    
    Enter the amount, the address of the recipient, the transaction fee (more on that below) and click on the send button.
    
- To Receive Crypto

    Open the wallet app and look for the option to "receive" or the app's equivalent. As mentioned earlier if the app supports multiple cryptocurrencies make sure you're copying the address for the right coin.
    
    The wallet app will provide a distinct receive address for some cryptocurrencies, and the same address for others. For instance, all Ethereum based cryptocurrencies will have the same receive address within one wallet app.

## Transaction Phases

Cryptocurrency transactions are not instant. For some cryptocurrencies it takes a second while for other it may easily span a few hours.

> -**Note that this mainly applies to non-custodial wallets as those wallets communicate with the blockchain directly.**_ 
>
> _**The custodial wallets will usually process transactions instantly as you're not really dealing with the blockchain directly.**_

![](https://raw.githubusercontent.com/horizontalsystems/blockchain-crypto-guides/master/fundamentals/images/08-02-l.png)

When transacting using non-custodial wallet transactions will go through following phases:

1. **Transaction Is Pending**

    After the transaction is sent from a wallet, it reaches the underlying blockchain network nearly instantly. Bitcoin transactions sent to Bitcoin network, Ether transactions to Ethereum blockchain etc.
    
    At this stage, both sender and recipient can already monitor the state of transaction in their wallet apps or public blockchain explorer i.e. [blockchair.com](https://blockchair.com).

2. **Transaction Gets Confirmed**

    Given that the transaction is valid, all nodes on that blockchain race to include it to the blockchain. Transactions are added in batches, the duration of that steps vary from one blockchain to another. 
    
    For Bitcoin it can roughly take 10 minutes, for Ethereum about 2-3 minutes etc. A transaction is considered complete after it has been added to the blockchain.

3. **Transaction Is Final**

    Once the transaction has been added to the blockchain it can be considered final. That said, for some blockchains it's recommended to wait until a certain number of new blocks added. 
    
    For large sums, it's generally recommended to wait for up to 6 blocks to pass before the transaction can be considered irreversible. For the most payments, 1-2 confirmations should be fine.

## Transaction Fees

When sending cryptocurrencies the sender is expected to pay a transaction fee. That fee goes as compensation to one of the blockchain nodes which adds your transaction to the blockchain.

> _**You don't need to understand the details here, just keep in mind that thousands of nodes powering the blockchain will receive the transaction shortly after it's sent but only one of them will ultimately add it to a blockchain. 
>
> That one node will get the fee as a reward. Every time you send a transaction you will be paying fees to a different node. Consider it as a service fee paid to the network.**_

Depending on the cryptocurrency you're sending the transaction fees may vary. For some blockchains the fee may be as low as a fraction of a cent, for other like Bitcoin it can easily exceed 1$.

Blockchains like Bitcoin and Ethereum are currently limited to a few million transactions per day. 

The fee amount depends on how busy the underlying blockchain is. If on a given day you have many people sending payments the network may become overloaded with a long queue of pending transactions. 

In such cases, the transaction fee is what gives one transaction a priority against other currently pending transaction. If the fee is far below the network average your transaction may remain pending in queue for hours, if it's well above the average expect it to be added to the blockchain in the next batch.

> _**Keep in mind, if transaction remains pending for a few days due to a low fee it may be rejected (as it was never sent).
>
> If you have a pending transaction that taking a while to confirm in most cases it will ultimately be accepted if you wait long enough.**_

Some wallets out there would recommend the optimal transaction fee amount taking into account the current state of activity on the network.

When sending large sums or time critical payments always try to provide a fee amount well above average.

## Cancelling Transaction

Sometimes you may end up in a situation where a transaction needs to be cancelled. In some cases, it's possible to cancel or modify transaction while it's still in pending state. 

Both Bitcoin and Ethereum transactions can be modified while in pending state but in order to be able to do that the wallet app should provide a way to do that.

That said, once the transaction added to the blockchain there is usually no practical way to cancel it. So, transactions are final.

## Transaction Privacy

Lastly, there are some vital considerations to keep in mind when it comes to transactions and privacy.

Transactions on most blockchains are stored openly. Anyone can see when the transaction was made, amount, and the sender receiver addresses. While a third party can see the addresses involved there is no connection to a real world identity.

![](https://raw.githubusercontent.com/horizontalsystems/blockchain-crypto-guides/master/fundamentals/images/08-03-l.png)

While some privacy focused cryptocurrencies (i.e. Monero) do not reveal any information about the transaction, for the most cryptocurrencies incl. Bitcoin and Ethereum transaction data is stored openly.

Below we are going to specifically look at privacy risks when transacting using Bitcoin and Ethereum.

- **Bitcoin Privacy**

    The Bitcoin wallets built in a way where user can potentially generate millions of addresses which user can use to receive payments within one wallet app. Each payment address can be used once, many times or not used at all. It's up to the user. 
    
    A good wallet will always generate a new receive address after it receives a payment to the latest address. This is done to discourage user to use the same address to receive payments. 
    
    If user uses the same address all the time it basically means that anyone can take a single transaction of the user and from the address used there locate all other incoming and outgoing transactions belonging to the user. From that you get balance and transaction history!
    
    So, try to use new receive address for each party you're transacting with.

- **Ethereum Privacy**

    As mentioned above, in case of Bitcoin the address for receiving payments can change with each transaction.

    When it comes to Ethereum wallets your address to receive Ether payments will always be the same. Although it may change in the future, nearly all Ethereum wallets work with the single address nowadays. There are some technical reasons for that.
    
    > The key takeaway point here is that Ethereum blockchain is fully transparent allowing anyone to see all incoming and outgoing transactions for the given payment address. 
    
    So, when you transact with someone on Ethereum keep in mind that this person can potentially lookup your balance of Ether and other Ethereum based tokens just by knowing your address.
    
    Therefore, it's advised to use separate wallets for transacting with people and for asset accumulation. 
    
    The wallet used for transactions should now hold a lot of funds on it in order not to expose you.
    
As a result, in its current state, Bitcoin transactions in wallets provide users with more privacy than Ethereum transactions in that same wallet. 

The only thing that adds some minimal privacy element into the mix is the fact there is no way to check who that address belongs to.