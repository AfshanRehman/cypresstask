// Task 2 Automation Script 
describe( " Test Task 3 Script" , function(){
    it(  " Testcase 1" , function()
    {

        cy.visit("https://demoqa.com/");
        cy.url().should('contains', 'https://demoqa.com/');
        //cy.get(':nth-child(6) > :nth-child(1) > .card-up').click();
        //cy.url().should('contains', 'https://demoqa.com/books ');
       // cy.get(':nth-child(6) > .element-list > .menu-list > #item-2').click().contains("Book Store");
       // cy.get('#see-book-Understanding\ ECMAScript\ 6 > a').click();
      // cy.get(':nth-child(8) > .rt-tr > :nth-child(2)').click();
      // cy.get('#see-book-Understanding\ ECMAScript\ 6 > a').click();
      cy.get(':nth-child(6) > :nth-child(1) > .card-up').click();
      cy.get('.playgound-header').contains("Book Store");
      //cy.get('#see-book-Understanding\ ECMAScript\ 6 > a').click();
      //cy.contains('Hello, World').click();


      /* cy.visit('https://demoqa.com/books?book=9781593277574');


       cy.intercept(
        {
          method: 'GET',
          url: 'https://demoqa.com/BookStore/v1/Book?ISBN=9781593277574'
        },
        {
          statusCode: 200,
          statusMessage: 'Success',
          body: {
            "isbn": "9781593277574",
            "title": "Understanding ECMAScript 6",
            "subTitle": "The Definitive Guide for JavaScript Developers",
            "author": "Nicholas C. Zakas",
            "publish_date": "2016-09-03T00:00:00.000Z",
            "publisher": "No Starch Press",
            "pages": 352,
            "description": "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that E",
            "website": "https://leanpub.com/understandinges6/read"
          

          },
        }
      ).as('interceptedRequest');

      
  
    


       
*/


  

    

  //  it(  " Testcase 2 " , function()
    //{

        
       //cy.visit('https://demoqa.com/books?book=9781593277574')

       cy.intercept(
        {
          method: 'GET',
          url: 'https://demoqa.com/BookStore/v1/Book?ISBN=9781593277574'
        },
        {
          statusCode: 200,
          statusMessage: 'Success',
          body: {
            "isbn": "9781593277574",
            "title": "Understanding ECMAScript 6",
            "subTitle": "The Definitive Guide for JavaScript Developers",
            "author": "Nicholas C. Zakas",
            "publish_date": "2016-09-03T00:00:00.000Z",
            "publisher": "No Starch Press",
            "pages": 352,
            "description": "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that E",
            "website": "https://leanpub.com/understandinges6/read"
          

          },
        }
      ).as('interceptedRequest');




      
});

      //cy.log( response.body);

  

    });
    

//});
