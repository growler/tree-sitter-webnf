module.exports = grammar({
  name: "wsn",
  extras: $ => [
    / |\n|\t|\r/,
    $.comment,
  ],
  rules: {
    grammar: $ => repeat(choice(
      alias($._terminal_production, $.production),
      $.production,
    )),
    _terminal_production: $ => seq(
      field("name", $.terminal_identifier),
      "=",
      optional($._terminal_expression),
      ".",
    ),
    production: $ => seq(
      field("name", $.identifier),
      "=",
      optional($._expression),
      ".",
    ),
    _expression: $ => seq(
      $._term,
      repeat(seq("|", $._term)),
    ),
    _term: $ => repeat1($._factor),
    range: $ => seq(
      field("begin", $.token), "…", field("end", $.token),
    ),
    _factor: $ => choice(
      $.identifier,
      $.terminal_identifier,
      $.token,
      $.range,
      $.group,
      $.option,
      $.repetition,
    ),
    group:      $ => seq("(", $._expression, ")"),
    option:     $ => seq("[", $._expression, "]"),
    repetition: $ => seq("{", $._expression, "}"),
    _terminal_expression: $ => seq(
      $._terminal_term,
      repeat(seq("|", $._terminal_term)),
    ),
    _terminal_term:   $ => repeat1($._terminal_factor),
    _terminal_factor: $ => choice(
      $.terminal_identifier,
      $.token,
      $.range,
      alias($._terminal_group, $.group),
      alias($._terminal_option, $.option),
      alias($._terminal_repetition, $.repetition),
    ),
    _terminal_group:      $ => seq("(", $._terminal_expression, ")"),
    _terminal_option:     $ => seq("[", $._terminal_expression, "]"),
    _terminal_repetition: $ => seq("{", $._terminal_expression, "}"),

    token:               $ => /`[^`]*`|"[^"]*"/,
    comment:             $ => /\/\*[^*]*\*+([^/*][^*]*\*+)*\//,
    terminal_identifier: $ => /[\p{Ll}_][\w\p{Lu}\p{Ll}]*/u,
    identifier:          $ => /\p{Lu}[\w\p{Lu}\p{Ll}]*/u,
  },
});
