import XCTest
import SwiftTreeSitter
import TreeSitterWebnf

final class TreeSitterWebnfTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_webnf())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Webnf grammar")
    }
}
