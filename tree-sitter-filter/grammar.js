module.exports = grammar({
  name: 'filter',
  extras: $ => [/\s/],
  word: $ => $.identifier,

  rules: {
    query: $ => $._expr,

    _expr: $ => choice(
      $.comparison,
      $.or_expression,
      $.and_expression,
      $.parenthesized,
      $.not_expression,
      $.boolean
    ),

    or_expression: $ => prec.left(1, seq(
      $._expr,
      'or',
      $._expr
    )),

    and_expression: $ => prec.left(2, seq(
      $._expr,
      'and',
      $._expr
    )),

    not_expression: $ => prec(3, seq(
      'not',
      $._expr
    )),

    boolean: $ => choice('true', 'false'),

    parenthesized: $ => seq(
      '(',
      $._expr,
      ')'
    ),

    _value: $ => choice(
      $.string,
      $.number,
      $.boolean
    ),

    comparison: $ => seq(
      $.identifier,
      choice('=', '!=', '>', '<', '>=', '<='),
      $._value
    ),

    identifier: $ => /[a-zA-Z_][a-zA-Z0-9_.]*/,
    string: $ => /"[^"]*"/,
    number: $ => /\d+(\.\d+)?/,
  }
});