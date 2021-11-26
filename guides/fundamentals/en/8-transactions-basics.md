![](../images/08-main-l.png)

# Transactions Explained

Time to learn the ins and outs of cryptocurrency transactions.

While the process of sending and receiving payments is similar for all cryptocurrencies there are some aspects which tend to change from one cryptocurrency to another. 

In this section we'll go over the essentials to give you a clear understanding of how the transactions work for almost all cryptocurrencies.

## Send & Receive Crypto

The process of Sending and Receiving crypto is pretty much the same on all wallets.

- **To Send Crypto**
    
    Within your wallet app, look for the option to "send" or the app's equivalent. If the wallet app supports multiple currencies make sure to select the correct cryptocurrency.
    
    Enter the amount, the address of the recipient, the transaction fee (more on that below) and click on the send button.
    
- **To Receive Crypto**

    Open the wallet app and look for the option to "receive" or the app's equivalent. As mentioned earlier make sure you're copying the address for the right coin.
    
    The wallet app will provide a distinct receive address for some cryptocurrencies, and the same address for others. For instance, all Ethereum-based cryptocurrencies will have the same receive address within one wallet app.
    
    Send that address to the sender and wait for the cryptocurrency to appear in your wallet.

## Transaction Phases

Cryptocurrency transactions are not instant. For some cryptocurrencies it takes a second while for other it may span a few minutes or even hours.

When transacting using а non-custodial wallet transactions will go directly through a blockchain in the following order:

1. **Transaction Is Pending**

    After the transaction sent from a wallet, it reaches the underlying blockchain network nearly instantly. Bitcoin transactions sent to Bitcoin network, Ether transactions to Ethereum network etc.
    
    At this stage, both sender and recipient can already monitor the state of transaction in their wallet apps or on public blockchain explorer i.e. [Blockchair.com](https://blockchair.com).

2. **Transaction Gets Confirmed**

    Given that the transaction is valid, all nodes on that blockchain will race to include it to the blockchain. The duration of that steps vary from one blockchain to another. 
    
    For Bitcoin it can generally take up to 10 minutes, for Ethereum about 2-3 minutes etc. This step may take considerably longer if the blockchain is busy with a lot of pending transactions.
    
    A transaction considered complete after it has been added to the blockchain.

3. **Transaction Is Final**

    Once the transaction has been added to the blockchain it can be considered final. That said, for some blockchains and Bitcoin in particular it's recommended to wait until a certain number of new blocks added. 
    
    For large sums, it's generally being recommended to wait for up to 6 blocks to pass before the transaction can be considered theoretically irreversible. For the most payments, 1-2 confirmations should be fine.

## Transaction Fees

When sending cryptocurrencies like Bitcoin or Ethereum the sender expected to pay a transaction fee. That fee goes as compensation to one of the blockchain nodes which will be the first to add the transaction to a blockchain.

Generally, blockchains are free to participate however require its native cryptocurrency to do anything. Both on Ethereum and Bitcoin, sender also pays a service fee to the blockchain network with every transaction.

> **You don't need to understand the details here, just keep in mind that thousands of nodes powering the blockchain will receive the transaction within a few seconds after it's sent.** 
>
> **The node that adds it first to the blockchain will get the associated fee as a reward. Every time you send a transaction you will be paying fees to a different node. Consider it as a service fee for using the network.**

Depending on the cryptocurrency you're sending the transaction fees may vary. For some blockchains the fee may be as low as a fraction of a cent, for other like Bitcoin it can easily exceed 1$.

The blockchains powering cryptocurrencies like Bitcoin and Ethereum currently limited to a few million transactions per day. The transaction fee used as an instrument to prioritize transactions by giving it a higher fee.  

If the fee is far below the network average your transaction may remain pending for hours, if it's well above the average expect it to be added to the blockchain usually within a few minutes.

> **If transaction remains pending for a few days due to a low fee it may be rejected, as if it was never sent.**

Some wallets out there including Unstoppable recommend the optimal transaction fee amount for the moment taking into account the current state of activity on the network.

When sending large sums or time critical payments always try to provide a fee amount that is well above average. That would ensure that your transaction reaches the recipient without delay.

## Cancelling Transaction

Sometimes you may end up in a situation where a transaction needs to be cancelled. In some cases, it's possible to cancel or modify transaction while it's still in pending state. 

Both Bitcoin and Ethereum transactions can be modified while in pending state but in order to be able to do that the wallet app should provide a way to do that.

That said, once the transaction added to the blockchain there is usually no practical way to cancel it. So, once transactions added to the blockchain they are final.

## Transaction Privacy

Lastly, there are some vital considerations to keep in mind when it comes to transactions and privacy.

Transactions on most blockchains stored openly. Anyone can see when the transaction took place, the amounts involved, and the sender receiver addresses. While a third party can see the addresses involved there is no connection to a real world identity.

![](../images/08-02-l.png)

While some privacy focused cryptocurrencies (i.e. Monero or Zcash) do not reveal any information about the transaction, for the most cryptocurrencies incl. Bitcoin and Ethereum transaction data is public.

Below let's look at privacy risks when transacting using Bitcoin and Ethereum.

- **Bitcoin Privacy**

    The Bitcoin wallets built in a way where user can potentially generate millions of addresses that can be used to receive payments within one wallet app. Each payment address can be used once, many times or not used at all. It's up to the user. 
    
    A good wallet will always generate a new receive address after it receives a payment to the latest address. This is done to discourage a user to use the same 'receive' address over and over.
    
    If user uses the same address then anyone can take a single transaction of the user and from that locate other incoming and outgoing transactions belonging to the user. From that it's potentially easy to derive entire balance and transaction history!
    
    So, try to use new receive address for each party you're transacting with.

- **Ethereum Privacy**

    When it comes to Ethereum wallets the user's address to receive Ether payments will always be the same. Although it may change in the future, nearly all Ethereum wallets work with the single address nowadays. There are some technical reasons for that.
    
    The Ethereum blockchain is fully transparent allowing anyone to see all incoming and outgoing transactions for the given payment address.
    
    So, when you send or receive Ethereum keep in mind that the party you're transacting with can potentially look up your balance of Ether and other Ethereum based tokens just by knowing your address.
    
    Therefore, it's advised to use separate wallets for transacting with people and for the asset accumulation. The wallet used for transactions should not hold a lot of funds on it.
    
To sum up, in its current state, Bitcoin transactions provide users with more privacy than Ethereum transactions. 

The only thing that adds some minimal privacy element into the mix is the fact there is no way to check who that address belongs to.
