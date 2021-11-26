![](../images/05-main-l.png)

# Unstoppable Wallet

Dans cette section, nous nous concentrerons sur les aspects pratiques et passerons en revue les `` choses à savoir '' lors de l'utilisation d'applications de portefeuille non-privatifs de liberté.

Du point de vue de l'utilisateur, les attentes de base de toute application de ces portefeuilles devraient être les suivantes :

1. l'application de portefeuille doit générer des clés privées d'une manière conforme aux normes. Cela garantit que les clés privées sont sûres et compatibles avec les applications de portefeuille de tiers.

2. l'application de portefeuille prenant en charge plusieurs cryptomonnaies devrait gérer correctement les adresses de paiement pour chaque cryptomonnaie. Par exemple, pour la réception de paiements en Bitcoin, l'adresse de l'utilisateur diffère de celle pour recevoir Ethereum.

3. l'application portefeuille doit stocker des clés privées conformément à des principes directeurs documentés. Les applications portefeuille iOS et Android devront utiliser des mécanismes de stockage sûrs fournis par le système d'exploitation afin de conserver la clé privée en toute sécurité.

Outre les incontournables mentionnés ci-dessus, il peut y avoir d'autres exigences à l'égard du portefeuille selon l'utilisateur cible. Une personne qui cherche à préserver sa vie privée peut avoir besoin de fonctionnalités privatives supplémentaires qui ne sont pas disponibles dans la plupart des applications de portefeuille.

> **Avertissement: [Unstoppable Wallet](https://unstoppable.money) a été conçu par [Horizontal Systems](https://horizontalsystems.io), la société à l'origine de ces guides.**

Dans les pages qui suivent, nous allons passer en revue quelques points importants à garder en tête lorsque l'on utilise des applications de portefeuille non-privatives de liberté. Nous allons utiliser l'application Unstoppable Wallet pour illustrer ces aspects importants.

### 1. Configuration / Restauration 

Tout portefeuille non-privatif commence soit par la mise en place d'un portefeuille, soit par la migration du portefeuille existant.

![portrait](../images/05-02-s.png)

- Le bouton "Créer un portefeuille" génère une nouvelle clé privée et l'affiche sous la forme de 12 mots qui doivent être sauvegardés.
- L'option "Restaurer le portefeuille" permet de restaurer un portefeuille existant qui aurait pu être créé plus tôt dans Unstoppable ou un autre portefeuille conforme aux normes.

Sachez qu'il faut compter entre quelques minutes et quelques heures pour restaurer un portefeuille non-privatif de liberté.

### 2. Verrouillage d'autorisation

Il est important que toute application de portefeuille non-privatif soit dotée de mesures d'accès non autorisé intégrées. Les portefeuilles sur portables et les portefeuilles matériels appliquent ce principe sous la forme d'un code de déverrouillage qui est nécessaire pour accéder au portefeuille.

![portrait](../images/05-03-s.png)

Cette mesure est essentielle pour garder vos fonds en sécurité même si une entité non autorisée se procure votre portefeuille.

### 3. Cryptomonnaies prises en charge
       
Plus le portefeuille est riche en devises, mieux c'est. Il est plus commode d'interagir avec une seule application que de basculer entre plusieurs applications pour différentes cryptomonnaies.

![portrait](../images/05-04-s.png)

L'application de portefeuille doit également avoir accès aux cours en vigueur des cryptomonnaies pour afficher vos soldes en cryptomonnaies dans une devise à laquelle vous êtes habitué, telle que le dollar américain ou l'euro.

De plus, les cours actuels sont indispensables pour l'envoi des paiements. Envoyer à quelqu'un 90 $ de Bitcoin n'est pas facile lorsqu'on essaie de faire du calcul mental.

### 4. Présentation des pièces

Chaque cryptomonnaie est essentiellement un projet avec son propre ensemble de spécificités. Il est important de connaître ces caractéristiques pour quiconque cherche à acheter ces cryptomonnaies.

Bien que pour certaines cryptomonnaies les transactions soient bon marché, pour d'autres, les frais peuvent être élevés. En outre, la vitesse et la confidentialité des transactions individuelles peuvent également varier considérablement d'une cryptomonnaie à l'autre.

Bien qu'il existe un grand nombre de cryptomonnaies différentes, il y a un manque d'informations permettant de décrire ces projets de manière accessible. De nombreux projets sont assez obscurs, même pour les nouveaux venus expérimentés ayant une formation technique.

Unstoppable a pour objectif de fournir un aperçu complet des différentes cryptomonnaies en termes simples.

![portrait](../images/05-05-s.png)

Une application de portefeuille conviviale pour les investisseurs doit fournir des informations détaillées sur chaque cryptomonnaie prise en charge.

### 5. Tableaux des prix

Repérez toujours le portefeuille qui affiche les taux de change historiques du marché pour chaque cryptomonnaie prise en charge.

![portrait](../images/05-06-s.png)

Les prix historiques donnent un aperçu de l'évolution du prix de la cryptomonnaie par le passé.

### 6. Alertes de prix

En plus des tableaux de prix, il est utile de recevoir des notifications pour les changements de taux.

Un portefeuille tel qu'Unstoppable peut avertir l'utilisateur lorsque le prix de l'actif a connu une variation de plus de 2/3/5 % en 24 heures. 

![portrait](../images/05-07-s.png)

De plus, Unstoppable peut envoyer des alertes lorsque la tendance des prix de la cryptomonnaie change, afin d'indiquer le bon moment pour acheter ou vendre une cryptomonnaie donnée.

### 7. Confidentialité

Lorsqu'il s'agit de portefeuilles non-privatifs de liberté, la question de la confidentialité présente de nombreux volets et peut varier considérablement d'un portefeuille à l'autre.

![portrait](../images/05-08-s.png)

Certains points doivent être pris en considération lors de l'évaluation des caractéristiques du portefeuille non-privatif en matière de respect de la vie privée :

- **Données de base sur les utilisateurs**
    
    Selon la façon dont le portefeuille est construit, il peut être possible pour le fournisseur du portefeuille de connaître certaines données non-identifiables comme l'adresse IP et l'emplacement de l'utilisateur. Lorsque ces données sont conservées sur un serveur quelconque, il y a toujours un risque de fuite.
    
- **Solde et transactions**

    Les applications de portefeuille non-privatives permettent généralement aux utilisateurs de restaurer ou de migrer un portefeuille existant vers l'application de portefeuille. Pour servir ces utilisateurs, les fournisseurs de portefeuilles peuvent disposer d'un serveur spécialement optimisé pour cette tâche.
    
    Bien que cette méthode soit pratique pour le fournisseur de portefeuille, elle peut potentiellement exposer certaines informations sur le solde et les transactions de l'utilisateur.
    
    Pour y remédier, certains portefeuilles comme Unstoppable prennent en charge la restauration directement depuis le réseau blockchain lui-même plutôt que via un serveur tiers. Ceci garantit que le fournisseur de portefeuille n'a aucune idée du solde ou des transactions de l'utilisateur.
    
- **Confidentialité de la blockchain**

    Le niveau de confidentialité varie en fonction des blockchains : lorsque vous effectuez une transaction avec Bitcoin, le niveau de confidentialité est plus élevé que celui d'Ethereum.
    
    Certains portefeuilles non-privatifs de liberté peuvent présenter des caractéristiques supplémentaires qui renforcent la protection de la vie privée sur cette blockchain spécifique. Par exemple, l'application "Unstoppable Wallet" intègre certains instruments qui rendent beaucoup plus difficile la liaison de différentes transactions de blockchain à une seule entité.
    
Bien que de nombreux portefeuilles s'affichent comme non-privatifs de liberté et de pair à pair, ils peuvent néanmoins présenter des risques en matière de confidentialité. Le portefeuille le plus confidentiel est celui qui ne sait absolument rien de l'utilisateur.

### 8. Résistance à la censure

En raison du caractère jeune et révolutionnaire de la cryptomonnaie, certains gouvernements sont réticents à légaliser la cryptomonnaie et à fournir des réglementations claires.

Par conséquent, recherchez une application de portefeuille qui soit conçue de manière à ce qu'il soit impossible pour quelqu'un de :

- Censurer votre accès à l'application
- Censurer l'application dans votre région
- Vous empêcher d'effectuer des transactions

Un véritable portefeuille non privatif de liberté doit être construit de telle sorte qu'il fonctionne partout et que les transactions soient toujours accessibles.

N'oubliez pas que si vous utilisez une application de portefeuille non-privative qui a été bloquée d'une manière ou d'une autre dans votre région, vous devriez pouvoir transférer votre clé privée vers une autre application de portefeuille non-privative.
