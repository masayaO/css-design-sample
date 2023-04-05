import { sum } from '@/shared/utils/sample';

describe('#sum', () => {
  describe('整数を受け取ったとき', () => {
    it('1を加算して返すこと', () => {
      const actual = sum(1);
      expect(actual).toEqual(2);
    });
  });
});
