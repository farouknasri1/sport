// import app
const app = require("./backend/app");

// BE server is listening on PORT 3001
// http://localhost:3000
app.listen(3001, () => {
    console.log("Express Server is Running ...");
});