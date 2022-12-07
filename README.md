# Replacing Redux with React Hooks

- Article found here: https://www.leighhalliday.com/replacing-redux-with-react-hooks
- Video found here: https://www.youtube.com/watch?v=eBYJ7O482Dc

## Architecture of this app

Directory structure of main files that will be edited are within these "src" folders:

- components
- css
- state

### /components

Within "components" folder are the components (pages, screens and widgets) that appear in the UI. Most of these will be interactive and functional. Each component is a subfolder named as a description of the component, and should also match the React functional component that will be exported. For example, there is subfolder for "filters" and another for "results". Within each subfolder are two files:

- index.js
- view.js

#### index.js

index.js will export a functional component that renders a JSX (HTML) element. The function should be named the same as the folder it's within. This file contains the *controller* logic and functions that both update the *view* and call actions that update the *model* (state). There should be little to no JSX within this file. Instead it will import the view from view.js and pass necessary properties down to it. As most components will need access to the global state, it is necessary to pull needed state components through "useContext" React hook.

#### view.js

view.js should contain just the JSX code which generates HTML. All functions and logic should be passed down from its parent within index.js. No functionality from interactions within the view should directly call up state actions. The "handle" functions passed as props will call the state actions. Only state values should be made accessible to the view through useContext hook.

### css

All styling files (in this case .scss since the app is using "sass") are located within this folder. At minimum there should be an index.scss file which is imported by the src/index.js. If there are additional files, e.g, a file just for filters styling - filters.scss, this file will be imported by index.scss.

### state