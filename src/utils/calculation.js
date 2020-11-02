export function horizontalWins(startPosition = 0, outPutArray) {
  const numberOfPossibleRows = 4;
  for (let i = 0; i < numberOfPossibleRows; i++) {
    const array = Array(5);

    for (let j = 0; j < array.length; j++) {
      array[j] = startPosition + j;
    }
    startPosition++;
    outPutArray.push(array);
  }
}

export function verticalWins(startPosition, outPutArray) {
  const numberOfPossibleRows = 4;
  for (let i = 0; i < numberOfPossibleRows; i++) {
    const array = Array(5);
    let runner = 0;
    for (let j = 0; j < array.length; j++) {
      array[j] = startPosition + runner;
      runner = runner + 8;
    }
    startPosition = startPosition + 8;
    outPutArray.push(array);
  }
}

export function diagRightTopLeft(startPosition = 0, outPutArray) {
  const numberOfPossibleRows = 4;
  for (let i = 0; i < numberOfPossibleRows; i++) {
    const array = Array(5);
    let runner = 0;
    for (let j = 0; j < array.length; j++) {
      array[j] = startPosition + runner;
      runner = runner + 9;
    }
    startPosition = startPosition + 8;
    outPutArray.push(array);
  }
}

export function diagLeftTopRight(startPosition = 0, outPutArray) {
  const numberOfPossibleRows = 4;
  for (let i = 0; i < numberOfPossibleRows; i++) {
    const array = Array(5);
    let runner = 0;
    for (let j = 0; j < array.length; j++) {
      array[j] = startPosition + runner;
      runner = runner + 7;
    }
    startPosition = startPosition + 8;
    outPutArray.push(array);
  }
}
