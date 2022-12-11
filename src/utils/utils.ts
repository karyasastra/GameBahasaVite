export function getRandomInt(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function addZero(num: number){
    return `${num.toString().length < 2 ? '0' : ''}${num}`
}
