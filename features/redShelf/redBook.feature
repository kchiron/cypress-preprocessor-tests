Feature: Read a red book

  @myRedBooks
  Scenario: My beautiful red books
    Given I want to read a book
    When I look at my red shelf
    Then I see red books
