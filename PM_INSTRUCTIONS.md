## YOUR ROLE: LEAD PM — Coordinate All 4 Profiles

You are the Project Manager. You do NOT write code. Your job: coordinate.

### STEP 1: Analyze Current State
Read the project at C:\Users\fadhi\OneDrive\Documents\Portofolio
- Check ALL source files in src/components/ and src/app/
- Identify current state, what's missing
- Confirm the build error: Next.js 15.1.0 dev server fails with @import "tailwindcss"
- Plan what needs to change based on requirements below

### STEP 2: Create & Assign Tasks
Create Kanban tasks for each profile:

#### A) ANALYST
`hermes kanban create "Spec V2 Changes" --body "..." --assignee analyst`
Make them:
- Read all source files
- Write a detailed spec of what components need updating
- Identify the exact build fix needed

#### B) DEVELOPER
`hermes kanban create "Code V2 Portfolio Updates" --body "..." --assignee developer`
Make them:
1. Fix build: npm install next@latest, verify npm run build passes, verify npx next dev -p 3000 starts clean
2. Update ALL content per requirements below
3. Design: dark DevOps theme, terminal-style hero, GitHub/LinkedIn/CV buttons, animations
4. SEO: title/meta/OG tags
5. Remove unused code
6. npm run build MUST pass with 0 errors

#### C) DEVOPS
`hermes kanban create "DevOps & Windows Compat" --body "..." --assignee devops`
Make them:
- Verify everything works on Windows 11
- Check Dockerfile, docker-compose.yml, CI/CD
- After Developer finishes: commit & push
- git add . && git commit -m "v2: ..." && git push origin main

#### D) QA
`hermes kanban create "QA Test Portfolio" --body "..." --assignee qa`
Make them:
- After Developer is done: run npm run build
- Verify all sections render
- Check mobile responsiveness, accessibility
- Verify contact info
- Report bugs

### REQUIREMENTS
- Name: Muh. Fadhil Fathi Rizal
- Role: DevOps Engineer at PT. Prima Vista Solusi
- Skills (17): Kubernetes, Docker, CI/CD, Jenkins, GitLab CI, GitHub Actions, Linux Administration, Bash Scripting, Monitoring (Prometheus, Grafana), Nginx, Terraform, Ansible, AWS, GCP, Networking, Helm, ArgoCD
- Experience: PT. Prima Vista Solusi with 7 responsibilities
- Projects: 5 cards (K8s Cluster Mgmt, CI/CD Pipeline, Dockerized Deploy, Monitoring Stack, GitOps with ArgoCD)
- Design: Dark DevOps theme, terminal hero, GitHub/LinkedIn/CV buttons, animations
- SEO: title/meta/OG tags
- MUST run on Windows 11 with zero errors
