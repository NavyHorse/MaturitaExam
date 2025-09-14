const questions = [
	{
		question: "Jaký druh je kniha Jáma a kyvadlo?",
		answers: [
		 { text: "Lyrika", correct: false},
		 { text: "Drama", correct: false},
		 { text: "Epika", correct: true},
		]
	},
	{
		question: "Jaká forma je kniha Jáma a kyvadlo?",
		answers: [
		 { text: "Drama", correct: false},
		 { text: "Próza", correct: true},
		 { text: "Poezie", correct: false},
		]
	},
	{
		question: "Jaký žánr je kniha Jáma a kyvadlo?",
		answers: [
		 { text: "Poema", correct: false},
		 { text: "Sbírka baladických básní", correct: false},
		 { text: "Gotická hororová povídka", correct: true},
		 { text: "Naturalistický román", correct: false},
		]
	},
	{
		question: "Co je hlavní téma knihy?",
		answers: [
		 { text: "návštěva domu, které představuje minulost, touhy pomoct a poznat", correct: true},
		 { text: "předurčenost a nevyhnutelnost osudu a dopady alkoholismu a společenského úpadku na jednotlivce i celou rodinu", correct: false},
		 { text: "vlastenectví, vina, trest, konflikt člověka se společností", correct: false},
		 { text: "nepřímá kritika totality, jejích praktik a nesvobody, absurdita normalizace", correct: false},
		]
	},
	{
		question: "Co jsou hlavní motivy knihy?",
		answers: [
		 { text: "alkohol a jeho ničivý vliv, beznaděj, rozklad rodiny a morálních hodnot", correct: false},
		 { text: "láska, příroda, emoce, kolo, lebka, hledání", correct: false},
		 { text: "kasa, franky, mistr, proces, chvíle a milost", correct: false},
		 { text: "podzimní den, dům Usherů, dopis, sestra, pohovka a rakev", correct: true},
		]
	},
	{
		question: "Kdy byla kniha vydána?",
		answers: [
		 { text: "1222", correct: false},
		 { text: "1842", correct: true},
		 { text: "1900", correct: false},
		 { text: "1800", correct: false},
		]
	},
	{
		question: "Časoprostor - Kdy?",
		answers: [
		 { text: "v neznámém roce v 2. polovině 19. století.", correct: false},
		 { text: "16. století", correct: false},
		 { text: "v průběhu několika podzimních dní (kdy přesně není určeno)", correct: true},
		 { text: "Čas není určen, takže se kniha odehrává v autorově současnosti.", correct: false},
		]
	},
	{
		question: "Časoprostor - Kde?",
		answers: [
		 { text: "ve Francii v Paříži v domě Harpagona", correct: false},
		 { text: "ve Francii v Paříži", correct: false},
		 { text: "v alegorickém městě, které má znázorňovat svět", correct: false},
		 { text: "v domě Usherů", correct: true},
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
		 { text: "13 kapitol", correct: false},
		 { text: "17 povídek.", correct: true},
		 { text: "4 díly a 51 kapitol", correct: false},
		 { text: "Skládá ze 4 zpěvů a 2 intermezz", correct: false},
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
		 { text: "Vypravěč vševědoucí", correct: false},
		 { text: "Personální vypravěč", correct: true},
		]
	},
	{
		question: "Postavy - Vypravěč",
		answers: [
		 { text: "Hlavní kladná postava. Chce navštívit přítele, aby mu pomohl si ulevit od nemoci. Snaží se mu pomoci. Je zvídavý.", correct: true},
		 { text: "Hlavní kladná postava, vůdce loupežníků a romantický tragický hrdina, který se mstí za křivdu a pravdivě miluje Jarmilu.“", correct: false},
		 { text: "Vedlejší neutrální postava. Přítelkyně Abea a herečka. Není moc inteligentní.", correct: false},
		 { text: "Hlavní kladná postava. Jedná se o pracovitou pradlenu, která se postupně propadá do alkoholismu a chudoby. Pomalu ztrácí svoje morální hodnoty. Ze začátku se jednalo o milující ženu a matku, ale s postupem času se začíná citově odtahovat.", correct: false},
		]
	},
	{
		question: "Postavy - Roderick Usher",
		answers: [
		 { text: "Hlavní kladná postava. Je to mladá koketní dívka. Když porodí, tak své dítě bezesporu miluje. Je nešťastná, protože nemůže vidět matku.", correct: false},
		 { text: "Hlavní kladná později záporná postava. Gervaisin milující manžel a pracovitý klempíř, který po úrazu začne pít a stává se násilným a lenivým. Stává se Lantierem.", correct: false},
		 { text: "Hlavní kladná/neutrální postava. Je to starý přítel vypravěče, který je vážně nemocný. Vypravěč byl jeho jediný blízký přítel. S postupem jeho choroby je přesvědčen o své nadcházející smrti. Je přecitlivělý, uzavřený a úzkostlivý.", correct: true},
		 { text: "Hlavní kladná postava, mladá dívka a milenka Viléma (a později i jeho otce), jejíž osud je tragicky spjat s Vilémovým a pravděpodobně ho pravdivě miluje.", correct: false},
		]
	},
	{
		question: "Postavy - Medeleine Usher",
		answers: [
		 { text: "Hlavní záporná postava, záletník a krutý muž, Vilémův otec, který ho v mládí vyhnal z domu; v knize je spíše fiktivní.", correct: false},
		 { text: "Vedlejší kladná postava. Jedná se o starostlivou starší ženu, která miluje svou dceru, a strachuje se o ní.", correct: false},
		 { text: "Správce u Harpagona, milenec Elisy, ve skutečnosti šlechtic.", correct: false},
		 { text: "Vedlejší neutrální/záporná postava. Je to sestra Rodericka Ushera, která s ním bydlí. Když vypravěč přijíždí už je hodně nemocná a vyčerpaná, pravděpodobně ze stejné choroby, jako její bratr. Za čas umírá, ale na konci Roderick říká, že ji pohřbili zaživa.", correct: true},
		]
	},
	{
		question: "Postavy - Ethereld",
		answers: [
		 { text: "Bratranec Julie, výborný šermíř a prudký muž. Zabije Mercutia, poté ho Romeo usmrtí.", correct: false},
		 { text: "Vedlejší záporná postava. Je to Čech, který sympatizuje s Němci.", correct: false},
		 { text: "Vedlejší neutrální postava. Dcera Gervaisy, která kvůli nefunkční rodině skončí jako prostitutka. Jako dítě neposedná a velmi svá.", correct: false},
		 { text: "Fiktivní kladná postava. Jedná se o hrdinu příběhu, který vypravěč vypráví Roderickovi, když se v noci v bouřce začínají dít strašidelné věci. Je statečný.", correct: true},
		]
	},
	{
		question: "Děj?",
		answers: [
		 { text: "Neznámý vypravěč přijíždí k domu Usherů, aby navštívil svého přítele Rodericka Ushera, který mu napsal dopis, že je nemocný a zda by ho nepřijel navštívit. Roderick trpí záhadnou nemocí, kterou považuje za genetický defekt svého rodu, protože jeho sestra Medeleine Usher jí trpí také. Vypravěč tráví s Roderickem několik dní, kdy se jeho stav nezlepšuje a postupně propadá v beznaděj ze své situace a věří, že umře. Za nedlouho umírá jeho sestra, kterou na její přání chtějí pochovat v rodinné hrobce, ale na několik dní ji nechávají v rakvi v domě. Jednoho bouřlivého večera, kdy vypravěč předčítá Roderickovi jeho oblíbenou knihu začnou odněkud z domu vycházet zvuky, které korespondují s příběhem. Vypravěč je tímto zjevně rozrušen, a Roderick se chová divně a také rozrušeně. Když se dostává ke konci příběhu a zvuky jsou nyní hodně blízko jejich lokaci. Roderick z nenadání odhaluje, že když pohřbívali sestru do rakve, tak byla stále živá, a že zvuky, které slyšeli byla ona, jak se k nim dostává. Najednou se otevřou dveře a mrtvá Medeleine padne na Rodericka, který umírá na infarkt. Vyděšený vypravěč prchá z domu.", correct: true},
		 { text: "Kniha sleduje osudy Gervaisy, která přichází do Paříže s nadějí na lepší život, s přítelem Lantierem a 2 dětmi. Přítel ji opustí, takže si se po čase vezme jejich podnájemníka a klempíře Coupea. Po svatbě s Coupeauem se jim daří, avšak Coupeau se po úrazu stává alkoholikem. Gervaisa se zakouká do kováře Goujeta, který jý vypomáhá. Když se Lantier vrací, tak se nechává okouzlit i jím. Gervaisa se snaží udržet rodinu, ale postupně propadá alkoholu také. Jejich dcera Nana odchází z domova a stává se prostitutkou. Příběh končí tragickým úpadkem Gervaisy, která umírá opuštěná a v bídě.", correct: false},
		 { text: "Vaněk přijde do kanceláře sládka, který mu nabízí pivo a vede s ním rozhovor o práci, známých i možnosti přesunu do skladu – ovšem za cenu, že by musel donášet. Vaněk odmítá, sládek se rozzlobí, poté smutní a opile usíná. Vaněk odejde, ale po chvíli se vrací a chová se jinak, což může naznačovat, že si ze sládka utahuje.", correct: false},
		 { text: "Příběh se zaměřuje na Viléma, který je uvězněn a odsouzen k smrti poté, co zabil svého otce (nevědomky, když se snažil pomstít za svedení Jarmily). Báseň začíná popisem krajiny, přechází k Vilémovu zločinu a následně osamělé noci před popravou, kdy Vilém přemýšlí o smyslu života, smrti a osudu. Dílo vrcholí Vilémovým odsouzením a jeho popravou. Jarmila, která se dozvídá o Vilémově činu a odsouzení, končí svůj život skokem do Jezera.", correct: false},
		]
	},
	{
		question: "Je zde veršová výstavba?",
		answers: [
		 { text: "Střídavý (a, b, a, b), obkročný (a, b, b, a), sdružený verš (a, a, b, b)", correct: false},
		 { text: "Není, protože to je prozaický text.", correct: true},
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
		question: "V jakém století se odehrává popisované období?",
		answers: [
		 { text: "17. století", correct: false},
		 { text: "18. století", correct: false},
		 { text: "1. polovina 19. století", correct: true},
		 { text: "2. polovina 20. století", correct: false},
		]
	},
	{
		question: "V jaké zemi se odehrává děj uvedeného období?",
		answers: [
		 { text: "Francie", correct: false},
		 { text: "Německo", correct: false},
		 { text: "Anglie", correct: true},
		 { text: "Itálie", correct: false},
		]
	},
	{
		question: "Jaká krize se v této době prohlubuje?",
		answers: [
		 { text: "Mezi šlechtou a rolníky", correct: false},
		 { text: "Mezi ideálem a skutečností", correct: true},
		 { text: "Mezi státy Evropy a Amerikou", correct: false},
		 { text: "Mezi církví a vědou", correct: false},
		]
	},
	{
		question: "Kdo je označen jako „společnost X“?",
		answers: [
		 { text: "Aristokracie", correct: false},
		 { text: "Duchovenstvo", correct: false},
		 { text: "Rolníci", correct: false},
		 { text: "Měšťanstvo", correct: true},
		]
	},
	{
		question: "Co si obyčejní lidé v tomto období přáli?",
		answers: [
		 { text: "Více svobody v životě a umění", correct: true},
		 { text: "Více majetku a zbraní", correct: false},
		 { text: "Návrat k feudalismu", correct: false},
		 { text: "Zrušení všech revolucí", correct: false},
		]
	},
	{
		question: "Co nastává v Evropě v tomto období?",
		answers: [
		 { text: "Náboženské reformy", correct: false},
		 { text: "Revoluční zvraty", correct: true},
		 { text: "Velké zámořské objevy", correct: false},
		 { text: "Renesanční hnutí", correct: false},
		]
	},
	{
		question: "Kde vzniká národní literatura inspirovaná evropskou??",
		answers: [
		 { text: "V Africe", correct: false},
		 { text: "V Austrálii", correct: false},
		 { text: "V Asii", correct: false},
		 { text: "V Americe", correct: true},
		]
	},
	{
		question: "Jaký je literární směr popisovaného díla?",
		answers: [
		 { text: "Realismus", correct: false},
		 { text: "Romantismus", correct: true},
		 { text: "Naturalismus", correct: false},
		 { text: "Klasicismus", correct: false},
		]
	},
	{
		question: "Kdo bývá hlavním hrdinou romantismu?",
		answers: [
		 { text: "Panovníci a šlechta", correct: false},
		 { text: "Obyčejní vesničané", correct: false},
		 { text: "Lidé vyčlenění ze společnosti", correct: true},
		 { text: "Vědci a učenci", correct: false},
		]
	},
	{
		question: "Které motivy jsou pro romantismus typické?",
		answers: [
		 { text: "Exotika, tajemno, nadpřirozeno, noc", correct: true},
		 { text: "Vědecký pokrok a technika", correct: false},
		 { text: "Satira a humor", correct: false},
		 { text: "Politika a hospodářství", correct: false},
		]
	},
	{
		question: "Na co je v romantismu kladen velký důraz?",
		answers: [
		 { text: "Na technické objevy", correct: false},
		 { text: "Na city a historii", correct: true},
		 { text: "Na společenskou satiru", correct: false},
		 { text: "Na náboženské rituály", correct: false},
		]
	},
	{
		question: "Jaký je vztah autora k hrdinovi v romantismu?",
		answers: [
		 { text: "Autor se mu vysmívá", correct: false},
		 { text: "Autor se od něj distancuje", correct: false},
		 { text: "Autor ho používá jen jako vedlejší postavu", correct: false},
		 { text: "Autor se s ním stotožňuje", correct: true},
		]
	},
	{
		question: "Jaký bývá osud romantického hrdiny?",
		answers: [
		 { text: "Končí tragicky", correct: true},
		 { text: "Dosáhne bohatství a moci", correct: false},
		 { text: "Najde štěstí v rodině", correct: false},
		 { text: "Odejede do ciziny a žije šťastně", correct: false},
		]
	},
	{
		question: "Kde se narodil Edgar Allan Poe?",
		answers: [
		 { text: "V New Yorku", correct: false},
		 { text: "Ve Washingtonu", correct: false},
		 { text: "V Baltimorul", correct: false},
		 { text: "V Bostonu", correct: true},
		]
	},
	{
		question: "Proč musel Poe opustit University of Virginia?",
		answers: [
		 { text: "Kvůli špatnému zdraví", correct: false},
		 { text: "Protože se přestěhoval do Evropy", correct: false},
		 { text: "Kvůli neschopnosti splácet dluhy", correct: true},
		 { text: "Protože byl nespravedlivě vyloučen", correct: false},
		]
	},
	{
		question: "Co bylo důvodem jeho odchodu z vojenské akademie ve West Pointu?",
		answers: [
		 { text: "Zdravotní problémy", correct: false},
		 { text: "Nepodřídil se vojenské disciplíně", correct: true},
		 { text: "Nedostatek financí", correct: false},
		 { text: "Získal jinou nabídku", correct: false},
		]
	},
	{
		question: "Jaký literární žánr Poe založil?",
		answers: [
		 { text: "Realistický román", correct: false},
		 { text: "Satirickou prózu", correct: false},
		 { text: "Historický román", correct: false},
		 { text: "Detektivní literaturu", correct: true},
		]
	},
	{
		question: "Kdo je považován za Poeova pravého pokračovatele?",
		answers: [
		 { text: "Howard Phillips Lovecraft", correct: true},
		 { text: "Fjodor Michajlovič Dostojevskij", correct: false},
		 { text: "Paul Valéry", correct: false},
		 { text: "Charles Baudelaire", correct: false},
		]
	},
	{
		question: "Jaká témata byla typická pro Poeovu poezii?",
		answers: [
		 { text: "Politika a války", correct: false},
		 { text: "Satira a humor", correct: false},
		 { text: "Vesnický život", correct: false},
		 { text: "Smrt krásné ženy, obraznost, hudebnost, symboličnos", correct: true},
		]
	},
	{
		question: "Která z následujících děl patří k Poeovým?",
		answers: [
		 { text: "Faust", correct: false},
		 { text: "Červený a černý", correct: false},
		 { text: "Grotesky a arabesky", correct: true},
		 { text: "Anna Karenina", correct: false},
		]
	},
	{
		question: "Jak se jmenuje první „velký detektiv“ Poeových povídek?",
		answers: [
		 { text: "Auguste Dupin", correct: true},
		 { text: "Sherlock Holmes", correct: false},
		 { text: "Hercule Poirot", correct: false},
		 { text: "Sam Spade", correct: false},
		]
	},
	{
		question: "Literární směr – další autoři světoví",
		answers: [
		 { text: "Dante Alighieri, Sofoklés, Homér", correct: false},
		 { text: "Stendhal, Victor Hugo, Jacob a Wilhelm Grimmové", correct: true},
		 { text: "Molière, William Shakespeare, Giovanni Boccaccio", correct: false},
		 { text: "Charles Dickens, Johann Wolfgang Goethe, Miguel de Cervantes", correct: false},
		]
	},
	{
		question: "Literární směr – další autoři čeští",
		answers: [
		 { text: "Karel Hynek Mácha, Karel Jaromír Erben, Josef Kajetán Tyl ", correct: true},
		 { text: "Jan Hus, Jan Amos Komenský, Adam Michna z Otradovic", correct: false},
		 { text: "Bohuslav Balbín, Václav Hájek z Libočan, Jan Blahoslav", correct: false},
		 { text: "Josef Dobrovský, Josef Jungmann, Božena Němcová", correct: false},
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
