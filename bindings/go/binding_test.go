package tree_sitter_webnf_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_webnf "github.com/tree-sitter/tree-sitter-webnf/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_webnf.Language())
	if language == nil {
		t.Errorf("Error loading Webnf grammar")
	}
}
