Feature: Read a red book

  @mySelves
  Scenario: Many shelves
    Given I am in the living room
    When I look at my wall
    Then I see all my shelves
      | shelfColor | nbItems |
      | blue       | 1       |
      | red        | 2       |
