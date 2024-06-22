function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr !== undefined || arr !== NaN) {
      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
      sum = sum + arr[i];
      avg = sum / arr.length;
    } else {
      return 0;
    }
  }

  return {
    min: min,
    max: max,
    avg: +(avg.toFixed(2))
  }
}

getArrayParams(10, 10, 11, 20, 10);

function summElementsWorker(...arr) {

  let sum = 0;

  for (i = 0; i < arr.length; i++) {

    if (arr[i] !== undefined) {

        sum += arr[i];

    } else {
      return 0;
    }

  }

  return sum;

}

summElementsWorker(10, 10, 11, 20, 10);

function differenceMaxMinWorker(...arr) {
  if (arr !== undefined) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let difference = max - min;


  if (difference === -Infinity) {
    return 0;
  } else {
    return difference;
  }
}
}

differenceMaxMinWorker(10, 5, 16, 13, 25);

function differenceEvenOddWorker(...arr) {

  sumEvenElement = 0;
  sumOddElement = 0;

  for (i = 0; i < arr.length; i++) {

    if (arr[i] !== undefined) {

      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    } else {
      return 0;
    }
  }

  return sumEvenElement - sumOddElement;

}

differenceEvenOddWorker(61, 206, 328, 284);

function averageEvenElementsWorker(...arr) {

  sumEvenElement = 0;
  countEvenElement = 0;

  for (i = 0; i < arr.length; i++) {

    if (arr[i] !== undefined) {

      if (arr[i] % 2 == 0) {
        sumEvenElement += arr[i];
        countEvenElement++;
      }
    } else {
      return 0;
    }
  }

    return sumEvenElement / countEvenElement;
}


averageEvenElementsWorker(1, 5, 6, 8);

const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];

function makeWork (arrOfArr, func) {
  let maxWorkResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    let max = func(...arrOfArr[i]);
    if(maxWorkResult < max){
      maxWorkResult = max;
    }
  }
  return maxWorkResult;
}
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72
