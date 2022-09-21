function getRandomNumber(start, end){
    if(start === end) {
        return start;
    }
    if(start > end) {
        return -1;
    }
    start = Math.ceil(start);
    end = Math.floor(end);
    return Math.floor(Math.random() * (end - start)) + start;
}

function isLineMatch(str, maxLength){
    if (str.length <= maxLength) {
        return true;
    }
    return false;
}