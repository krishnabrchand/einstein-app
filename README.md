# How to run on local machine
- First clone the repository. 
- Open Terminal, navigate to the project folder.
- Type `npm install --legacy-peer-deps` to install all the dependencies.
- Type `npm run start` to run locally


# How to deploy on github pages
- Login on your github account.
- Create new repository (einstein-app)
- Clone `https://github.com/codemaverick80/einstein-app.git` on your local machine
- Open the package.js file, update the hopepage url with your repository name ("homepage":"http://your-github-account.github.io/einstein-app"
  
- Open Terminal and  navigate to the project folder and push code on your personal github repository 
- `git add .`
- `git commit -m "initial commit"`
- `git remote add origin https://github.com/<your-github-account>/einstein-app.git`
- `git push -u origin main`
-  Type `npm run deploy`
  
- Goto your github repository
- Goto settings 
- Goto GitHub Pages section
- Click on Check it out link and it will new window where you will the url.
