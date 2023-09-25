const data = [
  {
    id: 'simple-store',
    type: 'layouts',
    title: 'Simple store',
    link: 'https://voverg.github.io/layout-projects/simple-store/index.html',
    sourceLink: 'https://github.com/voverg/layout-projects/tree/main/simple-store',
    img: 'img/projects/simple-store.png',
    stack: 'Html, Css, JavaScript',
    description: 'Вёрстка интернет-магазина',
    longDescription: 'Реализация frontend части интернет-магазина. В приложении можно сортировать товары по категориям, цене, брендам. Осуществлять поиск по тексту описания товаров. Добавлять и удалять товар из корзины. Просматривать информацию о выбранных товарах.',
  },
  {
    id: 'mortgage',
    type: 'layouts',
    title: 'Ипотечный калькулятор',
    link: 'https://voverg.github.io/calculators/mortgage/index.html',
    sourceLink: 'https://github.com/voverg/calculators/tree/main/mortgage',
    img: 'img/projects/mortgage.png',
    stack: 'Html, Css, JavaScript',
    description: 'Калькулятор расчёта стоимости ипотеки',
    longDescription: 'Введите стоимость недвижимости, первоначальный взнос и срок кредита. Выберите процентнтуню ставку и калькулятор рассчитает сумму кредита, процент банка, общий и ежемесячный платёж.',
  },
  // {
  //   id: 'hotel',
  //   type: 'layouts',
  //   title: 'Hotel landing',
  //   link: 'https://voverg.github.io/hotel-landing/',
  //   sourceLink: 'https://github.com/voverg/hotel-landing',
  //   img: 'img/projects/hotel-landing.png',
  //   stack: 'Html, Css (floats)',
  //   description: 'Простой лендинг отеля.',
  //   longDescription: 'Свёрстан на float просто для тренировки и понимания, как работает блочная модель в Css.',
  // },
  {
    id: 'zhk',
    type: 'layouts',
    title: 'Жилищный комплекс',
    link: 'https://voverg.github.io/layout-projects/zhk',
    sourceLink: 'https://github.com/voverg/layout-projects/tree/main/zhk',
    img: 'img/projects/zhk.png',
    stack: 'Html, Css, JavaScript (ООП)',
    description: 'Жилищный комплекс с возможностью просмотра свободных квартир на выбранном этаже',
    longDescription: 'Вёрстка жилищного комплекса. Выберите нужный этаж и кликните по нему, чтобы посмотреть наличие свободных квартир.',
  },
  {
    id: '3d-landing',
    type: 'layouts',
    title: '3D Landing',
    link: 'https://voverg.github.io/layout-projects/3d-landing/',
    sourceLink: 'https://github.com/voverg/layout-projects/tree/main/3d-landing',
    img: 'img/projects/3d-landing.png',
    stack: 'Html, Css, JavaScript',
    description: 'Лендинг с красивым 3D-эффектом при скролле',
    longDescription: 'В качестве фреймов в лендинг можно размещать фото, видео, ссылки и другую информацию. Также подойдёт для создания красивой презентации с 3D-эффектом.',
  },
  // Applications
  {
    id: 'frontend-quiz',
    type: 'jsapps',
    title: 'Frontend quiz',
    link: 'https://voverg.github.io/js-apps/frontend-quiz/index.html',
    sourceLink: 'https://github.com/voverg/js-apps/tree/main/frontend-quiz',
    img: 'img/projects/frontend-quiz.png',
    stack: 'Html, Css, JavaScript',
    description: 'Викторина, в которой вы можете проверть свои знания по Html, Css и JavaScript',
    longDescription: 'Переходите по вкладкам, чтобы поучаствовать в разных викторинах. Свободно переключайтесь между вкладками, состояние вкладок запоминается.',
  },
  {
    id: 'kanban',
    type: 'jsapps',
    title: 'Kanban',
    link: 'https://voverg.github.io/simple-kanban/',
    sourceLink: 'https://github.com/voverg/simple-kanban',
    img: 'img/projects/simple-kanban.png',
    stack: 'Html, Css, JavaScript',
    description: 'Небольшое приложение на подобие Канбан',
    longDescription: 'Создавайте карточки с заметками. Редактируйте, дважды кликнув по ним. Перемещайте карточки между колонками. Удаляйте карточки, переместив их за пределы столбцов.',
  },
  {
    id: 'piano',
    type: 'jsapps',
    title: 'Piano',
    link: 'https://voverg.github.io/js-apps/piano/index.html',
    sourceLink: 'https://github.com/voverg/js-apps/tree/main/piano',
    img: 'img/projects/piano.png',
    stack: 'Html, Css, JavaScript',
    description: 'Пианино, на котором можно играть как мышкой, так и с клавиатуры',
    longDescription: 'Извлекайте звуки, кликая мышкой по клавишам пианино. Либо на калвиатуре с английской расскладкой нажимайте клавиши awsedftgyhujkolp;',
  },
  {
    id: 'budget',
    type: 'jsapps',
    title: 'Budget',
    link: 'https://voverg.github.io/js-apps/budget/',
    sourceLink: 'https://github.com/voverg/js-apps/tree/main/budget',
    img: 'img/projects/budget.png',
    stack: 'Html, Css, JavaScript',
    description: 'Небольшое приложение по учёту доходов и расходов.',
    longDescription: '',
  },
  {
    id: 'notes',
    type: 'jsapps',
    title: 'Notes',
    link: 'https://voverg.github.io/js-apps/notes-app/index.html',
    sourceLink: 'https://github.com/voverg/js-apps/tree/main/notes-app',
    img: 'img/projects/notes-app.png',
    stack: 'Html, Css, JavaScript',
    description: 'Создавайте, удаляйте и редактируйте заметки. Для стилизации текста можно использовать Markdown.',
    longDescription: '',
  },
  {
    id: 'habits',
    type: 'jsapps',
    title: 'Habits tracker',
    link: 'https://voverg.github.io/js-apps/habits/',
    sourceLink: 'https://github.com/voverg/js-apps/tree/main/habits',
    img: 'img/projects/habits.png',
    stack: 'Html, Css, JavaScript',
    description: 'Habits tracker - приложение для отслеживания привычек',
    longDescription: `
        Приложение "Трекер привычек":<ul>
        <li>Добавляйте и редактируйте задачи</li>
        <li>Удаляйте задачи, как по одной, так и все сразу</li>
        <li>Помечайте задачи выполненными</li>
        <li>Управляйте задачами с помощью горячих клавиш</li></ul>
    `,
  },
  // Games
  {
    id: 'clicker',
    type: 'games',
    title: 'Clicker',
    link: 'https://voverg.github.io/games/clicker/',
    sourceLink: 'https://github.com/voverg/games/tree/main/clicker',
    img: 'img/projects/clicker.png',
    stack: 'Html, Css, JavaScript',
    description: 'Игра Clicker, написанная на чистом JavaScript',
    longDescription: 'Цель игры - накликакть как можно больше шариков за отведённое время.',
  },
  {
    id: 'memory',
    type: 'games',
    title: 'Memory',
    link: 'https://voverg.github.io/games/memory/',
    sourceLink: 'https://github.com/voverg/games/tree/main/memory',
    img: 'img/projects/memory.png',
    stack: 'Html, Css, JavaScript, ООП, Phaser 3',
    description: 'Игра Memory, написанная с использованием фреймворка Phaser 3',
    longDescription: 'Цель игры - угадать все пары карточек за отведённое время.',
  },
  {
    id: 'snake',
    type: 'games',
    title: 'Змейка',
    link: 'https://voverg.github.io/games/snake/',
    sourceLink: 'https://github.com/voverg/games/tree/main/snake',
    img: 'img/projects/snake.png',
    stack: 'Html, Css, JavaScript, ООП',
    description: 'Игра Змейка, написанная на чистом JavaScript',
    longDescription: `
    <ul>
      <li>Цель игры - передвигаясь по полю собрать все фрукты, не столкнуться с границами поля и не напороться на бомбочки</li>
      <li>Реализовно множество уровней</li>
      <li>На каждом уровне змейка ускоряется и кол-во бомбочек увеличивается</li>
    </ul>
    `,
  },
  {
    id: 'tanks',
    type: 'games',
    title: 'Танчики',
    link: 'https://voverg.github.io/games/tanks/',
    sourceLink: 'https://github.com/voverg/games/tree/main/tanks',
    img: 'img/projects/tanks.png',
    stack: 'Html, Css, JavaScript, ООП',
    description: 'Игра Танчики, написанная на чистом JavaScript',
    longDescription: `
    <ul>
      <li>Цель игры - уничтожить всех противников (есть 4 вида противников)</li>
      <li>Есть возможность прокачивать свой танк, собирая бонусы</li>
      <li>В игре есть несколько уровней разной сложности</li>
      <li>Реализован конструктор создания собственного уровня</li>
    </ul>
    `,
  },
  // SPA
  {
    id: 'todo',
    type: 'spa',
    title: 'Todo',
    link: 'https://voverg.github.io/todo-react/',
    sourceLink: 'https://github.com/voverg/todo-react',
    img: 'img/projects/todo-react.png',
    stack: 'Html, Css, JavaScript, React',
    description: 'Небольшое приложение - список дел',
    longDescription: 'Это первое приложение, которое я написал с использованием React. В нём используются компоненты на основе классов.',
  },
  {
    id: 'blog',
    type: 'spa',
    title: 'Blog',
    link: 'https://voverg.github.io/react-blog/',
    sourceLink: 'https://github.com/voverg/react-blog',
    img: 'img/projects/react-blog.png',
    stack: 'Html, Css, JavaScript, Ajax, React',
    description: 'Блог с авторизацией, добавлением, удалением, поиском, сортировкой и просмотром содержимого постов, написанный на React',
    longDescription: 'Это второе приложение на React. Здесь я уже использую функциональные компоненты и простые запросы к серверу, чтобы получить список удалённых постов.',
  },
  {
    id: 'shop',
    type: 'spa',
    title: 'Shop',
    link: 'https://voverg.github.io/react-shop/',
    sourceLink: 'https://github.com/voverg/react-shop',
    img: 'img/projects/react-shop.png',
    stack: 'Html, Css, JavaScript, React',
    description: 'Клиентская часть небольшого интернет-магазина с реализацией корзины товаров',
    longDescription: `
    <ul>
      <li>Используется открытое API FortniteApi для получения списка товаров</li>
      <li>Можно добавлять товары в корзину</li>
      <li>Можно открывать корзину и просматривать выбраные товары</li>
	  <li>В корзине можно увеличивать или уменьшать кол-во товаров</li>
	  <li>Можно также удалять товары из корзины</li>
    </ul>
    `,
  },
  // {
  //   id: 'chat',
  //   type: 'spa',
  //   title: 'Chat',
  //   link: 'https://voverg.github.io/chat-react/',
  //   sourceLink: 'https://github.com/voverg/chat-react',
  //   img: 'img/projects/chat.png',
  //   stack: 'Html, Css, JavaScript, Firebase',
  //   description: 'Небольшое приложение - чат в реальном времени, написанное на React + Firebase.',
  //   longDescription: 'Приложение написано на React с использованием функциональных компонентов и хуков. В качестве бекэнда использую Firebase.',
  // },
  {
    id: 'calendar',
    type: 'spa',
    title: 'Calendar',
    link: 'https://voverg.github.io/react-calendar/',
    sourceLink: 'https://github.com/voverg/react-calendar',
    img: 'img/projects/calendar.png',
    stack: 'Html, Css, JavaScript, React, Redux, Redux Thunk',
    description: 'Приложение - календарь, написанное на React. Создавайте, просматривайте детали и удаляйте события',
    longDescription: 'Приложение написано на React с использованием функциональных компонентов и хуков. Также реализована простая авторизация. Можно заходить под разными пользователями, созадвать события и назначать их другим пользователям.',
  },
  {
    id: 'food',
    type: 'spa',
    title: 'Food',
    link: 'https://voverg.github.io/react-food/',
    sourceLink: 'https://github.com/voverg/react-food',
    img: 'img/projects/react-food.png',
    stack: 'Html, Css, JavaScript, React',
    description: 'Приложение, в котором есть каталог с кулинарными рецептами, разбитыми по категориям.',
    longDescription: `
    <ul>
      <li>Использует открытое API The meal DB с информацией о рецептах</li>
      <li>Можно заходить в разные категории, выбирать нужный рецепт и смотреть подробную информацию по нему</li>
      <li>Основная задача была - это поработать с навигацией по страницам (роутинг, вложенный роутинг)</li>
    </ul>
    `,
  },
];
