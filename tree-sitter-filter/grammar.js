module.exports = grammar({
  name: 'filter',
  extras: $ => [/\s/],
  word: $ => $.identifier,

  rules: {
    query: $ => $._expr,

    _expr: $ => choice(
      $.comparison,
      $.and_expression
    ),

    and_expression: $ => prec.left(2, seq(
      $._expr,
      'and',
      $._expr
    )),

    comparison: $ => seq(
      $.identifier,
      choice('=', '!=', '>', '<', '>=', '<='),
      choice($.string, $.number)
    ),

    identifier: $ => /[a-zA-Z_][a-zA-Z0-9_.]*/,
    string: $ => /"[^"]*"/,
    number: $ => /\d+(\.\d+)?/,
  }
});