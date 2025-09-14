const questions = [
	{
		question: "Jaký druh je kniha Farma zvířat?",
		answers: [
		 { text: "Lyrika", correct: false},
		 { text: "Drama", correct: false},
		 { text: "Epika", correct: true},
		]
	},
	{
		question: "Jaká forma je kniha Farma zvířat?",
		answers: [
		 { text: "Drama", correct: false},
		 { text: "Próza", correct: true},
		 { text: "Poezie", correct: false},
		]
	},
	{
		question: "Jaký žánr je kniha Farma zvířat?",
		answers: [
		 { text: "Existenciální povídka", correct: false},
		 { text: "Román", correct: false},
		 { text: "Novela", correct: false},
		 { text: "Antiutopický román", correct: true},
		]
	},
	{
		question: "Co je hlavní téma knihy?",
		answers: [
		 { text: "poznání sama sebe, nový život, okouzlení a platonická + homosexuální láska", correct: false},
		 { text: "varování před diktátorskými režimy a jejich ovládáním lidí, postupná nadřazenost a iluze rovnosti", correct: true},
		 { text: "alegorie, která varuje před vzrůstem nacismu, lidská chamtivost", correct: false},
		 { text: "nepřímá kritika totality, jejích praktik a nesvobody, absurdita normalizace", correct: false},
		]
	},
	{
		question: "Co jsou hlavní motivy knihy?",
		answers: [
		 { text: "alkohol a jeho ničivý vliv, beznaděj, rozklad rodiny a morálních hodnot", correct: false},
		 { text: "proměna, odcizení od společnosti a rodiny, rodinné vztahy a konflikty, osamělost, smrt", correct: false},
		 { text: "majorova lebka, Jonesova puška, sedm přikázání, štěňata, větrný mlýn", correct: true},
		 { text: "samota, nemoc, okouzlení, inspirace, láska, sexuální orientace, vyšší společnost, Benátky, vidiny a sny", correct: false},
		]
	},
	{
		question: "Kdy byla kniha vydána?",
		answers: [
		 { text: "Dílo nejdříve vycházelo na pokračování v Lidových novinách (1935 - 1936). První knižní vydání bylo roku 1936", correct: false},
		 { text: "1912", correct: false},
		 { text: "1839", correct: false},
		 { text: "1945", correct: true},
		]
	},
	{
		question: "Časoprostor - Kdy?",
		answers: [
		 { text: "v průběhu 2 dnů v průběhu Španělské občanské války (1936 - 1939), takže v 1. polovině 20. století. Přesný rok neznáme", correct: false},
		 { text: "v rozmezí několika let, pravděpodobně na konci nebo před koncem 2WW", correct: true},
		 { text: "ve 20. století v průběhu několika dní až týdnů", correct: false},
		 { text: "Z díla není možno určit, ve kterém roku se kniha odehrává. Je ale jisté, že se dílo odehrává v meziválečných letech", correct: false},
		]
	},
	{
		question: "Časoprostor - Kde?",
		answers: [
		 { text: "na venkově na fiktivní Panské farmě později přejmenované na Zvířecí farmu v Anglii ve fiktivním městě", correct: true},
		 { text: "Dílo se odehrává po celém světě, primárně ale v Evropě", correct: false},
		 { text: "ve Španělsku v nejmenovaném komplexu v jedné z jeho cel, kde jsou drženi zajatci ze Španělské občanské války", correct: false},
		 { text: "v několika Ruských městech, ale primárně v Petrohradě a Moskvě a na venkovském panství Evžena Oněgina, které je v okolí Petrohradu", correct: false},
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
		 { text: "10 kapitol", correct: true},
		 { text: "Skládá z předmluvy, prologu a 10 obrazů", correct: false},
		 { text: "4 díly a 51 kapitol", correct: false},
		 { text: "5 kapitol", correct: false},
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
		question: "Postavy - Napoleon (prase)",
		answers: [
		 { text: "Hlavní kladná postava. Je to vězeň odsouzený k smrti, který se musí vyrovnat s myšlenkou vlastní smrti. Když čeká na popravu, tak přemýšlí nad svým životem.", correct: false},
		 { text: "Hlavní kladná postava, vůdce loupežníků a romantický tragický hrdina, který se mstí za křivdu a pravdivě miluje Jarmilu.", correct: false},
		 { text: "Hlavní kladný hrdina, revolucionář, nespravedlivě odsouzen, nakonec si vezme Dolores.", correct: false},
		 { text: "Hlavní záporná postava, symbol Stalina. Prohnaný, touží po moci, vyžene Kuliše a stane se vládcem farmy.", correct: true},
		]
	},
	{
		question: "Postavy - Kuliš (prase)",
		answers: [
		 { text: "Hlavní kladná postava. Je to 14letý polský chlapec. Je velmi pohledný a zvídavý. Jeho vlastnosti nejsou moc popsány. Rád koketuje. Pochází z bohaté rodiny. Je inspirací pro Aschenbacha.", correct: false},
		 { text: "Hlavní kladná postava, symbol Trockého. Inteligentní, chce dobro pro zvířata, ale je Napoleonem vyhnán a později obviňován.", correct: true},
		 { text: "Syn pana Povondry, dospívá v průběhu knihy, uklidňuje otce, že vina je společná lidstvu.", correct: false},
		 { text: "Řehořova matka, milující, ale slabá, nedokáže se s proměnou vyrovnat, musí pracovat.", correct: false},
		]
	},
	{
		question: "Postavy - Pištík (prase)",
		answers: [
		 { text: "Symbol propagandy. Mistr manipulace, překrucuje fakta, přepisuje přikázání.", correct: true},
		 { text: "Vedlejší kladná postava. Jedná se o starostlivou starší ženu, která miluje svou dceru, a strachuje se o ní.", correct: false},
		 { text: "Otec, autoritativní a tvrdý, syna postupně zavrhuje, také pracuje.", correct: false},
		 { text: "Vedlejší kladná postava. Spoluvězeň Pabla. Je mladý a hysterický. Bojí se smrti, Nic neprovedl, je pouze bratrem anarchisty.", correct: false},
		]
	},
	{
		question: "Postavy - Starý Major (prase)",
		answers: [
		 { text: "Vedlejší záporná postava. Vězeňský lékař, který spíše vězně zkoumá, než aby jim chtěl pomoci. Reprezentuje lhostejnost a brutalitu války.", correct: false},
		 { text: "Vedlejší záporná postava. Je to Čech, který sympatizuje s Němci.", correct: false},
		 { text: "Vedlejší neutrální postava. Dcera Gervaisy, která kvůli nefunkční rodině skončí jako prostitutka. Jako dítě neposedná a velmi svá.", correct: false},
		 { text: "Tvůrce Animalismu, symbol Lenina. Inspiruje zvířata k povstání, brzy po projevu umírá.", correct: true},
		]
	},
	{
		question: "Postavy - Boxer (kůň)",
		answers: [
		 { text: "Kladná postava, učí mloky lovit perly, dobromyslný, umírá a končí s ním romantická epocha PES.", correct: false},
		 { text: "Vedlejší kladná postava. Jedná se o starostlivou starší ženu, která miluje svou dceru, a strachuje se o ní.", correct: false},
		 { text: "Pracující lid, obětavý, silný, ale naivní. Věrně slouží až do vyčerpání, nakonec prodán řezníkovi.", correct: true},
		 { text: "Vedlejší kladná postava. Spoluvězeň Pabla. Je mladý a hysterický. Bojí se smrti, Nic neprovedl, je pouze bratrem anarchisty.", correct: false},
		]
	},
	{
		question: "Postavy - Lupina (klisna)",
		answers: [
		 { text: "Hlavní záporná postava, záletník a krutý muž, Vilémův otec, který ho v mládí vyhnal z domu; v knize je spíše fiktivní.", correct: false},
		 { text: "Pracující lid, inteligentnější než Boxer, pečlivá a věrná. Na konci poznává, že lidé a prasata jsou stejní.", correct: true},
		 { text: "Správce u Harpagona, milenec Elisy, ve skutečnosti šlechtic.", correct: false},
		 { text: "Vzdělaní a zámožní muži, kteří si pronajmou pokoj. Po odhalení Řehoře jsou znechuceni.", correct: false},
		]
	},
	{
		question: "Postavy - Majka (koza)",
		answers: [
		 { text: "Hlavní kladný hrdina, vlastenecký kat, měl popravit Melichara, ale je poctivý, nakonec si vezme Juanillu.", correct: false},
		 { text: "Krásná dívka, zamiluje se do Krysaře, ale je i milenkou dlouhého Kristiána. Po otěhotnění spáchá sebevraždu.", correct:false},
		 { text: "Syn pana Povondry, dospívá v průběhu knihy, uklidňuje otce, že vina je společná lidstvu.", correct: false},
		 { text: "Inteligentní, umí číst, přítelkyně Lupiny. Zemře před koncem příběhu.", correct: true},
		]
	},
	{
		question: "Postavy - Slepice",
		answers: [
		 { text: "Vedlejší záporná postava. Vězeňský lékař, který spíše vězně zkoumá, než aby jim chtěl pomoci. Reprezentuje lhostejnost a brutalitu války.", correct: false},
		 { text: "Symbol chudého lidu. Vzbouří se proti prasatům, ale povstání je potlačeno.", correct: true},
		 { text: "Vedlejší neutrální postava. Dcera Gervaisy, která kvůli nefunkční rodině skončí jako prostitutka. Jako dítě neposedná a velmi svá.", correct: false},
		 { text: "Neutrální hlavní postava, zámožný Čech, využívá mloky jako pracovní sílu, obchoduje s Van Tochem, jeho osud po vzpouře mloků není znám.", correct: false},
		]
	},
	{
		question: "Postavy - Ovce",
		answers: [
		 { text: "Tupý dav, slepě následují prasata a brání opozici.", correct: true},
		 { text: "Hlavní kladná postava, vůdce loupežníků a romantický tragický hrdina, který se mstí za křivdu a pravdivě miluje Jarmilu.", correct: false},
		 { text: "Hlavní kladný hrdina, revolucionář, nespravedlivě odsouzen, nakonec si vezme Dolores.", correct: false},
		 { text: "Hlavní kladná postava, český vrátný, oddaný Bondymu, pyšný na svou roli, později obviňuje sám sebe ze zkázy světa.", correct: false},
		]
	},
	{
		question: "Postavy - Psi",
		answers: [
		 { text: "Hlavní kladná postava. Je to vězeň odsouzený k smrti, který se musí vyrovnat s myšlenkou vlastní smrti. Když čeká na popravu, tak přemýšlí nad svým životem.", correct: false},
		 { text: "Hlavní kladná postava, vůdce loupežníků a romantický tragický hrdina, který se mstí za křivdu a pravdivě miluje Jarmilu.", correct: false},
		 { text: "Hlavní kladný hrdina, revolucionář, nespravedlivě odsouzen, nakonec si vezme Dolores.", correct: false},
		 { text: "Tajná policie. Napoleon je vychová k poslušnosti a násilí, slouží mu jako ochranka.", correct: true},
		]
	},
	{
		question: "Postavy - Mojžíš (havran)",
		answers: [
		 { text: "Symbol náboženství. Vypráví o „Cukrové hoře“ (nebi), udržuje víru mezi zvířaty.", correct: true},
		 { text: "Hlavní kladná postava, symbol Trockého. Inteligentní, chce dobro pro zvířata, ale je Napoleonem vyhnán a později obviňován.", correct: false},
		 { text: "Syn pana Povondry, dospívá v průběhu knihy, uklidňuje otce, že vina je společná lidstvu.", correct: false},
		 { text: "Řehořova matka, milující, ale slabá, nedokáže se s proměnou vyrovnat, musí pracovat.", correct: false},
		]
	},
	{
		question: "Postavy - Pan Jones",
		answers: [
		 { text: "Symbol propagandy. Mistr manipulace, překrucuje fakta, přepisuje přikázání.", correct: false},
		 { text: "Původní majitel farmy, krutý, alkoholik. Vyhnán, později zemře.", correct: true},
		 { text: "Otec, autoritativní a tvrdý, syna postupně zavrhuje, také pracuje.", correct: false},
		 { text: "Vedlejší kladná postava. Spoluvězeň Pabla. Je mladý a hysterický. Bojí se smrti, Nic neprovedl, je pouze bratrem anarchisty.", correct: false},
		]
	},
	{
		question: "Postavy - Pan Whymper",
		answers: [
		 { text: "Vedlejší záporná postava. Vězeňský lékař, který spíše vězně zkoumá, než aby jim chtěl pomoci. Reprezentuje lhostejnost a brutalitu války.", correct: false},
		 { text: "Vedlejší záporná postava. Je to Čech, který sympatizuje s Němci.", correct: false},
		 { text: "Obchodník, přes nějž prasata začnou obchodovat s lidmi.", correct: true},
		 { text: "Tvůrce Animalismu, symbol Lenina. Inspiruje zvířata k povstání, brzy po projevu umírá.", correct: false},
		]
	},
	{
		question: "Postavy - Lidé",
		answers: [
		 { text: "Kladná postava, učí mloky lovit perly, dobromyslný, umírá a končí s ním romantická epocha PES.", correct: false},
		 { text: "Symbol kapitalistů. Vykořisťují zvířata, na konci se spojují s prasaty.", correct: true},
		 { text: "Pracující lid, obětavý, silný, ale naivní. Věrně slouží až do vyčerpání, nakonec prodán řezníkovi.", correct: false},
		 { text: "Vedlejší kladná postava. Spoluvězeň Pabla. Je mladý a hysterický. Bojí se smrti, Nic neprovedl, je pouze bratrem anarchisty.", correct: false},
		]
	},
	{
		question: "Děj?",
		answers: [
		 { text: "Slavný německý spisovatel Gustav von Aschenbach, zničený ztrátou rodiny a zklamaný ze společnosti plné pokrytectví, odjíždí do Benátek. V hotelu potká čtrnáctiletého polského chlapce Tadzia, do něhož se platonicky zamiluje a obdivuje ho jako dokonalý ideál krásy. Jeho fascinace chlapcem se stává inspirací pro tvorbu, ale také odhaluje jeho skryté city. V Benátkách propukne epidemie cholery, přesto Aschenbach odmítá odjet, aby zůstal blízko Tadzia. Když polská rodina odjíždí, Aschenbach se zhroutí a umírá v lehátku pohledem upřeným na chlapce.", correct: false},
		 { text: "Řehoř Samsa, obchodní cestující, se jednoho rána probudí a zjistí, že se proměnil v obří hmyz. Neschopen vykonávat svou práci, se stává pro rodinu čím dál větší příteží. Postupně se zhoršují vztahy mezi ním a rodinou, která ho začíná nenávidět. Řehoř prožívá pocity osamělosti a odcizení, zatímco se rodina snaží přizpůsobit životu bez jeho finanční podpory. Z Řehoře se stává čím dál tím větší zvíře. Když nestačí práce všech zbývajících členů rodiny, tak si k sobě berou 3 nájemníky. Ti o Řehořovi neví, ale jednoho večera jej uvidí, což je znechutí natolik, že z bytu odejdou. Když to pro rodinu vypadá nejhůř, tak Řehoř umírá, což jeho rodina bere, jako velkou úlevu.", correct: false},
		 { text: "Kapitán Van Toch objeví na ostrově Tana Masa inteligentní mloky, které učí lovit perly a bránit se proti žralokům. Po návratu do Čech uzavírá obchod s G. H. Bondym, čímž vzniká Pacifická Exportní Společnost (PES). Van Toch rozváží mloky po dalších ostrovech, kde se stávají pracovní silou. Syn boháče Abe Loeb a jeho přítelkyně Li mloky poprvé spatří; Li se jich bojí, ale později chce natáčet film. Po Van Tochově smrti mloci slouží lidem, postupně se množí a stávají se inteligentnějšími. Druhá část popisuje jejich společenský vývoj, vědecký výzkum a právní otázky. Mloci začínají ohrožovat lidi, žádají pevniny a rozpoutávají válku. Na konci knihy se ukazuje, že se dokázali adaptovat i na sladkou vodu a jeden mlok se objevuje ve Vltavě. Závěr tvoří dialog autora s jeho vnitřním hlasem, který rozhoduje o přežití lidstva. Mloci se nakonec vyhubí sami, lidé se vracejí a pevniny se postupně obnovují.", correct: false},
		 { text: "Kniha začíná na Panské farmě někde na venkově ve fiktivním městě v Anglii, kde vládne tvrdou rukou pan Jones. Jednu noc si všechna zvířata k sobě zavolá starý Major, který jim představí myšlenku Animalismu. Pár dní na to Major umírá na stáří. Dalšího dne, když zvířata nedostávají nažrat, vzbouří se proti Jonesovi a jeho lidem, které z farmy vyženou a farmu přejmenují na Zvířecí farmu, na které se jim ze začátku vede lépe než s lidmi. Velení se ujímají dva vepři, Kuliš a Napoleon. Tito vepři sepisují myšlenku Animalismu do sedmi přikázání. Zatímco Kuliš chce pro všechna zvířata to nejlepší, Napoleon chce to nejlepší pouze pro prasata, a hlavně pro sebe. Lidé jednou zaútočí na farmu tu, ale zvířata uchrání. Kuliš chce postavit větrný mlýn, ale Napoleon je proti tomu. Za nějakou dobu Napoleon vyžene Kuliše z farmy za pomocí svých vytrénovaných psů. Po vyhnání Kuliše Napoleon prohlásí, že chce postavit větrný mlýn a že Kuliš byl Jonesův spojenec. Větrný mlýn je za značné námahy postaven, ale záhy zničen při útoku lidí, kteří ho vyhodí do vzduchu dynamitem. Tudíž práce může začít od začátku. Postupem času se prasat stávají čím dál tím nadřazenější ostatním zvířatům, a Pištík mění sedm přikázání, aby to nikomu nepřišlo podezřelé. Prasata začínají obchodovat s lidmi z okolního světa za pomocí pana Whympera. Psi zabijí každého, kdo klade odpor Napoleonovi. Na konci knihy se prasata spojují s lidmi, a klisna Lupina si prohlíží jejich a lidské obličeje a nevidí v nich rozdíl.", correct: true},
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
		 { text: "Jen dialog", correct: false},
		 { text: "Jak monilogy, tak také i dialogy", correct: true},
		]
	},
	{
		question: "Co je hlavním tématem kritiky díla?",
		answers: [
		 { text: "Kapitalismus v USA", correct: false},
		 { text: "Koloniální politika Británie", correct: false},
		 { text: "Francouzská revoluce", correct: false},
		 { text: "Utopická myšlenka rovnosti v SSSR a její zkažení", correct: true},
		]
	},
	{
		question: "Kdo byl vůdce, jehož vládu Orwell kritizoval?",
		answers: [
		 { text: "Stalin", correct: true},
		 { text: "Hitler", correct: false},
		 { text: "Lenin", correct: false},
		 { text: "Trockij", correct: false},
		]
	},
	{
		question: "Co ovlivnilo většinu Orwellových děl?",
		answers: [
		 { text: "Láska k venkovu", correct: false},
		 { text: "Náboženství a víra", correct: false},
		 { text: "Odpor proti utlačujícím režimům", correct: true},
		 { text: "Válečné zážitky v 1. světové válce", correct: false},
		]
	},
	{
		question: "Do jakého literárního směru patří dílo?",
		answers: [
		 { text: "Renesance", correct: false},
		 { text: "Romantismus", correct: false},
		 { text: "Realismus", correct: false},
		 { text: "Světová literatura 2. poloviny 20. století", correct: true},
		]
	},
	{
		question: "Jaké hlavní rysy měla světová literatura 2. poloviny 20. století?",
		answers: [
		 { text: "Láska k přírodě, návrat k tradicím", correct: false},
		 { text: "Náboženské náměty a středověké legendy", correct: false},
		 { text: "Odraz války, vědecko-fantastické psaní a angažovaná próza", correct: true},
		 { text: "Pohádky a eposy", correct: false},
		]
	},
	{
		question: "Proč byla kniha v Československu zakázána?",
		answers: [
		 { text: "Kvůli kritice monarchie", correct: false},
		 { text: "Protože zde byl socialismus", correct: true},
		 { text: "Kvůli náboženským motivům", correct: false},
		 { text: "Kvůli erotickým scénám", correct: false},
		]
	},
	{
		question: "Co je hlavním cílem angažované prózy?",
		answers: [
		 { text: "Bavit čtenáře humorem", correct: false},
		 { text: "Zachytit krásu venkovského života", correct: false},
		 { text: "Reagovat na nedostatky ve společnosti", correct: true},
		 { text: "Psát o lásce a romantice", correct: false},
		]
	},
	{
		question: "Jak válka ovlivnila literaturu 2. poloviny 20. století?",
		answers: [
		 { text: "Autoři psali pouze romantické příběhy", correct: false},
		 { text: "Odrazila se v tématech, která zpracovávala její následky", correct: true},
		 { text: "Nebyla vůbec reflektována", correct: false},
		 { text: "Vedla k návratu k antice", correct: false},
		]
	},
	{
		question: "Jaký žánr byl v této době velmi rozšířený?",
		answers: [
		 { text: "Pohádky", correct: false},
		 { text: "Rytířská epika", correct: false},
		 { text: "Náboženské eposy", correct: false},
		 { text: "Vědecko-fantastická literatura", correct: true},
		]
	},
	{
		question: "Proč byla angažovaná próza pro režimy nebezpečná?",
		answers: [
		 { text: "Ukazovala nedostatky ve společnosti a kritizovala mocenské struktury", correct: true},
		 { text: "Byla příliš romantická", correct: false},
		 { text: "Podporovala monarchii", correct: false},
		 { text: "Psala o přírodě", correct: false},
		]
	},
	{
		question: "Kde byla kniha zakázaná?",
		answers: [
		 { text: "Ve Francii", correct: false},
		 { text: "V USA", correct: false},
		 { text: "V Československu", correct: true},
		 { text: "V Německu", correct: false},
		]
	},
	{
		question: "Jaký politický systém byl v Československu, kvůli kterému byla kniha zakázána?",
		answers: [
		 { text: "Monarchie", correct: false},
		 { text: "Fašismus", correct: false},
		 { text: "Kapitalismus", correct: false},
		 { text: "Socialismus", correct: true},
		]
	},
	{
		question: "Jaká témata byla typická pro vědecko-fantastické psaní té doby?",
		answers: [
		 { text: "Budoucnost, technika, mimozemské civilizace", correct: true},
		 { text: "Život na vesnici", correct: false},
		 { text: "Náboženské otázky", correct: false},
		 { text: "Pohádkové motivy", correct: false},
		]
	},
	{
		question: "JKdy bylo vydáno dílo, které ukazovalo problémy SSSR?",
		answers: [
		 { text: "1845", correct: false},
		 { text: "1900", correct: false},
		 { text: "1945", correct: true},
		 { text: "2000", correct: false},
		]
	},
	{
		question: "Jaký byl hlavní cíl tohoto díla?",
		answers: [
		 { text: "Buddenbrookovi", correct: false},
		 { text: "Doktor Faustus", correct: false},
		 { text: "Smrt v Benátkách", correct: false},
		 { text: "Kouzelný vrch", correct: true},
		]
	},
	{
		question: "Jaká je hlavní tematika jeho románů?",
		answers: [
		 { text: "Ukázat krásy venkovského života", correct: false},
		 { text: "Podporovat imperialismus", correct: false},
		 { text: "Ukázat problémy Sovětského svazu", correct: true},
		 { text: "Vyzdvihnout romantiku", correct: false},
		]
	},
	{
		question: "Jak se jmenoval George Orwell vlastním jménem?",
		answers: [
		 { text: "Eric Arthur Blair", correct: true},
		 { text: "Richard Arthur Blair", correct: false},
		 { text: "William George Blair", correct: false},
		 { text: "Arthur Eric Walmesley", correct: false},
		]
	},
	{
		question: "Kde se Orwell narodil?",
		answers: [
		 { text: "Londýn", correct: false},
		 { text: "Oxford", correct: false},
		 { text: "Bombay", correct: false},
		 { text: "Motihari, Bengálsko (středovýchodě Indie)", correct: true},
		]
	},
	{
		question: "Jak se jmenoval Orwellův otec?",
		answers: [
		 { text: "John Blair", correct: false},
		 { text: "Thomas Orwell Blair", correct: false},
		 { text: "Richard Walmesley Blai", correct: true},
		 { text: "Edward Blair", correct: false},
		]
	},
	{
		question: "Jakou školu Orwell vystudoval?",
		answers: [
		 { text: "Cambridge", correct: false},
		 { text: "Oxford", correct: false},
		 { text: "Eton College", correct: true},
		 { text: "Harrow", correct: false},
		]
	},
	{
		question: "Jaké zaměstnání nastoupil Orwell v roce 1922?",
		answers: [
		 { text: "Policista v Indické imperiální policii", correct: true},
		 { text: "Učitel v Anglii", correct: false},
		 { text: "Novinář v Londýně", correct: false},
		 { text: "Voják britské armády", correct: false},
		]
	},
	{
		question: "Které zážitky z Indie ho ovlivnily?",
		answers: [
		 { text: "Láska k monarchii", correct: false},
		 { text: "Nenávist k imperialismu", correct: true},
		 { text: "Nenávist k demokracii", correct: false},
		 { text: "Náklonnost k fašismu", correct: false},
		]
	},
	{
		question: "Jaké dílo napsal na základě zkušeností z Indie?",
		answers: [
		 { text: "1984", correct: false},
		 { text: "Farma zvířat", correct: false},
		 { text: "Barmské dny", correct: true},
		 { text: "Na dně v Paříži a Londýně", correct: false},
		]
	},
	{
		question: "Jaké dílo vzniklo z jeho zkušeností tuláka?",
		answers: [
		 { text: "Na dně v Paříži a Londýně", correct: true},
		 { text: "Hold Katalánsku", correct: false},
		 { text: "Nadechnout se", correct: false},
		 { text: "Farářova dcera", correct: false},
		]
	},
	{
		question: "Kde bojoval Orwell jako dobrovolník v roce 1936?",
		answers: [
		 { text: "Druhá světová válka", correct: false},
		 { text: "Indie", correct: false},
		 { text: "Španělská občanská válka", correct: true},
		 { text: "Maroko", correct: false},
		]
	},
	{
		question: "Které dílo napsal podle zážitků z této války?",
		answers: [
		 { text: "Farma zvířat", correct: false},
		 { text: "Barmské dny", correct: false},
		 { text: "Hold Katalánsku", correct: false},
		 { text: "1984", correct: true},
		]
	},
	{
		question: "Proč se Orwell nezúčastnil 2. světové války?",
		answers: [
		 { text: "Politické důvody", correct: false},
		 { text: "Kvůli tuberkulóze", correct: true},
		 { text: "Strach", correct: false},
		 { text: "Byl ve vězení", correct: false},
		]
	},
	{
		question: "Pro koho začal pracovat Orwell v roce 1940?",
		answers: [
		 { text: "BBC", correct: true},
		 { text: "Oxford", correct: false},
		 { text: "Noviny Daily Mail", correct: false},
		 { text: "The Times", correct: false},
		]
	},
	{
		question: "Kdy Orwell napsal svůj nejznámější román 1984?",
		answers: [
		 { text: "1936", correct: false},
		 { text: "1945", correct: false},
		 { text: "2000", correct: false},
		 { text: "1949", correct: true},
		]
	},
	{
		question: "Kdy George Orwell zemřel?",
		answers: [
		 { text: "1945", correct: false},
		 { text: "1950", correct: true},
		 { text: "1890", correct: false},
		 { text: "2000", correct: false},
		]
	},
	{
		question: "Na co Orwell zemřel?",
		answers: [
		 { text: "Srdeční selhání", correct: false},
		 { text: "Rakovina", correct: false},
		 { text: "Úraz", correct: false},
		 { text: "Tuberkulóza", correct: true},
		]
	},
	{
		question: "Jaké byly hlavní znaky jeho tvorby?",
		answers: [
		 { text: "Romantická poezie", correct: false},
		 { text: "Podpora monarchie", correct: false},
		 { text: "Kritika totalitarismu, ideály demokratického socialismu", correct: true},
		 { text: "Popis vesnického života", correct: false},
		]
	},
	{
		question: "Které dva romány mu přinesly světovou popularitu?",
		answers: [
		 { text: "1984 a Farma zvířat", correct: true},
		 { text: "Farářova dcera, Hold Katalánsku", correct: false},
		 { text: "Barmské dny, Nadechnout se", correct: false},
		 { text: "Na dně v Paříži a Londýně, Nadechnout se", correct: false},
		]
	},
	{
		question: "Literární směr – další autoři světoví",
		answers: [
		 { text: "Egon Ervin Kirsch, Arnold Zweig, Erich Maria Remarque", correct: false},
		 { text: "Ray Bradbury, William Golding, Jevgenij Ivanovic Zamjatin", correct: true},
		 { text: "Franza Kafka, Albert Camus, Simone de Beauvoir", correct: false},
		 { text: "William Shakespeare, Johann Wolfgang Goethe, Walt Whitman", correct: false},
		]
	},
	{
		question: "Literární směr – další autoři čeští",
		answers: [
		 { text: "Josef Škvorecký, Ladislav Fuks, Jiří Orten", correct: false},
		 { text: "Josef Karel Šlejha, Ladislav Klíma", correct: false},
		 { text: "Božena Němcová, Karel Hynek Mácha, Alois Jirásek", correct: false},
		 { text: "Karel Čapek, Jan Otčenášek, Ota Pavel", correct: true},
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
