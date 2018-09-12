describe('Teste básico', function() {
  it('Visita o index', function() {
    // Visita a URL passada
    cy.visit('http://localhost/e2e-presentation/index.html');
  });

  it('Verifica o parágrafo do index', function() {
    // Checa se o element `.p-xs` contêm o texto passado
    cy.get('.p-xs').contains('Duis ullamco labore non ut et.');
  });

  it('Navega para a questão', function() {
    // Clica no elemento que contêm o texto "Question"
    cy.contains('Question').click();
    // Verifica se a URL é o parâmetro passado
    cy.url().should('be', 'http://localhost/e2e-presentation/question.html');
  });

  // Testa as questões
  it('Testa questão A', function() {
    cy.contains('label > span', 'A').click();
    cy.get('#js-answer-btn').click();
    cy.get('#js-answer').contains('Sua resposta foi A.');
  });

  it('Testa questão B', function() {
    cy.contains('label > span', 'B').click();
    cy.get('#js-answer-btn').click();
    cy.get('#js-answer').contains('Sua resposta foi B.');
  });

  it('Testa questão C', function() {
    cy.contains('label > span', 'C').click();
    cy.get('#js-answer-btn').click();
    cy.get('#js-answer').contains('Sua resposta foi C.');
  });

  it('Testa questão D', function() {
    cy.contains('label > span', 'D').click();
    cy.get('#js-answer-btn').click();
    cy.get('#js-answer').contains('Sua resposta foi D.');
  });
});