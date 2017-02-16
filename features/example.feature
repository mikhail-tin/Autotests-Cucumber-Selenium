Feature: Yandex Search
	In order to use yandex.com
	As application user
	I want to be able to find wiki.

@yandex
Scenario: Search Hello World in Yandex
    Given I open yandex.com
    When I find 'Hello World Y'
    Then I should see result
