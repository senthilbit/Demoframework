package Runner
import Xray.LogFileToJira.{addAttachmentToJira, addStatusToJira, desiredKey, extractAndCheck, findLatestFolder, folderName, globalStat, jiraBaseUrl, jiraIssueKey, jiraPassword, jiraUsername, jsonFile, targetPath, threshold}
import io.gatling.app.Gatling
import io.gatling.core.config.GatlingPropertiesBuilder

import java.io.File

object Engine extends App {

  val props = new GatlingPropertiesBuilder
  props.simulationClass("Runner.Demo3")
  Gatling.fromMap(props.build)


  extractAndCheck(jsonFile,desiredKey,threshold,jiraBaseUrl,jiraUsername,jiraPassword, jiraIssueKey)


}

