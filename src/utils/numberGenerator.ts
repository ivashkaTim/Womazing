
function range(max:number,min:number){
    return [...Array(max-min).keys()].map((item,index)=> min + index)
}

function shuffleArray(array:number[]) {
    const shuffleArr = [...array]
    for (let i = shuffleArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffleArr[i], shuffleArr[j]] = [shuffleArr[j], shuffleArr[i]];
    }
    return shuffleArr
}

function randomArray(max:number, min:number, count=3){
    if(max < count) return []
    return shuffleArray(range(max,min)).slice(0, count)
}


const getArrayRandomNumbers = (max: number, min: number, count?:number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return randomArray(max, min, count)
}

export default getArrayRandomNumbers


