@register @E2E
Feature: To validate the regiter functionality of facebook application

Background:
Given The user should be in facebook page

@regression @smoke @tc3
Scenario: Invalid register-To validate the registration functionality
When The user has to click the create new account link
And The user has to fill the firstname , lastname and other datails
And The user has to click the "signup" button
Then The user get message "successfully registered"   
   @retest @tc4
   Scenario: valid register-To validate the registration functionality
When The user has to click the create new account link
And The user has to fill the firstname , lastname and other datails
And The user has to click the "signup" button
Then The user get message "successfully registered"   