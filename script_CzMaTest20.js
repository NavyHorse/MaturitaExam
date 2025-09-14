const questions = [ 
	{
		question: "Jaký druh je kniha Audience?",
		answers: [
		 { text: "Lyrika", correct: false},
		 { text: "Drama", correct: true},
		 { text: "Epika", correct: false},
		]
	},
	{
		question: "Jaká forma je kniha Audience?",
		answers: [
		 { text: "Drama", correct: true},
		 { text: "Próza", correct: false},
		 { text: "Poezie", correct: false},
		]
	},
	{
		question: "Jaký žánr je kniha Audience?",
		answers: [
		 { text: "Absurdní drama", correct: true},
		 { text: "Román", correct: false},
		 { text: "Novela", correct: false},
		 { text: "Román s hororovými prvky", correct: false},
		]
	},
	{
		question: "Co je hlavní téma knihy?",
		answers: [
		 { text: "pachy a jejich popisy, snaha o dopadení viníka a snaha získat chybějící článek", correct: false},
		 { text: "hrdinství, erotika a usilování, o něco, strach, z toho, že vás někdo sleduje, válka a smrt", correct: false},
		 { text: "utlačující systémy a vzepření proti nim a nakažlivost revolty v tomto prostředí,utlačující systémy a vzepření proti nim a nakažlivost revolty v tomto prostředí", correct: false},
		 { text: "nepřímá kritika totality, jejích praktik a nesvobody, absurdita normalizace", correct: true},
		]
	},
	{
		question: "Co jsou hlavní motivy knihy?",
		answers: [
		 { text: "píšťalka, kanape, zadnice, plachta, razítka, semafor a lilium (lilium - reprezentuje čistotu, nevinost, a krásu)", correct: false},
		 { text: "pivovar, normalizace, StB, pracovní morálka, odkazy na reálné umělce (Gott, Bohdalová, Kohout)", correct: true},
		 { text: "majorova lebka, Jonesova puška, sedm přikázání, štěňata, větrný mlýn", correct: false},
		 { text: "hledání, strach, víra, parfémy, pachy, smrt", correct: false},
		]
	},
	{
		question: "Kdy byla kniha vydána?",
		answers: [
		 { text: "1985", correct: false},
		 { text: "1912", correct: false},
		 { text: "1975", correct: true},
		 { text: "1945", correct: false},
		]
	},
	{
		question: "Časoprostor - Kdy?",
		answers: [
		 { text: "roku 1945, tudíž na konci 2WW, a ve 40. letech 20. století", correct: false},
		 { text: "mezi lety 1736–1766", correct: false},
		 { text: "ve 20. století v průběhu několika dní až týdnů", correct: false},
		 { text: "v 70. letech 20. století, tedy v období normalizace", correct: true},
		]
	},
	{
		question: "Časoprostor - Kde?",
		answers: [
		 { text: "na venkově na fiktivní Panské farmě později přejmenované na Zvířecí farmu v Anglii ve fiktivním městě", correct: false},
		 { text: "v Československu, v nejmenovaném pivovaru ve sládkově kanceláři", correct: true},
		 { text: "Většinou na nádraží v obci Kostomlaty v Protektorátu Čechy a Morava", correct: false},
		 { text: "ve Francii", correct: false},
		]
	},
	{
		question: "Jaká je kompozice vnitřní?",
		answers: [
		 { text: "Retrospektivní", correct: false},
		 { text: "Rámcový", correct: false},
		 { text: "Chronologická", correct: true},
		 { text: "Chronologicky (Ale hlavně v 1. polovině díla se uplatňuje retrospektiva, kdy nám jsou řečeny informace, které předcházely děj. Např.: Proč a jak se chtěl Miloš zabít, Co provedl výpravčí Hubička Zdeničce Svaté a příběhy Milošova otce, dědy a pradědy.)", correct: false},
		]
	},
	{
		question: "Jaká je kompozice vnější?",
		answers: [
		 { text: "1 akt", correct: true},
		 { text: "4 kapitoly", correct: false},
		 { text: "4 díly a 51 kapitol", correct: false},
		 { text: "6 kapitol", correct: false},
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
		question: "Postavy - Ferdinand Vaněk",
		answers: [
		 { text: "Hlavní postava, od dětství se cítí odcizený, posedlý vůní, z milého chlapce se stává chladný vrah. Jeho cílem je vytvořit dokonalý parfém.", correct: false},
		 { text: "Hlavní hrdina, mladý výpravčí, nejistý a nezkušený, touží ztratit panictví. Neúspěch s Mášou vede k pokusu o sebevraždu. Nakonec má intimní styk s Viktorií, poté se obětuje při sabotáži německého vlaku.", correct: false},
		 { text: "Tulák, hlavní postava. Pamatuje si předchozí dny, mívá zápach z úst.", correct: false},
		 { text: "Hlavní postava, plachý a korektní intelektuál, pronásledovaný režimem, pracuje v pivovaru; autorovo alter ego.", correct: true},
		]
	},
	{
		question: "Postavy - Sládek",
		answers: [
		 { text: "Tulák, pesimista, navrhuje sebevraždu, má problémy s botami a nohami.", correct: false},
		 { text: "Jeho nadřízený, hrubý a nespisovný, alkoholik, nespokojený se životem, snaží se podlézat Vaňkovi, touží se setkat s Bohdalovou.", correct: true},
		 { text: "Starý parfumér, závistivý a bez fantazie, využije Grenouillův talent. Umírá při zřícení domu.", correct: false},
		 { text: "Zkušený svůdník, Milošův učitel, známý aférkou se Zdeničkou Svatou. Člen odboje, plánuje sabotáž transportu.", correct: false},
		]
	},
	{
		question: "Postavy - Vedlejší postavy",
		answers: [
		 { text: "Kůň Boxer, Koza Líza, Osel Benjamin", correct: false},
		 { text: "Dívka, matka, vodník", correct: false},
		 { text: "Krysař, Agnes, Dkouhý Kristián", correct: false},
		 { text: "Šerméza (alkoholik, který pracuje v pivovarském sklepě), Mlynárik (pracovník na slivce, který je podle všeho donašeč), Jiřina Bohdalová/Karel Gott (celebrity), Pavel Kohout (intelektuální kamarád Vaňka)", correct: true},
		]
	},
	{
		question: "Děj?",
		answers: [
		 { text: "Na začátku hry přichází Vaněk do sládkovy kanceláře, kde mu skoro okamžitě sládek nabízí pivo. Nejdříve se baví o tom, jak jde život a práce. Poté několikrát přecházejí po různých tématech, která jsou: zda je Šerméza v práci (kvůli jeho časté absenci, nebo neschopnosti pracovat), možnost návštěvy Jiřiny Bohdalové (protože to vypadá, že má o ni sládek zájem), upozorňování na Mlynárika (který se jeví, jako udavač), možnost přesunutí Vaňka do skladu (kde by lépe mohl pokračovat svoji samizdatovou tvorbu), podmínky tohoto přesunutí (musel by sám na sebe donášet). Na konci knihy, protože Vaněk nechce na tyto podmínky přistoupit, tak se sládek na něj rozzlobí. Tento vztek, ale přechází v smutek, za chvíli opile usíná na Vaňkovi. Ten mu položí hlavu na stůl a odchází. Za chvíli, ale znovu klepe na dveře, což způsobuje, že již vystřízlivělý sládek ho znovu přijímá do kanceláře. Zde se, ale Vaněk chová jinak, takže je zde možností, že si tímto způsobem dělá srandu ze sládka.", correct: true},
		 { text: "Děj se odehrává roku 1945, kdy jsou Němci na ústupu. Mladý výpravčí Miloš Hrma, který trpí nízkým sebevědomím a po neúspěšném pokusu o intimní styk s přítelkyní Mášou se dokonce pokusí o sebevraždu, nastupuje znovu do služby na železniční stanici. Tam působí také jeho učitel a svůdník výpravčí Hubička, známý aférou se Zdeničkou Svatou, kvůli níž stanici přijíždí vyšetřovací komise. Miloš stále touží dokázat si svou mužnost. Když se na stanici objeví odbojářka Viktoria Freie, naváže s ní intimní styk, což mu vrátí sebevědomí. Hubička mezitím plánuje sabotáž německého vojenského transportu. Miloš se rozhodne, že bombu shodí ze semaforu. Při akci je zpozorován německým vojákem, s nímž se vzájemně postřelí. Ještě stihne umlčet protivníka a sledovat výbuch transportu, než sám umírá.", correct: false},
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
		 { text: "Jen dialog", correct: true},
		 { text: "Jak monilog, tak také i dialog", correct: false},
		]
	},
	{
		question: "Mezi jakými státy začala studená válka?",
		answers: [
		 { text: "USA a Velká Británie", correct: false},
		 { text: "USA a Japonsko", correct: false},
		 { text: "USA a Čína", correct: false},
		 { text: "USA a SSSR", correct: true},
		]
	},
	{
		question: "Co vzniká jako reakce na společenské a politické události?",
		answers: [
		 { text: "Kontrakultura", correct: true},
		 { text: "Realismus", correct: false},
		 { text: "Modernismus", correct: false},
		 { text: "Kapitalismus", correct: false},
		]
	},
	{
		question: "Jaké hnutí vzniklo v Americe?",
		answers: [
		 { text: "Beatnici", correct: false},
		 { text: "Punk", correct: false},
		 { text: "Hippies", correct: true},
		 { text: "Surrealisté", correct: false},
		]
	},
	{
		question: "Co začalo roku 1948 v Československu?",
		answers: [
		 { text: "Sametová revoluce", correct: false},
		 { text: "Normalizace", correct: false},
		 { text: "Pražské jaro", correct: false},
		 { text: "Nástup komunismu", correct: true},
		]
	},
	{
		question: "Na kolik částí bylo původně rozděleno Německo a Berlín?",
		answers: [
		 { text: "Na 2", correct: false},
		 { text: "Na 3", correct: false},
		 { text: "Na 4", correct: true},
		 { text: "Na 5", correct: false},
		]
	},
	{
		question: "Na kolik částí byly později rozděleny Německo a Berlín?",
		answers: [
		 { text: "5", correct: false},
		 { text: "2", correct: true},
		 { text: "9", correct: false},
		 { text: "30", correct: false},
		]
	}, 
	{
		question: "Jaký životní pocit má bezmocný člověk v absurdním dramatu?",
		answers: [
		 { text: "Radost ze života", correct: false},
		 { text: "Smysluplnost", correct: false},
		 { text: "Že jeho život nemá smysl", correct: true},
		 { text: "Naději na lepší budoucnost", correct: false},
		]
	},
	{
		question: "Co postrádají rozhovory v absurdním dramatu?",
		answers: [
		 { text: "Humor", correct: false},
		 { text: "Logiku", correct: true},
		 { text: "Délku", correct: false},
		 { text: "Výrazné postavy", correct: false},
		]
	},
	{
		question: "Co ztrácí jazyk v absurdním dramatu?",
		answers: [
		 { text: "Krásu", correct: false},
		 { text: "Historickou hodnotu", correct: false},
		 { text: "Umělecký ráz", correct: false},
		 { text: "Sdělovací funkci", correct: true},
		]
	},
	{
		question: "Jaký problém má hrdina absurdního dramatu?",
		answers: [
		 { text: "Neschopnost komunikovat", correct: true},
		 { text: "Hledání bohatství", correct: false},
		 { text: "Přemíru optimismu", correct: false},
		 { text: "Lásku k rodině", correct: false},
		]
	},
	{
		question: "Jaké pocity postavy často trápí?",
		answers: [
		 { text: "Odvaha", correct: false},
		 { text: "Hrdost", correct: false},
		 { text: "Odcizení", correct: true},
		 { text: "Smysluplnost", correct: false},
		]
	},
	{
		question: "Jaké prvky se v absurdním dramatu objevují?",
		answers: [
		 { text: "Náboženské", correct: false},
		 { text: "Vlastenecké", correct: false},
		 { text: "Romantické", correct: false},
		 { text: "Groteskní", correct: true},
		]
	},
	{
		question: "Jaké je jednání postav v absurdním dramatu?",
		answers: [
		 { text: "Nepředvídatelné", correct: true},
		 { text: "Přísně logické", correct: false},
		 { text: "Historicky věrné", correct: false},
		 { text: "Symbolické", correct: false},
		]
	},
	{
		question: "Jaká je charakteristika postav v absurdním dramatu?",
		answers: [
		 { text: "Velmi podrobná", correct: false},
		 { text: "Hrdinská", correct: false},
		 { text: "Minimální", correct: true},
		 { text: "Historická", correct: false},
		]
	},
	{
		question: "Z jakého směru vycházelo absurdní drama?",
		answers: [
		 { text: "Romantismu", correct: false},
		 { text: "Poetismu", correct: false},
		 { text: "Realismu", correct: false},
		 { text: "Avantgardního divadla", correct: true},
		]
	},
	{
		question: "Kdy se narodil Václav Havel?",
		answers: [
		 { text: "1800", correct: false},
		 { text: "1966", correct: false},
		 { text: "1936", correct: true},
		 { text: "2002", correct: false},
		]
	},
	{
		question: "Kdy Václav Havel zemřel?",
		answers: [
		 { text: "2011", correct: true},
		 { text: "Žije dodnes", correct: false},
		 { text: "2020", correct: false},
		 { text: "1999", correct: false},
		]
	},
	{
		question: "Jaké povolání měl Havel kromě spisovatele?",
		answers: [
		 { text: "Malíř", correct: false},
		 { text: "Herec", correct: false},
		 { text: "Režisér", correct: false},
		 { text: "Dramatik", correct: true},
		]
	},
	{
		question: "Co byl Havel zároveň?",
		answers: [
		 { text: "Zastánce komunistického režimu", correct: false},
		 { text: "Člen KSČ", correct: false},
		 { text: "Kritik komunistického režimu", correct: true},
		 { text: "Ministr školství", correct: false},
		]
	},
	{
		question: "Jaký původ měla Havlova rodina?",
		answers: [
		 { text: "Dělnický", correct: false},
		 { text: "Rolnický", correct: false},
		 { text: "Intelektuálský", correct: true},
		 { text: "Vojenský", correct: false},
		]
	},
	{
		question: "Jaký obor mohl studovat, protože mu nebyly umožněny humanitní?",
		answers: [
		 { text: "Chemický laborant", correct: true},
		 { text: "Strojírenství", correct: false},
		 { text: "Obchod", correct: false},
		 { text: "Architektura", correct: false},
		]
	},
	{
		question: "Kdy ukončil studium chemického laboranta?",
		answers: [
		 { text: "1966", correct: false},
		 { text: "1954", correct: true},
		 { text: "1854", correct: false},
		 { text: "2000", correct: false},
		]
	},
	{
		question: "Jakou školu Havel po dvou letech opustil?",
		answers: [
		 { text: "Humanitní fakultu", correct: false},
		 { text: "Pedagogickou fakultu", correct: false},
		 { text: "Technickou školu", correct: true},
		 { text: "Lékařskou fakultu", correct: false},
		]
	},
	{
		question: "Co dělal po vojenské službě?",
		answers: [
		 { text: "Divadelního technika", correct: true},
		 { text: "Novináře", correct: false},
		 { text: "Úředníka", correct: false},
		 { text: "Knihovníka", correct: false},
		]
	},
	{
		question: "V jakých divadlech pracoval jako technik?",
		answers: [
		 { text: "Národní divadlo a Semafor", correct: false},
		 { text: "Hudební divadlo Karlín a Minor", correct: false},
		 { text: "Divadlo ABC a Divadlo Na zábradlí", correct: true},
		 { text: "Laterna magika a Reduta", correct: false},
		]
	},
	{
		question: "Kdy začal dálkově studovat dramaturgii na AMU?",
		answers: [
		 { text: "1999", correct: false},
		 { text: "1915", correct: false},
		 { text: "Nestudoval", correct: false},
		 { text: "1962", correct: true},
		]
	},
	{
		question: "Jaký text tvořil základ pro jeho hru Ztížená možnost soustředění?",
		answers: [
		 { text: "Politický článek", correct: false},
		 { text: "Diplomová práce", correct: false},
		 { text: "Komentář k jiné hře", correct: true},
		 { text: "Recenze", correct: false},
		]
	},
	{
		question: "V kterém roce si vzal Olgu Šplíchalovou?",
		answers: [
		 { text: "1964", correct: true},
		 { text: "1999", correct: false},
		 { text: "1916", correct: false},
		 { text: "2002", correct: false},
		]
	},
	{
		question: "Jak Havel popisoval Olgu?",
		answers: [
		 { text: "Jako inspiraci", correct: false},
		 { text: "Jako svou múzu", correct: false},
		 { text: "Jako svou spoluautorku", correct: false},
		 { text: "Jako svou oporu", correct: true},
		]
	},
	{
		question: "Od kolika let začal Havel publikovat studie a články?",
		answers: [
		 { text: "Od 25", correct: false},
		 { text: "Od 16", correct: false},
		 { text: "Od 20", correct: true},
		 { text: "Od 40", correct: false},
		]
	},
	{
		question: "Kde publikoval své první texty?",
		answers: [
		 { text: "V Divadle Na zábradlí", correct: true},
		 { text: "V novinách Rudé právo", correct: false},
		 { text: "V časopise Literární noviny", correct: false},
		 { text: "V nakladatelství Odeon", correct: false},
		]
	},
	{
		question: "Jak se jmenuje jeho zásadní první hra z roku 1963?",
		answers: [
		 { text: "Protest", correct: false},
		 { text: "Audience", correct: false},
		 { text: "Vernisáž", correct: false},
		 { text: "Zahradní slavnost", correct: true},
		]
	},
	{
		question: "Jakých republik byl prezidentem?",
		answers: [
		 { text: "ČSSR a ČR", correct: false},
		 { text: "SR a ČR", correct: false},
		 { text: "ČSFR a ČR", correct: true},
		 { text: "Nebyl prezidentem", correct: false},
		]
	},
	{
		question: "Jaká to byla období?",
		answers: [
		 { text: "1990-2010 a 2014-2016", correct: false},
		 { text: "1991–1992 a 1993–2003", correct: true},
		 { text: "1930-1950 a 2005-2009", correct: false},
		 { text: "1980-1985 a 1990-1995", correct: false},
		]
	},
	{
		question: "Literární směr – další autoři světoví",
		answers: [
		 { text: "Samuel Beckett, Eugène Ionesco, Friedrich Dürrenmatt, Harold Pinter", correct: true},
		 { text: "Jack Kerouac, Allen Ginsberg, William S. Burroughs", correct: false},
		 { text: "Jelikož se jedná o Poetismus, který se nikdy neuchytil za hranicemi ČSR, nejsou zde žádní cizí autoři, kteří by v tomto směru psali.", correct: false},
		 { text: "Jean Genet, Karel Čapek, Your mother", correct: false},
		]
	},
	{
		question: "Literární směr – další autoři čeští",
		answers: [
		 { text: "Vladislav Vančura, Vítězslav Nezval, Jaroslav Seifert", correct: false},
		 { text: "Pavel Kohout, Bohumil Hrabal, Josef Škvorecký, Ivan Klíma", correct: true},
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
