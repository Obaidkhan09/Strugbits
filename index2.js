const solveMatrix =()=>{
    let array = [[], [], []];
    for(let i =0; i< 3; i++){
        for(let n =0; n < 3; n++){
            array[i][n] = parseInt(window.prompt('Enter a value for 3x3 Matrix ')); 
        }
    }
    // console.log(array);
    const principalDiagonalSum = (value) => {
        return (value[0][0] + value[1][1] + value[2][2]);
    }
    const secondaryDiagonalSum = (value) => {
        return (value[0][2] + value[1][1] + value[2][0]);
    }



    let princDiagonal = principalDiagonalSum(array);
    let secDiagonal = secondaryDiagonalSum(array);


    console.log('Principal Diagonal Sum is ',princDiagonal);
    console.log('Secondary Diagonal Sum is ',secDiagonal);


    //Multiplication
    const principalDiagonalMult = (value) => {
        return (value[0][0] * value[1][1] * value[2][2]);
    }
    const secondaryDiagonalMult = (value) => {
        return (value[0][2] * value[1][1] * value[2][0]);
    }



    let princDiagonalMult = principalDiagonalMult(array);
    let secDiagonalMult = secondaryDiagonalMult(array);


    console.log('Principal Diagonal multiplication is ',princDiagonalMult);
    console.log('Secondary Diagonal multiplication is ',secDiagonalMult);
    
}
solveMatrix();