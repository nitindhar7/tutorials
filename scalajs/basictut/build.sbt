enablePlugins(ScalaJSPlugin)

name := "Scala.js Tutorial"

scalaVersion := "2.11.5"

scalaJSStage in Global := FullOptStage

libraryDependencies += "be.doeraene" %%% "scalajs-jquery" % "0.8.0"

skip in packageJSDependencies := false

jsDependencies += RuntimeDOM

libraryDependencies += "com.lihaoyi" %%% "utest" % "0.3.0" % "test"

testFrameworks += new TestFramework("utest.runner.Framework")

persistLauncher in Compile := true

persistLauncher in Test := false
