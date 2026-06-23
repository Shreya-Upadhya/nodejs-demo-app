# Task 1: CI/CD Pipeline with GitHub Actions
This is a Node.js demonstration project designed to understand CI/CD pipeline concepts using GitHub Actions. It's a simple Express server that serves as the artifact for an automated testing, building, and deployment workflow. The project demonstrates how code changes automatically flow through validation, containerization, and deployment stages—no manual intervention required.
When code is pushed to main, the workflow triggers. The test job installs dependencies and runs npm test. Once tests pass, the build-and-push job builds a Docker image tagged with the latest commit and pushes it to Docker Hub under the slayerass/nodejs-demo-app namespace. The deploy job confirms success. Each job depends on the previous one, ensuring quality gates are met before deployment.

Your code on GitHub
        ↓
GitHub Actions runner (Ubuntu VM) executes:
  1. docker build -t slayerass/nodejs-demo-app:latest .
     ↑ Creates the image locally on the runner
  2. docker login (authenticate to Docker Hub)
  3. docker push slayerass/nodejs-demo-app:latest
     ↑ Sends that image to Docker Hub
        ↓
Docker Hub stores it in your registry

## 🎯 What I Built
A complete CI/CD pipeline that automatically tests, builds Docker image, and pushes to Docker Hub whenever code is pushed to the `main` branch.

## 🔄 How My Pipeline Works
Push to main → Run Tests → Build Docker Image → Push to Docker Hub → Deploy

## 📂 Pipeline Structure (3 Jobs)
| Job | What it does |
|-----|---------------|
| **Test** | Installs dependencies & runs `npm test` |
| **Build & Push** | Creates Docker image & uploads to Docker Hub |
| **Deploy** | Simulates deployment (ready for real server) |

## 🔧 Key Concepts I Learned

| Concept | My Understanding |
|---------|------------------|
| **CI/CD** | CI = auto test code on push / CD = auto deploy after tests pass |
| **GitHub Actions** | YAML workflows that run on triggers (push, PR, etc.) |
| **Runners** | GitHub's servers that execute my workflows |
| **Jobs vs Steps** | Jobs = group of steps / Steps = individual commands |
| **Secrets** | Encrypted credentials stored in GitHub Settings |
| **Docker Build-Push** | `docker build` → `docker login` → `docker push` |

## 🐳 Docker Deployment
Every push to `main` creates a NEW Docker image and pushes to https://hub.docker.com/repository/docker/slayerass/nodejs-demo-app/latest

### GitHub Actions Pipeline Success
<img width="1920" height="682" alt="2026-05-31 (12)" src="https://github.com/user-attachments/assets/ab983ac0-fbb6-4cf7-90e1-e4ee000fd2e7" />

### Pipeline Jobs
<img width="1920" height="623" alt="2026-05-31 (10)" src="https://github.com/user-attachments/assets/e2e23626-77d3-48de-a3a4-32a7f7f4aecb" />

### Docker Hub Image
<img width="1920" height="841" alt="2026-05-31 (11)" src="https://github.com/user-attachments/assets/166a7f9d-ccef-4d8c-ab93-744ddca0325d" />

## ✅ Task Status
- [x] GitHub repo with .yml CI/CD workflow
- [x] Pipeline triggers on push to main
- [x] Jobs for build and deployment
- [x] DockerHub for image deployment
- [x] Test → Build → Push automated
- [x] Node.js sample app tested
