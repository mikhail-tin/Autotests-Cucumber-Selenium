Feature: Abbyy lingvo
	In order to use Abbyy lingvo
	I want to translate text.

@lingvo
Scenario: translate
    Given I open lingvolive.com/ru-ru/translate/en-ru/world
    When I translate 'Hello'
    Then I should see result 'алло!'
