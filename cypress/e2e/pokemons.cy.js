describe('Тестирование покупки нового скина на https://pokemonbattle.me', function () {
   it('Проверка, что при вводе правильного логина и пароля происходит авторизация', function () {
        cy.visit('https://pokemonbattle.me/login');
        cy.get(':nth-child(1) > .auth__input').type('ms.gerus@yandex.ru'); //Впишите свой логин!
        cy.get('#password').type('A1702s93'); //Впишите свой пароль!
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click(); //Сложный селектор, выбирает первый из скинов, доступных к покупке, исключая уже текущий скин
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5100000000000008');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1224');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('German Dolnikov');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__field-defolt-for-success').contains('Покупка прошла успешно')



   })
})