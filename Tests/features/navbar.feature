Feature: Navbar Link Navigation

  Scenario: Verify all navbar links navigate correctly
    Given I am on the homepage
    When I check the navbar links
    Then all links should navigate to the correct URLs