class TicTacToe {

    constructor() {

        this.fieldWidth = 3;
        this.currentSymbol = "x";
        this.field = [];


        for (let i = 0; i < this.fieldWidth; i++) {
            this.field[i] = [];
            for (let k = 0; k < this.fieldWidth; k++) {
                this.field[i][k] = null;
            }
        }

    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.field[rowIndex][columnIndex]) {
            this.field[rowIndex][columnIndex] = this.currentSymbol;

            if (this.currentSymbol === 'x'){
                this.currentSymbol = 'o';
            } else {
                this.currentSymbol = 'x';
            }
        }
        return this;
    }

     isFinished() {
        // return (this.getWinner()  || this.noMoreTurns());
        if (this.getWinner()  || this.noMoreTurns()) {
            return true;
        } else {
            return false;
        }
        
     }

    getWinner() {
        let field_00 = this.getFieldValue(0, 0);
        let field_11 = this.getFieldValue(1, 1);
        let field_22 = this.getFieldValue(2, 2);
        let field_02 = this.getFieldValue(0, 2);
        let field_20 = this.getFieldValue(2, 0);

        if (field_00 === field_11 && field_00 === field_22) {
            return field_00;
        } else if (field_02 === field_11 && field_02 === field_20) {
            return field_02;
        }

        for (var n = 0; n < this.fieldWidth; n++) {

            let field_n0 = this.getFieldValue(n, 0);
            let field_n1 = this.getFieldValue(n, 1);
            let field_n2 = this.getFieldValue(n, 2);
            let field_0n = this.getFieldValue(0, n);
            let field_1n = this.getFieldValue(1, n);
            let field_2n = this.getFieldValue(2, n);

            
            if (field_n0 === field_n1  && field_n0  === field_n2) {
                return field_n0;
            } else if (field_0n === field_1n  && field_0n === field_2n) {
                return field_0n;
            }
        } 
         
        return null;
    }

    noMoreTurns() {
        for (let i = 0; i < this.fieldWidth; i++){
            if (this.field[i].includes(null) === true) {
                return false;
            }  
        }
        return true;
    }

    isDraw() {
        return (this.getWinner() === null && this.noMoreTurns());
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
