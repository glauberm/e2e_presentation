import { Selector } from 'testcafe';

fixture `Teste básico`
    .page `http://localhost:8080`;

// Visita a URL passada
test('Carregamento do index', async t => {});

test('Texto do index', async t => {
    // Checa se o element `.p-xs` contêm o texto passado
    await t
        .expect(Selector('.p-xs').innerText)
        .eql('Duis ullamco labore non ut et.');
});

test('Navegação para a questão', async t => {
    // Clica no link para question
    await t.click('a[href="question.html"]');

    // Verifica se a URL é o parâmetro passado
    const location = await t.eval(() => window.location);
    await t.expect(location.pathname).eql('/question.html');
});

// Testa as questões
test('Questões', async t => {
    // Clica no link para question
    await t.click('a[href="question.html"]');

    for (let i = 0; i < 4; i++) {
        const char = String.fromCharCode(65 + i);
        // Clica no radio e no botao
        await t
            .click('input[value="' + char + '"]')
            .click('#js-answer-btn');
    
        // Checa se a mensagem esta certa
        await t
            .expect(Selector('#js-answer').innerText)
            .eql('Sua resposta foi ' + char + '.');
    }
});
