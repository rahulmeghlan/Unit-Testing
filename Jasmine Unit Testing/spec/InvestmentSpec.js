describe("Investment", function () {
    var stock, investment;

    beforeEach(function () {
        stock = new Stock();
        investment = new Investment({
            stock: stock,
            shares: 100,
            sharePrice: 20
        });
    });

    it("should be of a stock", function () {
        expect(investment.stock).toBe(stock);
    });

    it("should have the invested shares quantity", function () {
        expect(investment.shares).toEqual(100);
    });

    describe("when its stock share price valorizes", function () {
        beforeEach(function () {
            stock.sharePrice = 40;
        });

        /*it("should have a positive return of investment", function () {
            expect(investment.roi()).toEqual(1);
        });

        it("should be a good investment", function () {
            expect(investment.isGood()).toBeTruthy();
        });*/
    });

});