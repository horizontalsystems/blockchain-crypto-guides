![](../images/08-main-l.png)

# Transactions expliquées

Il est temps d'apprendre les rouages des transactions dans le domaine de la cryptomonnaie.

Bien que le processus d'envoi et de réception des paiements soit similaire pour toutes les cryptomonnaies, certains aspects ont tendance à changer d'une cryptomonnaie à l'autre.

Dans cette rubrique, nous allons passer en revue les éléments essentiels pour vous permettre de bien comprendre le fonctionnement des transactions pour presque toutes les cryptomonnaies.

## Envoyer & recevoir

Le processus d'envoi et de réception de crypto est à peu près le même pour tous les portefeuilles.

- **Pour envoyer la Crypto**
    
    Dans votre application de portefeuille, recherchez l'option "envoyer" ou équivalent. Si l'application de portefeuille prend en charge plusieurs devises, assurez-vous de sélectionner la cryptomonnaie correcte.
    
    Saisissez le montant, l'adresse du bénéficiaire, les frais de transaction (plus d'informations ci-dessous) et cliquez sur le bouton d'envoi.
    
- **Pour recevoir la Crypto**

    Ouvrez l'application de portefeuille et cherchez l'option "recevoir" ou équivalent. Comme mentionné précédemment, assurez-vous que vous copiez l'adresse correspondant à la bonne pièce.
    
    L'application de portefeuille fournira une adresse de réception distincte pour certaines cryptomonnaies, et la même adresse pour d'autres. Par exemple, toutes les cryptomonnaies basées sur Ethereum auront la même adresse de réception dans une application de portefeuille.
    
    Envoyez cette adresse à l'expéditeur et attendez que la cryptomonnaie apparaisse dans votre portefeuille.

## Phases de transaction

Les transactions en cryptomonnaie ne sont pas instantanées. Pour certaines cryptomonnaies, cela prend une seconde, alors que pour d'autres, cela peut durer quelques minutes, voire des heures.

Lorsque vous utilisez le portefeuille non-privatif de liberté, les transactions passent directement par une blockchain dans cet ordre :

1. **La transaction est en cours**

    Une fois la transaction envoyée depuis un portefeuille, elle atteint presque instantanément le réseau blockchain sous-jacent.. Transactions Bitcoin envoyées au réseau Bitcoin, transactions Ether vers le réseau Ethereum, etc.    

    À ce stade, l'expéditeur et le bénéficiaire peuvent déjà surveiller l'état de la transaction dans leurs applications de portefeuille ou sur le navigateur de blockchain public, c'est-à-dire [blockchair.com](https://blockchair.com).

2. **La transaction est confirmée**

    Étant donné que la transaction est valide, tous les nœuds de cette blockchain vont se précipiter pour l'inclure dans la blockchain. La durée de ces étapes varie d'une blockchain à l'autre. 
    
    Pour Bitcoin, cela peut généralement prendre jusqu'à 10 minutes, pour Ethereum environ 2-3 minutes, etc.    

    Cette étape peut prendre beaucoup plus de temps si la blockchain est saturée de transactions en attente. Une opération est considérée comme terminée lorsqu'elle a été ajoutée à la blockchain.

3. **La transaction est définitive**

    Une fois que la transaction a été ajoutée à la blockchain, elle peut être considérée comme définitive. Cela dit, pour certaines blockchains et Bitcoin en particulier, il est recommandé d'attendre qu'un certain nombre de nouveaux blocs soient ajoutés.     

    Pour les sommes importantes, il est généralement recommandé d'attendre jusqu'à 6 blocs avant que la transaction puisse être considérée comme théoriquement irréversible. Pour la plupart des paiements, 1 à 2 confirmations devrait convenir.

## Frais de transaction

Lors de l'envoi de cryptomonnaies comme Bitcoin ou Ethereum, l'expéditeur s'attend à payer des frais de transaction. Ces frais sont versés en compensation à l'un des nœuds de la blockchain qui sera le premier à ajouter la transaction à une blockchain.

En général, les blockchains sont libres de participer, mais ont besoin de leur cryptomonnaie native pour faire quoi que ce soit. Tant sur Ethereum que sur Bitcoin, l'expéditeur paie également des frais de service au réseau blockchain pour chaque transaction.

> **Vous n'avez pas besoin de comprendre les détails à ce stade, mais rappelez-vous simplement que les milliers de nœuds qui alimentent la blockchain recevront la transaction quelques secondes après son envoi.** 
>
> **Le nœud qui l'ajoutera en premier à la blockchain recevra les frais associés en récompense. Chaque fois que vous envoyez une transaction, vous payez des frais à un nœud différent. Considérez cela comme un frais de service pour l'utilisation du réseau.**

En fonction de la cryptomonnaie que vous envoyez, les frais de transaction pourront varier. Pour certaines blockchains, les frais peuvent être aussi bas qu'une fraction de cent, pour d'autres comme Bitcoin, ils peuvent facilement dépasser 1$. 

Les blockchains qui alimentent les cryptomonnaies comme Bitcoin et Ethereum sont actuellement limitées à quelques millions de transactions par jour. Les frais de transaction sont utilisés comme un instrument pour permettre de donner la priorité à certaines transactions en leur attribuant des frais plus élevés.

Si les frais sont bien inférieurs à la moyenne du réseau, votre transaction peut rester en suspens pendant des heures, et si elle est bien au-dessus de la moyenne, attendez-vous à ce qu'elle soit ajoutée à la blockchain en quelques minutes.

> **Si une transaction reste en suspens pendant quelques jours en raison de frais peu élevés, elle peut être rejetée, comme si elle n'avait jamais été envoyée.**
>
> **Si vous avez une transaction en attente qui prend du temps à confirmer, dans la plupart des cas, elle sera finalement acceptée si vous attendez suffisamment longtemps.**

Certains portefeuilles recommandent le montant optimal des frais de transaction en tenant compte de l'état réel de l'activité sur le réseau.

Lorsque vous envoyez des sommes importantes ou des paiements à échéance, essayez toujours de proposer un montant de frais qui soit bien supérieur à la moyenne. Ainsi, votre transaction parviendra au bénéficiaire sans délai.

## Annulation de la transaction

Il arrive parfois que vous vous retrouviez dans une situation où une transaction doit être annulée. Dans certains cas, il est possible d'annuler ou de modifier une transaction bien qu'elle soit encore en cours.

Les opérations avec Bitcoin et Ethereum peuvent être modifiées bien qu'elles soient en cours, mais pour ce faire, l'application de portefeuille doit proposer un moyen de le réaliser

Cela dit, une fois la transaction ajoutée à la blockchain, il n'y a généralement aucun moyen pratique de l'annuler. Par conséquent, une fois les transactions ajoutées à la blockchain, elles sont définitives.

## Confidentialité des transactions

Enfin, il y a quelques considérations essentielles à ne pas oublier en matière de transactions et de confidentialité.

Les transactions sur la plupart des blockchains sont stockées ouvertement. Tout le monde peut voir quand la transaction a eu lieu, les montants concernés et les adresses de l'expéditeur et du destinataire. Bien qu'un tiers puisse voir les adresses utilisées, il n'y a aucun lien avec une identité réelle.

![](../images/08-02-l.png)

Bien que certaines cryptomonnaies axées sur la protection de la confidentialité (par exemple, Monero) ne révèlent aucune information sur les transactions dans la plupart des cas, Bitcoin et Ethereum stockent ouvertement les données sur les transactions.

Dans les paragraphes qui suivent, nous allons nous étendre un peu plus sur le sujet et examiner plus particulièrement les risques liés à la protection de la confidentialité lors des transactions effectuées avec Bitcoin et Ethereum.

- **Bitcoin et la confidentialité**

    Les portefeuilles Bitcoin sont conçus de manière à ce que l'utilisateur puisse potentiellement générer des millions d'adresses pouvant être utilisées pour recevoir des paiements dans une application de portefeuille. Chaque adresse de paiement peut être utilisée une fois, plusieurs fois ou ne pas être utilisée du tout. C'est à l'utilisateur de décider.
    
    Un bon portefeuille génère toujours une nouvelle adresse de réception après avoir reçu un paiement à la dernière adresse. Cette mesure a pour but de décourager les utilisateurs d'utiliser toujours la même adresse de "réception".
    
    Si l'utilisateur utilise la même adresse, n'importe qui peut relever une seule transaction de l'utilisateur et, à partir de là, localiser d'autres transactions entrantes et sortantes appartenant à l'utilisateur. De là, on peut potentiellement dériver tout l'historique du solde et des transactions !
    
    Essayez donc d'utiliser une nouvelle adresse de réception pour chaque tiers avec lequel vous effectuez une transaction.
    
- **Ethereum et la confidentialité**

    Comme mentionné ci-dessus dans le cas de Bitcoin, l'adresse de réception des paiements peut changer à chaque transaction.

    Pour les portefeuilles Ethereum, votre adresse pour recevoir les paiements en Ether sera toujours la même. Bien que cela puisse changer à l'avenir, presque tous les portefeuilles Ethereum fonctionnent aujourd'hui avec l'adresse unique.  Il y a quelques raisons techniques à cela.
    
    > **La blockchain Ethereum est entièrement transparente et permet à quiconque de voir toutes les transactions entrantes et sortantes pour l'adresse de paiement correspondante.** 
    
    Ainsi, lorsque vous envoyez ou recevez Ethereum, gardez à l'esprit que votre interlocuteur peut potentiellement consulter votre solde d'Ether et d'autres jetons basés sur Ethereum simplement en connaissant votre adresse.
        
    Il est donc conseillé d'utiliser des portefeuilles séparés pour effectuer des transactions avec des personnes et pour accumuler des actifs.
    
En résumé, dans son état actuel, les transactions Bitcoin offrent aux utilisateurs une plus grande confidentialité que les transactions Ethereum.

La seule chose qui ajoute un élément de confidentialité minimale dans le lot est le fait qu'il n'y a aucun moyen de vérifier à qui appartient cette adresse.
