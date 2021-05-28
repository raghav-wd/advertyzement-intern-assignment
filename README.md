#Approach

1. Made a repo on github and cloned it locally on my pc
2. Initialized a reactjs project in the repo using "create-react-app userapp"
3. Made 3 React UI components - Loader, Navbar and UserCard in components folder
4. Wrote html in respective react component and css in App.css
5. Since "Get Users" button is in Navbar I did state lifting upto the ancestor component which is App.js
6. When button is clicked in navbar state is lifed to the App.js
7. We call our api in App.js when button is clicked using map() we print out UserCards with api data into the dom