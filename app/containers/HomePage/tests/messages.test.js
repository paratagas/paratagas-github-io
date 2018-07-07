import defineMessages from '../messages';

describe('HomePage messages', () => {
  it('has correct structure', () => {
    expect(defineMessages).toHaveProperty('header');
  });
});
