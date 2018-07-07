import defineMessages from '../messages';

describe('Contact messages', () => {
  it('has correct structure', () => {
    expect(defineMessages).toHaveProperty('authorName');
  });
});
