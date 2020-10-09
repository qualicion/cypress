/// <reference types="cypress" />

const { TodoPage } = require("../../page-objects/todo-page");


describe('Navigate the TodoMVC app', () => {
    const todoPage = new TodoPage();

    beforeEach(() => {
        todoPage.navigate();
        todoPage.addTodo('Clean room');
 })

    it('should be able to add a new todo to the list', () => {
        todoPage.validateTodoText(0, "Clean room");
})

    it('should not be checked', () => {
        todoPage.validateToggleState(0, false);
})


describe('toggling todos', () => {
    it('should toggle test correctly', () => {
        todoPage.toggleTodo(0);
        todoPage.validateTodoCompletedState(0, true);
    })
})

    it('should be toggle the option entered', () => {
        cy.get('.toggle').click(); 
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through');
})

    it('should be able to clear completed items', () => {
        todoPage.toggleTodo(0);
        todoPage.clearCompleted();
        todoPage.validateNumberOfTodosShown(0);
     })
})