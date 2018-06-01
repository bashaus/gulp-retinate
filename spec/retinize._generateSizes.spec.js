const expect = require('expect');
const Retinate = require('..');

describe('retinate#_generateSizes', () => {
  describe('options.scaleUp = false', () => {
    const retinate = Retinate({ scaleUp: false });

    it('scales down', () => {
      // image@4x.png
      expect(retinate._generateSizes(4)).toEqual(['1', '2']);

      // image@2x.png
      expect(retinate._generateSizes(2)).toEqual(['1']);
    });

    it('does not scale up', () => {
      // image@2x.png
      expect(retinate._generateSizes(2)).not.toContain(4);
      expect(retinate._generateSizes(2)).toEqual(['1']);

      // image@1x.png
      expect(retinate._generateSizes(1)).not.toContain(4);
      expect(retinate._generateSizes(1)).not.toContain(2);
      expect(retinate._generateSizes(1)).toEqual([]);
    });

    it('does not scale itself', () => {
      expect(retinate._generateSizes(4)).not.toContain(4);
      expect(retinate._generateSizes(2)).not.toContain(2);
      expect(retinate._generateSizes(1)).not.toContain(1);
    });
  });

  describe('options.scaleUp = true', () => {
    const retinate = Retinate({ scaleUp: true });

    it('scales up and down', () => {
      expect(retinate._generateSizes(4)).toEqual(['1', '2']);
      expect(retinate._generateSizes(2)).toEqual(['1', '4']);
      expect(retinate._generateSizes(1)).toEqual(['2', '4']);
    });
  });
});
