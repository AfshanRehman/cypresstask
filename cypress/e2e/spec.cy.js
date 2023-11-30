describe("First Test Suite" , function()
    {


        it(" valid login Testcase" , function()
        {
            cy.visit("https://practicetestautomation.com/practice-test-login/");
            cy.get('#username').type("student");
            cy.get('#password').type("Password123");
            cy.get('#submit').click();
            cy.url().should('contains', 'practicetestautomation.com/logged-in-successfully/');
            cy.get('strong').contains("Congratulations student. You successfully logged in!");
            cy.get('.wp-block-button__link').should("exist")

        });
    });
