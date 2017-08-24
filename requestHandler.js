import axios from 'axios';

function handleRender(req, res) {
  axios.get('http://localhost:3001/books')
    .then(function(response){
      var myHtml = JSON.stringify(response.data);
      res.render('index', {myHtml});

      // 1. Create a redux store on the server

      // 2. get initial state from the store

      // 3. implement react-router on the server to intercept client requests and define what to do with them
      
    })
    .catch(function(err) {
      console.log('# Initial Server-side rendering error', err);
    })
}

module.exports = handleRender;