
// переключение вкладов SPA
const tab_btn=document.querySelectorAll(".tab-btn")
const views=document.querySelectorAll(".view")

tab_btn.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        // Убираем класс active у ВСЕХ кнопок (используй цикл forEach)
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
        
    });
});


//генерация календаря (Heatmap)

function generateHeatmap(){
    const grid = document.getElementById('heatmap-grid')
    // очищаем контейнер, чтобы при повторном вызове не дублировались квадратики-дни
    grid.innerHTML='';

    // достаём данные из памяти браузера
    const dailyPages = JSON.parse(localStorage.getItem('dailyPages')) || {};

    // генерим этот кважратик 365 раз
    for (let i=0; i<365; i++){
        // ищем текущий год, находим 1 января этого года и к этому 1 января прибавляем i дней, чтоыб у каждого квадрата была своя уникальная дата 
        const currentYear=new Date().getFullYear();

        const startDate=new Date(currentYear, 0,1);

        const date=new Date(startDate)
        date.setDate(startDate.getDate()+i)
        // Превращаем дату в строку формата "2026-11-14"
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const dayOfMonth = String(date.getDate()).padStart(2, '0');
        const dateString = `${year}-${month}-${dayOfMonth}`;
        // Ищем, сколько страниц прочитано в этот день (если нет, то 0)
        const pages=dailyPages[dateString] || 0;

        const day=document.createElement('div')
        day.classList.add('heatmap-day')

        // В зависимости от количества страниц добавляется уровень цвета
        if (pages>0 && pages <=10){
            day.classList.add('level-1');
        } else if (pages>10 && pages<=30){
            day.classList.add('level-2');
        } else if (pages>30 && pages <=60){
            day.classList.add('level-3');
        } else if (pages >60){
            day.classList.add('level-4');
        } else {
            // если 0 страниц то серый
            day.classList.add('level-0')
        }


        //подсказка при навдении на квадратик
        day.title=`День ${i+1}`;
        grid.appendChild(day);
    }
}




// обработчик формы
// Находим элементы
const addForm = document.getElementById('add-progress-form');
const bookSelect = document.getElementById('book-select');
const pagesInput = document.getElementById('pages-input');

// Вешаем событие submit на форму
if (addForm) {
    addForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        //  Получение данных
        const bookId = bookSelect.value;
        const pages = parseInt(pagesInput.value);
        
         // получаем дату
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const todayStr = `${year}-${month}-${day}`;
        
        // Достаем старые данные из LocalStorage (или создаем пустой объект)
        let dailyPages = JSON.parse(localStorage.getItem('dailyPages')) || {};
        
        // Добавляем страницы к сегодняшнему дню
        if (dailyPages[todayStr]) {
            dailyPages[todayStr] += pages;
        } else {
            dailyPages[todayStr] = pages;
        }
        
        // Сохранение обратно в LocalStorage
        localStorage.setItem('dailyPages', JSON.stringify(dailyPages));
        
        // Очищение поле ввода и перерисовывание календаря
        pagesInput.value = '';
        generateHeatmap();
        
        alert(`Записано ${pages} страниц!`);
    });
}


function populateBookSelects() {
     // Если списка нет, выходим
    if (!bookSelect) return;
    bookSelect.innerHTML = '<option value="">-- Выберите книгу --</option>';
    
    // Используется глобальная переменная booksData из data.js
    booksData.forEach(function(book) {
        const option = document.createElement('option');
        option.value = book.id; // ID книги
        option.textContent = book.title; // Название книги
        bookSelect.appendChild(option);
    });
}

populateBookSelects();

generateHeatmap();

