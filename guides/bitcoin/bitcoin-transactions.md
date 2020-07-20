
## Bitcoin Transaction Illustrated

Let's assume Bart wants to send Lisa $100 worth of Bitcoin. Step below show how the entire process of that transaction works.

Bart and Lisa have wallets that support Bitcoin storage. They both might be using wallets made by different parties. 

To send Lisa some Bitcoin, Bart needs two things:

To have more than $100 worth of Bitcoin in his wallet balance
Lisa’s payment address

Each Bitcoin consists of 100,000,000 units known as Satoshi. When transacting with Bitcoin, people don’t send full units of Bitcoin, but more often some fractions of it.


STEP 1: Lisa Sends Her Payment Address to Bart

Lisa opens her wallet app and clicks on the Receive button for Bitcoin. Here she is given her payment address which can be copied and given to Bart. Some wallets let users share this address to other apps like WhatsApp or Messenger.




This address is a combination of numbers and letters. Lisa’s wallet can automatically generate an unlimited number of public addresses to which Lisa can receive Bitcoins. 

Lisa’s wallet will automatically generate a new payment address every time she receives a payment to the last generated address. This is to increase Lisa’s privacy on the blockchain. Lisa can receive an unlimited number of payments to each of her addresses, but a unique address for each transaction is advisable.


Each address is accompanied by a corresponding private key. That private key is stored in Lisa’s wallet and will be needed when Lisa decides to spend the Bitcoin she received on that address. Only Lisa (the owner of that private key) can subsequently spend Bitcoins received to a corresponding public address. Lisa’s wallet stores these private keys and uses them every time she sends someone Bitcoin.



STEP 2: Bart Makes Payment


Bart opens his wallet app and taps on the Send button to initiate a payment. Bart inputs Lisa’s payment address along with the Bitcoin amount he wants to send.

Bart's wallet automatically retrieves the latest market rate for Bitcoin. Bart enters how much he wishes to spend, either in local currency or in Bitcoin.

Finally, Bart is also expected to indicate the network fee he is willing to pay for that transaction. Good wallet apps will recommend the optimal fee based on the current load of the Bitcoin network.


Under the hood, the wallet app Bart is using will create the transaction following the requirements of the Bitcoin network. 


To create a valid transaction, Bart’s wallet will need all payment addresses where Bart has previously received Bitcoin. There should be enough balance on Bart’s wallet to account for the amount Bart wants to send. The wallet will also need to have private keys that correspond to payment addresses where Bart has previously received Bitcoin. 


Once all fields have been completed, the wallet app presents the transaction summary to Bart for approval before proceeding with the payment.

[SCREENSHOT]

Bart confirms the transaction and it leaves his device and enters the Bitcoin network.



STEP 3: Transaction Enters Bitcoin Network 

After Bart sends the transaction, it reaches the Bitcoin network nearly instantly (given that the device where the wallet operates is connected to the internet). 

At this point, Lisa and Bart can already monitor the state of transaction in their wallet app (if it supports it) or public Bitcoin block explorers. Bart’s wallet sees it as outgoing and Lisa’s as incoming.

[SCREENSHOT] 

At this point all Bitcoin network participants (aka nodes or miners) have Bart's transaction in the pool of pending transactions and checks it for validity. Every single Bitcoin network participant does this programmatic verification independently, without knowing anything about Bart.

If there is something wrong with Bart’s transaction, such as Bart not having enough funds, the transaction will be rejected by every network participant independently. 



STEP 4: Transaction Is Validated

Given that Bart’s transaction is valid, all Bitcoin network nodes and miners race to include it and thousands of other pending transactions in the permanent transaction record (known as Bitcoin blockchain). Transactions are added to blockchain as blocks holding thousands of transactions from that time period. This happens roughly once every 10 minutes.

A transaction is considered complete after it has been added to the blockchain. Every single network participant races to complete it. The first to finish will get the associated transaction fees from all transactions in the current block.

The way this competition takes place is via a mathematical problem that all network participants (which are essentially computers) need to solve. The first to solve is the winner and gets the ability to be the one to add the current block to blockchain. All this happens programmatically, without means to cheat.


Once the block containing Bart’s transaction has been added to the permanent record, his transaction cannot be modified. Although, for larger payments it’s advisable to wait up to 6 blocks before a transaction can be considered irreversible.




STEP 5: Transaction Is Final


While Lisa’s wallet can potentially see the transaction within seconds after Bart sends it, a transaction is considered pending before it’s moved to permanent record. At this point, most wallet apps will not let Lisa create transactions using those funds. 

In about 10 minutes, the transaction moves to the blockchain and Lisa’s wallet will display the amount in the available balance. 

For some wallets, like Unstoppable, the threshold for this is 30 minutes. In other words, some wallets consider the transaction final after 3-6 new blocks have been added to the blockchain.

