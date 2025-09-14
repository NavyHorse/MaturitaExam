const questions = [
	{
		question: "Jaký druh je kniha Máj?",
		answers: [
		 { text: "Lyrika", correct: false},
		 { text: "Drama", correct: false},
		 { text: "Epika", correct: false},
		 { text: "Lyricko-epický (Lyrika - subjektivní pocity, emoce; Epika - příběh, děj)", correct: true},
		]
	},
	{
		question: "Jaká forma je kniha Máj?",
		answers: [
		 { text: "Drama", correct: false},
		 { text: "Próza", correct: false},
		 { text: "Poezie", correct: true},
		]
	},
	{
		question: "Jaký žánr je kniha Máj?",
		answers: [
		 { text: "Poema", correct: true},
		 { text: "Sbírka baladických básní", correct: false},
		 { text: "Kronika", correct: false},
		 { text: "Naturalistický román", correct: false},
		]
	},
	{
		question: "Co je hlavní téma knihy?",
		answers: [
		 { text: "střet mezi lidmi a nadpřirozenem, mladiská nerozvážnost a tragická láska (pocity strachu, žárlivosti a touhy)", correct: false},
		 { text: "předurčenost a nevyhnutelnost osudu a dopady alkoholismu a společenského úpadku na jednotlivce i celou rodinu", correct: false},
		 { text: "vlastenectví, vina, trest, konflikt člověka se společností", correct: true},
		 { text: "nepřímá kritika totality, jejích praktik a nesvobody, absurdita normalizace", correct: false},
		]
	},
	{
		question: "Co jsou hlavní motivy knihy?",
		answers: [
		 { text: "alkohol a jeho ničivý vliv, beznaděj, rozklad rodiny a morálních hodnot", correct: false},
		 { text: "láska, příroda, emoce, kolo, lebka, hledání.", correct: true},
		 { text: "kasa, franky, mistr, proces, chvíle a milost", correct: false},
		 { text: "nadpřirozeno, smrt, trest, kámen, práh, tělíčko, ukolébavka", correct: false},
		]
	},
	{
		question: "Kdy byla kniha vydána?",
		answers: [
		 { text: "1222", correct: false},
		 { text: "1934", correct: false},
		 { text: "1800", correct: false},
		 { text: "1836", correct: true},
		]
	},
	{
		question: "Časoprostor - Kdy?",
		answers: [
		 { text: "v neznámém roce v 2. polovině 19. století.", correct: false},
		 { text: "16. století", correct: false},
		 { text: "17. století, pravděpodobně v roce 1670, v jeden den", correct: false},
		 { text: "Čas není určen, takže se kniha odehrává v autorově současnosti.", correct: true},
		]
	},
	{
		question: "Časoprostor - Kde?",
		answers: [
		 { text: "ve Francii v Paříži v domě Harpagona", correct: false},
		 { text: "v České republice v krajině kolem Bezdězu a Doks", correct: true},
		 { text: "v alegorickém městě, které má znázorňovat svět", correct: false},
		 { text: "v domě Usherů v pokoji Rodericka Ushera", correct: false},
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
		 { text: "54 kapitol, a dělí se na 2 části", correct: false},
		 { text: "Celá kniha je složena z 13 balad. Složení kniha -> balada -> sloka > rým -> verš -> slovo.", correct: false},
		 { text: "4 díly a 51 kapitol", correct: false},
		 { text: "Skládá ze 4 zpěvů a 2 intermezz", correct: true},
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
		 { text: "Er-forma ", correct: true},
		 { text: "Není", correct: false},
		]
	},
	{
		question: "Vypravěč dle vyprávěcí roviny?",
		answers: [
		 { text: "Není", correct: false},
		 { text: "Přímý vypravěč ", correct: false},
		 { text: "Vypravěč vševědoucí", correct: true},
		 { text: "Personální vypravěč", correct: false},
		]
	},
	{
		question: "Postavy - Vilém",
		answers: [
		 { text: "Hlavní kladná postava. Je to mladá koketní dívka. Když porodí, tak své dítě bezesporu miluje. Je nešťastná, protože nemůže vidět matku.", correct: false},
		 { text: "Hlavní kladná postava, vůdce loupežníků a romantický tragický hrdina, který se mstí za křivdu a pravdivě miluje Jarmilu.“", correct: true},
		 { text: "Vedlejší neutrální postava. Přítelkyně Abea a herečka. Není moc inteligentní.", correct: false},
		 { text: "Hlavní záporná postava. Osamělý, podlý a zvrhlý. Nevěří své ženě. Je chladnokrevný a nedůvěřivý.", correct: false},
		]
	},
	{
		question: "Postavy - Jarmila",
		answers: [
		 { text: "Hlavní kladná postava. Je to mladá koketní dívka. Když porodí, tak své dítě bezesporu miluje. Je nešťastná, protože nemůže vidět matku.", correct: false},
		 { text: "Syn Monteka, hluboce zamilovaný do Julie. Po zabití Tybalta vyhoštěn, mylně věří, že Julie zemřela, a vypije jed.", correct: false},
		 { text: "Hlavní záporná postava. Jedná se o zámožného muže, který je otcem Kleanta a Elisy. Je extrémně lakomý a chce vše, za co nejnižší náklady nebo nejlépe zdarma.", correct: false},
		 { text: "Hlavní kladná postava, mladá dívka a milenka Viléma (a později i jeho otce), jejíž osud je tragicky spjat s Vilémovým a pravděpodobně ho pravdivě miluje.", correct: true},
		]
	},
	{
		question: "Postavy - Otec Viléma",
		answers: [
		 { text: "Hlavní záporná postava, záletník a krutý muž, Vilémův otec, který ho v mládí vyhnal z domu; v knize je spíše fiktivní.", correct: true},
		 { text: "Vedlejší kladná postava. Jedná se o starostlivou starší ženu, která miluje svou dceru, a strachuje se o ní.", correct: false},
		 { text: "Správce u Harpagona, milenec Elisy, ve skutečnosti šlechtic.", correct: false},
		 { text: "Vedlejší záporná postava. Původní majitel Panské farmy. Je krutý a má silný sklon k alkoholu. Při zvířecím převratu je se svou rodinou a čeledíny vyhnán z farmy.", correct: false},
		]
	},
	{
		question: "Postavy - Duchové",
		answers: [
		 { text: "Bratranec Julie, výborný šermíř a prudký muž. Zabije Mercutia, poté ho Romeo usmrtí.", correct: false},
		 { text: "Vedlejší záporná postava. Je to Čech, který sympatizuje s Němci.", correct: false},
		 { text: "Vedlejší neutrální postavy, účastníci intermezza; duchové nebožtíků na hřbitově s popravištěm, kteří očekávají Viléma jako nového pozorovatele.", correct: true},
		 { text: "Syn Harpagona, miluje Marianu, soupeří s otcem o její ruku.", correct: false},
		]
	},
	{
		question: "Děj?",
		answers: [
		 { text: "Balada začíná vodníkem, který si při měsíčním svitu šije oblek na svatbu, která se má brzy stát. Dalšího dne ráno dcera, i přes matčino varování, jde k jezeru, kde chce vyprat své šátky. Zde ji unese vodník, který ji oplodní a donutí ji s ním žít. Dcera porodí dítě, ale je nešťastná, protože chce vidět matku. To ji nakonec vodník dovolí, ale musí být do večera zpět. Doma ji však matka zavře a nechce nechat odejít, protože se o dceru bojí. Vodník se nějakou dobu snaží dobývat dovnitř, když to ale nejde, tak ze zloby zabije svého syna a odchází.", correct: false},
		 { text: "Agnes se zamiluje do tajemného Krysaře a ubytuje ho. Po hádce s konšely, kteří mu odmítnou vyplatit mzdu, se Krysař chystá zničit město, ale Agnes ho odradí. Když zjistí, že Agnes čeká dítě s jiným, ta spáchá sebevraždu skokem do propasti. Zdrcený Krysař zahraje na píšťalu, omámí celé město a dovede jeho obyvatele k hromadné smrti na kopci Koppel. Přežije jen rybář Sepp, který nakonec zachrání opuštěné dítě.", correct: false},
		 { text: "Vaněk přijde do kanceláře sládka, který mu nabízí pivo a vede s ním rozhovor o práci, známých i možnosti přesunu do skladu – ovšem za cenu, že by musel donášet. Vaněk odmítá, sládek se rozzlobí, poté smutní a opile usíná. Vaněk odejde, ale po chvíli se vrací a chová se jinak, což může naznačovat, že si ze sládka utahuje.", correct: false},
		 { text: "Příběh se zaměřuje na Viléma, který je uvězněn a odsouzen k smrti poté, co zabil svého otce (nevědomky, když se snažil pomstít za svedení Jarmily). Báseň začíná popisem krajiny, přechází k Vilémovu zločinu a následně osamělé noci před popravou, kdy Vilém přemýšlí o smyslu života, smrti a osudu. Dílo vrcholí Vilémovým odsouzením a jeho popravou. Jarmila, která se dozvídá o Vilémově činu a odsouzení, končí svůj život skokem do Jezera.", correct: true},
		]
	},
	{
		question: "Je zde veršová výstavba?",
		answers: [
		 { text: "střídavý (a, b, a, b), obkročný (a, b, b, a), sdružený verš (a, a, b, b)", correct: true},
		 { text: "Není, protože to je prozaický text.", correct: false},
		 { text: "Triádový (a, a, a, a)", correct: false},
		 { text: "Sdružený (a, a, b, b) a střídavý (a, b, a, b)", correct: false},
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
		question: "V jakém období probíhá romantismus v Čechách spojený s NO?",
		answers: [
		 { text: "Na začátku 18. století", correct: false},
		 { text: "Přelom 1. a 2. poloviny 19. století", correct: true},
		 { text: "V polovině 20. století", correct: false},
		 { text: "Konec 16. století", correct: false},
		]
	},
	{
		question: "S jakou fází Národního obrození je romantismus v Čechách spojen?",
		answers: [
		 { text: "S první fází", correct: false},
		 { text: "S druhou fází", correct: false},
		 { text: "S třetí fází", correct: true},
		 { text: "Se čtvrtou fází", correct: false},
		]
	},
	{
		question: "Co se začalo objevovat u menších národů v Evropě ve stejné době?",
		answers: [
		 { text: "Kolonialismus", correct: false},
		 { text: "Renesance", correct: false},
		 { text: "Národní obrození", correct: true},
		 { text: "Feudalismus", correct: false},
		]
	},
	{
		question: "Co se začalo dít v průběhu NO v Čechách?",
		answers: [
		 { text: "Vznik prvních univerzit", correct: false},
		 { text: "Úpadek národní identity", correct: false},
		 { text: "Zavedení absolutismu", correct: false},
		 { text: "Národní uvědomění a kulturní rozvoj", correct: true},
		]
	},
	{
		question: "Co lidé začali vydávat v době NO v Čechách?",
		answers: [
		 { text: "První romány", correct: false},
		 { text: "Technické manuály", correct: false},
		 { text: "Časopisy a noviny", correct: true},
		 { text: "Divadelní hry", correct: false},
		]
	},
	{
		question: "Jaké byly důsledky ve Francii v té době?",
		answers: [
		 { text: "Velká francouzská revoluce a napoleonské války", correct: true},
		 { text: "Stoletá válka", correct: false},
		 { text: "První světová válka", correct: false},
		 { text: "Křížové výpravy", correct: false},
		]
	},
	{
		question: "Jaká velká změna probíhala v té době kromě politických událostí?",
		answers: [
		 { text: "Reformace", correct: false},
		 { text: "Objevení Ameriky", correct: false},
		 { text: "Průmyslová revoluce", correct: true},
		 { text: "Vynález knihtisku", correct: false},
		]
	},
	{
		question: "Kdy vznikl romantismus?",
		answers: [
		 { text: "Na začátku 17. století", correct: false},
		 { text: "Na konci 18. století", correct: true},
		 { text: "V polovině 19. století", correct: false},
		 { text: "Na začátku 20. století", correct: false},
		]
	},
	{
		question: "Jaký typ hrdiny je pro romantismus typický?",
		answers: [
		 { text: "Odpadlík od společnosti", correct: true},
		 { text: "Bohatý měšťan", correct: false},
		 { text: "Politický vůdce", correct: false},
		 { text: "Vládce impéria", correct: false},
		]
	},
	{
		question: "Které z následujících patří mezi hrdiny romantismu?",
		answers: [
		 { text: "Vědec a vynálezce", correct: false},
		 { text: "Bankéř a obchodník", correct: false},
		 { text: "Učitel a farář", correct: false},
		 { text: "Vězeň, tulák, bezdomovec", correct: true},
		]
	},
	{
		question: "Jaké motivy jsou v romantismu časté?",
		answers: [
		 { text: "Městský život a politika", correct: false},
		 { text: "Nadpřirozeno a konflikty s běžným světem", correct: true},
		 { text: "Stroje a továrny", correct: false},
		 { text: "Satira a humor", correct: false},
		]
	},
	{
		question: "Jaké přírodní prvky se objevují v romantické literatuře?",
		answers: [
		 { text: "Sopky, ledovce, oceány", correct: false},
		 { text: "Přístavy, lodě, trhy", correct: false},
		 { text: "Noc, louky, lesy, zříceniny", correct: true},
		 { text: "Pouště, oázy, palmy", correct: false},
		]
	},
	{
		question: "Jaká hlavní myšlenka se v romantismu zdůrazňuje?",
		answers: [
		 { text: "Politická loajalita", correct: false},
		 { text: "Kolektivní jednota", correct: false},
		 { text: "Společenská harmonie", correct: false},
		 { text: "Individualismus", correct: true},
		]
	},
	{
		question: "Jaký typ lásky se často objevuje v romantismu?",
		answers: [
		 { text: "Nenaplněná", correct: true},
		 { text: "Pragmatická", correct: false},
		 { text: "Dokonalá a harmonická", correct: false},
		 { text: "Politicky dohodnutá", correct: false},
		]
	},
	{
		question: "Na co romantismus reagoval?",
		answers: [
		 { text: "Na renesanci a baroko", correct: false},
		 { text: "Na války a hladomor", correct: false},
		 { text: "Na osvícenství a industrializaci", correct: true},
		 { text: "Na reformaci a protireformaci", correct: false},
		]
	},
	{
		question: "Kdo byl Karel Hynek Mácha?",
		answers: [
		 { text: "Syn městského úředníka a spisovatel", correct: false},
		 { text: "Syn mlynářského pomocníka a muzikantky", correct: true},
		 { text: "Syn obchodníka a filozofa", correct: false},
		 { text: "Syn kněze a malířky", correct: false},
		]
	},
	{
		question: "K čemu se Karel Hynek Mácha považuje?",
		answers: [
		 { text: "K otcům českého románu", correct: false},
		 { text: "K významnému filozofovi", correct: false},
		 { text: "K zakladateli českého divadla", correct: false},
		 { text: "K otci moderní české poezie", correct: true},
		]
	},
	{
		question: "Co ukončil Mácha roku 1836?",
		answers: [
		 { text: "Studium práv a filozofie", correct: true},
		 { text: "Studium hudby", correct: false},
		 { text: "Studium historie", correct: false},
		 { text: "Studium architektury", correct: false},
		]
	},
	{
		question: "Jakou divadelní činnost vykonával?",
		answers: [
		 { text: "Profesionálně hrál v Národním divadle", correct: false},
		 { text: "Psával divadelní hry", correct: false},
		 { text: "Byl režisérem divadla", correct: false},
		 { text: "Ochotnicky hrál v Kajetánském divadle", correct: true},
		]
	},
	{
		question: "Co se stalo 01. 10. 1836?",
		answers: [
		 { text: "Oženil se s Lori Šomkovou", correct: false},
		 { text: "Mácha dokončil první sbírku básní", correct: false},
		 { text: "Narodil se jeho syn", correct: true},
		 { text: "Vyhrál literární soutěž", correct: false},
		]
	},
	{
		question: "Kdy Mácha zemřel?",
		answers: [
		 { text: "Měsíc po narození syna, těsně před svatbou s Lori Šomkovou", correct: true},
		 { text: "Před narozením syna", correct: false},
		 { text: "Deset let po svatbě", correct: false},
		 { text: "Roku 1850", correct: false},
		]
	},
	{
		question: "Kdo Máchu inspiroval?",
		answers: [
		 { text: "Kafka, Kundera, Hrabal", correct: false},
		 { text: "Shakespeare, Byron, Goethe, Hájek a Herder", correct: true},
		 { text: "Erben, Neruda, Palacký", correct: false},
		 { text: "Goethe, Schiller, Beethoven", correct: false},
		]
	},
	{
		question: "Co Mácha obdivoval v přírodě?",
		answers: [
		 { text: "Pražské parky", correct: false},
		 { text: "Český venkov bez jezer", correct: false},
		 { text: "Krkonoše", correct: false},
		 { text: "Krajinu okolo Máchova jezera", correct: true},
		]
	},
	{
		question: "Literární směr – další autoři světoví",
		answers: [
		 { text: "Ernest Hemingway, George Orwell, F. Scott Fitzgerald", correct: false},
		 { text: "Johann Wolfgang von Goethe, Edgar Allan Poe, Victor Hugo", correct: true},
		 { text: "William Shakespeare, Charles Dickens, Haruki Murakami", correct: false},
		 { text: "J. K. Rowlingová, Gabriel García Márquez", correct: false},
		]
	},
	{
		question: "Literární směr – další autoři čeští",
		answers: [
		 { text: "Jiří Wolker, Petr Bezruč", correct: false},
		 { text: "Milan Kundera, Bohumil Hrabal, Jaroslav Haše", correct: false},
		 { text: "Václav Havel, Vítězslav Nezval", correct: false},
		 { text: "Božena Němcová, Josef Kajetán Tyl, Karel Jaromír Erben", correct: true},
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
