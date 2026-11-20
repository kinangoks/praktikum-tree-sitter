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
      field('left', $._expr),
      'or',
      field('right', $._expr)
    )),

    and_expression: $ => prec.left(2, seq(
      field('left', $._expr),
      'and',
      field('right', $._expr)
    )),

    not_expression: $ => prec(3, seq(
      'not',
      field('operand', $._expr)
    )),

    boolean: $ => choice('true', 'false'),

    parenthesized: $ => seq(
      '(',
      field('expression', $._expr),
      ')'
    ),

    _value: $ => choice(
      $.string,
      $.number,
      $.boolean
    ),

    comparison: $ => seq(
      field('field', $.identifier),
      field('operator', choice('=', '!=', '>', '<', '>=', '<=')),
      field('value', $._value)
    ),

    identifier: $ => /[a-zA-Z_][a-zA-Z0-9_.]*/,
    string: $ => /"[^"]*"/,
    number: $ => /\d+(\.\d+)?/,
  }
});