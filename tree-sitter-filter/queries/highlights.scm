; Kata kunci
["and" "or" "not" "in" "contains"] @keyword

; Operator perbandingan
["=" "!=" ">" "<" ">=" "<="] @operator

; String
(string) @string

; Angka
(number) @number

; Boolean
(boolean) @constant.builtin

; Nama field
(comparison
  field: (identifier) @property)

(in_expression
  field: (identifier) @property)

(contains_expression
  field: (identifier) @property)
