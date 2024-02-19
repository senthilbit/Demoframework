Feature: Xspace test


  Background:
    * def utility = Java.type('Utils.Internal.RandomDataUtility')
    * def randomName = utility.getRandomFirstName()
    * def randomNumber = utility.getRandomNumber(6)
    * print randomNumber
    * def random = "Workbook" + (randomNumber)
    * print random
    * print randomName



  Scenario:pathMatches('/elasticsearch/insertDoc') && methodIs('post')
    * request {"index":"workbook","doc":{"name":"#(randomName)","user_id":"amandeep.chauhan@thedigitalgroup.com","user_email":"amandeep.chauhan@thedigitalgroup.com","shared_with":[],"remote_datasource":"Elastic"}}
    #* request {"index":"workbook","id":"#(Id)","doc":{"name":"#(randomName)"}}
    * def responseStatus = 201
    * def response =
    """
{
  "_index": "workbook",
  "_id": "1PdNwI0B7szs8maW0Bmb",
  "_version": 4,
  "result": "updated",
  "_shards": {
    "total": 2,
    "successful": 1,
    "failed": 0
  },
  "_seq_no": 1056545,
  "_primary_term": 4
}
    """
    * def Id = response._id
    * print response._id






