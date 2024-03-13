# Demo link
 - http://gsneaker.datvu.tech

# Installation Guide

## Prerequisites
- Docker installed

## Step 1: Clone the Repository and start server
1. Open your terminal or command prompt.
2. Clone the repository:
    git clone https://github.com/vutiendat3601/goldenowl-gsneaker.git
2. From the root directory of project .
    cd goldenowl-gsneaker/docker
3. Run the following command to start:
    docker compose -f compose.yaml up -d

## Step 2: Visit the website
1. Open the browser and visit:
   http://localhost
2. Enjoy

# ###############################################
# Note
1. The compose.yaml in the root directory of project is used for Docker Compose in Spring framework.
2. In this project, the Frontend ReactJS and the Backend Spring Boot are served in one server the Apache Tomcat. The Frontend source code is src/main/js, when build success it's located at target/classes/static (frontend-maven-plugin).
