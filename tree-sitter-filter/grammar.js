
/**
 * @file A grammar for parsing filter expressions in admin application search queries.
 * @author Nesya Fadillah Kinantiasa <nesya.fadillah.tif425@polban.ac.id>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

const PREC = {
  OR: 1,
  AND: 2,
  NOT: 3,
};

export default grammar({
  name: "filter",

  extras: $ => [
    /\s/,
  ],

  rules: {
    source_file: $ => $.expression,

    expression: $ => choice(
      $.or_expression,
      $.and_expression,
      $.not_expression,
      $.comparison_expression,
      $.in_expression,
      $.contains_expression,
      $.parenthesized_expression
    ),

    // Operator logika OR
    or_expression: $ => prec.left(
      PREC.OR,
      seq($.expression, "or", $.expression)
    ),

    // Operator logika AND
    and_expression: $ => prec.left(
      PREC.AND,
      seq($.expression, "and", $.expression)
    ),

    // Operator logika NOT
    not_expression: $ => prec(
      PREC.NOT,
      seq("not", $.expression)
    ),

    // Perbandingan nilai
    comparison_expression: $ => seq(
      $.identifier,
      $.comparison_operator,
      $._value
    ),

    comparison_operator: $ => choice(
      "=",
      "!=",
      ">",
      "<",
      ">=",
      "<="
    ),

    // Operator IN
    in_expression: $ => seq(
      $.identifier,
      "in",
      $.value_list
    ),

    value_list: $ => seq(
      "(",
      $._value,
      repeat(seq(",", $._value)),
      ")"
    ),

    // Operator CONTAINS
    contains_expression: $ => seq(
      $.identifier,
      "contains",
      $.string
    ),

    // Pengelompokan ekspresi
    parenthesized_expression: $ => seq(
      "(",
      $.expression,
      ")"
    ),

    // Identifier
    identifier: $ => /[a-zA-Z_][a-zA-Z0-9_.]*/,

    // Tipe nilai
    _value: $ => choice(
      $.identifier,
      $.string,
      $.number,
      $.boolean
    ),

    string: $ => /"[^"]*"/,

    number: $ => /-?\d+(\.\d+)?/,

    boolean: $ => choice(
      "true",
      "false"
    ),
  }
});
