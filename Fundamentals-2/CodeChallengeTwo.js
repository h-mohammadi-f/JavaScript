const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    BMI: 0,
    calcBMI: function () {
        return this.BMI = this.mass / this.height ** 2;
    }
}
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    BMI: 0,
    calcBMI: function () {
        return this.BMI = this.mass / this.height ** 2;
    }
}

mark.calcBMI() > john.calcBMI() ? console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI})`) : console.log(`${mark.fullName}'s BMI ${mark.BMI} is less than ${john.fullName}'s BMI (${john.BMI})`);