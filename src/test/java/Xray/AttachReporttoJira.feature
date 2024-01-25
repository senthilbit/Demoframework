Feature: Xspace test
# @author Akshay

  Background:
    * url 'https://tdgteams-ukaf.atlassian.net'
    * configure ssl = true
    * def issueKey = ' '

  Scenario: Attach Report to Jira
    * path '/rest/api/2/issue/#(issueKey)/attachments'
    * header Authorisation = ' '
    * header X-Atlassian-Token = 'no-check'
    * def File = read('classpath:target/gatling/tdg-ukaf-externalize-20240115111702127/index.html')
    * multipart file = File
    * method POST
    * status 201
    * print response
