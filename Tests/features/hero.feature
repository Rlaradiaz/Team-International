Feature: Hero section tests

  Scenario: Verifying the Hero section video, title, subtitle, and button
    Given I am on Team
    When I check the Hero section
    Then the Hero section video should be visible
    And the Hero section should have the correct title
    And the Hero section should have the correct subtitle
    And I click on the "tell me more" button
    Then I should be redirected to the contact section
