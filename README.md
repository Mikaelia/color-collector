# Color Collector

> A web application for creating, rating, and saving colors

### View Live At:

https://guarded-atoll-68036.herokuapp.com/

### ScreenShots

> Links Coming Soon

![intro](./screenshots/intro.png)
![color-cards](./screenshots/colors.png)
![palette options](./screenshots/paletteOptions.png)

### How to Use:

- Adjust slider and choose color from gradient options below, OR
  enter hex code of the color that you'd like to save.
- Name your color ("primary-light", "blue-dark" etc.)
- Click 'Add' to save your color. Selection will appear in color cards collection below.
- You may delete color cards, or add them to a new or existing palette (click "Show Palette Options")
  - Once you have expanded your palette control menu, select an
    existing palette from the "My Palettes" dropdown, and hit "Update Palette" to add selected color cards to the palette selected.
  - To create an entirely new palette with selected colors, enter the palette name, and hit "Submit". Your new palette will appear in the Palette View.
  - To remove palette colors, select colors within the palette view, and hit the "Remove Color From Palette" button below.

Enjoy!

#### Features

Please note that I have disabled localstorage so your colors will be replaced with initial state data on refresh!

_Current_

- [x] Ability to name and save color gradients obtained via color slider component
- [x] Ability to save colors based on provided hex codes
- [x] Option to rate colors
- [x] Option to create a new palette with selected color, or add colors to a pre-existing palette.
- [x] Option to remove colors from saved color palette
- [x] Responsive layout, with the ability to display and hide palette controls panel
- [x] Ability to delete palette
- [x] Feedback on form submission

_Future_

- [ ] Auto CSS generator for your saved color palettes
- [ ] Ability to sort saved colors based on time, rating, etc
- [ ] Ability to deselect colors on off-click
- [ ] Fix bug where long palette list expands under cards
- [ ] Better visual direction for users on how to select colors
- [ ] Functionality to accept values other than hex
- [ ] Functionality to shift between color picker styles
- [ ] Ability to auto-generate a palette given multiple colors

#### Technologies

- React
- Redux
- CSS/SASS

### Running Locally

#### Clone or Download

`git clone https://github.com/Mikaelia/color-collector`

#### Install Dependencies

`npm install`

#### Start Application

`npm start`

## Background and File Organization

Although the size of this project did not require the use of Redux, it served as a great challenge for me to practice state management using this library. Color Collector helped me think about state management more strategically. It was interesting trying to determine how to maximize my use of presentational components (I still have a lot to learn!) and how centralize my state, break it into parts, and design reducers that would manipulate the state in the way that I wanted.

One of my main interests is learning how to design code that is maintainable and scalable. Although it was great to have all of my state maintained in a single place, I did feel that I was excessively passing functions from parent to child, and wonder how to write code that is more modular. How do you structure your applications to accomplish this? I'd love feedback!

Another goal for this project was to design a styling system that was easy to maintian, implement, adapt, and scale. I took a lot of time to experiment with file structure, and to create mixins and variables that I hoped would improve the consistency and reusability of the styling throughout my application.

My stylesheets are divided into `component`, `modules` and `partials` folders. The `modules` folder holds all of the abstract styles that are component agnostic.

##### Style Filesystem Breakdown

- _components_

  - Contains styles specific to React components

- _modules_

  - `_variables.scss`

    - Houses all of the main variables that I use throughout my application. This includes main colors, box-shadows, a default border radius, breakpoints, etc. Having variable values for these features makes an app much more easy to update, and quickly apply different stylistic themes to.

  - `_animations.scss`

    - Contains css animations

  - `_mixins.scss`

    - Really helps cut down on redundant code for features use nultiple times in my application. I have a mixin for the main button, for visibility transitions, creating a default, centered, flex-column layout, and for media queries.

  - `_utility.scss`
    - I used this file for creating utility classes that I could add inject directly into the html. I had seen this method used before in css frameworks (Bootstrap, etc.) and wanted to test out creating utility classes improved the consistency of my styling. Similar utilities specific to typography (font weight, size, etc.) can be found in the `partials/_typography.scss` folder.

- _partials_
  - `_base.scss`
    - Contains the base, universal styling for my app
  - `_layout.scss`
    - Contains styles relating to the overall, top level look of the site
  - `_typography.scss`
    - Contains text-specific variables and utilities relating to typography. I wanted a separate folder for these to keep things clean and more organized.

##### App Filesystem Breakdown

Redux-specific:

- _containers_
  - Contains all of the smart components that connect callbacks that trigger actions that change state in redux store to child components
- _store_
  - `index.js`
    - Combines reduces, connects store to reducers, initial state data, Redux devtools via store factory function
  - `reducers.js`
    - Holds reducers for manipulating state

All actions are stored in `actions.js` and are connected to my top-level components via container components in the `containers.js` file found in the `components` folder.

These container components are finally composed in the `App.js` file.

These top-level components each have their own subfolders within the `ui` folder, that houses my React components
