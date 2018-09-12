describe('Teste básico', function() {
  it('Visita o index', function() {
    // Visita a URL passada
    cy.visit('/');
  });

  it('Verifica o parágrafo do index', function() {
    // Checa se o element `.p-xs` contêm o texto passado
    cy.get('.p-xs').contains('Duis ullamco labore non ut et.');
  });

  it('Navega para a questão', function() {
    // Clica no elemento que contêm o texto "Question"
    cy.get('a[href="question.html"]').click();
    // Verifica se a URL é o parâmetro passado
    cy.url().should('be', '/question.html');
  });

  // Testa as questões
  for (let i = 0; i < 4; i++) {
    const char = String.fromCharCode(65 + i);

    it('Testa questão ' + char, function() {
      cy.get('input[value="' + char + '"]').click();
      cy.get('#js-answer-btn').click();
      cy.get('#js-answer').contains('Sua resposta foi ' + char + '.');
    });
  }
});