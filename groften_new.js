document.addEventListener('DOMContentLoaded', () => {
  const langButtons = document.querySelectorAll('.lang-button');
  const categoryButtons = document.querySelectorAll('.category-button');
  const display = document.getElementById('menu-items-display');

  let currentLang = 'tr';
  let currentCategory = 'breakfast';

  const menu = [
    // BREAKFAST
    { category: 'breakfast', name: { tr: 'Türk Kahvaltısı', en: 'Turkish Breakfast', ru: 'Турецкий завтрак' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'breakfast', name: { tr: 'İngiliz Kahvaltısı', en: 'English Breakfast', ru: 'Английский завтрак' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'breakfast', name: { tr: 'Türk Omlet Kahvaltısı', en: 'Turkish Omelette Breakfast', ru: 'Турецкий омлет завтрак' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'breakfast', name: { tr: 'Salamlı Tost', en: 'Salami Toast', ru: 'Тост с салями' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'breakfast', name: { tr: 'Peynirli Tost', en: 'Cheese Toast', ru: 'Тост с сыром' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'breakfast', name: { tr: 'Karışık Tost', en: 'Combo Toast', ru: 'Смешанный тост' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'breakfast', name: { tr: 'Sade Omlet', en: 'Plain Omelette', ru: 'Обычный омлет' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'breakfast', name: { tr: 'Peynirli Omlet', en: 'Cheese Omelette', ru: 'Омлет с сыром' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'breakfast', name: { tr: 'Mantarlı Omlet', en: 'Mushroom Omelette', ru: 'Омлет с грибами' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'breakfast', name: { tr: 'Salamlı Omlet', en: 'Salami Omelette', ru: 'Омлет с салями' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'breakfast', name: { tr: 'Jambonlu Omlet', en: 'Ham Omelette', ru: 'Омлет с ветчиной' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'breakfast', name: { tr: 'Pastırmalı Omlet', en: 'Bacon Omelette', ru: 'Омлет с беконом' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'breakfast', name: { tr: 'Karışık Omlet', en: 'Mixed Omelette', ru: 'Смешанный омлет' }, desc: { tr: '', en: '', ru: '' }, price: '' },

    // STARTERS
    { category: 'starters', name: { tr: 'Nachos', en: 'Nachos', ru: 'Начос' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'starters', name: { tr: 'Tavuk Sepeti & Patates', en: 'Chicken Basket & Chips', ru: 'Куриная корзина и фри' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'starters', name: { tr: 'Domates Çorbası', en: 'Tomato Soup', ru: 'Томатный суп' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'starters', name: { tr: 'Mercimek Çorbası', en: 'Lentil Soup', ru: 'Чечевичный суп' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'starters', name: { tr: 'Tavuk Çorbası', en: 'Chicken Soup', ru: 'Куриный суп' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'starters', name: { tr: 'Mantar Çorbası', en: 'Mushroom Soup', ru: 'Грибной суп' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'starters', name: { tr: 'Peynirli Salata', en: 'Cheese Salad', ru: 'Салат с сыром' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'starters', name: { tr: 'Sezar Salata', en: 'Caesar Salad', ru: 'Салат Цезарь' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'starters', name: { tr: 'Tavuklu Salata', en: 'Chicken Salad', ru: 'Салат с курицей' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'starters', name: { tr: 'Karidesli Salata', en: 'Shrimp Salad', ru: 'Салат с креветками' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'starters', name: { tr: 'Karışık Salata', en: 'Mixed Salad', ru: 'Смешанный салат' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'starters', name: { tr: 'Ton Balıklı Salata', en: 'Tuna Salad', ru: 'Салат с тунцом' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'starters', name: { tr: 'Yeşil Salata', en: 'Green Salad', ru: 'Зеленый салат' }, desc: { tr: '', en: '', ru: '' }, price: '' },

    // BURGERS (SANDWICHES & BURGERS)
    { category: 'burgers', name: { tr: 'Peynirli Sandviç', en: 'Cheese Sandwich', ru: 'Сэндвич с сыром' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'burgers', name: { tr: 'Salamlı Sandviç', en: 'Salami Sandwich', ru: 'Сэндвич с салями' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'burgers', name: { tr: 'Karışık Sandviç', en: 'Combo Sandwich', ru: 'Комбо сэндвич' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'burgers', name: { tr: 'Hamburger', en: 'Hamburger', ru: 'Гамбургер' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'burgers', name: { tr: 'Cheeseburger', en: 'Cheese Burger', ru: 'Чизбургер' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'burgers', name: { tr: 'Double Beach Burger', en: 'Double Beach Burger', ru: 'Дабл Бич Бургер' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'burgers', name: { tr: 'Çıtır Tavuk Burger', en: 'Crispy Chicken Burger', ru: 'Хрустящий куриный бургер' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'burgers', name: { tr: 'Meksika Burger', en: 'Mexican Burger', ru: 'Мексиканский бургер' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'burgers', name: { tr: 'Et Roll', en: 'Meat Roll', ru: 'Мясной ролл' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'burgers', name: { tr: 'Tavuk Roll', en: 'Chicken Roll', ru: 'Куриный ролл' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'burgers', name: { tr: 'Tavuk Wrap', en: 'Chicken Wrap', ru: 'Куриный врап' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'burgers', name: { tr: 'Patates Kızartması', en: 'Chips', ru: 'Картофель фри' }, desc: { tr: '', en: '', ru: '' }, price: '' },

    // PASTAS
    { category: 'pasta', name: { tr: 'Spagetti Bolonez', en: 'Spaghetti Bolognese', ru: 'Спагетти Болоньезе' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'pasta', name: { tr: 'Spagetti Karbonara', en: 'Spaghetti Carbonara', ru: 'Спагетти Карбонара' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'pasta', name: { tr: 'Spagetti Napoliten', en: 'Spaghetti Napolitana', ru: 'Спагетти Наполитана' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'pasta', name: { tr: 'Penne Arrabbiata', en: 'Penne All\' Arrabbiata', ru: 'Пенне Арраббиата' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'pasta', name: { tr: 'Penne Al Tono', en: 'Penne Al Tono', ru: 'Пенне Аль Тоно' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'pasta', name: { tr: 'Pastırmalı Penne', en: 'Penne With Bacon', ru: 'Пенне с беконом' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'pasta', name: { tr: 'Tavuklu Penne', en: 'Penne With Chicken', ru: 'Пенне с курицей' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'pasta', name: { tr: 'Güveçte Lazanya', en: 'Lasagne In Casserole', ru: 'Лазанья в горшочке' }, desc: { tr: '', en: '', ru: '' }, price: '' },

    // MAIN DISHES (ANA YEMEKLER)
    { category: 'main-dishes', name: { tr: 'Chicken Americano', en: 'Chicken Americano', ru: 'Курица Американо' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'main-dishes', name: { tr: 'Tatlı Ekşi Tavuk', en: 'Chicken Sweet & Sour', ru: 'Курица в кисло-сладком соусе' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'main-dishes', name: { tr: 'Izgara Tavuk', en: 'Grill Chicken', ru: 'Курица на гриле' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'main-dishes', name: { tr: 'Tavuk Şiş', en: 'Chicken Shish', ru: 'Куриный шашлык' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'main-dishes', name: { tr: 'Köri Soslu Tavuk', en: 'Chicken Curry', ru: 'Курица карри' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'main-dishes', name: { tr: 'Meksika Usulü Tavuk', en: 'Chicken Mexican', ru: 'Курица по-мексикански' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'main-dishes', name: { tr: 'Sarımsaklı Tavuk', en: 'Garlic Chicken', ru: 'Чесночная курица' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'main-dishes', name: { tr: 'Karabiberli Tavuk', en: 'Pepred Chicken', ru: 'Курица с перцем' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'main-dishes', name: { tr: 'Chicken Bearnaise', en: 'Chicken Bearnaise', ru: 'Курица под соусом Бернез' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'main-dishes', name: { tr: 'Mantarlı Tavuk', en: 'Mushroom Chicken', ru: 'Курица с грибами' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'main-dishes', name: { tr: 'Tavuk Şinitzel', en: 'Chicken Schnitzel', ru: 'Куриный шницель' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'main-dishes', name: { tr: 'Tavuk Kanatları', en: 'Chicken Wings', ru: 'Куриные крылышки' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'main-dishes', name: { tr: 'Chicken Hawaii', en: 'Chicken Hawaii', ru: 'Курица по-гавайски' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'main-dishes', name: { tr: 'Tavuk Sote', en: 'Chicken Saute', ru: 'Куриное соте' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'main-dishes', name: { tr: 'Barbekü Soslu Tavuk', en: 'Chicken Barbecue', ru: 'Курица барбекю' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'main-dishes', name: { tr: 'Osmanlı Usulü Et', en: 'Meat Osmanli', ru: 'Мясо по-османски' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'main-dishes', name: { tr: 'Osmanlı Usulü Tavuk', en: 'Chicken Osmanli', ru: 'Курица по-османски' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'main-dishes', name: { tr: 'Izgara Köfte', en: 'Grilled Meatballs', ru: 'Тефтели на гриле' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'main-dishes', name: { tr: 'Türk Kebabı', en: 'Turkish Kebab', ru: 'Турецкий кебаб' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'main-dishes', name: { tr: 'Tavuk Döner Kebap', en: 'Chicken Doner Kebab', ru: 'Куриный донер кебаб' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'main-dishes', name: { tr: 'Et Döner Kebap', en: 'Meat Doner Kebab', ru: 'Мясной донер кебаб' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'main-dishes', name: { tr: 'Adana Kebap', en: 'Adana Kebab', ru: 'Адана кебаб' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'main-dishes', name: { tr: 'Tavuk Döner', en: 'Chicken Doner', ru: 'Куриный донер' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'main-dishes', name: { tr: 'Köfte', en: 'Meatballs', ru: 'Котлеты' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'main-dishes', name: { tr: 'Dana Rosto', en: 'Beef Roast', ru: 'Ростбиф из говядины' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'main-dishes', name: { tr: 'Karışık Izgara', en: 'Mixed Grill', ru: 'Гриль микс' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'main-dishes', name: { tr: 'Bonfile Steak', en: 'Fillet Steak', ru: 'Филе стейк' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'main-dishes', name: { tr: 'Biberli Steak', en: 'Pepper Steak', ru: 'Стейк с перцем' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'main-dishes', name: { tr: 'Mantarlı Steak', en: 'Mushroom Steak', ru: 'Грибной стейк' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'main-dishes', name: { tr: 'Bearnaise Steak', en: 'Bearnaise Steak', ru: 'Стейк под соусом Бернез' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'main-dishes', name: { tr: 'Meksika Usulü Steak', en: 'Mexican Steak', ru: 'Мексиканский стейк' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'main-dishes', name: { tr: 'Soğanlı Steak', en: 'Onion Steak', ru: 'Стейк с луком' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'main-dishes', name: { tr: 'Plank Steak', en: 'Plank Steak', ru: 'Планк стейк' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'main-dishes', name: { tr: 'Wiener Schnitzel', en: 'Wiener Schnitzel', ru: 'Венский шницель' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'main-dishes', name: { tr: 'Cordon Bleu', en: 'Cordon Bleu', ru: 'Кордон Блю' }, desc: { tr: '', en: '', ru: '' }, price: '' },

    // PIZZAS
    { category: 'pizzas', name: { tr: 'Groften Combo Pizza', en: 'Groften Combo Pizza', ru: 'Грофтен Комбо Пицца' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'pizzas', name: { tr: 'Pizza Margherita', en: 'Pizza Margherita', ru: 'Пицца Маргарита' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'pizzas', name: { tr: 'Pizza Hawaiian', en: 'Pizza Hawaiian', ru: 'Пицца Гавайская' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'pizzas', name: { tr: 'Pizza Bolognese', en: 'Pizza Bolognese', ru: 'Пицца Болоньезе' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'pizzas', name: { tr: 'Pizza Pepperoni', en: 'Pizza Pepperoni', ru: 'Пицца Пепперони' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'pizzas', name: { tr: 'Pizza Al Tonno', en: 'Pizza Al Tonno', ru: 'Пицца с тунцом' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'pizzas', name: { tr: 'Pizza Mexicano', en: 'Pizza Mexicano', ru: 'Пицца Мексикано' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'pizzas', name: { tr: 'Pizza Salami', en: 'Pizza Salami', ru: 'Пицца с салями' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'pizzas', name: { tr: 'Deniz Ürünleri Pizza', en: 'Pizza Sea Food', ru: 'Пицца с морепродуктами' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'pizzas', name: { tr: 'Karidesli Pizza', en: 'Pizza Shrimps', ru: 'Пицца с креветками' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'pizzas', name: { tr: 'Tavuklu Pizza', en: 'Pizza Chicken', ru: 'Пицца с курицей' }, desc: { tr: '', en: '', ru: '' }, price: '' },

    // SEA FOOD
    { category: 'seafood', name: { tr: 'Çipura', en: 'Sea Bream (Cupra)', ru: 'Дорада (Чупра)' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'seafood', name: { tr: 'Sarımsaklı Karides', en: 'Garlic Shrimp', ru: 'Чесночные креветки' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'seafood', name: { tr: 'Karides Güveç', en: 'Shrimp Casserole', ru: 'Креветки в горшочке' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'seafood', name: { tr: 'Kalamar Tava', en: 'Fried Calamari', ru: 'Жареные кальмары' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'seafood', name: { tr: 'Karışık Balık Tabağı', en: 'Mixed Fish Plate', ru: 'Ассорти из рыбы' }, desc: { tr: '', en: '', ru: '' }, price: '' },

    // DESSERTS
    { category: 'desserts', name: { tr: 'Limonlu Cheesecake', en: 'Cheesecake Lemon', ru: 'Лимонный чизкейк' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'desserts', name: { tr: 'Dondurma', en: 'Ice Cream', ru: 'Мороженое' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'desserts', name: { tr: 'Tiramisu', en: 'Tiramisu', ru: 'Тирамису' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'desserts', name: { tr: 'Pankek', en: 'Pancakes', ru: 'Блинчики' }, desc: { tr: '', en: '', ru: '' }, price: '' },

    // FROZEN DRINKS
    { category: 'frozen-drinks', name: { tr: 'Frozen Strawberry Daiquiri', en: 'Frozen Strawberry Daiquiri', ru: 'Замороженный клубничный дайкири' }, desc: { tr: 'Bacardi, Fresh Lime, Sugar, Fresh Strawberries', en: 'Bacardi, Fresh Lime, Sugar, Fresh Strawberries', ru: 'Бакарди, свежий лайм, сахар, свежая клубника' }, price: '' },
    { category: 'frozen-drinks', name: { tr: 'Frozen Kiwi Daiquiri', en: 'Frozen Kiwi Daiquiri', ru: 'Замороженный киви дайкири' }, desc: { tr: 'Bacardi, Fresh Lime, Sugar, Fresh Kiwi', en: 'Bacardi, Fresh Lime, Sugar, Fresh Kiwi', ru: 'Бакарди, свежий лайм, сахар, свежий киви' }, price: '' },
    { category: 'frozen-drinks', name: { tr: 'Frozen Peach Daiquiri', en: 'Frozen Peach Daiquiri', ru: 'Замороженный персиковый дайкири' }, desc: { tr: 'Bacardi, Peach Juice, Sugar, Fresh Peach', en: 'Bacardi, Peach Juice, Sugar, Fresh Peach', ru: 'Бакарди, персиковый сок, сахар, свежий персик' }, price: '' },
    { category: 'frozen-drinks', name: { tr: 'Frozen Mango Daiquiri', en: 'Frozen Mango Daiquiri', ru: 'Замороженный манго дайкири' }, desc: { tr: 'Bacardi, Fresh Lime, Sugar, Fresh Mango', en: 'Bacardi, Fresh Lime, Sugar, Fresh Mango', ru: 'Бакарди, свежий лайм, сахар, свежее манго' }, price: '' },
    { category: 'frozen-drinks', name: { tr: 'Mojito', en: 'Mojito', ru: 'Мохито' }, desc: { tr: 'Bacardi, Soda, Sugar, Lemon Juice, Fresh Mint Leaves, Crushed Ice', en: 'Bacardi, Soda, Sugar, Lemon Juice, Fresh Mint Leaves, Crushed Ice', ru: 'Бакарди, содовая, сахар, лимонный сок, свежая мята, колотый лед' }, price: '' },
    { category: 'frozen-drinks', name: { tr: 'Strawberry Mojito', en: 'Strawberry Mojito', ru: 'Клубничный мохито' }, desc: { tr: 'Bacardi, Soda, Lemon Juice, Fresh Strawberry, Fresh Mint Leaves, Crushed Ice, Strawberry Syrup', en: 'Bacardi, Soda, Lemon Juice, Fresh Strawberry, Fresh Mint Leaves, Crushed Ice, Strawberry Syrup', ru: 'Бакарди, содовая, лимонный сок, свежая клубника, свежая мята, колотый лед, клубничный сироп' }, price: '' },
    { category: 'frozen-drinks', name: { tr: 'Caprinia', en: 'Caprinia', ru: 'Капириния' }, desc: { tr: 'Rum, Lime, Brown Sugar, Crushed Ice', en: 'Rum, Lime, Brown Sugar, Crushed Ice', ru: 'Ром, лайм, коричневый сахар, колотый лед' }, price: '' },
    { category: 'frozen-drinks', name: { tr: 'Aquarium Alanya', en: 'Aquarium Alanya', ru: 'Аквариум Аланья' }, desc: { tr: '6 kişilik', en: '6 person', ru: 'На 6 человек' }, price: '' },
    { category: 'frozen-drinks', name: { tr: 'Water Melon Dreams', en: 'Water Melon Dreams', ru: 'Арбузные мечты' }, desc: { tr: '6 kişilik', en: '6 person', ru: 'На 6 человек' }, price: '' },

    // SOFT DRINKS
    { category: 'soft-drinks', name: { tr: 'Kola', en: 'Cola', ru: 'Кола' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'soft-drinks', name: { tr: 'Big Cola Light', en: 'Big Cola Light', ru: 'Биг Кола Лайт' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'soft-drinks', name: { tr: 'Big Fanta', en: 'Big Fanta', ru: 'Биг Фанта' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'soft-drinks', name: { tr: 'Big Sprite', en: 'Big Sprite', ru: 'Биг Спрайт' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'soft-drinks', name: { tr: 'Coca-Cola', en: 'Coca-Cola', ru: 'Кока-Кола' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'soft-drinks', name: { tr: 'Fanta Limon', en: 'Fanta Lemon', ru: 'Фанта Лимон' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'soft-drinks', name: { tr: 'Soğuk Çay', en: 'Ice Tea', ru: 'Холодный чай' }, desc: { tr: 'Şeftali, Mango, Limon', en: 'Peach, Mango, Lemon', ru: 'Персик, манго, лимон' }, price: '' },
    { category: 'soft-drinks', name: { tr: 'Meyve Suyu', en: 'Fruit Juice', ru: 'Фруктовый сок' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'soft-drinks', name: { tr: 'Enerji İçeceği', en: 'Energy Drink', ru: 'Энергетический напиток' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'soft-drinks', name: { tr: 'Soda', en: 'Soda', ru: 'Сода' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'soft-drinks', name: { tr: 'Tonik', en: 'Tonic', ru: 'Тоник' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'soft-drinks', name: { tr: 'Su 0.5 lt', en: 'Water 0.5 l', ru: 'Вода 0.5 л' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'soft-drinks', name: { tr: 'Su 1.0 lt', en: 'Water 1.0 l', ru: 'Вода 1.0 л' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'soft-drinks', name: { tr: 'Taze Portakal Suyu', en: 'Fresh Orange Juice', ru: 'Свежий апельсиновый сок' }, desc: { tr: '', en: '', ru: '' }, price: '' },

    // BEER
    { category: 'beer', name: { tr: 'Efes Şişe (Big)', en: 'Efes Bottle (Big)', ru: 'Эфес Бутылка (Большая)' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'beer', name: { tr: 'Efes Reserve', en: 'Efes Reserve', ru: 'Эфес Резерв' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'beer', name: { tr: 'Tuborg Şişe (Big)', en: 'Tuborg Bottle (Big)', ru: 'Туборг Бутылка (Большая)' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'beer', name: { tr: 'Bomonti', en: 'Bomonti', ru: 'Бомонти' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'beer', name: { tr: 'Corona', en: 'Corona', ru: 'Корона' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'beer', name: { tr: 'Carlsberg', en: 'Carlsberg', ru: 'Карлсберг' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'beer', name: { tr: 'Miller', en: 'Miller', ru: 'Миллер' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'beer', name: { tr: 'Guinness Dark', en: 'Guinness Dark', ru: 'Гиннесс Дарк' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'beer', name: { tr: 'Cider', en: 'Cider', ru: 'Сидр' }, desc: { tr: 'Apple, Strawberry', en: 'Apple, Strawberry', ru: 'Яблоко, клубника' }, price: '' },

    // WHISKEYS
    { category: 'whiskeys', name: { tr: 'Jack Daniel\'s', en: 'Jack Daniel\'s', ru: 'Джек Дэниелс' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'whiskeys', name: { tr: 'Johny Walker', en: 'Johny Walker', ru: 'Джонни Уокер' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'whiskeys', name: { tr: 'Jameson', en: 'Jameson', ru: 'Джеймсон' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'whiskeys', name: { tr: 'JB', en: 'JB', ru: 'ДжБи' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'whiskeys', name: { tr: 'Chivas', en: 'Chivas', ru: 'Чивас' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'whiskeys', name: { tr: 'Yerli Viski', en: 'Local Whisky', ru: 'Локальный виски' }, desc: { tr: '', en: '', ru: '' }, price: '' },

    // SHOTS
    { category: 'shots', name: { tr: 'B-52', en: 'B-52', ru: 'Б-52' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'shots', name: { tr: 'Sambuca', en: 'Sambuca', ru: 'Самбука' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'shots', name: { tr: 'Tequila', en: 'Tequila', ru: 'Текила' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'shots', name: { tr: 'Jägermeister', en: 'Jägermeister', ru: 'Ягермейстер' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'shots', name: { tr: 'Turkish Pepper', en: 'Turkish Pepper', ru: 'Турецкий перец' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'shots', name: { tr: 'Jeger Bom', en: 'Jeger Bom', ru: 'Йегер Бом' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'shots', name: { tr: 'Sambuca Baileys', en: 'Sambuca Baileys', ru: 'Самбука Бейлис' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'shots', name: { tr: 'Barmen Öpücüğü', en: 'Barmen Kiss', ru: 'Поцелуй бармена' }, desc: { tr: '', en: '', ru: '' }, price: '' },

    // WATER PIPE
    // { category: 'water-pipe', name: { tr: 'LOVE 66', en: 'LOVE 66', ru: 'ЛОВЕ 66' }, desc: { tr: 'WATERMELON, STRAWBERRY, MINT, GUM', en: 'WATERMELON, STRAWBERRY, MINT, GUM', ru: 'АРБУЗ, КЛУБНИКА, МЯТА, ЖВАЧКА' }, price: '' },
    // { category: 'water-pipe', name: { tr: 'LADY KİLLER', en: 'LADY KILLER', ru: 'КИЛЛЕР ЛЕДИ' }, desc: { tr: 'MANGO, HONEYMELON, STRAWBERRY', en: 'MANGO, HONEYMELON, STRAWBERRY', ru: 'МАНГО, МЕДОВАЯ ДЫНЯ, КЛУБНИКА' }, price: '' },
    // { category: 'water-pipe', name: { tr: 'ICE BONBON', en: 'ICE BONBON', ru: 'ЛЕДЯНОЕ КОНФЕТА' }, desc: { tr: 'MANGO, HONEYMELON, STRAWBERRY', en: 'MANGO, HONEYMELON, STRAWBERRY', ru: 'МАНГО, МЕДОВАЯ ДЫНЯ, КЛУБНИКА' }, price: '' },
    // { category: 'water-pipe', name: { tr: 'DEJAVU', en: 'DEJAVU', ru: 'ДЕЖАВЮ' }, desc: { tr: 'WATERMELON, MELON, VANILLA', en: 'WATERMELON, MELON, VANILLA', ru: 'АРБУЗ, ДЫНЯ, ВАНИЛЬ' }, price: '' },
    // { category: 'water-pipe', name: { tr: 'ZEUS', en: 'ZEUS', ru: 'ЗЕВС' }, desc: { tr: 'WATERMELON, PEACH MARACUJA', en: 'WATERMELON, PEACH MARACUJA', ru: 'АРБУЗ, ПЕРСИК МАРАКУЙЯ' }, price: '' },
    // { category: 'water-pipe', name: { tr: 'BAKU NIGHT', en: 'BAKU NIGHT', ru: 'НОЧЬ В БАКУ' }, desc: { tr: 'Forest fruit, sweet mint', en: 'Forest fruit, sweet mint', ru: 'Лесные ягоды, сладкая мята' }, price: '' },
    // { category: 'water-pipe', name: { tr: 'DOUBLE APPLE', en: 'DOUBLE APPLE', ru: 'ДВОЙНОЕ ЯБЛОКО' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    // { category: 'water-pipe', name: { tr: 'MINT', en: 'MINT', ru: 'МЯТА' }, desc: { tr: '', en: '', ru: '' }, price: '' },

    // MILKSHAKES
    { category: 'milkshakes', name: { tr: 'Muzlu Milkshake', en: 'Banana Milkshake', ru: 'Банановый милкшейк' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'milkshakes', name: { tr: 'Çilekli Milkshake', en: 'Strawberry Milkshake', ru: 'Клубничный милкшейк' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'milkshakes', name: { tr: 'Vanilya Milkshake', en: 'Vanilla Milkshake', ru: 'Ванильный милкшейк' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'milkshakes', name: { tr: 'Kakao Milkshake', en: 'Cocoa Milkshake', ru: 'Какао милкшейк' }, desc: { tr: '', en: '', ru: '' }, price: '' },
    { category: 'milkshakes', name: { tr: 'Buzlu Kahve', en: 'Ice Coffee', ru: 'Айс-кофе' }, desc: { tr: '', en: '', ru: '' }, price: '' },

    // COCKTAILS
    { category: 'cocktails', name: { tr: 'Long Island Ice Tea', en: 'Long Island Ice Tea', ru: 'Лонг Айленд' }, desc: { tr: 'Bacardi, Vodka, Gin, Tequila, Cointreau, Lemon Juice, Ice', en: 'Bacardi, Vodka, Gin, Tequila, Cointreau, Lemon Juice, Ice', ru: 'Бакарди, водка, джин, текила, куантро, лимонный сок, лед' }, price: '' },
    { category: 'cocktails', name: { tr: 'Barman Special', en: 'Barman Special', ru: 'Спецзаказ барменом' }, desc: { tr: 'Bacardi, Cointreau, Orange Juice, Blue Curacao', en: 'Bacardi, Cointreau, Orange Juice, Blue Curacao', ru: 'Бакарди, куантро, апельсиновый сок, голубой кюрасао' }, price: '' },
    { category: 'cocktails', name: { tr: 'Acapulco', en: 'Acapulco', ru: 'Акапулько' }, desc: { tr: 'Tequila, Bacardi, Pineapple Juice, Cream de Coconut', en: 'Tequila, Bacardi, Pineapple Juice, Cream de Coconut', ru: 'Текила, бакарди, ананасовый сок, кокосовый крем' }, price: '' },
    { category: 'cocktails', name: { tr: 'Blue Hawaii', en: 'Blue Hawaii', ru: 'Голубые Гавайи' }, desc: { tr: 'Bacardi, Blue Curacao, Malibu, Pineapple Juice', en: 'Bacardi, Blue Curacao, Malibu, Pineapple Juice', ru: 'Бакарди, голубой кюрасао, малибу, ананасовый сок' }, price: '' },
    { category: 'cocktails', name: { tr: 'Pina Colada', en: 'Pina Colada', ru: 'Пина Колада' }, desc: { tr: 'Bacardi, Malibu, Milk, Pineapple Juice', en: 'Bacardi, Malibu, Milk, Pineapple Juice', ru: 'Бакарди, малибу, молоко, ананасовый сок' }, price: '' },
    { category: 'cocktails', name: { tr: 'Tequila Sunrise', en: 'Tequila Sunrise', ru: 'Восход над Текилой' }, desc: { tr: 'Tequila, Cointreau, Orange Juice, Grenadine', en: 'Tequila, Cointreau, Orange Juice, Grenadine', ru: 'Текила, куантро, апельсиновый сок, гренадин' }, price: '' },
    { category: 'cocktails', name: { tr: 'Malibu Sunset', en: 'Malibu Sunset', ru: 'Закат Малибу' }, desc: { tr: 'Vodka, Malibu, Pineapple Juice, Grenadine', en: 'Vodka, Malibu, Pineapple Juice, Grenadine', ru: 'Водка, малибу, ананасовый сок, гренадин' }, price: '' },
    { category: 'cocktails', name: { tr: 'Blue Lagoon', en: 'Blue Lagoon', ru: 'Голубая лагуна' }, desc: { tr: 'Vodka, Sprite, Lemon, Blue Curacao', en: 'Vodka, Sprite, Lemon, Blue Curacao', ru: 'Водка, спрайт, лимон, голубой кюрасао' }, price: '' },
    { category: 'cocktails', name: { tr: 'Black Russian', en: 'Black Russian', ru: 'Черный русский' }, desc: { tr: 'Kahlua, Vodka, Coffee Liqueur, Ice', en: 'Kahlua, Vodka, Coffee Liqueur, Ice', ru: 'Калуа, водка, кофейный ликер, лед' }, price: '' },
    { category: 'cocktails', name: { tr: 'White Russian', en: 'White Russian', ru: 'Белый русский' }, desc: { tr: 'Kahlua, Vodka, Cream, Ice', en: 'Kahlua, Vodka, Cream, Ice', ru: 'Калуа, водка, сливки, лед' }, price: '' },
    { category: 'cocktails', name: { tr: 'Cuba Libre', en: 'Cuba Libre', ru: 'Куба Либре' }, desc: { tr: 'Bacardi, Cola, Lime', en: 'Bacardi, Cola, Lime', ru: 'Бакарди, кола, лайм' }, price: '' },
    { category: 'cocktails', name: { tr: 'Cosmopolitan', en: 'Cosmopolitan', ru: 'Космополитен' }, desc: { tr: 'Bacardi, Lemon Juice, Sprite, Grenadine', en: 'Bacardi, Lemon Juice, Sprite, Grenadine', ru: 'Бакарди, лимонный сок, спрайт, гренадин' }, price: '' },
    { category: 'cocktails', name: { tr: 'San Francisco', en: 'San Francisco', ru: 'Сан-Франциско' }, desc: { tr: 'Vodka, Banana Liqueur, Orange Juice, Grenadine', en: 'Vodka, Banana Liqueur, Orange Juice, Grenadine', ru: 'Водка, банановый ликер, апельсиновый сок, гренадин' }, price: '' },
    { category: 'cocktails', name: { tr: 'Bloody Mary', en: 'Bloody Mary', ru: 'Кровавая Мэри' }, desc: { tr: 'Vodka, Cointreau, Lime, Tomato Juice, Salt, Paprika Hot Sauce', en: 'Vodka, Cointreau, Lime, Tomato Juice, Salt, Paprika Hot Sauce', ru: 'Водка, куантро, лайм, томатный сок, соль, острый паприка' }, price: '' },
    { category: 'cocktails', name: { tr: 'Tom Collins', en: 'Tom Collins', ru: 'Том Коллинз' }, desc: { tr: 'Gin, Lemon Juice, Sugar Syrup, Mineral Water', en: 'Gin, Lemon Juice, Sugar Syrup, Mineral Water', ru: 'Джин, лимонный сок, сахарный сироп, минеральная вода' }, price: '' },
    { category: 'cocktails', name: { tr: 'Casablanca', en: 'Casablanca', ru: 'Касабланка' }, desc: { tr: 'Rum, Malibu, Pineapple Juice, Grenadine', en: 'Rum, Malibu, Pineapple Juice, Grenadine', ru: 'Ром, малибу, ананасовый сок, гренадин' }, price: '' },
    { category: 'cocktails', name: { tr: 'Harley Davidson', en: 'Harley Davidson', ru: 'Харлей-Дэвидсон' }, desc: { tr: 'Baileys, Malibu, Whisky, Crushed Ice', en: 'Baileys, Malibu, Whisky, Crushed Ice', ru: 'Бейлис, малибу, виски, колотый лед' }, price: '' },
    { category: 'cocktails', name: { tr: 'African Inn', en: 'African Inn', ru: 'Африканская гостиница' }, desc: { tr: 'Safari, Pineapple Juice, Orange Juice', en: 'Safari, Pineapple Juice, Orange Juice', ru: 'Сафари, ананасовый сок, апельсиновый сок' }, price: '' },
    { category: 'cocktails', name: { tr: 'Ecstasy', en: 'Ecstasy', ru: 'Экстаз' }, desc: { tr: 'Bacardi, Tequila, Safari, Cointreau, Red Bull', en: 'Bacardi, Tequila, Safari, Cointreau, Red Bull', ru: 'Бакарди, текила, сафари, куантро, энергетик' }, price: '' },
    { category: 'cocktails', name: { tr: 'Poison', en: 'Poison', ru: 'Яд' }, desc: { tr: 'Gin, Cointreau, Archers, Pineapple Juice', en: 'Gin, Cointreau, Archers, Pineapple Juice', ru: 'Джин, куантро, лучники, ананасовый сок' }, price: '' },
    { category: 'cocktails', name: { tr: 'Salim Special', en: 'Salim Special', ru: 'Салим Специал' }, desc: { tr: 'SECRET', en: 'SECRET', ru: 'СЕКРЕТ' }, price: '' },


    // sexy cocktails

    {category:'sexycocktails',name:{tr:'Hot Love',en:'Hot Love',ru:'Горячая любовь'},desc:{tr:'Rom, votka, tekila, portakal suyu, grenadin',en:'Rum, vodka, tequila, orange juice, grenadine',ru:'Ром, водка, текила, апельсиновый сок, гренадин'},price:''},
{category:'sexycocktails',name:{tr:'Sex on the Beach',en:'Sex on the Beach',ru:'Секс на пляже'},desc:{tr:'Votka, tekila, Archers, portakal suyu, grenadin',en:'Vodka, tequila, Archers, orange juice, grenadine',ru:'Водка, текила, Archers, апельсиновый сок, гренадин'},price:''},
{category:'sexycocktails',name:{tr:'Orgasm',en:'Orgasm',ru:'Оргазм'},desc:{tr:'Votka, Baileys, Amaretto, süt, krema',en:'Vodka, Baileys, Amaretto, milk, cream',ru:'Водка, Baileys, амаретто, молоко, сливки'},price:''},
{category:'sexycocktails',name:{tr:'Viagra',en:'Viagra',ru:'Виагра'},desc:{tr:'Votka, Cointreau, Red Bull, Blue Curaçao',en:'Vodka, Cointreau, Red Bull, Blue Curaçao',ru:'Водка, Cointreau, Red Bull, Blue Curaçao'},price:''},
{category:'sexycocktails',name:{tr:'Sea Sun Sex',en:'Sea Sun Sex',ru:'Море Солнце Секс'},desc:{tr:'Votka, Archers, Kahlua, ananas suyu, grenadin',en:'Vodka, Archers, Kahlua, pineapple juice, grenadine',ru:'Водка, Archers, Kahlua, ананасовый сок, гренадин'},price:''},
{category:'sexycocktails',name:{tr:'Virgin Kiss',en:'Virgin Kiss',ru:'Невинный поцелуй'},desc:{tr:'Bacardi, muz likörü, portakal likörü, portakal suyu, grenadin',en:'Bacardi, banana liqueur, orange liqueur, orange juice, grenadine',ru:'Bacardi, банановый ликер, апельсиновый ликер, апельсиновый сок, гренадин'},price:''},
{category:'sexycocktails',name:{tr:'Love Me',en:'Love Me',ru:'Люби меня'},desc:{tr:'Cin, Bacardi, Malibu, tekila, limon suyu, grenadin',en:'Gin, Bacardi, Malibu, tequila, lemon juice, grenadine',ru:'Джин, Bacardi, Malibu, текила, лимонный сок, гренадин'},price:''},
{category:'sexycocktails',name:{tr:'Gin Fizz',en:'Gin Fizz',ru:'Джин Физз'},desc:{tr:'Cin, limon suyu, şeker, maden suyu',en:'Gin, lemon juice, sugar, mineral water',ru:'Джин, лимонный сок, сахар, минеральная вода'},price:''},
{category:'sexycocktails',name:{tr:'Perfect Kiss',en:'Perfect Kiss',ru:'Идеальный поцелуй'},desc:{tr:'Bacardi, şeftali likörü, kırılmış buz, Sprite',en:'Bacardi, peach liqueur, crushed ice, sprite',ru:'Bacardi, персиковый ликер, дробленый лед, Sprite'},price:''},
{category:'sexycocktails',name:{tr:'Sex Red',en:'Sex Red',ru:'Красный секс'},desc:{tr:'Jägermeister, taze limon suyu, Sprite, meyve suyu, buz',en:'Jägermeister, fresh lemon juice, sprite, fruit juice, ice',ru:'Jägermeister, свежий лимонный сок, Sprite, фруктовый сок, лед'},price:''},
{category:'sexycocktails',name:{tr:'Blue Drink',en:'Blue Drink',ru:'Голубой напиток'},desc:{tr:'Blue Curaçao, votka, Bacardi, taze limon suyu, Sprite',en:'Blue Curaçao, vodka, Bacardi, fresh lemon juice, sprite',ru:'Blue Curaçao, водка, Bacardi, свежий лимонный сок, Sprite'},price:''},
{category:'sexycocktails',name:{tr:'Aperol Spritz',en:'Aperol Spritz',ru:'Апероль Шприц'},desc:{tr:'Blue Curaçao',en:'Blue Curaçao',ru:'Blue Curaçao'},price:''}
  ];

  function render(cat, lang) {
    display.innerHTML = '';
    const items = menu.filter(i => i.category === cat);

    if (items.length === 0) {
      display.innerHTML = `<p style="text-align:center; padding:50px; color:#999;">${lang === 'tr' ? 'Yakında eklenecek...' : lang === 'en' ? 'Coming soon...' : 'Скоро...'}</p>`;
      return;
    }

    items.forEach((i, index) => {
      const div = document.createElement('div');
      div.className = 'menu-item';
      div.innerHTML = `
        <div style="flex:1; padding-right:10px;">
          <h3 class="item-name">${i.name[lang]}</h3>
          <p class="item-description">${i.desc?.[lang] || ''}</p>
        </div>
        <div class="item-price">${i.price ? i.price + '₺' : '--'}</div>
      `;
      display.appendChild(div);

      setTimeout(() => {
        div.style.opacity = '1';
        div.style.transform = 'translateY(0)';
      }, index * 50);
    });
  }

  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      currentCategory = btn.dataset.category;
      render(currentCategory, currentLang);
    });
  });

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      langButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentLang = btn.dataset.lang;

      document.querySelectorAll('[data-tr]').forEach(el => {
        const translation = el.getAttribute(`data-${currentLang}`);
        if (translation) el.textContent = translation;
      });

      render(currentCategory, currentLang);
    });
  });

  render(currentCategory, currentLang);
});
