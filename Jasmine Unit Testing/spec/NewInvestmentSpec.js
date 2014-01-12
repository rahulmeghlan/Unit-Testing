/**
 * Created by Rahul on 1/11/14.
 */

describe("NewInvestment", function () {
    var view;
    beforeEach(function () {
        loadFixtures('NewInvestmentView.html');
        view = new NewInvestmentView({selector: "#new-investment"});
    });

    it("should expose a property with its DOM element", function () {
        expect(view.$el).toExist();
    });

    it("should have an empty stock symbol", function () {
        expect(view.getSymbolInput()).toHaveValue('');
    });

    it("should allow the input of the stock symbol", function () {

    });

    it("should allow the input of shares", function () {

    });

    it("should allow the input of share price", function () {

    });
});
