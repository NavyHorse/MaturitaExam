const questions = [
	{
		question: "Jaký druh je kniha Válka s mloky?",
		answers: [
		 { text: "Lyrika", correct: false},
		 { text: "Drama", correct: false},
		 { text: "Epika", correct: true},
		]
	},
	{
		question: "Jaká forma je kniha Válka s mloky?",
		answers: [
		 { text: "Drama", correct: false},
		 { text: "Próza", correct: true},
		 { text: "Poezie", correct: false},
		]
	},
	{
		question: "Jaký žánr je kniha Válka s mloky?",
		answers: [
		 { text: "Existenciální povídka", correct: false},
		 { text: "Román", correct: true},
		 { text: "Gotická hororová povídka", correct: false},
		 { text: "Absurdní povídka / existenciální novela (ukazuje existenci samotnou, ale i její absurditu)", correct: false},
		]
	},
	{
		question: "Co je hlavní téma knihy?",
		answers: [
		 { text: "poukázání na nelidské chování, kterému jsou podrobeni společenští odpadlíci", correct: false},
		 { text: "zamyšlení nad smrtí a absurditou lidského života, svoboda a bezvýchodnost lidské existence", correct: false},
		 { text: "alegorie, která varuje před vzrůstem nacismu, lidská chamtivost", correct: true},
		 { text: "nepřímá kritika totality, jejích praktik a nesvobody, absurdita normalizace", correct: false},
		]
	},
	{
		question: "Co jsou hlavní motivy knihy?",
		answers: [
		 { text: "alkohol a jeho ničivý vliv, beznaděj, rozklad rodiny a morálních hodnot", correct: false},
		 { text: "proměna, odcizení od společnosti a rodiny, rodinné vztahy a konflikty, osamělost, smrt", correct: false},
		 { text: "matka, touha, ponocný, sklep, hlas, smích, loď, den, krysa a host", correct: false},
		 { text: "mloci, kteří představují nacisty, lidstvo, obchod, průmysl, výstřižky nebo také zbraně", correct: true},
		]
	},
	{
		question: "Kdy byla kniha vydána?",
		answers: [
		 { text: "Dílo nejdříve vycházelo na pokračování v Lidových novinách (1935 - 1936). První knižní vydání bylo roku 1936", correct: true},
		 { text: "1815", correct: false},
		 { text: "1939", correct: false},
		 { text: "2000", correct: false},
		]
	},
	{
		question: "Časoprostor - Kdy?",
		answers: [
		 { text: "v průběhu 2 dnů v průběhu Španělské občanské války (1936 - 1939), takže v 1. polovině 20. století. Přesný rok neznáme", correct: false},
		 { text: "v průběhu několika let na začátku 19. století", correct: false},
		 { text: "v průběhu několika dní pravděpodobně na jaře, ale rok nelze určit", correct: false},
		 { text: "Z díla není možno určit, ve kterém roku se kniha odehrává. Je ale jisté, že se dílo odehrává v meziválečných letech", correct: true},
		]
	},
	{
		question: "Časoprostor - Kde?",
		answers: [
		 { text: "ve Francii v Paříži v domě Harpagona", correct: false},
		 { text: "Dílo se odehrává po celém světě, primárně ale v Evropě", correct: true},
		 { text: "ve Španělsku v nejmenovaném komplexu v jedné z jeho cel, kde jsou drženi zajatci ze Španělské občanské války", correct: false},
		 { text: "v několika Ruských městech, ale primárně v Petrohradě a Moskvě a na venkovském panství Evžena Oněgina, které je v okolí Petrohradu", correct: false},
		]
	},
	{
		question: "Jaká je kompozice vnitřní?",
		answers: [
		 { text: "Retrospektivní", correct: false},
		 { text: "Rámcový", correct: false},
		 { text: "Chronologická", correct: false},
		 { text: "Chronologicky, s pár retrospektivními částmi", correct: true},
		]
	},
	{
		question: "Jaká je kompozice vnější?",
		answers: [
		 { text: "Skládá ze 3 knih, které čítají dohromady 27 kapitol", correct: true},
		 { text: "Skládá z předmluvy, prologu a 10 obrazů", correct: false},
		 { text: "4 díly a 51 kapitol", correct: false},
		 { text: "3 části", correct: false},
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
		question: "Postavy - pan Povondra",
		answers: [
		 { text: "Hlavní kladná postava. Je to vězeň odsouzený k smrti, který se musí vyrovnat s myšlenkou vlastní smrti. Když čeká na popravu, tak přemýšlí nad svým životem.", correct: false},
		 { text: "Hlavní kladná postava, vůdce loupežníků a romantický tragický hrdina, který se mstí za křivdu a pravdivě miluje Jarmilu.", correct: false},
		 { text: "Hlavní kladný hrdina, revolucionář, nespravedlivě odsouzen, nakonec si vezme Dolores.", correct: false},
		 { text: "Hlavní kladná postava, český vrátný, oddaný Bondymu, pyšný na svou roli, později obviňuje sám sebe ze zkázy světa.", correct: true},
		]
	},
	{
		question: "Postavy - Frantík Povondra",
		answers: [
		 { text: "Hlavní kladný hrdina, vlastenecký kat, měl popravit Melichara, ale je poctivý, nakonec si vezme Juanillu.", correct: false},
		 { text: "Krásná dívka, zamiluje se do Krysaře, ale je i milenkou dlouhého Kristiána. Po otěhotnění spáchá sebevraždu.", correct:false},
		 { text: "Syn pana Povondry, dospívá v průběhu knihy, uklidňuje otce, že vina je společná lidstvu.", correct: true},
		 { text: "Řehořova matka, milující, ale slabá, nedokáže se s proměnou vyrovnat, musí pracovat.", correct: false},
		]
	},
	{
		question: "Postavy - kapitán J. van Toch",
		answers: [
		 { text: "Kladná postava, učí mloky lovit perly, dobromyslný, umírá a končí s ním romantická epocha PES.", correct: true},
		 { text: "Vedlejší kladná postava. Jedná se o starostlivou starší ženu, která miluje svou dceru, a strachuje se o ní.", correct: false},
		 { text: "Otec, autoritativní a tvrdý, syna postupně zavrhuje, také pracuje.", correct: false},
		 { text: "Vedlejší kladná postava. Spoluvězeň Pabla. Je mladý a hysterický. Bojí se smrti, Nic neprovedl, je pouze bratrem anarchisty.", correct: false},
		]
	},
	{
		question: "Postavy - G. H. Bondy?",
		answers: [
		 { text: "Vedlejší záporná postava. Vězeňský lékař, který spíše vězně zkoumá, než aby jim chtěl pomoci. Reprezentuje lhostejnost a brutalitu války", correct: false},
		 { text: "Vedlejší záporná postava. Je to Čech, který sympatizuje s Němci.", correct: false},
		 { text: "Vedlejší neutrální postava. Dcera Gervaisy, která kvůli nefunkční rodině skončí jako prostitutka. Jako dítě neposedná a velmi svá.", correct: false},
		 { text: "Neutrální hlavní postava, zámožný Čech, využívá mloky jako pracovní sílu, obchoduje s Van Tochem, jeho osud po vzpouře mloků není znám.", correct: true},
		]
	},
	{
		question: "Postavy - Chief Salamander",
		answers: [
		 { text: "Hlavní záporná postava, záletník a krutý muž, Vilémův otec, který ho v mládí vyhnal z domu; v knize je spíše fiktivní.", correct: false},
		 { text: "Hlavní záporná postava, představuje Hitlera, inteligentní vůdce mloků, vede je ve válce s lidmi.", correct: true},
		 { text: "Správce u Harpagona, milenec Elisy, ve skutečnosti šlechtic.", correct: false},
		 { text: "Vzdělaní a zámožní muži, kteří si pronajmou pokoj. Po odhalení Řehoře jsou znechuceni.", correct: false},
		]
	},
	{
		question: "Postavy - Mloci",
		answers: [
		 { text: "Kladná postava, učí mloky lovit perly, dobromyslný, umírá a končí s ním romantická epocha PES.", correct: false},
		 { text: "Vedlejší kladná postava. Jedná se o starostlivou starší ženu, která miluje svou dceru, a strachuje se o ní.", correct: false},
		 { text: "Neutrální později záporné postavy, inteligentní, přemnoží se, adaptují se a začínají ohrožovat lidi.", correct: true},
		 { text: "Vedlejší kladná postava. Spoluvězeň Pabla. Je mladý a hysterický. Bojí se smrti, Nic neprovedl, je pouze bratrem anarchisty.", correct: false},
		]
	},
	{
		question: "Postavy - King Salamander",
		answers: [
		 { text: "Hlavní kladný hrdina, vlastenecký kat, měl popravit Melichara, ale je poctivý, nakonec si vezme Juanillu.", correct: false},
		 { text: "Krásná dívka, zamiluje se do Krysaře, ale je i milenkou dlouhého Kristiána. Po otěhotnění spáchá sebevraždu.", correct:false},
		 { text: "Syn pana Povondry, dospívá v průběhu knihy, uklidňuje otce, že vina je společná lidstvu.", correct: false},
		 { text: "Vedlejší záporná postava, duchovní vůdce mloků, pravděpodobně lidský, zajišťuje rivalitu ve vedení mloků.", correct: true},
		]
	},
	{
		question: "Postavy - Pan X",
		answers: [
		 { text: "Vedlejší záporná postava. Vězeňský lékař, který spíše vězně zkoumá, než aby jim chtěl pomoci. Reprezentuje lhostejnost a brutalitu války.", correct: false},
		 { text: "Vedlejší kladná postava, autor v díle, snaží se varovat lidi před mloky.", correct: true},
		 { text: "Vedlejší neutrální postava. Dcera Gervaisy, která kvůli nefunkční rodině skončí jako prostitutka. Jako dítě neposedná a velmi svá.", correct: false},
		 { text: "Neutrální hlavní postava, zámožný Čech, využívá mloky jako pracovní sílu, obchoduje s Van Tochem, jeho osud po vzpouře mloků není znám.", correct: false},
		]
	},
	{
		question: "Postavy - Autor",
		answers: [
		 { text: "Karel Čapek, objevuje se v poslední kapitole, jeho vnitřní hlas rozhoduje o osudu lidstva, rozlišuje mezi divokými a „polidštěnými“ mloky.", correct: true},
		 { text: "Hlavní kladná postava, vůdce loupežníků a romantický tragický hrdina, který se mstí za křivdu a pravdivě miluje Jarmilu.", correct: false},
		 { text: "Hlavní kladný hrdina, revolucionář, nespravedlivě odsouzen, nakonec si vezme Dolores.", correct: false},
		 { text: "Hlavní kladná postava, český vrátný, oddaný Bondymu, pyšný na svou roli, později obviňuje sám sebe ze zkázy světa.", correct: false},
		]
	},
	{
		question: "Děj?",
		answers: [
		 { text: "Evžen Oněgin, známý jako „lev salónů“ v Petrohradu, je znuděný a pohrdá lidmi. Po smrti svého strýce dědí jeho venkovský dům. Na venkově se seznámí s idealistickým básníkem Vladimírem Lenským a navštíví dům vdovy Larinové a jejích dvou dcer – Olgy a Taťány. Oněgin Olgu považuje za povrchní, zatímco Taťána se do něj zamiluje a napíše mu dopis, který Oněgin odmítne. Na plese, kdy lidé myslí, že mají Oněgin a Taťána něco společného, tančí Oněgin s Olgou, což rozzlobí Lenského. Ten ho vyzve na duel, který skončí jeho smrtí. Oněgin je zdrcen, považuje ji však za zbytečnou a odjíždí do Petrohradu. Olga se po smrti Lenského rychle vdá za jiného, Taťána odjíždí do Moskvy a provdá se za staršího knížete, který je Oněginovým bratrancem. Po letech se Oněgin s Taťánou setká v Moskvě, vyzná jí lásku, ale Taťána ho odmítne, protože chce zůstat věrná svému muži.", correct: false},
		 { text: "Řehoř Samsa, obchodní cestující, se jednoho rána probudí a zjistí, že se proměnil v obří hmyz. Neschopen vykonávat svou práci, se stává pro rodinu čím dál větší příteží. Postupně se zhoršují vztahy mezi ním a rodinou, která ho začíná nenávidět. Řehoř prožívá pocity osamělosti a odcizení, zatímco se rodina snaží přizpůsobit životu bez jeho finanční podpory. Z Řehoře se stává čím dál tím větší zvíře. Když nestačí práce všech zbývajících členů rodiny, tak si k sobě berou 3 nájemníky. Ti o Řehořovi neví, ale jednoho večera jej uvidí, což je znechutí natolik, že z bytu odejdou. Když to pro rodinu vypadá nejhůř, tak Řehoř umírá, což jeho rodina bere, jako velkou úlevu.", correct: false},
		 { text: "Kapitán Van Toch objeví na ostrově Tana Masa inteligentní mloky, které učí lovit perly a bránit se proti žralokům. Po návratu do Čech uzavírá obchod s G. H. Bondym, čímž vzniká Pacifická Exportní Společnost (PES). Van Toch rozváží mloky po dalších ostrovech, kde se stávají pracovní silou. Syn boháče Abe Loeb a jeho přítelkyně Li mloky poprvé spatří; Li se jich bojí, ale později chce natáčet film. Po Van Tochově smrti mloci slouží lidem, postupně se množí a stávají se inteligentnějšími. Druhá část popisuje jejich společenský vývoj, vědecký výzkum a právní otázky. Mloci začínají ohrožovat lidi, žádají pevniny a rozpoutávají válku. Na konci knihy se ukazuje, že se dokázali adaptovat i na sladkou vodu a jeden mlok se objevuje ve Vltavě. Závěr tvoří dialog autora s jeho vnitřním hlasem, který rozhoduje o přežití lidstva. Mloci se nakonec vyhubí sami, lidé se vracejí a pevniny se postupně obnovují.", correct: true},
		 { text: "Děj sleduje dva vůdce soupeřících stran, dona Blasca Ibaneho a dona Vasca Ibayu, kteří se udrží u moci díky legendě o hrdinech Melicharovi a Gasparovi. Jenže oba údajně mrtví hrdinové ve skutečnosti žijí a vracejí se. Vůdci jsou zaskočeni, ale chtějí je využít a udělat z nich loutkové vládce, aby je pak mohli odstranit. Mezitím se rozvíjí příběh Dolores a Juanilly, které se vzepřou nátlaku na sňatek a podporují hrdiny. Melichar a Gaspar se dostávají do čela státu, ale vládnou jen naoko, zatímco Ibane a Ibayo kují intriky. Do hry vstupuje i úředník don Baltazar Carierra, který se postupně mění v šíleného diktátora. Nakonec se situace vyhrotí – Carierra se chopí moci, začne vraždit a propadá šílenství. V závěru se podaří zachránit jen Melicharovi, Gasparovi, Juanille a Dolores. Carierra končí sebevraždou a ostatní postavy jsou symbolicky znovuzrozeny jako čistí a poctiví lidé.", correct: false},
		]
	},
	{
		question: "Je zde veršová výstavba?",
		answers: [
		 { text: "Střídavý (a, b, a, b), obkročný (a, b, b, a), sdružený verš (a, a, b, b)", correct: false},
		 { text: "Není, protože to je prozaický text.", correct: true},
		 { text: "Triádový (a, a, a, a)", correct: false},
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
		question: "V jakém období vznikla kniha?",
		answers: [
		 { text: "V 18. století", correct: false},
		 { text: "V 19. století", correct: false},
		 { text: "Po 2. světové válce", correct: false},
		 { text: "V 1. polovině 20. století", correct: true},
		]
	},
	{
		question: "Jaký druh děl tvoří tato kniha v rámci Čapkovy tvorby?",
		answers: [
		 { text: "Utopická díla", correct: true},
		 { text: "Hororová díla", correct: false},
		 { text: "Romantická díla", correct: false},
		 { text: "Detektivní díla", correct: false},
		]
	},
	{
		question: "Jaká nebezpečí Čapek ve svých utopických dílech varuje?",
		answers: [
		 { text: "Fašismus, nadměrné užívání technologie, lidská tvrdohlavost a nerozumnost", correct: true},
		 { text: "Ztrátu náboženství", correct: false},
		 { text: "Ekonomickou krizi", correct: false},
		 { text: "Přemnožení zvířat", correct: false},
		]
	},
	{
		question: "Které radikální politické směry se začínají objevovat v Evropě?",
		answers: [
		 { text: "Anarchismus a socialismus", correct: false},
		 { text: "Liberalismus a monarchismus", correct: false},
		 { text: "Demokracie a republikánství", correct: false},
		 { text: "Komunismus v Rusku, fašismus v Itálii, nacismus v Německu", correct: true},
		]
	},
	{
		question: "Kde začíná občanská válka podle textu?",
		answers: [
		 { text: "V Německu", correct: false},
		 { text: "V Itálii", correct: false},
		 { text: "Ve Španělsku", correct: true},
		 { text: "V Rusku", correct: false},
		]
	},
	{
		question: "Do jakého literárního proudu patří dílo?",
		answers: [
		 { text: "Český surrealismus", correct: false},
		 { text: "Česká avantgarda", correct: false},
		 { text: "Český expresionismus", correct: false},
		 { text: "Český demokratický proud", correct: true},
		]
	},
	{
		question: "Kdy se český demokratický proud začal rozvíjet?",
		answers: [
		 { text: "Po 2. světové válce", correct: false},
		 { text: "Na začátku 19. století", correct: false},
		 { text: "Po 1. světové válce", correct: true},
		 { text: "Na konci 20. století", correct: false},
		]
	},
	{
		question: "Které další literární proudy se rozvíjely současně s českým demokratickým proudem?",
		answers: [
		 { text: "Avantgarda, dadaismus a expresionismus", correct: false},
		 { text: "Levicová, duchovní, pesimistická (Skupina 42) a legionářská literatura", correct: true},
		 { text: "Romantismus a realismu", correct: false},
		 { text: "Modernismus a postmodernismus", correct: false},
		]
	},
	{
		question: "Kde primárně publikovali autoři českého demokratického proudu?",
		answers: [
		 { text: "V časopise Tvorba", correct: false},
		 { text: "V časopise Host", correct: false},
		 { text: "V Lidových novinách", correct: true},
		 { text: "V Národních listech", correct: false},
		]
	},
	{
		question: "Co český demokratický proud zdůrazňuje?",
		answers: [
		 { text: "Demokracii a možnost domluvy", correct: true},
		 { text: "Absolutní poslušnost vůči autoritám", correct: false},
		 { text: "Náboženskou uniformitu", correct: false},
		 { text: "Politickou izolaci", correct: false},
		]
	},
	{
		question: "Kde se Karel Čapek narodil?",
		answers: [
		 { text: "Praha", correct: false},
		 { text: "Úpice", correct: false},
		 { text: "Malé Svatoňovice", correct: true},
		 { text: "Brno", correct: false},
		]
	},
	{
		question: "Proč musel Čapek přestoupit na gymnázium v Brně?",
		answers: [
		 { text: "Rodina se přestěhovala", correct: false},
		 { text: "Chyběl mu školní výkon", correct: false},
		 { text: "Chtěl studovat filosofii", correct: false},
		 { text: "Organizoval protirakouský spolek", correct: true},
		]
	},
	{
		question: "Které deníky a časopisy Čapek redigoval?",
		answers: [
		 { text: "Národní listy, Nebojsa, Lidové noviny", correct: true},
		 { text: "Tvorba, Host, Revolver Revue", correct: false},
		 { text: "Československý deník, Pravda", correct: false},
		 { text: "Moderní revue, Nový život", correct: false},
		]
	},
	{
		question: "Jaký vliv měla 1. světová válka na Čapka?",
		answers: [
		 { text: "Žádný", correct: false},
		 { text: "Vyvolala jeho emigraci", correct: false},
		 { text: "Významně ho poznamenala", correct: true},
		 { text: "Přiměla ho stát se vojákem", correct: false},
		]
	},
	{
		question: "Které filozofické směry ovlivnily Čapka?",
		answers: [
		 { text: "Existencialismus a surrealismus", correct: false},
		 { text: "Romantismus a realismu", correct: false},
		 { text: "Dadaismus a impresionismus", correct: false},
		 { text: "Pragmatismus a expresionismus", correct: true},
		]
	},
	{
		question: "Co je typickým znakem Čapkova stylu?",
		answers: [
		 { text: "Jednoduché věty a malá slovní zásoba", correct: false},
		 { text: "Pouze poezie", correct: false},
		 { text: "Obrovská slovní zásoba, rozvitá souvětí", correct: true},
		 { text: "Historické popisy", correct: false},
		]
	},
	{
		question: "Jaké problémy a hrozby reflektuje Čapkovo utopické dílo?",
		answers: [
		 { text: "Zneužití techniky a nástup fašismu", correct: true},
		 { text: "Lidská lenost a chudoba", correct: false},
		 { text: "Romantická láska", correct: false},
		 { text: "Náboženské konflikty", correct: false},
		]
	},
	{
		question: "Jaké části lze rozlišit v Čapkově díle?",
		answers: [
		 { text: "Historická a dobrodružná", correct: false},
		 { text: "Romantická a naturalistická", correct: false},
		 { text: "Poezie a drama", correct: false},
		 { text: "Individualistická a utopická", correct: true},
		]
	},
	{
		question: "S kým Čapek spolupracoval při sloupcích v Lidových novinách?",
		answers: [
		 { text: "Josef Čapek", correct: false},
		 { text: "Jaroslav Hašek", correct: false},
		 { text: "Karel Poláček", correct: true},
		 { text: "Max Brod", correct: false},
		]
	},
	{
		question: "Kdy se Karel Čapek narodil?",
		answers: [
		 { text: "9. 1. 1980", correct: false},
		 { text: "9. 1. 1190", correct: false},
		 { text: "9. 1. 1883", correct: true},
		 { text: "9. 1. 183", correct: false},
		]
	},
	{
		question: "Kde strávil Čapek část dětství?",
		answers: [
		 { text: "Úpice", correct: true},
		 { text: "Brno", correct: false},
		 { text: "Praha", correct: false},
		 { text: "Hradec Králové", correct: false},
		]
	},
	{
		question: "Co studoval na Karlově univerzitě?",
		answers: [
		 { text: "Filologii a historii", correct: false},
		 { text: "Filozofii a estetiku", correct: true},
		 { text: "Právo a ekonomii", correct: false},
		 { text: "Chemii a biologii", correct: false},
		]
	},
	{
		question: "Proč nemusel Čapek narukovat do rakouské armády?",
		answers: [
		 { text: "Byl ještě dítě", correct: false},
		 { text: "Emigroval do Francie", correct: false},
		 { text: "Trpěl Bechtěrevovou nemocí", correct: true},
		 { text: "Byl na studiích v Paříži", correct: false},
		]
	},
	{
		question: "Který časopis spoluzaložil Čapek se svým bratrem?",
		answers: [
		 { text: "Nebojsa", correct: false},
		 { text: "Lidové noviny", correct: false},
		 { text: "Národní listy", correct: false},
		 { text: "Pátečníci", correct: true},
		]
	},
	{
		question: "Kdy se Čapek oženil?",
		answers: [
		 { text: "1935", correct: true},
		 { text: "1835", correct: false},
		 { text: "2035", correct: false},
		 { text: "1905", correct: false},
		]
	},
	{
		question: "Jak reagoval Čapek na Mnichovskou dohodu?",
		answers: [
		 { text: "Odsoudil rozhodnutí prezidenta a vlády", correct: true},
		 { text: "Odešel do emigrace", correct: false},
		 { text: "Podpořil kapitulaci", correct: false},
		 { text: "Začal psát komedie", correct: false},
		]
	},
	{
		question: "Které zdravotní problémy Čapka trápily ke konci života?",
		answers: [
		 { text: "Tuberkulóza", correct: false},
		 { text: "Srdeční selhání", correct: false},
		 { text: "Rakovina", correct: false},
		 { text: "Chřipka, zápal plic a zánět ledvin", correct: true},
		]
	},
	{
		question: "Kde je pohřben Karel Čapek?",
		answers: [
		 { text: "Olšanské hřbitovy", correct: false},
		 { text: "Brněnský hřbitov", correct: false},
		 { text: "Vyšehradský hřbitov", correct: true},
		 { text: "Hřbitov v Úpici", correct: false},
		]
	},
	{
		question: "Jaký vliv měla 1. světová válka na Čapka?",
		answers: [
		 { text: "Žádný", correct: false},
		 { text: "Významně ho poznamenala", correct: true},
		 { text: "Přiměla ho stát se vojákem", correct: false},
		 { text: "Způsobila jeho emigraci", correct: false},
		]
	},
	{
		question: "Jaký druh literatury tvoří Čapkova utopická díla?",
		answers: [
		 { text: "Romantická literatura", correct: false},
		 { text: "Historická próza", correct: false},
		 { text: "Poezie", correct: false},
		 { text: "Sci-fi a utopická literatura", correct: true},
		]
	},
	{
		question: "Co bylo typické pro Čapkův literární styl?",
		answers: [
		 { text: "Jednoduché věty a málo slov", correct: false},
		 { text: "Historické popisy", correct: false},
		 { text: "Pouze poezie", correct: false},
		 { text: "Rozvitá souvětí a obrovská slovní zásoba", correct: true},
		]
	},
	{
		question: "Jaké téma se často objevuje v Čapkových utopických dílech?",
		answers: [
		 { text: "Nebezpečí zneužití techniky a nástup fašismu", correct: true},
		 { text: "Láska mezi lidmi", correct: false},
		 { text: "Náboženské války", correct: false},
		 { text: "Historické události", correct: false},
		]
	},
	{
		question: "Která část Čapkova díla se zabývá hranicemi lidského poznání?",
		answers: [
		 { text: "Romantická část", correct: false},
		 { text: "Utopická část", correct: false},
		 { text: "Individualistická část", correct: true},
		 { text: "Historická část", correct: false},
		]
	},
	{
		question: "Jakou roli sehrála novinářská činnost v Čapkově tvorbě?",
		answers: [
		 { text: "Poskytla podněty a ovlivnila styl jeho literárních děl", correct: true},
		 { text: "Žádnou", correct: false},
		 { text: "Jen mu zajistila finanční zázemí", correct: false},
		 { text: "Byla pouze koníčkem", correct: false},
		]
	},
	{
		question: "Literární směr – další autoři světoví",
		answers: [
		 { text: "Thomas Mann, Erich Maria Remarque, Arnold Zweig ", correct: true},
		 { text: "Lev Nikolajevič Tolstoj, Fjodor Michajlovič Dostojevskij", correct: false},
		 { text: "Franza Kafka, Albert Camus, Simone de Beauvoir", correct: false},
		 { text: "William Shakespeare, Johann Wolfgang Goethe, Walt Whitman", correct: false},
		]
	},
	{
		question: "Literární směr – další autoři čeští",
		answers: [
		 { text: "Josef Škvorecký, Ladislav Fuks, Jiří Orten", correct: false},
		 { text: "Karel Čapek, Josef Karel Šlejha, Ladislav Klíma", correct: false},
		 { text: "Božena Němcová, Karel Hynek Mácha, Alois Jirásek", correct: false},
		 { text: "Karel Poláček, Josef Čapek, Eduard Bass", correct: true},
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
