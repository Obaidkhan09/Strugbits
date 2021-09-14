//Question 1: Write a code in order to calculate the sum and product of any given matrix (N x M) diagonal.

const diagonalMatrix = () => {
    const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];


    const principalDiagonal = (value) => {
        return (value[0][0] + value[1][1] + value[2][2]);
    }
    const secondaryDiagonal = (value) => {
        return (value[0][2] + value[1][1] + value[2][0]);
    }



    let princDiagonal = principalDiagonal(matrix);
    let secDiagonal = secondaryDiagonal(matrix);


    console.log('Principal Diagonal is ',princDiagonal);
    console.log('Secondary Diagonal is ',secDiagonal);
}


const diagonalMatrixMultiplication = () => {
    const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];


    const principalDiagonal = (value) => {
        return (value[0][0] * value[1][1] * value[2][2]);
    }
    const secondaryDiagonal = (value) => {
        return (value[0][2] * value[1][1] * value[2][0]);
    }



    let princDiagonal = principalDiagonal(matrix);
    let secDiagonal = secondaryDiagonal(matrix);


    console.log('Principal Diagonal is ',princDiagonal);
    console.log('Secondary Diagonal is ',secDiagonal);
}





//: Write a code to multiply 2 matrices to form a new matrix which will be the product of those matrices.

const multiplicationMatrix = () => {
    matrix_1 = [
        [2, 4, 4, 4],
        [3, 2, 2, 2],
        [1, 5, 9, 1],
        [5, 5, 5, 5]
    ]
    matrix_2 = [
        [2, 4, 4, 4],
        [3, 2, 2, 2],
        [1, 5, 9, 1],
        [5, 5, 5, 5]
    ]

    let newMatrix = [[], [], [], []];
    for (let n in matrix_1) {
        for (let m = 0; m <= 3; m++) {
            newMatrix[n][m] = matrix_1[n][m] * matrix_2[n][m];
        }
    }

    console.log(newMatrix);

}



//Question 3: Add new field in an existing object dynamically from a given array:

const dynamicObject = () => {
    let obj = {
        parent_name: 'Father',
        child1: 'Sumair'
    };
    const arrayValue = ["Hamza", "Shahbaz", "Jahanzaib", "Junaid", "Tabish", "Ahtisham", "Asghar"];

    let temp = arrayValue.length;
    for (let num = 0; num < temp; num ++){
        obj['child'+(num+2)] = arrayValue[num];
    }
    console.log(obj);
}


//Call this API in order to fetch the user data. API: https://jsonplaceholder.typicode.com/users


const getFetch = async ()=>{
    const url = 'https://jsonplaceholder.typicode.com/users';
    let promise = await fetch(url);
    promise = await promise.json();
    console.log(promise);
}
