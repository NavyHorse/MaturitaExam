const questions = [
	{
		question: "Jaký druh je kniha Romeo a Julie?",
		answers: [
		 { text: "Epika", correct: false},
		 { text: "Drama", correct: true},
		 { text: "Lyrika", correct: false},
		]
	},
	{
		question: "Jaká forma je kniha Romeo a Julie?",
		answers: [
		 { text: "Drama", correct: true},
		 { text: "Próza", correct: false},
		 { text: "Poezie", correct: false},
		]
	},
	{
		question: "Jaký žánr je kniha Romeo a Julie?",
		answers: [
		 { text: "Román", correct: false},
		 { text: "Povídka", correct: false},
		 { text: "Komedie", correct: false},
		 { text: "Tragédie", correct: true},
		]
	},
	{
		question: "Co je hlavní téma knihy?",
		answers: [
		 { text: "láska odsouzená k zániku a mezigenerační nenávist", correct: true},
		 { text: "proměna a odcizení od společnosti", correct: false},
		 { text: "zamyšlení nad smrtí a absurditou lidského života", correct: false},
		 { text: "nepřímá kritika totality, jejích praktik a nesvobody, absurdita normalizace", correct: false},
		]
	},
	{
		question: "Co jsou hlavní motivy knihy?",
		answers: [
		 { text: "majorova lebka, Jonesova puška, sedm přikázání, štěňata nebo větrný mlýn", correct: false},
		 { text: "mloci, kteří představují nacisty, lidstvo, obchod, průmysl, výstřižky nebo také zbraně", correct: false},
		 { text: "matka, touha, ponocný, sklep, hlas, smích, loď, den, krysa a host", correct: false},
		 { text: "meč, sochy, zeď, okno, lože, dýka, číše, hrobka, smrt", correct: true},
		]
	},
	{
		question: "Kdy byla kniha vydána?",
		answers: [
		 { text: "1850", correct: false},
		 { text: "1934", correct: false},
		 { text: "1595", correct: true},
		 { text: "1984", correct: false},
		]
	},
	{
		question: "Časoprostor - Kdy?",
		answers: [
		 { text: "2. polovině 19. století", correct: false},
		 { text: "2. polovině 16. století", correct: true},
		 { text: "1. polovině 20. století", correct: false},
		 { text: "1. polovině 21. století", correct: false},
		]
	},
	{
		question: "Časoprostor - Kde?",
		answers: [
		 { text: "v Itálii ve městě Verona", correct: true},
		 { text: "v Německu, Chorvatsku, Itálii (Benátkách)", correct: false},
		 { text: "ve Španělsku v nejmenovaném komplexu v jedné z jeho cel", correct: false},
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
		 { text: "5 jednání (dějství)", correct: true},
		 { text: "4 díly a 51 kapitol", correct: false},
		 { text: "1 akt", correct: false},
		]
	},
	{
		question: "Jaký je vypravěč podle literárního druhu?",
		answers: [
		 { text: "Vypravěč", correct: false},
		 { text: "Není", correct: true},
		 { text: "Lyrický subjekt", correct: false},
		]
	},
	{
		question: "Vypravěč dle gramatické osoby?",
		answers: [
		 { text: "Ich-forma", correct: false},
		 { text: "Er-forma ", correct: false},
		 { text: "Není", correct: true},
		]
	},
	{
		question: "Vypravěč dle vyprávěcí roviny?",
		answers: [
		 { text: "Není", correct: true},
		 { text: "Přímý vypravěč ", correct: false},
		 { text: "Vypravěč vševědoucí", correct: false},
		 { text: "Neosobní vypravěč", correct: false},
		]
	},
	{
		question: "Postavy - Julie Kapuletová",
		answers: [
		 { text: "Hlavní kladná postava. Je to mladá koketní dívka. Když porodí, tak své dítě bezesporu miluje. Je nešťastná, protože nemůže vidět matku.", correct: false},
		 { text: "Hlavní kladná postava. je to mladá dívka. Jedná se o milenku Viléma a později i jeho otce.", correct: false},
		 { text: "Vedlejší neutrální postava. Přítelkyně Abea a herečka. Není moc inteligentní.", correct: false},
		 { text: "Dcera Kapuleta, zamilovaná do Romea z nepřátelského rodu Monteků. Oddána v tajnosti, předstírá smrt, nakonec se skutečně zabije po Romeově smrti.", correct: true},
		]
	},
	{
		question: "Postavy - Romeo Montek",
		answers: [
		 { text: "Vedlejší kladná postava. Je to tvůrce Animalismu. Je to starý výstavní kanec, který pár dní před svou smrtí povídá zvířatům o tom že, se mají vzbouřit proti lidem.", correct: false},
		 { text: "Syn Monteka, hluboce zamilovaný do Julie. Po zabití Tybalta vyhoštěn, mylně věří, že Julie zemřela, a vypije jed.", correct: true},
		 { text: "Hlavní záporná postava. Jedná se o zámožného muže, který je otcem Kleanta a Elisy. Je extrémně lakomý a chce vše, za co nejnižší náklady nebo nejlépe zdarma.", correct: false},
		 { text: "Hlavní kladná postava. Je to vysoký a štíhlý muž. Má drobné a jemné ruce. Jeho oči jsou temné a pátravé. Na začátku knihy přichází do města Hammeln, aby odsud vyvedl krysy, a neví, jak dlouho zde pobude.", correct: false},
		]
	},
	{
		question: "Postavy - bratr Lorenzo",
		answers: [
		 { text: "Vedlejší kladná / neutrální postava. Jedná se o milence Elisy, který slouží u Harpagona jako jeho správce. Jednou Elisu zachránil před utopením a od té doby se do sebe zamilovali.", correct: false},
		 { text: "Hlavní kladná postava. Je to mladý výpravčí, který sní o tom, že ztratí panictví. Má malé sebevědomí. Je vypravěčem příběhu.", correct: false},
		 { text: "Františkánský mnich, přítel Romea. Oddá milence, dá Julii uspávadlo a plánuje jejich útěk.", correct: true},
		 { text: "Vedlejší záporná postava. Původní majitel Panské farmy. Je krutý a má silný sklon k alkoholu. Při zvířecím převratu je se svou rodinou a čeledíny vyhnán z farmy. ", correct: false},
		]
	},
	{
		question: "Postavy - Tybalt",
		answers: [
		 { text: "Bratranec Julie, výborný šermíř a prudký muž. Zabije Mercutia, poté ho Romeo usmrtí.", correct: true},
		 { text: "Vedlejší záporná postava. Je to Čech, který sympatizuje s Němci.", correct: false},
		 { text: "Hlavní kladná postava. Jedná se o syna Harpagona, který miluje Marianu a chce si ji vzít. Kvůli tomuto se dostává do konfliktu s Harpagonem, který ji také chce za ženu.", correct: false},
		 { text: "Vedlejší záporná postava. Symbol propagandy. Je to mistrný manipulátor, který manipuluje s ostatními zvířaty.", correct: false},
		]
	},
	{
		question: "Postavy - Mercutio",
		answers: [
		 { text: "Hlavní záporná postava. Představuje Stalina. Je středně inteligentní a velmi prohnaný. Pomalu ihned poté, co starý Major umírá, začíná plánovat, jak by toho mohl využít.", correct: false},
		 { text: "Hlavní kladná postava. Je to služebně starší spolupracovník Miloše Hrmy, který ho měl v učení v Dobrovicích, kde přednostovi stanice přetrhl jeho kanape. Hubička je velký svůdník, který má pestrý a úspěšný milostný život.", correct: false},
		 { text: "Přítel Romea a příbuzný knížete. Veselý, odvážný, umírá rukou Tybalta.", correct: true},
		 { text: "Vedlejší neutrální postava. Jedná se o mistra lichváře, který sjednává obchod mezi Harpagonem a Kleantem.", correct: false},
		]
	},
	{
		question: "Postavy - Kapulet",
		answers: [
		 { text: "Juliin otec, hlava rodu Kapuletů. Chce provdat Julii za Parise. Na konci se smíří s Montekem.", correct: true},
		 { text: "Vedlejší kladná postava. Jedná se o zámožného muže, který si má vzít Elisu za ženu. Vypadá jako rozumný a milý člověk. Nechce si násilně vzít Elisu, když ho nechce.", correct: false},
		 { text: "Vedlejší neutrální postava. Jedná se o otce Řehoře. Je autoritativní a tvrdý muž, který Řehoře postupně zavrhuje. ", correct: false},
		 { text: "Je to vedlejší kladná postava. Je velmi inteligentní, ale nechce se mu nic dělat. Je to oddaný přítel Boxera.", correct: false},
		]
	},
	{
		question: "Postavy - Montek",
		answers: [
		 { text: "Vedlejší záporná postava. Jedná se o obchodníka, přes kterého začnou prasata obchodovat s okolním světem.", correct: false},
		 { text: "Vedlejší záporná postava. Je to mladík pracující v obchodě svého strýce Ondřeje. Doufá, že poté co strýc umře, dostane jeho dědictví a zdědí jeho obchod.", correct: false},
		 { text: "Hlavní kladná postava. Cestující obchodník, který se jednoho dne probudí proměněn v obří hmyz.", correct: false},
		 { text: "Romeův otec, hlava rodu Monteků. Na konci se smíří s Kapuletem.", correct: true},
		]
	},
	{
		question: "Děj?",
		answers: [
		 { text: "V italské Veroně zuří spor mezi rody Monteků a Kapuletů. Romeo Montek a Julie Kapuletová se do sebe zamilují na bále, přestože jejich rodiny jsou nepřátelé. S pomocí bratra Lorenza se tajně vezmou. Tybalt, Juliin bratranec, zabije Romeova přítele Mercutia, a Romeo v pomstě Tybalta usmrtí. Za to je vyhoštěn. Julie má být provdána za Parise, a proto s Lorenzem zosnuje plán – vypije uspávadlo a bude se tvářit mrtvá, aby mohla uprchnout s Romeem. Zpráva o plánu se k Romeovi nedostane a ten, přesvědčen o její smrti, vypije jed u jejího těla. Julie se probudí, spatří mrtvého Romea a probodne se. Rodiny, zdrcené smrtí obou milenců, se usmíří.", correct: true},
		 { text: "Agnes se zamiluje do tajemného Krysaře a ubytuje ho. Po hádce s konšely, kteří mu odmítnou vyplatit mzdu, se Krysař chystá zničit město, ale Agnes ho odradí. Když zjistí, že Agnes čeká dítě s jiným, ta spáchá sebevraždu skokem do propasti. Zdrcený Krysař zahraje na píšťalu, omámí celé město a dovede jeho obyvatele k hromadné smrti na kopci Koppel. Přežije jen rybář Sepp, který nakonec zachrání opuštěné dítě.", correct: false},
		 { text: "Vaněk přijde do kanceláře sládka, který mu nabízí pivo a vede s ním rozhovor o práci, známých i možnosti přesunu do skladu – ovšem za cenu, že by musel donášet. Vaněk odmítá, sládek se rozzlobí, poté smutní a opile usíná. Vaněk odejde, ale po chvíli se vrací a chová se jinak, což může naznačovat, že si ze sládka utahuje.", correct: false},
		 { text: "Slavný, ale osamělý spisovatel Gustav von Aschenbach cestuje po Evropě, znechucen pokrytectvím společnosti. V Benátkách potká čtrnáctiletého polského chlapce Tadzia, k němuž pocítí platonickou lásku a tvůrčí inspiraci. Zůstává ve městě i přes epidemii cholery. Když Tadziova rodina odjíždí, Aschenbach umírá v lehátku pohledem na chlapce.", correct: false},
		]
	},
	{
		question: "Je zde veršová výstavba?",
		answers: [
		 { text: "Střídavý: a, b, a, b", correct: false},
		 { text: "Obkročný: a, b, b, a", correct: false},
		 { text: "Blank verse (nerýmovaný pětistopý jamb), kterým mluví většina postav", correct: true},
		 { text: "Postupný: a, b, c, d", correct: false},
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
		question: "Kdo a v kterém roce vynalezl knihtisk?",
		answers: [
		 { text: "Johannes Gutenberg v roce 1450", correct: true},
		 { text: "Otec a syn Janssenovi v roce 1590", correct: false},
		 { text: "Wilhelm Schickard v roce 1623", correct: false},
		 { text: "Hans Lippershey v roce 1608", correct: false},
		]
	},
	{
		question: "Co zpřístupnil vynález knihtisku široké veřejnosti?",
		answers: [
		 { text: "Papír", correct: false},
		 { text: "Pero", correct: false},
		 { text: "Knihy", correct: true},
		 { text: "Elektřina", correct: false},
		]
	},
	{
		question: "Kdo a v kterém roce vydal 95 tezí kritizujících církevní odpustky?",
		answers: [
		 { text: "Cyril a Metoděj v roce 850", correct: false},
		 { text: "Martin Luther v roce 1517", correct: true},
		 { text: "Karel Gott v roce 1999", correct: false},
		 { text: "Antonín Dvořák v roce 1890", correct: false},
		]
	},
	{
		question: "Kdy a do jakého jazyka přeložil Martin Luther Bibli?",
		answers: [
		 { text: "V roce 1522 do němčiny", correct: true},
		 { text: "V roce 1500 do italštiny", correct: false},
		 { text: "V roce 1000 do češtiny", correct: false},
		 { text: "V roce 2000 do finčtiny", correct: false},
		]
	},
	{
		question: "Kdo vládl v Británii v době vydání díla a co se jí podařilo udržet?",
		answers: [
		 { text: "Karel III.", correct: false},
		 { text: "Viktorie I.", correct: false},
		 { text: "Jiří I.", correct: false},
		 { text: "Alžběta I., podařilo se jí udržet klid mezi katolíky a protestanty.", correct: true},
		]
	},
	{
		question: "Jaký konflikt probíhal ve Francii v té době a jak byl ukončen?",
		answers: [
		 { text: "Občanská válka mezi rody Valois a Bourbony, ukončená sňatkem mezi francouzským králem a anglickou princeznou.", correct: false},
		 { text: "Náboženské války mezi katolíky a protestanty, ukončené ediktem nantským roku 1598.", correct: true},
		 { text: "Válka o nezávislost proti Španělsku, ukončená mírem v Paříži.", correct: false},
		 { text: "Konflikt mezi městskou šlechtou a venkovskými sedláky, ukončený zákazem vlastnictví půdy šlechtou.", correct: false},
		]
	},
	{
		question: "Co stanovoval edikt nantský vydaný roku 1598?",
		answers: [
		 { text: "Zakazoval protestantismus ve Francii.", correct: false},
		 { text: "Zaváděl nový katolický řád.", correct: false},
		 { text: "Nařizoval nucené konverze k islámu.", correct: false},
		 { text: "Uznával obě náboženství.", correct: true},
		]
	},
	{
		question: "Co se začalo v této době poprvé objevovat v oblasti medicíny?",
		answers: [
		 { text: "Vakcína proti moru.", correct: false},
		 { text: "První lékařské pitvy.", correct: true},
		 { text: "Moderní chirurgické nástroje.", correct: false},
		 { text: "Antibiotika pro léčbu infekcí.", correct: false},
		]
	},
	{
		question: "Jaký literární směr reprezentuje dílo?",
		answers: [
		 { text: "Renesance", correct: true},
		 { text: "Baroko", correct: false},
		 { text: "Gotika", correct: false},
		 { text: "Romantismus", correct: false},
		]
	},
	{
		question: "Co se renesance snažila „znovuoživit“?",
		answers: [
		 { text: "Moderní vědu", correct: false},
		 { text: "Středověké legendy", correct: false},
		 { text: "Antiku", correct: true},
		 { text: "Staroegyptskou kulturu", correct: false},
		]
	},
	{
		question: "Jaký sloh (směr) renesance odmítá?",
		answers: [
		 { text: "Gotiku", correct: true},
		 { text: "Baroko", correct: false},
		 { text: "Klasicismus", correct: false},
		 { text: "Romantismus", correct: false},
		]
	},
	{
		question: "Jaké nové umělecké techniky se v renesanci zrodily?",
		answers: [
		 { text: "Pravidla lineární perspektivy", correct: true},
		 { text: "Impresionismus", correct: false},
		 { text: "Surrealismus", correct: false},
		 { text: "Kubismus", correct: false},
		]
	},
	{
		question: "Jaké nové žánry vznikly v době renesance?",
		answers: [
		 { text: "Detektivka", correct: false},
		 { text: "Sci-fi a fantasy", correct: false},
		 { text: "Podobizna, krajina, zátiší", correct: true},
		 { text: "Drama", correct: false},
		]
	},
	{
		question: "Na co se kladl v renesanci velký důraz?",
		answers: [
		 { text: "Kolektivní náboženství", correct: false},
		 { text: "Individualitu", correct: true},
		 { text: "Vznešené mýty bohů", correct: false},
		 { text: "Pouze na společenské vrstvy", correct: false},
		]
	},
	{
		question: "Jaký dualismus se v renesanci často objevoval?",
		answers: [
		 { text: "Mezi mužem a ženou", correct: false},
		 { text: "Mezi světlem a tmou", correct: false},
		 { text: "Mezi životem a smrtí", correct: false},
		 { text: "Mezi tělem a duší", correct: true},
		]
	},
	{
		question: "Co v renesanci začalo stoupat na významu?",
		answers: [
		 { text: "Národní jazyky", correct: true},
		 { text: "Latinská gramatika", correct: false},
		 { text: "Řečtina jako lingua franca", correct: false},
		 { text: "Církevní latinčina", correct: false},
		]
	},
	{
		question: "Kdo byl William Shakespeare?",
		answers: [
		 { text: "Francouzský básník", correct: false},
		 { text: "Anglický dramatik a herec", correct: true},
		 { text: "Italský malíř", correct: false},
		 { text: "Švédský romantic", correct: false},
		]
	},
	{
		question: "Jak se jmenovala divadelní společnost, ve které Shakespeare působil od roku 1594?",
		answers: [
		 { text: "The King's Men", correct: false},
		 { text: "Lord Chamberlain's Men", correct: true},
		 { text: "The Globe Players", correct: false},
		 { text: "The Dog Watchers", correct: false},
		]
	},
	{
		question: "Jaké divadlo Shakespeare částečně vlastnil?",
		answers: [
		 { text: "Blackfriars", correct: false},
		 { text: "The Rose", correct: false},
		 { text: "Last Road", correct: false},
		 { text: "Globe", correct: true},
		]
	},
	{
		question: "Kdy zemřel William Shakespeare?",
		answers: [
		 { text: "1. ledna 1600", correct: false},
		 { text: "23. dubna 1616", correct: true},
		 { text: "15. března 1620", correct: false},
		 { text: "9. listopadu 1630", correct: false},
		]
	},
	{
		question: "Co je blankvers?",
		answers: [
		 { text: "Verš bez rýmu, 10 slabik s důrazem na každou druhou slabiku", correct: true},
		 { text: "Básnický styl s rýmem a 8 slabikami", correct: false},
		 { text: "Styl prózy bez veršů", correct: false},
		 { text: "Neexistuje", correct: false},
		]
	},
	{
		question: "Na jaká období se dělí Shakespeareova tvorba?",
		answers: [
		 { text: "Komedie, historické hry, sonety", correct: false},
		 { text: "Historické hry, eposy, sonety", correct: false},
		 { text: "Tragédie, romance, balady", correct: false},
		 { text: "Komedie a historické hry, tragédie, sonety", correct: true},
		]
	},
	{
		question: "Co znamená období renesance, které Shakespeare reprezentoval?",
		answers: [
		 { text: "Návrat k gotice a středověkým hodnotám", correct: false},
		 { text: "„Znovuzrození“ antiky a důraz na lidský rozum a vědu", correct: true},
		 { text: "Období klasicismu a osvícenství", correct: false},
		 { text: "Období Romantismusu", correct: false},
		]
	},
	{
		question: "Jaký konec měly ženy v Shakespeareových tragédiích?",
		answers: [
		 { text: "Nešťastný", correct: true},
		 { text: "Šťastný", correct: false},
		 { text: "Neurčitý", correct: false},
		 { text: "Nechutný", correct: false},
		]
	},
	{
		question: "Literární směr – další autoři světoví",
		answers: [
		 { text: "Fjodor Dostojevskij, Charles Dickens, Franz Kafka", correct: false},
		 { text: "George Orwell, Ernest Hemingway, Virginia Woolfová", correct: false},
		 { text: "Francois Villon, Dante Alighieri, Sebastian Brant", correct: true},
		 { text: "Oscar Wilde, Jules Verne", correct: false},
		]
	},
	{
		question: "Literární směr – další autoři čeští",
		answers: [
		 { text: "Jaroslav Hašek, Franz Kafka, Jan Neruda ", correct: false},
		 { text: "Vítězslav Nezval, Jaroslav Seifert, Ivan Blatný", correct: false},
		 { text: "Karel Hynek Mácha, Božena Němcová", correct: false},
		 { text: "Jan Blahoslav, Daniel Adam z Veleslavína, Mikuláš Dačický, Václav Hájek", correct: true},
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
