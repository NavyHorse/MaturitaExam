const questions = [ 
	{
		question: "Jaký druh je kniha Parfém: příběh vraha?",
		answers: [
		 { text: "Lyrika", correct: false},
		 { text: "Drama", correct: false},
		 { text: "Epika", correct: true},
		]
	},
	{
		question: "Jaká forma je kniha Parfém: příběh vraha?",
		answers: [
		 { text: "Drama", correct: false},
		 { text: "Próza", correct: true},
		 { text: "Poezie", correct: false},
		]
	},
	{
		question: "Jaký žánr je kniha Parfém: příběh vraha?",
		answers: [
		 { text: "Absurdní drama", correct: false},
		 { text: "Román", correct: false},
		 { text: "Novela", correct: false},
		 { text: "Román s hororovými prvky", correct: true},
		]
	},
	{
		question: "Co je hlavní téma knihy?",
		answers: [
		 { text: "pachy a jejich popisy, snaha o dopadení viníka a snaha získat chybějící článek", correct: false},
		 { text: "varování před diktátorskými režimy a jejich ovládáním lidí, postupná nadřazenost a iluze rovnosti", correct: false},
		 { text: "utlačující systémy a vzepření proti nim a nakažlivost revolty v tomto prostředí,utlačující systémy a vzepření proti nim a nakažlivost revolty v tomto prostředí", correct: true},
		 { text: "nepřímá kritika totality, jejích praktik a nesvobody, absurdita normalizace", correct: false},
		]
	},
	{
		question: "Co jsou hlavní motivy knihy?",
		answers: [
		 { text: "svoboda, kontrola, přetvářka, manipulace, psychická nemoc", correct: false},
		 { text: "čekání, nuda, přátelství, sebevražda, nesmyslnost, marnost, beznaděj", correct: false},
		 { text: "majorova lebka, Jonesova puška, sedm přikázání, štěňata, větrný mlýn", correct: false},
		 { text: "hledání, strach, víra, parfémy, pachy, smrt", correct: true},
		]
	},
	{
		question: "Kdy byla kniha vydána?",
		answers: [
		 { text: "1985", correct: true},
		 { text: "1912", correct: false},
		 { text: "Kniha - 1952 a poprvé hrána roku 1953", correct: false},
		 { text: "1945", correct: false},
		]
	},
	{
		question: "Časoprostor - Kdy?",
		answers: [
		 { text: "autorova současnost, dílo se odehrává v průběhu 2 dnů", correct: false},
		 { text: "mezi lety 1736–1766", correct: true},
		 { text: "ve 20. století v průběhu několika dní až týdnů", correct: false},
		 { text: "po 2 WW, takže 20. století", correct: false},
		]
	},
	{
		question: "Časoprostor - Kde?",
		answers: [
		 { text: "na venkově na fiktivní Panské farmě později přejmenované na Zvířecí farmu v Anglii ve fiktivním městě", correct: false},
		 { text: "v psychiatrické léčebně v Oregonu v USA", correct: false},
		 { text: "ve Španělsku v nejmenovaném komplexu v jedné z jeho cel, kde jsou drženi zajatci ze Španělské občanské války", correct: false},
		 { text: "ve Francii", correct: true},
		]
	},
	{
		question: "Jaká je kompozice vnitřní?",
		answers: [
		 { text: "Retrospektivní", correct: false},
		 { text: "Rámcový", correct: false},
		 { text: "Chronologická", correct: false},
		 { text: "Chronologicky (Začátek má trochu retrospektivní prvky.)", correct: true},
		]
	},
	{
		question: "Jaká je kompozice vnější?",
		answers: [
		 { text: "10 kapitol", correct: false},
		 { text: "4 kapitoly", correct: false},
		 { text: "4 díly a 51 kapitol", correct: true},
		 { text: "2 dějství, které začínají a končí stejně", correct: false},
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
		]
	},
	{
		question: "Vypravěč dle vyprávěcí roviny?",
		answers: [
		 { text: "Není", correct: false},
		 { text: "Vševědoucí vypravěč", correct: true},
		 { text: "Neosobní vypravěč, protože vystupuje v er-formě, zaznamenává chování postav, ale neví, co si myslí.", correct: false},
		 { text: "Personální vypravěč", correct: false},
		]
	},
	{
		question: "Postavy - Jean-Baptiste Grenouille",
		answers: [
		 { text: "Hlavní postava, od dětství se cítí odcizený, posedlý vůní, z milého chlapce se stává chladný vrah. Jeho cílem je vytvořit dokonalý parfém.", correct: true},
		 { text: "Hlavní kladná postava, vůdce loupežníků a romantický tragický hrdina, který se mstí za křivdu a pravdivě miluje Jarmilu.", correct: false},
		 { text: "Tulák, hlavní postava. Pamatuje si předchozí dny, mívá zápach z úst.", correct: false},
		 { text: "Vypravěč příběhu, statný muž, předstírá hluchotu, trpí schizofrenií, zpočátku tichý a opatrný.", correct: false},
		]
	},
	{
		question: "Postavy - Giuseppe Baldini",
		answers: [
		 { text: "Tulák, pesimista, navrhuje sebevraždu, má problémy s botami a nohami.", correct: false},
		 { text: "Kriminálník, který se dostane do ústavu místo vězení. Vtipálek, sebevědomý, vzdoruje sestře Ratchedové, nakonec podstoupí lobotomii.", correct: false},
		 { text: "Starý parfumér, závistivý a bez fantazie, využije Grenouillův talent. Umírá při zřícení domu.", correct: true},
		 { text: "Řehořova matka, milující, ale slabá, nedokáže se s proměnou vyrovnat, musí pracovat.", correct: false},
		]
	},
	{
		question: "Postavy - Antoine Richis",
		answers: [
		 { text: "Symbol propagandy. Mistr manipulace, překrucuje fakta, přepisuje přikázání.", correct: false},
		 { text: "Konzul z Grasse, otec Laury, inteligentní, logicky chápe hrozbu vraha, snaží se dceru chránit.", correct: true},
		 { text: "Otec, autoritativní a tvrdý, syna postupně zavrhuje, také pracuje.", correct: false},
		 { text: "Hlavní záporná postava, přezdívaná „Velká sestra“. Autoritativní, manipulativní, udržuje absolutní kontrolu.", correct: false},
		]
	},
	{
		question: "Postavy - Laura Richis",
		answers: [
		 { text: "Vedlejší záporná postava. Vězeňský lékař, který spíše vězně zkoumá, než aby jim chtěl pomoci. Reprezentuje lhostejnost a brutalitu války.", correct: false},
		 { text: "Mladý pacient, koktá, závislý na matce, trpí komplexy méněcennosti.", correct: false},
		 { text: "Starý sluha Pozza, zlostný, popletený, podruhé oněměl.", correct: false},
		 { text: "Krásná dcera Antoina, Grenouille ji zabije jako poslední oběť pro svůj parfém.", correct: true},
		]
	},
	{
		question: "Postavy - paní Arnulfiová",
		answers: [
		 { text: "Majitelka voňavkářské dílny v Grasse, ujme se Grenouilla, pracovitá a laskavá.", correct: true},
		 { text: "Inteligentní, žárlivý, zástupce pacientů, skeptický k úspěchu vzpoury.", correct: false},
		 { text: "Pracující lid, obětavý, silný, ale naivní. Věrně slouží až do vyčerpání, nakonec prodán řezníkovi.", correct: false},
		 { text: "Vedlejší kladná postava. Spoluvězeň Pabla. Je mladý a hysterický. Bojí se smrti, Nic neprovedl, je pouze bratrem anarchisty.", correct: false},
		]
	},
	{
		question: "Postavy - Dominik Druot",
		answers: [
		 { text: "Fiktivní postava, zámožný muž, pro něj pracují bratři.", correct: false},
		 { text: "Pracující lid, inteligentnější než Boxer, pečlivá a věrná. Na konci poznává, že lidé a prasata jsou stejní.", correct: false},
		 { text: "Milenec Arnulfiové, parfémář, krutý k Grenouillovi, nakonec obětován jako náhražka.", correct: true},
		 { text: "Vzdělaní a zámožní muži, kteří si pronajmou pokoj. Po odhalení Řehoře jsou znechuceni.", correct: false},
		]
	},
	{
		question: "Postavy - Markýz de la Taillade-Espinasse",
		answers: [
		 { text: "Učenec, na čas Grenouilla ubytuje, umírá kvůli své teorii o fluidech.", correct: true},
		 { text: "Hlavní kladná postava, vůdce loupežníků a romantický tragický hrdina, který se mstí za křivdu a pravdivě miluje Jarmilu.", correct: false},
		 { text: "Tulák, hlavní postava. Pamatuje si předchozí dny, mívá zápach z úst.", correct: false},
		 { text: "Vypravěč příběhu, statný muž, předstírá hluchotu, trpí schizofrenií, zpočátku tichý a opatrný.", correct: false},
		]
	},
	{
		question: "Postavy - Grimal",
		answers: [
		 { text: "Tulák, pesimista, navrhuje sebevraždu, má problémy s botami a nohami.", correct: false},
		 { text: "Kriminálník, který se dostane do ústavu místo vězení. Vtipálek, sebevědomý, vzdoruje sestře Ratchedové, nakonec podstoupí lobotomii.", correct: false},
		 { text: "Tvrdý majitel koželužny, kde Grenouille pracuje, zemře jako ostatní, kdo s ním přišli do styku.", correct: true},
		 { text: "Řehořova matka, milující, ale slabá, nedokáže se s proměnou vyrovnat, musí pracovat.", correct: false},
		]
	},
	{
		question: "Postavy - paní Gaillardová",
		answers: [
		 { text: "Symbol propagandy. Mistr manipulace, překrucuje fakta, přepisuje přikázání.", correct: false},
		 { text: "Vedoucí sirotčince, chladná a bez citu, bere děti jen pro zisk, také nakonec umírá.", correct: true},
		 { text: "Otec, autoritativní a tvrdý, syna postupně zavrhuje, také pracuje.", correct: false},
		 { text: "Hlavní záporná postava, přezdívaná „Velká sestra“. Autoritativní, manipulativní, udržuje absolutní kontrolu.", correct: false},
		]
	},
	{
		question: "Postavy - Grenouillova matka",
		answers: [
		 { text: "Vedlejší záporná postava. Vězeňský lékař, který spíše vězně zkoumá, než aby jim chtěl pomoci. Reprezentuje lhostejnost a brutalitu války.", correct: false},
		 { text: "Mladý pacient, koktá, závislý na matce, trpí komplexy méněcennosti.", correct: false},
		 { text: "Starý sluha Pozza, zlostný, popletený, podruhé oněměl.", correct: false},
		 { text: "Prodavačka ryb, hned po porodu syna odstrčí, popravena za pokus o vraždu dítěte.", correct: true},
		]
	},
	{
		question: "Děj?",
		answers: [
		 { text: "Kriminálník McMurphy je převezen do psychiatrické léčebny, protože předstírá, že je psychicky nemocný. Zde mají zjistit, zda je opravdu nemocný, nebo pouze simuluje. Zde se dostává na oddělení sestry Ratchedové, kterou skoro okamžitě nemá rád. Postupem času se začne sbližovat s ostatními pacienty kliniky. To nejdříve jde stěží, ale postupem času se s nimi více kamarádí a děla s nimi hlouposti, jako třeba, že je vezme na ryby. Tímto a svým chováním podrývá autoritu sestry Ratchedové, která ho kvůli tomu začíná nesnášet. Takto to nějakou dobu pokračuje do doby, kdy chce McMurphy z kliniky utéct. Na rozloučenou uspořádá oslavu s několika prostitutkami pro ostatní pacienty. Nakonec ale neodejde a ráno je přistihne sestra Ratchedová. Ta, když je vidí jim vynadá, a když vidí Billyho, který byl s prostitutkou v posteli, tak mu řekne, že to řekne jeho matce. To u něj způsobí panickou hrůzu, při které se podřeže. Kvůli tomu McMurphy zaútočí na Ratchedovou, kvůli čemuž je později odvezen mimo toto křídlo a je mu provedena lobotomie. Ostatní z partičky pacientů se postupně dostávají pryč. Na konci knihy indián Bromden z lítosti zabije McMurphyho, a rozhodne se přijmout jeho minulou nabídkou, aby také odešel, tak z kliniky také utíká.", correct: false},
		 { text: "Kniha začíná setkáním Vladimíra a Estragona na místě, kde se mají střetnout s Godottem. Přemýšlí zda je toto to správné místo, kde mají čekat, a nakonec řeknou, že ano. Nějakou dobu spolu ještě mluví a hádají se, ale skoro hned se usmiřují. Také mluví o tom, že by se mohli oběsit. Poté na scénu přichází Pozzo a Lucky. Oba tuláci jsou nimi fascinováni. Zajímá je, proč Lucky nepoloží věci, které drží, na zem. Na to jim Pozzo odpoví, protože nechce, aby se ho zbavil. Řekne jim také, že ho hodlá prodat. Pozzovi se s nimi líbí mluvit a nechce se mu odejít, to ale nakonec učiní. Také jim řekne, ať dají Luckymu nějaký rozkaz, tak mu zadají nejdříve tancovat a poté přemýšlet. Ani jedna z těchto aktivit se jim ale v jeho provedení nelíbí. Po chvíli k nim přijde malý chlapec, který pracuje pro Godotta, a řekne jim, že přijde zítra. Další den se Vladimír zde opět setkává s Estragonem, který byl prý zase, jako minule, zbit. Vladimír si pamatuje na věci ze včerejška, ale Estragon ne, nebo to alespoň nepřiznává. Zase spolu nějakou dobu mluví, hádají se a usmiřují. Znovu přichází Pozzo a Lucky, ale ani jeden je nezná. Pozzo je nyní prý slepý a Lucky němý. Pozzo je na Vladimíra a Estragona, také vcelku agresivní. Oba poté odcházejí a za nimi přijde chlapec, který si také nic z minula nepamatuje a také je trošku jiný než včera, a znovu jim oznamuje, že dnes Godott nepřijde. Na konci knihy se pokoušejí Vladimír s Estragonem oběsit na stromě, ale jediné lano, které mají po ruce, jim praskne. Poté odcházejí a je pravděpodobné, že se plánují další den vrátit na to stejné místo.", correct: false},
		 { text: "Kniha začíná na pařížském rybím trhu, kde Grenouillova matka odloží novorozeně do koše, ale dítě přežije a ona je popravena. Jean-Baptiste Grenouille vyrůstá v sirotčinci, děti se ho straní, později pracuje u krutého Grimala v koželužně. Brzy zavraždí první dívku a objeví svou posedlost vůněmi. U parfuméra Baldiniho se naučí techniky výroby parfémů, ale když ho přestane potřebovat, odchází a Baldini i Grimal umírají. Grenouille zjistí, že nemá vlastní pach, pobývá u markýze de la Taillade-Espinasseho, který rovněž zemře. Nakonec zamíří do Grasse, kde začne vraždit dívky, aby získal jejich vůně pro dokonalý parfém. Poslední obětí se stává Laura Richis, dcera konzula Antoina, který se ji marně snaží chránit. Grenouille je chycen a odsouzen k smrti, ale při popravě použije parfém, který lidi uvede do extáze a orgií, takže unikne. Na závěr se vrací na místo svého narození, polije se parfémem a je davem roztrhán na kusy.", correct: true},
		 { text: "Kniha začíná na Panské farmě někde na venkově ve fiktivním městě v Anglii, kde vládne tvrdou rukou pan Jones. Jednu noc si všechna zvířata k sobě zavolá starý Major, který jim představí myšlenku Animalismu. Pár dní na to Major umírá na stáří. Dalšího dne, když zvířata nedostávají nažrat, vzbouří se proti Jonesovi a jeho lidem, které z farmy vyženou a farmu přejmenují na Zvířecí farmu, na které se jim ze začátku vede lépe než s lidmi. Velení se ujímají dva vepři, Kuliš a Napoleon. Tito vepři sepisují myšlenku Animalismu do sedmi přikázání. Zatímco Kuliš chce pro všechna zvířata to nejlepší, Napoleon chce to nejlepší pouze pro prasata, a hlavně pro sebe. Lidé jednou zaútočí na farmu tu, ale zvířata uchrání. Kuliš chce postavit větrný mlýn, ale Napoleon je proti tomu. Za nějakou dobu Napoleon vyžene Kuliše z farmy za pomocí svých vytrénovaných psů. Po vyhnání Kuliše Napoleon prohlásí, že chce postavit větrný mlýn a že Kuliš byl Jonesův spojenec. Větrný mlýn je za značné námahy postaven, ale záhy zničen při útoku lidí, kteří ho vyhodí do vzduchu dynamitem. Tudíž práce může začít od začátku. Postupem času se prasat stávají čím dál tím nadřazenější ostatním zvířatům, a Pištík mění sedm přikázání, aby to nikomu nepřišlo podezřelé. Prasata začínají obchodovat s lidmi z okolního světa za pomocí pana Whympera. Psi zabijí každého, kdo klade odpor Napoleonovi. Na konci knihy se prasata spojují s lidmi, a klisna Lupina si prohlíží jejich a lidské obličeje a nevidí v nich rozdíl.", correct: false},
		]
	},
	{
		question: "Je zde veršová výstavba?",
		answers: [
		 { text: "Střídavý (a, b, a, b), obkročný (a, b, b, a), sdružený verš (a, a, b, b)", correct: false},
		 { text: "Není, protože to je prozaický text.", correct: true},
		 { text: "Je pouze v malém úryvku, kde Vladimír zpívá. Zde je rým volný.", correct: false},
		 { text: "Střídavý (a, b, a, b) a sdružený (a, a, b, b)", correct: false},
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
		question: "V kterém roce se odehrávají popisované události?",
		answers: [
		 { text: "2000", correct: false},
		 { text: "1800", correct: false},
		 { text: "1901", correct: false},
		 { text: "1985", correct: true},
		]
	},
	{
		question: "Kdo se stal v roce 1985 vůdcem SSSR?",
		answers: [
		 { text: "Michail Gorbačov", correct: true},
		 { text: "Boris Jelcin", correct: false},
		 { text: "Nikita Chruščov", correct: false},
		 { text: "Leonid Brežněv", correct: false},
		]
	},
	{
		question: "Co naznačoval nástup Gorbačova?",
		answers: [
		 { text: "Počátek nové války", correct: false},
		 { text: "Začátek Velké hospodářské krize", correct: false},
		 { text: "Předzvěst konce Studené války", correct: true},
		 { text: "Rozpad Evropské unie", correct: false},
		]
	},
	{
		question: "Co začalo v roce 1985 vznikat v Evropě?",
		answers: [
		 { text: "Evropská unie", correct: false},
		 { text: "NATO", correct: false},
		 { text: "OSN", correct: false},
		 { text: "Schengenský prostor", correct: true},
		]
	},
	{
		question: "Jaký významný objev byl učiněn v roce 1985?",
		answers: [
		 { text: "Objev Tutanchamonovy hrobky", correct: false},
		 { text: "Objev penicilinu", correct: false},
		 { text: "Nalezen vrak Titaniku", correct: true},
		 { text: "Objev DNA", correct: false},
		]
	},
	{
		question: "Jaká zásadní technologická novinka se objevila v roce 1985?",
		answers: [
		 { text: "První iPhone", correct: false},
		 { text: "První verze Windows", correct: true},
		 { text: "První Google vyhledávač", correct: false},
		 { text: "První PlayStation", correct: false},
		]
	}, 
	{
		question: "Kde došlo v roce 1985 k humanitární krizi?",
		answers: [
		 { text: "V Somálsku", correct: false},
		 { text: "V Koreji", correct: false},
		 { text: "V Etiopii", correct: true},
		 { text: "V Brazílii", correct: false},
		]
	},
	{
		question: "Jaké úsilí následovalo po humanitární krizi v Etiopii?",
		answers: [
		 { text: "Vznik OSN", correct: false},
		 { text: "Humanitární pomoc", correct: true},
		 { text: "Snaha o vojenskou intervenci", correct: false},
		 { text: "Rozpad SSSR", correct: false},
		]
	},
	{
		question: "Jaká slavná herní konzole byla vydána v roce 1985?",
		answers: [
		 { text: "PlayStation", correct: false},
		 { text: "Xbox", correct: false},
		 { text: "Sega Saturn", correct: false},
		 { text: "NES (Nintendo Entertainment System)", correct: true},
		]
	},
	{
		question: "Která událost NENÍ spojena s rokem 1985?",
		answers: [
		 { text: "Pád Berlínské zdi", correct: true},
		 { text: "Vydání NES", correct: false},
		 { text: "První verze Windows", correct: false},
		 { text: "Nalezení vraku Titaniku", correct: false},
		]
	},
	{
		question: "V jakém období vznikla postmoderna?",
		answers: [
		 { text: "V první polovině 20. století", correct: false},
		 { text: "Na počátku 21. století", correct: false},
		 { text: "V druhé polovině 20. století", correct: true},
		 { text: "V 19. století", correct: false},
		]
	},
	{
		question: "Postmoderna vznikla jako reakce na?",
		answers: [
		 { text: "Renesanci", correct: false},
		 { text: "Baroko", correct: false},
		 { text: "Romantismus", correct: false},
		 { text: "Modernu", correct: true},
		]
	},
	{
		question: "Jaký postoj má postmoderna k univerzálním pravdám?",
		answers: [
		 { text: "Odmítá je", correct: true},
		 { text: "Uznává je jako jediné správné", correct: false},
		 { text: "Ignoruje je, ale toleruje jejich existenci", correct: false},
		 { text: "Vyzdvihuje je nad subjektivní prožitky", correct: false},
		]
	},
	{
		question: "Co postmoderna zdůrazňuje?",
		answers: [
		 { text: "Hierarchii hodnot", correct: false},
		 { text: "Návrat k tradici", correct: false},
		 { text: "Pluralitu názorů", correct: true},
		 { text: "Přísný řád", correct: false},
		]
	},
	{
		question: "Jaký je postoj postmoderny k vývoji západní historie?",
		answers: [
		 { text: "Vidí jej jako plynulé zlepšování", correct: false},
		 { text: "Popírá jeho existenci", correct: false},
		 { text: "Chápe ho jako lineární pokrok", correct: false},
		 { text: "Zpochybňuje optimistický pohled", correct: true},
		]
	},
	{
		question: "Jaký důraz postmoderna klade na realitu?",
		answers: [
		 { text: "Na objektivní realitu", correct: false},
		 { text: "Na náboženskou pravdu", correct: false},
		 { text: "Na subjektivní prožitky", correct: true},
		 { text: "Na vědeckou přesnost", correct: false},
		]
	},
	{
		question: "Jak se postmoderna projevuje v literatuře a umění?",
		answers: [
		 { text: "Eklekticismem, ironií a hrou s formou", correct: true},
		 { text: "Striktní formální strukturou", correct: false},
		 { text: "Realismem a přesným popisem", correct: false},
		 { text: "Vyzdvihováním hrdinských činů", correct: false},
		]
	},
	{
		question: "Co znamená pojem „eklekticismus“ v souvislosti s postmodernou?",
		answers: [
		 { text: "Odmítnutí všech starších děl", correct: false},
		 { text: "Používání jen klasických forem", correct: false},
		 { text: "Přísné dodržování originálního stylu", correct: false},
		 { text: "Čerpání ze starších děl a jejich míchání dohromady", correct: true},
		]
	},
	{
		question: "Jak se postmoderna projevuje v architektuře?",
		answers: [
		 { text: "Minimalismem bez ozdob", correct: false},
		 { text: "Striktně gotickými rysy", correct: false},
		 { text: "Kombinací stylů a prvky humoru", correct: true},
		 { text: "Funkcionalismem", correct: false},
		]
	},
	{
		question: "Který prvek NENÍ typický pro postmodernu?",
		answers: [
		 { text: "Ironie", correct: false},
		 { text: "Humor", correct: false},
		 { text: "Přísná hierarchie", correct: true},
		 { text: "Subjektivní prožitek", correct: false},
		]
	},
	{
		question: "Kdy a kde se narodil Patrick Süskind?",
		answers: [
		 { text: "26. 3. 1949 v Ambachu (Německo)", correct: true},
		 { text: "26. 3. 1945 v Mnichově", correct: false},
		 { text: "12. 7. 1949 v Berlíně", correct: false},
		 { text: "26. 3. 1950 v Hamburku", correct: false},
		]
	},
	{
		question: "Jaké povolání měl Süskindův otec?",
		answers: [
		 { text: "Lékař", correct: false},
		 { text: "Spisovatel a novinář", correct: true},
		 { text: "Učitel", correct: false},
		 { text: "Politik", correct: false},
		]
	},
	{
		question: "Kde studoval Patrick Süskind historii?",
		answers: [
		 { text: "V Paříž", correct: false},
		 { text: "V Berlíně", correct: false},
		 { text: "V Mnichově", correct: true},
		 { text: "V Hamburku", correct: false},
		]
	},
	{
		question: "Ve kterém období studoval na univerzitě v Aix-en-Provence?",
		answers: [
		 { text: "1968–1974", correct: true},
		 { text: "1960–1966", correct: false},
		 { text: "1975–1980", correct: false},
		 { text: "1958–1964", correct: false},
		]
	},
	{
		question: "Co charakterizuje Süskindovy hrdiny?",
		answers: [
		 { text: "Jsou úspěšní hrdinové společnosti", correct: false},
		 { text: "Jsou výhradně historické postavy", correct: false},
		 { text: "Jsou antihrdinové – společnost je bere jako outsidery", correct: true},
		 { text: "Jsou pohádkové bytosti", correct: false},
		]
	},
	{
		question: "Které z následujících děl NENAPSAL Patrick Süskind?",
		answers: [
		 { text: "Parfém: příběh vraha", correct: false},
		 { text: "Holub", correct: false},
		 { text: "Pan Sommer", correct: false},
		 { text: "Na cestě", correct: true},
		]
	},
	{
		question: "Jaké ocenění získal v roce 1987?",
		answers: [
		 { text: "Nobelovu cenu za literaturu", correct: false},
		 { text: "Pulitzerovu cenu", correct: false},
		 { text: "World Fantasy Award", correct: true},
		 { text: "Cenu Franze Kafky", correct: false},
		]
	},
	{
		question: "Jaký žánr má jeho nejznámější dílo Parfém: příběh vraha?",
		answers: [
		 { text: "Hororový román", correct: true},
		 { text: "Historický román", correct: false},
		 { text: "Poezie", correct: false},
		 { text: "Autobiografie", correct: false},
		]
	},
	{
		question: "Kolik jazyků měl přeložený román Parfém: příběh vraha?",
		answers: [
		 { text: "20", correct: false},
		 { text: "10", correct: false},
		 { text: "60", correct: false},
		 { text: "49", correct: true},
		]
	},
	{
		question: "Jaký postoj má Patrick Süskind k veřejnému životu a oceněním?",
		answers: [
		 { text: "Vyhledává je a rád vystupuje", correct: false},
		 { text: "Sám oceňuje jiné spisovatele", correct: false},
		 { text: "Straní se společnosti a ocenění odmítá", correct: true},
		 { text: "Pravidelně se účastní literárních soutěží", correct: false},
		]
	},
	{
		question: "Jaký obor kromě historie Patrick Süskind studoval?",
		answers: [
		 { text: "Politologii", correct: true},
		 { text: "Medicínu", correct: false},
		 { text: "Geografii", correct: false},
		 { text: "Chemii", correct: false},
		]
	},
	{
		question: "Jak se jmenovala Süskindova úspěšná divadelní hra?",
		answers: [
		 { text: "Holub", correct: false},
		 { text: "Pan Sommer", correct: false},
		 { text: "Parfém", correct: false},
		 { text: "Kontrabas", correct: true},
		]
	},
	{
		question: "Jaký vztah měl Patrick Süskind k Francii?",
		answers: [
		 { text: "Nikdy tam nežil", correct: false},
		 { text: "Vyučoval tam literaturu", correct: false},
		 { text: "Odešel tam s finanční podporou rodičů, kde psal", correct: true},
		 { text: "Narodil se tam", correct: false},
		]
	},
	{
		question: "Které jeho dílo bylo zfilmováno?",
		answers: [
		 { text: "Pan Sommer", correct: false},
		 { text: "Parfém: příběh vraha", correct: true},
		 { text: "Kontrabas", correct: false},
		 { text: "Holub", correct: false},
		]
	},
	{
		question: "Jaký literární žánr převažuje u Süskindových děl?",
		answers: [
		 { text: "Fantasy", correct: false},
		 { text: "Esejistika", correct: false},
		 { text: "Poezie", correct: false},
		 { text: "Próza", correct: true},
		]
	},
	{
		question: "Jak se jmenuje novela Patricka Süskinda, kde vystupuje postava pana Sommera?",
		answers: [
		 { text: "Pan Sommer", correct: true},
		 { text: "Kontrabas", correct: false},
		 { text: "Holub", correct: false},
		 { text: "Murphy", correct: false},
		]
	},
	{
		question: "Který z jeho románů bývá označován jako bestseller?",
		answers: [
		 { text: "Holub", correct: false},
		 { text: "Pan Sommer", correct: false},
		 { text: "Parfém: příběh vraha", correct: true},
		 { text: "Skříňka s démonem", correct: false},
		]
	},
	{
		question: "Jaký vztah má Süskindova tvorba k antihrdinům?",
		answers: [
		 { text: "Vůbec se v ní nevyskytují", correct: false},
		 { text: "Jejich prostřednictvím kritizuje společnost", correct: true},
		 { text: "Antihrdiny používá jen v raných dílech", correct: false},
		 { text: "Používá je výhradně v poezii", correct: false},
		]
	},
	{
		question: "Který rok získal Patrick Süskind World Fantasy Award?",
		answers: [
		 { text: "1987", correct: true},
		 { text: "1990", correct: false},
		 { text: "1915", correct: false},
		 { text: "2005", correct: false},
		]
	},
	{
		question: "Proč nebyla část jeho rané tvorby zfilmována?",
		answers: [
		 { text: "Kvůli cenzuře", correct: false},
		 { text: "Neuspěly u čtenářů", correct: false},
		 { text: "Šlo pouze o poezii", correct: false},
		 { text: "Autor odmítal jejich adaptaci", correct: true},
		]
	},
	{
		question: "Literární směr – další autoři světoví",
		answers: [
		 { text: "Umberto Eco, Gabriel García Márquez, Isabel Allende", correct: true},
		 { text: "Jack Kerouac, Allen Ginsberg, William S. Burroughs", correct: false},
		 { text: "Franza Kafka, Albert Camus, Simone de Beauvoir", correct: false},
		 { text: "Eugene Ionesco, Friedrich Dürrenmatt, Jean Genet", correct: false},
		]
	},
	{
		question: "Literární směr – další autoři čeští",
		answers: [
		 { text: "Ivan Vyskočil, Pavel Kohout", correct: false},
		 { text: "Josef Karel Šlejha, Ladislav Klíma", correct: false},
		 { text: "Božena Němcová, Karel Hynek Mácha, Alois Jirásek", correct: false},
		 { text: "Milan Kundera, Ladislav Fuks, Jiří Kratochvíl", correct: true},
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
