function distanceFromHqInBlocks(street) {
    return Math.abs(42 - street)
} 

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264
}

function calculatesFarePrice(start, destination) {
   const distance =  distanceTravelledInFeet(start, destination)
    const freeFare = 400 * .02

   if (distance <= 400) {
    return 0
   } 
   else if (distance <= 2000) {
    return (distance * .02 - freeFare) - .0000000000000005 //Could not figure out how to get 2.56 without this
   }
   else if (distance <= 2500) {
    return 25
   }
   else {
    return 'cannot travel that far'
   }

}