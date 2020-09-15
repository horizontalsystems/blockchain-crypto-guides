![](../images/02-main-l.png)

# توضیح کیف پول

طبیعتا  رمزارز به مالک امکاناتی را می دهد که با ابزارهای مالی سنتی مجحذ نیست.

درک این قابلیت ها به ویژه برای شخصی که به دنبال ذخیره ایمن و جمع آوری رمزارزها است ، بسیار مهم است.

هنگام معامله با ابزارهای مالی سنتی مانند سپرده گذاری در بانک (یا سهام با کارگزار) این تصور وجود دارد که کسی دارایی را به نمایندگی از کاربر ذخیره می کند. مؤسسه ای که وجوه خود را نگه می دارد به عنوان متولی دارایی عمل می کند و کنترل کامل بر

آنها دارد. دسترسی شما به این دارایی ها به سازمانی بستگی دارد که دارایی های شما را در بازداشت نگه دارد.

وقتی صحبت از رمزارز می شود ، گزینه ای وجود دارد که کاربر تنها موجودی باشد که به وجوه دسترسی و کنترل دارد. رمزارز

کاربر را قادر می سازد تنها متولی دارایی ها ، بدون هیچ گونه وابستگی به واسطه ها باشد.

برای کسی که به دنبال ذخیره ایمن و متعاقبا انباشت دارایی های رمزارز است ، مهم است که بداند جنبه مالکیت در ارزهای رمزپایه

## .چگونه کار می کند

هاافراد زیادی وارد فضا می شوند و بدون درک این اصول شروع به انباشت رمزارز می کنند. این امر آنها را در معرض خطراتی

The notion of someone owning Bitcoin or Ethereum is quite different from the idea of traditional cash in your wallet. 

>**The ownership in cryptocurrency means the ownership of special cryptographic key which has a power to spend a certain amount of cryptocurrency.**

So, when someone says s/he has 5 Bitcoins what this essentially means is that this person is in the possession of the cryptographic key which can spend 5 Bitcoins.

![](../images/02-02-l.png)

When a person sends 1 Bitcoin to another person, the sender uses his/her cryptographic key to sign off 1 Bitcoin from the available balance and pass the ownership of that 1 Bitcoin to the recipient. After the transaction took place, that 1 Bitcoin can only be spent by the cryptographic key belonging to the recipient.

So, the takeaway point here is that the ownership of certain amount of crypto basically means the ownership of special cryptographic key.

Under the hood the key may look something like this:

>**5Kb8kLf9zgWQnogidDA76MzPL6TsZZY36hWXMssSzNydYXYB9KF**

آشکار کردن کلید رمزنگاری شده برای شخصی یا از دست دادن آن در اصل به معنای از دست رفتن دسترسی به رمزنگاری است که کنترل می کند. توجه داشته باشید که غیر ممکن است کسی (حتی قدرتمندترین رایانه) آن کلید را حدس بزند ، حتی اگر سعی کند

It was not uncommon to see people loosing key to their Bitcoins in the early days. As a result a lot of Bitcoins (maybe 10-15%) ended up dormant this way. The Bitcoins are still out there, but the cryptographic key controlling these Bitcoins is lost.

In practical terms, the private key can be thought of as a secure alternative to traditional username and password authentication method but without the means to recover if lost.

## Cryptocurrency Wallets

Cryptocurrency wallets are merely the instruments meant to hold and manage cryptographic keys. 

>**The wallets do not physically store cryptocurrencies, instead wallets store cryptographic keys which can exercise over certain amount of cryptocurrencies.**

Genuine cryptocurrency wallets enable safe and private storage of cryptographic keys. We deliberately said "genuine" because cryptocurrency wallets come in many forms. 

Building genuine wallet is significantly more difficult and thus most wallet providers build pseudo currency wallets. Pseudo wallets do not provide users with a genuine control over the assets.

While there are a lot of things that can potentially be taken into account when it comes evaluating wallets in this section we are going to focus on the core principle. The unconditional ownership!

The minimum requirement for any decent wallet should be full unconditional ownership by the user over the funds the wallet holds.

Not all wallet are equal in that regard. Depending on how the wallet built it may provide full unconditional ownership over the crypto, partial or none at all.

### 1) Non-Custodial Wallets

A non-custodial wallet type gives the user exclusive control over their funds. The entity providing the wallet does not have any control over the user assets. 

Such wallets are theoretically the most secure form of a cryptocurrency wallet as no third-party can interfere with the wallet funds. The user has exclusive control over the funds and doesn't have to trust any entity.

Non-custodial wallets keep the wallet code open to the public for scrutiny.

>**The users of non-custodial wallets expected to have an understanding that funds on the wallet are under exclusive control of the user.**
>
>**User get full control as well as full responsibility when dealing with crypto assets on the wallet.**

This is the only type of wallet we recommend for safe storage. In the later sections we are going to look deeper into the differences between various non-custodial wallets and risks associated with them.

### 2) Custodial Wallets

A custodial wallet does not give the user exclusive control over the crypto funds on the wallet. A wallet provider basically gives "pseudo" wallet that shows balance and transactions. 

Whenever user executes a transaction it's the wallet provider who actually sends those funds on user's behalf. Such wallets are the least secure wallets. The users' funds and access to them are fully in the hands of the wallet provider. 

>**A wallet provider may easily block a user from accessing the wallet or even freeze the funds.**
> 
>**Unlike banks which also act as a middleman wallet providers are not financial institutions and thus not as regulated. There is a lot of risk for users holding large amount of cryptocurrency on custodial wallets.**

Furthermore, custodial wallets are not private as the wallet provider knows full transaction history of the user.

It should be noted that cryptocurrency exchanges usually provide users with custodial wallets. Therefore, it's not advised to use wallet provided by cryptocurrency exchange for keeping cryptocurrency for extended periods.

>**If you leave crypto funds on cryptocurrency exchange, or any type of custodial wallet, the funds are vulnerable to hacking or other types of data breaches. This happened a lot in the past and likely to happen in the future.**

When your funds remain on the custodial wallet, the wallet provider could feasibly freeze funds, restrict your usage, or even block you from your wallet/account without warning.

Majority of the popular wallets out there are unfortunately of custodial nature.

![](../images/02-03-l.png)

### 3) Hybrid Wallets

Neither the wallet owner or the wallet provider has full control over the wallet funds. A hybrid wallet programmed to require approval from both parties before the funds can be spent. 

The hybrid wallet system protects against hacking wallet provider but opens the door for wallet provider to censor users in certain scenarios.

Only when using non-custodial wallet you can be sure the funds are indeed under your control and not dependent on any third party.
