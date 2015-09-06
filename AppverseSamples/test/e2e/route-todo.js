/*jshint node:true */
'use strict';

describe("E2E: Testing Routes todo", function () {

    it('should have a working /todo route', function () {
        browser().navigateTo('#/todo');
        expect(browser().location().path()).toBe("/todo");
    });

});
