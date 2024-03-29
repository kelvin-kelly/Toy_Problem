const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ratePaye = [
    {
        min: 0,
        max: 24000,
        deduction: 10,
    },
    {
        min: 24001,
        max: 32333,
        deduction: 25,
    },
    {
        min: 32334,
        max: 500000,
        deduction: 30,
    },
    {
        min: 500001,
        max: 800000,
        deduction: 32.5,
    },
    {
        min: 800001,
        max: null,
        deduction: 35,
    }
];

function getPayeRate(salary) {
    for (const rate of ratePaye) {
        if (salary >= rate.min && (salary <= rate.max || rate.max === null)) {
            return rate.deduction;
        }
    }
    return 0;
}

function payeSalary(salary) {
    let rate = getPayeRate(salary) / 100;
    let taxable = salary * rate;
    let income = salary - taxable;
    let net = income + 2400 + 5000;
    return net;
}

function nhifDeductions(income) {
    let deductible;

    switch (true) {
        case (income <= 5999):
            deductible = 150;
            break;
        case (income >= 6000 && income <= 7999):
            deductible = 300;
            break;
        case (income >= 8000 && income <= 11999):
            deductible = 400;
            break;
        case (income >= 12000 && income <= 14999):
            deductible = 500;
            break;
        case (income >= 15000 && income <= 19999):
            deductible = 600;
            break;
        case (income >= 20000 && income <= 24999):
            deductible = 750;
            break;
        case (income >= 25000 && income <= 29999):
            deductible = 850;
            break;
        case (income >= 30000 && income <= 34999):
            deductible = 900;
            break;
        case (income >= 35000 && income <= 39999):
            deductible = 950;
            break;
        case (income >= 40000 && income <= 44999):
            deductible = 1000;
            break;
        case (income >= 45000 && income <= 49999):
            deductible = 1100;
            break;
        case (income >= 50000 && income <= 59999):
            deductible = 1200;
            break;
        case (income >= 60000 && income <= 69999):
            deductible = 1300;
            break;
        case (income >= 70000 && income <= 79999):
            deductible = 1400;
            break;
        case (income >= 80000 && income <= 89999):
            deductible = 1500;
            break;
        case (income >= 90000 && income <= 99999):
            deductible = 1600;
            break;
        default:
            deductible = 1700;
            break;
    }

    return deductible;
}

function netSalary(salary) {
    let salaryPaid = payeSalary(salary);
    let nhif = nhifDeductions(salary);

    const netSalary = salaryPaid - nhif;
    return netSalary;
}

function main(params) {
    rl.question("Enter your gross amount\n", (answer) => {
        let pay = parseInt(answer);
        let paye = payeSalary(pay);
        let nhif = nhifDeductions(pay);
        let netSal = netSalary(pay);
        console.log(`Your gross amount is ${pay}\nYour payee is ${paye}\nYour NHIF deductions are ${nhif}\nYour net salary is ${netSal}.`);
        rl.close();
    });
}

main();