// Code your solution in this file!
const hqBlock = 42;

function distanceFromHqInBlocks (startBlock) {
    const numberOfBlocks = parseInt(startBlock);
    return Math.abs(numberOfBlocks - hqBlock);
}

function distanceFromHqInFeet(startBlock) {
    let numberOfFeet = 0;
    numberOfFeet = distanceFromHqInBlocks(startBlock) * 264;
    return numberOfFeet;
}

function distanceTravelledInFeet(start, destination) {
    let blocksTraveledInFeet = (Math.abs(start - destination)) * 264;
    return blocksTraveledInFeet;
}

function calculatesFarePrice(start, destination) {
    let fareDistance = distanceTravelledInFeet(start, destination);
    let farePrice;
    if(fareDistance <= 400) {
        farePrice = 0;
    } else if(fareDistance > 400 && fareDistance <= 2000) {
        farePrice = (fareDistance - 400) * .02;
    } else if(fareDistance > 2000 && fareDistance <= 2500) {
        farePrice = 25
    } else if(fareDistance > 2500) {
        farePrice = 'cannot travel that far';
    }
    return farePrice;
}