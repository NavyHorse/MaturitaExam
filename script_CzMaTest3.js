const questions = [
	{
		question: "Jaký druh je kniha Lakomec",
		answers: [
		 { text: "Lyrika", correct: false},
		 { text: "Drama", correct: true},
		 { text: "Epika", correct: false},
		]
	},
	{
		question: "Jaká forma je kniha Lakomec?",
		answers: [
		 { text: "Drama", correct: true},
		 { text: "Próza", correct: false},
		 { text: "Poezie", correct: false},
		]
	},
	{
		question: "Jaký žánr je kniha Lakomec?",
		answers: [
		 { text: "Legenda", correct: false},
		 { text: "Bajka", correct: false},
		 { text: "Sonet", correct: false},
		 { text: "Komedie", correct: true},
		]
	},
	{
		question: "Co je hlavní téma knihy?",
		answers: [
		 { text: "láska odsouzená k zániku a mezigenerační nenávist", correct: false},
		 { text: "lakota,láska, domnělý zločin a tajemnost", correct: true},
		 { text: "víra v Boha a prozřelost vůči špatnostem", correct: false},
		 { text: "nepřímá kritika totality, jejích praktik a nesvobody, absurdita normalizace", correct: false},
		]
	},
	{
		question: "Co jsou hlavní motivy knihy?",
		answers: [
		 { text: "srdce, brána, palác, tlumočník a stav", correct: false},
		 { text: "mloci, kteří představují nacisty, lidstvo, obchod, průmysl, výstřižky nebo také zbraně", correct: false},
		 { text: "kasa, franky, mistr, proces, chvíle a milost", correct: true},
		 { text: "meč, sochy, zeď, okno, lože, dýka, číše, hrobka, smrt", correct: false},
		]
	},
	{
		question: "Kdy byla kniha vydána?",
		answers: [
		 { text: "1668", correct: true},
		 { text: "1934", correct: false},
		 { text: "1595", correct: false},
		 { text: "1823", correct: false},
		]
	},
	{
		question: "Časoprostor - Kdy?",
		answers: [
		 { text: "10. století", correct: false},
		 { text: "16. století", correct: false},
		 { text: "17. století, pravděpodobně v roce 1670, v jeden den", correct: true},
		 { text: "11. století", correct: false},
		]
	},
	{
		question: "Časoprostor - Kde?",
		answers: [
		 { text: "ve Francii v Paříži v domě Harpagona", correct: true},
		 { text: "v Německu, Chorvatsku, Itálii (Benátkách)", correct: false},
		 { text: "v alegorickém městě, které má znázorňovat svět", correct: false},
		 { text: "v domě Usherů v pokoji Rodericka Ushera", correct: false},
		]
	},
	{
		question: "Jaká je kompozice vnitřní?",
		answers: [
		 { text: "Retrospektivní", correct: false},
		 { text: "Rámcový", correct: false},
		 { text: "Chronologická", correct: true},
		 { text: "Paralelní", correct: false},
		]
	},
	{
		question: "Jaká je kompozice vnější?",
		answers: [
		 { text: "54 kapitol, a dělí se na 2 části", correct: false},
		 { text: "5 jednání (dějství)", correct: false},
		 { text: "4 díly a 51 kapitol", correct: false},
		 { text: "5 jednání, které mají dohromady 44 výstupů", correct: true},
		]
	},
	{
		question: "Jaký je vypravěč podle literárního druhu?",
		answers: [
		 { text: "Vypravěč", correct: false},
		 { text: "Není", correct: true},
		 { text: "Lyrický subjekt", correct: false},
		]
	},
	{
		question: "Vypravěč dle gramatické osoby?",
		answers: [
		 { text: "Ich-forma", correct: false},
		 { text: "Er-forma ", correct: false},
		 { text: "Není", correct: true},
		]
	},
	{
		question: "Vypravěč dle vyprávěcí roviny?",
		answers: [
		 { text: "Není", correct: true},
		 { text: "Přímý vypravěč ", correct: false},
		 { text: "Vypravěč vševědoucí", correct: false},
		 { text: "Personální vypravěč", correct: false},
		]
	},
	{
		question: "Postavy - Harpagon",
		answers: [
		 { text: "Hlavní kladná postava. Je to mladá koketní dívka. Když porodí, tak své dítě bezesporu miluje. Je nešťastná, protože nemůže vidět matku.", correct: false},
		 { text: "Je to hlavní kladná postava, zvídavý a inteligentní člověk, který vidí nedokonalosti světa a silně věří v Boha, u něhož nakonec najde, co hledal.", correct: false},
		 { text: "Vedlejší neutrální postava. Přítelkyně Abea a herečka. Není moc inteligentní.", correct: false},
		 { text: "Lakomý otec Kleanta a Elisy, posedlý penězi, ochoten udělat cokoliv, aby je neztratil.", correct: true},
		]
	},
	{
		question: "Postavy - Elisa",
		answers: [
		 { text: "Dcera Harpagona, miluje Valera, nechce si vzít pana Anselma.", correct: true},
		 { text: "Syn Monteka, hluboce zamilovaný do Julie. Po zabití Tybalta vyhoštěn, mylně věří, že Julie zemřela, a vypije jed.", correct: false},
		 { text: "Hlavní záporná postava. Jedná se o zámožného muže, který je otcem Kleanta a Elisy. Je extrémně lakomý a chce vše, za co nejnižší náklady nebo nejlépe zdarma.", correct: false},
		 { text: "Hlavní záporná postava, sluha královny Moudrosti, provází poutníka a snaží se ho svést do nějakého stavu.", correct: false},
		]
	},
	{
		question: "Postavy - Valer",
		answers: [
		 { text: "Hlavní záporná postava, druhotný průvodce poutníka, omámí ho speciálními brýlemi.", correct: false},
		 { text: "Hlavní kladná postava. Je to mladý výpravčí, který sní o tom, že ztratí panictví. Má malé sebevědomí. Je vypravěčem příběhu.", correct: false},
		 { text: "Správce u Harpagona, milenec Elisy, ve skutečnosti šlechtic.", correct: true},
		 { text: "Vedlejší záporná postava. Původní majitel Panské farmy. Je krutý a má silný sklon k alkoholu. Při zvířecím převratu je se svou rodinou a čeledíny vyhnán z farmy.", correct: false},
		]
	},
	{
		question: "Postavy - Kleant",
		answers: [
		 { text: "Bratranec Julie, výborný šermíř a prudký muž. Zabije Mercutia, poté ho Romeo usmrtí.", correct: false},
		 { text: "Vedlejší záporná postava. Je to Čech, který sympatizuje s Němci.", correct: false},
		 { text: "Vedlejší kladná postava, izraelský král, odhalí pravdu o královně, ale sám je omámen.", correct: false},
		 { text: "Syn Harpagona, miluje Marianu, soupeří s otcem o její ruku.", correct: true},
		]
	},
	{
		question: "Postavy - Pan Anselm",
		answers: [
		 { text: "Zámožný muž, má si vzít Elisu, nakonec se ukáže jako ztracený šlechtic.", correct: true},
		 { text: "Hlavní kladná postava. Je to služebně starší spolupracovník Miloše Hrmy, který ho měl v učení v Dobrovicích, kde přednostovi stanice přetrhl jeho kanape. Hubička je velký svůdník, který má pestrý a úspěšný milostný život.", correct: false},
		 { text: "Přítel Romea a příbuzný knížete. Veselý, odvážný, umírá rukou Tybalta.", correct: false},
		 { text: "Vedlejší záporná postava, královna světa, se služebnicemi představují falešné vlastnosti, snadno ovlivnitelná.", correct: false},
		]
	},
	{
		question: "Postavy - Mariana",
		answers: [
		 { text: "Vedlejší kladná postava, křesťanský Bůh, přivolá poutníka a odměňuje věrné.", correct: false},
		 { text: "Milá a půvabná dívka, chce si vzít Kleanta, ne Harpagona.", correct: true},
		 { text: "Vedlejší neutrální postava. Jedná se o otce Řehoře. Je autoritativní a tvrdý muž, který Řehoře postupně zavrhuje.", correct: false},
		 { text: "Je to vedlejší kladná postava. Je velmi inteligentní, ale nechce se mu nic dělat. Je to oddaný přítel Boxera.", correct: false},
		]
	},
	{
		question: "Postavy - La Flèche",
		answers: [
		 { text: "Kleantův sluha, ukradne Harpagonovu kasu.", correct: true},
		 { text: "Vedlejší neutrální postava, nevyhnutelná, křesťanům vstřícnější, ostatním brutálnější.", correct: false},
		 { text: "Hlavní kladná postava. Cestující obchodník, který se jednoho dne probudí proměněn v obří hmyz.", correct: false},
		 { text: "Romeův otec, hlava rodu Monteků. Na konci se smíří s Kapuletem.", correct: false},
		]
	},
	{
		question: "Postavy - Frosina",
		answers: [
		 { text: "Kleantův sluha, ukradne Harpagonovu kasu.", correct: false},
		 { text: "Vedlejší neutrální postava, nevyhnutelná, křesťanům vstřícnější, ostatním brutálnější.", correct: false},
		 { text: "Hlavní kladná postava. Cestující obchodník, který se jednoho dne probudí proměněn v obří hmyz.", correct: false},
		 { text: "Dohazovačka, pomůže zabránit sňatku Harpagona a Mariany.", correct: true},
		]
	},
	{
		question: "Děj?",
		answers: [
		 { text: "Hra začíná tím, že Elisa miluje Valera a Kleant Marianu. Oba sourozenci chtějí, aby jim otec Harpagon jejich lásky schválil, ale ten má jiné plány – chce, aby se Kleant oženil s bohatou vdovou a Elisu provdal za pana Anselma, zatímco sám si chce vzít Marianu. Kleant zjistí, že si má půjčit peníze od otce, aniž by to věděl. Přichází dohazovačka Frosina, aby Harpagona přesvědčila, ale neuspěje. Elisa, Kleant, Mariana a Frosina vymyslí plán, jak Harpagona od Mariany odradit. Mezitím La Flèche ukradne Harpagonovu pokladnici. Harpagon hledá viníka a nedorozumění odhalí Valerovu a Elisinou lásku. Na závěr se ukáže, že Valer, Mariana a pan Anselm patří do jedné šlechtické rodiny. Díky Anselmovi se všichni vezmou podle svých přání a Harpagon si ponechá své peníze.", correct: true},
		 { text: "Agnes se zamiluje do tajemného Krysaře a ubytuje ho. Po hádce s konšely, kteří mu odmítnou vyplatit mzdu, se Krysař chystá zničit město, ale Agnes ho odradí. Když zjistí, že Agnes čeká dítě s jiným, ta spáchá sebevraždu skokem do propasti. Zdrcený Krysař zahraje na píšťalu, omámí celé město a dovede jeho obyvatele k hromadné smrti na kopci Koppel. Přežije jen rybář Sepp, který nakonec zachrání opuštěné dítě.", correct: false},
		 { text: "Vaněk přijde do kanceláře sládka, který mu nabízí pivo a vede s ním rozhovor o práci, známých i možnosti přesunu do skladu – ovšem za cenu, že by musel donášet. Vaněk odmítá, sládek se rozzlobí, poté smutní a opile usíná. Vaněk odejde, ale po chvíli se vrací a chová se jinak, což může naznačovat, že si ze sládka utahuje.", correct: false},
		 { text: "Poutník se vydává poznat svět, ale hned se k němu přidají Všezvěd Všudybud a Mámení, kteří ho vedou a snaží se ho ovlivnit. Procházejí šesti stavy společnosti – manžely, řemeslníky, učenci, duchovními, vrchností a vojáky – kde poutník vidí korupci, pokrytectví a nespravedlnost. Nakonec dorazí na hrad paní Fortuny, kde lidé trpí a často umírají. Pak ho vezmou na hrad královny Moudrosti, která ukrývá zkaženost pod krásnými jmény. Král Šalamoun ji odhalí jako Marnost, ale nakonec podlehne jejímu kouzlu a nechá se svést. Poutník z toho všeho uteče na kraj světa, kde ho volá Bůh. Ten mu ukáže pravé křesťanství, ochrání ho a vyšle zpět do světa, aby mu sloužil, dokud nepřijde jeho čas.", correct: false},
		]
	},
	{
		question: "Je zde veršová výstavba?",
		answers: [
		 { text: "Střídavý: a, b, a, b", correct: false},
		 { text: "Není, protože to je prozaický text.", correct: true},
		 { text: "Obkročný: a, b, b, a", correct: false},
		 { text: "Postupný: a, b, c, d", correct: false},
		]
	},
	{
		question: "Jaké jsou zde typy promluv?",
		answers: [
		 { text: "Jen monolog", correct: false},
		 { text: "Žádné", correct: false},
		 { text: "Jen dialog", correct: false},
		 { text: "Jak monilog, tak také i dialog", correct: true},
		]
	},
	{
		question: "Z jakého období literatury pochází Lakomec?",
		answers: [
		 { text: "Realismus", correct: false},
		 { text: "Klasicismus ", correct: true},
		 { text: "Romantismus", correct: false},
		 { text: "Baroko", correct: false},
		]
	},
	{
		question: "Která antická hra byla inspirací pro Lakomec?",
		answers: [
		 { text: "Antigona", correct: false},
		 { text: "Oidipus Rex ", correct: false},
		 { text: "Lysistrata", correct: false},
		 { text: "Komedie o hrnci", correct: true},
		]
	},
	{
		question: "Jaké lidské vlastnosti dílo kritizuje?",
		answers: [
		 { text: "Statečnost a čest", correct: false},
		 { text: "Lakotu, podlézavost a neupřímnost", correct: true},
		 { text: "Línost a zlost", correct: false},
		 { text: "Moudrost a pokoru", correct: false},
		]
	},
	{
		question: "Proč nebyla hra ve své době kladně přijata?",
		answers: [
		 { text: "Byla inspirována antikou", correct: false},
		 { text: "Byla psána veršem", correct: false},
		 { text: "Byla tragédií", correct: false},
		 { text: "Bylo to formou komedie (Komedie byly pro nízkou společnost)", correct: true},
		]
	},
	{
		question: "Jak se dělila literatura na vysokou a nízkou? Uveď příklady.",
		answers: [
		 { text: "Vysoká: romány; nízká: poezie", correct: false},
		 { text: "Vysoká: tragédie, eposy, óda; nízká: komedie, bajky, satira", correct: true},
		 { text: "Vysoká: komedie, tragédie; nízká: óda, epos", correct: false},
		 { text: "Vysoká: bajky, satira; nízká: tragédie, eposy", correct: false},
		]
	},
	{
		question: "Kdo vládl ve Francii v 17. století a jakým způsobem?",
		answers: [
		 { text: "Karel IX., parlamentně", correct: false},
		 { text: "Napoleon, demokraticky", correct: false},
		 { text: "Ludvík XIV., absolutisticky", correct: true},
		 { text: "Ludvík XVI., konstitučně", correct: false},
		]
	},
	{
		question: "Jaký byl postoj myslitelů vůči církvi a šlechtě?",
		answers: [
		 { text: "Odklon od víry a obracení se k rozumu a logice", correct: true},
		 { text: "Slepé následování církve", correct: false},
		 { text: "Odmítnutí vědy", correct: false},
		 { text: "Podpora absolutismu", correct: false},
		]
	},
	{
		question: "Co se významně rozvíjelo ve Francii v 17. století podle textu?",
		answers: [
		 { text: "Literatura a hudba", correct: false},
		 { text: "Věda", correct: true},
		 { text: "Zemědělství", correct: false},
		 { text: "Náboženské obřady", correct: false},
		]
	},
	{
		question: "Jaká by podle myslitelů měla být role vlády?",
		answers: [
		 { text: "Utlačovat lid", correct: false},
		 { text: "Zajistit absolutní moc pro panovníka", correct: false},
		 { text: "Ignorovat lid", correct: false},
		 { text: "Starat se o blaho lidu", correct: true},
		]
	},
	{
		question: "Jaký literární směr reprezentuje dílo Lakomec?",
		answers: [
		 { text: "Romantismus", correct: false},
		 { text: "Realismus", correct: false},
		 { text: "Klasicismus", correct: true},
		 { text: "Baroko", correct: false},
		]
	},
	{
		question: "Kdy a kde vznikl klasicismus?",
		answers: [
		 { text: "17. století ve Francii", correct: true},
		 { text: "16. století v Itálii", correct: false},
		 { text: "18. století v Anglii", correct: false},
		 { text: "19. století v Německu", correct: false},
		]
	},
	{
		question: "Za vlády kterého krále vznikl klasicismus ve Francii?",
		answers: [
		 { text: "Ludvík X.", correct: false},
		 { text: "Napoleon Bonaparte", correct: false},
		 { text: "Ludvík XIV.", correct: true},
		 { text: "Karel IX.", correct: false},
		]
	},
	{
		question: "Na co klasicismus reagoval?",
		answers: [
		 { text: "Na romantismus", correct: false},
		 { text: "Na realismus", correct: false},
		 { text: "Na renesanci", correct: false},
		 { text: "Na baroko", correct: true},
		]
	},
	{
		question: "Co klasicismus vyznával?",
		answers: [
		 { text: "Emoce a chaos", correct: false},
		 { text: "Náhodu a fantazii", correct: false},
		 { text: "Rozum, pravidla a řád", correct: true},
		 { text: "Náboženskou mystiku", correct: false},
		]
	},
	{
		question: "Jak se dělí literatura podle klasicismu?",
		answers: [
		 { text: "Vysoká (ódy, tragédie) a nízká (komedie, bajky)", correct: true},
		 { text: "Romantická a realistická", correct: false},
		 { text: "Barokní a renesanční", correct: false},
		 { text: "Epická a lyrická", correct: false},
		]
	},
	{
		question: "Jaké jsou podoby klasicismu?",
		answers: [
		 { text: "Romantický klasicismus, realismus, naturalismus", correct: false},
		 { text: "Barokní klasicismus, empír, neoklasicismus", correct: true},
		 { text: "Humanistický klasicismus, modernismus", correct: false},
		 { text: "Gotický klasicismus, renesance", correct: false},
		]
	},
	{
		question: "Co je Commedia dell’arte?",
		answers: [
		 { text: "Německý román", correct: false},
		 { text: "Italština pro tragédii", correct: false},
		 { text: "Francouzská opera", correct: false},
		 { text: "Improvizační renesanční divadlo", correct: true},
		]
	},
	{
		question: "Jaké typy postav se objevují v Commedia dell’arte?",
		answers: [
		 { text: "Vecchi, Innamorati, Zanni", correct: true},
		 { text: "Tragédie, komedie, satiry", correct: false},
		 { text: "Hrdinové, padouši, klauni", correct: false},
		 { text: "Ódy, eposy, bajky", correct: false},
		]
	},
	{
		question: "Jak se liší barokní klasicismus od neoklasicismu?",
		answers: [
		 { text: "Barokní klasicismus je 19. století, neoklasicismus 17. století", correct: false},
		 { text: "Oba jsou stejné", correct: false},
		 { text: "Barokní klasicismus je propojen s barokem, neoklasicismus 19. století", correct: true},
		 { text: "Barokní klasicismus je italský, neoklasicismus francouzský", correct: false},
		]
	},
	{
		question: "Jaké bylo skutečné jméno Molièra??",
		answers: [
		 { text: "Pierre Corneille", correct: false},
		 { text: "Jean-Baptiste Poquelin", correct: true},
		 { text: "Jean Racine ", correct: false},
		 { text: "Voltaire", correct: false},
		]
	},
	{
		question: "Kdy se Molière narodil?",
		answers: [
		 { text: "15. 1. 1622", correct: true},
		 { text: "17. 2. 1873", correct: false},
		 { text: "1. 5. 1600", correct: false},
		 { text: "22. 3. 1425", correct: false},
		]
	},
	{
		question: "Jakého původu byla Molièrova rodina?",
		answers: [
		 { text: "Zemědělská", correct: false},
		 { text: "Šlechtická", correct: false},
		 { text: "Čalouník a truhlář", correct: true},
		 { text: "Učitelé", correct: false},
		]
	},
	{
		question: "Co původně Molière studoval?",
		answers: [
		 { text: "Právo", correct: true},
		 { text: "Medicínu", correct: false},
		 { text: "Malířství ", correct: false},
		 { text: "Filozofii", correct: false},
		]
	},
	{
		question: "Co založil Molière roku 1643?",
		answers: [
		 { text: "Palais Royal", correct: false},
		 { text: "Troupe de Monsieu", correct: false},
		 { text: "Comédie Française", correct: false},
		 { text: "Illustre Théatre", correct: true},
		]
	},
	{
		question: "Jak se jmenovala jeho první významnější hra?",
		answers: [
		 { text: "Popleta (L’Etourli)", correct: true},
		 { text: "Tartuffe", correct: false},
		 { text: "Lakomec", correct: false},
		 { text: "Sganarel", correct: false},
		]
	},
	{
		question: "Kde Molière získal velký úspěch a mohl se usadit?",
		answers: [
		 { text: "Palais Garnier", correct: false},
		 { text: "Théâtre de l’Odéon", correct: false},
		 { text: "Divadlo Petit Bourbon", correct: true},
		 { text: "Divadlo Comédie Française", correct: false},
		]
	},
	{
		question: "Jaký typ her Molière především psal?",
		answers: [
		 { text: "Komedie a frašky", correct: true},
		 { text: "Historické eposy", correct: false},
		 { text: "Tragédie", correct: false},
		 { text: "Bajky", correct: false},
		]
	},
	{
		question: "Které Molièrovy hry patří mezi jeho komedie charakterů a mravů?",
		answers: [
		 { text: "Proměna", correct: false},
		 { text: "Farma Zvířat", correct: false},
		 { text: "Romeo a Julie", correct: false},
		 { text: "Škola pro muže, Tartuffe, Lakomec", correct: true},
		]
	},
	{
		question: "Proč byla hra Tartuffe kontroverzní?",
		answers: [
		 { text: "Protože byla napsaná veršem", correct: false},
		 { text: "Kvůli narážkám na soudobý svět", correct: true},
		 { text: "Protože byla první Molièrova hra", correct: false},
		 { text: "Kvůli komickým scénám", correct: false},
		]
	},
	{
		question: "Kdy Molière zemřel?",
		answers: [
		 { text: "31. 12. 1700", correct: false},
		 { text: "15. 1. 1822", correct: false},
		 { text: "17. 2. 1673", correct: true},
		 { text: "1. 1. 1350", correct: false},
		]
	},
	{
		question: "Jakým způsobem Molière působil ve svých hrách?",
		answers: [
		 { text: "Psával, režíroval a hrál hlavní role", correct: true},
		 { text: "Psával jen scénáře", correct: false},
		 { text: "Hrál jen vedlejší role", correct: false},
		 { text: "Byl pouze kritikem", correct: false},
		]
	},
	{
		question: "Jak se mění Molièrovy postavy během hry?",
		answers: [
		 { text: "Zlepšují se", correct: false},
		 { text: "Zhoršují se", correct: false},
		 { text: "Nemění se", correct: true},
		 { text: "Proměňují se podle situace", correct: false},
		]
	},
	{
		question: "Kolik aktů měly Molièrovy hry?",
		answers: [
		 { text: "2", correct: false},
		 { text: "7", correct: false},
		 { text: "3", correct: false},
		 { text: "5", correct: true},
		]
	},
	{
		question: "V jakých formách byly jeho hry psány?",
		answers: [
		 { text: "Pouze veršem", correct: false},
		 { text: "Veršem i prózou", correct: true},
		 { text: "Pouze prózou", correct: false},
		 { text: "Jen písní", correct: false},
		]
	},
	{
		question: "Literární směr – další autoři světoví",
		answers: [
		 { text: "Jane Austen, Hermann Hesse", correct: false},
		 { text: "Edgar Allan Poe, Miguel de Cervantes, Mark Twain", correct: false},
		 { text: "William Shakespeare, Leo Tolstoj, Charles Dickens", correct: false},
		 { text: "Pierra Corneille, Jean Racine, Alexander Pope", correct: true},
		]
	},
	{
		question: "Literární směr – další autoři čeští",
		answers: [
		 { text: "Karel Hynek Mácha, Božena Němcová, Jan Neruda", correct: false},
		 { text: "František Xaver Dušek, Václav Jan Tomášek, Jan Jakub Ryba", correct: true},
		 { text: "Alois Jirásek, Jaroslav Hašek, Karel Čapek", correct: false},
		 { text: "Franz Kafka, Josef Škvorecký, Milan Kundera", correct: false},
		]
	},
	/*{
		question: "",
		answers: [
		 { text: "", correct: true},
		 { text: "", correct: false},
		 { text: "", correct: false},
		 { text: "", correct: false},
		]
	},*/
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const backButton = document.getElementById("back-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
	currentQuestionIndex = 0;
	score = 0;
	nextButton.innerHTML = "Next";
	showQuestion();
}

function showQuestion(){
	resetState();
	let currentQuestion = questions[currentQuestionIndex];
	let questionNo = currentQuestionIndex + 1;
	questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
	currentQuestion.answers.forEach(answer => {
		const button = document.createElement("button");
		button.innerHTML = answer.text;
		button.classList.add("btn");
		answerButtons.appendChild(button);
		if (answer.correct){
			button.dataset.correct = answer.correct;
		}
		button.addEventListener("click", selectAnswer);
	});
}

function resetState(){
	nextButton.style.display = "none";
	while(answerButtons.firstChild){
		answerButtons.removeChild(answerButtons.firstChild);
	}
}

function selectAnswer(e){
	const selectedBtn = e.target;
	const isCorrect = selectedBtn.dataset.correct === "true";
	if (isCorrect){
		selectedBtn.classList.add("correct");
		score++;
	}else{
		selectedBtn.classList.add("incorrect");
	}
	Array.from(answerButtons.children).forEach(button => {
		if (button.dataset.correct === "true"){
			button.classList.add("correct");
		}
		button.disabled = true;
	});
	nextButton.style.display = "block";
}

function showScore(){
	resetState();
	questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
	nextButton.innerHTML = "Play again";
	nextButton.style.display = "block";
	backButton.style.display = "block";
}

function handleNextButton(){
	currentQuestionIndex++;
	if (currentQuestionIndex < questions.length){
		showQuestion();
	}else{
		showScore();
	}
}

nextButton.addEventListener("click", ()=>{
	if (currentQuestionIndex < questions.length){
		handleNextButton();
	}else{
		startQuiz();
		backButton.style.display = "none";
	}
});

backButton.addEventListener("click", () => {
	console.log("Back button clicked");
	window.location.href = "Options_CzMaTest.html";
});

startQuiz();
