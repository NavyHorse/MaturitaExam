const questions = [
	{
		question: "Jaký druh je kniha Labyrint světa a ráj srdce?",
		answers: [
		 { text: "Lyrika", correct: false},
		 { text: "Drama", correct: false},
		 { text: "Epika", correct: true},
		]
	},
	{
		question: "Jaká forma je kniha Labyrint světa a ráj srdce?",
		answers: [
		 { text: "Drama", correct: false},
		 { text: "Próza", correct: true},
		 { text: "Poezie", correct: false},
		]
	},
	{
		question: "Jaký žánr je kniha Labyrint světa a ráj srdce?",
		answers: [
		 { text: "Legenda", correct: false},
		 { text: "Křesťanský filozofický román", correct: true},
		 { text: "Óda", correct: false},
		 { text: "Cestopis", correct: false},
		]
	},
	{
		question: "Co je hlavní téma knihy?",
		answers: [
		 { text: "láska odsouzená k zániku a mezigenerační nenávist", correct: false},
		 { text: "proměna a odcizení od společnosti", correct: false},
		 { text: "víra v Boha a prozřelost vůči špatnostem", correct: true},
		 { text: "nepřímá kritika totality, jejích praktik a nesvobody, absurdita normalizace", correct: false},
		]
	},
	{
		question: "Co jsou hlavní motivy knihy?",
		answers: [
		 { text: "srdce, brána, palác, tlumočník a stav", correct: true},
		 { text: "mloci, kteří představují nacisty, lidstvo, obchod, průmysl, výstřižky nebo také zbraně", correct: false},
		 { text: "matka, touha, ponocný, sklep, hlas, smích, loď, den, krysa a host", correct: false},
		 { text: "meč, sochy, zeď, okno, lože, dýka, číše, hrobka, smrt", correct: false},
		]
	},
	{
		question: "Kdy byla kniha vydána?",
		answers: [
		 { text: "1750", correct: false},
		 { text: "1934", correct: false},
		 { text: "1595", correct: false},
		 { text: "1631", correct: true},
		]
	},
	{
		question: "Časoprostor - Kdy?",
		answers: [
		 { text: "17. století, pravděpodobně ve stejné době, jako byla kniha vydána", correct: true},
		 { text: "16. století", correct: false},
		 { text: "19. století", correct: false},
		 { text: "11. století", correct: false},
		]
	},
	{
		question: "Časoprostor - Kde?",
		answers: [
		 { text: "v Itálii ve městě Verona", correct: false},
		 { text: "v Německu, Chorvatsku, Itálii (Benátkách)", correct: false},
		 { text: "v alegorickém městě, které má znázorňovat svět", correct: true},
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
		 { text: "54 kapitol, a dělí se na 2 části", correct: true},
		 { text: "5 jednání (dějství)", correct: false},
		 { text: "4 díly a 51 kapitol", correct: false},
		 { text: "1 akt", correct: false},
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
		question: "Postavy - Poutník",
		answers: [
		 { text: "Hlavní kladná postava. Je to mladá koketní dívka. Když porodí, tak své dítě bezesporu miluje. Je nešťastná, protože nemůže vidět matku.", correct: false},
		 { text: "Je to hlavní kladná postava, zvídavý a inteligentní člověk, který vidí nedokonalosti světa a silně věří v Boha, u něhož nakonec najde, co hledal.", correct: true},
		 { text: "Vedlejší neutrální postava. Přítelkyně Abea a herečka. Není moc inteligentní.", correct: false},
		 { text: "Dcera Kapuleta, zamilovaná do Romea z nepřátelského rodu Monteků. Oddána v tajnosti, předstírá smrt, nakonec se skutečně zabije po Romeově smrti.", correct: false},
		]
	},
	{
		question: "Postavy - Všezvěd Všudybud",
		answers: [
		 { text: "Vedlejší kladná postava. Je to tvůrce Animalismu. Je to starý výstavní kanec, který pár dní před svou smrtí povídá zvířatům o tom že, se mají vzbouřit proti lidem.", correct: false},
		 { text: "Syn Monteka, hluboce zamilovaný do Julie. Po zabití Tybalta vyhoštěn, mylně věří, že Julie zemřela, a vypije jed.", correct: false},
		 { text: "Hlavní záporná postava. Jedná se o zámožného muže, který je otcem Kleanta a Elisy. Je extrémně lakomý a chce vše, za co nejnižší náklady nebo nejlépe zdarma.", correct: false},
		 { text: "Hlavní záporná postava, sluha královny Moudrosti, provází poutníka a snaží se ho svést do nějakého stavu.", correct: true},
		]
	},
	{
		question: "Postavy - Mámení",
		answers: [
		 { text: "Hlavní záporná postava, druhotný průvodce poutníka, omámí ho speciálními brýlemi.", correct: true},
		 { text: "Hlavní kladná postava. Je to mladý výpravčí, který sní o tom, že ztratí panictví. Má malé sebevědomí. Je vypravěčem příběhu.", correct: false},
		 { text: "Františkánský mnich, přítel Romea. Oddá milence, dá Julii uspávadlo a plánuje jejich útěk.", correct: false},
		 { text: "Vedlejší záporná postava. Původní majitel Panské farmy. Je krutý a má silný sklon k alkoholu. Při zvířecím převratu je se svou rodinou a čeledíny vyhnán z farmy.", correct: false},
		]
	},
	{
		question: "Postavy - Král Šalamoun",
		answers: [
		 { text: "Bratranec Julie, výborný šermíř a prudký muž. Zabije Mercutia, poté ho Romeo usmrtí.", correct: false},
		 { text: "Vedlejší záporná postava. Je to Čech, který sympatizuje s Němci.", correct: false},
		 { text: "Vedlejší kladná postava, izraelský král, odhalí pravdu o královně, ale sám je omámen.", correct: true},
		 { text: "Vedlejší záporná postava. Symbol propagandy. Je to mistrný manipulátor, který manipuluje s ostatními zvířaty.", correct: false},
		]
	},
	{
		question: "Postavy - Královna Moudrost (Marnivost)",
		answers: [
		 { text: "Hlavní záporná postava. Představuje Stalina. Je středně inteligentní a velmi prohnaný. Pomalu ihned poté, co starý Major umírá, začíná plánovat, jak by toho mohl využít.", correct: false},
		 { text: "Hlavní kladná postava. Je to služebně starší spolupracovník Miloše Hrmy, který ho měl v učení v Dobrovicích, kde přednostovi stanice přetrhl jeho kanape. Hubička je velký svůdník, který má pestrý a úspěšný milostný život.", correct: false},
		 { text: "Přítel Romea a příbuzný knížete. Veselý, odvážný, umírá rukou Tybalta.", correct: false},
		 { text: "Vedlejší záporná postava, královna světa, se služebnicemi představují falešné vlastnosti, snadno ovlivnitelná.", correct: true},
		]
	},
	{
		question: "Postavy - Bůh",
		answers: [
		 { text: "Vedlejší kladná postava, křesťanský Bůh, přivolá poutníka a odměňuje věrné.", correct: true},
		 { text: "Vedlejší kladná postava. Jedná se o zámožného muže, který si má vzít Elisu za ženu. Vypadá jako rozumný a milý člověk. Nechce si násilně vzít Elisu, když ho nechce.", correct: false},
		 { text: "Vedlejší neutrální postava. Jedná se o otce Řehoře. Je autoritativní a tvrdý muž, který Řehoře postupně zavrhuje.", correct: false},
		 { text: "Je to vedlejší kladná postava. Je velmi inteligentní, ale nechce se mu nic dělat. Je to oddaný přítel Boxera.", correct: false},
		]
	},
	{
		question: "Postavy - Smrt",
		answers: [
		 { text: "Vedlejší záporná postava. Jedná se o obchodníka, přes kterého začnou prasata obchodovat s okolním světem.", correct: false},
		 { text: "Vedlejší neutrální postava, nevyhnutelná, křesťanům vstřícnější, ostatním brutálnější.", correct: true},
		 { text: "Hlavní kladná postava. Cestující obchodník, který se jednoho dne probudí proměněn v obří hmyz.", correct: false},
		 { text: "Romeův otec, hlava rodu Monteků. Na konci se smíří s Kapuletem.", correct: false},
		]
	},
	{
		question: "Děj?",
		answers: [
		 { text: "V italské Veroně zuří spor mezi rody Monteků a Kapuletů. Romeo Montek a Julie Kapuletová se do sebe zamilují na bále, přestože jejich rodiny jsou nepřátelé. S pomocí bratra Lorenza se tajně vezmou. Tybalt, Juliin bratranec, zabije Romeova přítele Mercutia, a Romeo v pomstě Tybalta usmrtí. Za to je vyhoštěn. Julie má být provdána za Parise, a proto s Lorenzem zosnuje plán – vypije uspávadlo a bude se tvářit mrtvá, aby mohla uprchnout s Romeem. Zpráva o plánu se k Romeovi nedostane a ten, přesvědčen o její smrti, vypije jed u jejího těla. Julie se probudí, spatří mrtvého Romea a probodne se. Rodiny, zdrcené smrtí obou milenců, se usmíří.", correct: false},
		 { text: "Agnes se zamiluje do tajemného Krysaře a ubytuje ho. Po hádce s konšely, kteří mu odmítnou vyplatit mzdu, se Krysař chystá zničit město, ale Agnes ho odradí. Když zjistí, že Agnes čeká dítě s jiným, ta spáchá sebevraždu skokem do propasti. Zdrcený Krysař zahraje na píšťalu, omámí celé město a dovede jeho obyvatele k hromadné smrti na kopci Koppel. Přežije jen rybář Sepp, který nakonec zachrání opuštěné dítě.", correct: false},
		 { text: "Vaněk přijde do kanceláře sládka, který mu nabízí pivo a vede s ním rozhovor o práci, známých i možnosti přesunu do skladu – ovšem za cenu, že by musel donášet. Vaněk odmítá, sládek se rozzlobí, poté smutní a opile usíná. Vaněk odejde, ale po chvíli se vrací a chová se jinak, což může naznačovat, že si ze sládka utahuje.", correct: false},
		 { text: "Poutník se vydává poznat svět, ale hned se k němu přidají Všezvěd Všudybud a Mámení, kteří ho vedou a snaží se ho ovlivnit. Procházejí šesti stavy společnosti – manžely, řemeslníky, učenci, duchovními, vrchností a vojáky – kde poutník vidí korupci, pokrytectví a nespravedlnost. Nakonec dorazí na hrad paní Fortuny, kde lidé trpí a často umírají. Pak ho vezmou na hrad královny Moudrosti, která ukrývá zkaženost pod krásnými jmény. Král Šalamoun ji odhalí jako Marnost, ale nakonec podlehne jejímu kouzlu a nechá se svést. Poutník z toho všeho uteče na kraj světa, kde ho volá Bůh. Ten mu ukáže pravé křesťanství, ochrání ho a vyšle zpět do světa, aby mu sloužil, dokud nepřijde jeho čas.", correct: true},
		]
	},
	{
		question: "Je zde veršová výstavba?",
		answers: [
		 { text: "Střídavý: a, b, a, b", correct: false},
		 { text: "Není, protože to je prozaický text.", correct: true},
		 { text: "Obkročný: a, b, b, a", correct: false},
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
		question: "Jaké životní motivy ovlivnily vznik knihy?",
		answers: [
		 { text: "Život Jana Amose Komenského", correct: true},
		 { text: "Život Karla IV.", correct: false},
		 { text: "Život Franze Kafky", correct: false},
		 { text: "Život Ludvíka XIV.", correct: false},
		]
	},
	{
		question: "Které cesty Jana Amose Komenského se promítly do díla?",
		answers: [
		 { text: "Jeho cesta do Ameriky", correct: false},
		 { text: "Jeho plavba do Anglie a pobyt v Polsku", correct: true},
		 { text: "Jeho cesta do Itálie", correct: false},
		 { text: "Jeho pobyt v Rusku", correct: false},
		]
	},
	{
		question: "Jaká historická doba ovlivnila knihu?",
		answers: [
		 { text: "Renesance", correct: false},
		 { text: "Romantismus", correct: false},
		 { text: "Barokní doba", correct: true},
		 { text: "Modernismus", correct: false},
		]
	},
	{
		question: "Jaký kontrast mezi hodnotami je v díle zdůrazněn?",
		answers: [
		 { text: "Mezi láskou a nenávistí", correct: false},
		 { text: "Mezi bohatstvím a chudobouy", correct: false},
		 { text: "Mezi minulostí a budoucností", correct: false},
		 { text: "Mezi božskou dokonalostí a lidskou nicotou", correct: true},
		]
	},
	{
		question: "Z jaké doby pochází autor?",
		answers: [
		 { text: "Baroka", correct: true},
		 { text: "Renesance", correct: false},
		 { text: "Romantismus", correct: false},
		 { text: "Klasicismus", correct: false},
		]
	},
	{
		question: "Kdy probíhalo baroko?",
		answers: [
		 { text: "Od 14. do 15. století", correct: false},
		 { text: "Od 19. do 20. století", correct: false},
		 { text: "Od 2. poloviny 16. století do 18. století", correct: true},
		 { text: "Od 10. do 12. století", correct: false},
		]
	},
	{
		question: "Kde baroko vzniklo?",
		answers: [
		 { text: "V Anglii a Rusku", correct: false},
		 { text: "V Itálii a Španělsku", correct: true},
		 { text: "V Německu a Francii", correct: false},
		 { text: "V Čechách a Polsku.", correct: false},
		]
	},
	{
		question: "Co znamená baroko?",
		answers: [
		 { text: "Jednoduchý styl", correct: false},
		 { text: "Umělecký chaos", correct: false},
		 { text: "Pravidelný vzor", correct: false},
		 { text: "Nepravidelná perla -> něco neobyčejného, uměleckého, snažilo se odlišit.", correct: true},
		]
	},
	{
		question: "Na co baroko reagovalo?",
		answers: [
		 { text: "Na renesanční optimismus", correct: true},
		 { text: "Na středověkou temnotu", correct: false},
		 { text: "Na romantický idealismus", correct: false},
		 { text: "Na moderní vědu", correct: false},
		]
	},
	{
		question: "Jaký byl vztah katolíků a protestantů v době baroka?",
		answers: [
		 { text: "Ignorovali se", correct: false},
		 { text: "Spolupracovali", correct: false},
		 { text: "Tvrdě bojovali", correct: true},
		 { text: "Byli spojenci", correct: false},
		]
	},
	{
		question: "Jaké motivy jsou pro baroko typické?",
		answers: [
		 { text: "Nicota, skepse k pozemskému životu, návrat k Bohu", correct: true},
		 { text: "Radost a štěstí", correct: false},
		 { text: "Dobrodružství a hrdinství", correct: false},
		 { text: "Technický pokrok", correct: false},
		]
	},
	{
		question: "Jaké jsou hlavní principy barokní literatury?",
		answers: [
		 { text: "Vědecká fakta a realismus", correct: false},
		 { text: "Humor a satira", correct: false},
		 { text: "Jednoduchost a přímé vyjadřování", correct: false},
		 { text: "Kontrast pozemského a duchovního života, hyperbola a symbolismus, tematika smrti", correct: true},
		]
	},
	{
		question: "Jak byla smrt v baroku chápána?",
		answers: [
		 { text: "Jako hrůzná a vysvobozující", correct: true},
		 { text: "Jako radostná oslava", correct: false},
		 { text: "Jako neexistující", correct: false},
		 { text: "Jako obyčejná událost", correct: false},
		]
	},
	{
		question: "Kdy se narodil Jan Amos Komenský?",
		answers: [
		 { text: "1920", correct: false},
		 { text: "1480", correct: false},
		 { text: "1592", correct: true},
		 { text: "1700", correct: false},
		]
	},
	{
		question: "Kde se pravděpodobně narodil Komenský?",
		answers: [
		 { text: "Praha", correct: false},
		 { text: "Brno", correct: false},
		 { text: "Olomouc", correct: false},
		 { text: "Uherský Brod nebo Nivnice", correct: true},
		]
	},
	{
		question: "Proč musel Komenský v roce 1621 emigrovat?",
		answers: [
		 { text: "Kvůli španělské armádě", correct: true},
		 { text: "Kvůli hladomoru", correct: false},
		 { text: "Kvůli nemoci", correct: false},
		 { text: "Kvůli rodinným problémům", correct: false},
		]
	},
	{
		question: "Co se stalo Komenského ženě?",
		answers: [
		 { text: "Oženila se znovu", correct: false},
		 { text: "Odešla do ciziny", correct: false},
		 { text: "Zemřela na mor", correct: true},
		 { text: "Stala se učitelkou", correct: false},
		]
	},
	{
		question: "Kam se Komenský přestěhoval kvůli stíhání nekatolíků v roce 1628?",
		answers: [
		 { text: "Do polského Lešna", correct: true},
		 { text: "Do Francie", correct: false},
		 { text: "Do Švédska", correct: false},
		 { text: "Do Anglie", correct: false},
		]
	},
	{
		question: "Kde Komenský dostal pozvání vytvořit akademii věd?",
		answers: [
		 { text: "V Nizozemsku", correct: false},
		 { text: "V Anglii", correct: true},
		 { text: "V Německu", correct: false},
		 { text: "Ve Švédsku", correct: false},
		]
	},
	{
		question: "Kdy Komenský zemřel?",
		answers: [
		 { text: "1650", correct: false},
		 { text: "1660", correct: false},
		 { text: "1670", correct: true},
		 { text: "1680", correct: false},
		]
	},
	{
		question: "V jakých jazycích Komenský psal?",
		answers: [
		 { text: "Pouze česky", correct: false},
		 { text: "Česky, latinsky a německy", correct: true},
		 { text: "Anglicky a francouzsky", correct: false},
		 { text: "Latinsky a španělsky", correct: false},
		]
	},
	{
		question: "Jaké jsou nejdůležitější části Komenského tvorby?",
		answers: [
		 { text: "Romány a povídky", correct: false},
		 { text: "Politické eseje", correct: false},
		 { text: "Historické knihy a básně", correct: false},
		 { text: "Filozofické, teologické a pedagogické spisy", correct: true},
		]
	},
	{
		question: "Jaké je nejznámější pedagogické dílo Komenského?",
		answers: [
		 { text: "De rerum humanarum emendatione consultatio catholica", correct: false},
		 { text: "Labyrint světa a ráj srdce", correct: false},
		 { text: "Didactica magna", correct: true},
		 { text: "Orbis pictus", correct: false},
		]
	},
	{
		question: "Jaký vliv měly Komenského nápady na vzdělání?",
		answers: [
		 { text: "Byly revoluční a ovlivnily evropské myšlení", correct: true},
		 { text: "Byly ignorovány", correct: false},
		 { text: "Byly kritizovány jako zastaralé", correct: false},
		 { text: "Byly přijaty pouze v Čechách", correct: false},
		]
	},
	{
		question: "Co Komenský psal kromě odborných spisů?",
		answers: [
		 { text: "Politické projevy", correct: false},
		 { text: "Cestopisy", correct: false},
		 { text: "Sci-fi povídky", correct: false},
		 { text: "Duchovní písně a básně", correct: true},
		]
	},
	{
		question: "Literární směr – další autoři světoví",
		answers: [
		 { text: "Torquato Tasso, John Milton, Friedrich von Spee", correct: true},
		 { text: "Walter Scott, Charles Lamb, Alexandr Sergejevič Puškin", correct: false},
		 { text: "George Gordon Byron, Molière, Alexander Pope", correct: false},
		 { text: "Leonardo da Vinci, Jan Kochanowski, William Shakespeare", correct: false},
		]
	},
	{
		question: "Literární směr – další autoři čeští",
		answers: [
		 { text: "Bedřich Bridel, Bohuslav Balbín, Jan Kořínek", correct: true},
		 { text: "Josef Kajetán Tyl, Božena Němcová, Jan Neruda", correct: false},
		 { text: "Josef Jungmann, Karel Jaromír Erben, Ján Kolár", correct: false},
		 { text: "Josef Dobrovský, František Palacký, Jaroslav Hašek", correct: false},
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
