import { buttonIdentifiers } from "../support/util/constants";

function setRequiredFields() {
    //Sets Budget as AUD
    cy.get('#select-currencyId > .react-select__control > .react-select__value-container').click()
    cy.get('#react-select-2-option-0').click() 

    //sets Product Distribution type
    cy.get('[id$="select-productDistributionType"]').click()
    cy.get('#react-select-3-option-1').click()

    //sets Location as Australia
    cy.get('#select-desiredLocation > .react-select__control').click()
    cy.get('#react-select-6-option-2').click()
}

describe('Get Quote page - Campaign creation ', () => {
    it('Submits a quote for influencer type campaign', () => {
        cy.visit('https://vamp.vampdashstaging.com/campaign/create/quote')

       //checks Welcome to Quote page is opened
        cy.get('[data-cy=campaign-header]')
        .should('be.visible')
        cy.log('Welcome to Quote page is opened')

        //cy.get('Save quote').click()
        cy.get('.eDCTNr').click()

        //checks for error messages
        cy.get('[data-cy=input-error]')
        .should('be.visible')
        .and("contain",'This value is required')
        cy.log('Required validations have been fired')

        //sets Age as 100
        cy.get('#select-desiredAgeRanges > .react-select__control').click()
        cy.get('#react-select-4-option-5').click()

        //sets Gender as All
        cy.get('#select-desiredGenders > .react-select__control').click()
        cy.get('#react-select-5-option-0').click()
        
        setRequiredFields();

        //sets Brand handle
        cy.get('.bCYBLE > .gdbLrW > .jXBclO > .sc-crrsfI').click().type('test')

        //cy.get('[data-cy=objective-BLEND]').click()
        cy.get(':nth-child(3) > :nth-child(1) > .childrenWrapper > .kCpdp').click()

        //Clicks Save quote button
        cy.get('.eDCTNr').click()
        
        //Save dialog pop up
        cy.get('[data-cy="dialog"] > .sc-eCssSg').should('be.visible')
        cy.get('.dialog-popup__wrapper-btns > .eDCTNr').should('be.visible')
        cy.get('.dialog-popup__wrapper-btns > .eDCTNr').click()

        cy.get('input[name="name"]').type('test')
        cy.get('input[name="email"]').type('qatest.demosocial@test.com')
        //cy.get('.dialog-popup__wrapper-btns > .eDCTNr').click()
        cy.contains('Save').click()
        cy.log('Influencer campaign testcase passed')
    }) 

    it('Creates a content campaign', () => {    
        cy.reload()
        cy.log('Start of content type campaign testcase')
        cy.get(':nth-child(1) > .cshnUt > .dHDEsf > .sc-hHftDr > :nth-child(2) > .childrenWrapper > .kCpdp').click()
    
        //checks for image and video bar visibility
        cy.get('[data-cy="performance-stat-imageContent"]')
        .should('be.visible')

        cy.get('[data-cy="performance-stat-videoContent"]')
        .should('be.visible')
        cy.log('Verified - social channel bar is not visible')

        //Sets Budget as AUD
        cy.get('#select-currencyId > .react-select__control > .react-select__value-container').click()
        cy.get('#react-select-2-option-0').click() 

        //sets Product Distribution type
        cy.get('[id$="select-productDistributionType"]').click()
        cy.get('#react-select-3-option-1').click()

        //set Location
        cy.get('#select-desiredLocation > .react-select__control').click()
        cy.get('#react-select-9-option-2').click()
       
        //sets Gender All
        cy.get('#select-desiredGenders > .react-select__control').click()
        cy.get('#react-select-8-option-0').click()

        //sets Age as 100
        cy.get('#select-desiredAgeRanges > .react-select__control').click()
        cy.get('#react-select-7-option-5').click()
        
        //clicks save quote button
        cy.get('.eDCTNr').click()
        
        //Fill save quote dialog values
        cy.get('[data-cy="dialog"] > .sc-eCssSg').should('be.visible')
        cy.get('input[name="name"]').type('test')
        cy.get('input[name="email"]').type('qatest.democontent@test.com')
        cy.get('.dialog-popup__wrapper-btns > .eDCTNr').click()
        
        cy.log('Content campaign testcase passed')
    })     
})