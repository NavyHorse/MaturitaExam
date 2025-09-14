const questions = [
	{
		question: "Jaký druh je kniha Kytice?",
		answers: [
		 { text: "Lyrika", correct: false},
		 { text: "Drama", correct: false},
		 { text: "Epika", correct: false},
		 { text: "Lyricko-epický (Lyrika - subjektivní pocity, emoce; Epika - příběh, děj)", correct: true},
		]
	},
	{
		question: "Jaká forma je kniha Kytice?",
		answers: [
		 { text: "Drama", correct: false},
		 { text: "Próza", correct: false},
		 { text: "Poezie", correct: true},
		]
	},
	{
		question: "Jaký žánr je kniha Kytice?",
		answers: [
		 { text: "Legenda", correct: false},
		 { text: "Sbírka baladických básní", correct: true},
		 { text: "Sonet", correct: false},
		 { text: "Komedie", correct: false},
		]
	},
	{
		question: "Co je hlavní téma knihy?",
		answers: [
		 { text: "střet mezi lidmi a nadpřirozenem, mladiská nerozvážnost a tragická láska (pocity strachu, žárlivosti a touhy)", correct: true},
		 { text: "lakota,láska, domnělý zločin a tajemnost", correct: false},
		 { text: "víra v Boha a prozřelost vůči špatnostem", correct: false},
		 { text: "nepřímá kritika totality, jejích praktik a nesvobody, absurdita normalizace", correct: false},
		]
	},
	{
		question: "Co jsou hlavní motivy knihy?",
		answers: [
		 { text: "srdce, brána, palác, tlumočník a stav", correct: false},
		 { text: "mloci, kteří představují nacisty, lidstvo, obchod, průmysl, výstřižky nebo také zbraně", correct: false},
		 { text: "kasa, franky, mistr, proces, chvíle a milost", correct: false},
		 { text: "nadpřirozeno, smrt, trest, kámen, práh, tělíčko, ukolébavka", correct: true},
		]
	},
	{
		question: "Kdy byla kniha vydána?",
		answers: [
		 { text: "První vydání knihy bylo roku 1853. Druhé rozšířené bylo vydáno roku 1861 a třetí vydání vyšlo několik měsíců po Erbenově smrti.", correct: true},
		 { text: "1934", correct: false},
		 { text: "1595", correct: false},
		 { text: "1823", correct: false},
		]
	},
	{
		question: "Časoprostor - Kdy?",
		answers: [
		 { text: "10. století", correct: false},
		 { text: "16. století", correct: false},
		 { text: "17. století, pravděpodobně v roce 1670, v jeden den", correct: false},
		 { text: "Čas neurčený (19. století) (autorova současnost)", correct: true},
		]
	},
	{
		question: "Časoprostor - Kde?",
		answers: [
		 { text: "ve Francii v Paříži v domě Harpagona", correct: false},
		 { text: "primárně český venkov, s důrazem na přírodu, hřbitovy, lesy a vesnická stavení, ale i nadpřirozená místa", correct: true},
		 { text: "v alegorickém městě, které má znázorňovat svět", correct: false},
		 { text: "v domě Usherů v pokoji Rodericka Ushera", correct: false},
		]
	},
	{
		question: "Jaká je kompozice vnitřní?",
		image: "ZdrcadlovaKompoziceBezTextu.jpg",
		answers: [
		 { text: "Zrcadlová ", correct: true},
		 { text: "Rámcový", correct: false},
		 { text: "Chronologická", correct: false},
		 { text: "Paralelní", correct: false},
		]
	},
	{
		question: "Jaká je kompozice vnější?",
		answers: [
		 { text: "54 kapitol, a dělí se na 2 části", correct: false},
		 { text: "Celá kniha je složena z 13 balad.", correct: true},
		 { text: "4 díly a 51 kapitol", correct: false},
		 { text: "5 jednání, které mají dohromady 44 výstupů", correct: false},
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
		 { text: "Er-forma", correct: false},
		 { text: "Er-forma, objektivní", correct: true},
		 { text: "Není", correct: false},
		]
	},
	{
		question: "Vypravěč dle vyprávěcí roviny?",
		answers: [
		 { text: "Není", correct: false},
		 { text: "Nestranný pozorovatel, není přímým účastníkem děje, pouze popisuje situace a postavy", correct: true},
		 { text: "Vypravěč vševědoucí", correct: false},
		 { text: "Personální vypravěč", correct: false},
		]
	},
	{
		question: "Postavy - Vodník",
		answers: [
		 { text: "Hlavní kladná postava. Je to mladá koketní dívka. Když porodí, tak své dítě bezesporu miluje. Je nešťastná, protože nemůže vidět matku.", correct: false},
		 { text: "Je to hlavní kladná postava, zvídavý a inteligentní člověk, který vidí nedokonalosti světa a silně věří v Boha, u něhož nakonec najde, co hledal.", correct: false},
		 { text: "Vedlejší neutrální postava. Přítelkyně Abea a herečka. Není moc inteligentní.", correct: false},
		 { text: "Hlavní záporná postava. Osamělý, podlý a zvrhlý. Nevěří své ženě. Je chladnokrevný a nedůvěřivý.", correct: true},
		]
	},
	{
		question: "Postavy - Dcera",
		answers: [
		 { text: "Hlavní kladná postava. Je to mladá koketní dívka. Když porodí, tak své dítě bezesporu miluje. Je nešťastná, protože nemůže vidět matku.", correct: true},
		 { text: "Syn Monteka, hluboce zamilovaný do Julie. Po zabití Tybalta vyhoštěn, mylně věří, že Julie zemřela, a vypije jed.", correct: false},
		 { text: "Hlavní záporná postava. Jedná se o zámožného muže, který je otcem Kleanta a Elisy. Je extrémně lakomý a chce vše, za co nejnižší náklady nebo nejlépe zdarma.", correct: false},
		 { text: "Hlavní záporná postava, sluha královny Moudrosti, provází poutníka a snaží se ho svést do nějakého stavu.", correct: false},
		]
	},
	{
		question: "Postavy - Matka",
		answers: [
		 { text: "Hlavní záporná postava, druhotný průvodce poutníka, omámí ho speciálními brýlemi.", correct: false},
		 { text: "Vedlejší kladná postava. Jedná se o starostlivou starší ženu, která miluje svou dceru, a strachuje se o ní.", correct: true},
		 { text: "Správce u Harpagona, milenec Elisy, ve skutečnosti šlechtic.", correct: false},
		 { text: "Vedlejší záporná postava. Původní majitel Panské farmy. Je krutý a má silný sklon k alkoholu. Při zvířecím převratu je se svou rodinou a čeledíny vyhnán z farmy.", correct: false},
		]
	},
	{
		question: "Postavy - Syn",
		answers: [
		 { text: "Bratranec Julie, výborný šermíř a prudký muž. Zabije Mercutia, poté ho Romeo usmrtí.", correct: false},
		 { text: "Vedlejší záporná postava. Je to Čech, který sympatizuje s Němci.", correct: false},
		 { text: "Vedlejší neutrální postava. Jedná se o dítě dívky a vodníka, které vodník na konci noci zabije. Dalo by se říci, že představuje nějakou lidskost, kterou na chvíli vodník nabyl, než ji zase ztratil.", correct: true},
		 { text: "Syn Harpagona, miluje Marianu, soupeří s otcem o její ruku.", correct: false},
		]
	},
	{
		question: "Děj?",
		answers: [
		 { text: "Balada začíná vodníkem, který si při měsíčním svitu šije oblek na svatbu, která se má brzy stát. Dalšího dne ráno dcera, i přes matčino varování, jde k jezeru, kde chce vyprat své šátky. Zde ji unese vodník, který ji oplodní a donutí ji s ním žít. Dcera porodí dítě, ale je nešťastná, protože chce vidět matku. To ji nakonec vodník dovolí, ale musí být do večera zpět. Doma ji však matka zavře a nechce nechat odejít, protože se o dceru bojí. Vodník se nějakou dobu snaží dobývat dovnitř, když to ale nejde, tak ze zloby zabije svého syna a odchází.", correct: true},
		 { text: "Agnes se zamiluje do tajemného Krysaře a ubytuje ho. Po hádce s konšely, kteří mu odmítnou vyplatit mzdu, se Krysař chystá zničit město, ale Agnes ho odradí. Když zjistí, že Agnes čeká dítě s jiným, ta spáchá sebevraždu skokem do propasti. Zdrcený Krysař zahraje na píšťalu, omámí celé město a dovede jeho obyvatele k hromadné smrti na kopci Koppel. Přežije jen rybář Sepp, který nakonec zachrání opuštěné dítě.", correct: false},
		 { text: "Vaněk přijde do kanceláře sládka, který mu nabízí pivo a vede s ním rozhovor o práci, známých i možnosti přesunu do skladu – ovšem za cenu, že by musel donášet. Vaněk odmítá, sládek se rozzlobí, poté smutní a opile usíná. Vaněk odejde, ale po chvíli se vrací a chová se jinak, což může naznačovat, že si ze sládka utahuje.", correct: false},
		 { text: "Poutník se vydává poznat svět, ale hned se k němu přidají Všezvěd Všudybud a Mámení, kteří ho vedou a snaží se ho ovlivnit. Procházejí šesti stavy společnosti – manžely, řemeslníky, učenci, duchovními, vrchností a vojáky – kde poutník vidí korupci, pokrytectví a nespravedlnost. Nakonec dorazí na hrad paní Fortuny, kde lidé trpí a často umírají. Pak ho vezmou na hrad královny Moudrosti, která ukrývá zkaženost pod krásnými jmény. Král Šalamoun ji odhalí jako Marnost, ale nakonec podlehne jejímu kouzlu a nechá se svést. Poutník z toho všeho uteče na kraj světa, kde ho volá Bůh. Ten mu ukáže pravé křesťanství, ochrání ho a vyšle zpět do světa, aby mu sloužil, dokud nepřijde jeho čas.", correct: false},
		]
	},
	{
		question: "Je zde veršová výstavba?",
		answers: [
		 { text: "Postupný: a, b, c, d", correct: false},
		 { text: "Není, protože to je prozaický text.", correct: false},
		 { text: "Obkročný: a, b, b, a", correct: false},
		 { text: "Sdružený (a, a, b, b) a střídavý (a, b, a, b)", correct: true},
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
		question: "V jaké době se odehrává popisovaný děj?",
		answers: [
		 { text: "Na začátku 18. stoletís", correct: false},
		 { text: "Přelom 1. a 2. poloviny 19. století", correct: true},
		 { text: "V polovině 20. století", correct: false},
		 { text: "Na konci 16. století", correct: false},
		]
	},
	{
		question: "S jakou fází Národního obrození je v Čechách spojován romantismus?",
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
		 { text: "Tajemno, iluze, přírody a kontrastů", correct: true},
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
		question: "Kdy se narodil Karel Jaromír Erben?",
		answers: [
		 { text: "1700", correct: false},
		 { text: "1811", correct: true},
		 { text: "1212", correct: false},
		 { text: "2000", correct: false},
		]
	},
	{
		question: "Kde se Erben narodil?",
		answers: [
		 { text: "V Hradci Králové", correct: false},
		 { text: "V Praze", correct: false},
		 { text: "V Brně", correct: false},
		 { text: "V Miletíně", correct: true},
		]
	},
	{
		question: "Čím byl kromě spisovatele a básníka?",
		answers: [
		 { text: "Sběratelem lidové slovesnosti", correct: true},
		 { text: "Učitelem a malířem", correct: false},
		 { text: "Politikem a novinářem", correct: false},
		 { text: "Sochařem a hudebníkem", correct: false},
		]
	},
	{
		question: "Čím se Erben inspiroval?",
		answers: [
		 { text: "Starověkými mýty", correct: false},
		 { text: "Antickou filozofií", correct: false},
		 { text: "Francouzským romantismem", correct: false},
		 { text: "Českými lidovými pověstmi a pohádkami", correct: true},
		]
	},
	{
		question: "Jaké měl Erben zdraví v dětství?",
		answers: [
		 { text: "Vynikající", correct: false},
		 { text: "Chatrné", correct: true},
		 { text: "Průměrné", correct: false},
		 { text: "Velmi dobré", correct: false},
		]
	},
	{
		question: "Jaké studium Erben absolvoval?",
		answers: [
		 { text: "Filologii", correct: false},
		 { text: "Filosofii", correct: false},
		 { text: "Práva", correct: true},
		 { text: "Teologii", correct: false},
		]
	},
	{
		question: "Kde studoval Erben práva?",
		answers: [
		 { text: "V Brně a Olomouci", correct: false},
		 { text: "V Hradci Králové a Praze", correct: true},
		 { text: "V Plzni a Vídni", correct: false},
		 { text: "Jen v Praze", correct: false},
		]
	},
	{
		question: "Kdo mu pomohl získat práci blízkou jeho zájmům?",
		answers: [
		 { text: "František Palacký", correct: true},
		 { text: "Jan Neruda", correct: false},
		 { text: "Josef Kajetán Tyl", correct: false},
		 { text: "Božena Němcová", correct: false},
		]
	},
	{
		question: "Jakou práci vykonával od roku 1851?",
		answers: [
		 { text: "Knihovníka Národního muzea", correct: false},
		 { text: "Redaktora časopisu", correct: false},
		 { text: "Ředitele gymnázia", correct: false},
		 { text: "Archiváře města Prahy", correct: true},
		]
	},
	{
		question: "Kdy a kde zemřel Erben?",
		answers: [
		 { text: "1575 v Brně", correct: false},
		 { text: "1969 v Hradci Králové", correct: false},
		 { text: "1870 v Praze", correct: true},
		 { text: "1171 ve Vídni", correct: false},
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
		 { text: "Božena Němcová, Josef Kajetán Tyl, Karel Hynek Mácha", correct: true},
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
	
	if (currentQuestion.image) {
		const img = document.createElement("img");
		img.src = currentQuestion.image;
		img.alt = "Question image";
		img.style.maxWidth = "300px";  // optional styling
		img.style.display = "block";
		img.style.margin = "10px 0";
		questionElement.appendChild(img);
	}
	
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
