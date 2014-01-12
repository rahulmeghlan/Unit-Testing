/**
 * Created by Rahul on 1/11/14.
 */

describe("Investment Tracker", function () {
    var listView,
        newView,
        application;
    beforeEach(function () {
        loadFixtures('NewInvestmentView.html');
        appendLoadFixtures('InvestmentListView.html');

        listView = new InvestmentListView({
            id: 'investment-list'
        });

        newView = new NewInvestmentView({
            id: "new-investment"
        });

        application = new InvestmentTrackerView({
            newView: newView,
            listView: listView
        });
    });

    describe("when a new investment is created ", function () {
        beforeEach(function () {
            //fill form inputs
            newView.create();
        });

        it("should add a new item to the list", function () {
            expect(listView.count()).toEqual(1);
        });
    });
})
