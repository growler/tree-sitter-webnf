;;;; Simple tokens ;;;;
(token) @constant
(comment) @comment

;;;; Identifiers ;;;;
(production
  name: [(identifier) (terminal_identifier)] @type)

[(identifier) (terminal_identifier)] @type

;;; Punctuation ;;;;
[ "." ] @punctuation.delimiter
[ "…" ] @punctuation.special
[ "=" "|" ] @operator
[ "(" ")" "[" "]" "{" "}" ] @punctuation.bracket
