describe('CALCULADORA DE STRINGS', ()=>{
    it('devuelve 0 para una cadena vacia', ()=>{
        cy.visit("/");
        cy.get("#input").type(" ");
        cy.get("#calc-form").submit();
        cy.get("#result").should("contain","0");
    });

    it('devuelve el numero mismo cuando solo hay 1 input', () => {
        cy.visit("/");
        cy.get('#input').clear().type('2');
        cy.get("#calc-form").submit();
        cy.get("#result").should("contain","2");
      });

    it('devuelve la suma de 2 numeros separados por comas', () => {
      cy.visit("/");
      cy.get('#input').clear().type('1,2');
      cy.get("#calc-form").submit();
      cy.get("#result").should("contain","3");
    });

    it('devuelve la suma de 3 numeros separados por comas', () => {
        cy.visit("/");
        cy.get('#input').clear().type('2,4,8');
        cy.get("#calc-form").submit();
        cy.get("#result").should("contain","14");
      });
    
    it('devuelve la suma de 2 numeros separados por comas', () => {
      cy.visit("/");
      cy.get('#input').clear().type('1-2');
      cy.get("#calc-form").submit();
      cy.get("#result").should("contain","3");
    });
  
});