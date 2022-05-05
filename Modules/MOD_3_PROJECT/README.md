# Modified CI/CD Inventory Project (Abdi, Ayman, Elizabeth, James, & Lindsey)

# Description of our Project:
Improving upon previous inventory app for 4 warehouses. Each warehouse displays a list of all items in each aisle. The user can view details of each item like name, price, description and category by clicking on any specific item from the list. A new item can be added in each aisle by submitting the form. An item can also be removed from the warehouse.

# Collaborators :
- Abdi
- Ayman
- Elizabeth
- James
- Lindsey

# Link of Website
- https://mod3-group-project.herokuapp.com/

# Install run
- Clone 
- npm install 
- node bin/populateDB.js (npm run seed)
- node server.js         (npm start)

# Team Constitution:
- Daily stand ups
- Don't push to main without group approval
- Delete previous branch after merging to avoid conflicts
- Ask for help if needed
- Keep team up to date via Slack (especially for absent members)
- Be active participant (or audience) during mod programming

# Git Commands
 **To create branch and pull request**
- git checkout -b newbranchname (create a new branch for each issue) 
- git branch (To confirm which branch you are on)
- git add . (To add all the changed files) 
- git status (To check the status of the files) 
- git commit -m "message"
- git push -upstream newbranchname (To push code)
- Create Pull request 
- git branch -D newbranchname (To delete branch)
- git branch -d newbranchname

  **Other git commands**
- git fetch origin master
- git reset --hard origin/main (To overide files)
- git rm -r --cached . 
     - git add .
- git rm --cached db.sqlite

# Docker Commands
- docker build -t mod3-project .
- docker run -d -p 3000:3000 mod3-project
- docker run -d -p 3000:3000 mod3-project sh -c "npm run seed && npm start"



 # UML
   - **[LINK NAME](./UML/activitydiagram/)**
                 




