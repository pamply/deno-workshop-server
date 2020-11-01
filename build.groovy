/* groovylint-disable-next-line CompileStatic */
job('Adomi food server') {
    scm {
        git {
            remote {
                github('adomi-app/adomi-food-server', 'ssh')
                credentials('57696cfe-571a-4c12-b549-a82705601976')
            }
        }
    }
    triggers {
        scm('H/5 * * * *')
    }

    steps {
        dockerBuildAndPublish {
            repositoryName('mpamplona/adomi-food-server')
            tag('${GIT_REVISION,length=9}')
            registryCredentials('feda82db-4456-462b-8e46-7976108fc60c')
            forcePull(false)
            forceTag(false)
            createFingerprints(false)
            skipDecorate()
        }
    }
}
