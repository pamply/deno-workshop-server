node {
    def commit_id
    stage('Preparation') {
        checkout scm
        sh "git rev-parse --short HEAD > .git/commit-id"
        commit_id = readFile('.git/commit-id').trim()
    }
    stage('Build/Push docker') {
        sh "docker --version"
        docker.withRegistry('https://index.docker.io/v1/', 'mpamplona-docker') {
            def app = docker.build("mpamplona/deno-workshop-server:${commit_id}", '.')
            app.push()
            app.push('latest')
        }
    }

    stage('Clean') {
        def containerId = sh (script: 'docker container ls --filter publish=9000 -q', , returnStdout:true).trim()
        if (containerId != "") {
            sh "docker stop ${containerId}"
            sh "docker container prune --force"
        }
    }

    stage('Running container') {
         sh "docker run -d -p 9000:9000  mpamplona/deno-workshop-server:${commit_id}"
    }
}
