const questions = [
	{
		question: "Jaký druh je kniha Zeď?",
		answers: [
		 { text: "Lyrika", correct: false},
		 { text: "Drama", correct: false},
		 { text: "Epika", correct: true},
		]
	},
	{
		question: "Jaká forma je kniha Zeď?",
		answers: [
		 { text: "Drama", correct: false},
		 { text: "Próza", correct: true},
		 { text: "Poezie", correct: false},
		]
	},
	{
		question: "Jaký žánr je kniha Zeď?",
		answers: [
		 { text: "Existenciální povídka", correct: true},
		 { text: "Satiristická fantasie s prvky tragikomedie", correct: false},
		 { text: "Gotická hororová povídka", correct: false},
		 { text: "Absurdní povídka / existenciální novela (ukazuje existenci samotnou, ale i její absurditu)", correct: false},
		]
	},
	{
		question: "Co je hlavní téma knihy?",
		answers: [
		 { text: "poukázání na nelidské chování, kterému jsou podrobeni společenští odpadlíci", correct: false},
		 { text: "zamyšlení nad smrtí a absurditou lidského života, svoboda a bezvýchodnost lidské existence", correct: true},
		 { text: "proměna a odcizení od společnosti, zdivočení a snaha o pomoc", correct: false},
		 { text: "nepřímá kritika totality, jejích praktik a nesvobody, absurdita normalizace", correct: false},
		]
	},
	{
		question: "Co jsou hlavní motivy knihy?",
		answers: [
		 { text: "alkohol a jeho ničivý vliv, beznaděj, rozklad rodiny a morálních hodnot", correct: false},
		 { text: "proměna, odcizení od společnosti a rodiny, rodinné vztahy a konflikty, osamělost, smrt", correct: false},
		 { text: "matka, touha, ponocný, sklep, hlas, smích, loď, den, krysa a host", correct: false},
		 { text: "slamník, dvůr, rezignace, absurdnost lidského života, nevyhnutelnost, válka", correct: true},
		]
	},
	{
		question: "Kdy byla kniha vydána?",
		answers: [
		 { text: "1534", correct: false},
		 { text: "1815", correct: false},
		 { text: "1939", correct: true},
		 { text: "2000", correct: false},
		]
	},
	{
		question: "Časoprostor - Kdy?",
		answers: [
		 { text: " v průběhu 2 dnů v průběhu Španělské občanské války (1936 - 1939), takže v 1. polovině 20. století (přesný rok neznáme)", correct: true},
		 { text: "v průběhu několika let na začátku 19. století", correct: false},
		 { text: "v průběhu několika dní pravděpodobně na jaře, ale rok nelze určit", correct: false},
		 { text: "čas není určen, takže se kniha odehrává v autorově současnosti (v průběhu několika měsícu)", correct: false},
		]
	},
	{
		question: "Časoprostor - Kde?",
		answers: [
		 { text: "ve Francii v Paříži v domě Harpagona", correct: false},
		 { text: "v neurčitém městě v neurčitém státě", correct: false},
		 { text: "ve Španělsku v nejmenovaném komplexu v jedné z jeho cel, kde jsou drženi zajatci ze Španělské občanské války", correct: true},
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
		 { text: "5 povídek (Zeď je titulní povídka)", correct: true},
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
		 { text: "Ich-forma", correct: true},
		 { text: "Er-forma ", correct: false},
		 { text: "Není", correct: false},
		]
	},
	{
		question: "Vypravěč dle vyprávěcí roviny?",
		answers: [
		 { text: "Není", correct: false},
		 { text: "Přímý vypravěč ", correct: false},
		 { text: "Neosobní vypravěč, protože vystupuje v er-formě, zaznamenává chování postav, ale neví, co si myslí.", correct: false},
		 { text: "Personální vypravěč", correct: true},
		]
	},
	{
		question: "Postavy - Pablo Ibbieta",
		answers: [
		 { text: "Hlavní kladná postava. Je to vězeň odsouzený k smrti, který se musí vyrovnat s myšlenkou vlastní smrti. Když čeká na popravu, tak přemýšlí nad svým životem.", correct: true},
		 { text: "Hlavní kladná postava, vůdce loupežníků a romantický tragický hrdina, který se mstí za křivdu a pravdivě miluje Jarmilu.", correct: false},
		 { text: "Hlavní kladný hrdina, revolucionář, nespravedlivě odsouzen, nakonec si vezme Dolores.", correct: false},
		 { text: "Vysoký, štíhlý, chladný a odtažitý muž. Vyvádí krysy z Hammeln, zamiluje se do Agnes. Po její smrti zahraje píseň zkázy a zahyne sám skokem do propasti.", correct: false},
		]
	},
	{
		question: "Postavy - Tom Steinbock",
		answers: [
		 { text: "Hlavní kladný hrdina, vlastenecký kat, měl popravit Melichara, ale je poctivý, nakonec si vezme Juanillu.", correct: false},
		 { text: "Krásná dívka, zamiluje se do Krysaře, ale je i milenkou dlouhého Kristiána. Po otěhotnění spáchá sebevraždu.", correct:false},
		 { text: "Vedlejší kladná postava. Spoluvězeň Pabla, kterého zná 24 hodin. Snaží se utěšovat ostatní. Kvůli strachu nedokáže ovládat svoje tělo. Hodně se potí. Má nadváhu.", correct: true},
		 { text: "Řehořova matka, milující, ale slabá, nedokáže se s proměnou vyrovnat, musí pracovat.", correct: false},
		]
	},
	{
		question: "Postavy - Juan Mirbal",
		answers: [
		 { text: "Hlavní záporná postava, záletník a krutý muž, Vilémův otec, který ho v mládí vyhnal z domu; v knize je spíše fiktivní.", correct: false},
		 { text: "Vedlejší kladná postava. Jedná se o starostlivou starší ženu, která miluje svou dceru, a strachuje se o ní.", correct: false},
		 { text: "Otec, autoritativní a tvrdý, syna postupně zavrhuje, také pracuje.", correct: false},
		 { text: "Vedlejší kladná postava. Spoluvězeň Pabla. Je mladý a hysterický. Bojí se smrti, Nic neprovedl, je pouze bratrem anarchisty.", correct: true},
		]
	},
	{
		question: "Postavy - Belgický doktor",
		answers: [
		 { text: "Vedlejší záporná postava. Vězeňský lékař, který spíše vězně zkoumá, než aby jim chtěl pomoci. Reprezentuje lhostejnost a brutalitu války.", correct: true},
		 { text: "Vedlejší záporná postava. Je to Čech, který sympatizuje s Němci.", correct: false},
		 { text: "Vedlejší neutrální postava. Dcera Gervaisy, která kvůli nefunkční rodině skončí jako prostitutka. Jako dítě neposedná a velmi svá.", correct: false},
		 { text: "Fiktivní kladná postava. Jedná se o hrdinu příběhu, který vypravěč vypráví Roderickovi, když se v noci v bouřce začínají dít strašidelné věci. Je statečný.", correct: false},
		]
	},
	{
		question: "Postavy - Grise",
		answers: [
		 { text: "Hlavní záporná postava, záletník a krutý muž, Vilémův otec, který ho v mládí vyhnal z domu; v knize je spíše fiktivní.", correct: false},
		 { text: "Vedlejší kladná postava. Primární cíl pátrání. Důležitý nebo nebezpečný pro druhou stranu války. Ukrýval se u bratrance, později na hřbitově, kde byl zabit.", correct: true},
		 { text: "Správce u Harpagona, milenec Elisy, ve skutečnosti šlechtic.", correct: false},
		 { text: "Vzdělaní a zámožní muži, kteří si pronajmou pokoj. Po odhalení Řehoře jsou znechuceni.", correct: false},
		]
	},
	{
		question: "Děj?",
		answers: [
		 { text: "Evžen Oněgin, známý jako „lev salónů“ v Petrohradu, je znuděný a pohrdá lidmi. Po smrti svého strýce dědí jeho venkovský dům. Na venkově se seznámí s idealistickým básníkem Vladimírem Lenským a navštíví dům vdovy Larinové a jejích dvou dcer – Olgy a Taťány. Oněgin Olgu považuje za povrchní, zatímco Taťána se do něj zamiluje a napíše mu dopis, který Oněgin odmítne. Na plese, kdy lidé myslí, že mají Oněgin a Taťána něco společného, tančí Oněgin s Olgou, což rozzlobí Lenského. Ten ho vyzve na duel, který skončí jeho smrtí. Oněgin je zdrcen, považuje ji však za zbytečnou a odjíždí do Petrohradu. Olga se po smrti Lenského rychle vdá za jiného, Taťána odjíždí do Moskvy a provdá se za staršího knížete, který je Oněginovým bratrancem. Po letech se Oněgin s Taťánou setká v Moskvě, vyzná jí lásku, ale Taťána ho odmítne, protože chce zůstat věrná svému muži.", correct: false},
		 { text: "Řehoř Samsa, obchodní cestující, se jednoho rána probudí a zjistí, že se proměnil v obří hmyz. Neschopen vykonávat svou práci, se stává pro rodinu čím dál větší příteží. Postupně se zhoršují vztahy mezi ním a rodinou, která ho začíná nenávidět. Řehoř prožívá pocity osamělosti a odcizení, zatímco se rodina snaží přizpůsobit životu bez jeho finanční podpory. Z Řehoře se stává čím dál tím větší zvíře. Když nestačí práce všech zbývajících členů rodiny, tak si k sobě berou 3 nájemníky. Ti o Řehořovi neví, ale jednoho večera jej uvidí, což je znechutí natolik, že z bytu odejdou. Když to pro rodinu vypadá nejhůř, tak Řehoř umírá, což jeho rodina bere, jako velkou úlevu.", correct: false},
		 { text: "Příběh vypráví o Pablu Ibbietovi, který je zajat během Španělské občanské války a čeká na popravu. Během noci ve vězení přemýšlí nad smrtí, absurditou svého osudu a ztrátou smyslu života. Jeho spoluvězni, Tom a Juan, mají podobné pocity bezmoci. Poté co jsou Tom a Juan odvedeni a popraveni je vyslechnut znovu, kde je Ramón Gris . Zde se z důstojníků rozhodne vystřelit a řekne, že je na hřbitově. je odveden a za pár hodin, k jeho udivení, propuštěn. Na dvoře se dozvídá od přítele, že kvůli špatné shodě náhod jim Pablo nelhal, ale navedl je na jeho pravou stopu a zabili jej. Příběh končí mentálním zhroucením Pabla.", correct: true},
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
		 { text: "Jen dialog", correct: false},
		 { text: "Jak monilog, tak také i dialog", correct: true},
		]
	},
	{
		question: "Co je hlavním tématem meziválečné literatury?",
		answers: [
		 { text: "Romantická láska", correct: false},
		 { text: "Následky a dopady 1. světové války", correct: true},
		 { text: "Renesanční obrození", correct: false},
		 { text: "Průmyslová revoluce", correct: false},
		]
	},
	{
		question: "K čemu meziválečná literatura směřuje svým obsahem?",
		answers: [
		 { text: "K předzvěsti 2. světové války", correct: true},
		 { text: "K oslavě středověku", correct: false},
		 { text: "K návratu k antice", correct: false},
		 { text: "K národnímu obrození", correct: false},
		]
	},
	{
		question: "Který diktátor se v té době dostává k moci v Německu?",
		answers: [
		 { text: "Benito Mussolini", correct: false},
		 { text: "Josif Stalin", correct: false},
		 { text: "Adolf Hitler", correct: true},
		 { text: "Winston Churchill", correct: false},
		]
	},
	{
		question: "Jaké politické směry v Evropě tehdy nastupují?",
		answers: [
		 { text: "Renesanční a barokní", correct: false},
		 { text: "Demokratické a monarchistické", correct: false},
		 { text: "Naturalistické a romantické", correct: false},
		 { text: "Nacionalistické a komunistické", correct: true},
		]
	},
	{
		question: "Kdy vzniká existencialismus?",
		answers: [
		 { text: "Na začátku 20. století", correct: true},
		 { text: "V 18. století", correct: false},
		 { text: "V 19. století", correct: false},
		 { text: "V polovině 21. století", correct: false},
		]
	},
	{
		question: "Na co klade existencialismus největší důraz?",
		answers: [
		 { text: "Na národní hrdost", correct: false},
		 { text: "Na přírodní krásy", correct: false},
		 { text: "Na technický pokrok", correct: false},
		 { text: "Na individuální svobodu a odpovědnost", correct: true},
		]
	},
	{
		question: "Jaká témata se často objevují v existencialismu?",
		answers: [
		 { text: "Renesanční umění a věda", correct: false},
		 { text: "Vítězství armád a vojenství", correct: false},
		 { text: "Existenciální otázky a absurdita lidského života", correct: true},
		 { text: "Průmyslový rozvoj", correct: false},
		]
	},
	{
		question: "Jaké jsou typické rysy existencialistického hrdiny?",
		answers: [
		 { text: "Je řízen osudem, nemá volbu", correct: false},
		 { text: "Rozhoduje o svém osudu, prožívá absurditu a ztrátu identity", correct: true},
		 { text: "Je to ideální rytíř, ochránce slabých", correct: false},
		 { text: "Vždy končí šťastně", correct: false},
		]
	},
	{
		question: "Jaký je postoj existencialismu k Bohu?",
		answers: [
		 { text: "Silná víra v Boha", correct: false},
		 { text: "Náboženská neutralita", correct: false},
		 { text: "Absence Boha", correct: true},
		 { text: "Oslava církve", correct: false},
		]
	},
	{
		question: "Kdy se narodil Jean-Paul Sartre?",
		answers: [
		 { text: "1905", correct: true},
		 { text: "2005", correct: false},
		 { text: "1755", correct: false},
		 { text: "1899", correct: false},
		]
	},
	{
		question: "Kdy zemřel Sartre?",
		answers: [
		 { text: "2010", correct: false},
		 { text: "1945", correct: false},
		 { text: "1980", correct: true},
		 { text: "1999", correct: false},
		]
	},
	{
		question: "Kde žil v dětství?",
		answers: [
		 { text: "U svých prarodičů z otcovy strany", correct: false},
		 { text: "V internátní škole", correct: false},
		 { text: "V klášteře", correct: false},
		 { text: "U děda z matčiny strany", correct: true},
		]
	},
	{
		question: "Čím se stal po studiích?",
		answers: [
		 { text: "Profesorem filozofie", correct: true},
		 { text: "Lékařem", correct: false},
		 { text: "Novinářem", correct: false},
		 { text: "Politikem", correct: false},
		]
	},
	{
		question: "Jaký směr Sartre na čas podporoval?",
		answers: [
		 { text: "Romantismus", correct: false},
		 { text: "Realismus", correct: false},
		 { text: "Marxismus", correct: true},
		 { text: "Humanismus", correct: false},
		]
	},
	{
		question: "Proč se odklonil od marxismu?",
		answers: [
		 { text: "Byl věřící katolík", correct: false},
		 { text: "Neměl rád Karla Marxe", correct: false},
		 { text: "Nesouhlasil s ruskými komunisty", correct: true},
		 { text: "Chtěl se věnovat pouze literatuře", correct: false},
		]
	},
	{
		question: "Jaký zdravotní problém měl na konci života?",
		answers: [
		 { text: "Ztratil paměť", correct: false},
		 { text: "Přestal mluvit", correct: false},
		 { text: "Ochrnul", correct: false},
		 { text: "Oslep", correct: true},
		]
	},
	{
		question: "Co mělo vliv na jeho dramata?",
		answers: [
		 { text: "Středověké legendy", correct: false},
		 { text: "Barokní hudba", correct: false},
		 { text: "Antické divadlo a osvícenství", correct: true},
		 { text: "Gotická architektura", correct: false},
		]
	},
	{
		question: "Na čem mu při psaní moc nezáleželo?",
		answers: [
		 { text: "Na historické realitě", correct: true},
		 { text: "Na existenciální filozofii", correct: false},
		 { text: "Na symbolice", correct: false},
		 { text: "Na subjektivním prožívání", correct: false},
		]
	},
	{
		question: "Které z uvedených děl NENAPSAL Sartre?",
		answers: [
		 { text: "Mouchy", correct: false},
		 { text: "Nevolnost", correct: false},
		 { text: "Cesty svobody", correct: false},
		 { text: "Proces", correct: true},
		]
	},
	{
		question: "Kdo byl Jean-Paul Sartre?",
		answers: [
		 { text: "Německý básník", correct: false},
		 { text: "Italský malíř", correct: false},
		 { text: "Francouzský filozof, dramatik a spisovatel", correct: true},
		 { text: "Český historik", correct: false},
		]
	},
	{
		question: "Co je Sartreho největší přínos?",
		answers: [
		 { text: "Zakladatel impresionismu", correct: false},
		 { text: "Zakladatel romantismu", correct: false},
		 { text: "Zakladatel existencialismu", correct: true},
		 { text: "Zakladatel symbolismu", correct: false},
		]
	},
	{
		question: "Jak se jmenovala jeho životní partnerka?",
		answers: [
		 { text: "Simone de Beauvoir", correct: true},
		 { text: "Virginia Woolfová", correct: false},
		 { text: "Marie Curie", correct: false},
		 { text: "Colette", correct: false},
		]
	},
	{
		question: "Co Sartre udělal v roce 1964?",
		answers: [
		 { text: "Přijal Nobelovu cenu", correct: false},
		 { text: "Odmítl Nobelovu cenu za literaturu", correct: true},
		 { text: "Byl zvolen prezidentem Francie", correct: false},
		 { text: "Vydal svůj první román", correct: false},
		]
	},
	{
		question: "Jaký časopis Sartre spoluzaložil v roce 1945?",
		answers: [
		 { text: "Le Monde", correct: false},
		 { text: "Cahiers du cinéma", correct: false},
		 { text: "Les Temps modernes", correct: true},
		 { text: "Le Figaro", correct: false},
		]
	},
	{
		question: "Na jaká témata se zaměřovala Sartrova díla?",
		answers: [
		 { text: "Národní hrdost a dějiny", correct: false},
		 { text: "Přírodní krásy", correct: false},
		 { text: "Válečné události", correct: false},
		 { text: "Svoboda, odpovědnost, absurdita", correct: true},
		]
	},
	{
		question: "Jaké další dílo NAPSAL Sartre?",
		answers: [
		 { text: "Nevolnost", correct: true},
		 { text: "Proces", correct: false},
		 { text: "Cizinec", correct: false},
		 { text: "Zámek", correct: false},
		]
	},
	{
		question: "Literární směr – další autoři světoví",
		answers: [
		 { text: "Charles Dickens, Honoré de Balzac, Émile Zola", correct: false},
		 { text: "Lev Nikolajevič Tolstoj, Fjodor Michajlovič Dostojevskij", correct: false},
		 { text: "Franza Kafka, Albert Camus, Simone de Beauvoir", correct: true},
		 { text: "William Shakespeare, Johann Wolfgang Goethe, Walt Whitman", correct: false},
		]
	},
	{
		question: "Literární směr – další autoři čeští",
		answers: [
		 { text: "Josef Škvorecký, Ladislav Fuks, Jiří Orten", correct: true},
		 { text: "Karel Čapek, Josef Karel Šlejha, Ladislav Klíma", correct: false},
		 { text: "Božena Němcová, Karel Hynek Mácha, Alois Jirásek", correct: false},
		 { text: "Viktor Dyk, Jiří Wolker, Jaroslav Hašek", correct: false},
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
