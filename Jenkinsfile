pipeline {
    agent { docker { image 'node:14-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'sudo npm install'
                sh 'sudo npm --version'
                sh 'node ./src/index.js'
            }
        }
    }
}