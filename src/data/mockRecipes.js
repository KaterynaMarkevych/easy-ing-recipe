import image1 from "../assets/popular_recipe1.svg";
import image2 from "../assets/popular_recipe2.jpg";
import image3 from "../assets/popular_recipe3.jpg";
import image4 from "../assets/popular_recipe4.svg";
import image5 from "../assets/popular_recipe5.jpg";
import image6 from "../assets/popular_recipe6.jpg";
import image8 from "../assets/popular_recipe8.jpg";
import image9 from "../assets/popular_recipe9.jpg";
import image10 from "../assets/popular_recipe10.jpg";
import image11 from "../assets/popular_recipe11.jpg";
import image12 from "../assets/popular_recipe12.jpg";
import image13 from "../assets/popular_recipe13.jpg";
import image14 from "../assets/popular_recipe14.svg";
import image15 from "../assets/popular_recipe15.jpg";
import userphoto101 from '../assets/user101.jpg';
import userphoto102 from '../assets/user_picture.jpg';
import userphoto103 from '../assets/user103.jpg'
const recipes = [
  {
    id: 'recipe1',
    name: 'Буряковий борщ',
    image: image1,
    ingredients: ['2шт буряк', '5шт картопля', '1 морква', '1 цибуля', '1 куряче філе','30г томатної пасти', '2.5л води','зелень'],
    rating: 4.5,
    time: 'від 30 хвилин до 1 години',
    portions:'4-6',
    cuisine_type: {
      diet: {
          безглютенова: true,
          безмолочна: true,
          vegetarian: false,
          vegan: false,
          низьковуглевондна: true
      },
      cuisine: {
        Італійська: false,
        Французька: false,
          Українська: true,
          Японська: false,
          Китайська: false,
          Індійська: false,
          Мексиканська: false
      }
    },
    description: 'Смачний український борщ з м’ясом і овочами.',
    nutrition: {
      calories: 250,
      protein: 7,
      fats: 8,
      carbs: 35,
    },
    instructions: [
      "Підготуйте овочі: наріжте буряк, капусту, моркву, цибулю та картоплю.Буряк очистити, та відварити до напівготовності хвилин 30. Остудити та натерти на крупній тертці",
      "Філе порізати на шматочки, картоплю почистити і подрібнити. М'ясо з картоплею додати до каструлі де варився буряк, варити хвилин 15-20.",
      "Цибулю подрібнити. Буряк цибулю тушкувати на вершковому маслі, в кінці додати томат.",
      "Зтушкований буряк додати до кастрюлі, додати спеції за смаком, долити води.",
      "Готуйте до готовності овочів, додайте зелень при подачі за бажанням."
    ],
    user: [
      {
        id: 101,
        name: "Diana Nelson",
        profilePhoto: userphoto101,
        bio: "Люблю готувати здорову їжу та експериментувати з інгредієнтами.",
        followers: 245,
        following: 180,
        recipesCount: 30,
      },
    ]
  },
  {
    id: "recipe2",
    name: 'Плов',
    image: image2,
    ingredients: ['500г рис довгозернистий', '500 г курка', '1шт морква', '1шт цибуля', '1шт часник', 'куркума', 'сіль перець'],
    rating: 4.8,
    time: 'від 1 години до 1 години 30 хвилин',
    portions:'4-6',
    description: 'Традиційний узбецький плов з рисом і м’ясом.',
    cuisine_type: {
      diet: {
          безглютенова:true,
          безмолочна: true,
          vegetarian: false,
          vegan: false,
          lowcarb: false
      },
      cuisine: {
          italian: false,
          french: false,
          ukrainian: false,
          japanese: false,
          chinese: false,
          indian: false,
          mexican: false,
          Узбецька: "Узбецька"
      }
    },
    nutrition: {
      calories: 350,
      protein: 15 ,
      fats: 12 ,
      carbs: 45,
    },
    instructions: [
      "Промийте рис кілька разів до прозорості води, залиште його у воді на 30 хвилин.",
      "Нарізання інгредієнтів.Моркву наріжте тонкою соломкою.Цибулю наріжте півкільцями.М’ясо наріжте середніми шматочками.",
      "У казані або глибокій сковороді розігрійте олію. Обсмажте м’ясо на сильному вогні до золотистої скоринки.",
      "Додайте цибулю, обсмажте до золотистого кольору. Потім додайте моркву та смажте 5-7 хвилин.",
      "Додайте спеції, добре перемішайте. Влийте воду, щоб вона покрила м’ясо та овочі.Зменшіть вогонь, накрийте кришкою та тушкуйте 20-30 хвилин.",
      "Злийте воду з рису, розкладіть його рівним шаром поверх овочів та м’яса. Вставте головку часнику посередині.Накрийте казан кришкою та готуйте на слабкому вогні 20 хвилин, доки рис не стане м’яким і вода не вбереться.",
      "Зніміть з вогню, залиште під кришкою на 10-15 хвилин. Перед подачею перемішайте."
    ],
    user: [
      {
      id: 102,
      name: "Андрій Петров",
      bio: "Традиційні рецепти з душею. Знаю всі секрети ідеального борщу.",
      followers: 530,
      following: 250,
      recipesCount: 45,
      profilePhoto: userphoto102,}
    ]
    
  },
  {
    id: "recipe3",
    name: 'Вареники з картоплею',
    image: image3,
    ingredients: ['500г борошно', '1шт яйце','3ст.л олія','1 ч.л сіль','6шт картопля', '2шт цибуля', 'сметана'],
    rating: 4.3,
    description: 'Смачні вареники з картоплею та підсмаженою цибулею.',
    time: '55 хвилин',
    portions:'4-5',
    cuisine_type: {
      diet: {
        безглютенова: true,
        безмолочна: true,
        вегетеріанська: true,
        веганська: true,
        низьковуглевондна: false
      },
      cuisine: {
          italian: false,
          french: false,
          Українська: "Українська",
          japanese: false,
          chinese: false,
          indian: false,
          mexican: false
      }
    },
    nutrition: {
      calories: 290,
      protein: 6,
      fats: 8,
      carbs: 50,
    },
    instructions: [
      "Приготування тіста: у глибокій мисці змішайте яйце, сіль, теплу воду(200мл) та 1 ст.л. олії. Поступово додавайте борошно, замішуючи м’яке, еластичне тісто.Загорніть його в плівку і залиште відпочити на 20-30 хвилин.",
      "Почистіть картоплю, відваріть у підсоленій воді до готовності.Цибулю дрібно наріжте та обсмажте до золотистого кольору.Додайте цибулю в пюре, посоліть, поперчіть і перемішайте.",
      "Розкачайте тісто тонким шаром (2-3 мм) і виріжте круги (наприклад, за допомогою склянки).У центр кожного кола покладіть ложку начинки.Скріпіть краї, щільно защіпаючи, щоб вареники не розкрилися під час варіння.",
      "Закип’ятіть велику каструлю з підсоленою водою.Опустіть вареники невеликими партіями у воду, перемішайте, щоб не прилипали.Варіть 3-5 хвилин після спливання.",
      "Вареники можна подавати зі смаженою цибулею, сметаною або вершковим маслом."
    ],
    user: [
      {
        id: 103,
        name: "Марія Коваленко",
        bio: "Подорожую світом через кулінарію. Особливий акцент на азійській кухні.",
        followers: 320,
        following: 200,
        recipesCount: 35,
        profilePhoto: userphoto103,
    }
  ]
  },
  {
    id: "recipe4",
    name: 'Олів’є',
    image: image4,
    ingredients: ['3 шт картопля', '2 шт морква', '4 шт яйця', '300 г ковбаса','3шт солоний огірок', '1банка горошок зелений','150г майонез','сіль перець' ],
    rating: 4.6,
    time: '50 хвилин',
    portions:'6-8',
    description: 'Класичний новорічний салат Олів’є.',
    cuisine_type: {
      diet: {
        безглютенова: false,
        безмолочна: false,
        вегетеріанська: false,
        веганська: false,
        низьковуглевондна: false
      },
      cuisine: {
          italian: false,
          french: false,
          Українська: "Українська",
          japanese: false,
          chinese: false,
          indian: false,
          mexican: false
      },
    },
    nutrition: {
      calories: 220,
      protein: 9,
      fats: 15,
      carbs: 12,
    },
    instructions: [
      "Відваріть картоплю і моркву в мундирі до готовності. Остудіть, почистіть і наріжте маленькими кубиками.",
      "Яйця зваріть круто (8-10 хвилин), остудіть у холодній воді, почистіть та наріжте кубиками.",
      "Bарену ковбасу і солоні огірки наріжте такими ж кубиками, як і овочі.",
      "У великій мисці з’єднайте нарізані картоплю, моркву, яйця, ковбасу, огірки, зелений горошок (без рідини) та дрібно нарізану цибулю (за бажанням).",
      "Заправте салат майонезом, посоліть і поперчіть за смаком. Добре перемішайте.Поставте в холодильник на 1-2 години перед подачею, щоб смаки змішалися."
    ],
    user: [
      {
      id: 102,
      name: "Андрій Петров",
      bio: "Традиційні рецепти з душею. Знаю всі секрети ідеального борщу.",
      followers: 530,
      following: 250,
      recipesCount: 45,
      profilePhoto: userphoto102,}
    ]
  },
  {
    id: "recipe5",
    name: 'Салат Цезар',
    image: image5,
    ingredients: ['300 г куряче філе', '1 пучок листя салату', '70 г сир пармезан','1 зубчик часнику', '2ст.л. олія', 'сіль та перець',
      '1 шт яйце','1 ч.л. діжонська гірчиця', '1 ст.л. лимонний сік','50 мл оливкова олія'],
    rating: 4.7,
    time: '40 хвилин',
    portions:'6-8',
    description: 'Популярний салат з куркою, сиром і спеціальним соусом.',
    cuisine_type: {
      diet: {
          glutenfree: false,
          dairyfree: false,
          vegetarian: false,
          vegan: false,
          lowcarb:false
      },
      cuisine: {
          Італійська: "Італійська",
          french: false,
          ukrainian: false,
          japanese: false,
          chinese: false,
          indian: false,
          mexican: false
      },
    },
    nutrition: {
      calories: 400 ,
      protein: 35,
      fats: 25,
      carbs: 20,
    },
    instructions: [
      "Наріжте батон або багет кубиками. Змішайте їх з 1-2 ст.л. оливкової олії та дрібно нарізаним часником.Викладіть на деко і запікайте в духовці при 180°C 7-10 хвилин до золотистої скоринки.",
      "Філе змастіть сіллю, перцем і невеликою кількістю оливкової олії. Обсмажте на гриль-сковороді або звичайній сковороді до готовності (по 4-5 хвилин з кожного боку). Дайте охолонути і наріжте смужками.",
      "ДВимийте, просушіть і порвіть листя салату руками на великі шматки.",
      "Приготування заправки(можна використати готову заправу Цезар):Відваріть яйце 1 хвилину у киплячій воді (або використовуйте лише сирі жовтки). У чашу блендера покладіть яйце, лимонний сік, гірчицю, анчоуси, часник і вустерширський соус. Поступово вливаючи оливкову олію, збивайте до утворення кремової консистенції. Посоліть і поперчіть за смаком.",
      "У великій мисці змішайте листя салату, курку та половину сухариків. Додайте заправку та акуратно перемішайте. Викладіть на тарілку, посипте рештою сухариків і натертим пармезаном."
    ],
    user: [
      {
        id: 101,
        name: "Diana Nelson",
        profilePhoto: userphoto101,
        bio: "Люблю готувати здорову їжу та експериментувати з інгредієнтами.",
        followers: 245,
        following: 180,
        recipesCount: 30,
      },
    ]
  },
  {
    id: "recipe6",
    name: 'Піца Маргарита',
    image: image6,
    ingredients: ['250 г борошно', '7 г сухі дріжді','1 ч.л цукор','3 ст.л. томатана паста', '1 зубчик часник','3 шт. помідори', '200 г моцарела', 'базилік', 'оливкова олія'],
    rating: 4.9,
    time: '40 хвилин',
    portions:'1',
    description: 'Класична італійська піца з томатами і моцарелою.',
    cuisine_type: {
      diet: {
        безглютенова: false,
        безмолочна: false,
        вегетеріанська: true,
        веганська: false,
        низьковуглевондна: false
      },
      cuisine: {
          Італійська: "Італійська",
          french: false,
          ukrainian: false,
          japanese: false,
          chinese: false,
          indian: false,
          mexican: false
      }
    },
    nutrition: {
      calories: 300,
      protein: 10,
      fats: 15 ,
      carbs: 35,
    },
    instructions: [
      "Приготування тіста. В теплій воді розчиніть цукор і сухі дріжджі. Дайте постояти 5-10 хвилин, поки дріжджі почнуть пінитися. Додайте сіль і оливкову олію, поступово додавайте борошно, замішуючи тісто. Замісіть еластичне тісто, накрийте його рушником і залиште на 1 годину в теплому місці для підйому.",
      "Приготування соусу. На сковороді розігрійте оливкову олію, додайте часник і обсмажте до аромату (1-2 хвилини). Додайте томатну пасту, сіль, перець і базилік. Перемішайте і варіть на слабкому вогні 5-7 хвилин. За бажанням, можна додати трохи води для отримання більш рідкої консистенції.",
      "Розігрійте духовку до 220°C. Після того, як тісто піднялося, розкачайте його на присипаній борошном поверхні до бажаного діаметра. Викладіть тісто на деко або пічну дошку, змащену оливковою олією.",
      "Рівномірно розподіліть томатний соус по тісту, залишаючи невеликий край. Наріжте моцарелу та помідори тонкими скибочками і викладіть на соус. Додайте кілька листочків свіжого базиліка.",
      "Печіть піцу в розігрітій духовці близько 10-12 хвилин, поки краї стануть золотистими, а сир розплавиться. Вийміть з духовки і, за бажанням, змастіть краєчки піци оливковою олією для блиску.",
      "Подавайте піцу гарячою, прикрасивши ще кількома листочками базиліка."
    ],
    user: [
      {
        id: 101,
        name: "Diana Nelson",
        profilePhoto: userphoto101,
        bio: "Люблю готувати здорову їжу та експериментувати з інгредієнтами.",
        followers: 245,
        following: 180,
        recipesCount: 30,
      },
    ]
  },
  {
    id: "recipe8",
    name: 'Томатний суп',
    image: image8,
    time: '40 хвилин',
    portions:'4',
    ingredients: ['8 шт. помідори', '1 шт. цибуля', '2 зубчики часник', '1 шт. морква', '750 мл бульйон (овочевий або курячий)', '1 ст.л. томатна паста', '2 ст.л. оливкова олія',
      'сіль, перець', '1 ч.л. цукор','1 ч.л. базилік', 'крем або сметана для подачі'
    ],
    rating: 4.2,
    description: 'Легкий і корисний суп з томатів і базиліку.',
    cuisine_type: {
      diet: {
        безглютенова: true,
        безмолочна: true,
        вегетеріанська: true,
        веганська: false,
        низьковуглевондна: false
      },
      cuisine: {
        Італійська: "Італійська",
        french: false,
        ukrainian: false,
        japanese: false,
        chinese: false,
        indian: false,
        mexican: false
      }
    },
    nutrition: {
      calories: 120,
      protein: 3,
      fats: 5,
      carbs: 15,
    },
    instructions: [
      "Якщо ви використовуєте свіжі помідори, зробіть на кожному хрестоподібний надріз, залийте їх кип'ятком на 1-2 хвилини, після чого зніміть шкіру та наріжте м'якоть. Цибулю наріжте дрібними кубиками, моркву — на тонкі кружечки або натріть на тертці, часник подрібніть.",
      "У великій каструлі або сковороді розігрійте оливкову олію. Додайте цибулю і часник, обсмажте на середньому вогні до прозорості (приблизно 5 хвилин). Додайте моркву і обсмажуйте ще 5 хвилин, щоб вона трохи пом'якшилась.",
      "Додайте нарізані помідори (або консервовані), томатну пасту, бульйон, сіль, перець, цукор (якщо використовуєте). Перемішайте, доведіть до кипіння, після чого зменшіть вогонь і тушкуйте 20-25 хвилин, поки овочі стануть м'якими. Якщо суп занадто густий, додайте ще бульйону або води.",
      "За допомогою блендера пюрируйте суп до однорідної консистенції. Якщо вам подобається більш текстурний суп, можна залишити кілька шматочків овочів.",
      "За потреби додайте ще сіль, перець, цукор або базилік за смаком. Подавайте гарячим, за бажанням додавши сметану або крем для більш ніжного смаку. Можна прикрасити свіжим базиліком."
    ],
    user: [
      {
      id: 102,
      name: "Андрій Петров",
      bio: "Традиційні рецепти з душею. Знаю всі секрети ідеального борщу.",
      followers: 530,
      following: 250,
      recipesCount: 45,
      profilePhoto: userphoto102,}
    ]
  },
  {
    id: "recipe9",
    name: 'Шашлик',
    image: image9,
    time: ' 4,5 годиин',
    portions:'6',
    ingredients: ['2 кг свинина', '4 шт. цибуля', '4 зубчики часник','200 мл мінеральна вода ', '3 ст.л. олія', '4 ст.л. лимонний сік (або лимони)','cіль','чорний перець', 'паприка','зелень'],
    rating: 4.9,
    description: 'Соковитий шашлик з маринованою свининою.',
    cuisine_type: {
      diet: {
        безглютенова: true,
        безмолочна: true,
        вегетеріанська: false,
        веганська: false,
        низьковуглевондна: false
      },
      cuisine: {
          italian: false,
          french: false,
          ukrainian: false,
          japanese: false,
          chinese: false,
          indian: false,
          mexican: false
      }
    },
    nutrition: {
      calories: 300,
      protein: 30,
      fats: 20,
      carbs: 5,
    },
    instructions: [
      "Наріжте м’ясо великими шматками (приблизно 3х3 см). Видаліть зайвий жир або плівки, якщо потрібно.",
      "Цибулю наріжте кільцями або півкільцями, часник подрібніть. У великій мисці змішайте м’ясо, цибулю, часник, лимонний сік, сіль, перець і спеції.Додайте олію, щоб спеції краще розподілилися. За бажанням влийте мінеральну воду, щоб м’ясо стало ще ніжнішим. Перемішайте все руками, добре втираючи маринад у м’ясо.",
      "Закрийте миску харчовою плівкою та поставте в холодильник мінімум на 3-4 години, краще на 8-12 годин.",
      "Замочіть дерев'яні шампури у воді на 30 хвилин, якщо використовуєте їх, щоб вони не згоріли. Розпаліть вугілля, дочекайтеся, поки воно стане гарячим, але без полум’я.",
      "Нанизуйте шматки м’яса на шампури, чергуючи їх із кільцями цибулі, якщо бажаєте. Викладайте шампури над вугіллям, періодично перевертаючи. Готуйте приблизно 15-20 хвилин, залежно від розміру шматків, поки м’ясо не стане рум’яним і добре просмаженим.",
      "Подавайте гарячим, прикрашеним свіжою зеленню. Добре поєднується з лавашем, свіжими овочами або соусами, такими як аджика або сацебелі."
    ], 
    user: [
      {
        id: 103,
        name: "Марія Коваленко",
        profilePhoto: userphoto103,
        bio: "Подорожую світом через кулінарію. Особливий акцент на азійській кухні.",
        followers: 320,
        following: 200,
        recipesCount: 35,
    }
  ]
  },
  {
    id: "recipe10",
    name: 'Капусняк',
    image: image10,
    time: ' 2 годиин',
    portions:'4-6',
    ingredients: ['500 г свинина','500 г квашена капуста', '4 шт. картопля','1 шт. морква', '1 шт. цибуля' ,' лавровий лист', 'сіль', 'перець','сметана для подачі' ],
    rating: 4.5,
    description: 'Традиційний український суп з капустою і салом.',
    cuisine_type: {
      diet: {
        безглютенова: true,
        безмолочна: true,
        вегетеріанська: false,
        веганська: false,
        низьковуглевондна: false
      },
      cuisine: {
          italian: false,
          french: false,
          ukrainian: "Українська",
          japanese: false,
          chinese: false,
          indian: false,
          mexican: false
      }
    },
    nutrition: {
      calories: 180,
      protein: 10,
      fats: 8,
      carbs: 20,
    },
    instructions: [
      "Промийте м’ясо, наріжте великими шматками. Покладіть м’ясо в каструлю з 2,5-3 літрами води. Доведіть до кипіння, зніміть піну. Додайте лавровий лист, варіть на середньому вогні близько 1 години до готовності м’яса.",
      "Почистіть картоплю, наріжте кубиками. Додайте її в бульйон, варіть 10 хвилин.",
      "Цибулю наріжте дрібними кубиками, моркву натріть на тертці. На сковороді розігрійте олію, обсмажте цибулю та моркву до м’якості. Додайте томатну пасту (за бажанням) і тушкуйте ще 2-3 хвилини.",
      "Якщо капуста дуже кисла, промийте її під водою. Додайте капусту до супу разом із обсмаженими овочами. Варіть ще 15-20 хвилин, поки всі інгредієнти не стануть м’якими.",
      "Додайте сіль і перець за смаком. Якщо м’ясо було на кістці, зніміть його, наріжте і поверніть в суп.",
      "Розлийте гарячий капусняк по тарілках. Подавайте зі сметаною та свіжим хлібом."
    ],
    user: [
      {
        id: 103,
        name: "Марія Коваленко",
        profilePhoto: userphoto103,
        bio: "Подорожую світом через кулінарію. Особливий акцент на азійській кухні.",
        followers: 320,
        following: 200,
        recipesCount: 35,
    }
  ]
  },
  {
    id: "recipe11",
    name: 'Сирники',
    image: image11,
    ingredients: ['сир', 'борошно', 'яйце', 'сметана'],
    rating: 4.8,
    description: 'Пишні сирники з домашнього сиру.',
    cuisine_type: {
      diet: {
        безглютенова: false,
        безмолочна: false,
        вегетеріанська: true,
        веганська: false,
        низьковуглевондна: false
      },
      cuisine: {
          Італійська: false,
          Французька: false,
          Українська: "Українська",
          Японська: false,
          Китайська: false,
          Індійська: false,
          Мексиканська: false
      }
    },
    nutrition: {
      calories: 180,
      protein: 6,
      fats: 12,
      carbs: 10,
    },
    instructions: [
      
    ],
    user: [
      {
        id: 103,
        name: "Марія Коваленко",
        profilePhoto: userphoto103,
        bio: "Подорожую світом через кулінарію. Особливий акцент на азійській кухні.",
        followers: 320,
        following: 200,
        recipesCount: 35,
    }
  ]
  },
  {
    id: "recipe12",
    name: 'Баклажани',
    image: image12,
    ingredients: ['баклажани', 'помідори', 'часник', 'оливкова олія'],
    rating: 4.3,
    description: 'Смачні баклажани з томатним соусом та спеціями.',
    cuisine_type: {
      diet: {
        безглютенова: false,
        безмолочна: false,
        вегетеріанська: true,
        веганська: false,
        низьковуглевондна: false
      },
      cuisine: {
        Італійська: false,
        Французька: false,
        Українська: false,
        Японська: false,
        Китайська: false,
        Індійська: false,
        Мексиканська: false
      }
    },
    user: [
      {
        id: 101,
        name: "Diana Nelson",
        profilePhoto: userphoto101,
        bio: "Люблю готувати здорову їжу та експериментувати з інгредієнтами.",
        followers: 245,
        following: 180,
        recipesCount: 30,
      },
    ]
  },
  {
    id: "recipe13",
    name: 'Різотто',
    image: image13,
    ingredients: ['рис', 'гриби', 'цибуля', 'пармезан'],
    rating: 4.7,
    description: 'Італійське різотто з вершковим смаком і грибами.',
    cuisine_type: {
      diet: {
        безглютенова: false,
        безмолочна: true,
        вегетеріанська: true,
        веганська: false,
        низьковуглевондна: false
      },
      cuisine: {
        Італійська: false,
        Французька: false,
        Українська: false,
        Японська: false,
        Китайська: false,
        Індійська: false,
        Мексиканська: false
      }
    },
    user: [
      {
        id: 101,
        name: "Diana Nelson",
        profilePhoto: userphoto101,
        bio: "Люблю готувати здорову їжу та експериментувати з інгредієнтами.",
        followers: 245,
        following: 180,
        recipesCount: 30,
      },
    ]
  },
  {
    id: "recipe14",
    name: 'Млинці',
    image: image14,
    ingredients: ['борошно', 'яйце', 'молоко', 'масло'],
    rating: 4.6,
    description: 'Домашні млинці, які ідеально підходять для сніданку.',
    cuisine_type: {
      diet: {
        безглютенова: false,
        безмолочна: false,
        вегетеріанська: true,
        веганська: false,
        низьковуглевондна: false
      },
      cuisine: {
        Італійська: false,
        Французька: false,
        Українська: false,
        Японська: false,
        Китайська: false,
        Індійська: false,
        Мексиканська: false
      }
    },
    user: [
      {
        id: 101,
        name: "Diana Nelson",
        profilePhoto: userphoto101,
        bio: "Люблю готувати здорову їжу та експериментувати з інгредієнтами.",
        followers: 245,
        following: 180,
        recipesCount: 30,
      },
    ]
  },
  {
    id: "recipe15",
    name: 'Бісквітний торт',
    image: image15,
    ingredients: ['борошно', 'цукор', 'яйце', 'ваніль'],
    rating: 4.8,
    description: 'Ніжний бісквітний торт з легкою текстурою.',
    cuisine_type: {
      diet: {
        безглютенова: false,
        безмолочна: false,
        вегетеріанська: true,
        веганська: false,
        низьковуглевондна: false
      },
      cuisine: {
          Італійська: false,
          Французька: false,
          Українська: false,
          Японська: false,
          Китайська: false,
          Індійська: false,
          Мексиканська: false
      }
    },
    user: [
      {
        id: 101,
        name: "Diana Nelson",
        profilePhoto: userphoto101,
        bio: "Люблю готувати здорову їжу та експериментувати з інгредієнтами.",
        followers: 245,
        following: 180,
        recipesCount: 30,
      },
    ]
  }
];

export default recipes;
