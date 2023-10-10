describe('Тестирование страницы https://login.qa.studio/', function () {
   it('Проверка, что при вводе правильного логина и пароля происходит авторизация', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton').should('exist');
   })
   it('Проверка логики восстановления пароля', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#forgotEmailButton').click();
      cy.get('#mailForgot').type('german1@dolnikov.ru');
      cy.get('#restoreEmailButton').click();
      cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
      cy.get('#exitMessageButton').should('exist');
   })
   it('Проверка, что при вводе НЕправильного логина и пароля не происходит авторизация', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('german1@dolnikov.ru');
      cy.get('#pass').type('iLoveqastudio1');
      cy.get('#loginButton').click();
      cy.get('#messageHeader').contains('Такого логина или пароля нет');
      cy.get('#exitMessageButton').should('exist');
   })
   it('Проверка, что при вводе правильного логина и НЕправильного пароля не происходит авторизация', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('german@dolnikov.ru');
      cy.get('#pass').type('iLoveqastudio2');
      cy.get('#loginButton').click();
      cy.get('#messageHeader').contains('Такого логина или пароля нет');
      cy.get('#exitMessageButton').should('exist');
   })
   it('Проверка, что при вводе логина без "@"и правильного пароля не происходит авторизация', function () {
      cy.visit('https://login.qa.studio/');
      cy.get('#mail').type('germandolnikov.ru');
      cy.get('#pass').type('iLoveqastudio1');
      cy.get('#loginButton').click();
      cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
   })
   it('Проверка на приведение к lowercase', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton').should('exist');
   })
})
