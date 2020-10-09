/// <reference types="cypress" />

const { TodoPage } = require("../../page-objects/todo-page");

describe('Filtering', () => {
    const todoPage = new TodoPage();

    beforeEach(() => {
        todoPage.navigate()
        todoPage.addTodo('Clean room')
        todoPage.addTodo('Learn JavaScript')
        todoPage.addTodo('Use Cypress')
        todoPage.toggleTodo(1)
    })

    it('should filter active todos', () => {
        todoPage.showOnlyActiveTodos();
        todoPage.validateNumberOfTodosShown(2);
    })

    it('should filter completed todos', () => {
        todoPage.showOnlyCompletedTodos();
        todoPage.validateNumberOfTodosShown(1);
    })

    it('should filter All todos', () => {
        todoPage.showAllTodos();
        todoPage.validateNumberOfTodosShown(3);
    })
})