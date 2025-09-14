const questions = [
	{
		question: "Jaký druh je kniha Smrt v Benátkách?",
		answers: [
		 { text: "Lyrika", correct: false},
		 { text: "Drama", correct: false},
		 { text: "Epika", correct: true},
		]
	},
	{
		question: "Jaká forma je kniha Smrt v Benátkách?",
		answers: [
		 { text: "Drama", correct: false},
		 { text: "Próza", correct: true},
		 { text: "Poezie", correct: false},
		]
	},
	{
		question: "Jaký žánr je kniha Smrt v Benátkách?",
		answers: [
		 { text: "Existenciální povídka", correct: false},
		 { text: "Román", correct: false},
		 { text: "Novela", correct: true},
		 { text: "Absurdní povídka / existenciální novela (ukazuje existenci samotnou, ale i její absurditu)", correct: false},
		]
	},
	{
		question: "Co je hlavní téma knihy?",
		answers: [
		 { text: "poznání sama sebe, nový život, okouzlení a platonická + homosexuální láska", correct: true},
		 { text: "zamyšlení nad smrtí a absurditou lidského života, svoboda a bezvýchodnost lidské existence", correct: false},
		 { text: "alegorie, která varuje před vzrůstem nacismu, lidská chamtivost", correct: false},
		 { text: "nepřímá kritika totality, jejích praktik a nesvobody, absurdita normalizace", correct: false},
		]
	},
	{
		question: "Co jsou hlavní motivy knihy?",
		answers: [
		 { text: "alkohol a jeho ničivý vliv, beznaděj, rozklad rodiny a morálních hodnot", correct: false},
		 { text: "proměna, odcizení od společnosti a rodiny, rodinné vztahy a konflikty, osamělost, smrt", correct: false},
		 { text: "matka, touha, ponocný, sklep, hlas, smích, loď, den, krysa a host", correct: false},
		 { text: "samota, nemoc, okouzlení, inspirace, láska, sexuální orientace, vyšší společnost, Benátky, vidiny a sny", correct: true},
		]
	},
	{
		question: "Kdy byla kniha vydána?",
		answers: [
		 { text: "Dílo nejdříve vycházelo na pokračování v Lidových novinách (1935 - 1936). První knižní vydání bylo roku 1936", correct: false},
		 { text: "1912", correct: true},
		 { text: "1939", correct: false},
		 { text: "2000", correct: false},
		]
	},
	{
		question: "Časoprostor - Kdy?",
		answers: [
		 { text: "v průběhu 2 dnů v průběhu Španělské občanské války (1936 - 1939), takže v 1. polovině 20. století. Přesný rok neznáme", correct: false},
		 { text: "v průběhu několika let na začátku 19. století", correct: false},
		 { text: "ve 20. století v průběhu několika dní až týdnů", correct: true},
		 { text: "Z díla není možno určit, ve kterém roku se kniha odehrává. Je ale jisté, že se dílo odehrává v meziválečných letech", correct: false},
		]
	},
	{
		question: "Časoprostor - Kde?",
		answers: [
		 { text: "v Německu, Chorvatsku, Itálii (Benátkách) na plážích a v hotelech", correct: true},
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
		 { text: "Chronologická", correct: false},
		 { text: "Chronologicky, i s retrospektivními prvky", correct: true},
		]
	},
	{
		question: "Jaká je kompozice vnější?",
		answers: [
		 { text: "Skládá ze 3 knih, které čítají dohromady 27 kapitol", correct: false},
		 { text: "Skládá z předmluvy, prologu a 10 obrazů", correct: false},
		 { text: "4 díly a 51 kapitol", correct: false},
		 { text: "5 kapitol", correct: true},
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
		question: "Postavy - Gustav von Aschenbach",
		answers: [
		 { text: "Hlavní kladná postava. Je to vězeň odsouzený k smrti, který se musí vyrovnat s myšlenkou vlastní smrti. Když čeká na popravu, tak přemýšlí nad svým životem.", correct: false},
		 { text: "Hlavní kladná postava, vůdce loupežníků a romantický tragický hrdina, který se mstí za křivdu a pravdivě miluje Jarmilu.", correct: false},
		 { text: "Hlavní kladný hrdina, revolucionář, nespravedlivě odsouzen, nakonec si vezme Dolores.", correct: false},
		 { text: "Hlavní kladná postava. Je to německý autor a skladatel, který je velmi uznávaný. Je starý, inteligentní, ale také smutný, znuděný životem a vyhořelý. Chce změnu a tu nachází v Tadziovi. Přitahují ho muži. Hnusí se mu vyšší společnost, ale postupem času se jí stává součástí.", correct: true},
		]
	},
	{
		question: "Postavy - Tadzio",
		answers: [
		 { text: "Hlavní kladná postava. Je to 14letý polský chlapec. Je velmi pohledný a zvídavý. Jeho vlastnosti nejsou moc popsány. Rád koketuje. Pochází z bohaté rodiny. Je inspirací pro Aschenbacha.", correct: true},
		 { text: "Krásná dívka, zamiluje se do Krysaře, ale je i milenkou dlouhého Kristiána. Po otěhotnění spáchá sebevraždu.", correct:false},
		 { text: "Syn pana Povondry, dospívá v průběhu knihy, uklidňuje otce, že vina je společná lidstvu.", correct: false},
		 { text: "Řehořova matka, milující, ale slabá, nedokáže se s proměnou vyrovnat, musí pracovat.", correct: false},
		]
	},
	{
		question: "Postavy - další postavy?",
		answers: [
		 { text: "sestry, matka, služky, vychovatelka", correct: true},
		 { text: "otec, matka, hrobník", correct: false},
		 { text: "polednice, vodník, dívka", correct: false},
		 { text: "stařec, dítě, krysař, Barbara", correct: false},
		]
	},
	{
		question: "Děj?",
		answers: [
		 { text: "Slavný německý spisovatel Gustav von Aschenbach, zničený ztrátou rodiny a zklamaný ze společnosti plné pokrytectví, odjíždí do Benátek. V hotelu potká čtrnáctiletého polského chlapce Tadzia, do něhož se platonicky zamiluje a obdivuje ho jako dokonalý ideál krásy. Jeho fascinace chlapcem se stává inspirací pro tvorbu, ale také odhaluje jeho skryté city. V Benátkách propukne epidemie cholery, přesto Aschenbach odmítá odjet, aby zůstal blízko Tadzia. Když polská rodina odjíždí, Aschenbach se zhroutí a umírá v lehátku pohledem upřeným na chlapce.", correct: true},
		 { text: "Řehoř Samsa, obchodní cestující, se jednoho rána probudí a zjistí, že se proměnil v obří hmyz. Neschopen vykonávat svou práci, se stává pro rodinu čím dál větší příteží. Postupně se zhoršují vztahy mezi ním a rodinou, která ho začíná nenávidět. Řehoř prožívá pocity osamělosti a odcizení, zatímco se rodina snaží přizpůsobit životu bez jeho finanční podpory. Z Řehoře se stává čím dál tím větší zvíře. Když nestačí práce všech zbývajících členů rodiny, tak si k sobě berou 3 nájemníky. Ti o Řehořovi neví, ale jednoho večera jej uvidí, což je znechutí natolik, že z bytu odejdou. Když to pro rodinu vypadá nejhůř, tak Řehoř umírá, což jeho rodina bere, jako velkou úlevu.", correct: false},
		 { text: "Kapitán Van Toch objeví na ostrově Tana Masa inteligentní mloky, které učí lovit perly a bránit se proti žralokům. Po návratu do Čech uzavírá obchod s G. H. Bondym, čímž vzniká Pacifická Exportní Společnost (PES). Van Toch rozváží mloky po dalších ostrovech, kde se stávají pracovní silou. Syn boháče Abe Loeb a jeho přítelkyně Li mloky poprvé spatří; Li se jich bojí, ale později chce natáčet film. Po Van Tochově smrti mloci slouží lidem, postupně se množí a stávají se inteligentnějšími. Druhá část popisuje jejich společenský vývoj, vědecký výzkum a právní otázky. Mloci začínají ohrožovat lidi, žádají pevniny a rozpoutávají válku. Na konci knihy se ukazuje, že se dokázali adaptovat i na sladkou vodu a jeden mlok se objevuje ve Vltavě. Závěr tvoří dialog autora s jeho vnitřním hlasem, který rozhoduje o přežití lidstva. Mloci se nakonec vyhubí sami, lidé se vracejí a pevniny se postupně obnovují.", correct: false},
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
		question: "V jakém období se text odehrává?",
		answers: [
		 { text: "Po 2. světové válce", correct: false},
		 { text: "Během 1. světové války", correct: false},
		 { text: "V době studené války", correct: false},
		 { text: "Před 1. světovou válkou", correct: true},
		]
	},
	{
		question: "Co rostlo v Rakousko-Uhersku?",
		answers: [
		 { text: "Nespokojenost utlačovaných národů", correct: true},
		 { text: "Podpora císaře", correct: false},
		 { text: "Hospodářský růst", correct: false},
		 { text: "Průmyslová revoluce", correct: false},
		]
	},
	{
		question: "Jaký nový směr vzbudil zájem v té době?",
		answers: [
		 { text: "Romantismus", correct: false},
		 { text: "Realismus", correct: false},
		 { text: "Psychoanalýza", correct: true},
		 { text: "Symbolismus", correct: false},
		]
	},
	{
		question: "Kdo se v Rusku osamostatnil?",
		answers: [
		 { text: "Menševici", correct: false},
		 { text: "Kozáci", correct: false},
		 { text: "Carové", correct: false},
		 { text: "Bolševici", correct: true},
		]
	},
	{
		question: "Jaký byl významný znak umění v tomto období?",
		answers: [
		 { text: "Návrat k tradici", correct: false},
		 { text: "Oslava monarchie", correct: false},
		 { text: "Hledání nových uměleckých forem", correct: true},
		 { text: "Vytváření pouze politické poezie", correct: false},
		]
	},
	{
		question: "Co znamenalo pálení knih v Německu v meziválečném období?",
		answers: [
		 { text: "Podporu nacistické ideologie", correct: false},
		 { text: "Zničení děl židovských autorů a odpůrců Hitlera", correct: true},
		 { text: "Oslavu svobody tisku", correct: false},
		 { text: "Propagaci německé literatury", correct: false},
		]
	},
	{
		question: "Na kolik proudů se dělila německá literatura?",
		answers: [
		 { text: "2", correct: false},
		 { text: "8", correct: false},
		 { text: "3", correct: true},
		 { text: "1", correct: false},
		]
	},
	{
		question: "Který proud německé literatury souhlasil s nacisty?",
		answers: [
		 { text: "Exil", correct: false},
		 { text: "Pronacistický", correct: true},
		 { text: "Vnitřní exil", correct: false},
		 { text: "Demokratický", correct: false},
		]
	},
	{
		question: "Co bylo charakteristické pro českou meziválečnou literaturu?",
		answers: [
		 { text: "Ztracená generace", correct: false},
		 { text: "Pronacistická literatura", correct: false},
		 { text: "Exilová literatura", correct: false},
		 { text: "Generace buřičů", correct: true},
		]
	},
	{
		question: "Kdo patřil do „ztracené generace“?",
		answers: [
		 { text: "Američtí autoři", correct: true},
		 { text: "Němečtí autoři v exilu", correct: false},
		 { text: "Čeští buřiči", correct: false},
		 { text: "Francouzští surrealisté", correct: false},
		]
	},
	{
		question: "Který román Thomase Manna ho proslavil v roce 1901?",
		answers: [
		 { text: "Kouzelný vrch", correct: false},
		 { text: "Smrt v Benátkách", correct: false},
		 { text: "Buddenbrookovi", correct: true},
		 { text: "Doktor Faustus", correct: false},
		]
	},
	{
		question: "Kam se Thomas Mann přestěhoval po smrti otce?",
		answers: [
		 { text: "Berlín", correct: false},
		 { text: "Vídeň", correct: false},
		 { text: "Paříž", correct: false},
		 { text: "Mnichov", correct: true},
		]
	},
	{
		question: "Proč Thomas Mann musel uprchnout z Německa?",
		answers: [
		 { text: "Kvůli demokratickým názorům a nacistům", correct: true},
		 { text: "Kvůli finančním problémům", correct: false},
		 { text: "Kvůli rodinným problémům", correct: false},
		 { text: "Kvůli nemocem", correct: false},
		]
	},
	{
		question: "Jaký je vztah Thomase Manna k sexuální orientaci?",
		answers: [
		 { text: "Přitahovali ho jen ženy", correct: false},
		 { text: "Byl asexuální", correct: false},
		 { text: "Přitahovali ho muži", correct: true},
		 { text: "Nikdy o tom nepřemýšlel", correct: false},
		]
	},
	{
		question: "Který román reflektuje nemoc jeho ženy?",
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
		 { text: "Dobrodružství v exotických zemích", correct: false},
		 { text: "Historie Německa", correct: false},
		 { text: "Rozklad a úpadek německé měšťanské vrstvy", correct: true},
		 { text: "Romantická láska", correct: false},
		]
	},
	{
		question: "Kde žil Thomas Mann po 2. světové válce?",
		answers: [
		 { text: "Švýcarsko", correct: true},
		 { text: "Německo", correct: false},
		 { text: "Itálie", correct: false},
		 { text: "Francie", correct: false},
		]
	},
	{
		question: "Jaký časopis redigoval Thomas Mann?",
		answers: [
		 { text: "Lidové noviny", correct: false},
		 { text: "Les Temps modernes", correct: false},
		 { text: "Národní listy", correct: false},
		 { text: "Simplicissimus", correct: true},
		]
	},
	{
		question: "Jaký román Thomase Manna reflektuje jeho vlastní sexuální orientaci?",
		answers: [
		 { text: "Buddenbrookovi", correct: false},
		 { text: "Doktor Faustus", correct: false},
		 { text: "Smrt v Benátkách", correct: true},
		 { text: "Kouzelný vrch", correct: false},
		]
	},
	{
		question: "Kam Thomas Mann emigroval během nacistické vlády?",
		answers: [
		 { text: "Francie a Itálie", correct: false},
		 { text: "Rakousko a Maďarsko", correct: false},
		 { text: "Švýcarsko a poté USA", correct: true},
		 { text: "Anglie a Kanada", correct: false},
		]
	},
	{
		question: "Který román napsal Thomas Mann po návratu do Švýcarska po 2. světové válce?",
		answers: [
		 { text: "Doktor Faustus", correct: true},
		 { text: "Buddenbrookovi", correct: false},
		 { text: "Kouzelný vrch", correct: false},
		 { text: "Smrt v Benátkách", correct: false},
		]
	},
	{
		question: "Co je hlavním tématem románu “Kouzelný vrch”?",
		answers: [
		 { text: "Politická satira", correct: false},
		 { text: "Nemoc jeho ženy a psychologické otázky", correct: true},
		 { text: "Dobrodružství na moři", correct: false},
		 { text: "Historie Německa", correct: false},
		]
	},
	{
		question: "Jaké společenské vrstvy Thomas Mann ve svých románech často zobrazoval?",
		answers: [
		 { text: "Sedláky", correct: false},
		 { text: "Dělníky", correct: false},
		 { text: "Německou měšťanskou vrstvu", correct: true},
		 { text: "Aristokracii", correct: false},
		]
	},
	{
		question: "Literární směr – další autoři světoví",
		answers: [
		 { text: "Egon Ervin Kirsch, Arnold Zweig, Erich Maria Remarque", correct: true},
		 { text: "Lev Nikolajevič Tolstoj, Fjodor Michajlovič Dostojevskij", correct: false},
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
		 { text: "Karel Čapek, Fráňa Šrámek, Vladislav Vančura", correct: true},
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
