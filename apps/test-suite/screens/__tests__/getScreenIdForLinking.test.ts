import {
  getScreenIdForLinking,
  createQueryString,
  getSelectedTestNames,
} from '../getScreenIdForLinking';

describe(getScreenIdForLinking, () => {
  it('should normalize name / route to lowercase and trim', () => {
    expect(getScreenIdForLinking({ name: ' MyScreen ' })).toBe('myscreen');
    expect(getScreenIdForLinking({ name: 'MyScreen', route: ' custom-route ' })).toBe(
      'custom-route'
    );
  });
});

describe(createQueryString, () => {
  it('should join normalized test names with spaces', () => {
    expect(createQueryString([' Test1 ', 'TEST2', 'test1'])).toBe('test1 test2');
  });
});

describe(getSelectedTestNames, () => {
  it('should split and normalize query string', () => {
    expect(getSelectedTestNames(' Test1  Test2 ')).toEqual(['test1', 'test2']);
  });
});
