const questions = [
	{
		question: "Jaký druh je kniha Kat a blázen?",
		answers: [
		 { text: "Lyrika", correct: false},
		 { text: "Drama", correct: true},
		 { text: "Epika", correct: false},
		]
	},
	{
		question: "Jaká forma je kniha Kat a blázen?",
		answers: [
		 { text: "Drama", correct: true},
		 { text: "Próza", correct: false},
		 { text: "Poezie", correct: false},
		]
	},
	{
		question: "Jaký žánr je kniha Kat a blázen?",
		answers: [
		 { text: "Poema (což je román ve verších)", correct: false},
		 { text: "Satiristická fantasie s prvky tragikomedie", correct: true},
		 { text: "Gotická hororová povídka", correct: false},
		 { text: "Novela", correct: false},
		]
	},
	{
		question: "Co je hlavní téma knihy?",
		answers: [
		 { text: "poukázání na nelidské chování, kterému jsou podrobeni společenští odpadlíci", correct: false},
		 { text: "nenaplněná láska a pohrdání společností, bezcitnost způsobená přebytkem dobrých věcí", correct: false},
		 { text: "kritika diktátorských režimů, hlavně nacismu, mocichtivost a diktatura", correct: true},
		 { text: "nepřímá kritika totality, jejích praktik a nesvobody, absurdita normalizace", correct: false},
		]
	},
	{
		question: "Co jsou hlavní motivy knihy?",
		answers: [
		 { text: "alkohol a jeho ničivý vliv, beznaděj, rozklad rodiny a morálních hodnot", correct: false},
		 { text: "odpor proti fašismu, nesouhlas s vývojem meziválečné situace, gilotina, zbytečnost lpění na problémech, moc", correct: true},
		 { text: "matka, touha, ponocný, sklep, hlas, smích, loď, den, krysa a host", correct: false},
		 { text: "žárlivost X nenaplněná láska, venkov X město, smutek, elegance", correct: false},
		]
	},
	{
		question: "Kdy byla kniha vydána?",
		answers: [
		 { text: "1934", correct: true},
		 { text: "1842", correct: false},
		 { text: "1. souborné vydání bylo roku 1833", correct: false},
		 { text: "1800", correct: false},
		]
	},
	{
		question: "Časoprostor - Kdy?",
		answers: [
		 { text: "v neznámém roce v 2. polovině 19. století", correct: false},
		 { text: "v průběhu několika let na začátku 19. století", correct: false},
		 { text: "v průběhu několika dní pravděpodobně na jaře, ale rok nelze určit", correct: false},
		 { text: "Čas není určen, takže se kniha odehrává v autorově současnosti.", correct: true},
		]
	},
	{
		question: "Časoprostor - Kde?",
		answers: [
		 { text: "ve Francii v Paříži v domě Harpagona", correct: false},
		 { text: "ve městě Hammeln a jeho okolí v Německu", correct: false},
		 { text: "ve fiktivní reprodukci Mexika", correct: true},
		 { text: "v několika Ruských městech, ale primárně v Petrohradě a Moskvě a na venkovském panství Evžena Oněgina, které je v okolí Petrohradu", correct: false},
		]
	},
	{
		question: "Jaká je kompozice vnitřní?",
		answers: [
		 { text: "Chronologická, ale retrospektivní prvky", correct: true},
		 { text: "Rámcový", correct: false},
		 { text: "Chronologická", correct: false},
		 { text: "Paralelní", correct: false},
		]
	},
	{
		question: "Jaká je kompozice vnější?",
		answers: [
		 { text: "8 hlav (kapitol), každá sloka má 14 veršů", correct: false},
		 { text: "Skládá z předmluvy, prologu a 10 obrazů", correct: true},
		 { text: "4 díly a 51 kapitol", correct: false},
		 { text: "Skládá ze 4 zpěvů a 2 intermezz", correct: false},
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
		question: "Postavy - Melichar Mahuleno",
		answers: [
		 { text: "Hlavní kladná postava. Chce navštívit přítele, aby mu pomohl si ulevit od nemoci. Snaží se mu pomoci. Je zvídavý.", correct: false},
		 { text: "Hlavní kladná postava, vůdce loupežníků a romantický tragický hrdina, který se mstí za křivdu a pravdivě miluje Jarmilu.“", correct: false},
		 { text: "Hlavní kladný hrdina, revolucionář, nespravedlivě odsouzen, nakonec si vezme Dolores.", correct: true},
		 { text: "Vysoký, štíhlý, chladný a odtažitý muž. Vyvádí krysy z Hammeln, zamiluje se do Agnes. Po její smrti zahraje píseň zkázy a zahyne sám skokem do propasti.", correct: false},
		]
	},
	{
		question: "Postavy - Gaspar Radůzo",
		answers: [
		 { text: "Hlavní kladný hrdina, vlastenecký kat, měl popravit Melichara, ale je poctivý, nakonec si vezme Juanillu.", correct: true},
		 { text: "Krásná dívka, zamiluje se do Krysaře, ale je i milenkou dlouhého Kristiána. Po otěhotnění spáchá sebevraždu.", correct:false},
		 { text: "Hlavní kladná postava. Tichá, stydlivá, moudrá a okouzlující. Ráda na venkově. Po odchodu Oněgina si vezme jeho bratrance.", correct: false},
		 { text: "Hlavní kladná postava, mladá dívka a milenka Viléma (a později i jeho otce), jejíž osud je tragicky spjat s Vilémovým a pravděpodobně ho pravdivě miluje.", correct: false},
		]
	},
	{
		question: "Postavy - don Blasco Ibane",
		answers: [
		 { text: "Hlavní záporná postava, záletník a krutý muž, Vilémův otec, který ho v mládí vyhnal z domu; v knize je spíše fiktivní.", correct: false},
		 { text: "Vedlejší kladná postava. Jedná se o starostlivou starší ženu, která miluje svou dceru, a strachuje se o ní.", correct: false},
		 { text: "Správce u Harpagona, milenec Elisy, ve skutečnosti šlechtic.", correct: false},
		 { text: "Hlavní záporný vůdce revolucionářů, touží po moci, otec Dolores.", correct: true},
		]
	},
	{
		question: "Postavy - don Vasco Ibayo",
		answers: [
		 { text: "Hlavní záporný vůdce plantážníků, touží po moci, otec Rodriga.", correct: true},
		 { text: "Vedlejší záporná postava. Je to Čech, který sympatizuje s Němci.", correct: false},
		 { text: "Vedlejší neutrální postava. Dcera Gervaisy, která kvůli nefunkční rodině skončí jako prostitutka. Jako dítě neposedná a velmi svá.", correct: false},
		 { text: "Fiktivní kladná postava. Jedná se o hrdinu příběhu, který vypravěč vypráví Roderickovi, když se v noci v bouřce začínají dít strašidelné věci. Je statečný.", correct: false},
		]
	},
	{
		question: "Postavy - Juanilla",
		answers: [
		 { text: "Hlavní záporná postava, záletník a krutý muž, Vilémův otec, který ho v mládí vyhnal z domu; v knize je spíše fiktivní.", correct: false},
		 { text: "Kladná, neteř Almary, pomáhá hrdinům, vdá se za Gaspara.", correct: true},
		 { text: "Správce u Harpagona, milenec Elisy, ve skutečnosti šlechtic.", correct: false},
		 { text: "Krčmář, neutrální postava. Chápavý, moudrý, funguje jako zpovědník.", correct: false},
		]
	},
	{
		question: "Postavy - Dolores",
		answers: [
		 { text: "Hlavní kladná postava. Je to mladá koketní dívka. Když porodí, tak své dítě bezesporu miluje. Je nešťastná, protože nemůže vidět matku.", correct: false},
		 { text: "Silný, ale prostoduchý rybář. Na konci zachrání dítě, jediné přeživší po zkáze města.", correct: false},
		 { text: "Hlavní kladná postava. Tichá, stydlivá, moudrá a okouzlující. Ráda na venkově. Po odchodu Oněgina si vezme jeho bratrance.", correct: false},
		 { text: "Kladná, dcera Blasca a Cocepcion, odmítá nucené sňatky, nakonec si vezme Melichara.", correct: true},
		]
	},
	{
		question: "Postavy - Rodrigo Ibayo",
		answers: [
		 { text: "Lakomí řemeslníci, nechtějí Krysaři zaplatit. Představují chamtivost a zbabělost.", correct: false},
		 { text: "Záporný, syn Vasca, fanaticky zamilovaný do Juanilly.", correct: true},
		 { text: "Vedlejší neutrální postava. Dcera Gervaisy, která kvůli nefunkční rodině skončí jako prostitutka. Jako dítě neposedná a velmi svá.", correct: false},
		 { text: "Fiktivní kladná postava. Jedná se o hrdinu příběhu, který vypravěč vypráví Roderickovi, když se v noci v bouřce začínají dít strašidelné věci. Je statečný.", correct: false},
		]
	},
	{
		question: "Postavy - don Cristobal Almara",
		answers: [
		 { text: "Hlavní záporná postava, záletník a krutý muž, Vilémův otec, který ho v mládí vyhnal z domu; v knize je spíše fiktivní.", correct: false},
		 { text: "Vedlejší kladná postava. Jedná se o starostlivou starší ženu, která miluje svou dceru, a strachuje se o ní.", correct: false},
		 { text: "Záporný, strýc Juanilly, pašuje zbraně, chce si vzít Dolores, touží po moci.", correct: true},
		 { text: "Symbol nevinnosti, spolu se Seppem jediné přeživší.", correct: false},
		]
	},
	{
		question: "Postavy - don Baltazar Carierra",
		answers: [
		 { text: "Úředník, nejdřív slaboch, pak šílený diktátor, na konci zabíjí téměř všechny.", correct: true},
		 { text: "Silný, ale prostoduchý rybář. Na konci zachrání dítě, jediné přeživší po zkáze města.", correct: false},
		 { text: "Hlavní kladná postava. Tichá, stydlivá, moudrá a okouzlující. Ráda na venkově. Po odchodu Oněgina si vezme jeho bratrance.", correct: false},
		 { text: "Kladná, dcera Blasca a Cocepcion, odmítá nucené sňatky, nakonec si vezme Melichara.", correct: false},
		]
	},
	{
		question: "Děj?",
		answers: [
		 { text: "Evžen Oněgin, známý jako „lev salónů“ v Petrohradu, je znuděný a pohrdá lidmi. Po smrti svého strýce dědí jeho venkovský dům. Na venkově se seznámí s idealistickým básníkem Vladimírem Lenským a navštíví dům vdovy Larinové a jejích dvou dcer – Olgy a Taťány. Oněgin Olgu považuje za povrchní, zatímco Taťána se do něj zamiluje a napíše mu dopis, který Oněgin odmítne. Na plese, kdy lidé myslí, že mají Oněgin a Taťána něco společného, tančí Oněgin s Olgou, což rozzlobí Lenského. Ten ho vyzve na duel, který skončí jeho smrtí. Oněgin je zdrcen, považuje ji však za zbytečnou a odjíždí do Petrohradu. Olga se po smrti Lenského rychle vdá za jiného, Taťána odjíždí do Moskvy a provdá se za staršího knížete, který je Oněginovým bratrancem. Po letech se Oněgin s Taťánou setká v Moskvě, vyzná jí lásku, ale Taťána ho odmítne, protože chce zůstat věrná svému muži.", correct: false},
		 { text: "Do Hammeln přichází tajemný Krysař, aby vyvedl krysy. Zamiluje se do Agnes, která je ale milenkou dlouhého Kristiána a navíc čeká jeho dítě. Město mu odmítne zaplatit slíbenou odměnu, což v něm vyvolá touhu po pomstě, ale Agnes ho na chvíli uklidní. Když se Agnes kvůli svému nešťastnému osudu zabije skokem do propasti, Krysař se zhroutí a zahraje na píšťalu zkázy – místo krys očaruje obyvatele města. Ti jej sledují na kopec Koppel a všichni skončí v propasti i s ním samotným. Jediný, kdo přežije, je prostoduchý Sepp Jörgen, který zachrání nemluvně – symbol nevinnosti a naděje.", correct: false},
		 { text: "Vaněk přijde do kanceláře sládka, který mu nabízí pivo a vede s ním rozhovor o práci, známých i možnosti přesunu do skladu – ovšem za cenu, že by musel donášet. Vaněk odmítá, sládek se rozzlobí, poté smutní a opile usíná. Vaněk odejde, ale po chvíli se vrací a chová se jinak, což může naznačovat, že si ze sládka utahuje.", correct: false},
		 { text: "Děj sleduje dva vůdce soupeřících stran, dona Blasca Ibaneho a dona Vasca Ibayu, kteří se udrží u moci díky legendě o hrdinech Melicharovi a Gasparovi. Jenže oba údajně mrtví hrdinové ve skutečnosti žijí a vracejí se. Vůdci jsou zaskočeni, ale chtějí je využít a udělat z nich loutkové vládce, aby je pak mohli odstranit. Mezitím se rozvíjí příběh Dolores a Juanilly, které se vzepřou nátlaku na sňatek a podporují hrdiny. Melichar a Gaspar se dostávají do čela státu, ale vládnou jen naoko, zatímco Ibane a Ibayo kují intriky. Do hry vstupuje i úředník don Baltazar Carierra, který se postupně mění v šíleného diktátora. Nakonec se situace vyhrotí – Carierra se chopí moci, začne vraždit a propadá šílenství. V závěru se podaří zachránit jen Melicharovi, Gasparovi, Juanille a Dolores. Carierra končí sebevraždou a ostatní postavy jsou symbolicky znovuzrozeny jako čistí a poctiví lidé.", correct: true},
		]
	},
	{
		question: "Je zde veršová výstavba?",
		answers: [
		 { text: "Střídavý (a, b, a, b), obkročný (a, b, b, a), sdružený verš (a, a, b, b)", correct: false},
		 { text: "Není, protože to je prozaický text.", correct: true},
		 { text: "Triádový (a, a, a, a)", correct: false},
		 { text: "Střídavý (a, b, a, b) a sdružený (a, a, b, b).", correct: false},
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
		question: "Do jakého období se řadí dané dílo?",
		answers: [
		 { text: "Do období renesance", correct: false},
		 { text: "Do meziválečné prózy", correct: true},
		 { text: "Do romantismu", correct: false},
		 { text: "Do baroka", correct: false},
		]
	},
	{
		question: "Které radikální směry byly v tomto období kritizovány?",
		answers: [
		 { text: "Nacismus a fašismus", correct: true},
		 { text: "Realismus a naturalismus", correct: false},
		 { text: "Symbolismus a dekadence", correct: false},
		 { text: "Expresionismus a surrealismus", correct: false},
		]
	},
	{
		question: "Jak se v Československu dělila divadla v meziválečné době?",
		answers: [
		 { text: "Na loutková a činoherní", correct: false},
		 { text: "Na soukromá a státní", correct: false},
		 { text: "Na kamenná a avantgardní", correct: true},
		 { text: "Na městská a venkovská", correct: false},
		]
	},
	{
		question: "Která z těchto divadel patří mezi „kamenná“?",
		answers: [
		 { text: "Laterna Magika a Semafor", correct: false},
		 { text: "Stavovské divadlo a Reduta", correct: false},
		 { text: "Osvobozenecké divadlo a Divadlo D 34", correct: false},
		 { text: "Národní divadlo a Vinohradské divadlo", correct: true},
		]
	},
	{
		question: "Která z těchto divadel patří mezi „avantgardní“?",
		answers: [
		 { text: "Osvobozenecké divadlo a Divadlo D 34", correct: true},
		 { text: "Národní divadlo a Stavovské divadlo", correct: false},
		 { text: "Vinohradské divadlo a Stavovské divadlo", correct: false},
		 { text: "Reduta a Semafor", correct: false},
		]
	},
	{
		question: "Jaká byla situace v Evropě v době meziválečné prózy?",
		answers: [
		 { text: "Politická a ekonomická stabilita", correct: false},
		 { text: "Politické a ekonomické problémy", correct: true},
		 { text: "Rozkvět umění a filozofie bez problémů", correct: false},
		 { text: "Nadvláda renesanční kultury", correct: false},
		]
	},
	{
		question: "Jaký literární směr je popsán v textu?",
		answers: [
		 { text: "Moderna", correct: false},
		 { text: "Postmoderna", correct: false},
		 { text: "Avantgarda", correct: true},
		 { text: "Romantismus", correct: false},
		]
	},
	{
		question: "Na které období se avantgarda objevuje?",
		answers: [
		 { text: "Přelom 18. a 19. století", correct: false},
		 { text: "Přelom 19. a 20. století", correct: true},
		 { text: "Mezi 1. a 2. světovou válkou", correct: false},
		 { text: "Po 2. světové válce", correct: false},
		]
	},
	{
		question: "Které hnutí a umění ovlivnily avantgardu?",
		answers: [
		 { text: "Renesanční umění a baroko", correct: false},
		 { text: "Romantismus a preromantismus", correct: false},
		 { text: "Curyšské dada a sovětské revoluční umění", correct: true},
		 { text: "Expresionismus a symbolism", correct: false},
		]
	},
	{
		question: "Co avantgarda zdůrazňovala ve své tvorbě?",
		answers: [
		 { text: "Inovaci, experimentování a provokaci", correct: true},
		 { text: "Tradiční hodnoty a klasické formy", correct: false},
		 { text: "Náboženské ideály a pastoralismus", correct: false},
		 { text: "Historická témata a monarchistické hodnoty", correct: false},
		]
	},
	{
		question: "S jakým přístupem je avantgarda spojena v porovnání s Modernou?",
		answers: [
		 { text: "Konformita a tradice", correct: false},
		 { text: "Návrat k lidové slovesnosti", correct: false},
		 { text: "Antitradicionalismus a společenská revolta", correct: true},
		 { text: "Pouze vizuální umění", correct: false},
		]
	},
	{
		question: "Co původně znamenalo slovo „avantgarda“?",
		answers: [
		 { text: "Lidé, kteří psali básně", correct: false},
		 { text: "Umělecké kritiky", correct: false},
		 { text: "Revoluční spiknutí", correct: false},
		 { text: "Vojenský předvoj", correct: true},
		]
	},
	{
		question: "Kdo byl Jan Werich?",
		answers: [
		 { text: "Syn úředníka pojišťovny, ředitel divadla ABC, titul národní umělec", correct: true},
		 { text: "Syn kapelníka, žil v USA", correct: false},
		 { text: "Hudební skladatel pro Osvobozené divadlo", correct: false},
		 { text: "Režisér Hollywoodu", correct: false},
		]
	},
	{
		question: "Kdy Jan Werich nesměl veřejně publikovat?",
		answers: [
		 { text: "1961", correct: false},
		 { text: "2963", correct: false},
		 { text: "Od 1969", correct: true},
		 { text: "1980", correct: false},
		]
	},
	{
		question: "Kdo byl Jiří Voskovec??",
		answers: [
		 { text: "Syn kapelníka, vlastním jménem Wachsmann, od 1950 žil v USA", correct: true},
		 { text: "Syn úředníka, žil v ČR", correct: false},
		 { text: "Autor Balady z hadrů pouze", correct: false},
		 { text: "Český hudební skladatel", correct: false},
		]
	},
	{
		question: "Kdy se Voskovec a Werich seznámili a kde?",
		answers: [
		 { text: "V USA, 1938", correct: false},
		 { text: "Na Broadway, 1950", correct: false},
		 { text: "V Osvobozeném divadle, 1927", correct: false},
		 { text: "V Praze, při práci v časopisu Převod", correct: true},
		]
	},
	{
		question: "Jak se jmenovala jejich první úspěšná hra?",
		answers: [
		 { text: "Těžká Barbora", correct: false},
		 { text: "Osel a stín", correct: false},
		 { text: "Vest Pocket Revue", correct: true},
		 { text: "Rub a líc", correct: false},
		]
	},
	{
		question: "S kým navázali spolupráci v roce 1929, který skládal hudbu?",
		answers: [
		 { text: "Jaroslav Ježek", correct: true},
		 { text: "Karel Čapek", correct: false},
		 { text: "Václav Havel", correct: false},
		 { text: "Fratellini", correct: false},
		]
	},
	{
		question: "Jaká píseň vznikla po Werichově ztrátě zraku?",
		answers: [
		 { text: "Balada z hadrů", correct: false},
		 { text: "Těžká Barbora", correct: false},
		 { text: "Kat a blázen", correct: false},
		 { text: "Tmavomodrý svět", correct: true},
		]
	},
	{
		question: "Kdy bylo Osvobozené divadlo zavřeno a proč?",
		answers: [
		 { text: "1926, ekonomické důvody", correct: false},
		 { text: "1929, úmrtí Ježka", correct: false},
		 { text: "Podzim 1938, kvůli hře Osel a stín", correct: true},
		 { text: "1948, emigrační důvody", correct: false},
		]
	},
	{
		question: "Která díla patří k jejich tvorbě?",
		answers: [
		 { text: "Hamlet, R.U.R., Maryša", correct: false},
		 { text: "Krysař, Tajemná dobrodružství", correct: false},
		 { text: "Osel a stín, Rub a líc, Kat a blázen, Balada z hadrů, Těžká Barbora", correct: true},
		 { text: "Soumrak moře, Země mluví", correct: false},
		]
	},
	{
		question: "Kdo zůstal v Československu po roce 1948?",
		answers: [
		 { text: "Jan Werich", correct: true},
		 { text: "Jiří Voskovec", correct: false},
		 { text: "Jaroslav Ježek", correct: false},
		 { text: "Don Baltazar Carierra", correct: false},
		]
	},
	{
		question: "Kde studoval Jiří Voskovec?",
		answers: [
		 { text: "V Praze", correct: false},
		 { text: "Ve Franci", correct: true},
		 { text: "V USA", correct: false},
		 { text: "V Německu", correct: false},
		]
	},
	{
		question: "Proč byl Voskovec ve vězení v USA?",
		answers: [
		 { text: "Kradl peníze", correct: false},
		 { text: "Politické aktivity v ČR", correct: false},
		 { text: "Podezření z komunistického špionáže", correct: true},
		 { text: "Účast na Osvobozeném divadle", correct: false},
		]
	},
	{
		question: "Kdy se stal Jan Werich ředitelem divadla ABC?",
		answers: [
		 { text: "1961", correct: true},
		 { text: "1926", correct: false},
		 { text: "1929", correct: false},
		 { text: "2963", correct: false},
		]
	},
	{
		question: "Co dělali Werich a Voskovec před založením Osvobozeného divadla?",
		answers: [
		 { text: "Hráli na Broadway", correct: false},
		 { text: "Studovali hudbu", correct: false},
		 { text: "Publikovali knihy", correct: false},
		 { text: "Pracovali v časopisu Převod", correct: true},
		]
	},
	{
		question: "Jak se nazývaly jejich krátké předscény?",
		answers: [
		 { text: "Sketches", correct: false},
		 { text: "Forbíny", correct: true},
		 { text: "Kabarety", correct: false},
		 { text: "Scény", correct: false},
		]
	},
	{
		question: "Jak reagovali Voskovec a Werich na uzavření divadla v roce 1938?",
		answers: [
		 { text: "Zůstali v ČR", correct: false},
		 { text: "Založili jiné divadlo v ČR", correct: false},
		 { text: "Zavřeli se doma", correct: false},
		 { text: "Emigrovali do USA", correct: true},
		]
	},
	{
		question: "Jaké byly jejich hlavní inspirace při práci ve Forbínech?",
		answers: [
		 { text: "Fratellini", correct: true},
		 { text: "Dyk", correct: false},
		 { text: "Lumírovci", correct: false},
		 { text: "Masaryk", correct: false},
		]
	},
	{
		question: "Jak se jmenoval spolupracovník, který skládal hudbu pro Osvobozené divadlo?",
		answers: [
		 { text: "Ludvík Dyk", correct: false},
		 { text: "Karel Čapek", correct: false},
		 { text: "Jaroslav Ježek", correct: true},
		 { text: "Václav Havel", correct: false},
		]
	},
	{
		question: "Co udělali Werich a Voskovec po ztrátě zraku Jaroslava Ježka?",
		answers: [
		 { text: "Zavřeli divadl", correct: false},
		 { text: "Emigrovali do USA", correct: false},
		 { text: "Vydali píseň Tmavomodrý svět", correct: true},
		 { text: "Přestali hrát", correct: false},
		]
	},
	{
		question: "Co udělali Voskovec a Werich po návratu do USA?",
		answers: [
		 { text: "Otevřeli nové divadlo", correct: false},
		 { text: "Stali se politiky", correct: false},
		 { text: "Přestali hrát a psát", correct: false},
		 { text: "Pokračovali v herecké kariéře na Broadway a Hollywoodu", correct: true},
		]
	},
	{
		question: "Literární směr – další autoři světoví",
		answers: [
		 { text: "William Shakespeare, Johann Wolfgang Goethe, Jane Austen", correct: false},
		 { text: "Bertolt Brecht, George Bernard Shaw, Luigi Pirandello", correct: true},
		 { text: "Charles Dickens, Leo Tolstoj, F. Scott Fitzgerald", correct: false},
		 { text: "Ernest Hemingway, Marcel Proust", correct: false},
		]
	},
	{
		question: "Literární směr – další autoři čeští",
		answers: [
		 { text: "Karel Hynek Mácha, Alois Jirásek", correct: false},
		 { text: "Božena Němcová, Jaroslav Vrchlický", correct: false},
		 { text: "Jan Neruda, Viktor Dyk", correct: false},
		 { text: "Karel Čapek, Emil František Burian, Vladislav Vančura", correct: true},
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
