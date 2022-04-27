## Capstone Project 
# PerfectPlant
![plant](https://user-images.githubusercontent.com/98463150/165517290-ffe0359a-2e96-47f6-9b6d-9bec24d7c5bc.png)

Have you ever searched for ages to find the perfect plant for your flat or as a present for your friend who always forgets to water their plants? With the PerfectPlant app you can easily find the perfect plant fitting to your individual needs in just a few seconds, it will also show you important care advice and interesting plant facts. You can edit or delete plants and add your own plants with a picture attached. The reminder makes it possible to write down tasks regarding your plants that you don't want to forget!

### Tech Stack
- React
- React Router
- React Testing Library / Jest
- Storybook
- Styled components
- Javascript
- Cloudinary
- nanoid
- Loacal Storage

This project was created with [Create React App](https://create-react-app.dev/docs/getting-started/).

### Cloudinary Setup

- Create an account on Cloudinary
- Go to Upload presets
- Click Enable unsigned uploading
- Copy the preset name (the 8 character hash below name)
- Add your cloudname and preset name to .env.local. You can use .env.example to create your own .env.local

### You can clone this repository
- install all npm dependencies `npm install`
- run app in development mode via `npm start`
- open http://localhost:3000 to view it in the browser, or you will be asked to confirm another port if this one isn't available.
- to run React Testing Library & Jest `npm test`
- to run Storybook `npm run storybook`
- Create .env.local file (please check if you have added env.local in your .gitignore)
