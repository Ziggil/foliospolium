
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


