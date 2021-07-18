/**
 * 재귀를 통한 완전탐색 코드이다.
 * p에 작성 된, 배열에서 자음만을 포함한(모음이 포함되지 않은) 알파벳으로 만들 수 있는
 * 조합을 모두 구하는 문제이다.
 * 
 * 재귀는 결국, 
 * 1. 종료조건 
 * 2. 반복되는 경우를 구현
 * 
 * 으로 종결된다.
 * 
 * 로직이 걸리는 곳은 대부분 70% 이상 종료조건을 설정하는 곳이며(아래 코드로 따지면  if(i == p.lengh)코드블럭)
 * 
 * 중고급 이상의 문제에 경우 반복되는 경우에 로직이 걸릴 확률이 높다.
 * 
 * 일단은 기초적인 문제들을 해결하며
 * 
 * 종료조건과 반복되는 경우를 구현하는 능력을 길러야 한다.
 * 
 */


var p = ["J","A","E","I","K","C","Q"];
var basket = [];

function checkIsHavingMoem(box){
    if(box.indexOf('A') >= 0 || box.indexOf('E') >= 0  || box.indexOf('I') >= 0  || box.indexOf('O') >= 0  || box.indexOf('U') >= 0 ){
        return false;
    }
    return true;
}


function go(i){
    if(i == p.length){
        if(checkIsHavingMoem(basket)){
            console.log(basket);
        }
        return;
    }
    basket.push(p[i]);
    go(i + 1);
    basket.pop();
    go(i + 1);
};



go(0);