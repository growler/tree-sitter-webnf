;;;; Simple tokens ;;;;
(token) @string
(comment) @comment.block

;;;; Identifiers ;;;;
(production
  name: [(identifier) (terminal_identifier)] @function)

;;; Punctuation ;;;;
[ "." ] @punctuation.delimiter

[ "|" "…" ] @operator

"=" @keyword.operator

[
 "(" ")"
 "[" "]"
 "{" "}"
] @punctuation.bracket
