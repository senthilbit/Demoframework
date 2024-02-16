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
  "_id": "88HonI0B7szs8maWyHwq",
  "_version": 1,
  "result": "created",
  "_shards": {
    "total": 2,
    "successful": 1,
    "failed": 0
  },
  "_seq_no": 1046384,
  "_primary_term": 4
}
    """
    * def Id = response._id
    * print response._id





  Scenario:pathMatches('/elasticsearch/update') && methodIs('PATCH')
   # * request {"index":"workbook","id":"UJSm2YwB7szs8maWdoMQ","doc":{"name":"#(randomName)"}}
    * request {"index":"workbook","id":"#(Id)","doc":{"name":"#(randomName)"}}
    * def responseStatus = 200
    * def response =
    """
{
  "_index": "workbook",
  "_id": "#(Id)",
  "_version": 2,
  "result": "updated",
  "_shards": {
    "total": 2,
    "successful": 1,
    "failed": 0
  },
  "_seq_no": "#(randomNumber)",
  "_primary_term": 4
}
    """
    * print response

