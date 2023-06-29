pipeline {
    agent any
    
    stages {
        stage("Install dependencies") {
            agent {
                node {
                    label "master"
                }
            }
            steps {
                sh "npm ci"
            }
        }

        stage("Check Style") {
            agent {
                node {
                    label "master"
                }
            }
            steps {
                sh "npm run lint"
            }
        }

        stage("Test") {
            agent {
                node {
                    label "master"
                }
            }
            steps {
                sh "npm test"
            }
        }

        // Add the Release stage here
    }
}

