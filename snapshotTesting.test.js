// it('will fail every time', () => {
//   const user = {
//     createdAt: new Date(),
//     id: Math.floor(Math.random() * 20),
//     name: 'LeBron James'
//   };
//   expect(user).toMatchSnapshot();
// });

// it('will check the matchers and pass', () => {
//   const user = {
//     createdAt: new Date(),
//     id: Math.floor(Math.random() * 20),
//     name: 'LeBron James'
//   };
//   expect(user).toMatchSnapshot({
//     createdAt: expect.any(Date),
//     id: expect.any(Number)
//   });
// });

it('will check the matchers and pass', () => {
  const user = {
    createdAt: new Date(),
    name: 'LeBron James'
  };
  expect(user).toMatchSnapshot({
    createdAt: expect.any(Date),
    name: 'LeBron James'
  });
})