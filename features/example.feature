Feature: Google Search
	In order to use google.com
	As application user
	I want to be able to find wiki.

@google
Scenario: Updating location
    Given I open google.com
    When I find 'Hello World'
    Then I should see result
