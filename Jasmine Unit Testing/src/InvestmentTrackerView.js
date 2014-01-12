/**
 * Created by Rahul on 1/11/14.
 */
function InvestmentTrackerView(params){
    this.newView = params.newView;
    this.listView = params.listView;

    this.newView.onCreate(function(investment){
        this.listView.addInvestment(investment);
    }.bind(this));

}