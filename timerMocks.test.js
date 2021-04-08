// comment one by one and test

function timerGame(callback) {
  console.log('Ready.....go!');
  setTimeout(() => {
    console.log("Time's up -- stop!");
    callback && callback();
  }, 1000);
}

jest.useFakeTimers();

test('waits 1 second before ending the game', () => {
  timerGame();
  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});

// test('calls the callback after 1 second', () => {
//   const callback = jest.fn();
//   timerGame(callback);
//   expect(callback).not.toBeCalled();
//   jest.runAllTimers();
//   expect(callback).toBeCalled();
//   expect(callback).toHaveBeenCalledTimes(1);
// });

// function infiniteTimerGame(callback) {
//   console.log('Ready....go!');
//   setTimeout(() => {
//     console.log("Time's up! 10 seconds before the next game starts...");
//     callback && callback();

//     // Schedule the next game in 10 seconds
//     setTimeout(() => {
//       infiniteTimerGame(callback);
//     }, 10000);
//   }, 1000);
// }

// jest.useFakeTimers();
// describe('infiniteTimerGame', () => {
//   test('schedules a 10-second timer after 1 second', () => {
//     const callback = jest.fn();
//     infiniteTimerGame(callback);

//     expect(setTimeout).toHaveBeenCalledTimes(1);
//     expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);

//     jest.runOnlyPendingTimers();

//     expect(callback).toBeCalled();
//     expect(setTimeout).toHaveBeenCalledTimes(2);
//     expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);
//   });
// });

// it('calls the callback after 1 second via advanceTimersByTime', () => {
//   const callback = jest.fn();
//   timerGame(callback);

//   expect(callback).not.toBeCalled();

//   jest.advanceTimersByTime(1000);

//   expect(callback).toBeCalled();
//   expect(callback).toHaveBeenCalledTimes(1);
// });

jest.clearAllTimers();