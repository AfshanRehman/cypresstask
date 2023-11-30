
// Task 1 Automation Script


describe( " Test Task 1 Script" , function(){
  it(  " Testacase 1" , function()
  {
  
  cy.visit("https://demoqa.com/");
  cy.get(':nth-child(2) > :nth-child(1) > .card-body > h5').click();
  cy.get(':nth-child(2) > .element-list > .menu-list > #item-0').click();
  cy.get('#firstName').type("Cowlar");
  cy.get('#lastName').type("Developer");
  cy.get('#userEmail').type("qaengineer@cowlar.com");
  cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').type("Male");
  cy.get('#userNumber').type("0123456789");
  cy.get('.subjects-auto-complete__value-container').type("ComputerScience");
  cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label').type("Music");
  cy.get('#currentAddress').type("Address1");

  //verification

  cy.get('#firstName').contains("Cowlar");
  cy.get('#lastName').contains("Developer");
  cy.get('#userEmail').contains("qaengineer@cowlar.com");
  cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').contains("Male");
  cy.get('#userNumber').contains("0123456789");
  cy.get('.subjects-auto-complete__value-container').contains("ComputerScience");
  cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label').contains("Music");
  cy.get('#currentAddress').contains("Address1");
  


  




  /*cy.get('#firstName').contains("Cowlar");
  cy.get('#lastName').contains("Developer");
  cy.get('#userEmail').contains("qaengineer@cowlar.com");
  cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').contains("Male");
  cy.get('#userNumber').contains("0123456789");
  cy.get('.subjects-auto-complete__value-container').contains("ComputerScience");
  cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label').contains("Music");
  cy.get('#currentAddress').contains("Address1");


  */
  





  
  
  
  });
  
  
  
  
  });