Feature: Google Search
	In order to use google.kz
	As application user
	I want to be able to find wiki.

@google
Scenario: Search Hello World in Google
    Given I open 'google.kz'
    When I find 'Hello World G'
    Then I should see result
