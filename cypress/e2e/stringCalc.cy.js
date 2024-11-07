describe('CALCULADORA DE STRINGS', ()=>{
    it('devuelve 0 para una cadena vacia', ()=>{
        cy.visit("/");
        cy.get("#input").type(" ");
        cy.get("#calc-form").submit();
        cy.get("#result").should("contain","0");
    });
});