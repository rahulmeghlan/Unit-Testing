function Investment(stockInfo){
    this.stock = stockInfo.stock;
    this.shares = stockInfo.shares;
}

Investment.prototype.roi = function(){
    return (this.stock.sharePrice - this.sharePrice)/this.sharePrice
}

Investment.prototype.isGood = function(){
    return this.roi() > 0;
}