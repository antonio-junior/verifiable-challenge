Cypress.Commands.add('login', () => {
    cy.visit('https://discovery-staging.verifiable.com/')
 
    if (cy.isElementExist('.login')) {
        cy.get('[data-cy=userEmail]').type(Cypress.env('email'))
        cy.get('[data-cy=userPassword]').type(Cypress.env('password'))
        cy.get('[data-cy=signIn]').click()
    }
})

Cypress.Commands.add('isElementExist', (element) => {

    cy.window().then((win) => {
        const identifiedElement = win.document.querySelector(element)
        cy.log('Object value = ' + identifiedElement)
    });
})

Cypress.Commands.add('restoreProviders', () => {
    cy.request({
        method: 'POST',
        url: '/auth/token/password',
        body: {
            email: Cypress.env('email'),
            password: Cypress.env('password'),
        },
    }).then(tokenResponse => {
        cy.request({
            method: 'GET',
            headers: {
                Authorization: `Bearer ${tokenResponse.body.token}`
            },
            url: '/providers'
        }).then(providersResponse => {
            providersResponse.body.items.forEach(item => {
                cy.request({
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${tokenResponse.body.token}`
                    },
                    url: `/providers/${item.id}`
                });
            });
        })

        cy.request({
            method: 'POST',
            headers: {
                Authorization: `Bearer ${tokenResponse.body.token}`
            },
            body: {
                firstName: 'Provider EDIT',
                lastName: 'Example',
            },
            url: '/providers'
        })

        cy.request({
            method: 'POST',
            headers: {
                Authorization: `Bearer ${tokenResponse.body.token}`
            },
            body: {
                firstName: 'Provider DELETE',
                lastName: 'Example',
            },
            url: '/providers'
        })
    })    
})
