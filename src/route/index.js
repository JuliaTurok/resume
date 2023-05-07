// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

var header = {
  address: 'м. Львів, вул. Лисенка 3А',
  name: {
    firstname: 'Ivan',
    lastname: 'Karas',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
}
var footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: ' Resume / Summary',
    },
    header,
    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
                    work on a new project I learn the domain and try to understand the idea of the project. Good team
                    player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
                    tournament position, goals etc), analyzing by simple mathematics models and preparing probability
                    for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },
    footer,
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: ' Resume / Skills',
    },
    header,
    main: {
      hobbies: [
        { name: 'Cycling', isMain: false },
        { name: 'Singing', isMain: true },
        { name: 'Dancing', isMain: false },
      ],
      skills: [
        { name: 'HTML', point: 10, isTop: true },
        { name: 'Handlebars', point: 10 },
        { name: 'VS Code', point: 10, isTop: true },
        { name: 'GIT', point: 10, isTop: false },
        { name: 'Terminal', point: 10 },
        { name: 'NPM', point: 10 },
        { name: 'React JS', point: 0 },
        { name: 'PHP', point: null },
      ],
    },
    footer,
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    page: {
      title: ' Resume / Education',
    },
    header,
    main: {
      certificates: [
        { name: 'Modern technologies', id: 3 },
        { name: 'IT', id: 2 },
        { name: 'Design', id: 1 },
      ],
      educations: [
        {
          name: 'Massachusetts Institute of Technology',
          isEnd: true,
        },

        { name: 'University of Cambridge', isEnd: false },

        { name: 'Stanford University', isEnd: true },

        { name: 'University of Oxford', isEnd: false },

        { name: 'Harvard University', isEnd: true },
      ],
    },
    footer,
  })
})

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані
    layout: 'big',
    page: {
      title: ' Resume / Work',
    },
    header,
    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT-Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,
          projects: [
            {
              stackAmount: 3,
              awardAmount: 5,
              name: 'Resume',
              url: 'https://resume.com.ua/',
              about: 'Airbnb competitor',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Nodejs',
                },
              ],
              awards: [
                {
                  name: 'Background',
                },
                {
                  name: 'Preparing SEO optiized page',
                },
              ],
            },
          ],
        },
      ],
    },
    footer,
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
