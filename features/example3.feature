Feature: Google Search
	In order to use google.de
	As application user
	I want to be able to find wiki.

@google
Scenario: Search Hello World in Google
    Given I open google.de
    When I find 'Hello World G'
    Then I should see result
