const expect = require('expect');
const Retinate = require('..');

describe('retinate#_parseInputStem', () => {
  describe('options.inputFlags', () => {
    const retinate = Retinate({
      inputFlags: { '1' : '-1x', '2' : '-2x', '4' : '-4x' }
    });

    it('parses custom input flags', () => {
      expect(retinate._parseInputStem('image-1x')).toEqual(['image', '1']);
      expect(retinate._parseInputStem('image-2x')).toEqual(['image', '2']);
      expect(retinate._parseInputStem('image-4x')).toEqual(['image', '4']);
    });
  });

  describe('options.inputPlace = "endsWidth"', () => {
    const retinate = Retinate({ inputPlace: 'endsWith' });

    it('parses scale when provided', () => {
      expect(retinate._parseInputStem('image@2x')).toEqual(['image', '2']);
      expect(retinate._parseInputStem('image@4x')).toEqual(['image', '4']);
    });

    it('returns null when scale is not found', () => {
      expect(retinate._parseInputStem('@2ximage')).toEqual(['@2ximage', null]);
      expect(retinate._parseInputStem('image')).toEqual(['image', null]);
    });
  });

  describe('options.inputPlace = "startsWith"', () => {
    const retinate = Retinate({ inputPlace: 'startsWith' });

    it('parses scale when provided', () => {
      expect(retinate._parseInputStem('@2ximage')).toEqual(['image', '2']);
      expect(retinate._parseInputStem('@4ximage')).toEqual(['image', '4']);
    });

    it('returns null when scale is not found', () => {
      expect(retinate._parseInputStem('image@2x')).toEqual(['image@2x', null]);
      expect(retinate._parseInputStem('image')).toEqual(['image', null]);
    });
  });
});
