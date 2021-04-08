test('should be match the case', () => {
  expect(true).toBeTruthy();
});

// Manual Mocks
/*
  Introduction:
    1. Manual mocks are use to stub out functionality with mock data.
    2. Allowes you to use fake data
    3. Ensures your test will be fast and flaky
  Mocking User Modules:
    1. Explicit call is mandatory using jest.mock('module name')
  Mocking Node Modules:
    1. No need to explicitly call, and will be automatically mocked
    2. Core node modules need to be mocked. They are not automatically mocked
    3. As manual mock for core node module is pretty slow and fragile due to access the disk,
    we do manual mock by using jest.createMockFromModule('module name')
    4. Or we can do manual mock by explicit call using jest.mock('module name')
    5. To use all of its properties and functions, we need to the actual module.
    To do that we call mock.requireActual('module name')
  Using with ES Module Import
    1. In this case we need to explicity call jest.mock('module name') on the top of the file.
  Mocking methods which are not implemented in JSDOM
    1. For built-in JSDOM module, we couldn't use that module as a built-in module from our test file.
    2. For this case, we need to create seperate mock file and can use the mock from our test file.
*/