# Job Portal

Job Portal is a React Stack based web app which helps in streamlining the flow of job application process. It allows users to select there roles , and create an account.
User can search and filter their job type and Apply for that job.


## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
| Example Color | ![#add8e6](https://via.placeholder.com/10/add8e6?text=+) #add8e6 |
| Example Color | ![#3575E2](https://via.placeholder.com/10/3575e2?text=+) #3575E2 |


## Demo

Insert  link to demo


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Tech Stack

**Client:** React, Redux, TailwindCSS,CSS



## Directory
Directory structure of the web app is as follows:

```bash
  frontend/
    public/
       images/
       jobs.json/
       appliedjob.json
    src/
       components/
       pages/
       router/
       sidebar/
```
## Dependencies:

* FrontEnd :
  - axios: ^1.7.7
   - html-react-parser: ^5.1.18
   - react: ^18.3.1
   - react-dom: ^18.3.1
   - react-hook-form: ^7.53.2
   - react-icons: ^5.3.0
   - react-paginate: ^8.2.0
   - react-router-dom: ^6.28.0
   - sweetalert2: ^11.14.5
   


## Usage/Examples

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#141414",
        "blue":"#3575E2",
      }
    },
  },
  plugins: [],
}
```


## Deployment

To deploy this project on Git

```bash
  git init
  git add .
  git commit -m "commit Message"
  git branch -M main (if branch is Master/Main see that)
  git remote add origin <Github link>
  git push -u origin main
  git push origin <your_branch_name> --force (if git push failed )
```
