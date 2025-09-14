const questions = [
	{
		question: "Jaký druh je kniha Krysař?",
		answers: [
		 { text: "Lyrika", correct: false},
		 { text: "Drama", correct: false},
		 { text: "Epika", correct: true},
		]
	},
	{
		question: "Jaká forma je kniha Krysař?",
		answers: [
		 { text: "Drama", correct: false},
		 { text: "Próza", correct: true},
		 { text: "Poezie", correct: false},
		]
	},
	{
		question: "Jaký žánr je kniha Krysař?",
		answers: [
		 { text: "Poema (což je román ve verších)", correct: false},
		 { text: "Sbírka baladických básní", correct: false},
		 { text: "Gotická hororová povídka", correct: false},
		 { text: "Novela", correct: true},
		]
	},
	{
		question: "Co je hlavní téma knihy?",
		answers: [
		 { text: "poukázání na nelidské chování, kterému jsou podrobeni společenští odpadlíci", correct: true},
		 { text: "nenaplněná láska a pohrdání společností, bezcitnost způsobená přebytkem dobrých věcí", correct: false},
		 { text: "vlastenectví, vina, trest, konflikt člověka se společností", correct: false},
		 { text: "nepřímá kritika totality, jejích praktik a nesvobody, absurdita normalizace", correct: false},
		]
	},
	{
		question: "Co jsou hlavní motivy knihy?",
		answers: [
		 { text: "alkohol a jeho ničivý vliv, beznaděj, rozklad rodiny a morálních hodnot", correct: false},
		 { text: "láska, příroda, emoce, kolo, lebka, hledání", correct: false},
		 { text: "matka, touha, ponocný, sklep, hlas, smích, loď, den, krysa a host", correct: true},
		 { text: "žárlivost X nenaplněná láska, venkov X město, smutek, elegance", correct: false},
		]
	},
	{
		question: "Kdy byla kniha vydána?",
		answers: [
		 { text: "Oficiální kniha vyšla 1915", correct: true},
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
		 { text: "v průběhu několika dní pravděpodobně na jaře, ale rok nelze určit", correct: true},
		 { text: "Čas není určen, takže se kniha odehrává v autorově současnosti.", correct: false},
		]
	},
	{
		question: "Časoprostor - Kde?",
		answers: [
		 { text: "ve Francii v Paříži v domě Harpagona", correct: false},
		 { text: "ve městě Hammeln a jeho okolí v Německu", correct: true},
		 { text: "v alegorickém městě, které má znázorňovat svět", correct: false},
		 { text: "v několika Ruských městech, ale primárně v Petrohradě a Moskvě a na venkovském panství Evžena Oněgina, které je v okolí Petrohradu", correct: false},
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
		 { text: "8 hlav (kapitol), každá sloka má 14 veršů", correct: false},
		 { text: "26 krátkých kapitol.", correct: true},
		 { text: "4 díly a 51 kapitol", correct: false},
		 { text: "Skládá ze 4 zpěvů a 2 intermezz", correct: false},
		]
	},
	{
		question: "Jaký je vypravěč podle literárního druhu?",
		answers: [
		 { text: "Vypravěč", correct: true},
		 { text: "Není", correct: false},
		 { text: "Lyrický subjekt", correct: false},
		]
	},
	{
		question: "Vypravěč dle gramatické osoby?",
		answers: [
		 { text: "Ich-forma", correct: false},
		 { text: "Er-forma ", correct: true},
		 { text: "Není", correct: false},
		 { text: "Jak Er-forma tak i Ich-forma", correct: false},
		]
	},
	{
		question: "Vypravěč dle vyprávěcí roviny?",
		answers: [
		 { text: "Není", correct: false},
		 { text: "Přímý vypravěč ", correct: false},
		 { text: "Vypravěč vševědoucí", correct: true},
		 { text: "Personální vypravěč", correct: false},
		]
	},
	{
		question: "Postavy - Krysař",
		answers: [
		 { text: "Hlavní kladná postava. Chce navštívit přítele, aby mu pomohl si ulevit od nemoci. Snaží se mu pomoci. Je zvídavý.", correct: false},
		 { text: "Hlavní kladná postava, vůdce loupežníků a romantický tragický hrdina, který se mstí za křivdu a pravdivě miluje Jarmilu.", correct: false},
		 { text: "Hlavní kladná postava. Zámožný, tajemný, samotář a milovník žen. Typický „zbytečný člověk“. Byl milencem Taťány a snažil se získat Olgu.", correct: false},
		 { text: "Vysoký, štíhlý, chladný a odtažitý muž. Vyvádí krysy z Hammeln, zamiluje se do Agnes. Po její smrti zahraje píseň zkázy a zahyne sám skokem do propasti.", correct: true},
		]
	},
	{
		question: "Postavy - Agnes",
		answers: [
		 { text: "Hlavní kladná postava. Je to mladá koketní dívka. Když porodí, tak své dítě bezesporu miluje. Je nešťastná, protože nemůže vidět matku.", correct: false},
		 { text: "Krásná dívka, zamiluje se do Krysaře, ale je i milenkou dlouhého Kristiána. Po otěhotnění spáchá sebevraždu.", correct: true},
		 { text: "Hlavní kladná postava. Tichá, stydlivá, moudrá a okouzlující. Ráda na venkově. Po odchodu Oněgina si vezme jeho bratrance.", correct: false},
		 { text: "Hlavní kladná postava, mladá dívka a milenka Viléma (a později i jeho otce), jejíž osud je tragicky spjat s Vilémovým a pravděpodobně ho pravdivě miluje.", correct: false},
		]
	},
	{
		question: "Postavy - Dlouhý Kristián",
		answers: [
		 { text: "Hlavní záporná postava, záletník a krutý muž, Vilémův otec, který ho v mládí vyhnal z domu; v knize je spíše fiktivní.", correct: false},
		 { text: "Vedlejší kladná postava. Jedná se o starostlivou starší ženu, která miluje svou dceru, a strachuje se o ní.", correct: false},
		 { text: "Správce u Harpagona, milenec Elisy, ve skutečnosti šlechtic.", correct: false},
		 { text: "Agnesin milenec, záporná postava. Oplodní Agnes, čímž způsobí její tragédii.", correct: true},
		]
	},
	{
		question: "Postavy - Konšelé Strumm a Frosch",
		answers: [
		 { text: "Lakomí řemeslníci, nechtějí Krysaři zaplatit. Představují chamtivost a zbabělost.", correct: true},
		 { text: "Vedlejší záporná postava. Je to Čech, který sympatizuje s Němci.", correct: false},
		 { text: "Vedlejší neutrální postava. Dcera Gervaisy, která kvůli nefunkční rodině skončí jako prostitutka. Jako dítě neposedná a velmi svá.", correct: false},
		 { text: "Fiktivní kladná postava. Jedná se o hrdinu příběhu, který vypravěč vypráví Roderickovi, když se v noci v bouřce začínají dít strašidelné věci. Je statečný.", correct: false},
		]
	},
	{
		question: "Postavy - Konrád Röger",
		answers: [
		 { text: "Hlavní záporná postava, záletník a krutý muž, Vilémův otec, který ho v mládí vyhnal z domu; v knize je spíše fiktivní.", correct: false},
		 { text: "Vedlejší kladná postava. Jedná se o starostlivou starší ženu, která miluje svou dceru, a strachuje se o ní.", correct: false},
		 { text: "Správce u Harpagona, milenec Elisy, ve skutečnosti šlechtic.", correct: false},
		 { text: "Krčmář, neutrální postava. Chápavý, moudrý, funguje jako zpovědník.", correct: true},
		]
	},
	{
		question: "Postavy - Sepp Jörgen",
		answers: [
		 { text: "Hlavní kladná postava. Je to mladá koketní dívka. Když porodí, tak své dítě bezesporu miluje. Je nešťastná, protože nemůže vidět matku.", correct: false},
		 { text: "Silný, ale prostoduchý rybář. Na konci zachrání dítě, jediné přeživší po zkáze města.", correct: true},
		 { text: "Hlavní kladná postava. Tichá, stydlivá, moudrá a okouzlující. Ráda na venkově. Po odchodu Oněgina si vezme jeho bratrance.", correct: false},
		 { text: "Hlavní kladná postava, mladá dívka a milenka Viléma (a později i jeho otce), jejíž osud je tragicky spjat s Vilémovým a pravděpodobně ho pravdivě miluje.", correct: false},
		]
	},
	{
		question: "Postavy - Magistr Faustus",
		answers: [
		 { text: "Lakomí řemeslníci, nechtějí Krysaři zaplatit. Představují chamtivost a zbabělost.", correct: false},
		 { text: "Tajemný cizinec, tvrdí, že slouží ďáblu. Ukáže se, že skutečně dovede zmizet.", correct: true},
		 { text: "Vedlejší neutrální postava. Dcera Gervaisy, která kvůli nefunkční rodině skončí jako prostitutka. Jako dítě neposedná a velmi svá.", correct: false},
		 { text: "Fiktivní kladná postava. Jedná se o hrdinu příběhu, který vypravěč vypráví Roderickovi, když se v noci v bouřce začínají dít strašidelné věci. Je statečný.", correct: false},
		]
	},
	{
		question: "Postavy - Dítě",
		answers: [
		 { text: "Hlavní záporná postava, záletník a krutý muž, Vilémův otec, který ho v mládí vyhnal z domu; v knize je spíše fiktivní.", correct: false},
		 { text: "Vedlejší kladná postava. Jedná se o starostlivou starší ženu, která miluje svou dceru, a strachuje se o ní.", correct: false},
		 { text: "Správce u Harpagona, milenec Elisy, ve skutečnosti šlechtic.", correct: false},
		 { text: "Symbol nevinnosti, spolu se Seppem jediné přeživší.", correct: true},
		]
	},
	{
		question: "Děj?",
		answers: [
		 { text: "Evžen Oněgin, známý jako „lev salónů“ v Petrohradu, je znuděný a pohrdá lidmi. Po smrti svého strýce dědí jeho venkovský dům. Na venkově se seznámí s idealistickým básníkem Vladimírem Lenským a navštíví dům vdovy Larinové a jejích dvou dcer – Olgy a Taťány. Oněgin Olgu považuje za povrchní, zatímco Taťána se do něj zamiluje a napíše mu dopis, který Oněgin odmítne. Na plese, kdy lidé myslí, že mají Oněgin a Taťána něco společného, tančí Oněgin s Olgou, což rozzlobí Lenského. Ten ho vyzve na duel, který skončí jeho smrtí. Oněgin je zdrcen, považuje ji však za zbytečnou a odjíždí do Petrohradu. Olga se po smrti Lenského rychle vdá za jiného, Taťána odjíždí do Moskvy a provdá se za staršího knížete, který je Oněginovým bratrancem. Po letech se Oněgin s Taťánou setká v Moskvě, vyzná jí lásku, ale Taťána ho odmítne, protože chce zůstat věrná svému muži.", correct: false},
		 { text: "Do Hammeln přichází tajemný Krysař, aby vyvedl krysy. Zamiluje se do Agnes, která je ale milenkou dlouhého Kristiána a navíc čeká jeho dítě. Město mu odmítne zaplatit slíbenou odměnu, což v něm vyvolá touhu po pomstě, ale Agnes ho na chvíli uklidní. Když se Agnes kvůli svému nešťastnému osudu zabije skokem do propasti, Krysař se zhroutí a zahraje na píšťalu zkázy – místo krys očaruje obyvatele města. Ti jej sledují na kopec Koppel a všichni skončí v propasti i s ním samotným. Jediný, kdo přežije, je prostoduchý Sepp Jörgen, který zachrání nemluvně – symbol nevinnosti a naděje.", correct: true},
		 { text: "Vaněk přijde do kanceláře sládka, který mu nabízí pivo a vede s ním rozhovor o práci, známých i možnosti přesunu do skladu – ovšem za cenu, že by musel donášet. Vaněk odmítá, sládek se rozzlobí, poté smutní a opile usíná. Vaněk odejde, ale po chvíli se vrací a chová se jinak, což může naznačovat, že si ze sládka utahuje.", correct: false},
		 { text: "Příběh se zaměřuje na Viléma, který je uvězněn a odsouzen k smrti poté, co zabil svého otce (nevědomky, když se snažil pomstít za svedení Jarmily). Báseň začíná popisem krajiny, přechází k Vilémovu zločinu a následně osamělé noci před popravou, kdy Vilém přemýšlí o smyslu života, smrti a osudu. Dílo vrcholí Vilémovým odsouzením a jeho popravou. Jarmila, která se dozvídá o Vilémově činu a odsouzení, končí svůj život skokem do Jezera.", correct: false},
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
		question: "Kdy oficiálně vyšel Krysař?",
		answers: [
		 { text: "V době 2. světové války", correct: false},
		 { text: "Po roce 1948", correct: false},
		 { text: "V době 1. světové války", correct: true},
		 { text: "V období romantismu", correct: false},
		]
	},
	{
		question: "Co následovalo po 1. světové válce?",
		answers: [
		 { text: "Rozpad Rakousko-Uherska", correct: true},
		 { text: "Období baroka", correct: false},
		 { text: "Počátek renesance", correct: false},
		 { text: "Vznik Německé říše", correct: false},
		]
	},
	{
		question: "Do jaké skupiny autorů se řadil Viktor Dyk?",
		answers: [
		 { text: "Lumírovci", correct: false},
		 { text: "Anarchističtí buřiči", correct: true},
		 { text: "Národní obrození", correct: false},
		 { text: "Májovci", correct: false},
		]
	},
	{
		question: "Jaký vliv se v díle projevuje díky autorově příslušnosti?",
		answers: [
		 { text: "Symbolismus", correct: false},
		 { text: "Naturalismus", correct: false},
		 { text: "Realismus", correct: false},
		 { text: "Anarchismus", correct: true},
		]
	},
	{
		question: "Do jakého hlavního literárního směru je Krysař řazen?",
		answers: [
		 { text: "Romantismus", correct: true},
		 { text: "Realismus", correct: false},
		 { text: "Baroko", correct: false},
		 { text: "Naturalismus", correct: false},
		]
	},
	{
		question: "Jaké další prvky se v díle objevují kromě romantismu?",
		answers: [
		 { text: "Klasicismus, baroko, humanismus", correct: false},
		 { text: "Realismus, symbolismus, dekadence", correct: true},
		 { text: "Naturalismus, moderna, renesance", correct: false},
		 { text: "Expresionismus, futurismus, kubismus", correct: false},
		]
	},
	{
		question: "K jakému literárnímu okruhu patří toto dílo?",
		answers: [
		 { text: "Lumírovci", correct: false},
		 { text: "Ruchovci", correct: false},
		 { text: "Májovci", correct: false},
		 { text: "Anarchističtí buřiči", correct: true},
		]
	},
	{
		question: "Kdy působili anarchističtí buřiči?",
		answers: [
		 { text: "V 19. století", correct: false},
		 { text: "Na počátku 20. století", correct: true},
		 { text: "V době renesance", correct: false},
		 { text: "Ve středověku", correct: false},
		]
	},
	{
		question: "Které směry v té době vrcholily?",
		answers: [
		 { text: "Realismus a naturalismus", correct: false},
		 { text: "Futurismus a kubismus", correct: false},
		 { text: "Symbolismus a dekadence", correct: true},
		 { text: "Klasicismus a baroko", correct: false},
		]
	},
	{
		question: "Jaký filozof významně ovlivnil anarchistické buřiče?",
		answers: [
		 { text: "Friedrich Nietzsche", correct: true},
		 { text: "Karl Marx", correct: false},
		 { text: "Immanuel Kant", correct: false},
		 { text: "Jean-Jacques Rousseau", correct: false},
		]
	},
	{
		question: "Co buřiči kritizovali a opovrhovali?",
		answers: [
		 { text: "Náboženství a umění", correct: false},
		 { text: "Společností, konzervativní morálkou a spořádanou existencí", correct: true},
		 { text: "Vědou a technikou", correct: false},
		 { text: "Lidovými tradicemi", correct: false},
		]
	},
	{
		question: "Co propagovali anarchističtí buřiči?",
		answers: [
		 { text: "Rozvoj vědy a techniky", correct: false},
		 { text: "Návrat k náboženské víře", correct: false},
		 { text: "Militarismus, disciplínu, řád", correct: false},
		 { text: "Přirozenou lásku, otevřenou sexualitu, kritiku manželského sňatku", correct: true},
		]
	},
	{
		question: "Jaký životní styl vedli?",
		answers: [
		 { text: "Bohémský", correct: true},
		 { text: "Konzervativní a spořádaný", correct: false},
		 { text: "Náboženský", correct: false},
		 { text: "Politicky úřednický", correct: false},
		]
	},
	{
		question: "Jakými myšlenkami byli ovlivněni?",
		answers: [
		 { text: "Pragmatismem a pozitivismem", correct: false},
		 { text: "Nacionalismem a imperialismem", correct: false},
		 { text: "Idealismem a racionalismem", correct: false},
		 { text: "Anarchismem, antimilitarismem a vitalismem", correct: true},
		]
	},
	{
		question: "Jaké jsou hlavní znaky jejich poezie?",
		answers: [
		 { text: "Složitá forma, volný verš, bez rýmu", correct: false},
		 { text: "Filosofická próza", correct: false},
		 { text: "Jednoduché strofy, pravidelný rytmus, rým a písňovost", correct: true},
		 { text: "Historické eposy bez rytmu", correct: false},
		]
	},
	{
		question: "Kdy se narodil Viktor Dyk?",
		answers: [
		 { text: "1901", correct: false},
		 { text: "1865", correct: false},
		 { text: "1889", correct: false},
		 { text: "1877", correct: true},
		]
	},
	{
		question: "Jaké povolání měl jeho otec?",
		answers: [
		 { text: "učitel", correct: false},
		 { text: "lékař", correct: false},
		 { text: "notář", correct: true},
		 { text: "právník", correct: false},
		]
	},
	{
		question: "Kdo ho významně ovlivnil v dětství?",
		answers: [
		 { text: "jeho babička Marie Patrovská", correct: true},
		 { text: "jeho bratr Ludvík", correct: false},
		 { text: "učitel latiny", correct: false},
		 { text: "dědeček z matčiny strany", correct: false},
		]
	},
	{
		question: "Na jakém gymnáziu studoval?",
		answers: [
		 { text: "v Olomouci", correct: false},
		 { text: "v Brně", correct: false},
		 { text: "v Praze", correct: false},
		 { text: "v Mladé Boleslavi", correct: true},
		]
	},
	{
		question: "Pod jakým pseudonymem publikoval první básně?",
		answers: [
		 { text: "Jarmil", correct: false},
		 { text: "Vlasta", correct: false},
		 { text: "Emil", correct: false},
		 { text: "Milan", correct: true},
		]
	},
	{
		question: "V kterém spolku zastával národní názory?",
		answers: [
		 { text: "Omladina", correct: false},
		 { text: "Lumír", correct: false},
		 { text: "Slavia", correct: true},
		 { text: "Máj", correct: false},
		]
	},
	{
		question: "Jaký byl jeho vztah k Masarykovi?",
		answers: [
		 { text: "silně se s ním názorově rozcházel", correct: true},
		 { text: "pracoval v jeho kanceláři", correct: false},
		 { text: "byl jeho velkým přítelem", correct: false},
		 { text: "překládal jeho texty", correct: false},
		]
	},
	{
		question: "Jaký časopis redigoval v letech 1910–1914?",
		answers: [
		 { text: "Národní listy", correct: false},
		 { text: "Samostatnost", correct: true},
		 { text: "Lumír", correct: false},
		 { text: "Lidové noviny", correct: false},
		]
	},
	{
		question: "Proč byl v roce 1916 uvězněn?",
		answers: [
		 { text: "za vraždu", correct: false},
		 { text: "za anarchismus", correct: false},
		 { text: "za vlastizradu", correct: true},
		 { text: "za účast na povstání", correct: false},
		]
	},
	{
		question: "Která báseň vznikla ve vězení?",
		answers: [
		 { text: "Země mluví", correct: true},
		 { text: "Devátá vlna", correct: false},
		 { text: "Krysař", correct: false},
		 { text: "Marnosti", correct: false},
		]
	},
	{
		question: "Jakou politickou stranu spoluzakládal?",
		answers: [
		 { text: "Československá sociální demokracie", correct: false},
		 { text: "Komunistická strana", correct: false},
		 { text: "Česká strana agrární", correct: false},
		 { text: "Československá strana národně socialistická", correct: true},
		]
	},
	{
		question: "Jakou funkci zastával v letech 1925–1931?",
		answers: [
		 { text: "prezident", correct: false},
		 { text: "senátor", correct: true},
		 { text: "poslanec", correct: false},
		 { text: "ministr", correct: false},
		]
	},
	{
		question: "Kdy a kde zemřel Viktor Dyk?",
		answers: [
		 { text: "1920, Praha", correct: false},
		 { text: "1925, Brno", correct: false},
		 { text: "1935, Vídeň", correct: false},
		 { text: "1931, Chorvatsko", correct: true},
		]
	},
	{
		question: "Jaké znaky měla jeho literární tvorba?",
		answers: [
		 { text: "dekadence, symbolismus, satira", correct: true},
		 { text: "impresionismus", correct: false},
		 { text: "barokní alegorie", correct: false},
		 { text: "socialistický realismus", correct: false},
		]
	},
	{
		question: "Co psal kromě básní?",
		answers: [
		 { text: "nic jiného", correct: false},
		 { text: "pouze romány", correct: false},
		 { text: "divadelní hry", correct: true},
		 { text: "jen kritiky", correct: false},
		]
	},
	{
		question: "Který román Dyka vycházel na pokračování v Lidových novinách?",
		answers: [
		 { text: "Tajemná dobrodružství Alexeje Iványče Kozulinova", correct: true},
		 { text: "Krysař", correct: false},
		 { text: "Prohrané kampaně", correct: false},
		 { text: "Země mluví", correct: false},
		]
	},
	{
		question: "Jak reagoval Dyk na cenzuru během 1. světové války?",
		answers: [
		 { text: "přestal psát", correct: false},
		 { text: "přestěhoval se do Švýcarska", correct: false},
		 { text: "začal psát pouze poezii", correct: false},
		 { text: "pokračoval v publikování článků kritizujících vládu", correct: true},
		]
	},
	{
		question: "Kdo byl jeho politický vzor v mládí, který ho později zklamal?",
		answers: [
		 { text: "T. G. Masaryk", correct: true},
		 { text: "Karel Havlíček", correct: false},
		 { text: "Beneš", correct: false},
		 { text: "Kája Gotík", correct: false},
		]
	},
	{
		question: "Který jeho příbuzný měl zásadní vliv na národnostní toleranci Dyka?",
		answers: [
		 { text: "bratr Ludvík", correct: false},
		 { text: "babička Marie Patrovská", correct: true},
		 { text: "matka", correct: false},
		 { text: "otec", correct: false},
		]
	},
	{
		question: "Kdy se stal řádným členem České akademie věd a umění?",
		answers: [
		 { text: "1920", correct: false},
		 { text: "1930", correct: false},
		 { text: "1925", correct: false},
		 { text: "1923", correct: true},
		]
	},
	{
		question: "Co se stalo s jeho babičkou v roce 1920?",
		answers: [
		 { text: "se přestěhovala", correct: false},
		 { text: "byla uvězněna", correct: false},
		 { text: "zemřela", correct: true},
		 { text: "odjela do Německa", correct: false},
		]
	},
	{
		question: "Jaký styl verše a literární prostředky často používal?",
		answers: [
		 { text: "volný verš a experimentální formy", correct: false},
		 { text: "pravidelný rytmický verš, paradoxy, satira, aforistická úsečnost", correct: true},
		 { text: "pouze epiku", correct: false},
		 { text: "lidové písně", correct: false},
		]
	},
	{
		question: "V jakém městě bydlel Dyk po smrti otce až do své smrti?",
		answers: [
		 { text: "Malá Strana, Praha", correct: false},
		 { text: "Mělník", correct: false},
		 { text: "Brno", correct: false},
		 { text: "Vinohrady, Praha", correct: true},
		]
	},
	{
		question: "Který časopis redigoval společně s dalšími autory od roku 1907?",
		answers: [
		 { text: "Lumír", correct: true},
		 { text: "Samostatnost", correct: false},
		 { text: "Modern revue", correct: false},
		 { text: "Lidové noviny", correct: false},
		]
	},
	{
		question: "Co je typické pro jeho díla podle literární analýzy?",
		answers: [
		 { text: "hluboký humor a fantasy", correct: false},
		 { text: "jasná pointa, paradox, pravidelný rytmický verš", correct: true},
		 { text: "historická přesnost", correct: false},
		 { text: "reportáže a cestopisy", correct: false},
		]
	},
	{
		question: "Která událost nejvíce ovlivnila jeho ranou básnickou tvorbu?",
		answers: [
		 { text: "návštěva Francie", correct: false},
		 { text: "narození bratra", correct: false},
		 { text: "výjimečný stav nad Prahou a zatýkání omladinářů", correct: true},
		 { text: "smrt jeho otce", correct: false},
		]
	},
	{
		question: "Pod jakým pseudonymem vydal své první básně?",
		answers: [
		 { text: "Viktor Souček", correct: true},
		 { text: "Viktor Patrovský", correct: false},
		 { text: "V. Dyk", correct: false},
		 { text: "Ludvík Dyk", correct: false},
		]
	},
	{
		question: "Jaký vliv měla jeho babička Marie Patrovská na jeho život?",
		answers: [
		 { text: "učila ho šachy", correct: false},
		 { text: "odjela do Německa", correct: false},
		 { text: "naučila ho francouzsky", correct: false},
		 { text: "byla oporou a recenzentkou jeho literárních pokusů", correct: true},
		]
	},
	{
		question: "Jak reagoval Dyk po propuštění z vězení v roce 1917?",
		answers: [
		 { text: "stáhl se z veřejného života", correct: false},
		 { text: "stal se radikálnějším a pokračoval v politické činnosti", correct: true},
		 { text: "odjel do Švýcarska", correct: false},
		 { text: "napsal pouze román", correct: false},
		]
	},
	{
		question: "Které politické strany a hnutí Dyk podporoval?",
		answers: [
		 { text: "Socialismu a realismus", correct: false},
		 { text: "Masarykovy liberální kruhy", correct: false},
		 { text: "Státoprávně pokroková strana a Československá národní demokracie", correct: true},
		 { text: "Komunistickou stranu", correct: false},
		]
	},
	{
		question: "Literární směr – další autoři světoví",
		answers: [
		 { text: "Stefan Zweig, Charles Baudelaire, Oscar Wilde", correct: true},
		 { text: "Alexander Sergejevič Puškin, Lev Nikolajevič Tolstoj, Fjodor Michajlovič Dostojevskij", correct: false},
		 { text: "Honoré de Balzac, Gustave Flaubert, Émile Zola", correct: false},
		 { text: "Charles Dickens, Victor Hugo, Johann Wolfgang Goethe", correct: false},
		]
	},
	{
		question: "Literární směr – další autoři čeští",
		answers: [
		 { text: "Božena Němcová, Jan Neruda, Karel Havlíček Borovský", correct: false},
		 { text: "Svatopluk Čech, Karel Čapek, Franz Kafka", correct: false},
		 { text: "Alois Jirásek, Vítězslav Hálek, Karel Jaromír Erben", correct: false},
		 { text: "František Šrámek, Stanislav Kostka Neumann, Petr Bezruč", correct: true},
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
