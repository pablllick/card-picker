'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Decks',
      [
        {
          name: 'Огурцы',
        },
        {
          name: 'Паштет',
        },
        {
          name: 'Котики',
        },
        {
          name: 'Алкогольные напитки',
        },
        {
          name: 'React',
        },
      ],
      {},
    );
    await queryInterface.bulkInsert(
      'Cards',
      [
        {
          question: 'Что каждый день приносит Сергей?',
          answer: 'Огурцы',
          deckID: 1,
        },
        {
          question: 'Кому мы благодарны за огурцы?',
          answer: 'Сергею',
          deckID: 1,
        },
        {
          question: 'Чьи огурцы самые вкусные?',
          answer: 'Сергея',
          deckID: 1,
        },
        {
          question: 'Где растут огурцы Сергея? (на ...)',
          answer: 'На даче',
          deckID: 1,
        },
        {
          question: 'Самая известная фирма Паштета? (название фирмы на английском)',
          answer: 'Hame',
          deckID: 2,
        },
        {
          question: 'Если Паша есть паштет, считается ли это каннибализмом? (Да/Нет)',
          answer: 'Да',
          deckID: 2,
        },
        {
          question: 'Какой паштет готовят из печени и жира?',
          answer: 'Фуа-гра',
          deckID: 2,
        },
        {
          question:
            'Какой паштет часто используется как закуска на праздничных столах? (вид паштета)',
          answer: 'Куриный',
          deckID: 2,
        },
        {
          question: 'Котики самые милые создания на свете? (Да/Нет)',
          answer: 'Да',
          deckID: 3,
        },
        {
          question: 'Все любят смотреть видео с котиками? (Да/Нет)',
          answer: 'Да',
          deckID: 3,
        },
        {
          question: 'Хотел бы ты завести котика? (Да/Нет)',
          answer: 'Да',
          deckID: 3,
        },
        {
          question: 'Котики? (Да/Нет)',
          answer: 'Да',
          deckID: 3,
        },
        {
          question: 'С каким алкоголем был связан Сергей',
          answer: 'Пиво',
          deckID: 4,
        },
        {
          question: 'Водка без пива денги на ...',
          answer: 'Ветер',
          deckID: 4,
        },
        {
          question: 'Любимый напиток Джека Воробья',
          answer: 'Ром',
          deckID: 4,
        },
        {
          question: 'В каком алкоголе истина',
          answer: 'Вино',
          deckID: 4,
        },
        {
          question:
            'Алкоголь выводится из организма за 21 день, т.е. ... (промежуток времени)',
          answer: 'Никогда',
          deckID: 4,
        },
        {
          question:
            'Какой алкогольный напиток чаще всего ассоциируется с празднованием Нового года?',
          answer: 'Шампанское',
          deckID: 4,
        },
        {
          question:
            'Какой хук используется для добавления состояния в функциональные компоненты React?',
          answer: 'useState',
          deckID: 5,
        },
        {
          question:
            'Какой хук позволяет выполнять побочные эффекты в функциональных компонентах?',
          answer: 'useEffect',
          deckID: 5,
        },
        {
          question:
            'Какой хук используется для мемоизации значений и предотвращения их пересчета при каждом рендере?',
          answer: 'useMemo',
          deckID: 5,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
