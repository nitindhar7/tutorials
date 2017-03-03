package svc

import sbt._
import sbt.Keys._
import sbt.Configuration
import spray.revolver.RevolverPlugin.Revolver

object CommonsBuild extends Build {

  val buildVersion = "0.0.1".trim

  val buildSettings = Seq(
    scalaVersion := "2.10.2",
    version := buildVersion,
    organization := "com.hostcommittee",
    publishArtifact in Test := false
  ) ++ Revolver.settings

  lazy val svc = rootProject(
    id = "svc",
    base = file("."),
    settings = buildSettings,
    aggregate = Seq(svcServer)
  )

  lazy val svcServer = jarProject(
    id = "svc-server",
    base = file("svc-server"),
    settings = buildSettings ++ (libraryDependencies ++= Dependencies.svcServer)
  )

  def jarProject(id: String,
                 base: File = file("."),
                 aggregate: => Seq[ProjectReference] = Nil,
                 dependencies: => Seq[ClasspathDep[ProjectReference]] = Nil,
                 delegates: => Seq[ProjectReference] = Nil,
                 settings: => Seq[Setting[_]] = Nil,
                 configurations: Seq[Configuration] = Seq.empty): Project = {
    Project(id, base, aggregate, dependencies, delegates, settings, Configurations.default ++ configurations)
  }

  def rootProject(id: String,
                  base: File = file("."),
                  aggregate: => Seq[ProjectReference] = Nil,
                  dependencies: => Seq[ClasspathDep[ProjectReference]] = Nil,
                  delegates: => Seq[ProjectReference] = Nil,
                  settings: => Seq[Setting[_]] = Nil,
                  configurations: Seq[Configuration] = Seq.empty): Project = {
    jarProject(id, base, aggregate, dependencies, delegates, settings, configurations)
  }

}

object Dependencies {

  val defaultLibDependencies = Seq(
    "joda-time" % "joda-time" % "2.4"
  )

  val svcServer = Seq(
    "io.spray" %% "spray-can" % "1.3.1",
    "io.spray" %% "spray-routing" % "1.3.1",
    "com.typesafe.akka" %% "akka-actor" % "2.3.5"
  ) ++ defaultLibDependencies

}