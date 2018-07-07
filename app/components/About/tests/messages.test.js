import defineMessages from '../messages';

describe('About messages', () => {
  it('has correct structure', () => {
    expect(defineMessages).toHaveProperty('header');
  });
});
