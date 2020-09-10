``![](../images/03-main-l.png)

# Private Keys

Wie bereits erwähnt, speichern echte Kryptowährung-Wallets kryptographische Schlüssel, die die Kontrolle über eine bestimmte Menge an Kryptowährung haben.

Anhand dieses kryptografischen Schlüssels kann die Wallet-App die Menge an Kryptowährung, die der Benutzer besitzt, erkennen und frühere Transaktionen im Zusammenhang mit dem Wallet ableiten. Dieser kryptografische Schlüssel wird gewöhnlich als Private Key bezeichnet.

> **Die Wallet-App ist ein Instrument, das im Wesentlichen Ihren Private Key speichert. Dieser Private Key gibt Ihnen die Kontrolle über eine bestimmte Menge an Kryptowährung.**
>
> **Die Non-Custodial Wallet-App verwendet Private Keys, um Kryptowährung-Salden und vergangene Transaktionen aus der Blockchain abzurufen.**

Wir werden nicht erklären, wie die Private Keys im Verborgenen funktionieren. Sie sollten nur wissen, dass sich der Begriff Private Key gewöhnlich auf einen kryptographischen Schlüssel bezieht, über den wir vorhin gesprochen haben.

Im Folgenden gehen wir etwas tiefer auf Sicherheitsaspekte ein, um Ihnen ein besseres Verständnis der Private Keys und der damit verbundenen Sicherheitsaspekte zu vermitteln.

## 1. Schlüssel privat halten

Häufig täuschen Betrüger (indem sie sich als Wallet-Support-Teams ausgeben) Benutzer dazu, ihre Private Keys weiterzugeben. Wenn ein Benutzer den Schlüssel weitergibt, stiehlt der Betrüger das Guthaben.

> **Für Sie als Benutzer der Wallet-App gibt es absolut keinen triftigen Grund, die Private Keys jemals mit jemandem zu teilen. Dies gilt für alle Wallets.**
>
> **Geben Sie Ihren Private Key niemals an Dritte weiter, auch nicht, wenn Sie mit Personen kommunizieren, die Ihre Wallet-App entwickelt haben.**

Sie dürfen Ihren Private Key nur dann jemandem gegenüber offen legen, wenn Sie das Eigentum Ihrer Geldmittel absichtlich auf diese Person übertragen wollen. Fast alle Non-Custodial Wallets bieten dem Benutzer die Möglichkeit, von der Wallet-App aus auf den Private Key zuzugreifen und diesen einzusehen.

## 2. Backup Key

Die meisten Apps für Non-Custodial Wallets zeigen den Private Key bei der Einrichtung der Wallet-App an. Die Wallet-App fordert den Benutzer normalerweise auf, den Private Key aufzuschreiben und ihn an einem sicheren Ort offline zu speichern.
 
> **Der Private Key ist die einzige Möglichkeit, den Zugriff auf Gelder wiederherzustellen, falls das Gerät mit der Wallet-App unzugänglich wird, d.h. wenn es gestohlen wird oder einfach nicht mehr funktioniert.**

Um die Sicherung des Private Keys zu erleichtern, haben sich die Blockchain-Ingenieure eine Möglichkeit ausgedacht, den Private Key in einen einfachen Satz von 12 oder 24 regulären Wörtern umzuwandeln.

Die meisten Non-Custodial Wallets zeigen den Private Key in einer von Menschen lesbaren Form, im Allgemeinen in einer Form von 12/24 Worten.

![](../images/03-02-l.png)

Sichern Sie den Private Key und stellen Sie sicher, dass Ihre Sicherung keine Tippfehler enthält. Abgesehen von den eigentlichen Wörtern ist die Reihenfolge genauso wichtig.

> **Wenn Sie den Private Key verlieren oder ihn unwissentlich jemandem preisgeben, kann dieser die Kontrolle über Ihre Kryptowährung erlangen.**

Die 12/24 Wörter sollten in der richtigen Reihenfolge hinterlegt werden. Ein Non-Custodial Wallet erkennt, wenn Sie in einem der Wörter einen Tippfehler machen und eine entsprechende Warnung anzeigen.

Wenn die Wörter falsch angeordnet sind, wird ein Non-Custodial Wallet trotzdem ein zufälliges Wallet wiederherstellen, es wird nur nicht Ihres sein. Die richtige Reihenfolge ist also genauso wichtig.

## 3. Generieren eines Private Key

Wenn Sie eine Non-Custodial Wallet-App zum ersten Mal einrichten, erzeugt der für die Wallet-App verwendete Code zufällig einen sicheren Private Key für Sie. Damit der Private Key wirklich sicher ist, ist es wichtig, dass eine Wallet-App einen wirklich zufällig generierten Private Key erzeugt.

> **Wenn der von einem Non-Custodial Wallet erzeugte Private Key nicht zufällig ist, ist das Wallet nicht sicher.**

Das ist einer der Gründe, warum Non-Custodial Wallets den Code offen halten. Techniker Dritter können dann den Code analysieren und prüfen, ob die Wallet-App den Private Key korrekt generiert.

Es gibt Websites wie [WalletScrutiny.com](https://walletscrutiny.com) , die sicherstellen sollen, dass auf Google Play veröffentlichte Wallets tatsächlich den gleichen Code verwenden wie der Code, der der Community öffentlich mitgeteilt wird.
   
Jede gute Non-Custodial Wallet-App sollte in Übereinstimmung mit den öffentlich dokumentierten Sicherheitsrichtlinien und Wallet-Standards entwickelt werden.

## 4. Ein Key, viele Coins

Ein weiterer wesentlicher Aspekt ist, dass ein einziger Private Key zur Saldokontrolle für mehrere Kryptowährungen verwendet werden kann. Wenn ein solcher Schlüssel verwendet wird, können die Wallet-Apps automatisch die Salden für alle unterstützten Kryptowährungen ermitteln.

Bei der Erstellung des Wallets auf dem [Unstoppable wallet](https://unstoppable.money) zum Beispiel erhält der Benutzer einen einzigen Private Key für 5 Kryptowährungen:

- Bitcoin
- Dash
- Bitcoin Cash
- Litecoin
- Ethereum

Derselbe Private Key wird zur Verwaltung mehrerer Kryptowährungen mit jeweils eigenem Saldo und eigenen Transaktionen verwendet.

## 5. Salden & Transaktionen

Wie bereits erwähnt, gibt es Standards für „Private Keys“, die von Ingenieuren im Laufe der Jahre entwickelt wurden. Diese Standards legen fest, wie genau Wallet-Apps den Private Key für die Verwendung mit mehreren Kryptowährungen handhaben sollten.

> **Das Wallet verwendet Ihren Private Key, um Ihre Zahlungsadresse für jede Kryptowährung abzuleiten. Die Zahlungsadresse ist die von Ihnen an andere Personen weitergegebene Adresse, welche Ihnen in Kryptowährung bezahlen wollen.**

![](../images/03-03-l.png)

Anhand Ihres Private Keys sollte die Wallet-App in der Lage sein, Ihre Adresse für Bitcoin, Ethereum und viele andere Kryptowährungen abzuleiten. Unterschiedliche Adressen für jede Kryptowährung.

Wenn Sie den Private Key in ein anderes standardkonformes Wallet importieren, wird diese andere Wallet-App ebenfalls dieselben Adressen ableiten.

Auf diese Weise kann eine Wallet-App einen auf einer anderen App verwendeten Private Key nehmen und von diesem Key aus Guthaben und Transaktionen für mehrere Kryptowährungen wiederherstellen.

> **Wenn ein Private Key auf standardkonforme Weise erzeugt wurde, dann sollte jedes andere standardkonforme Wallet in der Lage sein, Zahlungsadressen und vergangene Transaktionen für jede unterstützte Kryptowährung korrekt abzuleiten.**

Sobald die App die Adressen für z.B. Bitcoin kennt, verbindet sie sich mit der Bitcoin-Blockchain und sucht nach Transaktionen, die diese Adressen betreffen. Als Ergebnis dieses Prozesses kann die Wallet-App die mit diesem Private Key verbundenen Salden und früheren Transaktionen anzeigen.

## 6. Zwischen den Wallets wechseln

Gute Non-Custodial Wallets ermöglichen die Migration von Private Keys zwischen den Wallets. Mit anderen Worten, ein mit einer Non-Custodial Wallet-App erzeugter Private Key sollte mit anderen Non-Custodial Wallet-Apps kompatibel sein.

> **Der Benutzer sollte nicht auf einen einzigen Wallet-Anbieter beschränkt sein und sollte problemlos zu anderen Non-Custodial Wallet-Apps verschiedener Hersteller migrieren können.** 

Wenn Ihr Smartphone kaputt geht oder die Wallet-App nicht mehr funktioniert, ist Ihr Guthaben sicher; Sie können jederzeit den Zugriff auf Ihre Kryptowährung mit dem Private Key wiederherstellen. Es gibt keine Zeitrahmen – der gleiche Schlüssel würde auch Jahre später noch funktionieren.

Achten Sie bei der Wahl des Wallets darauf, dass es standardkonform ist und den Import/Export von Private Keys unterstützt.

> **Hinweis: Wenn Sie Ihren Private Key von einem Wallet in ein anderes Wallet migrieren, muss das Ziel-Wallet alle Kryptowährungen unterstützen, die der Private Key verwaltet..**

Wenn Ihr Private Key ein Guthaben von Bitcoin und Ethereum hat, aber das Ziel-Wallet nur Bitcoin unterstützt, ist Ihr Ethereum-Guthaben nicht sichtbar. Es wird weiterhin Ihnen gehören und von einem anderen Wallet aus zugänglich sein.
