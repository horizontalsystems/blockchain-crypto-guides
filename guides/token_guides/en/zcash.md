# Zcash In Simple Terms

Zcash is a Bitcoin-like cryptocurrency project with a heavy focus on privacy and built using some of the most cutting-edge cryptography in the industry. 

This guide aims to explain what makes Zcash unique, how it works and how to transact with it in simple terms and in an easy-to-digest manner.

In essence, when compared to Bitcoin or Ethereum blockchains Zcash provides enhanced privacy and allows for fully confidential transactions.

> Just like on Bitcoin, Zcash transactions are publicly visible on a public blockchain. 
>
> However, unlike Bitcoin, certain Zcash transactions (aka shielded transactions) don't reveal any information about sender, receiver and amount transferred. 

To sum up, Zcash cryptocurrency gives you the option of confidential transactions and financial privacy through shielded addresses.

At the same time, selective payment disclosure feature within Zcash protocol which allows a user to share some transaction details, for purposes of compliance or audit purposes.

For instance, this can be used to prove a payment was sent to someone without exposing other information about the sender i.e. past transactions.






## 1. Zcash Origins

Zcash grew out of an experimental proposal from seven scientists to improve privacy protections in Bitcoin. 

Zcash launched on October 28, 2016 by Electric Coin Co. Zcash is the first practical application of zk-SNARKs, a specific type of zero-knowledge proof. These mathematical proofs require a special setup before the launch of the protocol, in Zcash, this is known as the [Trusted Setup](https://z.cash/technology/paramgen/). (Additional sources: [[Spectrum article](https://spectrum.ieee.org/tech-talk/computing/networks/the-crazy-security-behind-the-birth-of-zcash)] [[Radiolab episode](https://www.wnycstudios.org/podcasts/radiolab/articles/ceremony)])

Zcash is known for its regular network upgrades. The first Zcash software release and the initial phase of the blockchain was called ‘Sprout’ to emphasize that it is a young, budding blockchain with great potential to grow. Each upgrade as a plant-themed code name: Sprout, Overwinter, Sapling, Blossom, Heartwood and Canopy.

## 2. Zcash Cryptocurrency

Zcash has a fixed supply of 21 million Zcash currency units (ZEC). This means Zcash has the same monetary base as Bitcoin's. Every 75 seconds, a new block is mined to the Zcash blockchain and a block reward reward is issued. As of November 18, 2020, the block reward is 3.125 ZEC. Like Bitcoin, the amount of the block reward cuts in half about every four years until all 21 million ZEC are in circulation.

The [unit of account](https://en.wikipedia.org/wiki/Unit_of_account) of the Zcash system is a ZEC. The ticker symbol used to represent Zcash is also “ZEC”. As a nod to Bitcoin’s creator, a zatoshi is the smallest amount within Zcash representing 0.00000001 ZEC, one hundred millionth of a ZEC.

## 3. Difference between Bitcoin and Zcash

Cryptocurrencies like Bitcoin are a next-generation, global and open peer-to-peer system. And like the Web, they are built on top of the infrastructure made available by the Internet. A public blockchain like Bitcoin requires that computers around the world can ensure all transactions are valid. But, in order to ensure that the sender has adequate funds, all these computers must be able to see information about the sender, including past transactions and details of the current transaction. That means that anyone that knows a Bitcoin public key can see the associated balance, counterparties, the amount, date and time of all transactions, and the frequency of transactions between.

This changed in 2016 with the birth of Zcash and its adoption of a cryptographic breakthrough called zero knowledge proofs, that the Electric Coin Company team layered on top of the Bitcoin protocol. The Zcash implementation of zero-knowledge proofs, called zk-SNARKs, provide a means for computers on the network to verify that the transaction is valid, without giving them any information about the transaction, including the sender, receiver or transaction amount.

## 4. Zcash Address Types

Zcash has two different types of addresses: transparent and shielded.

Transparent Zcash addresses start with "t" behave similarly to Bitcoin, exposing the sender, receiver and transaction amount on the blockchain. Shielded addresses start with "z" and provide enhanced confidentiality through [zero-knowledge proofs](https://z.cash/support/faq/#what-is-a-zero-knowledge-proof). The two addresses are completely interoperable - which means you can send and receive funds between different addresses types.

Between the two Zcash address types, there are four Zcash transaction types: fully shielded (z-to-z), partially shielded (z-to-t and t-to-z), and fully transparent (t-to-t). These different transactions provide varying layers of privacy.

## 5. Zcash Privacy and Shielded Adoption

There are several approaches to protecting financial privacy. Zcash’s use of Groth 16 proofs hides both the transaction amount and the transaction graph (the latter by proving that the note being spent exists in the global note commitment tree).

Other projects use ring signatures that obscure the sender and recipient and Bulletproofs to hide the transaction amount but not the transaction graph. Other approaches rely on application-layer solutions such as coin-mixers. Advanced forensics and analytics companies can reverse engineer these approaches and therefore trace these types of transactions. With a fully-shielded Zcash transaction, the sender, recipient and amount are fully encrypted and completely private. A fully-shielded Zcash transaction cannot be traced unless the sender or recipient leaks information about the transaction.

Please note that fully transparent Zcash transactions are similar to BTC in that the sender, receiver and amount are visible on a public blockchain.

## 6. Zcash Ecosystem

Zcash has a diverse ecosystem of contributors and community developers, including world-class engineers and cryptographers, deep-thinking investors, cypherpunks and freedom fighters.

The primary organizations in the Zcash ecosystem include:

Electric Coin Company - is the team that created and develops Zcash. Since 2016, ECC has been at the forefront of groundbreaking research and development — with implications beyond the cryptocurrency world. Zcash was the first project to successfully implement zero-knowledge proofs (zkps), a monumental milestone in the world of privacy and security. ECC supports the ongoing development of Zcash through R&D, engineering, business development and regulatory engagement. Electric Coin Co. is wholly owned by Bootstrap Project (Bootstrap), a US-based nonprofit.

Zcash Foundation - is a non-profit entity for maintaining and improving the Zcash protocol in the interests of all users, present and future. Originally, Zcash Foundation was funded through a donation of several Zcash stakeholders. This donation came from the Founders’ Reward. After the Canopy activation, Zcash Foundation will receive its funding from the Community Development Fund.

Major Grant Review Committee (MGRC) - is the latest addition to the Zcash ecosystem that was initiated as part of the Canopy network upgrade. Major Grants are meant for independent, third-party developers in an effort to further decentralize Zcash-related efforts.

## 7. How is Zcash funded?

Zcash is self-funded with strong community governance that aligns the incentives of key stakeholders. Zcash’s governance structure is designed to be inclusive and capture-resistant.

From October 28, 2016 through November 18, 2020, 10% of the Zcash monetary base went to a fund called the “Founders’ Reward.” The Founders’ Reward was distributed incrementally over the first four years of mining and established continued incentives and resources for the founders to improve the value of the coin.

As of the [Canopy](https://z.cash/upgrade/canopy/) activation, 20% of the Zcash block reward is distributed to a Community Development Fund. Miners will continue to receive 80% of the mining reward. The remaining 20% will be divided between the new Major Grants Fund (8%), Electric Coin Co (7%), the Zcash Foundation (5%). This development fund, largely earmarked for new participants to improve, build upon, extend and support Zcash. At the same time, the “Founders Reward” will cease.

## 8. Zcash Challenges

Every rose has its thorns. Zcash is no exception. While the Zcash network has grown tremendously, there are some issues which can inhibit its future success.

- Trusted Set up - zero-knowledge proofs currently rely on a trusted setup, which is used to form the initial parameters that allow users to construct and verify private transactions. It is called a trusted setup because one must “trust” the people who create the parameters to destroy them rather than keep them for future illicit gains. Despite detailed [documentation](https://z.cash/technology/paramgen/) about this process to ensure the highest security standards are met, it creates a non-zero risk to the network. Fortunately, the Zcash research team has been working on [Halo](https://electriccoin.co/blog/explaining-halo-2/), which has the potential to remove the need for trusted set up, while improving scalability performance targets.
- Volatility - the volatility of Zcash and digitals assets broadly present a challenge to broader adoption. In order for Zcash to achieve its goal of economic empowerment and usage as a medium of exchange, we realize that stability must be a key consideration. The current volatility is typical in early stage technology ventures. It is expected that this will be mitigated as the network matures and more infrastructure is launched to support network liquidity.
- Shielded adoption - the percentage of shielded transactions on the Zcash network remains low compared to total transparent usage. Zcash has made significant progress toward the growth of shielded adoption including major exchange and wallet support. The launch on Unstoppable Wallet will further support this effort.

## Conclusion...
