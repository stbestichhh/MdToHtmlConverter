class Converter {
  #patterns = [
    {
      regexp: /(?<=[ ,.:;\n\t]|^)\*\*(?=\S)(.+?)(?<=\S)\*\*(?=[ ,.:;\n\t]|$)/g,
      html: '<b>$1</b>',
    },
    {
      regexp: /(?<=[ ,.:;\n\t]|^)_(?=\S)(.+?)(?<=\S)_(?=[ ,.:;\n\t]|$)/g,
      html: '<i>$1</i>',
    },
    {
      regexp: /(?<=[ ,.:;\n\t]|^)`(?=\S)(.+?)(?=\S)`(?=[ ,.:;\n\t]|$)/g,
      html: '<tt>$1</tt>',
    },
  ];
}

module.exports = Converter;
