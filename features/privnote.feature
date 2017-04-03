Feature: Privnote
	In order to use privnote
	I want to sent message.

@privnote
Scenario: sent note
    Given I open 'privnote.com'
    When I sent 'This is my message for you'
    Then I should see result url
    When I navigate by url
    Then I should see own message
