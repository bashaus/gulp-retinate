const expect = require('expect');
const Retinate = require('..');

describe('retinate#_generateOutputStem', () => {
  describe('options.outputFlags', () => {
    const retinate = Retinate({
      outputFlags: { '1' : '-1x', '2' : '-2x', '4' : '-4x' }
    });

    it('generates output filename', () => {
      expect(retinate._generateOutputStem('image', '1')).toEqual('image-1x');
      expect(retinate._generateOutputStem('image', '2')).toEqual('image-2x');
      expect(retinate._generateOutputStem('image', '4')).toEqual('image-4x');
    });
  });

  describe('options.outputPlace = "endsWidth"', () => {
    const retinate = Retinate({ outputPlace: 'endsWith' });

    it('generates output filename', () => {
      expect(retinate._generateOutputStem('image', '1')).toEqual('image');
      expect(retinate._generateOutputStem('image', '2')).toEqual('image@2x');
      expect(retinate._generateOutputStem('image', '4')).toEqual('image@4x');
    });
  });

  describe('options.outputPlace = "prepend"', () => {
    const retinate = Retinate({ outputPlace: 'prepend' });

    it('generates output filename', () => {
      expect(retinate._generateOutputStem('image', '1')).toEqual('image');
      expect(retinate._generateOutputStem('image', '2')).toEqual('@2ximage');
      expect(retinate._generateOutputStem('image', '4')).toEqual('@4ximage');
    });
  });

  describe('options.outputFlags and options.outputPlace = "prepend"', () => {
    const retinate = Retinate({
      outputFlags: { '1' : '', '2' : '2x-', '4' : '4x-' },
      outputPlace: 'prepend'
    });

    it('generates output filename', () => {
      expect(retinate._generateOutputStem('image', '1')).toEqual('image');
      expect(retinate._generateOutputStem('image', '2')).toEqual('2x-image');
      expect(retinate._generateOutputStem('image', '4')).toEqual('4x-image');
    });
  });
});
