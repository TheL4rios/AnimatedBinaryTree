class Error {
    constructor(input) {
        this.input = input;
    }

    showError () {
        this.input.style.border = "2px solid red"
    }

    hideError () {
        this.input.style.border = "1px solid black"
        this.input.style.borderRight = "0px"
    }
}