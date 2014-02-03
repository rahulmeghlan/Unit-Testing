/**
 * Created by Rahul on 1/11/14.
 */

describe("NewInvestment", function () {
    var view,
        listView;
    beforeEach(function () {
        loadFixtures('fixtures/NewInvestmentView.html');
        appendLoadFixtures('fixtures/InvestmentListView.html')
//        listView = new InvestmentListView({id: "investment-list"});
        view = new NewInvestmentView({
            id: "#new-investment"
//            listView: listView
        });
    });

   /* describe("when its add button is clicked", function () {
        beforeEach(function () {
            // fill form inputs
            // simulate the clicking of the button
        });

        it("should add the investment to the list", function () {
           expect(listView.count()).toEqual(1);
        });
    });*/

    it("should expose a property with its DOM element", function () {
        expect(view.$el).toExist();
    });

    it("should have an empty stock symbol", function () {
        expect(view.getSymbolInput()).toHaveValue('');
    });

    /*it("should allow the input of the stock symbol", function () {

     });

     it("should allow the input of shares", function () {

     });

     it("should allow the input of share price", function () {

     });*/
});
