

// Task 2 Automation Script 
describe( " Test Task 2 Script" , function(){
    it(  " Testcase 1" , function()
    {

        cy.visit("https://demoqa.com/");
        cy.url().should('contains', 'https://demoqa.com/');
        cy.get('.category-cards > :nth-child(5)').click();
        cy.url().should('contains', 'https://demoqa.com/interaction');

        //cy.get('.left-pannel').find("nth-child(1) > .group-header > .header-wrapper");

        //cy.get('.left-nav>.nav').find('>li')

        cy.get('.left-pannel').contains("Elements");
        cy.get('.left-pannel').contains("Forms");
        cy.get('.left-pannel').contains("Alerts, Frame & Windows");
        cy.get('.left-pannel').contains("Widgets");
        cy.get('.left-pannel').contains("Interactions");


        



        cy.get(':nth-child(5) > .element-list > .menu-list > #item-2 > .text').click().contains("Resizable");




        //cy.get('.playgound-header').contains("ResiZable");
        
        //cy.get(selector).invoke('width').should('be.lt', 355);

        cy.get('#resizableBoxWithRestriction').invoke('width').should('be.lt', 200);
        cy.get('#resizableBoxWithRestriction').invoke('height').should('be.lt', 200);










    });
});