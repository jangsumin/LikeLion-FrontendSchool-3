console.log(data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length);

console.log(function () {
    return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length
}());

let a = (data) => data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length
console.log(a(data));

let b = (data) => { return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length }
console.log(b(data));

function GetAvg(data) {
    return data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length
}
console.log(GetAvg(data));