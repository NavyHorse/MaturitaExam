const questions = [
	{
		question: "Jaký druh je kniha Čekání na Godota?",
		answers: [
		 { text: "Lyrika", correct: false},
		 { text: "Drama", correct: true},
		 { text: "Epika", correct: false},
		]
	},
	{
		question: "Jaká forma je kniha Čekání na Godota?",
		answers: [
		 { text: "Drama", correct: true},
		 { text: "Próza", correct: false},
		 { text: "Poezie", correct: false},
		]
	},
	{
		question: "Jaký žánr je kniha Čekání na Godota?",
		answers: [
		 { text: "Absurdní drama", correct: true},
		 { text: "Román", correct: false},
		 { text: "Novela", correct: false},
		 { text: "Antiutopický román", correct: false},
		]
	},
	{
		question: "Co je hlavní téma knihy?",
		answers: [
		 { text: "nesmyslné opakování a marné čekání, nekonečné a absurdní dohady", correct: true},
		 { text: "varování před diktátorskými režimy a jejich ovládáním lidí, postupná nadřazenost a iluze rovnosti", correct: false},
		 { text: "alegorie, která varuje před vzrůstem nacismu, lidská chamtivost", correct: false},
		 { text: "nepřímá kritika totality, jejích praktik a nesvobody, absurdita normalizace", correct: false},
		]
	},
	{
		question: "Co jsou hlavní motivy knihy?",
		answers: [
		 { text: "alkohol a jeho ničivý vliv, beznaděj, rozklad rodiny a morálních hodnot", correct: false},
		 { text: "čekání, nuda, přátelství, sebevražda, nesmyslnost, marnost, beznaděj", correct: true},
		 { text: "majorova lebka, Jonesova puška, sedm přikázání, štěňata, větrný mlýn", correct: false},
		 { text: "samota, nemoc, okouzlení, inspirace, láska, sexuální orientace, vyšší společnost, Benátky, vidiny a sny", correct: false},
		]
	},
	{
		question: "Kdy byla kniha vydána?",
		answers: [
		 { text: "Dílo nejdříve vycházelo na pokračování v Lidových novinách (1935 - 1936). První knižní vydání bylo roku 1936", correct: false},
		 { text: "1912", correct: false},
		 { text: "Kniha - 1952 a poprvé hrána roku 1953", correct: true},
		 { text: "1945", correct: false},
		]
	},
	{
		question: "Časoprostor - Kdy?",
		answers: [
		 { text: "autorova současnost, dílo se odehrává v průběhu 2 dnů", correct: true},
		 { text: "v rozmezí několika let, pravděpodobně na konci nebo před koncem 2WW", correct: false},
		 { text: "ve 20. století v průběhu několika dní až týdnů", correct: false},
		 { text: "Z díla není možno určit, ve kterém roku se kniha odehrává. Je ale jisté, že se dílo odehrává v meziválečných letech", correct: false},
		]
	},
	{
		question: "Časoprostor - Kde?",
		answers: [
		 { text: "na venkově na fiktivní Panské farmě později přejmenované na Zvířecí farmu v Anglii ve fiktivním městě", correct: false},
		 { text: "Dílo se odehrává po celém světě, primárně ale v Evropě", correct: false},
		 { text: "ve Španělsku v nejmenovaném komplexu v jedné z jeho cel, kde jsou drženi zajatci ze Španělské občanské války", correct: false},
		 { text: "v nespecifikovaném státě i místě, pouze víme, že se odehrává na planině, kde stojí strom", correct: true},
		]
	},
	{
		question: "Jaká je kompozice vnitřní?",
		answers: [
		 { text: "Retrospektivní", correct: false},
		 { text: "Rámcový", correct: false},
		 { text: "Chronologická", correct: true},
		 { text: "Chronologicky, i s retrospektivními prvky", correct: false},
		]
	},
	{
		question: "Jaká je kompozice vnější?",
		answers: [
		 { text: "10 kapitol", correct: false},
		 { text: "Skládá z předmluvy, prologu a 10 obrazů.", correct: false},
		 { text: "4 díly a 51 kapitol", correct: false},
		 { text: "2 dějství, které začínají a končí stejně", correct: true},
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
		 { text: "Vševědoucí vypravěč", correct: false},
		 { text: "Neosobní vypravěč, protože vystupuje v er-formě, zaznamenává chování postav, ale neví, co si myslí.", correct: false},
		 { text: "Personální vypravěč", correct: false},
		]
	},
	{
		question: "Postavy - Vladimír",
		answers: [
		 { text: "Hlavní kladná postava. Je to vězeň odsouzený k smrti, který se musí vyrovnat s myšlenkou vlastní smrti. Když čeká na popravu, tak přemýšlí nad svým životem.", correct: false},
		 { text: "Hlavní kladná postava, vůdce loupežníků a romantický tragický hrdina, který se mstí za křivdu a pravdivě miluje Jarmilu.", correct: false},
		 { text: "Tulák, hlavní postava. Pamatuje si předchozí dny, mívá zápach z úst.", correct: true},
		 { text: "Hlavní záporná postava, symbol Stalina. Prohnaný, touží po moci, vyžene Kuliše a stane se vládcem farmy.", correct: false},
		]
	},
	{
		question: "Postavy - Estragon",
		answers: [
		 { text: "Tulák, pesimista, navrhuje sebevraždu, má problémy s botami a nohami.", correct: true},
		 { text: "Hlavní kladná postava, symbol Trockého. Inteligentní, chce dobro pro zvířata, ale je Napoleonem vyhnán a později obviňován.", correct: false},
		 { text: "Syn pana Povondry, dospívá v průběhu knihy, uklidňuje otce, že vina je společná lidstvu.", correct: false},
		 { text: "Řehořova matka, milující, ale slabá, nedokáže se s proměnou vyrovnat, musí pracovat.", correct: false},
		]
	},
	{
		question: "Postavy - Pozzo",
		answers: [
		 { text: "Symbol propagandy. Mistr manipulace, překrucuje fakta, přepisuje přikázání.", correct: false},
		 { text: "Vedlejší kladná postava. Jedná se o starostlivou starší ženu, která miluje svou dceru, a strachuje se o ní.", correct: false},
		 { text: "Otec, autoritativní a tvrdý, syna postupně zavrhuje, také pracuje.", correct: false},
		 { text: "Bohatý, povýšený a brutální, chová se střídavě přátelsky i agresivně.", correct: true},
		]
	},
	{
		question: "Postavy - Lucky",
		answers: [
		 { text: "Vedlejší záporná postava. Vězeňský lékař, který spíše vězně zkoumá, než aby jim chtěl pomoci. Reprezentuje lhostejnost a brutalitu války.", correct: false},
		 { text: "Vedlejší záporná postava. Je to Čech, který sympatizuje s Němci.", correct: false},
		 { text: "Starý sluha Pozza, zlostný, popletený, podruhé oněměl.", correct: true},
		 { text: "Tvůrce Animalismu, symbol Lenina. Inspiruje zvířata k povstání, brzy po projevu umírá.", correct: false},
		]
	},
	{
		question: "Postavy - Chlapec",
		answers: [
		 { text: "Kladná postava, učí mloky lovit perly, dobromyslný, umírá a končí s ním romantická epocha PES.", correct: false},
		 { text: "Posel od Godotta, hlídač koz, nic si nepamatuje.", correct: true},
		 { text: "Pracující lid, obětavý, silný, ale naivní. Věrně slouží až do vyčerpání, nakonec prodán řezníkovi.", correct: false},
		 { text: "Vedlejší kladná postava. Spoluvězeň Pabla. Je mladý a hysterický. Bojí se smrti, Nic neprovedl, je pouze bratrem anarchisty.", correct: false},
		]
	},
	{
		question: "Postavy - Godott",
		answers: [
		 { text: "Fiktivní postava, zámožný muž, pro něj pracují bratři.", correct: true},
		 { text: "Pracující lid, inteligentnější než Boxer, pečlivá a věrná. Na konci poznává, že lidé a prasata jsou stejní.", correct: false},
		 { text: "Správce u Harpagona, milenec Elisy, ve skutečnosti šlechtic.", correct: false},
		 { text: "Vzdělaní a zámožní muži, kteří si pronajmou pokoj. Po odhalení Řehoře jsou znechuceni.", correct: false},
		]
	},
	{
		question: "Děj?",
		answers: [
		 { text: "Slavný německý spisovatel Gustav von Aschenbach, zničený ztrátou rodiny a zklamaný ze společnosti plné pokrytectví, odjíždí do Benátek. V hotelu potká čtrnáctiletého polského chlapce Tadzia, do něhož se platonicky zamiluje a obdivuje ho jako dokonalý ideál krásy. Jeho fascinace chlapcem se stává inspirací pro tvorbu, ale také odhaluje jeho skryté city. V Benátkách propukne epidemie cholery, přesto Aschenbach odmítá odjet, aby zůstal blízko Tadzia. Když polská rodina odjíždí, Aschenbach se zhroutí a umírá v lehátku pohledem upřeným na chlapce.", correct: false},
		 { text: "Kniha začíná setkáním Vladimíra a Estragona na místě, kde se mají střetnout s Godottem. Přemýšlí zda je toto to správné místo, kde mají čekat, a nakonec řeknou, že ano. Nějakou dobu spolu ještě mluví a hádají se, ale skoro hned se usmiřují. Také mluví o tom, že by se mohli oběsit. Poté na scénu přichází Pozzo a Lucky. Oba tuláci jsou nimi fascinováni. Zajímá je, proč Lucky nepoloží věci, které drží, na zem. Na to jim Pozzo odpoví, protože nechce, aby se ho zbavil. Řekne jim také, že ho hodlá prodat. Pozzovi se s nimi líbí mluvit a nechce se mu odejít, to ale nakonec učiní. Také jim řekne, ať dají Luckymu nějaký rozkaz, tak mu zadají nejdříve tancovat a poté přemýšlet. Ani jedna z těchto aktivit se jim ale v jeho provedení nelíbí. Po chvíli k nim přijde malý chlapec, který pracuje pro Godotta, a řekne jim, že přijde zítra. Další den se Vladimír zde opět setkává s Estragonem, který byl prý zase, jako minule, zbit. Vladimír si pamatuje na věci ze včerejška, ale Estragon ne, nebo to alespoň nepřiznává. Zase spolu nějakou dobu mluví, hádají se a usmiřují. Znovu přichází Pozzo a Lucky, ale ani jeden je nezná. Pozzo je nyní prý slepý a Lucky němý. Pozzo je na Vladimíra a Estragona, také vcelku agresivní. Oba poté odcházejí a za nimi přijde chlapec, který si také nic z minula nepamatuje a také je trošku jiný než včera, a znovu jim oznamuje, že dnes Godott nepřijde. Na konci knihy se pokoušejí Vladimír s Estragonem oběsit na stromě, ale jediné lano, které mají po ruce, jim praskne. Poté odcházejí a je pravděpodobné, že se plánují další den vrátit na to stejné místo.", correct: true},
		 { text: "Kapitán Van Toch objeví na ostrově Tana Masa inteligentní mloky, které učí lovit perly a bránit se proti žralokům. Po návratu do Čech uzavírá obchod s G. H. Bondym, čímž vzniká Pacifická Exportní Společnost (PES). Van Toch rozváží mloky po dalších ostrovech, kde se stávají pracovní silou. Syn boháče Abe Loeb a jeho přítelkyně Li mloky poprvé spatří; Li se jich bojí, ale později chce natáčet film. Po Van Tochově smrti mloci slouží lidem, postupně se množí a stávají se inteligentnějšími. Druhá část popisuje jejich společenský vývoj, vědecký výzkum a právní otázky. Mloci začínají ohrožovat lidi, žádají pevniny a rozpoutávají válku. Na konci knihy se ukazuje, že se dokázali adaptovat i na sladkou vodu a jeden mlok se objevuje ve Vltavě. Závěr tvoří dialog autora s jeho vnitřním hlasem, který rozhoduje o přežití lidstva. Mloci se nakonec vyhubí sami, lidé se vracejí a pevniny se postupně obnovují.", correct: false},
		 { text: "Kniha začíná na Panské farmě někde na venkově ve fiktivním městě v Anglii, kde vládne tvrdou rukou pan Jones. Jednu noc si všechna zvířata k sobě zavolá starý Major, který jim představí myšlenku Animalismu. Pár dní na to Major umírá na stáří. Dalšího dne, když zvířata nedostávají nažrat, vzbouří se proti Jonesovi a jeho lidem, které z farmy vyženou a farmu přejmenují na Zvířecí farmu, na které se jim ze začátku vede lépe než s lidmi. Velení se ujímají dva vepři, Kuliš a Napoleon. Tito vepři sepisují myšlenku Animalismu do sedmi přikázání. Zatímco Kuliš chce pro všechna zvířata to nejlepší, Napoleon chce to nejlepší pouze pro prasata, a hlavně pro sebe. Lidé jednou zaútočí na farmu tu, ale zvířata uchrání. Kuliš chce postavit větrný mlýn, ale Napoleon je proti tomu. Za nějakou dobu Napoleon vyžene Kuliše z farmy za pomocí svých vytrénovaných psů. Po vyhnání Kuliše Napoleon prohlásí, že chce postavit větrný mlýn a že Kuliš byl Jonesův spojenec. Větrný mlýn je za značné námahy postaven, ale záhy zničen při útoku lidí, kteří ho vyhodí do vzduchu dynamitem. Tudíž práce může začít od začátku. Postupem času se prasat stávají čím dál tím nadřazenější ostatním zvířatům, a Pištík mění sedm přikázání, aby to nikomu nepřišlo podezřelé. Prasata začínají obchodovat s lidmi z okolního světa za pomocí pana Whympera. Psi zabijí každého, kdo klade odpor Napoleonovi. Na konci knihy se prasata spojují s lidmi, a klisna Lupina si prohlíží jejich a lidské obličeje a nevidí v nich rozdíl.", correct: false},
		]
	},
	{
		question: "Je zde veršová výstavba?",
		answers: [
		 { text: "Střídavý (a, b, a, b), obkročný (a, b, b, a), sdružený verš (a, a, b, b)", correct: false},
		 { text: "Není, protože to je prozaický text.", correct: false},
		 { text: "Je pouze v malém úryvku, kde Vladimír zpívá. Zde je rým volný.", correct: true},
		 { text: "Střídavý (a, b, a, b) a sdružený (a, a, b, b)", correct: false},
		]
	},
	{
		question: "Jaké jsou zde typy promluv?",
		answers: [
		 { text: "Jen monolog", correct: false},
		 { text: "Žádné", correct: false},
		 { text: "Jen dialog", correct: true},
		 { text: "Jak monilog, tak také i dialog", correct: false},
		]
	},
	{
		question: "Jaký konflikt začíná po 2. světové válce?",
		answers: [
		 { text: "První světová válka", correct: false},
		 { text: "Občanská válka v USA", correct: false},
		 { text: "Korejská válka", correct: false},
		 { text: "Studená válka mezi USA a SSSR", correct: true},
		]
	},
	{
		question: "Co vzniká jako reakce na tehdejší společnost?",
		answers: [
		 { text: "Kontrakultura (kultura, jejíž hodnoty a normy chování se podstatně liší od většinové společnost)", correct: true},
		 { text: "Realismus", correct: false},
		 { text: "Romantismus", correct: false},
		 { text: "Humanismus", correct: false},
		]
	},
	{
		question: "Které hnutí vzniklo v USA v této době?",
		answers: [
		 { text: "Punk", correct: false},
		 { text: "Feminismus", correct: false},
		 { text: "Hippies", correct: true},
		 { text: "Surrealismus", correct: false},
		]
	},
	{
		question: "V jakém roce nastupuje komunismus?",
		answers: [
		 { text: "1848", correct: false},
		 { text: "1910", correct: false},
		 { text: "1918", correct: false},
		 { text: "1948", correct: true},
		]
	},
	{
		question: "Na kolik částí bylo původně rozděleno Německo a Berlín?",
		answers: [
		 { text: "8", correct: false},
		 { text: "2", correct: false},
		 { text: "4", correct: true},
		 { text: "Nerozdělilo se", correct: false},
		]
	},
	{
		question: "Na kolik částí se Německo a Berlín později rozdělily?",
		answers: [
		 { text: "5", correct: false},
		 { text: "2 (Východní a Západní Německo)", correct: true},
		 { text: "9", correct: false},
		 { text: "Spojilo se", correct: false},
		]
	},
	{
		question: "Kdo nastupuje na britský trůn v této době?",
		answers: [
		 { text: "Jiří VI.", correct: false},
		 { text: "Eduard VIII.", correct: false},
		 { text: "Alžběta II.", correct: true},
		 { text: "Viktorie", correct: false},
		]
	},
	{
		question: "Co se děje s koloniálním systémem?",
		answers: [
		 { text: "Posiluje", correct: false},
		 { text: "Rozpadá se", correct: true},
		 { text: "Nemění se", correct: false},
		 { text: "Vznikají nové kolonie", correct: false},
		]
	},
	{
		question: "Čím byl autor silně ovlivněn?",
		answers: [
		 { text: "Válkou v Koreji", correct: false},
		 { text: "Industrializací", correct: false},
		 { text: "Náboženskou reformací", correct: false},
		 { text: "Poválečnou dobou a nedůvěrou v demokracii", correct: true},
		]
	},
	{
		question: "Jaký pocit má hrdina absurdního dramatu?",
		answers: [
		 { text: "Bezmoc a nesmyslnost života", correct: true},
		 { text: "Štěstí a naplnění", correct: false},
		 { text: "Naději a radost", correct: false},
		 { text: "Bojovnost a odhodlání", correct: false},
		]
	},
	{
		question: "Jak působí rozhovory v absurdním dramatu?",
		answers: [
		 { text: "Jsou logické a smysluplné", correct: false},
		 { text: "Jsou lyrické a poetické", correct: false},
		 { text: "Postrádají logiku", correct: true},
		 { text: "Jsou vědecké", correct: false},
		]
	},
	{
		question: "Co se stává s jazykem v absurdním dramatu?",
		answers: [
		 { text: "Zdokonaluje se", correct: false},
		 { text: "Je básnický", correct: false},
		 { text: "Je formální", correct: false},
		 { text: "Ztrácí sdělovací funkci", correct: true},
		]
	},
	{
		question: "Jaké pocity má hrdina vůči společnosti?",
		answers: [
		 { text: "Odcizení", correct: true},
		 { text: "Spokojenost", correct: false},
		 { text: "Radost", correct: false},
		 { text: "Hrdost", correct: false},
		]
	},
	{
		question: "Jaké prvky se v absurdním dramatu objevují?",
		answers: [
		 { text: "Romantické", correct: false},
		 { text: "Epické", correct: false},
		 { text: "Groteskní", correct: true},
		 { text: "Historické", correct: false},
		]
	},
	{
		question: "Jaké je jednání postav v absurdním dramatu?",
		answers: [
		 { text: "Logické a racionální", correct: false},
		 { text: "Realistické", correct: false},
		 { text: "Pečlivě naplánované", correct: false},
		 { text: "Nepředvídatelné", correct: true},
		]
	},
	{
		question: "Jak je pojata charakteristika postav?",
		answers: [
		 { text: "Psychologicky propracovaná", correct: false},
		 { text: "Velmi podrobná", correct: false},
		 { text: "Minimální", correct: true},
		 { text: "Historicky přesná", correct: false},
		]
	},
	{
		question: "Z čeho absurdní drama vycházelo?",
		answers: [
		 { text: "Avantgardního divadla", correct: true},
		 { text: "Renesančního divadla", correct: false},
		 { text: "Středověkých mystérií", correct: false},
		 { text: "Barokních her", correct: false},
		]
	},
	{
		question: "Kde se Samuel Beckett narodil?",
		answers: [
		 { text: "Francie", correct: false},
		 { text: "Anglie", correct: false},
		 { text: "USA", correct: false},
		 { text: "Irsko", correct: true},
		]
	},
	{
		question: "Co Samuel Beckett významně ovlivnil?",
		answers: [
		 { text: "Romantickou literaturu", correct: false},
		 { text: "Realistické drama", correct: false},
		 { text: "Literární avantgardu 20. století a absurdní drama", correct: true},
		 { text: "Naturalistické romány", correct: false},
		]
	},
	{
		question: "Kam se Beckett přestěhoval během 2. světové války kvůli hrozbě gestapa?",
		answers: [
		 { text: "Německo", correct: false},
		 { text: "Švýcarsko", correct: false},
		 { text: "Jižní Francie", correct: true},
		 { text: "Anglie", correct: false},
		]
	},
	{
		question: "Který jeho román byl první částí francouzsky psané trilogie?",
		answers: [
		 { text: "Molloy", correct: true},
		 { text: "Watt", correct: false},
		 { text: "Murphy", correct: false},
		 { text: "Nepojmenovatelný", correct: false},
		]
	},
	{
		question: "Jaké téma Beckett nejvíce rozvíjí v „Čekání na Godotta“?",
		answers: [
		 { text: "Historické události", correct: false},
		 { text: "Jedinec v absurdním světě a nemožnost komunikace", correct: true},
		 { text: "Romantická láska", correct: false},
		 { text: "Politické ideologie", correct: false},
		]
	},
	{
		question: "Která Beckettova díla patří do jeho francouzsky psané trilogie?",
		answers: [
		 { text: "Murphy, Watt, Molloy", correct: false},
		 { text: "Čekání na Godotta, Konec, Poslední páska", correct: false},
		 { text: "Molloy, Malone umírá, Nepojmenovatelný", correct: true},
		 { text: "Watt, Murphy, Čekání na Godotta", correct: false},
		]
	},
	{
		question: "Kdy Beckett získal Nobelovu cenu?",
		answers: [
		 { text: "1969", correct: true},
		 { text: "1939", correct: false},
		 { text: "1869", correct: false},
		 { text: "2069", correct: false},
		]
	},
	{
		question: "Jaký vliv mělo Beckettovo osobní osamění na jeho tvorbu?",
		answers: [
		 { text: "Žádný vliv", correct: false},
		 { text: "Pouze na romány", correct: false},
		 { text: "Zrcadlilo se v dílech Mal vu mal di a Solo", correct: true},
		 { text: "Pouze na dramatické texty", correct: false},
		]
	},
	{
		question: "Kdy Beckett a jeho manželka zemřeli?",
		answers: [
		 { text: "1900", correct: false},
		 { text: "1945", correct: false},
		 { text: "2000", correct: false},
		 { text: "1989", correct: true},
		]
	},
	{
		question: "Kdy Beckett vydal svůj první román „Murphy“?",
		answers: [
		 { text: "1990", correct: false},
		 { text: "1918", correct: false},
		 { text: "1938", correct: true},
		 { text: "1838", correct: false},
		]
	},
	{
		question: "Kam se Beckett vrátil po skončení 2. světové války?",
		answers: [
		 { text: "Paříž", correct: true},
		 { text: "Irsko", correct: false},
		 { text: "Švýcarsko", correct: false},
		 { text: "Anglie", correct: false},
		]
	},
	{
		question: "Který jeho román nebyl dobře přijat v Anglii?",
		answers: [
		 { text: "Molloy", correct: false},
		 { text: "Malone umírá", correct: false},
		 { text: "Watt", correct: false},
		 { text: "Murphy", correct: true},
		]
	},
	{
		question: "Co Beckett studoval po střední škole?",
		answers: [
		 { text: "Medicínu", correct: false},
		 { text: "Historii", correct: false},
		 { text: "Filozofii a literaturu", correct: true},
		 { text: "Ekonomii", correct: false},
		]
	},
	{
		question: "Který rok se oženil s Suzanne?",
		answers: [
		 { text: "Jen jí rapenul", correct: false},
		 { text: "Po svatbě", correct: false},
		 { text: "1961", correct: true},
		 { text: "Neoženil", correct: false},
		]
	},
	{
		question: "Jaký zdravotní problém měl Beckett na konci života?",
		answers: [
		 { text: "Parkinsonova choroba", correct: true},
		 { text: "Rakovina", correct: false},
		 { text: "Tuberkulóza", correct: false},
		 { text: "Srdeční onemocnění", correct: false},
		]
	},
	{
		question: "Které drama patří mezi jeho nejznámější absurdní hry?",
		answers: [
		 { text: "Watt", correct: false},
		 { text: "Čekání na Godotta", correct: true},
		 { text: "Murphy", correct: false},
		 { text: "Molloy", correct: false},
		]
	},
	{
		question: "Co ovlivnilo Beckettovu tvorbu po návratu do Irska v roce 1930?",
		answers: [
		 { text: "Láska", correct: false},
		 { text: "Cestování", correct: false},
		 { text: "Deprese", correct: true},
		 { text: "Politika", correct: false},
		]
	},
	{
		question: "Které dílo reflektuje Beckettovu zkušenost s nemožností komunikace a ztrátou smyslu života?",
		answers: [
		 { text: "Molloy, Malone umírá, Nepojmenovatelný", correct: true},
		 { text: "Watt", correct: false},
		 { text: "Murphy", correct: false},
		 { text: "Čekání na Godotta", correct: false},
		]
	},
	{
		question: "Kdy Beckett napsal poslední anglicky psané dílo „Watt“?",
		answers: [
		 { text: "1950", correct: false},
		 { text: "Na smrtelné posteli", correct: false},
		 { text: "Než zemřel", correct: false},
		 { text: "1938", correct: true},
		]
	},
	{
		question: "Literární směr – další autoři světoví",
		answers: [
		 { text: "Egon Ervin Kirsch, Arnold Zweig, Erich Maria Remarque", correct: false},
		 { text: "Lev Nikolajevič Tolstoj, Fjodor Michajlovič Dostojevskij", correct: false},
		 { text: "Franza Kafka, Albert Camus, Simone de Beauvoir", correct: false},
		 { text: "Eugene Ionesco, Friedrich Dürrenmatt, Jean Genet", correct: true},
		]
	},
	{
		question: "Literární směr – další autoři čeští",
		answers: [
		 { text: "Václav Havel, Ivan Vyskočil, Pavel Kohout", correct: true},
		 { text: "Josef Karel Šlejha, Ladislav Klíma", correct: false},
		 { text: "Božena Němcová, Karel Hynek Mácha, Alois Jirásek", correct: false},
		 { text: "Karel Čapek, Fráňa Šrámek, Vladislav Vančura", correct: false},
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
