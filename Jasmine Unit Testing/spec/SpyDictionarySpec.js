/**
 * Created by Rahul on 5/18/2014.
 *
 * This contains the eg explaining use case of Spy in Jasmine Unit Testing
 */
require("../src/SpyDictionary.js");
describe("Person", function () {
    it("should use dictionary to say hello world", function () {
        var dictionary = new Dictionary();
        var person = new Person();
        spyOn(dictionary, "hello");
        spyOn(dictionary, "world");

        person.sayHelloWorld(dictionary);
        expect(dictionary.hello()).toHaveBeenCalled();
        expect(dictionary.world()).toHaveBeenCalled();
    });
});
