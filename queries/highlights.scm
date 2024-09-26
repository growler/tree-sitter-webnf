;;;; Simple tokens ;;;;
(token) @string.special.symbol
(comment) @comment

;;;; Identifiers ;;;;
(production
  name: [(identifier) (terminal_identifier)] @type.definition)

[(identifier) (terminal_identifier)] @type

;;; Punctuation ;;;;
[ "." ] @punctuation.delimiter
[ "=" "|" "…" ] @operator
[ "(" ")" "[" "]" "{" "}" ] @punctuation.bracket

