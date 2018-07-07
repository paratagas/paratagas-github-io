import defineMessages from '../messages';

describe('MainMenu messages', () => {
  it('has correct structure', () => {
    expect(defineMessages).toHaveProperty('aboutUrl');
  });
});
