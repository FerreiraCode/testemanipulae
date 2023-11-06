import * as variaveis from '../support/variaveis';
import 'cypress-file-upload';




describe('EnvioDeReceita', () => {
  it('Receita', () => {

    cy.visit(variaveis.url)

    cy.get('input[type="file"]').should('exist');
    cy.get('input[type="file"]').attachFile(variaveis.filePath);
  
    cy.get('input[placeholder="00000-000"]').should('exist');
    cy.get('input[placeholder="00000-000"]').type(variaveis.novoCep);
    cy.get('input[name="email"]').type(variaveis.email);
    cy.get('input[name="name"]').type(variaveis.nome);
    cy.get('input[type="tel"]').type(variaveis.numeroTelefone);

    cy.get('button[type="submit"]').should('exist');
    cy.get('span[aria-hidden="true"]').click();
    cy.get('button[type="submit"]').click();
   


    cy.contains('Receita enviada').should('exist')




  });


});
