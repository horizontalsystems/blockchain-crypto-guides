![](../images/08-main-l.png)

# Transaktionen erklärt

Zeit, die Besonderheiten von Kryptowährung-Transaktionen kennenzulernen.

Zwar ist der Prozess des Sendens und Empfangens von Zahlungen für alle Kryptowährungen ähnlich, doch gibt es bestimmte Aspekte, durch die man von einer Kryptowährung zur anderen wechselt.

In diesem Abschnitt gehen wir auf das Wesentliche ein, um Ihnen ein klares Verständnis dafür zu vermitteln, wie die Transaktionen für fast alle Kryptowährungen funktionieren.

## Senden & empfangen

Der Prozess des Sendens und Empfangens von Krypto ist bei allen Wallets so ziemlich derselbe.

- **Um Krypto zu senden**
    
    Suchen Sie in Ihrer Wallet-App nach der Option „Senden“ oder dem Äquivalent der App. Wenn die Wallet-App mehrere Währungen unterstützt, achten Sie darauf, die richtige Kryptowährung auszuwählen.
    
    Geben Sie den Betrag, die Adresse des Empfängers, die Transaktionsgebühr ein (mehr dazu weiter unten) und klicken Sie auf die Schaltfläche Senden.
    
- **Um Krypto zu empfangen**

    Öffnen Sie die Wallet-App und suchen Sie nach der Option „Empfangen“ oder dem Äquivalent der App. Wie bereits erwähnt, achten Sie darauf, dass Sie die Adresse für die richtige Coin kopieren.
    
    Die Wallet-App bietet eine eindeutige Empfangsadresse für gewisse Kryptowährungen und die gleiche Adresse für andere. Zum Beispiel werden alle auf Ethereum-basierenden Kryptowährungen innerhalb einer Wallet-App die gleiche Empfangsadresse haben.
    
    Senden Sie diese Adresse an den Absender und warten Sie, bis die Kryptowährung in Ihrem Wallet erscheint.

## Transaktionsphasen

Kryptowährung-Transaktionen erfolgen nicht sofort. Bei einigen Kryptowährungen dauert es nur einen Augenblick, während es bei anderen einige Minuten oder in manchen Fällen sogar Stunden dauern kann.

Bei Transaktionen mit einem Non-Custodial Wallet durchlaufen die Transaktionen direkt eine Blockchain in der folgenden Reihenfolge:

1. **Die Transaktion steht noch aus**

    Nachdem die Transaktion vom Wallet gesendet wurde, erreicht sie fast augenblicklich das darunter liegende Blockchain-Netzwerk. Bitcoin-Transaktionen werden an das Bitcoin-Netzwerk gesendet, Ether-Transaktionen an das Ethereum-Netzwerk usw.
    
    Zu diesem Zeitpunkt können sowohl Absender als auch Empfänger den Status der Transaktion bereits in ihren Wallet-Apps oder im öffentlichen Blockchain-Explorer, d.h.[blockchair.com](https://blockchair.com) überwachen.

2. **Transaktion wird bestätigt**

    Wenn die Transaktion gültig ist, werden alle Nodes in dieser Blockchain um die Aufnahme in die Blockchain wetteifern. Die Dauer dieser Schritte variiert von Blockchain zu Blockchain.
    
    Bei Bitcoin dauert es in der Regel bis zu 10 Minuten, bei Ethereum etwa 2-3 Minuten usw. Dieser Schritt kann erheblich länger dauern, wenn die Blockchain mit vielen ausstehenden Transaktionen beschäftigt ist.
    
    Eine Transaktion gilt als abgeschlossen, nachdem sie der Blockchain hinzugefügt wurde.

3. **Transaktion ist abgeschlossen**

    Sobald die Transaktion der Blockchain hinzugefügt wurde, kann sie als endgültig betrachtet werden. Bei einigen Blockchains und insbesondere bei Bitcoin empfiehlt es sich jedoch zu warten, bis eine bestimmte Anzahl neuer Blöcke hinzugefügt wurde.
    
    Bei großen Summen wird im Allgemeinen empfohlen, bis zu 6 Blöcke abzuwarten, bevor die Transaktion als theoretisch irreversibel angesehen werden kann. Für die meisten Zahlungen sollten 1-2 Bestätigungen ausreichend sein.

## Transaktionsgebühren

Beim Senden von Kryptowährungen wie Bitcoin oder Ethereum hat der Sender eine Transaktionsgebühr zu erwarten. Diese Gebühr geht als Ausgleich an einen der Blockchain-Nodes, der die Transaktion als erster einer Blockchain hinzufügt.

Im Allgemeinen steht es Blockchains frei, sich zu beteiligen, sie benötigen jedoch ihre eigene Kryptowährung, um etwas zu tun. Sowohl bei Ethereum als auch bei Bitcoin zahlt der Absender bei jeder Transaktion auch eine Servicegebühr an das Blockchain-Netzwerk.

> **Sie müssen die Details an dieser Stelle nicht verstehen, denken Sie nur daran, dass Tausende von Nodes, die die Blockchain antreiben, die Transaktion innerhalb weniger Sekunden nach ihrem Versand erhalten.** 
>
> **Der Node, der ihn zuerst der Blockchain hinzufügt, erhält als Belohnung die entsprechende Gebühr. Jedes Mal, wenn Sie eine Transaktion senden, zahlen Sie Gebühren an einen anderen Node. Betrachten Sie dies als eine Dienstleistungsgebühr für die Nutzung des Netzwerks.**

Abhängig von der von Ihnen gesendeten Kryptowährung können die Transaktionsgebühren variieren. Bei einigen Blockchains kann die Gebühr nur einen Bruchteil eines Cent betragen, bei anderen wie Bitcoin kann sie durchaus 1$ übersteigen.

Die für solche Kryptowährungen wie Bitcoin und Ethereum verwendeten Blockchains sind derzeit auf einige Millionen Transaktionen pro Tag beschränkt. Die Transaktionsgebühr wird als Instrument zur Priorisierung gewünschter Transaktionen verwendet, indem man ihr eine höhere Gebühr zugesteht.

Wenn die Gebühr weit unter dem Netzwerkdurchschnitt liegt, kann Ihre Transaktion stundenlang ausstehend bleiben. Wenn sie weit über dem Durchschnitt liegt, ist zu erwarten, dass sie üblicherweise innerhalb weniger Minuten in die Blockchain aufgenommen wird.

> **Wenn eine Transaktion aufgrund einer niedrigen Gebühr einige Tage lang ausstehend bleibt, kann sie abgelehnt werden, als wäre sie nie abgeschickt worden.**
>
> **Wenn Sie eine ausstehende Transaktion haben, deren Bestätigung in den meisten Fällen eine Weile dauert, wird sie endgültig akzeptiert, wenn Sie lange genug warten.**

Einige Wallets empfehlen die optimale Höhe der Transaktionsgebühren unter Berücksichtigung des aktuellen Standes der Aktivitäten im Netzwerk.

Versuchen Sie bei großen Beträgen oder zeitkritischen Zahlungen stets, einen weit über dem Durchschnitt liegenden Gebührenbetrag bereitzustellen. Das würde sicherstellen, dass Ihre Transaktion den Empfänger ohne Verzögerung erreicht.

## Transaktion stornieren

Gelegentlich kann es vorkommen, dass Sie in eine Situation geraten, in der eine Transaktion storniert werden muss. In gewissen Fällen ist es möglich, eine Transaktion zu stornieren oder zu ändern, solange sie sich noch im ausstehenden Status befindet.

Sowohl Bitcoin- als auch Ethereum-Transaktionen können modifiziert werden, während sie sich im ausstehenden Status befinden. Hierfür sollte die Wallet-App eine Möglichkeit bieten, das zu tun.

Sobald die Transaktion jedoch der Blockchain hinzugefügt wurde, gibt es in der Regel keine praktische Möglichkeit, sie zu widerrufen. Sobald die Transaktion der Blockchain hinzugefügt wurde, ist sie also endgültig.

## Datenschutz bei Transaktionen

Schließlich gibt es einige wichtige Aspekte im Zusammenhang mit Transaktionen und Datenschutz zu beachten.

Transaktionen werden bei den meisten Blockchains offen gespeichert. Jeder kann sehen, wann die Transaktion stattgefunden hat, um welche Beträge es sich handelte und welche Empfängeradressen der Sender hat. Auch wenn eine dritte Partei die beteiligten Adressen sehen kann, gibt es keine Verbindung zu einer Identität aus der realen Welt.

![](../images/08-02-l.png)

Während manche auf den Datenschutz fokussierte Kryptowährungen (z.B. Monero) keine Informationen über die Transaktion preisgeben, speichern die meisten Kryptowährungen, einschließlich Bitcoin und Ethereum-Blockchains, Transaktionsdaten offen.

Im Folgenden gehen wir etwas ausführlicher auf die Risiken für den Datenschutz bei der Abwicklung von Transaktionen mit Bitcoin und Ethereum ein.

- **Bitcoin Datenschutz**

    Die Bitcoin Wallets sind so aufgebaut, dass die Benutzer potenziell Millionen von Adressen generieren können, die für den Empfang von Zahlungen innerhalb einer Wallet-App verwendet werden können. Jede Zahlungsadresse kann einmal, mehrmals oder gar nicht verwendet werden. Die Entscheidung liegt beim Benutzer.
    
    Ein gutes Wallet erzeugt immer eine neue Empfangsadresse, nachdem es eine Zahlung an die neueste Adresse erhalten hat. Dies geschieht, um einen Benutzer davon abzuhalten, dieselbe „Empfangsadresse“ immer wieder zu verwenden.
    
    Wenn ein Benutzer die gleiche Adresse verwendet, kann jeder eine einzelne Transaktion des Benutzers vornehmen und von dort aus andere eingehende und ausgehende Transaktionen des Benutzers lokalisieren. Daraus können Sie potentiell die gesamte Saldo- und Transaktionshistorie ableiten!
    
    Verwenden Sie also für jede Ihrer Geschäftspartner eine neue Empfangsadresse.

- **Ethereum Datenschutz**

    Wie oben erwähnt, kann sich im Falle von Bitcoin die Adresse für den Zahlungseingang bei jeder Transaktion ändern.

     Bezüglich der Ethereum Wallets ist Ihre Adresse für Zahlungen mit Ether immer die gleiche. Auch wenn sich das in Zukunft ändern kann, funktionieren heutzutage fast alle Wallets von Ethereum mit einer einzigen Adresse. Dafür gibt es einige technische Gründe. 
    
    > **Die Ethereum Blockchain ist vollständig transparent, so dass jeder alle ein- und ausgehenden Transaktionen für die jeweilige Zahlungsadresse einsehen kann.** 
    
    Wenn Sie also Ethereum senden oder empfangen, denken Sie daran, dass Ihr Geschäftspartner möglicherweise Ihren Kontostand von Ether und anderen auf Ethereum-basierenden Tokens abfragen kann, nur weil er Ihre Adresse kennt.
    
    Daher ist es ratsam, für Transaktionen mit Personen und zum Vermögensaufbau separate Wallets zu verwenden.
    
    Das für Transaktionen verwendete Wallet sollte nicht zu viel Geld enthalten, um Sie nicht zu entlarven.
    
Zusammenfassend lässt sich sagen, dass Bitcoin-Transaktionen in ihrem momentanen Zustand den Benutzern mehr Privatsphäre bieten als Ethereum-Transaktionen.

Lediglich durch das Fehlen einer Möglichkeit zur Überprüfung, wem diese Adresse gehört, besteht eine minimale Privatsphäre.
