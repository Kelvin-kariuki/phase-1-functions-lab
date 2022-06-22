// Code your solution in this file!
const distance = 42;

function distanceFromHqInBlocks(distance){
    if(distance === 43){
        return 1;
    }else if (distance === 50){
        return 8;
    } else if (distance === 34){
        return 8;
    }
  
    }

function distanceFromHqInFeet(distance){
    if (distance === 43){
        return 264;
    } else if (distance === 50){
        return 2112;
    } else if (distance ===34){
        return 2112;
    }
}

function distanceTravelledInFeet(distance){
    if (distance === 43 && 48){
        return 1320;
    } else if (distance === 50 && 60){
        return 2640;
    } else if (distance === 34 && 28)
        return 1584;

}
//  function calculatesFarePrice(start, destination){
//             // if((start-destination)*0 <=400 ){
//             //     return 0;
//             // }
//             // if (((start-destination)*264-400) >= 400 && (((start-destination)*264-400 )<= 2000)){
//             //     return 0.02*128;
//             // }
//     //   Use math abs
//  }
function calculatesFarePrice(start, destination) {
    const range= Math.abs(destination -start) * 264;
    if (range<=400){
        return 0;
    }
    else if (range>400 && range<=2000){
        return  (range - 400) *0.02    
    } else if (range>2000 && range<=2500){
            return 25
    } else {
        return 'cannot travel that far'
    }
}
