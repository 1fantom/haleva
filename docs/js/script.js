        // Функции для открытия/закрытия меню
        function openNav() {
            document.getElementById("mySidebar").style.width = "300px";
            document.querySelector(".container").style.marginLeft = "300px";
        }

        function closeNav() {
            document.getElementById("mySidebar").style.width = "0";
            document.querySelector(".container").style.marginLeft = "0";
        }

        // Закрытие меню при клике вне его области
        document.addEventListener('click', function(event) {
            const sidebar = document.getElementById('mySidebar');
            const openBtn = document.querySelector('.open-btn');
            
            if (event.target !== openBtn && !sidebar.contains(event.target)) {
                closeNav();
            }
        });
// Обработчики для переключения табов
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Удаляем активный класс у всех кнопок
            tabButtons.forEach(btn => btn.classList.remove('active'));

            // Добавляем активный класс текущей кнопке
            this.classList.add('active');

            // Скрываем все табы
            const tabPanes = document.querySelectorAll('.tab-pane');
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Показываем соответствующий таб
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Можно добавить сохранение выбранного таба в localStorage
    // для запоминания состояния при перезагрузке страницы
});

document.addEventListener('DOMContentLoaded', function() {
    
    // Переключение вкладок
    const tabButtons = document.querySelectorAll('.tab-button');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const tabPanes = document.querySelectorAll('.tab-pane');
            tabPanes.forEach(pane => pane.classList.remove('active'));

            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Переключение практического задания
    const practiceToggle = document.querySelector('.practice-toggle');
    if (practiceToggle) {
        practiceToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            const taskCard = this.nextElementSibling;
            if (taskCard.style.display === 'none') {
                taskCard.style.display = 'block';
            } else {
                taskCard.style.display = 'none';
            }
        });
    }
    window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\(', '\)']],
    displayMath: [['\[', '\]'], ['$$', '$$']]
  },
  svg: {
    fontCache: 'global'
  }
};

});
 MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['\\[', '\\]'], ['$$', '$$']]
    },
    svg: {
      fontCache: 'global'
    }
  };
  
  /*проверят тест */
  document.addEventListener('DOMContentLoaded', function () {
      const tabButtons = document.querySelectorAll('.tab-button');
      const tabPanes = document.querySelectorAll('.tab-pane');

      tabButtons.forEach(button => {
        button.addEventListener('click', function () {
          tabButtons.forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');

          const tabId = this.getAttribute('data-tab');
          tabPanes.forEach(pane => pane.classList.remove('active'));
          document.getElementById(tabId).classList.add('active');
        });
      });

      const checkBtn = document.getElementById('check-quiz');
      const resultText = document.getElementById('quiz-result');

      if (checkBtn) {
        checkBtn.addEventListener('click', function () {
          let score = 0;
          const total = 3;
          for (let i = 1; i <= total; i++) {
            const answer = document.querySelector('input[name="q' + i + '"]:checked');
            if (answer && answer.value === "1") {
              score++;
            }
          }
          resultText.textContent = `Вы набрали ${score} из ${total} правильных ответов.`;
         
        });
      }
    });
    