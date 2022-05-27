const year = 1300;

const isLeap = (year) => {
    if (year % 400 == 0)
        return true;

    if (year % 100 == 0)
        return false;

    if (year % 4 == 0)
        return true;

    return false;
}

if (isLeap(year)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is NOT a leap year.`);
}
