// переключение вкладок SPA
const tab_btn=document.querySelectorAll(".tab-btn")
const views=document.querySelectorAll(".view")

tab_btn.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        tab_btn.forEach(function(b){
            b.classList.remove('active');
        });
        views.forEach(function(v){
            v.classList.remove('active')
        });
        this.classList.add('active');
        let targetID=this.getAttribute('data-target')

        let targetView=document.getElementById(targetID);
        if(targetView){
            targetView.classList.add('active');
        }

        if (targetID === 'view-collection') {
            renderCollection(); 
        }
    });
});


// генерация календаря (Heatmap)
function generateHeatmap(){
    const grid = document.getElementById('heatmap-grid')
    grid.innerHTML='';

    const dailyPages = JSON.parse(localStorage.getItem('dailyPages')) || {};
    const dailyBooks = JSON.parse(localStorage.getItem('dailyBooks')) || {};
    const finishedBooks = JSON.parse(localStorage.getItem('finishedBooks')) || {};

    for (let i=0; i<365; i++){
        const currentYear=new Date().getFullYear();
        const startDate=new Date(currentYear, 0,1);
        const date=new Date(startDate)
        date.setDate(startDate.getDate()+i)
        
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const dayOfMonth = String(date.getDate()).padStart(2, '0');
        const dateString = `${year}-${month}-${dayOfMonth}`;
        
        const pages=dailyPages[dateString] || 0;
        const booksForDay = dailyBooks[dateString] || [];
        const finishedForDay = finishedBooks[dateString] || [];

        const day=document.createElement('div')
        day.classList.add('heatmap-day')

        if (pages>0 && pages <=10){
            day.classList.add('level-1');
        } else if (pages>10 && pages<=30){
            day.classList.add('level-2');
        } else if (pages>30 && pages <=60){
            day.classList.add('level-3');
        } else if (pages >60){
            day.classList.add('level-4');
        } else {
            day.classList.add('level-0')
        }

        let tooltipText = `${dateString}: ${pages} стр.`;

        //инфо-окно
    day.addEventListener('click', function() {
        const dayInfoPanel = document.getElementById("day-info-panel"); 
    
    // есть ли хоть какая-то информация за этот день
    if (pages > 0 || booksForDay.length > 0 || finishedForDay.length > 0) {
        // Если информация есть - выводим 
        dayInfoPanel.innerHTML = `
            <h3>${dateString}</h3>
            <p>Прочитано страниц: <strong>${pages}</strong></p>
            <p>Книги: <strong>${booksForDay.length > 0 ? booksForDay.join(', ') : 'нет'}</strong></p>
            <p>Дочитано: <strong>${finishedForDay.length > 0 ? finishedForDay.join(', ') : 'нет'}</strong></p>
        `;
        dayInfoPanel.classList.add('active'); 
    } else {
        // Если ничего нет 
        dayInfoPanel.innerHTML = `<h3>${dateString}</h3><p class="no-info">В этот день ничего не читалось.</p>`;
        dayInfoPanel.classList.add('active');
    }
});
        
        if (booksForDay.length > 0) {
            tooltipText += ` (${booksForDay.join(', ')})`;
        }
        if (finishedForDay.length > 0) {
            tooltipText += ` | Дочитано: ${finishedForDay.join(', ')}`;
        }

        day.title = tooltipText;
        grid.appendChild(day);
    }
}


// обработчик формы добавления прогресса
const addForm = document.getElementById('add-progress-form');
const bookSelect = document.getElementById('book-select');
const pagesInput = document.getElementById('pages-input');

if (addForm) {
    addForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const bookId = bookSelect.value;
        const pages = parseInt(pagesInput.value);

        if (!bookId || isNaN(pages) || pages <= 0) {
            alert('Выберите книгу и введите корректное количество страниц!');
            return;
        }
        
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const todayStr = `${year}-${month}-${day}`;
        
        let dailyPages = JSON.parse(localStorage.getItem('dailyPages')) || {};
        
        if (dailyPages[todayStr]) {
            dailyPages[todayStr] += pages;
        } else {
            dailyPages[todayStr] = pages;
        }
        localStorage.setItem('dailyPages', JSON.stringify(dailyPages));

        const selectedOption = bookSelect.options[bookSelect.selectedIndex];
        const bookTitle = bookSelect.value ? selectedOption.textContent : '';

        if (bookTitle) {
            let dailyBooks = JSON.parse(localStorage.getItem('dailyBooks')) || {};
            if (!dailyBooks[todayStr]) {
                dailyBooks[todayStr] = [];
            }
            if (!dailyBooks[todayStr].includes(bookTitle)) {
                dailyBooks[todayStr].push(bookTitle);
            }
            localStorage.setItem('dailyBooks', JSON.stringify(dailyBooks));
        }
        
        let totalPages = parseInt(localStorage.getItem('totalPagesRead')) || 0;
        totalPages += pages;
        localStorage.setItem('totalPagesRead', totalPages);

        pagesInput.value = '';
        generateHeatmap();
        updateStats();

// логика выдачи карточек персонажей, Gacha (шанс 40% при вводе страниц)
const gachaChance = Math.floor(Math.random() * 100);
console.log("Шанс выпадения:", gachaChance); // ВРЕМЕННО

let userCollectionLocal = JSON.parse(localStorage.getItem('userCollection')) || [];

//выдача карточек общих достижений
achievementCards.forEach(function(achievement) {

    if (totalPages >= achievement.pagesRequired && !userCollectionLocal.includes(achievement.id)) {
        userCollectionLocal.push(achievement.id);
        localStorage.setItem('userCollection', JSON.stringify(userCollectionLocal));
        
        // ВРЕМЕННО: 
        console.log("Выдано достижение:", achievement.title);
        
        // showGachaModal(achievement);
    }
});

if (gachaChance <= 40) {
    const characterMatch = characterCards.filter(function(char){
        return char.bookId == bookId;
    });
    console.log("Персонажи для этой книги:", characterMatch); // ВРЕМЕННО

    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("Случайное число для редкости:", randomNumber); // ВРЕМЕННО

    let filteredCards = [];
    
    if (randomNumber <= 60){
        filteredCards = characterMatch.filter(function(char) { return char.rarity === "common"; });
    } else if (randomNumber > 60 && randomNumber <= 90) {
        filteredCards = characterMatch.filter(function(char) { return char.rarity === "epic"; });
    } else if (randomNumber > 90){
        filteredCards = characterMatch.filter(function(char) { return char.rarity === "legendary"; });
    }

    if (filteredCards.length === 0) {
        filteredCards = characterMatch;
    }
    
    console.log("Карточки после фильтрации:", filteredCards); // ВРЕМЕННО

    if (filteredCards.length > 0) {
        const randomCard = filteredCards[Math.floor(Math.random() * filteredCards.length)];
        console.log("Выпала карточка:", randomCard); // ВРЕМЕННО
        
        if (!userCollectionLocal.includes(randomCard.id)) {
            userCollectionLocal.push(randomCard.id);
            localStorage.setItem('userCollection', JSON.stringify(userCollectionLocal));
            // showGachaModal(randomCard);
        } else {
            console.log("Эта карточка уже есть в коллекции!"); // ВРЕМЕННО
        }
    }
}

        alert(`Записано ${pages} страниц!`);
    });
}



function populateBookSelects() {
    if (!bookSelect) return;
    bookSelect.innerHTML = '<option value="">-- Выберите книгу --</option>';
    const sortedBooks = [...booksData].sort(function(a, b) {
        return a.title.localeCompare(b.title, 'ru');
     });
    sortedBooks.forEach(function(book) {
        const option = document.createElement('option');
        option.value = book.id; 
        option.textContent = book.title; 
        bookSelect.appendChild(option);
    });
}


// функция для второго списка (Дочитал книгу)
const finishForm = document.getElementById('finish-book-form');
const finishBookSelect = document.getElementById('finish-book-select');

function populateFinishSelect(){
    if (!finishBookSelect) return;
    finishBookSelect.innerHTML=`<option value="">-- --</option>`;
    const sortedBooks = [...booksData].sort(function(a, b) {
        return a.title.localeCompare(b.title, 'ru');
     });
    sortedBooks.forEach(function(book){
        const option = document.createElement('option')
        option.value=book.id;
        option.textContent=book.title;
        finishBookSelect.appendChild(option)
    })
}


// функция для вывода статистики
function updateStats() {
    const pagesDisplay = document.getElementById('total-pages-display');
    const countDisplay = document.getElementById('collection-count');
    const totalPages = parseInt(localStorage.getItem('totalPagesRead')) || 0;
    const userCollection = JSON.parse(localStorage.getItem('userCollection')) || [];
    if (pagesDisplay) pagesDisplay.textContent = totalPages;
    if (countDisplay) countDisplay.textContent = userCollection.length;

}


    // рендерим карточки
    function renderCollection() {
        const collectionGrid = document.getElementById('collection-grid');
        if (!collectionGrid) return;
        
        collectionGrid.innerHTML = '';
        const allCards = [...characterCards, ...bookCompletionCards, ...achievementCards];
        const userCollection = JSON.parse(localStorage.getItem('userCollection')) || [];

        allCards.forEach(function(card) {
            const isUnlocked = userCollection.includes(card.id);
            const cardRarity = card.rarity || 'achievement';
            
            const cardDiv = document.createElement('div');
            cardDiv.className = `card-item ${cardRarity} ${isUnlocked ? '' : 'locked'}`;
            
            cardDiv.innerHTML = `
                <div class="card-img">${isUnlocked ? '📖' : '❓'}</div>
                <h4>${isUnlocked ? (card.name || card.title) : '???'}</h4>
                <p class="rarity-label">${isUnlocked ? cardRarity : 'Секрет'}</p>
            `;
        
        collectionGrid.appendChild(cardDiv);
    });
}

// обработчик формы дочитывания книги 
if (finishForm) {
    finishForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const bookId = finishBookSelect.value;

        if (!bookId) {
            alert('Выберите книгу!');
            return;
        }

        const selectedOption = finishBookSelect.options[finishBookSelect.selectedIndex];
        const bookTitle = selectedOption.textContent;

        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const todayStr = `${year}-${month}-${day}`;

        let finishedBooks = JSON.parse(localStorage.getItem('finishedBooks')) || {};

        if (!finishedBooks[todayStr]) {
            finishedBooks[todayStr] = [];
        }
        if (!finishedBooks[todayStr].includes(bookTitle)) {
            finishedBooks[todayStr].push(bookTitle);
        }

        localStorage.setItem('finishedBooks', JSON.stringify(finishedBooks));

        // Выдача карточки за прочтение
        const completionCard = bookCompletionCards.find(function(card) {
            return card.bookId == bookId;
        });

        let userCollectionLocal = JSON.parse(localStorage.getItem('userCollection')) || [];

        if (completionCard && !userCollectionLocal.includes(completionCard.id)) {
            userCollectionLocal.push(completionCard.id);
            localStorage.setItem('userCollection', JSON.stringify(userCollectionLocal));
            
            // ВРЕМЕННО: 
            console.log("Выдана карточка за прочтение:", completionCard);
            
            // showGachaModal(completionCard); 
        } else if (completionCard) {
            console.log("Эта карточка уже есть в коллекции:", completionCard.title);
        }

        generateHeatmap();
        
        alert(`Книга «${bookTitle}» отмечена как прочитанная!`);
    });
}


// смена темы
const themeToggleBtn = document.getElementById('theme-toggle');
const hellThemeBtn = document.getElementById('hell-theme-btn');

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
} else if (savedTheme === 'hell') {
    document.body.classList.add('hell-theme');
    if (hellThemeBtn) hellThemeBtn.classList.add('active');
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function() {
        document.body.classList.remove('hell-theme');
        if (hellThemeBtn) hellThemeBtn.classList.remove('active');
        const isLight = document.body.classList.toggle('light-theme');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
}

if (hellThemeBtn) {
    hellThemeBtn.addEventListener('click', function() {
        document.body.classList.remove('light-theme');
        const isHell = document.body.classList.toggle('hell-theme');
        hellThemeBtn.classList.toggle('active', isHell);
        localStorage.setItem('theme', isHell ? 'hell' : 'dark');
    });
}





// Запуск при загрузке
updateStats();
populateFinishSelect();
populateBookSelects();
generateHeatmap();
renderCollection();