const questions = [
	{
		question: "Jaký druh je kniha Zabiják?",
		answers: [
		 { text: "Lyrika", correct: false},
		 { text: "Drama", correct: false},
		 { text: "Epika", correct: true},
		]
	},
	{
		question: "Jaká forma je kniha Zabiják?",
		answers: [
		 { text: "Drama", correct: false},
		 { text: "Próza", correct: true},
		 { text: "Poezie", correct: false},
		]
	},
	{
		question: "Jaký žánr je kniha Zabiják?",
		answers: [
		 { text: "Poema", correct: false},
		 { text: "Sbírka baladických básní", correct: false},
		 { text: "Kronika", correct: false},
		 { text: "Naturalistický román", correct: true},
		]
	},
	{
		question: "Co je hlavní téma knihy?",
		answers: [
		 { text: "střet mezi lidmi a nadpřirozenem, mladiská nerozvážnost a tragická láska (pocity strachu, žárlivosti a touhy)", correct: false},
		 { text: "předurčenost a nevyhnutelnost osudu a dopady alkoholismu a společenského úpadku na jednotlivce i celou rodinu", correct: true},
		 { text: "vlastenectví, vina, trest, konflikt člověka se společností", correct: false},
		 { text: "nepřímá kritika totality, jejích praktik a nesvobody, absurdita normalizace", correct: false},
		]
	},
	{
		question: "Co jsou hlavní motivy knihy?",
		answers: [
		 { text: "alkohol a jeho ničivý vliv, beznaděj, rozklad rodiny a morálních hodnot", correct: true},
		 { text: "láska, příroda, emoce, kolo, lebka, hledání", correct: false},
		 { text: "kasa, franky, mistr, proces, chvíle a milost", correct: false},
		 { text: "nadpřirozeno, smrt, trest, kámen, práh, tělíčko, ukolébavka", correct: false},
		]
	},
	{
		question: "Kdy byla kniha vydána?",
		answers: [
		 { text: "1222", correct: false},
		 { text: "1934", correct: false},
		 { text: "1877", correct: true},
		 { text: "1800", correct: false},
		]
	},
	{
		question: "Časoprostor - Kdy?",
		answers: [
		 { text: "v neznámém roce v 2. polovině 19. století", correct: true},
		 { text: "16. století", correct: false},
		 { text: "17. století, pravděpodobně v roce 1670, v jeden den", correct: false},
		 { text: "Čas není určen, takže se kniha odehrává v autorově současnosti.", correct: false},
		]
	},
	{
		question: "Časoprostor - Kde?",
		answers: [
		 { text: "ve Francii v Paříži v domě Harpagona", correct: false},
		 { text: "ve Francii v Paříži", correct: true},
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
		 { text: "13 kapitol", correct: true},
		 { text: "Celá kniha je složena z 13 balad. Složení kniha -> balada -> sloka > rým -> verš -> slovo.", correct: false},
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
		question: "Postavy - Gervaisa",
		answers: [
		 { text: "Hlavní kladná postava. Je to mladá koketní dívka. Když porodí, tak své dítě bezesporu miluje. Je nešťastná, protože nemůže vidět matku.", correct: false},
		 { text: "Hlavní kladná postava, vůdce loupežníků a romantický tragický hrdina, který se mstí za křivdu a pravdivě miluje Jarmilu.", correct: false},
		 { text: "Vedlejší neutrální postava. Přítelkyně Abea a herečka. Není moc inteligentní.", correct: false},
		 { text: "Hlavní kladná postava. Jedná se o pracovitou pradlenu, která se postupně propadá do alkoholismu a chudoby. Pomalu ztrácí svoje morální hodnoty. Ze začátku se jednalo o milující ženu a matku, ale s postupem času se začíná citově odtahovat.", correct: true},
		]
	},
	{
		question: "Postavy - Coupeau",
		answers: [
		 { text: "Hlavní kladná postava. Je to mladá koketní dívka. Když porodí, tak své dítě bezesporu miluje. Je nešťastná, protože nemůže vidět matku.", correct: false},
		 { text: "Hlavní kladná později záporná postava. Gervaisin milující manžel a pracovitý klempíř, který po úrazu začne pít a stává se násilným a lenivým. Stává se Lantierem.", correct: true},
		 { text: "Hlavní záporná postava. Jedná se o zámožného muže, který je otcem Kleanta a Elisy. Je extrémně lakomý a chce vše, za co nejnižší náklady nebo nejlépe zdarma.", correct: false},
		 { text: "Hlavní kladná postava, mladá dívka a milenka Viléma (a později i jeho otce), jejíž osud je tragicky spjat s Vilémovým a pravděpodobně ho pravdivě miluje.", correct: false},
		]
	},
	{
		question: "Postavy - Lantier",
		answers: [
		 { text: "Hlavní záporná postava, záletník a krutý muž, Vilémův otec, který ho v mládí vyhnal z domu; v knize je spíše fiktivní.", correct: false},
		 { text: "Vedlejší kladná postava. Jedná se o starostlivou starší ženu, která miluje svou dceru, a strachuje se o ní.", correct: false},
		 { text: "Správce u Harpagona, milenec Elisy, ve skutečnosti šlechtic.", correct: false},
		 { text: "Hlavní záporná postava. Je to bývalý manipulativní partner Gervaisy, který jí znovu ovlivňuje, když se vrací do Paříže, odkud utekl s jinou. Alkoholik a záletník.", correct: true},
		]
	},
	{
		question: "Postavy - Nana",
		answers: [
		 { text: "Bratranec Julie, výborný šermíř a prudký muž. Zabije Mercutia, poté ho Romeo usmrtí.", correct: false},
		 { text: "Vedlejší záporná postava. Je to Čech, který sympatizuje s Němci.", correct: false},
		 { text: "Vedlejší neutrální postava. Dcera Gervaisy, která kvůli nefunkční rodině skončí jako prostitutka. Jako dítě neposedná a velmi svá.", correct: true},
		 { text: "Syn Harpagona, miluje Marianu, soupeří s otcem o její ruku.", correct: false},
		]
	},
	{
		question: "Postavy - Gouje",
		answers: [
		 { text: "Vedlejší kladná postava. velmi pracovitý a poctivý kovář, který se zamiluje do Gervaisy. Půjčí jí peníze na prádelnu po úrazu Coupea. Bývalý přítel Coupea. Stojí proti industrializaci, takže se dostává do konfliktů se systémem.", correct: true},
		 { text: "Vedlejší záporná postava. Je to Čech, který sympatizuje s Němci.", correct: false},
		 { text: "Vedlejší neutrální postava. Dcera Gervaisy, která kvůli nefunkční rodině skončí jako prostitutka. Jako dítě neposedná a velmi svá.", correct: false},
		 { text: "Syn Harpagona, miluje Marianu, soupeří s otcem o její ruku.", correct: false},
		]
	},
	{
		question: "Postavy - Lorilleuxovi",
		answers: [
		 { text: "Hlavní záporná postava, záletník a krutý muž, Vilémův otec, který ho v mládí vyhnal z domu; v knize je spíše fiktivní.", correct: false},
		 { text: "Vedlejší kladná postava. Jedná se o starostlivou starší ženu, která miluje svou dceru, a strachuje se o ní.", correct: false},
		 { text: "Správce u Harpagona, milenec Elisy, ve skutečnosti šlechtic.", correct: false},
		 { text: "Vedlejší záporná postava. Sestra Coupea a její muž. Závistiví zlatníci, kteří jsou vcelku zámožní, ale chtějí, aby si lidé mysleli, že jsou chudí. Jsou velmi nepřející a lakomí. ", correct: true},
		]
	},
	{
		question: "Děj?",
		answers: [
		 { text: "Balada začíná vodníkem, který si při měsíčním svitu šije oblek na svatbu, která se má brzy stát. Dalšího dne ráno dcera, i přes matčino varování, jde k jezeru, kde chce vyprat své šátky. Zde ji unese vodník, který ji oplodní a donutí ji s ním žít. Dcera porodí dítě, ale je nešťastná, protože chce vidět matku. To ji nakonec vodník dovolí, ale musí být do večera zpět. Doma ji však matka zavře a nechce nechat odejít, protože se o dceru bojí. Vodník se nějakou dobu snaží dobývat dovnitř, když to ale nejde, tak ze zloby zabije svého syna a odchází.", correct: false},
		 { text: "Kniha sleduje osudy Gervaisy, která přichází do Paříže s nadějí na lepší život, s přítelem Lantierem a 2 dětmi. Přítel ji opustí, takže si se po čase vezme jejich podnájemníka a klempíře Coupea. Po svatbě s Coupeauem se jim daří, avšak Coupeau se po úrazu stává alkoholikem. Gervaisa se zakouká do kováře Goujeta, který jý vypomáhá. Když se Lantier vrací, tak se nechává okouzlit i jím. Gervaisa se snaží udržet rodinu, ale postupně propadá alkoholu také. Jejich dcera Nana odchází z domova a stává se prostitutkou. Příběh končí tragickým úpadkem Gervaisy, která umírá opuštěná a v bídě.", correct: true},
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
		question: "Co byla Pařížská komuna?",
		answers: [
		 { text: "Vznik nové francouzské ústavy", correct: false},
		 { text: "Období vlády Ludvíka XIV.", correct: false},
		 { text: "1. povstání dělníků", correct: true},
		 { text: "Spolek spisovatelů v Paříži", correct: false},
		]
	},
	{
		question: "K čemu vedl přesun lidí do měst?",
		answers: [
		 { text: "Ke snížení nezaměstnanosti", correct: false},
		 { text: "K růstu venkovské výroby", correct: false},
		 { text: "K vyšší nezaměstnanosti", correct: true},
		 { text: "K úpadku průmyslu", correct: false},
		]
	},
	{
		question: "Jak reagovali čtenáři na naturalistické romány?",
		answers: [
		 { text: "Byli jimi nadšeni", correct: false},
		 { text: "Byli znechuceni", correct: true},
		 { text: "Zůstali k nim lhostejní", correct: false},
		 { text: "Přijímali je jako humoristické dílo", correct: false},
		]
	},
	{
		question: "Co naturalismus zobrazoval?",
		answers: [
		 { text: "Romantickou krásu světa", correct: false},
		 { text: "Národní hrdinství", correct: false},
		 { text: "Legendy a pověsti", correct: false},
		 { text: "Krutost světa bez příkras", correct: true},
		]
	},
	{
		question: "Co měly za následek francouzské revoluce a napoleonské války?",
		answers: [
		 { text: "Vyčerpání Francie", correct: true},
		 { text: "Obchodní prosperitu Francie", correct: false},
		 { text: "Vznik Rakousko-Uherska", correct: false},
		 { text: "Koloniální expanzi", correct: false},
		]
	},
	{
		question: "Jak se vyvíjel rozdíl mezi společenskými vrstvami v této době?",
		answers: [
		 { text: "Rozdíly se stíraly", correct: false},
		 { text: "Rozdíly se prohlubovaly", correct: true},
		 { text: "Všichni byli rovni", correct: false},
		 { text: "Bohatí chudli a chudí bohatli", correct: false},
		]
	},
	{
		question: "Kdy vznikl naturalismus?",
		answers: [
		 { text: "Na začátku 18. století", correct: false},
		 { text: "V polovině 19. století", correct: false},
		 { text: "Ve 20. století", correct: false},
		 { text: "Na konci 19. století", correct: true},
		]
	},
	{
		question: "Z jakého literárního směru naturalismus vychází?",
		answers: [
		 { text: "Z romantismu", correct: false},
		 { text: "Z realismu", correct: true},
		 { text: "Z klasicismu", correct: false},
		 { text: "Z baroka", correct: false},
		]
	},
	{
		question: "Co bylo pro naturalismus typické?",
		answers: [
		 { text: "Idealizace hrdinů", correct: false},
		 { text: "Mystika a víra v nadpřirozeno", correct: false},
		 { text: "Vyjádření nejčistší možné pravdy", correct: true},
		 { text: "Politická propaganda", correct: false},
		]
	},
	{
		question: "Jaká témata naturalismus otevíral?",
		answers: [
		 { text: "Jen národní hrdinství", correct: false},
		 { text: "Náboženské motivy", correct: false},
		 { text: "Pouze přírodní krásy", correct: false},
		 { text: "Tabuizovaná témata jako smrt, sex, drogy", correct: true},
		]
	},
	{
		question: "Jaký přístup byl pro naturalismus charakteristický?",
		answers: [
		 { text: "Mystický", correct: false},
		 { text: "Vědecký", correct: true},
		 { text: "Náboženský", correct: false},
		 { text: "Fantastický", correct: false},
		]
	},
	{
		question: "Co znamenal determinismus v rámci naturalismu?",
		answers: [
		 { text: "Svoboda rozhodování člověka", correct: false},
		 { text: "Víra v osud a náhodu", correct: false},
		 { text: "To, že lidské chování je ovlivněno genetickými a sociálními faktory", correct: true},
		 { text: "Nezávislost člověka na společnosti", correct: false},
		]
	},
	{
		question: "Kdo je považován za zakladatele naturalismu?",
		answers: [
		 { text: "Victor Hugo", correct: false},
		 { text: "Gustave Flaubert", correct: false},
		 { text: "Honoré de Balzac", correct: false},
		 { text: "Émile Zola", correct: true},
		]
	},
	{
		question: "Jaké bylo povolání Zolova otce?",
		answers: [
		 { text: "Inženýr a bývalý důstojník Napoleonské armády", correct: true},
		 { text: "Učitel", correct: false},
		 { text: "Nakladatel", correct: false},
		 { text: "Advokát", correct: false},
		]
	},
	{
		question: "Proč Zola neměl finance na vzdělání?",
		answers: [
		 { text: "Rodina byla od začátku chudá", correct: false},
		 { text: "Kvůli válce", correct: false},
		 { text: "Otec náhle zemřel", correct: true},
		 { text: "Matka se provdala znovu", correct: false},
		]
	},
	{
		question: "Kde začal Zola pracovat po neúspěchu u maturity?",
		answers: [
		 { text: "V novinách", correct: false},
		 { text: "V nakladatelství Hachette", correct: true},
		 { text: "V divadle", correct: false},
		 { text: "Na univerzitě", correct: false},
		]
	},
	{
		question: "Kterým dílem prorazil Émile Zola?",
		answers: [
		 { text: "Germinal", correct: false},
		 { text: "Nana", correct: false},
		 { text: "Zabiják", correct: false},
		 { text: "Tereza Raquinová", correct: true},
		]
	},
	{
		question: "Jaký princip prosazoval Zola v díle Experimentální román?",
		answers: [
		 { text: "Vědecký základ románu a objektivní pozorování", correct: true},
		 { text: "Fantastický přístup k literatuře", correct: false},
		 { text: "Národní myšlenku", correct: false},
		 { text: "Náboženský pohled", correct: false},
		]
	},
	{
		question: "Jak se jmenoval slavný Zolův dopis prezidentovi na obranu kapitána Dreyfuse??",
		answers: [
		 { text: "Obviňuji", correct: false},
		 { text: "Omlouvám se", correct: false},
		 { text: "Protestuji", correct: false},
		 { text: "Žaluji", correct: true},
		]
	},
	{
		question: "Jak zemřel Émile Zola?",
		answers: [
		 { text: "Byl popraven", correct: false},
		 { text: "V bitvě", correct: false},
		 { text: "Na otravu oxidem uhličitým", correct: true},
		 { text: "Na nemoc", correct: false},
		]
	},
	{
		question: "Co se spekuluje o jeho smrti?",
		answers: [
		 { text: "Že se jednalo o vraždu, protože někdo záměrně ucpal komín", correct: true},
		 { text: "Že byl otráven jedem", correct: false},
		 { text: "Že spáchal sebevraždu", correct: false},
		 { text: "Že uprchl do ciziny", correct: false},
		]
	},
	{
		question: "Literární směr – další autoři světoví",
		answers: [
		 { text: "Homer, Vergilius, Dante Alighieri", correct: false},
		 { text: "Geoffrey Chaucer, François Villon, William Shakespeare", correct: false},
		 { text: "Honore de Balzac, Gustave Flaubert, Guy de Maupassant", correct: true},
		 { text: "Molière, Johann Wolfgang Goethe, Voltaire", correct: false},
		]
	},
	{
		question: "Literární směr – další autoři čeští",
		answers: [
		 { text: "Kosmas, Jan Hus, Václav Hájek z Libočan", correct: false},
		 { text: "Jan Amos Komenský, Bohuslav Balbín, Adam Michna z Otradovic", correct: false},
		 { text: "Daniel Adam z Veleslavína, Jan Blahoslav, Jan Kořínek", correct: false},
		 { text: "Josef Šlejhar, Alois Jirásek, Božena Němcová", correct: true},
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
