/**
 * Created by Rahul on 1/11/14.
 */
(function ($) {
    function NewInvestmentView(params) {
        this.$el = $(params.id);
        this.listView = params.listView;

        this.$el.on("submit", function(){
           this.listView.addInvestment();
        }.bind(this));
    }

    NewInvestmentView.prototype = {
        getSymbolInput: function () {
            return this.$el.find(".new-investment-stock-symbol");
        },
        setSymbolValue : function(value){
            this.$el.find(".new-investment-stock-symbol").val(value);
        },
        onCreate : function(callback){
            this.callback = callback;
        },
        create : function(){
            var investment = {};
            investment.symbolInput = this.getSymbolInput();
            this.callback(investment);
        }
    };

    this.NewInvestmentView = NewInvestmentView;
})(jQuery);