import defineMessages from '../messages';

describe('Country messages', () => {
  it('has correct structure', () => {
    expect(defineMessages).toHaveProperty('population');
  });
});
