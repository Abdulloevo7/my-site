
/* ========== ЧАСТЬ 1: ДАННЫЕ И КОНСТАНТЫ ========== */

const proverbs = [
    {
        arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
        translit: "Fa'inna ma'a l-'usri yusra",
        translation: "Поистине, с тягостью — облегчение. (Коран, 94:5)"
    },
    {
        arabic: "مَنْ جَدَّ وَجَدَ",
        translit: "Man jadda wajada",
        translation: "Кто ищет — находит. (Кто проявляет усердие, тот достигнет цели)"
    },
    {
        arabic: "اَلزَّمَنُ أَحْكَمُ الْحَاكِمِينَ",
        translit: "Az-zamanu ahkamu al-hakimin",
        translation: "Время — лучший судья. (Время — самый мудрый из судей)"
    },
    {
        arabic: "خَيْرُ جَلِيسٍ فِي الزَّمَانِ كِتَابٌ",
        translit: "Khayru jalisin fi z-zamani kitab",
        translation: "Лучший собеседник во все времена — книга."
    },
    {
        arabic: "الصَّبْرُ مُرٌّ لَكِنَّ ثَمَرَهُ حُلْوٌ",
        translit: "As-sabru murr, lakinna thamarahu hulw",
        translation: "Терпение горько, но плод его сладок."
    },
    {
        arabic: "اَلْعَقْلُ السَّلِيمُ فِي الْجِسْمِ السَّلِيمِ",
        translit: "Al-'aqlu as-salim fi al-jismi as-salim",
        translation: "Здоровый дух в здоровом теле."
    },
    {
        arabic: "التَّكْرَارُ يُعَلِّمُ الْحِمَارَ",
        translit: "At-tikraru yu'allimu al-himar",
        translation: "Повторение — мать учения. (Дословно: Повторение научит даже осла)"
    }
];

const alphabet = [
    { letter: 'ا', name: 'Алиф', transcription: 'ā', examples: 'أُمٌّ (мать), أَبٌ (отец), آمِنٌ (безопасный)', videoUrl: 'https://youtu.be/tgRsZrY60RU?si=qt6tEz4n6vusXnbv' },
    { letter: 'ب', name: 'Ба', transcription: 'b', examples: 'بَيْتٌ (дом), بَابٌ (дверь), بَحْرٌ (море)', videoUrl: 'https://youtu.be/dbluDNbH7rs?si=0qQGf2L9-e_6wtJo' },
    { letter: 'ت', name: 'Та', transcription: 't', examples: 'تَاجٌ (корона), تَمْرٌ (финик), تِمْثَالٌ (статуя)', videoUrl: 'https://youtu.be/D0wDR6wn1H8?si=ttYWTJy8YNFeKTvP' },
    { letter: 'ث', name: 'Са', transcription: 'th', examples: 'ثَلْجٌ (снег), ثَلَاثَةٌ (три), ثَقَافَةٌ (культура)', videoUrl: 'https://youtu.be/NA2SMgAViRs?si=n_V3DYngNfqj2NTE' },
    { letter: 'ج', name: 'Джим', transcription: 'j', examples: 'جَبَلٌ (гора), جَمَلٌ (верблюд), جَمِيلٌ (красивый)', videoUrl: 'https://youtu.be/skTCpXgtXrI?si=979NxMzQyup592o9' },
    { letter: 'ح', name: 'Ха', transcription: 'ḥ', examples: 'حَجٌّ (хадж), حِمَارٌ (осёл), حُلْمٌ (сон)', videoUrl: 'https://youtu.be/7T0TyhOkHTE?si=ro5j8_KcjunEEGXt' },
    { letter: 'خ', name: 'Ха (гортанная)', transcription: 'kh', examples: 'خُبْزٌ (хлеб), خُطُوطٌ (линии), خَيْلٌ (конь)', videoUrl: 'https://youtu.be/VQP5nxUGtyU?si=a17xgxvq8qBnQAFe' },
    { letter: 'د', name: 'Дал', transcription: 'd', examples: 'دَرْسٌ (урок), دَمٌ (кровь), دَاخِلٌ (внутри)', videoUrl: 'https://youtu.be/zkLimlRAIZM?si=-IHlrSdoNt9aJNkq' },
    { letter: 'ذ', name: 'Заль', transcription: 'dh', examples: 'ذَهَبٌ (золото), ذِئْبٌ (волк), ذَاكِرَةٌ (память)', videoUrl: 'https://youtu.be/EnsQtbqU5JE?si=MFPD5NT2jX1UbY22' },
    { letter: 'ر', name: 'Ра', transcription: 'r', examples: 'رَمْلٌ (песок), رَجُلٌ (мужчина), رَحْمَةٌ (милость)', videoUrl: 'https://youtu.be/W35qxVgdkog?si=nrDyYv_l3St6FfXq' },
    { letter: 'ز', name: 'Зай', transcription: 'z', examples: 'زَهْرٌ (цветок), زَمَنٌ (время), زَيْتٌ (масло)', videoUrl: 'https://youtu.be/qpng43Fjdm8?si=-kzGGHbcnugHyW2L' },
    { letter: 'س', name: 'Син', transcription: 's', examples: 'سَمَاءٌ (небо), سَلَامٌ (мир), سَيْفٌ (меч)', videoUrl: 'https://youtu.be/DlUIMRBL5y4?si=98SL7ciA_3dN-yoD' },
    { letter: 'ش', name: 'Шин', transcription: 'sh', examples: 'شَمْسٌ (солнце), شَرَابٌ (напиток), شَاعِرٌ (поэт)', videoUrl: 'https://youtu.be/730Pa-es57I?si=-tURk2cixNEsw2EK' },
    { letter: 'ص', name: 'Сад', transcription: 'ṣ', examples: 'صَوْتٌ (звук), صَيْفٌ (лето), صَبْرٌ (терпение)', videoUrl: 'https://youtu.be/QmJYu-yq7nw?si=mpYK4pVtaqSB8o05' },
    { letter: 'ض', name: 'Дад', transcription: 'ḍ', examples: 'ضَرْبٌ (удар), ضَوْءٌ (свет), ضَحِكٌ (смех)', videoUrl: 'https://youtu.be/XryqnUv2kTQ?si=y46oCKe5SWBttd9V' },
    { letter: 'ط', name: 'Та (эмфатический)', transcription: 'ṭ', examples: 'طَاوِلَةٌ (стол), طَائِرٌ (птица), طَعَامٌ (пища)', videoUrl: 'https://youtu.be/nNG3ykY-82U?si=FJZXLSsabXTmdKY5' },
    { letter: 'ظ', name: 'За (эмфатический)', transcription: 'ẓ', examples: 'ظِلٌّ (тень), ظَهْرٌ (спина), ظَرْفٌ (конверт)', videoUrl: 'https://youtu.be/EkRv9P4dAVg?si=RNsuewKlwU4FhDiz' },
    { letter: 'ع', name: 'Айн', transcription: 'ʿ (ayn)', examples: 'عَيْنٌ (глаз), عَقْلٌ (ум), عَدْلٌ (справедливость)', videoUrl: 'https://youtu.be/1hGmiG8vi-0?si=qhvY0DppkDc49wZS' },
    { letter: 'غ', name: 'Гайн', transcription: 'gh', examples: 'غَارٌ (пещера), غَرْبٌ (запад), غَابَةٌ (лес)', videoUrl: 'https://youtu.be/2xt5AAY5D_g?si=i1U9ka3Gcq537ouY' },
    { letter: 'ف', name: 'Фа', transcription: 'f', examples: 'فَرَحٌ (радость), فَمٌ (рот), فَنِّيٌّ (художник)', videoUrl: 'https://youtu.be/fJjf4VXUREY?si=spKGhD8WHQIW_Nml' },
    { letter: 'ق', name: 'Каф (увулярный)', transcription: 'q', examples: 'قَلْبٌ (сердце), قَمَرٌ (луна), قُوَّةٌ (сила)', videoUrl: 'https://youtu.be/r8PVsCO5TsE?si=RQGTCSpY9SneNU5A' },
    { letter: 'ك', name: 'Каф (обычный)', transcription: 'k', examples: 'كِتَابٌ (книга), كَلَامٌ (слова), كُرْسِيٌّ (стул)', videoUrl: 'https://youtu.be/CGgCqOa1y1Y?si=Bohy7htlDUnSHGDx' },
    { letter: 'ل', name: 'Лам', transcription: 'l', examples: 'لَيْلٌ (ночь), لَوْنٌ (цвет), لِسَانٌ (язык)', videoUrl: 'https://youtu.be/gDMM2h_BrMA?si=ZuwCyIPo70jF1NAv' },
    { letter: 'م', name: 'Мим', transcription: 'm', examples: 'مَاءٌ (вода), مَدْرَسَةٌ (школа), مَلِكٌ (король)', videoUrl: 'https://youtu.be/rd1-CkcEjco?si=R_fcVBoLK3O8KJja' },
    { letter: 'ن', name: 'Нун', transcription: 'n', examples: 'نَارٌ (огонь), نَجْمٌ (звезда), نِيلٌ (Нил)', videoUrl: 'https://youtu.be/ELa5ebrThiw?si=WS7JgE4XjruxIwy8' },
    { letter: 'ه', name: 'Ха (придыхательный)', transcription: 'h', examples: 'هَدِيَّةٌ (подарок), هِنْدٌ (Индия), هَدَفٌ (цель)', videoUrl: 'https://youtu.be/7cMLivBh6sQ?si=qn61gi3M-rf1YRVK' },
    { letter: 'و', name: 'Вав', transcription: 'w', examples: 'وَجْهٌ (лицо), وَادٍ (долина), وَقْتٌ (время)', videoUrl: 'https://youtu.be/vaPLTBB-feI?si=7w0GyEzmmT2lZkPc' },
    { letter: 'ي', name: 'Йа', transcription: 'y', examples: 'يَدٌ (рука), يَوْمٌ (день), يَاقُوتٌ (рубин)', videoUrl: 'https://youtu.be/X4-XbMLXV7M?si=N6ECE5MifHOBYOY1' }
];
// СЛОВАРЬ ПО ТЕМАМ — ВСЕ СЛОВА С ОГЛАСОВКАМИ
const dictionary = {
    greetings: {
        title: 'Приветствия',
        words: [
            { ar: 'السَّلَامُ عَلَيْكُمْ', ru: 'Мир вам' },
            { ar: 'وَعَلَيْكُمُ السَّلَامُ', ru: 'И вам мир' },
            { ar: 'مَرْحَبًا', ru: 'Привет' },
            { ar: 'كَيْفَ حَالُكَ؟', ru: 'Как дела' },
            { ar: 'أَنَا بِخَيْرٍ', ru: 'Я в порядке' },
            { ar: 'اسْمِي', ru: 'Мое имя' },
            { ar: 'تَشَرَّفْنَا', ru: 'Рады познакомиться' },
            { ar: 'صَبَاحُ الْخَيْرِ', ru: 'Доброе утро' }
        ]
    },
    numbers: {
        title: 'Числа',
        words: [
            { ar: 'صِفْرٌ', ru: '0' },
            { ar: 'وَاحِدٌ', ru: '1' },
            { ar: 'اثْنَانِ', ru: '2' },
            { ar: 'ثَلَاثَةٌ', ru: '3' },
            { ar: 'أَرْبَعَةٌ', ru: '4' },
            { ar: 'خَمْسَةٌ', ru: '5' },
            { ar: 'سِتَّةٌ', ru: '6' },
            { ar: 'سَبْعَةٌ', ru: '7' },
            { ar: 'ثَمَانِيَةٌ', ru: '8' },
            { ar: 'تِسْعَةٌ', ru: '9' },
            { ar: 'عَشَرَةٌ', ru: '10' }
        ]
    },
    family: {
        title: 'Семья',
        words: [
            { ar: 'أُمٌّ', ru: 'Мать' },
            { ar: 'أَبٌ', ru: 'Отец' },
            { ar: 'أَخٌ', ru: 'Брат' },
            { ar: 'أُخْتٌ', ru: 'Сестра' },
            { ar: 'عَمٌّ', ru: 'Дядя (по отцу)' },
            { ar: 'خَالٌ', ru: 'Дядя (по матери)' },
            { ar: 'جَدٌّ', ru: 'Дедушка' },
            { ar: 'جَدَّةٌ', ru: 'Бабушка' }
        ]
    },
    colors: {
        title: 'Цвета',
        words: [
            { ar: 'أَحْمَرُ', ru: 'Красный' },
            { ar: 'أَزْرَقُ', ru: 'Синий' },
            { ar: 'أَخْضَرُ', ru: 'Зеленый' },
            { ar: 'أَصْفَرُ', ru: 'Желтый' },
            { ar: 'أَسْوَدُ', ru: 'Черный' },
            { ar: 'أَبْيَضُ', ru: 'Белый' },
            { ar: 'بُرْتُقَالِيٌّ', ru: 'Оранжевый' },
            { ar: 'بَنَفْسَجِيٌّ', ru: 'Фиолетовый' }
        ]
    },
    food: {
        title: 'Еда',
        words: [
            { ar: 'خُبْزٌ', ru: 'Хлеб' },
            { ar: 'لَحْمٌ', ru: 'Мясо' },
            { ar: 'سَمَكٌ', ru: 'Рыба' },
            { ar: 'أَرُزٌّ', ru: 'Рис' },
            { ar: 'تَمْرٌ', ru: 'Финик' },
            { ar: 'فَاكِهَةٌ', ru: 'Фрукт' },
            { ar: 'مَاءٌ', ru: 'Вода' },
            { ar: 'قَهْوَةٌ', ru: 'Кофе' }
        ]
    }
};

// СОСТОЯНИЕ ПРИЛОЖЕНИЯ
let appState = {
    theme: localStorage.getItem('theme') || 'light',
    learned: JSON.parse(localStorage.getItem('learned')) || [],
    learnedWords: JSON.parse(localStorage.getItem('learnedWords')) || [],
    testResults: JSON.parse(localStorage.getItem('testResults')) || []
};

/* ========== ЧАСТЬ 2: ИНИЦИАЛИЗАЦИЯ ========== */

document.addEventListener('DOMContentLoaded', function() {
    applyTheme();
    renderAlphabet();
    renderDictionary();
    updateStats();
    updateProgress();
    setupNavigation();
});

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageName = this.getAttribute('data-page');
            showPage(pageName);
            updateNav(pageName);
        });
    });
}

/* ========== ЧАСТЬ 3: НАВИГАЦИЯ ========== */

function showPage(pageName) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    const selectedPage = document.getElementById(pageName);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
}

function updateNav(pageName) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageName) {
            link.classList.add('active');
        }
    });
}

/* ========== ЧАСТЬ 4: ТЕМА ОФОРМЛЕНИЯ ========== */

function toggleTheme() {
    appState.theme = appState.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', appState.theme);
    applyTheme();
}

function applyTheme() {
    if (appState.theme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// ========== СЛУЧАЙНАЯ ПОСЛОВИЦА ==========
function displayRandomProverb() {
    const arabicEl = document.getElementById('proverbArabic');
    const translitEl = document.getElementById('proverbTranslit');
    const translationEl = document.getElementById('proverbTranslation');

    if (!arabicEl || !translitEl || !translationEl) return;

    const randomIndex = Math.floor(Math.random() * proverbs.length);
    const proverb = proverbs[randomIndex];

    arabicEl.textContent = proverb.arabic;
    translitEl.textContent = proverb.translit;
    translationEl.textContent = proverb.translation;
}

document.addEventListener('DOMContentLoaded', displayRandomProverb);

/* ========== ЧАСТЬ 5: АЛФАВИТ ========== */

function renderAlphabet() {
    const grid = document.getElementById('alphabetGrid');
    grid.innerHTML = '';
    
    alphabet.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'letter-card';
        if (appState.learned.includes(index)) {
            card.classList.add('learned');
        }
        card.textContent = item.letter;
        card.onclick = () => openLetterModal(index);
        grid.appendChild(card);
    });
}

function openLetterModal(index) {
    const item = alphabet[index];
    document.getElementById('modalLetter').textContent = item.letter;
    document.getElementById('modalName').textContent = item.name;
    document.getElementById('modalTranscription').textContent = item.transcription;
    
    const examplesList = document.getElementById('modalExamples');
    examplesList.innerHTML = '';
    item.examples.split(',').forEach(example => {
        const li = document.createElement('li');
        li.textContent = example.trim();
        examplesList.appendChild(li);
    });
    
    const videoSection = document.getElementById('videoSection');
    const videoLink = document.getElementById('videoLink');
    if (item.videoUrl) {
        videoLink.href = item.videoUrl;
        videoSection.style.display = 'block';
    } else {
        videoSection.style.display = 'none';
    }
    
    document.getElementById('letterModal').classList.add('active');
    
    if (!appState.learned.includes(index)) {
        appState.learned.push(index);
        localStorage.setItem('learned', JSON.stringify(appState.learned));
        renderAlphabet();
        updateStats();
        updateProgress();
    }
}

function closeModal() {
    document.getElementById('letterModal').classList.remove('active');
}

// ========== ЧАСТЬ 6: СЛОВАРЬ ==========

function renderDictionary() {
    const container = document.getElementById('dictionaryThemes');
    container.innerHTML = '';
    
    for (const [key, theme] of Object.entries(dictionary)) {
        const card = document.createElement('div');
        card.className = 'theme-card';
        card.innerHTML = '<h3>' + theme.title + '</h3><p>' + theme.words.length + ' слов</p>';
        card.onclick = () => showWords(key);
        container.appendChild(card);
    }
}

function showWords(themeKey) {
    const theme = dictionary[themeKey];
    document.getElementById('dictionaryThemes').style.display = 'none';
    document.getElementById('wordsList').style.display = 'block';
    
    const container = document.getElementById('wordsContainer');
    container.innerHTML = '<h3>' + theme.title + '</h3>';
    
    theme.words.forEach((word, index) => {
        const key = themeKey + '_' + index;
        const isLearned = appState.learnedWords.includes(key);
        
        const card = document.createElement('div');
        card.className = 'word-card';
        
        const button = document.createElement('button');
        button.className = 'mark-btn';
        if (isLearned) {
            button.classList.add('learned');
            button.disabled = true;
            button.textContent = '✓ Выучено';
        } else {
            button.textContent = '✓';
            button.onclick = (function(tKey, wIndex, btn) {
                return function() { markWordLearned(tKey, wIndex, btn); };
            })(themeKey, index, button);
        }
        
        card.innerHTML = '<div><div class="word-ar">' + word.ar + '</div><div class="word-ru">' + word.ru + '</div></div>';
        card.appendChild(button);
        container.appendChild(card);
    });
}

function markWordLearned(themeKey, wordIndex, buttonElement) {
    const key = themeKey + '_' + wordIndex;
    if (!appState.learnedWords.includes(key)) {
        appState.learnedWords.push(key);
        localStorage.setItem('learnedWords', JSON.stringify(appState.learnedWords));
        buttonElement.textContent = '✓ Выучено';
        buttonElement.classList.add('learned');
        buttonElement.disabled = true;
        updateStats();
        updateProgress();
    }
}

function backToDictionary() {
    document.getElementById('dictionaryThemes').style.display = 'grid';
    document.getElementById('wordsList').style.display = 'none';
}

/* ========== ЧАСТЬ 7: ТЕСТЫ ========== */

function startTest(type) {
    document.getElementById('testSelector').style.display = 'none';
    document.getElementById('testContainer').style.display = 'block';
    
    const content = document.getElementById('testContent');
    content.innerHTML = '';
    
    let questions = type === 'alphabet' ? generateAlphabetTest() : generateVocabularyTest();
    
    let currentQuestion = 0;
    let score = 0;
    
    function showQuestion() {
        if (currentQuestion >= questions.length) {
            content.innerHTML = '<div style="text-align: center; padding: 2rem;"><h3>Тест завершен</h3><p style="font-size: 2rem; color: var(--accent);">' + score + ' из ' + questions.length + '</p><button class="back-btn" onclick="backToTests()" style="margin-top: 1rem;">Назад</button></div>';
            appState.testResults.push({ type: type, score: score, total: questions.length, date: new Date().toISOString() });
            localStorage.setItem('testResults', JSON.stringify(appState.testResults));
            updateStats();
            return;
        }
        
        const question = questions[currentQuestion];
        content.innerHTML = '<div class="test-content"><h4 style="font-size: 1.8rem;">Вопрос ' + (currentQuestion + 1) + ' из ' + questions.length + '</h4><p style="margin-bottom: 1.5rem; font-size: 1.5rem;">' + question.question + '</p><div id="options"></div><button class="submit-btn" onclick="nextQuestion()">Далее</button></div>';
        
        const optionsDiv = document.getElementById('options');
        question.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'test-option';
            btn.textContent = option;
            btn.onclick = () => {
                document.querySelectorAll('.test-option').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                question.selected = index;
            };
            optionsDiv.appendChild(btn);
        });
    }
    
    window.nextQuestion = function() {
        const question = questions[currentQuestion];
        if (question.selected === question.correct) score++;
        currentQuestion++;
        showQuestion();
    };
    
    showQuestion();
}

function generateAlphabetTest() {
    const questions = [];
    for (let i = 0; i < 5; i++) {
        const correct = Math.floor(Math.random() * alphabet.length);
        const item = alphabet[correct];
        const options = [item.name];
        while (options.length < 4) {
            const random = alphabet[Math.floor(Math.random() * alphabet.length)];
            if (!options.includes(random.name)) options.push(random.name);
        }
        const shuffled = options.sort(() => Math.random() - 0.5);
        questions.push({
            question: 'Как называется буква: <span class="arabic-in-tests">' + item.letter + '</span>?',
            options: shuffled,
            correct: shuffled.indexOf(item.name),
            selected: null
        });
    }
    return questions;
}

function generateVocabularyTest() {
    const questions = [];
    const allWords = [];
    for (const theme of Object.values(dictionary)) {
        allWords.push(...theme.words);
    }
    for (let i = 0; i < 5 && i < allWords.length; i++) {
        const correct = Math.floor(Math.random() * allWords.length);
        const word = allWords[correct];
        const options = [word.ru];
        while (options.length < 4) {
            const random = allWords[Math.floor(Math.random() * allWords.length)];
            if (!options.includes(random.ru)) options.push(random.ru);
        }
        const shuffled = options.sort(() => Math.random() - 0.5);
        questions.push({
            question: 'Что означает: <span class="arabic-in-tests">' + word.ar + '</span>?',
            options: shuffled,
            correct: shuffled.indexOf(word.ru),
            selected: null
        });
    }
    return questions;
}

function backToTests() {
    document.getElementById('testSelector').style.display = 'grid';
    document.getElementById('testContainer').style.display = 'none';
}

/* ========== ЧАСТЬ 8: СТАТИСТИКА И ПРОГРЕСС ========== */

function updateStats() {
    document.getElementById('lettersCount').textContent = appState.learned.length;
    document.getElementById('wordsCount').textContent = appState.learnedWords.length;
    document.getElementById('testsCount').textContent = appState.testResults.length;
}

function updateProgress() {
    const letterPercent = Math.round((appState.learned.length / alphabet.length) * 100);
    document.getElementById('letterProgress').style.width = letterPercent + '%';
    document.getElementById('letterProgressText').textContent = appState.learned.length;
    
    const wordPercent = Math.round((appState.learnedWords.length / 120) * 100);
    document.getElementById('wordProgress').style.width = wordPercent + '%';
    document.getElementById('wordProgressText').textContent = appState.learnedWords.length;
    
    const learnedDiv = document.getElementById('learnedLetters');
    learnedDiv.innerHTML = '';
    appState.learned.forEach(index => {
        const badge = document.createElement('div');
        badge.className = 'letter-badge';
        badge.textContent = alphabet[index].letter + ' ' + alphabet[index].name;
        learnedDiv.appendChild(badge);
    });
    if (learnedDiv.children.length === 0) {
        learnedDiv.innerHTML = '<p style="color: var(--text-light);">Еще не выучено</p>';
    }
}

/* ========== ЧАСТЬ 9: МОДАЛ И СОБЫТИЯ ========== */

document.addEventListener('click', function(event) {
    const modal = document.getElementById('letterModal');
    if (event.target === modal) {
        modal.classList.remove('active');
    }
});

/* ========== КОНЕЦ СКРИПТА ========== */