const calcAverage = (one, two, three) => (one + two + three) / 3;

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins / avgKoalas >= 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if (avgKoalas / avgDolphins >= 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team win! Dolphins:${avgDolphins} Koalas:${avgKoalas}`);
    }
}

const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);
checkWinner(avgDolphins, avgKoalas);

const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);
checkWinner(avgDolphins2, avgKoalas2);
