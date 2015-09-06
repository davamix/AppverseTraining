//
// test/e2e/controllers/controllersSpec.js
//
describe("E2E: Testing todo", function () {

    beforeEach(function () {
        browser().navigateTo('/');
    });

    it('should have a working todo page ', function () {
        browser().navigateTo('#/todo');
        expect(browser().location().path()).toBe("/todo");
        expect(element('[class="lead"]').html()).toContain('todo');
    });

});
