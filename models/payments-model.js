module.exports = class Payment {
    constructor(creditCard={}, options={}) {

    }

    get paymentHistory() {
        if (this.history.length === 0) {
            return "No transactions made yet."
        } else {
            return  this.history
        }
    }

    sendPayment() {

    }

    acceptPayment() {

    }

    verifyCreds() {

    }   

    subscribe(farmId, duration, options) {

    }
}