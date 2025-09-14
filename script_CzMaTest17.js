const questions = [ 
	{
		question: "Jaký druh je kniha Vyhoďme ho z kola ven?",
		answers: [
		 { text: "Lyrika", correct: false},
		 { text: "Drama", correct: false},
		 { text: "Epika", correct: true},
		]
	},
	{
		question: "Jaká forma je kniha Vyhoďme ho z kola ven?",
		answers: [
		 { text: "Drama", correct: false},
		 { text: "Próza", correct: true},
		 { text: "Poezie", correct: false},
		]
	},
	{
		question: "Jaký žánr je kniha Vyhoďme ho z kola ven?",
		answers: [
		 { text: "Absurdní drama", correct: false},
		 { text: "Román", correct: true},
		 { text: "Novela", correct: false},
		 { text: "Antiutopický román", correct: false},
		]
	},
	{
		question: "Co je hlavní téma knihy?",
		answers: [
		 { text: "nesmyslné opakování a marné čekání, nekonečné a absurdní dohady", correct: false},
		 { text: "varování před diktátorskými režimy a jejich ovládáním lidí, postupná nadřazenost a iluze rovnosti", correct: false},
		 { text: "utlačující systémy a vzepření proti nim a nakažlivost revolty v tomto prostředí,utlačující systémy a vzepření proti nim a nakažlivost revolty v tomto prostředí", correct: true},
		 { text: "nepřímá kritika totality, jejích praktik a nesvobody, absurdita normalizace", correct: false},
		]
	},
	{
		question: "Co jsou hlavní motivy knihy?",
		answers: [
		 { text: "svoboda, kontrola, přetvářka, manipulace, psychická nemoc", correct: true},
		 { text: "čekání, nuda, přátelství, sebevražda, nesmyslnost, marnost, beznaděj", correct: false},
		 { text: "majorova lebka, Jonesova puška, sedm přikázání, štěňata, větrný mlýn", correct: false},
		 { text: "samota, nemoc, okouzlení, inspirace, láska, sexuální orientace, vyšší společnost, Benátky, vidiny a sny", correct: false},
		]
	},
	{
		question: "Kdy byla kniha vydána?",
		answers: [
		 { text: "1962", correct: true},
		 { text: "1912", correct: false},
		 { text: "Kniha - 1952 a poprvé hrána roku 1953", correct: false},
		 { text: "1945", correct: false},
		]
	},
	{
		question: "Časoprostor - Kdy?",
		answers: [
		 { text: "autorova současnost, dílo se odehrává v průběhu 2 dnů", correct: false},
		 { text: "v rozmezí několika let, pravděpodobně na konci nebo před koncem 2WW", correct: false},
		 { text: "ve 20. století v průběhu několika dní až týdnů", correct: false},
		 { text: "po 2 WW, takže 20. století", correct: true},
		]
	},
	{
		question: "Časoprostor - Kde?",
		answers: [
		 { text: "na venkově na fiktivní Panské farmě později přejmenované na Zvířecí farmu v Anglii ve fiktivním městě", correct: false},
		 { text: "v psychiatrické léčebně v Oregonu v USA", correct: true},
		 { text: "ve Španělsku v nejmenovaném komplexu v jedné z jeho cel, kde jsou drženi zajatci ze Španělské občanské války", correct: false},
		 { text: "v nespecifikovaném státě i místě, pouze víme, že se odehrává na planině, kde stojí strom", correct: false},
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
		 { text: "4 kapitoly", correct: true},
		 { text: "4 díly a 51 kapitol", correct: false},
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
		question: "Postavy - Indián Bromden",
		answers: [
		 { text: "Hlavní kladná postava. Je to vězeň odsouzený k smrti, který se musí vyrovnat s myšlenkou vlastní smrti. Když čeká na popravu, tak přemýšlí nad svým životem.", correct: false},
		 { text: "Hlavní kladná postava, vůdce loupežníků a romantický tragický hrdina, který se mstí za křivdu a pravdivě miluje Jarmilu.", correct: false},
		 { text: "Tulák, hlavní postava. Pamatuje si předchozí dny, mívá zápach z úst.", correct: false},
		 { text: "Vypravěč příběhu, statný muž, předstírá hluchotu, trpí schizofrenií, zpočátku tichý a opatrný.", correct: true},
		]
	},
	{
		question: "Postavy - R. P. McMurphy",
		answers: [
		 { text: "Tulák, pesimista, navrhuje sebevraždu, má problémy s botami a nohami.", correct: false},
		 { text: "Kriminálník, který se dostane do ústavu místo vězení. Vtipálek, sebevědomý, vzdoruje sestře Ratchedové, nakonec podstoupí lobotomii.", correct: true},
		 { text: "Syn pana Povondry, dospívá v průběhu knihy, uklidňuje otce, že vina je společná lidstvu.", correct: false},
		 { text: "Řehořova matka, milující, ale slabá, nedokáže se s proměnou vyrovnat, musí pracovat.", correct: false},
		]
	},
	{
		question: "Postavy - Sestra Ratchedová",
		answers: [
		 { text: "Symbol propagandy. Mistr manipulace, překrucuje fakta, přepisuje přikázání.", correct: false},
		 { text: "Vedlejší kladná postava. Jedná se o starostlivou starší ženu, která miluje svou dceru, a strachuje se o ní.", correct: false},
		 { text: "Otec, autoritativní a tvrdý, syna postupně zavrhuje, také pracuje.", correct: false},
		 { text: "Hlavní záporná postava, přezdívaná „Velká sestra“. Autoritativní, manipulativní, udržuje absolutní kontrolu.", correct: true},
		]
	},
	{
		question: "Postavy - Billy Bibbit",
		answers: [
		 { text: "Vedlejší záporná postava. Vězeňský lékař, který spíše vězně zkoumá, než aby jim chtěl pomoci. Reprezentuje lhostejnost a brutalitu války.", correct: false},
		 { text: "Mladý pacient, koktá, závislý na matce, trpí komplexy méněcennosti.", correct: true},
		 { text: "Starý sluha Pozza, zlostný, popletený, podruhé oněměl.", correct: false},
		 { text: "Tvůrce Animalismu, symbol Lenina. Inspiruje zvířata k povstání, brzy po projevu umírá.", correct: false},
		]
	},
	{
		question: "Postavy - Harding",
		answers: [
		 { text: "Kladná postava, učí mloky lovit perly, dobromyslný, umírá a končí s ním romantická epocha PES.", correct: false},
		 { text: "Inteligentní, žárlivý, zástupce pacientů, skeptický k úspěchu vzpoury.", correct: true},
		 { text: "Pracující lid, obětavý, silný, ale naivní. Věrně slouží až do vyčerpání, nakonec prodán řezníkovi.", correct: false},
		 { text: "Vedlejší kladná postava. Spoluvězeň Pabla. Je mladý a hysterický. Bojí se smrti, Nic neprovedl, je pouze bratrem anarchisty.", correct: false},
		]
	},
	{
		question: "Postavy - Cheswick",
		answers: [
		 { text: "Fiktivní postava, zámožný muž, pro něj pracují bratři.", correct: false},
		 { text: "Pracující lid, inteligentnější než Boxer, pečlivá a věrná. Na konci poznává, že lidé a prasata jsou stejní.", correct: false},
		 { text: "Provokující pacient, kamarád McMurphyho, nakonec se utopí.", correct: true},
		 { text: "Vzdělaní a zámožní muži, kteří si pronajmou pokoj. Po odhalení Řehoře jsou znechuceni.", correct: false},
		]
	},
	{
		question: "Děj?",
		answers: [
		 { text: "Kriminálník McMurphy je převezen do psychiatrické léčebny, protože předstírá, že je psychicky nemocný. Zde mají zjistit, zda je opravdu nemocný, nebo pouze simuluje. Zde se dostává na oddělení sestry Ratchedové, kterou skoro okamžitě nemá rád. Postupem času se začne sbližovat s ostatními pacienty kliniky. To nejdříve jde stěží, ale postupem času se s nimi více kamarádí a děla s nimi hlouposti, jako třeba, že je vezme na ryby. Tímto a svým chováním podrývá autoritu sestry Ratchedové, která ho kvůli tomu začíná nesnášet. Takto to nějakou dobu pokračuje do doby, kdy chce McMurphy z kliniky utéct. Na rozloučenou uspořádá oslavu s několika prostitutkami pro ostatní pacienty. Nakonec ale neodejde a ráno je přistihne sestra Ratchedová. Ta, když je vidí jim vynadá, a když vidí Billyho, který byl s prostitutkou v posteli, tak mu řekne, že to řekne jeho matce. To u něj způsobí panickou hrůzu, při které se podřeže. Kvůli tomu McMurphy zaútočí na Ratchedovou, kvůli čemuž je později odvezen mimo toto křídlo a je mu provedena lobotomie. Ostatní z partičky pacientů se postupně dostávají pryč. Na konci knihy indián Bromden z lítosti zabije McMurphyho, a rozhodne se přijmout jeho minulou nabídkou, aby také odešel, tak z kliniky také utíká.", correct: true},
		 { text: "Kniha začíná setkáním Vladimíra a Estragona na místě, kde se mají střetnout s Godottem. Přemýšlí zda je toto to správné místo, kde mají čekat, a nakonec řeknou, že ano. Nějakou dobu spolu ještě mluví a hádají se, ale skoro hned se usmiřují. Také mluví o tom, že by se mohli oběsit. Poté na scénu přichází Pozzo a Lucky. Oba tuláci jsou nimi fascinováni. Zajímá je, proč Lucky nepoloží věci, které drží, na zem. Na to jim Pozzo odpoví, protože nechce, aby se ho zbavil. Řekne jim také, že ho hodlá prodat. Pozzovi se s nimi líbí mluvit a nechce se mu odejít, to ale nakonec učiní. Také jim řekne, ať dají Luckymu nějaký rozkaz, tak mu zadají nejdříve tancovat a poté přemýšlet. Ani jedna z těchto aktivit se jim ale v jeho provedení nelíbí. Po chvíli k nim přijde malý chlapec, který pracuje pro Godotta, a řekne jim, že přijde zítra. Další den se Vladimír zde opět setkává s Estragonem, který byl prý zase, jako minule, zbit. Vladimír si pamatuje na věci ze včerejška, ale Estragon ne, nebo to alespoň nepřiznává. Zase spolu nějakou dobu mluví, hádají se a usmiřují. Znovu přichází Pozzo a Lucky, ale ani jeden je nezná. Pozzo je nyní prý slepý a Lucky němý. Pozzo je na Vladimíra a Estragona, také vcelku agresivní. Oba poté odcházejí a za nimi přijde chlapec, který si také nic z minula nepamatuje a také je trošku jiný než včera, a znovu jim oznamuje, že dnes Godott nepřijde. Na konci knihy se pokoušejí Vladimír s Estragonem oběsit na stromě, ale jediné lano, které mají po ruce, jim praskne. Poté odcházejí a je pravděpodobné, že se plánují další den vrátit na to stejné místo.", correct: false},
		 { text: "Kapitán Van Toch objeví na ostrově Tana Masa inteligentní mloky, které učí lovit perly a bránit se proti žralokům. Po návratu do Čech uzavírá obchod s G. H. Bondym, čímž vzniká Pacifická Exportní Společnost (PES). Van Toch rozváží mloky po dalších ostrovech, kde se stávají pracovní silou. Syn boháče Abe Loeb a jeho přítelkyně Li mloky poprvé spatří; Li se jich bojí, ale později chce natáčet film. Po Van Tochově smrti mloci slouží lidem, postupně se množí a stávají se inteligentnějšími. Druhá část popisuje jejich společenský vývoj, vědecký výzkum a právní otázky. Mloci začínají ohrožovat lidi, žádají pevniny a rozpoutávají válku. Na konci knihy se ukazuje, že se dokázali adaptovat i na sladkou vodu a jeden mlok se objevuje ve Vltavě. Závěr tvoří dialog autora s jeho vnitřním hlasem, který rozhoduje o přežití lidstva. Mloci se nakonec vyhubí sami, lidé se vracejí a pevniny se postupně obnovují.", correct: false},
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
		question: "Jaké hnutí vzniklo v Americe proti válce?",
		answers: [
		 { text: "Hippies", correct: true},
		 { text: "Beatníci", correct: false},
		 { text: "Punk", correct: false},
		 { text: "Futuristé", correct: false},
		]
	},
	{
		question: "Co se v Československu stalo během Pražského jara?",
		answers: [
		 { text: "Začátek studené války", correct: false},
		 { text: "Vznik Hnutí Hippies", correct: false},
		 { text: "Normalizace a upálení Jana Palacha", correct: true},
		 { text: "Vydání exilové literatury", correct: false},
		]
	},
	{
		question: "Jaké byly tři směry literatury v ČSR v této době?",
		answers: [
		 { text: "Romantická, realistická, historická", correct: false},
		 { text: "Sci-fi, detektivní, hororová", correct: false},
		 { text: "Avantgardní, postmoderní, futuristická", correct: false},
		 { text: "Oficiální, exilová, samizdatová", correct: true},
		]
	},
	{
		question: "Kdo patřil k „generaci beatníků“?",
		answers: [
		 { text: "Francouzští surrealisté", correct: false},
		 { text: "Českoslovenští disidenti", correct: false},
		 { text: "Američtí spisovatelé a básníci proti válce", correct: true},
		 { text: "Komunističtí autoři", correct: false},
		]
	},
	{
		question: "Co symbolizuje upálení Jana Palacha?",
		answers: [
		 { text: "Protest proti studené válce", correct: false},
		 { text: "Odpor proti totalitě", correct: true},
		 { text: "Protest proti válce ve Vietnamu", correct: false},
		 { text: "Podpora hippies hnutí", correct: false},
		]
	}, 
	{
		question: "Kde vznikla beatnická literatura?",
		answers: [
		 { text: "V Anglii", correct: false},
		 { text: "Ve Francii", correct: false},
		 { text: "V USA", correct: true},
		 { text: "V Německu", correct: false},
		]
	},
	{
		question: "Jaký postoj beatníci zaujímali vůči tradičním hodnotám?",
		answers: [
		 { text: "Podporovali je", correct: false},
		 { text: "Odmítali je", correct: true},
		 { text: "Ignorovali je", correct: false},
		 { text: "Zachovávali je", correct: false},
		]
	},
	{
		question: "Co bylo typické pro formu beatnických děl?",
		answers: [
		 { text: "Přísné verše a pravidelná rytmika", correct: false},
		 { text: "Historická přesnost", correct: false},
		 { text: "Pouze realistický popis", correct: false},
		 { text: "Experimentování, proud vědomí a spontánnost", correct: true},
		]
	},
	{
		question: "Jaká témata se v beatnické literatuře objevovala?",
		answers: [
		 { text: "Svoboda, cestování, rebelie", correct: true},
		 { text: "Rodinný život a domácí práce", correct: false},
		 { text: "Příroda a zemědělství", correct: false},
		 { text: "Náboženské rituály", correct: false},
		]
	},
	{
		question: "Co beatníci kritizovali?",
		answers: [
		 { text: "Vědu a technologie", correct: false},
		 { text: "Umění a hudbu", correct: false},
		 { text: "Materialismus a konformitu", correct: true},
		 { text: "Historické události", correct: false},
		]
	},
	{
		question: "Kdo byli hlavními protagonisty beatnické literatury?",
		answers: [
		 { text: "Izolaci v klášteře", correct: false},
		 { text: "Stabilní rodinný život", correct: false},
		 { text: "Bohatství a luxus", correct: false},
		 { text: "Život na okraji společnosti", correct: true},
		]
	},
	{
		question: "Kdy žil Ken Kesey?",
		answers: [
		 { text: "1935–2001", correct: true},
		 { text: "1920–1990", correct: false},
		 { text: "1945–2005", correct: false},
		 { text: "1900–1989", correct: false},
		]
	},
	{
		question: "Do jakých literárních směrů je Ken Kesey řazen?",
		answers: [
		 { text: "Realismus a naturalismus", correct: false},
		 { text: "Renesance a humanismus", correct: false},
		 { text: "Beatnická generace, hippies, postmoderní literatura", correct: true},
		 { text: "Baroko a romantismus", correct: false},
		]
	},
	{
		question: "Jaké bylo Keseyho první a nejúspěšnější dílo?",
		answers: [
		 { text: "Poslední kolo", correct: false},
		 { text: "Skříňka s démonem", correct: false},
		 { text: "Námořníkova píseň", correct: false},
		 { text: "Vyhoďme ho z kola ven", correct: true},
		]
	},
	{
		question: "Kde získal inspiraci pro román Vyhoďme ho z kola ven?",
		answers: [
		 { text: "Na svých cestách po Evropě", correct: false},
		 { text: "Ze služby v armádě", correct: false},
		 { text: "Z práce nočního hlídače na psychiatrickém oddělení", correct: true},
		 { text: "Z politické činnosti", correct: false},
		]
	},
	{
		question: "Jaké zkušenosti měl Kesey s drogami?",
		answers: [
		 { text: "Experimentoval s nimi a účastnil se pokusů", correct: true},
		 { text: "Vyhýbal se jim", correct: false},
		 { text: "Jen o nich psal, ale nikdy je neužíval", correct: false},
		 { text: "Léčil pacienty drogami", correct: false},
		]
	},
	{
		question: "Jaké téma často zpracovával ve svých dílech?",
		answers: [
		 { text: "Vztah člověka a přírody", correct: false},
		 { text: "Hrdinské eposy a mýty", correct: false},
		 { text: "Válečné konflikty", correct: false},
		 { text: "Odcizení jedince v moderní společnosti", correct: true},
		]
	},
	{
		question: "Jaký byl autorův postoj k moderní společnosti?",
		answers: [
		 { text: "Smířlivý", correct: false},
		 { text: "Apatický", correct: false},
		 { text: "Protestující", correct: true},
		 { text: "Podporující", correct: false},
		]
	},
	{
		question: "Které z následujících děl NENAPSAL Ken Kesey?",
		answers: [
		 { text: "Námořníkova píseň", correct: false},
		 { text: "Skříňka s démonem", correct: false},
		 { text: "Kdo chytá v žitě", correct: true},
		 { text: "Tak mě někdy napadá", correct: false},
		]
	},
	{
		question: "V jakém oboru původně Kesey studoval?",
		answers: [
		 { text: "Divadelní umění", correct: true},
		 { text: "Lékařství", correct: false},
		 { text: "Sociologii", correct: false},
		 { text: "Psychologii", correct: false},
		]
	},
	{
		question: "Co navštěvoval Kesey kromě divadelního umění?",
		answers: [
		 { text: "Kurzy psychologie", correct: false},
		 { text: "Kurzy tvůrčího psaní", correct: true},
		 { text: "Kurzy výtvarného umění", correct: false},
		 { text: "Kurzy filosofie", correct: false},
		]
	},
	{
		question: "Jaké hnutí ovlivnilo Keseyho tvorbu v 60. letech?",
		answers: [
		 { text: "Realisté", correct: false},
		 { text: "Romantici", correct: false},
		 { text: "Hippies", correct: true},
		 { text: "Kubisté", correct: false},
		]
	},
	{
		question: "Co bylo pro Keseyho typickým tématem v jeho dílech?",
		answers: [
		 { text: "Odcizení a anonymita moderní společnosti", correct: true},
		 { text: "Život aristokracie", correct: false},
		 { text: "Problémy venkovského lidu", correct: false},
		 { text: "Politické manifesty", correct: false},
		]
	},
	{
		question: "Jak se autor dostával k inspiraci kromě práce na psychiatrii?",
		answers: [
		 { text: "Válkou v Koreji", correct: false},
		 { text: "Přátelstvím s politiky", correct: false},
		 { text: "Experimentováním s drogami", correct: true},
		 { text: "Studium starověkých textů", correct: false},
		]
	},
	{
		question: "Jaký postoj měl Kesey k jedinci v moderní společnosti?",
		answers: [
		 { text: "Viděl ho jako přizpůsobeného a šťastného", correct: false},
		 { text: "Viděl ho jako lhostejného", correct: false},
		 { text: "Viděl ho jako vítěze pokroku", correct: false},
		 { text: "Viděl ho jako odcizeného a ohroženého", correct: true},
		]
	},
	{
		question: "Které z následujících tvrzení o Keseym je správné?",
		answers: [
		 { text: "Nikdy se nezajímal o literární experimenty", correct: false},
		 { text: "Celý život psal jen poezii", correct: false},
		 { text: "Patřil k autorům beatnické generace", correct: true},
		 { text: "Jeho knihy nikdy nebyly v Americe úspěšné", correct: false},
		]
	},
	{
		question: "Jaký byl autorův přístup k problému společnosti?",
		answers: [
		 { text: "Protestující a kritický", correct: true},
		 { text: "Pasivní pozorovatel", correct: false},
		 { text: "Neutrální a smířený", correct: false},
		 { text: "Idealisticky nadšený", correct: false},
		]
	},
	{
		question: "Které dílo NENÍ Keseyho?",
		answers: [
		 { text: "Poslední kolo", correct: false},
		 { text: "Skříňka s démonem", correct: false},
		 { text: "Tak mě někdy napadá", correct: false},
		 { text: "Na západní frontě klid", correct: true},
		]
	},
	{
		question: "Jaký vliv měla beatnická generace na Keseyho?",
		answers: [
		 { text: "Naučila ho vojenské disciplíně", correct: false},
		 { text: "Vedla ho k psaní historických románů", correct: false},
		 { text: "Ovlivnila jeho pohled na svobodu, rebelii a outsiderství", correct: true},
		 { text: "Ovlivnila ho k návratu k tradicím", correct: false},
		]
	},
	{
		question: "Literární směr – další autoři světoví",
		answers: [
		 { text: "Egon Ervin Kirsch, Arnold Zweig, Erich Maria Remarque", correct: false},
		 { text: "Jack Kerouac, Allen Ginsberg, William S. Burroughs", correct: true},
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
		 { text: "Václav Havel, Milan Kundera, Ivan Klíma", correct: true},
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
