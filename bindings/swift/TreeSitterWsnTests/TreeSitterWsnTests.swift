import XCTest
import SwiftTreeSitter
import TreeSitterWsn

final class TreeSitterWsnTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_wsn())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Wsn grammar")
    }
}
