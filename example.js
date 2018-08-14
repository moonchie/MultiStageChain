// rewrite all the callbacks to promises

function getSalary() {
    // setTimeout(() => {
    //     callback(33000);
    // }, 1000);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(33000)}, 1000);
    })
}

function subtractTax(salary) {
    // setTimeout(() => {
    //     callback(salary * 0.75);
    // }, 1000);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(salary * 0.75);
        }, 1000);
    })
}

function subtractRent(salary) {
    // setTimeout(() => {
    //     callback(salary - 5000);
    // }, 1000);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(salary - 5000);
            }, 1000);
    })
}

function getDisposableIncome(callback) {
    // 1. Get salary Promise
    // const salaryPromise = getSalary();
    // // 2. Subtract Tax
    // const taxtPromise = salaryPromise.then(salary_1 => {
    //     return subtractTax(salary_1);
    // });
    // // 3. Subtract Rent
    // const rendPromise = taxtPromise.then(salary_2 => {
    //     return subtractRent(salary_2);
    // });
    // // 4. Don't forget to return the final rent
    // return rendPromise;

    // Here is the final version
    return getSalary()
    .then(subtractTax)
    .then(subtractRent)
}


//引入 Promises 之后的代码可以这么写：
// const promise = getSalary();
// promise
// .then(salary => {
//     console.log(salary)
// })

getDisposableIncome().then(disponsable => {
    console.log(disponsable);
})