const questions = [
	{
		question: "Jaký druh je kniha Evžen Oněgin?",
		answers: [
		 { text: "Lyrika", correct: false},
		 { text: "Drama", correct: false},
		 { text: "Epika", correct: false},
		 { text: "Lyricko-epický (Lyrika - subjektivní pocity, emoce; Epika - příběh, děj)", correct: true},
		]
	},
	{
		question: "Jaká forma je kniha Evžen Oněgin?",
		answers: [
		 { text: "Drama", correct: false},
		 { text: "Próza", correct: false},
		 { text: "Poezie", correct: false},
		 { text: "Poezie i Próza", correct: true},
		]
	},
	{
		question: "Jaký žánr je kniha Evžen Oněgin?",
		answers: [
		 { text: "Poema (což je román ve verších)", correct: true},
		 { text: "Sbírka baladických básní", correct: false},
		 { text: "Gotická hororová povídka", correct: false},
		 { text: "Naturalistický román", correct: false},
		]
	},
	{
		question: "Co je hlavní téma knihy?",
		answers: [
		 { text: "návštěva domu, které představuje minulost, touhy pomoct a poznat", correct: false},
		 { text: "nenaplněná láska a pohrdání společností, bezcitnost způsobená přebytkem dobrých věcí", correct: true},
		 { text: "vlastenectví, vina, trest, konflikt člověka se společností", correct: false},
		 { text: "nepřímá kritika totality, jejích praktik a nesvobody, absurdita normalizace", correct: false},
		]
	},
	{
		question: "Co jsou hlavní motivy knihy?",
		answers: [
		 { text: "alkohol a jeho ničivý vliv, beznaděj, rozklad rodiny a morálních hodnot", correct: false},
		 { text: "láska, příroda, emoce, kolo, lebka, hledání.", correct: false},
		 { text: "kasa, franky, mistr, proces, chvíle a milost", correct: false},
		 { text: "žárlivost X nenaplněná láska, venkov X město, smutek, elegance", correct: true},
		]
	},
	{
		question: "Kdy byla kniha vydána?",
		answers: [
		 { text: "1222", correct: false},
		 { text: "1842", correct: false},
		 { text: "1. souborné vydání bylo roku 1833", correct: true},
		 { text: "1800", correct: false},
		]
	},
	{
		question: "Časoprostor - Kdy?",
		answers: [
		 { text: "v neznámém roce v 2. polovině 19. století", correct: false},
		 { text: "v průběhu několika let na začátku 19. století", correct: true},
		 { text: "v průběhu několika podzimních dní (kdy přesně není určeno)", correct: false},
		 { text: "Čas není určen, takže se kniha odehrává v autorově současnosti.", correct: false},
		]
	},
	{
		question: "Časoprostor - Kde?",
		answers: [
		 { text: "ve Francii v Paříži v domě Harpagona", correct: false},
		 { text: "ve Francii v Paříži", correct: false},
		 { text: "v alegorickém městě, které má znázorňovat svět", correct: false},
		 { text: "v několika Ruských městech, ale primárně v Petrohradě a Moskvě a na venkovském panství Evžena Oněgina, které je v okolí Petrohradu", correct: true},
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
		 { text: "8 hlav (kapitol), každá sloka má 14 veršů", correct: true},
		 { text: "17 povídek", correct: false},
		 { text: "4 díly a 51 kapitol", correct: false},
		 { text: "Skládá ze 4 zpěvů a 2 intermezz", correct: false},
		]
	},
	{
		question: "Jaký je vypravěč podle literárního druhu?",
		answers: [
		 { text: "Vypravěč", correct: false},
		 { text: "Není", correct: false},
		 { text: "Lyrický subjekt", correct: true},
		]
	},
	{
		question: "Vypravěč dle gramatické osoby?",
		answers: [
		 { text: "Ich-forma", correct: false},
		 { text: "Er-forma ", correct: false},
		 { text: "Není", correct: false},
		 { text: "Jak Er-forma tak i Ich-forma", correct: true},
		]
	},
	{
		question: "Vypravěč dle vyprávěcí roviny?",
		answers: [
		 { text: "Není", correct: false},
		 { text: "Přímý vypravěč ", correct: false},
		 { text: "Vypravěč vševědoucí", correct: false},
		 { text: "Personální vypravěč", correct: true},
		]
	},
	{
		question: "Postavy - Evžen Oněgin",
		answers: [
		 { text: "Hlavní kladná postava. Chce navštívit přítele, aby mu pomohl si ulevit od nemoci. Snaží se mu pomoci. Je zvídavý.", correct: false},
		 { text: "Hlavní kladná postava, vůdce loupežníků a romantický tragický hrdina, který se mstí za křivdu a pravdivě miluje Jarmilu.", correct: false},
		 { text: "Hlavní kladná postava. Zámožný, tajemný, samotář a milovník žen. Typický „zbytečný člověk“. Byl milencem Taťány a snažil se získat Olgu.", correct: true},
		 { text: "Hlavní kladná postava. Jedná se o pracovitou pradlenu, která se postupně propadá do alkoholismu a chudoby. Pomalu ztrácí svoje morální hodnoty. Ze začátku se jednalo o milující ženu a matku, ale s postupem času se začíná citově odtahovat.", correct: false},
		]
	},
	{
		question: "Postavy - Taťána",
		answers: [
		 { text: "Hlavní kladná postava. Je to mladá koketní dívka. Když porodí, tak své dítě bezesporu miluje. Je nešťastná, protože nemůže vidět matku.", correct: false},
		 { text: "Hlavní kladná později záporná postava. Gervaisin milující manžel a pracovitý klempíř, který po úrazu začne pít a stává se násilným a lenivým. Stává se Lantierem.", correct: false},
		 { text: "Hlavní kladná postava. Tichá, stydlivá, moudrá a okouzlující. Ráda na venkově. Po odchodu Oněgina si vezme jeho bratrance.", correct: true},
		 { text: "Hlavní kladná postava, mladá dívka a milenka Viléma (a později i jeho otce), jejíž osud je tragicky spjat s Vilémovým a pravděpodobně ho pravdivě miluje.", correct: false},
		]
	},
	{
		question: "Postavy - Vladimir Lenský",
		answers: [
		 { text: "Hlavní záporná postava, záletník a krutý muž, Vilémův otec, který ho v mládí vyhnal z domu; v knize je spíše fiktivní.", correct: false},
		 { text: "Vedlejší kladná postava. Jedná se o starostlivou starší ženu, která miluje svou dceru, a strachuje se o ní.", correct: false},
		 { text: "Správce u Harpagona, milenec Elisy, ve skutečnosti šlechtic.", correct: false},
		 { text: "Vedlejší neutrální postava. Oněginův přítel a milenec Olgy. Citlivý, žárlivý a ctnostný venkovan.", correct: true},
		]
	},
	{
		question: "Postavy - Olga",
		answers: [
		 { text: "Vedlejší neutrální postava. Sestra Taťány, zpěvák a povolná. Zamiluje se, chce lepší život v Petrohradu. Po smrti Vladimíra si vezme vojáka.", correct: true},
		 { text: "Vedlejší záporná postava. Je to Čech, který sympatizuje s Němci.", correct: false},
		 { text: "Vedlejší neutrální postava. Dcera Gervaisy, která kvůli nefunkční rodině skončí jako prostitutka. Jako dítě neposedná a velmi svá.", correct: false},
		 { text: "Fiktivní kladná postava. Jedná se o hrdinu příběhu, který vypravěč vypráví Roderickovi, když se v noci v bouřce začínají dít strašidelné věci. Je statečný.", correct: false},
		]
	},
	{
		question: "Postavy - Služka",
		answers: [
		 { text: "Hlavní záporná postava, záletník a krutý muž, Vilémův otec, který ho v mládí vyhnal z domu; v knize je spíše fiktivní.", correct: false},
		 { text: "Vedlejší kladná postava. Jedná se o starostlivou starší ženu, která miluje svou dceru, a strachuje se o ní.", correct: false},
		 { text: "Správce u Harpagona, milenec Elisy, ve skutečnosti šlechtic.", correct: false},
		 { text: "Vedlejší kladná postava. Starostlivá služka, která se stará o Taťánu a Olgu, umí věštit z vosku.", correct: true},
		]
	},
	{
		question: "Postavy - Bratranec Oněgina",
		answers: [
		 { text: "Hlavní kladná postava. Je to mladá koketní dívka. Když porodí, tak své dítě bezesporu miluje. Je nešťastná, protože nemůže vidět matku.", correct: false},
		 { text: "Vedlejší neutrální postava. Vezme si Taťánu, nemá dobré vztahy s Oněginem.", correct: true},
		 { text: "Hlavní kladná postava. Tichá, stydlivá, moudrá a okouzlující. Ráda na venkově. Po odchodu Oněgina si vezme jeho bratrance.", correct: false},
		 { text: "Hlavní kladná postava, mladá dívka a milenka Viléma (a později i jeho otce), jejíž osud je tragicky spjat s Vilémovým a pravděpodobně ho pravdivě miluje.", correct: false},
		]
	},
	{
		question: "Děj?",
		answers: [
		 { text: "Evžen Oněgin, známý jako „lev salónů“ v Petrohradu, je znuděný a pohrdá lidmi. Po smrti svého strýce dědí jeho venkovský dům. Na venkově se seznámí s idealistickým básníkem Vladimírem Lenským a navštíví dům vdovy Larinové a jejích dvou dcer – Olgy a Taťány. Oněgin Olgu považuje za povrchní, zatímco Taťána se do něj zamiluje a napíše mu dopis, který Oněgin odmítne. Na plese, kdy lidé myslí, že mají Oněgin a Taťána něco společného, tančí Oněgin s Olgou, což rozzlobí Lenského. Ten ho vyzve na duel, který skončí jeho smrtí. Oněgin je zdrcen, považuje ji však za zbytečnou a odjíždí do Petrohradu. Olga se po smrti Lenského rychle vdá za jiného, Taťána odjíždí do Moskvy a provdá se za staršího knížete, který je Oněginovým bratrancem. Po letech se Oněgin s Taťánou setká v Moskvě, vyzná jí lásku, ale Taťána ho odmítne, protože chce zůstat věrná svému muži.", correct: true},
		 { text: "Kniha sleduje osudy Gervaisy, která přichází do Paříže s nadějí na lepší život, s přítelem Lantierem a 2 dětmi. Přítel ji opustí, takže si se po čase vezme jejich podnájemníka a klempíře Coupea. Po svatbě s Coupeauem se jim daří, avšak Coupeau se po úrazu stává alkoholikem. Gervaisa se zakouká do kováře Goujeta, který jý vypomáhá. Když se Lantier vrací, tak se nechává okouzlit i jím. Gervaisa se snaží udržet rodinu, ale postupně propadá alkoholu také. Jejich dcera Nana odchází z domova a stává se prostitutkou. Příběh končí tragickým úpadkem Gervaisy, která umírá opuštěná a v bídě.", correct: false},
		 { text: "Vaněk přijde do kanceláře sládka, který mu nabízí pivo a vede s ním rozhovor o práci, známých i možnosti přesunu do skladu – ovšem za cenu, že by musel donášet. Vaněk odmítá, sládek se rozzlobí, poté smutní a opile usíná. Vaněk odejde, ale po chvíli se vrací a chová se jinak, což může naznačovat, že si ze sládka utahuje.", correct: false},
		 { text: "Příběh se zaměřuje na Viléma, který je uvězněn a odsouzen k smrti poté, co zabil svého otce (nevědomky, když se snažil pomstít za svedení Jarmily). Báseň začíná popisem krajiny, přechází k Vilémovu zločinu a následně osamělé noci před popravou, kdy Vilém přemýšlí o smyslu života, smrti a osudu. Dílo vrcholí Vilémovým odsouzením a jeho popravou. Jarmila, která se dozvídá o Vilémově činu a odsouzení, končí svůj život skokem do Jezera.", correct: false},
		]
	},
	{
		question: "Je zde veršová výstavba?",
		answers: [
		 { text: "Střídavý (a, b, a, b), obkročný (a, b, b, a), sdružený verš (a, a, b, b)", correct: false},
		 { text: "Není, protože to je prozaický text.", correct: false},
		 { text: "Triádový (a, a, a, a)", correct: false},
		 { text: "Střídavý (a, b, a, b) a sdružený (a, a, b, b).", correct: true},
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
		question: "Do jakého literárního směru se řadí Puškin?",
		answers: [
		 { text: "Realismus", correct: false},
		 { text: "Naturalismus", correct: false},
		 { text: "Romantismus", correct: true},
		 { text: "Modernismus", correct: false},
		]
	},
	{
		question: "Jaký rys je typický pro díla Puškina?",
		answers: [
		 { text: "Autobiografičnost", correct: true},
		 { text: "Exotická témata", correct: false},
		 { text: "Objektivní popis dějin", correct: false},
		 { text: "Vědecký přístup", correct: false},
		]
	},
	{
		question: "Od jakého literárního směru se ruská literatura začíná odklánět?",
		answers: [
		 { text: "Realismus a naturalismus", correct: false},
		 { text: "Romantismus a klasicismus", correct: true},
		 { text: "Modernismus a impresionismus", correct: false},
		 { text: "Symbolismus a dekadence", correct: false},
		]
	},
	{
		question: "Jaký způsob kritiky používá Puškin ve svých dílech?",
		answers: [
		 { text: "Kritiku přímou a vulgární", correct: false},
		 { text: "Kritiku zaměřenou na přírodu", correct: false},
		 { text: "Kritiku pouze politickou", correct: false},
		 { text: "Kritiku věcnou a objektivní", correct: true},
		]
	},
	{
		question: "Co se v Rusku v této době prohlubuje?",
		answers: [
		 { text: "Sociální nůžky", correct: true},
		 { text: "Měšťanské ideály", correct: false},
		 { text: "Vztah k cizím kulturám", correct: false},
		 { text: "Technický pokrok", correct: false},
		]
	},
	{
		question: "Jaká historická událost ovlivnila Rusko krátce před Puškinovou dobou?",
		answers: [
		 { text: "Americká revoluce", correct: false},
		 { text: "Napoleonské války", correct: true},
		 { text: "Francouzská revoluce", correct: false},
		 { text: "Průmyslová revoluce", correct: false},
		]
	},
	{
		question: "Od jakého slova pochází název romantismus?",
		answers: [
		 { text: "Romance", correct: false},
		 { text: "Romulus", correct: false},
		 { text: "Romantik", correct: false},
		 { text: "Román", correct: true},
		]
	},
	{
		question: "Kdy a kde romantismus vznikl?",
		answers: [
		 { text: "18. století v Německu", correct: false},
		 { text: "Počátek 19. století v Anglii", correct: true},
		 { text: "20. století ve Franciis", correct: false},
		 { text: "17. století v Itálii", correct: false},
		]
	},
	{
		question: "Na jaký literární směr romantismus navazuje?",
		answers: [
		 { text: "Realismus", correct: false},
		 { text: "Klasicismus", correct: false},
		 { text: "Preromantismus", correct: true},
		 { text: "Naturalismus", correct: false},
		]
	},
	{
		question: "Jaká témata jsou v romantismu typická?",
		answers: [
		 { text: "Tajemná, nadpřirozená, noc, hřbitovy", correct: true},
		 { text: "Politická a ekonomická", correct: false},
		 { text: "Vědecká a technická", correct: false},
		 { text: "Historická a právní", correct: false},
		]
	},
	{
		question: "Jaké hodnoty romantismus zdůrazňuje u tvorby?",
		answers: [
		 { text: "Přesnost, objektivitu a logiku", correct: false},
		 { text: "Svobodu tvoření, nezávislost, harmonii s přírodou", correct: true},
		 { text: "Společenskou kritiku a politiku", correct: false},
		 { text: "Ekonomický a praktický užitek", correct: false},
		]
	},
	{
		question: "Jak se romantický hrdina chová k společnosti?",
		answers: [
		 { text: "Podřizuje se jí", correct: false},
		 { text: "Sleduje jen osobní zisk", correct: false},
		 { text: "Ignoruje přírodu", correct: false},
		 { text: "Jde proti ní", correct: true},
		]
	},
	{
		question: "Jaký literární styl inspiruje romantismus?",
		answers: [
		 { text: "Gotika", correct: true},
		 { text: "Klasicismus", correct: false},
		 { text: "Realismus", correct: false},
		 { text: "Naturalismus", correct: false},
		]
	},
	{
		question: "Kdo byl Alexandr Sergejevič Puškin?",
		answers: [
		 { text: "Francouzský filozof", correct: false},
		 { text: "Německý básník", correct: false},
		 { text: "Anglický románopisec", correct: false},
		 { text: "Ruský prozaik, básník a dramatik", correct: true},
		]
	},
	{
		question: "Jaký literární směr Puškin významně ovlivnil?",
		answers: [
		 { text: "Naturalismus", correct: false},
		 { text: "Realismus", correct: false},
		 { text: "Ruský romantismus", correct: true},
		 { text: "Klasicismus", correct: false},
		]
	},
	{
		question: "Které hnutí Puškin sympatizoval, přestože měl umírněné monarchistické názory?",
		answers: [
		 { text: "Revoluce 1848", correct: false},
		 { text: "Anarchisté", correct: false},
		 { text: "Bolshevici", correct: false},
		 { text: "Děkabristé", correct: true},
		]
	},
	{
		question: "Jaké dramatické inspirace používal Puškin?",
		answers: [
		 { text: "Sofoklovy tragédie", correct: false},
		 { text: "Molièrovy komedie", correct: false},
		 { text: "Shakespearovy historické truchlohry", correct: true},
		 { text: "Cervantesovy romány", correct: false},
		]
	},
	{
		question: "Která z Puškinových vrcholných povídek je součástí cyklu Bělkinovy povídky?",
		answers: [
		 { text: "Kapitánská dcerka a Piková dáma", correct: true},
		 { text: "Evžen Oněgin", correct: false},
		 { text: "Paul Valéry", correct: false},
		 { text: "Ruslan a Ludmila", correct: false},
		]
	},
	{
		question: "Jaký typ hrdiny poprvé zavádí Puškin v „Evženu Oněginovi“?",
		answers: [
		 { text: "Heroický rytíř", correct: false},
		 { text: "Komický klaun", correct: false},
		 { text: "Válečný vůdce", correct: false},
		 { text: "Tragikomický romantický hrdina – „zbytečný člověk“", correct: true},
		]
	},
	{
		question: "Jaké žánry Puškin tvořil?",
		answers: [
		 { text: "Pouze lyriku", correct: false},
		 { text: "Pouze prózu", correct: false},
		 { text: "Dramata, lyriku, prózu, pohádky a publicistiku", correct: true},
		 { text: "Pouze poezii a opery", correct: false},
		]
	},
	{
		question: "Na jaká témata se Puškin zaměřil v pozdějších historických poémách?",
		answers: [
		 { text: "Romantickou interpretaci historických událostí", correct: true},
		 { text: "Moderní městský život", correct: false},
		 { text: "Francouzské revoluce", correct: false},
		 { text: "Filozofické spory", correct: false},
		]
	},
	{
		question: "Literární směr – další autoři světoví",
		answers: [
		 { text: "Honoré de Balzac, Gustave Flaubert, Franz Kafka", correct: false},
		 { text: "Émile Zola, Thomas Hardy, Lev Tolstoj", correct: false},
		 { text: "Fjodor Dostojevskij, Henrik Ibsen, Anton Pavlovič Čechov", correct: false},
		 { text: "George Gordon Byron, Victor Hugo, Edgar Allan Poe", correct: true},
		]
	},
	{
		question: "Literární směr – další autoři čeští",
		answers: [
		 { text: "Božena Němcová, Jan Neruda, Karel Václav Rais", correct: false},
		 { text: "Svatopluk Čech, Karel Čapek, Franz Kafka", correct: false},
		 { text: "Karel Hynek Mácha, Karel Jaromír Erben, Josef Kajetán Tyl", correct: true},
		 { text: "Alois Jirásek, Josef Holeček, Gabriela Preissová", correct: false},
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
