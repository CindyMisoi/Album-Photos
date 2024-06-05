pipeline {
    agent any

    stages {
        stage('Linting and Unit Tests') {
            steps {
                sh 'npm install'
                sh 'npm run lint'
                sh 'npm run test:unit'
            }
        }
    }
}