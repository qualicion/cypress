export class TodoPage {
    navigate(){
        cy.visit('http://todomvc-app-for-testing.surge.sh/');
    }

    addTodo(todoText){
        cy.get('.new-todo', {timeout: 6000}).type(todoText + "{enter}");
    }

    validateTodoText(todoIndex, expectedText){
        cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`).should('have.text', expectedText);
    }

    validateToggleState(todoIndex, shouldBeToggled) {
        const label = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`);
        label.should(`${shouldBeToggled ? '' : 'not.'} be.checked`);
    }
}