const questions = [
	{
		question: "Jaký druh je kniha Proměna?",
		answers: [
		 { text: "Lyrika", correct: false},
		 { text: "Drama", correct: false},
		 { text: "Epika", correct: true},
		]
	},
	{
		question: "Jaká forma je kniha Proměna?",
		answers: [
		 { text: "Drama", correct: false},
		 { text: "Próza", correct: true},
		 { text: "Poezie", correct: false},
		]
	},
	{
		question: "Jaký žánr je kniha Proměna?",
		answers: [
		 { text: "Poema (což je román ve verších)", correct: false},
		 { text: "Satiristická fantasie s prvky tragikomedie.", correct: false},
		 { text: "Gotická hororová povídka", correct: false},
		 { text: "Absurdní povídka / existenciální novela (ukazuje existenci samotnou, ale i její absurditu)", correct: true},
		]
	},
	{
		question: "Co je hlavní téma knihy?",
		answers: [
		 { text: "poukázání na nelidské chování, kterému jsou podrobeni společenští odpadlíci", correct: false},
		 { text: "nenaplněná láska a pohrdání společností, bezcitnost způsobená přebytkem dobrých věcí", correct: false},
		 { text: "proměna a odcizení od společnosti, zdivočení a snaha o pomoc", correct: true},
		 { text: "nepřímá kritika totality, jejích praktik a nesvobody, absurdita normalizace", correct: false},
		]
	},
	{
		question: "Co jsou hlavní motivy knihy?",
		answers: [
		 { text: "alkohol a jeho ničivý vliv, beznaděj, rozklad rodiny a morálních hodnot", correct: false},
		 { text: "proměna, odcizení od společnosti a rodiny, rodinné vztahy a konflikty, osamělost, smrt", correct: true},
		 { text: "matka, touha, ponocný, sklep, hlas, smích, loď, den, krysa a host", correct: false},
		 { text: "žárlivost X nenaplněná láska, venkov X město, smutek, elegance", correct: false},
		]
	},
	{
		question: "Kdy byla kniha vydána?",
		answers: [
		 { text: "1934", correct: false},
		 { text: "1915", correct: true},
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
		 { text: "čas není určen, takže se kniha odehrává v autorově současnosti (v průběhu několika měsícu)", correct: true},
		]
	},
	{
		question: "Časoprostor - Kde?",
		answers: [
		 { text: "ve Francii v Paříži v domě Harpagona", correct: false},
		 { text: "v neurčitém městě v neurčitém státě", correct: true},
		 { text: "ve fiktivní reprodukci Mexika", correct: false},
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
		 { text: "Skládá z předmluvy, prologu a 10 obrazů", correct: false},
		 { text: "4 díly a 51 kapitol", correct: false},
		 { text: "3 části", correct: true},
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
		 { text: "Er-forma ", correct: false},
		 { text: "Není", correct: false},
		 { text: "Vypravěč vypráví v er-formě do poslední kapitoly, kde vypráví v ich-formě.", correct: true},
		]
	},
	{
		question: "Vypravěč dle vyprávěcí roviny?",
		answers: [
		 { text: "Není", correct: false},
		 { text: "Přímý vypravěč ", correct: false},
		 { text: "Neosobní vypravěč, protože vystupuje v er-formě, zaznamenává chování postav, ale neví, co si myslí.", correct: true},
		 { text: "Personální vypravěč", correct: false},
		]
	},
	{
		question: "Postavy - Řehoř Samsa",
		answers: [
		 { text: "Hlavní postava, obchodník, který se promění v hmyz. Ztrácí lidskost a z podpory rodiny se stává břemenem.", correct: true},
		 { text: "Hlavní kladná postava, vůdce loupežníků a romantický tragický hrdina, který se mstí za křivdu a pravdivě miluje Jarmilu.", correct: false},
		 { text: "Hlavní kladný hrdina, revolucionář, nespravedlivě odsouzen, nakonec si vezme Dolores.", correct: false},
		 { text: "Vysoký, štíhlý, chladný a odtažitý muž. Vyvádí krysy z Hammeln, zamiluje se do Agnes. Po její smrti zahraje píseň zkázy a zahyne sám skokem do propasti.", correct: false},
		]
	},
	{
		question: "Postavy - Paní Samsová",
		answers: [
		 { text: "Hlavní kladný hrdina, vlastenecký kat, měl popravit Melichara, ale je poctivý, nakonec si vezme Juanillu.", correct: false},
		 { text: "Krásná dívka, zamiluje se do Krysaře, ale je i milenkou dlouhého Kristiána. Po otěhotnění spáchá sebevraždu.", correct:false},
		 { text: "Hlavní kladná postava. Tichá, stydlivá, moudrá a okouzlující. Ráda na venkově. Po odchodu Oněgina si vezme jeho bratrance.", correct: false},
		 { text: "Řehořova matka, milující, ale slabá, nedokáže se s proměnou vyrovnat, musí pracovat.", correct: true},
		]
	},
	{
		question: "Postavy - Pan Samsa",
		answers: [
		 { text: "Hlavní záporná postava, záletník a krutý muž, Vilémův otec, který ho v mládí vyhnal z domu; v knize je spíše fiktivní.", correct: false},
		 { text: "Vedlejší kladná postava. Jedná se o starostlivou starší ženu, která miluje svou dceru, a strachuje se o ní.", correct: false},
		 { text: "Otec, autoritativní a tvrdý, syna postupně zavrhuje, také pracuje.", correct: true},
		 { text: "Hlavní záporný vůdce revolucionářů, touží po moci, otec Dolores.", correct: false},
		]
	},
	{
		question: "Postavy - Markéta Samsová",
		answers: [
		 { text: "Sestra, nejdřív pečující, pak se od Řehoře odvrací, hraje na housle, musí pracovat.", correct: true},
		 { text: "Vedlejší záporná postava. Je to Čech, který sympatizuje s Němci.", correct: false},
		 { text: "Vedlejší neutrální postava. Dcera Gervaisy, která kvůli nefunkční rodině skončí jako prostitutka. Jako dítě neposedná a velmi svá.", correct: false},
		 { text: "Fiktivní kladná postava. Jedná se o hrdinu příběhu, který vypravěč vypráví Roderickovi, když se v noci v bouřce začínají dít strašidelné věci. Je statečný.", correct: false},
		]
	},
	{
		question: "Postavy - Nájemníci",
		answers: [
		 { text: "Hlavní záporná postava, záletník a krutý muž, Vilémův otec, který ho v mládí vyhnal z domu; v knize je spíše fiktivní.", correct: false},
		 { text: "kladná, neteř Almary, pomáhá hrdinům, vdá se za Gaspara.", correct: false},
		 { text: "Správce u Harpagona, milenec Elisy, ve skutečnosti šlechtic.", correct: false},
		 { text: "Vzdělaní a zámožní muži, kteří si pronajmou pokoj. Po odhalení Řehoře jsou znechuceni.", correct: true},
		]
	},
	{
		question: "Děj?",
		answers: [
		 { text: "Evžen Oněgin, známý jako „lev salónů“ v Petrohradu, je znuděný a pohrdá lidmi. Po smrti svého strýce dědí jeho venkovský dům. Na venkově se seznámí s idealistickým básníkem Vladimírem Lenským a navštíví dům vdovy Larinové a jejích dvou dcer – Olgy a Taťány. Oněgin Olgu považuje za povrchní, zatímco Taťána se do něj zamiluje a napíše mu dopis, který Oněgin odmítne. Na plese, kdy lidé myslí, že mají Oněgin a Taťána něco společného, tančí Oněgin s Olgou, což rozzlobí Lenského. Ten ho vyzve na duel, který skončí jeho smrtí. Oněgin je zdrcen, považuje ji však za zbytečnou a odjíždí do Petrohradu. Olga se po smrti Lenského rychle vdá za jiného, Taťána odjíždí do Moskvy a provdá se za staršího knížete, který je Oněginovým bratrancem. Po letech se Oněgin s Taťánou setká v Moskvě, vyzná jí lásku, ale Taťána ho odmítne, protože chce zůstat věrná svému muži.", correct: false},
		 { text: "Řehoř Samsa, obchodní cestující, se jednoho rána probudí a zjistí, že se proměnil v obří hmyz. Neschopen vykonávat svou práci, se stává pro rodinu čím dál větší příteží. Postupně se zhoršují vztahy mezi ním a rodinou, která ho začíná nenávidět. Řehoř prožívá pocity osamělosti a odcizení, zatímco se rodina snaží přizpůsobit životu bez jeho finanční podpory. Z Řehoře se stává čím dál tím větší zvíře. Když nestačí práce všech zbývajících členů rodiny, tak si k sobě berou 3 nájemníky. Ti o Řehořovi neví, ale jednoho večera jej uvidí, což je znechutí natolik, že z bytu odejdou. Když to pro rodinu vypadá nejhůř, tak Řehoř umírá, což jeho rodina bere, jako velkou úlevu.", correct: true},
		 { text: "Vaněk přijde do kanceláře sládka, který mu nabízí pivo a vede s ním rozhovor o práci, známých i možnosti přesunu do skladu – ovšem za cenu, že by musel donášet. Vaněk odmítá, sládek se rozzlobí, poté smutní a opile usíná. Vaněk odejde, ale po chvíli se vrací a chová se jinak, což může naznačovat, že si ze sládka utahuje.", correct: false},
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
		question: "Na čí stranu se zapojila Itálie na začátku 1. světové války?",
		answers: [
		 { text: "Na stranu Německa", correct: false},
		 { text: "Na stranu Spojenců", correct: true},
		 { text: "Na stranu Rakouska-Uherska", correct: false},
		 { text: "Zůstala neutrální", correct: false},
		]
	},
	{
		question: "Kdo zběhával z Rakousko-Uherské armády a tvořil legie?",
		answers: [
		 { text: "Češi a Slováci", correct: true},
		 { text: "Němci a Poláci", correct: false},
		 { text: "Rakušané a Maďaři", correct: false},
		 { text: "Italové a Srbové", correct: false},
		]
	},
	{
		question: "Kde utrpěli Spojenci porážku?",
		answers: [
		 { text: "U Verdunu", correct: false},
		 { text: "U Zborova", correct: false},
		 { text: "U Gallipoli", correct: true},
		 { text: "U Stalingradu", correct: false},
		]
	},
	{
		question: "K jaké tragické události došlo v Turecku během války?",
		answers: [
		 { text: "Genocida Židů", correct: false},
		 { text: "Genocida Řeků", correct: false},
		 { text: "Genocida Kurdů", correct: false},
		 { text: "Genocida Arménů", correct: true},
		]
	},
	{
		question: "Jaká dohoda předznamenala vznik Československa?",
		answers: [
		 { text: "Clevelandská dohoda", correct: true},
		 { text: "Trianonská dohoda", correct: false},
		 { text: "Versailleská dohoda", correct: false},
		 { text: "Washingtonská dohoda", correct: false},
		]
	},
	{
		question: "Co bylo typické pro experimentální (moderní) literární proud?",
		answers: [
		 { text: "Držení se klasické stavby románu", correct: false},
		 { text: "Narušení klasické stavby, složitá symbolika a absurdity", correct: true},
		 { text: "Historické vyprávění bez symboliky", correct: false},
		 { text: "Pouze lidové příběhy a bajky", correct: false},
		]
	},
	{
		question: "Co dělá tento proud s čtenářem?",
		answers: [
		 { text: "Dává mu jasný konec bez prostoru pro myšlení", correct: false},
		 { text: "Zahrnuje ho do příběhu jako postavu", correct: false},
		 { text: "Nechává ho domýšlet", correct: true},
		 { text: "Nutí číst jen poezii", correct: false},
		]
	},
	{
		question: "Ke které literární skupině patřil zmíněný autor?",
		answers: [
		 { text: "K českým romantikům", correct: false},
		 { text: "K pražským německy píšícím autorům", correct: true},
		 { text: "K německým klasicistům", correct: false},
		 { text: "K americkým modernistům", correct: false},
		]
	},
	{
		question: "Kdy vznikl existencialismus?",
		answers: [
		 { text: "V 18. století", correct: false},
		 { text: "V 19. století", correct: false},
		 { text: "Na začátku 20. století", correct: true},
		 { text: "V polovině 21. století", correct: false},
		]
	},
	{
		question: "Na co klade existencialismus důraz?",
		answers: [
		 { text: "Na individuální svobodu a odpovědnost", correct: true},
		 { text: "Na národní tradice", correct: false},
		 { text: "Na krásu přírody", correct: false},
		 { text: "Na přesnou vědeckou logiku", correct: false},
		]
	},
	{
		question: "Jaká témata jsou typická pro existencialismus?",
		answers: [
		 { text: "Národní obrození a vlastenectví", correct: false},
		 { text: "Realismus a popis každodennosti", correct: false},
		 { text: "Existence člověka, absurdita, ztráta identity", correct: true},
		 { text: "Antické mýty a hrdinství", correct: false},
		]
	},
	{
		question: "Jak obvykle končí hrdina existencialistického díla?",
		answers: [
		 { text: "Úspěchem a štěstím", correct: false},
		 { text: "Sňatkem", correct: false},
		 { text: "Útěkem do přírody", correct: false},
		 { text: "Smrtí nebo tragickým osudem", correct: true},
		]
	},
	{
		question: "Kdy vznikl expresionismus?",
		answers: [
		 { text: "Na začátku 20. století", correct: true},
		 { text: "V 18. století", correct: false},
		 { text: "V 16. století", correct: false},
		 { text: "V polovině 19. století", correct: false},
		]
	},
	{
		question: "Na co reagoval expresionismus?",
		answers: [
		 { text: "Na baroko a klasicismus", correct: false},
		 { text: "Na romantismus a realismus", correct: false},
		 { text: "Na impresionismus a naturalismus", correct: true},
		 { text: "Na futurismus a surrealismus", correct: false},
		]
	},
	{
		question: "Jaký byl hlavní cíl expresionismu?",
		answers: [
		 { text: "Zobrazit jen krásu přírody", correct: false},
		 { text: "Popsat realitu co nejvěrněji", correct: false},
		 { text: "Vyjádřit subjektivní emoce a vnitřní svět umělce", correct: true},
		 { text: "Idealizovat hrdiny a jejich činy", correct: false},
		]
	},
	{
		question: "Jaké prostředky jsou typické pro expresionismus?",
		answers: [
		 { text: "Strohá realističnost", correct: false},
		 { text: "Historická přesnost", correct: false},
		 { text: "Pouze poezie bez obrazů", correct: false},
		 { text: "Zkreslení, barevnost, dramatické prvky", correct: true},
		]
	},
	{
		question: "Kdo byl Franz Kafka?",
		answers: [
		 { text: "Český romantický básník", correct: false},
		 { text: "Francouzský dramatik", correct: false},
		 { text: "Německy píšící český spisovatel", correct: true},
		 { text: "Rakouský historik", correct: false},
		]
	},
	{
		question: "Z jakého prostředí Kafka pocházel?",
		answers: [
		 { text: "Z rodiny zámožného obchodníka", correct: true},
		 { text: "Z chudé rolnické rodiny", correct: false},
		 { text: "Z rodiny úředníka", correct: false},
		 { text: "Z rodiny hudebníků", correct: false},
		]
	},
	{
		question: "Jaké zaměstnání vykonával Kafka po studiích?",
		answers: [
		 { text: "Učitel", correct: false},
		 { text: "Lékař", correct: false},
		 { text: "Novinář", correct: false},
		 { text: "Úředník v pojišťovně", correct: true},
		]
	},
	{
		question: "Kdy Kafkovi propukla plicní choroba?",
		answers: [
		 { text: "1826", correct: false},
		 { text: "1720", correct: false},
		 { text: "1917", correct: true},
		 { text: "2048", correct: false},
		]
	},
	{
		question: "Kde Kafka zemřel?",
		answers: [
		 { text: "V Německu", correct: false},
		 { text: "V Praze", correct: false},
		 { text: "V Rakousku", correct: true},
		 { text: "Ve Francii", correct: false},
		]
	},
	{
		question: "Jaké téma je typické pro Kafkovu tvorbu?",
		answers: [
		 { text: "Absurdity a existenciální odcizení", correct: true},
		 { text: "Láska a hrdinství", correct: false},
		 { text: "Historické události", correct: false},
		 { text: "Přírodní motivy", correct: false},
		]
	},
	{
		question: "Kdo vydal většinu Kafkových děl po jeho smrti?",
		answers: [
		 { text: "Jeho sestra", correct: false},
		 { text: "Max Brod", correct: true},
		 { text: "Jaroslav Hašek", correct: false},
		 { text: "Sigmund Freud", correct: false},
		]
	},
	{
		question: "Jaké dílo Kafka za života požadoval spálit?",
		answers: [
		 { text: "Jen román Zámek", correct: false},
		 { text: "Jen román Proces", correct: false},
		 { text: "Všechna svá díla", correct: true},
		 { text: "Jen povídky", correct: false},
		]
	},
	{
		question: "Které z těchto děl NENÍ Kafkovo?",
		answers: [
		 { text: "Revizor", correct: true},
		 { text: "Proces", correct: false},
		 { text: "Nezvěstný", correct: false},
		 { text: "Zámek", correct: false},
		]
	},
	{
		question: "Literární směr – další autoři světoví",
		answers: [
		 { text: "Charles Dickens, Honoré de Balzac, Émile Zola", correct: false},
		 { text: "Lev Nikolajevič Tolstoj, Fjodor Michajlovič Dostojevskij", correct: false},
		 { text: "Albert Camus, Georg Heym, Jean-Paul Sartre", correct: true},
		 { text: "William Shakespeare, Johann Wolfgang Goethe, Walt Whitman", correct: false},
		]
	},
	{
		question: "Literární směr – další autoři čeští",
		answers: [
		 { text: "Jan Neruda, Jaroslav Vrchlický, František Gellner", correct: true},
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
