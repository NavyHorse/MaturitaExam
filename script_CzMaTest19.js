const questions = [ 
	{
		question: "Jaký druh je kniha Ostře sledované vlaky?",
		answers: [
		 { text: "Lyrika", correct: false},
		 { text: "Drama", correct: false},
		 { text: "Epika", correct: true},
		]
	},
	{
		question: "Jaká forma je kniha Ostře sledované vlaky?",
		answers: [
		 { text: "Drama", correct: false},
		 { text: "Próza", correct: true},
		 { text: "Poezie", correct: false},
		]
	},
	{
		question: "Jaký žánr je kniha Ostře sledované vlaky?",
		answers: [
		 { text: "Absurdní drama", correct: false},
		 { text: "Román", correct: false},
		 { text: "Novela", correct: true},
		 { text: "Román s hororovými prvky", correct: false},
		]
	},
	{
		question: "Co je hlavní téma knihy?",
		answers: [
		 { text: "pachy a jejich popisy, snaha o dopadení viníka a snaha získat chybějící článek", correct: false},
		 { text: "hrdinství, erotika a usilování, o něco, strach, z toho, že vás někdo sleduje, válka a smrt", correct: true},
		 { text: "utlačující systémy a vzepření proti nim a nakažlivost revolty v tomto prostředí,utlačující systémy a vzepření proti nim a nakažlivost revolty v tomto prostředí", correct: false},
		 { text: "nepřímá kritika totality, jejích praktik a nesvobody, absurdita normalizace", correct: false},
		]
	},
	{
		question: "Co jsou hlavní motivy knihy?",
		answers: [
		 { text: "píšťalka, kanape, zadnice, plachta, razítka, semafor a lilium (lilium - reprezentuje čistotu, nevinost, a krásu)", correct: true},
		 { text: "čekání, nuda, přátelství, sebevražda, nesmyslnost, marnost, beznaděj", correct: false},
		 { text: "majorova lebka, Jonesova puška, sedm přikázání, štěňata, větrný mlýn", correct: false},
		 { text: "hledání, strach, víra, parfémy, pachy, smrt", correct: false},
		]
	},
	{
		question: "Kdy byla kniha vydána?",
		answers: [
		 { text: "1985", correct: false},
		 { text: "1912", correct: false},
		 { text: "1965", correct: true},
		 { text: "1945", correct: false},
		]
	},
	{
		question: "Časoprostor - Kdy?",
		answers: [
		 { text: "roku 1945, tudíž na konci 2WW, a ve 40. letech 20. století", correct: true},
		 { text: "mezi lety 1736–1766", correct: false},
		 { text: "ve 20. století v průběhu několika dní až týdnů", correct: false},
		 { text: "po 2 WW, takže 20. století", correct: false},
		]
	},
	{
		question: "Časoprostor - Kde?",
		answers: [
		 { text: "na venkově na fiktivní Panské farmě později přejmenované na Zvířecí farmu v Anglii ve fiktivním městě", correct: false},
		 { text: "v psychiatrické léčebně v Oregonu v USA", correct: false},
		 { text: "Většinou na nádraží v obci Kostomlaty v Protektorátu Čechy a Morava", correct: true},
		 { text: "ve Francii", correct: false},
		]
	},
	{
		question: "Jaká je kompozice vnitřní?",
		answers: [
		 { text: "Retrospektivní", correct: false},
		 { text: "Rámcový", correct: false},
		 { text: "Chronologická", correct: false},
		 { text: "Chronologicky (Ale hlavně v 1. polovině díla se uplatňuje retrospektiva, kdy nám jsou řečeny informace, které předcházely děj. Např.: Proč a jak se chtěl Miloš zabít, Co provedl výpravčí Hubička Zdeničce Svaté a příběhy Milošova otce, dědy a pradědy.)", correct: true},
		]
	},
	{
		question: "Jaká je kompozice vnější?",
		answers: [
		 { text: "10 kapitol", correct: false},
		 { text: "4 kapitoly", correct: false},
		 { text: "4 díly a 51 kapitol", correct: false},
		 { text: "6 kapitol", correct: true},
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
		 { text: "Ich-forma", correct: true},
		 { text: "Er-forma ", correct: false},
		 { text: "Není", correct: false},
		]
	},
	{
		question: "Vypravěč dle vyprávěcí roviny?",
		answers: [
		 { text: "Není", correct: false},
		 { text: "Vševědoucí vypravěč", correct: false},
		 { text: "Neosobní vypravěč, protože vystupuje v er-formě, zaznamenává chování postav, ale neví, co si myslí.", correct: false},
		 { text: "Personální vypravěč", correct: true},
		]
	},
	{
		question: "Postavy - Miloš Hrma",
		answers: [
		 { text: "Hlavní postava, od dětství se cítí odcizený, posedlý vůní, z milého chlapce se stává chladný vrah. Jeho cílem je vytvořit dokonalý parfém.", correct: false},
		 { text: "Hlavní hrdina, mladý výpravčí, nejistý a nezkušený, touží ztratit panictví. Neúspěch s Mášou vede k pokusu o sebevraždu. Nakonec má intimní styk s Viktorií, poté se obětuje při sabotáži německého vlaku.", correct: true},
		 { text: "Tulák, hlavní postava. Pamatuje si předchozí dny, mívá zápach z úst.", correct: false},
		 { text: "Vypravěč příběhu, statný muž, předstírá hluchotu, trpí schizofrenií, zpočátku tichý a opatrný.", correct: false},
		]
	},
	{
		question: "Postavy - Výpravčí Hubička",
		answers: [
		 { text: "Tulák, pesimista, navrhuje sebevraždu, má problémy s botami a nohami.", correct: false},
		 { text: "Kriminálník, který se dostane do ústavu místo vězení. Vtipálek, sebevědomý, vzdoruje sestře Ratchedové, nakonec podstoupí lobotomii.", correct: false},
		 { text: "Starý parfumér, závistivý a bez fantazie, využije Grenouillův talent. Umírá při zřícení domu.", correct: false},
		 { text: "Zkušený svůdník, Milošův učitel, známý aférkou se Zdeničkou Svatou. Člen odboje, plánuje sabotáž transportu.", correct: true},
		]
	},
	{
		question: "Postavy - Pan přednosta",
		answers: [
		 { text: "Šéf stanice, prudérní a ctižádostivý, touží po povýšení. Erotiku nenávidí, možná z pocitu závisti.", correct: true},
		 { text: "Konzul z Grasse, otec Laury, inteligentní, logicky chápe hrozbu vraha, snaží se dceru chránit.", correct: false},
		 { text: "Otec, autoritativní a tvrdý, syna postupně zavrhuje, také pracuje.", correct: false},
		 { text: "Hlavní záporná postava, přezdívaná „Velká sestra“. Autoritativní, manipulativní, udržuje absolutní kontrolu.", correct: false},
		]
	},
	{
		question: "Postavy - Máša",
		answers: [
		 { text: "Vedlejší záporná postava. Vězeňský lékař, který spíše vězně zkoumá, než aby jim chtěl pomoci. Reprezentuje lhostejnost a brutalitu války.", correct: false},
		 { text: "Mladý pacient, koktá, závislý na matce, trpí komplexy méněcennosti.", correct: false},
		 { text: "Milošova přítelkyně, věrně ho miluje, věří, že jejich lásku překonají.", correct: true},
		 { text: "Krásná dcera Antoina, Grenouille ji zabije jako poslední oběť pro svůj parfém.", correct: false},
		]
	},
	{
		question: "Postavy - Viktorie Freie",
		answers: [
		 { text: "Majitelka voňavkářské dílny v Grasse, ujme se Grenouilla, pracovitá a laskavá.", correct: false},
		 { text: "Inteligentní, žárlivý, zástupce pacientů, skeptický k úspěchu vzpoury.", correct: false},
		 { text: "Pracující lid, obětavý, silný, ale naivní. Věrně slouží až do vyčerpání, nakonec prodán řezníkovi.", correct: false},
		 { text: "Krásná dívka napojená na odboj, s Milošem naváže intimní styk, aby mu dodala sebevědomí.", correct: true},
		]
	},
	{
		question: "Postavy - Milošovi rodiče",
		answers: [
		 { text: "Fiktivní postava, zámožný muž, pro něj pracují bratři.", correct: false},
		 { text: "Milující, otec býval železničář, matka na něj doma čeká.", correct: true},
		 { text: "Milenec Arnulfiové, parfémář, krutý k Grenouillovi, nakonec obětován jako náhražka.", correct: false},
		 { text: "Vzdělaní a zámožní muži, kteří si pronajmou pokoj. Po odhalení Řehoře jsou znechuceni.", correct: false},
		]
	},
	{
		question: "Postavy - Praděda a děda Miloše",
		answers: [
		 { text: "Učenec, na čas Grenouilla ubytuje, umírá kvůli své teorii o fluidech.", correct: false},
		 { text: "Hlavní kladná postava, vůdce loupežníků a romantický tragický hrdina, který se mstí za křivdu a pravdivě miluje Jarmilu.", correct: false},
		 { text: "Praděda vysmíval se ostatním, nakonec zabit kameníky; děda hypnotizér, zabit Němci.", correct: true},
		 { text: "Vypravěč příběhu, statný muž, předstírá hluchotu, trpí schizofrenií, zpočátku tichý a opatrný.", correct: false},
		]
	},
	{
		question: "Postavy - Paní přednostová",
		answers: [
		 { text: "Manželka přednosty, snáší jeho výlevy, občas se mu postaví.", correct: true},
		 { text: "Kriminálník, který se dostane do ústavu místo vězení. Vtipálek, sebevědomý, vzdoruje sestře Ratchedové, nakonec podstoupí lobotomii.", correct: false},
		 { text: "Tvrdý majitel koželužny, kde Grenouille pracuje, zemře jako ostatní, kdo s ním přišli do styku.", correct: false},
		 { text: "Řehořova matka, milující, ale slabá, nedokáže se s proměnou vyrovnat, musí pracovat.", correct: false},
		]
	},
	{
		question: "Postavy - Zdenička Svatá",
		answers: [
		 { text: "Symbol propagandy. Mistr manipulace, překrucuje fakta, přepisuje přikázání.", correct: false},
		 { text: "Vedoucí sirotčince, chladná a bez citu, bere děti jen pro zisk, také nakonec umírá.", correct: false},
		 { text: "Otec, autoritativní a tvrdý, syna postupně zavrhuje, také pracuje.", correct: false},
		 { text: "Telegrafistka, s Hubičkou má aféru s razítky, matka vše udá Gestapu.", correct: true},
		]
	},
	{
		question: "Postavy - Rada Zedníček",
		answers: [
		 { text: "Vedlejší záporná postava. Vězeňský lékař, který spíše vězně zkoumá, než aby jim chtěl pomoci. Reprezentuje lhostejnost a brutalitu války.", correct: false},
		 { text: "Mladý pacient, koktá, závislý na matce, trpí komplexy méněcennosti.", correct: false},
		 { text: "Kolaborant, sympatizuje s Němci, snaží se Hubičku dostat do vězení.", correct: true},
		 { text: "Prodavačka ryb, hned po porodu syna odstrčí, popravena za pokus o vraždu dítěte.", correct: false},
		]
	},
	{
		question: "Děj?",
		answers: [
		 { text: "Kriminálník McMurphy je převezen do psychiatrické léčebny, protože předstírá, že je psychicky nemocný. Zde mají zjistit, zda je opravdu nemocný, nebo pouze simuluje. Zde se dostává na oddělení sestry Ratchedové, kterou skoro okamžitě nemá rád. Postupem času se začne sbližovat s ostatními pacienty kliniky. To nejdříve jde stěží, ale postupem času se s nimi více kamarádí a děla s nimi hlouposti, jako třeba, že je vezme na ryby. Tímto a svým chováním podrývá autoritu sestry Ratchedové, která ho kvůli tomu začíná nesnášet. Takto to nějakou dobu pokračuje do doby, kdy chce McMurphy z kliniky utéct. Na rozloučenou uspořádá oslavu s několika prostitutkami pro ostatní pacienty. Nakonec ale neodejde a ráno je přistihne sestra Ratchedová. Ta, když je vidí jim vynadá, a když vidí Billyho, který byl s prostitutkou v posteli, tak mu řekne, že to řekne jeho matce. To u něj způsobí panickou hrůzu, při které se podřeže. Kvůli tomu McMurphy zaútočí na Ratchedovou, kvůli čemuž je později odvezen mimo toto křídlo a je mu provedena lobotomie. Ostatní z partičky pacientů se postupně dostávají pryč. Na konci knihy indián Bromden z lítosti zabije McMurphyho, a rozhodne se přijmout jeho minulou nabídkou, aby také odešel, tak z kliniky také utíká.", correct: false},
		 { text: "Děj se odehrává roku 1945, kdy jsou Němci na ústupu. Mladý výpravčí Miloš Hrma, který trpí nízkým sebevědomím a po neúspěšném pokusu o intimní styk s přítelkyní Mášou se dokonce pokusí o sebevraždu, nastupuje znovu do služby na železniční stanici. Tam působí také jeho učitel a svůdník výpravčí Hubička, známý aférou se Zdeničkou Svatou, kvůli níž stanici přijíždí vyšetřovací komise. Miloš stále touží dokázat si svou mužnost. Když se na stanici objeví odbojářka Viktoria Freie, naváže s ní intimní styk, což mu vrátí sebevědomí. Hubička mezitím plánuje sabotáž německého vojenského transportu. Miloš se rozhodne, že bombu shodí ze semaforu. Při akci je zpozorován německým vojákem, s nímž se vzájemně postřelí. Ještě stihne umlčet protivníka a sledovat výbuch transportu, než sám umírá.", correct: true},
		 { text: "Kniha začíná na pařížském rybím trhu, kde Grenouillova matka odloží novorozeně do koše, ale dítě přežije a ona je popravena. Jean-Baptiste Grenouille vyrůstá v sirotčinci, děti se ho straní, později pracuje u krutého Grimala v koželužně. Brzy zavraždí první dívku a objeví svou posedlost vůněmi. U parfuméra Baldiniho se naučí techniky výroby parfémů, ale když ho přestane potřebovat, odchází a Baldini i Grimal umírají. Grenouille zjistí, že nemá vlastní pach, pobývá u markýze de la Taillade-Espinasseho, který rovněž zemře. Nakonec zamíří do Grasse, kde začne vraždit dívky, aby získal jejich vůně pro dokonalý parfém. Poslední obětí se stává Laura Richis, dcera konzula Antoina, který se ji marně snaží chránit. Grenouille je chycen a odsouzen k smrti, ale při popravě použije parfém, který lidi uvede do extáze a orgií, takže unikne. Na závěr se vrací na místo svého narození, polije se parfémem a je davem roztrhán na kusy.", correct: false},
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
		question: "Ve kterém období vzniklo toto dílo?",
		answers: [
		 { text: "Po 1. světové válce", correct: false},
		 { text: "V období normalizace", correct: false},
		 { text: "Na začátku 21. století", correct: false},
		 { text: "V 60. letech 20. století", correct: true},
		]
	},
	{
		question: "Jaké prostředí kniha znázorňuje?",
		answers: [
		 { text: "Život v Protektorátu Čechy a Morava na konci 2WW", correct: true},
		 { text: "Život na venkově po válce", correct: false},
		 { text: "Život v Československu po roce 1968", correct: false},
		 { text: "Život za první republiky", correct: false},
		]
	},
	{
		question: "Jaký byl politický kontext v době vzniku knihy?",
		answers: [
		 { text: "Sametová revoluce", correct: false},
		 { text: "Období normalizace", correct: false},
		 { text: "Období uvolnění v ČSR", correct: true},
		 { text: "50. léta – období procesů", correct: false},
		]
	},
	{
		question: "Proč kniha mohla vyjít v ČSR?",
		answers: [
		 { text: "Protože oslavovala režim", correct: false},
		 { text: "Protože byla zakázaná a šířena samizdatem", correct: false},
		 { text: "Protože vznikla v exilu", correct: false},
		 { text: "Protože vznikla v době uvolnění a neoslavovala režim", correct: true},
		]
	},
	{
		question: "Jakým způsobem kniha reagovala na traumata 2WW?",
		answers: [
		 { text: "Historickým popisem událostí", correct: false},
		 { text: "Oslavou hrdinů odboje", correct: false},
		 { text: "Satirickým ukázáním radosti z běžných věcí", correct: true},
		 { text: "Vylíčením jen negativních stránek", correct: false},
		]
	},
	{
		question: "Kde vznikl poetismus?",
		answers: [
		 { text: "Ve Francii", correct: false},
		 { text: "V Československu", correct: true},
		 { text: "V Německu", correct: false},
		 { text: "V Rusku", correct: false},
		]
	}, 
	{
		question: "Jaký je hlavní cíl poetismu?",
		answers: [
		 { text: "Oslava války", correct: false},
		 { text: "Zdůraznění politické ideologie", correct: false},
		 { text: "Zrušení odcizení mezi lidmi", correct: true},
		 { text: "Návrat k minulosti", correct: false},
		]
	},
	{
		question: "Na co se poetismus soustředí?",
		answers: [
		 { text: "Na historii", correct: false},
		 { text: "Na současnost", correct: true},
		 { text: "Na budoucnost", correct: false},
		 { text: "Na mytologii", correct: false},
		]
	},
	{
		question: "Jaký význam mají v poetismu emoce?",
		answers: [
		 { text: "Jsou potlačované", correct: false},
		 { text: "Nejsou důležité", correct: false},
		 { text: "Jsou zcela ignorovány", correct: false},
		 { text: "Jsou velmi důležité", correct: true},
		]
	},
	{
		question: "Jaké věci poetismus oslavuje?",
		answers: [
		 { text: "Běžné každodenní věci", correct: true},
		 { text: "Techniku a stroje", correct: false},
		 { text: "Národní hrdiny", correct: false},
		 { text: "Historické události", correct: false},
		]
	},
	{
		question: "Jaký měl poetismus vztah k civilizaci té doby?",
		answers: [
		 { text: "Plně ji podporoval", correct: false},
		 { text: "Byl k ní neutrální", correct: false},
		 { text: "Odporoval jí", correct: true},
		 { text: "Napodoboval ji", correct: false},
		]
	},
	{
		question: "Do kterých zemí se poetismus rozšířil?",
		answers: [
		 { text: "Do celé Evropy", correct: false},
		 { text: "Do Ameriky", correct: false},
		 { text: "Do Sovětského svazu", correct: false},
		 { text: "Nerozšířil se z ČSR", correct: true},
		]
	},
	{
		question: "Kdy se narodil Bohumil Hrabal?",
		answers: [
		 { text: "1914", correct: true},
		 { text: "1955", correct: false},
		 { text: "1803", correct: false},
		 { text: "2005", correct: false},
		]
	},
	{
		question: "V jakém městě se narodil Hrabal?",
		answers: [
		 { text: "Praha", correct: false},
		 { text: "Nymburk", correct: false},
		 { text: "Židenice", correct: true},
		 { text: "Brno", correct: false},
		]
	},
	{
		question: "Jak se jmenovala Hrabalova manželka?",
		answers: [
		 { text: "Libuše Moníková", correct: false},
		 { text: "Madeleine Albrightová", correct: false},
		 { text: "Marie Kiliánová", correct: false},
		 { text: "Eliška Plevová", correct: true},
		]
	},
	{
		question: "Jaké povolání Hrabal vykonával za války?",
		answers: [
		 { text: "Pojišťovací agent", correct: false},
		 { text: "Učitel", correct: false},
		 { text: "Dělník na železnici", correct: true},
		 { text: "Úředník", correct: false},
		]
	},
	{
		question: "Která Hrabalova kniha je inspirována jeho prací na železnici?",
		answers: [
		 { text: "Ostře sledované vlaky", correct: true},
		 { text: "Příliš hlučná samota", correct: false},
		 { text: "Na hrázi", correct: false},
		 { text: "Obsluhoval jsem anglického krále", correct: false},
		]
	},
	{
		question: "Jaký akademický titul Hrabal získal?",
		answers: [
		 { text: "Mgr.", correct: false},
		 { text: "PhDr.", correct: false},
		 { text: "Ing.", correct: false},
		 { text: "JUDR", correct: true},
		]
	},
	{
		question: "V jakém roce se stal spisovatelem z povolání?",
		answers: [
		 { text: "1800", correct: false},
		 { text: "1990", correct: false},
		 { text: "1963", correct: true},
		 { text: "2000", correct: false},
		]
	},
	{
		question: "Kde si Hrabal pořídil chatu, kam jezdil celý život?",
		answers: [
		 { text: "Libeň", correct: false},
		 { text: "Brno", correct: false},
		 { text: "Kersko", correct: true},
		 { text: "Hradištko", correct: false},
		]
	},
	{
		question: "Které významné zahraniční osobnosti se Hrabal setkal „U Zlatého tygra“?",
		answers: [
		 { text: "Clinton a Albrightová", correct: true},
		 { text: "Brežněv a Dubček", correct: false},
		 { text: "Churchill a De Gaulle", correct: false},
		 { text: "Reagan a Thatcherová", correct: false},
		]
	},
	{
		question: "Jak zemřel Bohumil Hrabal?",
		answers: [
		 { text: "Autonehoda", correct: false},
		 { text: "Pád z okna", correct: true},
		 { text: "Srdeční infarkt", correct: false},
		 { text: "Sebevražda střelnou zbraní", correct: false},
		]
	},
	{
		question: "Který z autorů byl Hrabalovým přítelem?",
		answers: [
		 { text: "Franz Kafka", correct: false},
		 { text: "Jaroslav Seifert", correct: false},
		 { text: "Jiří Kolář", correct: true},
		 { text: "Milan Kundera", correct: false},
		]
	},
	{
		question: "Kolika jazyků se Hrabalovy knihy dočkaly překladu?",
		answers: [
		 { text: "28", correct: true},
		 { text: "90", correct: false},
		 { text: "12", correct: false},
		 { text: "60", correct: false},
		]
	},
	{
		question: "Jak se jmenoval Hrabalův nevlastní bratr?",
		answers: [
		 { text: "Josef Bohuslav", correct: false},
		 { text: "František", correct: false},
		 { text: "Břetislav Josef", correct: true},
		 { text: "Vladimír", correct: false},
		]
	},
	{
		question: "Na které univerzitě studoval práva?",
		answers: [
		 { text: "Masarykova univerzita", correct: false},
		 { text: "Univerzita Komenského", correct: false},
		 { text: "Univerzita Palackého", correct: false},
		 { text: "Univerzita Karlova", correct: true},
		]
	},
	{
		question: "V jakém roce dokončil Hrabal studium práv?",
		answers: [
		 { text: "1912", correct: false},
		 { text: "1960", correct: false},
		 { text: "1946", correct: true},
		 { text: "1899", correct: false},
		]
	},
	{
		question: "Kdy mu byl poprvé zakázán oficiální tisk?",
		answers: [
		 { text: "1970", correct: true},
		 { text: "1999", correct: false},
		 { text: "1916", correct: false},
		 { text: "2002", correct: false},
		]
	},
	{
		question: "Jak se jmenovalo nakladatelství, které vydávalo Hrabalovy knihy?",
		answers: [
		 { text: "Odeon", correct: false},
		 { text: "Mladá fronta", correct: false},
		 { text: "Československý spisovatel", correct: false},
		 { text: "Pražská imaginace", correct: true},
		]
	},
	{
		question: "Který český grafik a výtvarník byl Hrabalův blízký přítel?",
		answers: [
		 { text: "Adolf Born", correct: false},
		 { text: "Josef Lada", correct: false},
		 { text: "Jiří Winter Neprakta", correct: true},
		 { text: "Kamil Lhoták", correct: false},
		]
	},
	{
		question: "Kdo byl Hrabalův vzor, kterého obdivoval?",
		answers: [
		 { text: "Vladimír Boudník", correct: true},
		 { text: "Egon Bondy", correct: false},
		 { text: "Franz Kafka", correct: false},
		 { text: "Karel Čapek", correct: false},
		]
	},
	{
		question: "V jakém roce získal Hrabal titul JUDR?",
		answers: [
		 { text: "1930", correct: false},
		 { text: "1905", correct: false},
		 { text: "1950", correct: false},
		 { text: "1946", correct: true},
		]
	},
	{
		question: "Jak se jmenoval Hrabalův strýc?",
		answers: [
		 { text: "Jiří Kolář", correct: false},
		 { text: "Egon Bondy", correct: false},
		 { text: "Bohuslav Kilián", correct: true},
		 { text: "František Hrabal", correct: false},
		]
	},
	{
		question: "Ve kterém roce se Hrabal stal členem Svazu československých spisovatelů?",
		answers: [
		 { text: "1990", correct: false},
		 { text: "1965", correct: true},
		 { text: "1930", correct: false},
		 { text: "1980", correct: false},
		]
	},
	{
		question: "Kdy se Hrabal přestěhoval s rodiči do Nymburka?",
		answers: [
		 { text: "1990", correct: false},
		 { text: "1960", correct: false},
		 { text: "1930", correct: false},
		 { text: "1919", correct: true},
		]
	},
	{
		question: "S kým se Hrabal setkal v hospodě U Zlatého tygra?",
		answers: [
		 { text: "Václav Havel", correct: true},
		 { text: "Jan Werich", correct: false},
		 { text: "Milan Kundera", correct: false},
		 { text: "Bohuslav Reynek", correct: false},
		]
	},
	{
		question: "Literární směr – další autoři světoví",
		answers: [
		 { text: "Umberto Eco, Gabriel García Márquez, Isabel Allende", correct: false},
		 { text: "Jack Kerouac, Allen Ginsberg, William S. Burroughs", correct: false},
		 { text: "Jelikož se jedná o Poetismus, který se nikdy neuchytil za hranicemi ČSR, nejsou zde žádní cizí autoři, kteří by v tomto směru psali.", correct: true},
		 { text: "Eugene Ionesco, Friedrich Dürrenmatt, Jean Genet", correct: false},
		]
	},
	{
		question: "Literární směr – další autoři čeští",
		answers: [
		 { text: "Vladislav Vančura, Vítězslav Nezval, Jaroslav Seifert", correct: true},
		 { text: "Josef Karel Šlejha, Ladislav Klíma", correct: false},
		 { text: "Božena Němcová, Karel Hynek Mácha, Alois Jirásek", correct: false},
		 { text: "Milan Kundera, Ladislav Fuks, Jiří Kratochvíl", correct: false},
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
