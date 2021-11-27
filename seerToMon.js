function seerToMon(seer) {
    if (typeof (seer) != 'number') {
        return 'Error!,please give me a number';
    }
    else {
        let resultInMon = seer / 40;
        return resultInMon;
    }
}
const TheFinalResult = seerToMon(120);
console.log(TheFinalResult);