'use strict'

var APIPrefix = '/_api';
var challengeSection = [
  /*{
    name: 'npm - package.json',
    defaultPrj : 'red-moose'
  }, {
    name: 'node - express',
    defaultPrj : 'west-horse'
  }, {
    name: 'mongo - mongoose',
    defaultPrj : 'trite-organ'
  }, {
    name: 'infosec - helmet',
    defaultPrj: 'rust-ninja'
  }, {
    name: 'QA tests basic',
    defaultPrj: 'time-shape'
  }, {
    name: 'Advanced Express',
    defaultPrj: 'luminous-dart'
  },{
    name : 'MS1 - timestamp',
    defaultPrj: 'curse-arrow'
  }, {
    name : 'MS2 - header parser',
    defaultPrj: 'dandelion-roar'
  }, {
    name : 'MS3 - url shortener',
    defaultPrj: 'thread-paper'
  }, {
    name: 'MS4 - image search',
    defaultPrj: 'evening-bane'
  },{
    name : 'MS5 - file metadata',
    defaultPrj: 'purple-paladin'
  },*/
  {
    name : 'BCrypt Intro IS',
    defaultPrj: 'fierce-glue'
  },
  {
    name : 'Advanced Node Socket',
    defaultPrj: 'buttercup-delete'
  },
  {
    name : 'Advanced Node Social',
    defaultPrj: 'guttural-birch'
  },
  {
    name : 'Advanced Node Passport',
    defaultPrj: 'delicious-herring'
  },
  {
    name : 'MS6 - Exercise Tracker',
    defaultPrj: 'fuschia-custard'
  },
  {
    name : 'ISQA_1 - Personal Library',
    defaultPrj: 'spark-cathedral'
  },
  {
    name : 'ISQA_2 - Metric/Imp Converter', 
    defaultPrj: 'hard-twilight'
  },
  {
    name : 'ISQA_3 - Anon Message Board', 
    defaultPrj: 'near-mile'
  },
  {
    name : 'ISQA_4 - Issue Tracker',
    defaultPrj: 'protective-garage'
  },
  {
    name : 'ISQA_5 - Nasdaq Stock Prices',
    defaultPrj: 'treasure-poppy'
  }
];


var APITests = [
  {
    "1 - ser": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/server.js')
      .then(data => {
        assert.match(data, /START_ASYNC[^]*bcrypt.hash.*myPlaintextPassword( |),( |)saltRounds( |),( |).*err( |),( |)hash[^]*END_ASYNC/gi, 'You should call bcrypt.hash on myPlaintextPassword and saltRounds and handle err and hash as a result in the callback');
        assert.match(data, /START_ASYNC[^]*bcrypt.hash[^]*bcrypt.compare.*myPlaintextPassword( |),( |)hash( |),( |).*err( |),( |)res[^]*}[^]*}[^]*END_ASYNC/gi, 'Nested within the hash function should be the compare function comparing myPlaintextPassword to hash');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,    
    
    "2 - ser": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/server.js')
      .then(data => {
        assert.match(data, /START_SYNC[^]*hash.*=.*bcrypt.hashSync.*myPlaintextPassword( |),( |)saltRounds[^]*END_SYNC/gi, 'You should call bcrypt.hashSync on myPlaintextPassword with saltRounds');
        assert.match(data, /START_SYNC[^]*result.*=.*bcrypt.compareSync.*myPlaintextPassword( |),( |)hash[^]*END_SYNC/gi, 'You should call bcrypt.compareSync on myPlaintextPassword with the hash generated in the last line');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,  
    
    
    
    
    
    
  },
  {
    "1 - strat": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/server.js')
      .then(data => {
        assert.match(data, /io.*=.*require.*('|\")socket.io('|\").*http/gi, 'You should correctly require and instanciate socket.io as io.');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,   
    "1 - ser": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/server.js')
      .then(data => {
        assert.match(data, /io.on.*('|\")connection('|\").*socket/gi, 'io should listen for \"connection\" and socket should be the 2nd arguments variable');
      }, xhr => { throw new Error(xhr.statusText); })
    }`, 
    "1 - cli": `{
      getUserInput => $.get(getUserInput('url')+ '/public/client.js')
      .then(data => {
        assert.match(data, /socket.*=.*io/gi, 'Your client should be connection to server with the connection defined as socket');
      }, xhr => { throw new Error(xhr.statusText); })
    }`, 
    
    
    "2 - ser": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/server.js')
      .then(data => {
        assert.match(data, /io.emit.*('|\")user count('|\").*currentUsers/gi, 'You should emit \"user count\" with data currentUsers');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "2 - cli": `{
      getUserInput => $.get(getUserInput('url')+ '/public/client.js')
      .then(data => {
        assert.match(data, /socket.*=.*io/gi, 'Your client should be listening for the \"user count\" event');
      }, xhr => { throw new Error(xhr.statusText); })
    }`, 
    
    
    "3 - ser": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/server.js')
      .then(data => {
        assert.match(data, /io.use.*passportSocketIo.authorize/gi, 'You should have told io to use passportSocketIo.authorize with the correct options');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    
    
    
    "4 - ser": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/server.js')
      .then(data => {
        assert.match(data, /io.emit.*('|\")user('|\").*name.*currentUsers.*connected/gi, 'You should have an event emitted named user sending name, currentUsers, and connected');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "4 - cli": `{
      getUserInput => $.get(getUserInput('url')+ '/public/client.js')
      .then(data => {
        assert.match(data, /socket.on.*('|\")user('|\")[^]*num-users/gi, 'You should change the text of #num-users within on your client within the \"user\" even listener to show the current users connected');
        assert.match(data, /socket.on.*('|\")user('|\")[^]*messages.*li/gi, 'You should append a list item to #messages on your client within the \"user\" event listener to annouce a user came or went');
      }, xhr => { throw new Error(xhr.statusText); })
    }`, 
    
    
    "5 - ser": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/server.js')
      .then(data => {
        assert.match(data, /socket.on.*('|\")chat message('|\")[^]*io.emit.*('|\")chat message('|\").*name.*message/gi, 'Your server should listen to the socket for \"chat message\" then emit to all users \"chat message\" with name and message in the data object');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "5 - cli": `{
      getUserInput => $.get(getUserInput('url')+ '/public/client.js')
      .then(data => {
        assert.match(data, /socket.on.*('|\")chat message('|\")[^]*messages.*li/gi, 'You should append a list item to #messages on your client within the \"chat message\" event listener to display the new message');
      }, xhr => { throw new Error(xhr.statusText); })
    }`, 
    
    
    
    // io.emit('user', {name: socket.request.user.name, currentUsers, connected: true});
  },
  {
    "1 - routes": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/server.js')
      .then(data => {
        assert.match(data, /('|")\\/auth\\/github('|")[^]*get.*passport.authenticate.*github/gi, 'Route auth/github should only call passport.authenticate with github');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "1 - routes 2": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/server.js')
      .then(data => {
        assert.match(data, /('|\")\\/auth\\/github\\/callback('|\")[^]*get.*passport.authenticate.*github.*failureRedirect:( |)(\"|')\\/(\"|')/gi, 'Route auth/github/callback should accept a get request and call passport.authenticate for github with a failure redirect to home');
      }, xhr => { throw new Error(xhr.statusText); })
    }`, 
    
    
    "2 - dep": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/package.json')
      .then(data => {
        var packJson = JSON.parse(data);
        assert.property(packJson.dependencies, 'passport-github', 'Your project should list \"passport-github\" as a dependency');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "2 - req": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/server.js')
      .then(data => {
        assert.match(data, /require.*(\"|')passport-github(\"|')/gi, 'You should have required passport-github');
      }, xhr => { throw new Error(xhr.statusText); })
    }`, 
    "2 - strat": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/server.js')
      .then(data => {
        assert.match(data, /passport.use.*new GitHubStrategy/gi, 'Passport should use a new GitHubStrategy');
        assert.match(data, /callbackURL:( |)(\"|').*(\"|')/gi, 'You should have a callbackURL');
        assert.match(data, /process.env.GITHUB_CLIENT_SECRET/g, 'You should use process.env.GITHUB_CLIENT_SECRET');
        assert.match(data, /process.env.GITHUB_CLIENT_ID/g, 'You should use process.env.GITHUB_CLIENT_ID');
      }, xhr => { throw new Error(xhr.statusText); })
    }`, 
    
    
    
    "3 - strat": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/server.js')
      .then(data => {
        assert.match(data, /passport.use.*new GitHubStrategy/gi, 'Passport should use a new GitHubStrategy');
        assert.match(data, /callbackURL:( |)(\"|').*(\"|')/gi, 'You should have a callbackURL');
        assert.match(data, /process.env.GITHUB_CLIENT_SECRET/g, 'You should use process.env.GITHUB_CLIENT_SECRET');
        assert.match(data, /process.env.GITHUB_CLIENT_ID/g, 'You should use process.env.GITHUB_CLIENT_ID');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    
    "4 - strat": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/server.js')
      .then(data => {
        assert.match(data, /GitHubStrategy[^]*db.collection/gi, 'Strategy should use now use the database to search for the user');
        assert.match(data, /GitHubStrategy[^]*socialusers/gi, 'Strategy should use \"socialusers\" as db collection');
        assert.match(data, /GitHubStrategy[^]*return cb/gi, 'Strategy should return the callback function \"cb\"');
      }, xhr => { throw new Error(xhr.statusText); })
    }`, 
    
    
    
  },
  {
    "STE - dep": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/package.json')
      .then(data => {
        var packJson = JSON.parse(data);
        assert.property(packJson.dependencies, 'pug', 'Your project should list \"pug\" as a dependency');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "STE - app.use('view-engine', 'pug')": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/server.js')
      .then(data => {
        assert.match(data, /('|\")view engine('|\"),( |)('|\")pug('|\")/gi, 'Your project should set Pug as a view engine');
      }, xhr => { throw new Error(xhr.statusText); })
    }`, 
    "STE - Check public": `{
      getUserInput => $.get(getUserInput('url')+ '/')
      .then(data => {
        assert.match(data, /pug-success-message/gi, 'Your projects home page should now be rendered by pug with the projects .pug file unaltered');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    
    
    "UTEP - var": `{
      getUserInput => $.get(getUserInput('url')+ '/')
      .then(data => {
        assert.match(data, /pug-variable(\"|')>Please login/gi, 'Your projects home page should now be rendered by pug with the projects .pug file unaltered');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    
    
    "SUP - dep": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/package.json')
      .then(data => {
        var packJson = JSON.parse(data);
        assert.property(packJson.dependencies, 'passport', 'Your project should list \"passport\" as a dependency');
        assert.property(packJson.dependencies, 'express-session', 'Your project should list \"express-session\" as a dependency');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "SUP - req": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/server.js')
      .then(data => {
        assert.match(data, /require.*(\"|')passport(\"|')/gi, 'You should have required passport');
        assert.match(data, /require.*(\"|')express-session(\"|')/gi, 'You should have required express-session');
      }, xhr => { throw new Error(xhr.statusText); })
    }`, 
    "SUP - app.use p": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/server.js')
      .then(data => {
        assert.match(data, /passport.initialize/gi, 'Your express app should use \"passport.initialize()\"');
        assert.match(data, /passport.session/gi, 'Your express app should use \"passport.session()\"');
      }, xhr => { throw new Error(xhr.statusText); })
    }`, 
    "SUP - session setup": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/server.js')
      .then(data => {
        assert.match(data, /secret:( |)process.env.SESSION_SECRET/gi, 'Your express app should have express-session set up with your secret as process.env.SESSION_SECRET');
      }, xhr => { throw new Error(xhr.statusText); })
    }`, 
    
    
    "SUO - serial": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/server.js')
      .then(data => {
        assert.match(data, /passport.serializeUser/gi, 'You should have created your passport.serializeUser function');
        assert.match(data, /null, user._id/gi, 'There should be a callback in your serializeUser with (null, user._id)');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "SUO - deserial": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/server.js')
      .then(data => {
        assert.match(data, /passport.deserializeUser/gi, 'You should have created your passport.deserializeUser function');
        assert.match(data, /null,( |)null/gi, 'There should be a callback in your deserializeUser with (null, null) for now');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "SUO - objectid": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/server.js')
      .then(data => {
        assert.match(data, /require\([^\)](\"|')mongodb(\"|')\)/gi, 'You should have required mongodb');
        assert.match(data, /new ObjectID\([^\)]id\)/gi, 'Even though the block is commented out, you should use new ObjectID(id) for when we add the database');
      }, xhr => { throw new Error(xhr.statusText); })
    }`, 
    
    

    
    "ISPU - req": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/server.js')
      .then(data => {
        assert.match(data, /mongo.connect/gi, 'You should have created a connection to your database');
        assert.match(data, /mongo.connect[^]*app.listen[^]*}[^]*}[^]*\([^\)]*\)/gi, 'You should have your app.listen nested at within your database connection at the bottom');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "ISPU - deser": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/server.js')
      .then(data => {
        assert.notMatch(data, /null,( |)null/gi, 'The callback in deserializeUser of (null, null) should be completely removed for the db block uncommented out');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    
    
    
    
    "AS - dep": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/package.json')
      .then(data => {
        var packJson = JSON.parse(data);
        assert.property(packJson.dependencies, 'passport-local', 'Your project should list \"passport-local \" as a dependency');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "AS - req": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/server.js')
      .then(data => {
        assert.match(data, /require\([^\)](\"|')passport-local(\"|')\)/gi, 'You should have required passport-local');
        assert.match(data, /new LocalStrategy/gi, 'You should have told passport to use a new strategy');
        assert.match(data, /findOne/gi, 'Your new local strategy should use the findOne query to find a username based on the inputs');
      }, xhr => { throw new Error(xhr.statusText); })
    }`, 
    
    
    "UPS - ser": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/server.js')
      .then(data => {
        assert.match(data, /showLogin:( |)true/gi, 'You should be passing the variable \"showLogin\" as true to your render function for the homepage');
        assert.match(data, /failureRedirect:( |)('|\")\\/('|\")/gi, 'Your code should include a failureRedirect to the \"/\" route');
        assert.match(data, /login[^]*post[^]*local/gi, 'You should have a route for login which accepts a POST and passport.authenticates local');
      }, xhr => { throw new Error(xhr.statusText); })
    }`, 
    "UPS - attempt log": `{
      getUserInput => $.post(getUserInput('url')+ '/login')
      .then(data => {
        assert.match(data, /Home page/gi, 'A login attempt at this point should redirect to the homepage since we do not have any registered users');
      }, xhr => { throw new Error(xhr.statusText); })
    }`, 
    
    
    
    "CNM - ser": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/server.js')
      .then(data => {
        assert.match(data, /ensureAuthenticated[^]*req.isAuthenticated/gi, 'Your ensureAuthenticated middleware should be defined and utilize the req.isAuthenticated function');
        assert.match(data, /profile[^]*get[^]*ensureAuthenticated/gi, 'Your ensureAuthenticated middleware should be defined and utilize the req.isAuthenticated function'); 
      }, xhr => { throw new Error(xhr.statusText); })
    }`, 
    "CNM - attempt pro": `{
      getUserInput => $.get(getUserInput('url')+ '/profile')
      .then(data => {
        assert.match(data, /Home page/gi, 'An attempt to go to the profile at this point should redirect to the homepage since we are not logged in');
      }, xhr => { throw new Error(xhr.statusText); })
    }`, 
    
    
    "PPT - ser": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/server.js')
      .then(data => {
        assert.match(data, /\\/views\\/pug\\/profile[^]*username:( |)req.user.username/gi, 'You should be passing the variable username with req.user.username into the render function of the profile page');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    
    
    
    "LUO - ser": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/server.js')
      .then(data => {
        assert.match(data, /req.logout/gi, 'You should be call req.logout() in youre /logout route');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "LUO - attempt logout": `{
      getUserInput => $.get(getUserInput('url')+ '/logout')
      .then(data => {
        assert.match(data, /Home page/gi, 'When a user logs out they should be redirected to the homepage');
      }, xhr => { throw new Error(xhr.statusText); })
    }`, 
    
    
    
    "RNU - ser": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/server.js')
      .then(data => {
        assert.match(data, /showRegistration:( |)true/gi, 'You should be passing the variable \"showRegistration\" as true to your render function for the homepage');
        assert.match(data, /register[^]*post[^]*findOne[^]*username:( |)req.body.username/gi, 'You should have a route accepted a post request on register that querys the db with findone and the query being \"username: req.body.username\"');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "RNU register": `{
      getUserInput => $.ajax({url: getUserInput('url')+ '/register',data: {username: 'freeCodeCampTester', password: 'freeCodeCampTester'},crossDomain: true, type: 'POST', xhrFields: { withCredentials: true }})
      .then(data => {
        assert.match(data, /Profile/gi, 'I should be able to register and it direct me to my profile. CLEAR YOUR DATABASE if this test fails (each time until its right!)');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "RNU login": `{
      getUserInput => $.ajax({url: getUserInput('url')+ '/login',data: {username: 'freeCodeCampTester', password: 'freeCodeCampTester'}, type: 'POST', xhrFields: { withCredentials: true }})
      .then(data => {
        assert.match(data, /Profile/gi, 'Login should work if previous test was done successfully and redirect successfully to the profile. Check your work and clear your DB');
        assert.match(data, /freeCodeCampTester/gi, 'The profile should properly display the welcome to the user logged in');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "RNU logout": `{
      getUserInput => $.ajax({url: getUserInput('url')+ '/logout', type: 'GET', xhrFields: { withCredentials: true }})
      .then(data => {
        assert.match(data, /Home/gi, 'Logout should redirect to home');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "RNU nonauth pro": `{
      getUserInput => $.ajax({url: getUserInput('url')+ '/profile', type: 'GET', crossDomain: true, xhrFields: { withCredentials: true }})
      .then(data => {
        assert.match(data, /Home/gi, 'Profile should redirect to home when we are logged out now again');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    
    
    "ENDD": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/server.js')
      .then(data => {
        assert.match(data, /require\([^\)](\"|').\\/routes.js(\"|')\)/gi, 'You should have required passport-local');
        assert.match(data, /routes/gi, 'You should be passing the variable \"showRegistration\" as true to your render function for the homepage');
        }, xhr => { throw new Error(xhr.statusText); })
    }`,
    
    
    "STE - d": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/package.json')
      .then(data => {
        var packJson = JSON.parse(data);
        assert.property(packJson.dependencies, 'pug', 'Your project should list \"pug\" as a dependency');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    
    
  },
  /*{
    // npm - package.json - DONE
   // "test - valid sync assertion" : "assert('ok', 'test not working')",
    // "test - invalid sync assertion test" : "assert(false, 'Invalid assertion test OK')",
    "author" : "getUserInput => ($.get(getUserInput('url') + '/_api/package.json').then(data => { var packJson = JSON.parse(data); assert(packJson.author, 'no author field'); }, xhr => { throw new Error(xhr.statusText); }).promise())",
    "description" : "getUserInput => $.get(getUserInput('url') + '/_api/package.json').then(data => { var packJson = JSON.parse(data); assert(packJson.description, 'no description field'); }, xhr => { throw new Error(xhr.statusText); })",
    "version" : "() => ($.get(window.projectUrl + '/_api/package.json').then(function(data){ var packJson = JSON.parse(data);     assert(packJson.version, 'no version field'); }).promise())",
    "license" : "() => ($.get(window.projectUrl + '/_api/package.json').then(function(data){ var packJson = JSON.parse(data);     assert(packJson.license, 'no license field'); }).promise())",
    "keywords" : "() => ($.get(window.projectUrl + '/_api/package.json').then(function(data){ var packJson = JSON.parse(data);     assert(packJson.keywords , 'no keywords field'); }).promise())",
    "keywords isArray" : "() => ($.get(window.projectUrl + '/_api/package.json').then(function(data){ var packJson = JSON.parse(data);     assert.isArray(packJson.keywords); }).promise())",
    "keywords include freecodecamp" : "() => ($.get(window.projectUrl + '/_api/package.json').then(function(data){ var packJson = JSON.parse(data);     assert.include(packJson.keywords, 'freecodecamp'); }).promise())",
    "deps-include-moment" : "() => ($.get(window.projectUrl + '/_api/package.json').then(function(data){ var packJson = JSON.parse(data);     assert.property(packJson.dependencies, 'moment'); }).promise())",
    "moment 2.14.0" :  "() => ($.get(window.projectUrl + '/_api/package.json').then(function(data){ var packJson = JSON.parse(data);     assert.match(packJson.dependencies.moment, /^[\\^\\~]?2\\.14\\.0/); }).promise())",
    "moment old version 2.10.2" : "() => ($.get(window.projectUrl + '/_api/package.json').then(function(data){ var packJson = JSON.parse(data);     assert.match(packJson.dependencies.moment, /^[\\^\\~]?2\\.10\\.2/); }).promise())",
    "moment tilde ~2.10.x" : "() => ($.get(window.projectUrl + '/_api/package.json').then(function(data){ var packJson = JSON.parse(data);     assert.match(packJson.dependencies.moment, /^\\~2\\.10\\./); }).promise())",
    "moment caret ^2.x.x" : "() => ($.get(window.projectUrl + '/_api/package.json').then(function(data){ var packJson = JSON.parse(data);     assert.match(packJson.dependencies.moment, /^\\^2\\./); }).promise())",
    "deps not include moment" : "() => ($.get(window.projectUrl + '/_api/package.json').then(function(data){ var packJson = JSON.parse(data);     assert.notProperty(packJson.dependencies, 'moment'); }).promise())"
  }, {
    // basic node-express - DONE
    /** latest test format => **//* "hello console" : "getUserInput => $.get(getUserInput('url') + '/_api/hello-console').then(data => { assert.isTrue(data.passed, '\"Hello World\" should be in the console'); }, xhr => { throw new Error(xhr.responseText); })",
    "first working server - get 'Hello Express'" : "getUserInput => $.get(getUserInput('url')).then(function(data){ assert.equal(data, 'Hello Express') }, xhr => { throw new Error(xhr.responseText); })",
    "serve html" : "getUserInput => $.get(getUserInput('url')).then(function(data){ assert.match(data, /<h1>.*<\\/h1>/); }, xhr => { throw new Error(xhr.responseText); })",
    "serve static assets - public/style.css" : "getUserInput => $.get(getUserInput('url') + '/style.css').then(function(data){ assert.match(data, /body\\s*\\{[^\\}]*\\}/); }, xhr => { throw new Error(xhr.responseText); })",
    "GET /json -> {message: 'Hello json'}" : "() => ($.get(window.projectUrl + '/json').then(function(data){ assert.equal(data.message, 'Hello json'); }, xhr => { throw new Error(xhr.responseText); }).promise())",
    "use .env vars" : "() => ($.get(window.projectUrl + '/_api/use-env-vars').then(function(data){ assert.isTrue(data.passed, 'the JSON response should change setting the env MESSAGE_STYLE'); }, xhr => { throw new Error(xhr.responseText); }).promise())",
    "logger MWare" : "() => ($.get(window.projectUrl + '/_api/root-middleware-logger').then(function(data){ assert.isTrue(data.passed, 'the logger middleware should be mounted'); }, xhr => { throw new Error(xhr.responseText); }).promise())",
    "GET /now stackLength == 2" : "() => ($.get(window.projectUrl + '/_api/chain-middleware-time').then(function(data){ assert.equal(data.stackLength, 2, 'route /now should have middleware mounted'); }, xhr => { throw new Error(xhr.responseText); }).promise())",
    "GET /now => current time +/- 20s" : "() => ($.get(window.projectUrl + '/_api/chain-middleware-time').then(function(data){ var now = new Date(); assert.isAtMost(Math.abs(new Date(data.time) - now), 20000); }, xhr => { throw new Error(xhr.responseText); }).promise())",
    "GET /ech0-t3st/echo => { echo: 'ech0-t3st' }" : "() => ($.get(window.projectUrl + '/ech0-t3st/echo').then(function(data){ assert.equal(data.echo, 'ech0-t3st') }, xhr => { throw new Error(xhr.responseText); }).promise())",
    "GET /name?last=Richards&first=Keith => { name: 'Keith Richards' }" : "() => ($.get(window.projectUrl + '/name?last=Richards&first=Keith').then(function(data){ assert.equal(data.name, 'Keith Richards') }, xhr => { throw new Error(xhr.responseText); }).promise())",
    "mount body-parser" : "() => ($.get(window.projectUrl + '/_api/add-body-parser').then(function(data){ assert.isAbove(data.mountedAt, 0) }, xhr => { throw new Error(xhr.responseText); }).promise())",
    "POST /name " : "() => ($.post(window.projectUrl + '/name', {first: 'Mick', last: 'Jagger'}).then(function(data){ assert.equal(data.name, 'Mick Jagger') }, xhr => { throw new Error(xhr.responseText); }).promise())"
  }, {
    // mongodb-mongoose - /** NEW FORMAT HERE !!! **/ /*
    "mongodb installed" : "getUserInput => $.get(getUserInput('url') + '/_api/file/package.json').then(function(data){ var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'mongodb'); }, xhr => { throw new Error(xhr.responseText); })",
    "mongoose installed" : "getUserInput => ($.get(getUserInput('url') + '/_api/file/package.json').then(function(data){ var packJson = JSON.parse(data); assert.property(packJson.dependencies, 'mongoose'); }, xhr => { throw new Error(xhr.responseText); }).promise())",
    "mongoose schema": "getUserInput => ($.post(getUserInput('url') + '/_api/mongoose-model', {name: 'Mike', age: 28, favoriteFoods: ['pizza', 'cheese']}).then(data => { assert.equal(data.name, 'Mike', '\"model.name\" is not what expected'); assert.equal(data.age, '28', '\"model.age\" is not what expected'); assert.isArray(data.favoriteFoods, '\"model.favoriteFoods\" is not an Array'); assert.include(data.favoriteFoods, 'pizza', '\"model.favoriteFoods\" does not include the expected items'); assert.include(data.favoriteFoods, 'cheese', '\"model.favoriteFoods\" does not include the expected items'); }, xhr => { throw new Error(xhr.responseText); }).promise())",
    "create and save" : "getUserInput => ($.get(getUserInput('url') + '/_api/create-and-save-person').then(data => { assert.isString(data.name, '\"model.name\" should be a String'); assert.isNumber(data.age, '28', '\"model.age\" should be a Number'); assert.isArray(data.favoriteFoods, '\"model.favoriteFoods\" should be an Array'); assert.equal(data.__v, 0, 'The db item should be not previously edited'); }, xhr => { throw new Error(xhr.responseText); }).promise())",
    "create many": "getUserInput => ($.ajax({url: getUserInput('url') + '/_api/create-many-people', type: 'POST', contentType:'application/json', data: JSON.stringify([{name: 'John', age: 24, favoriteFoods: ['pizza', 'salad']}, {name: 'Mary', age: 21, favoriteFoods: ['onions', 'chicken']}])}).then(data => { assert.isArray(data, 'the response should be an array'); assert.equal(data.length, 2, 'the response does not contain the expected number of items'); assert.equal(data[0].name, 'John', 'The first item is not correct'); assert.equal(data[0].__v, 0, 'The first item should be not previously edited'); assert.equal(data[1].name, 'Mary', 'The second item is not correct'); assert.equal(data[1].__v, 0, 'The second item should be not previously edited'); }, xhr => { throw new Error(xhr.responseText); }).promise())",
    "find all by name" : "getUserInput => ($.post(getUserInput('url') + '/_api/find-all-by-name', {name: 'r@nd0mN4m3', age: 24, favoriteFoods: ['pizza']}).then(data => { assert.isArray(data, 'the response should be an Array');  assert.equal(data[0].name, 'r@nd0mN4m3', 'Model.name is not what expected'); assert.equal(data[0].__v, 0, 'The item should be not previously edited'); }, xhr => { throw new Error(xhr.responseText); }).promise())",
    "find one by food": "getUserInput => ($.post(getUserInput('url') + '/_api/find-one-by-food', {name: 'Gary', age: 46, favoriteFoods: ['chicken salad']}).then(data => { assert.equal(data.name, 'Gary', 'item.name is not what expected'); assert.deepEqual(data.favoriteFoods, ['chicken salad'], 'item.favoriteFoods is not what expected'); assert.equal(data.__v, 0, 'The item should be not previously edited'); }, xhr => { throw new Error(xhr.responseText); }).promise())",
    "find by id": "getUserInput => ($.get(getUserInput('url') + '/_api/find-by-id').then(data => { assert.equal(data.name, 'test', 'item.name is not what expected'); assert.equal(data.age, 0, 'item.age is not what expected'); assert.deepEqual(data.favoriteFoods, ['none'], 'item.favoriteFoods is not what expected'); assert.equal(data.__v, 0, 'The item should be not previously edited'); }, xhr => { throw new Error(xhr.responseText); }).promise())",
    "find-edit-update": "getUserInput => ($.post(getUserInput('url') + '/_api/find-edit-save', {name:'Poldo', age: 40, favoriteFoods:['spaghetti']}).then(data => { assert.equal(data.name, 'Poldo', 'item.name is not what expected'); assert.equal(data.age, 40, 'item.age is not what expected'); assert.deepEqual(data.favoriteFoods, ['spaghetti', 'hamburger'], 'item.favoriteFoods is not what expected'); assert.equal(data.__v, 1, 'The item should be previously edited'); }, xhr => { throw new Error(xhr.responseText); }).promise())",
    "findOneAndUpdate age": "getUserInput => ($.post(getUserInput('url') + '/_api/find-one-update', {name:'Dorian Gray', age: 35, favoriteFoods:['unknown']}).then(data => { assert.equal(data.name, 'Dorian Gray', 'item.name is not what expected'); assert.equal(data.age, 20, 'item.age is not what expected'); assert.deepEqual(data.favoriteFoods, ['unknown'], 'item.favoriteFoods is not what expected'); assert.equal(data.__v, 0, 'findOneAndUpdate does not increment version'); }, xhr => { throw new Error(xhr.responseText); }).promise())",
    "delete by Id": "getUserInput => ($.post(getUserInput('url') + '/_api/remove-one-person', {name:'Jason Bourne', age: 36, favoriteFoods:['apples']}).then(data => { assert.equal(data.name, 'Jason Bourne', 'item.name is not what expected'); assert.equal(data.age, 36, 'item.age is not what expected'); assert.deepEqual(data.favoriteFoods, ['apples'], 'item.favoriteFoods is not what expected'); assert.equal(data.__v, 0); assert.equal(data.count, 0, 'the db items count is not what expected'); }, xhr => { throw new Error(xhr.responseText); }).promise())",
    "delete many by name": "getUserInput => ($.ajax({url: getUserInput('url') + '/_api/remove-many-people', type: 'POST', contentType:'application/json', data: JSON.stringify([{name: 'Mary', age: 16, favoriteFoods: ['lollipop']}, {name: 'Mary', age: 21, favoriteFoods: ['steak']}])}).then(data => { assert.isTrue(!!data.ok, 'The mongo stats are not what expected'); assert.equal(data.n, 2, 'The number of items affected is not what expected'); assert.equal(data.count, 0, 'the db items count is not what expected'); }, xhr => { throw new Error(xhr.responseText); }).promise())",
    "chain query helpers": "getUserInput => ($.ajax({url: getUserInput('url') + '/_api/query-tools', type: 'POST', contentType:'application/json', data: JSON.stringify([{name: 'Pablo', age: 26, favoriteFoods: ['burrito', 'hot-dog']}, {name: 'Ashley', age: 32, favoriteFoods: ['steak', 'burrito']}, {name: 'Mario', age: 51, favoriteFoods: ['burrito', 'prosciutto']}])}).then(data => { assert.isArray(data, 'the response should be an Array'); assert.equal(data.length, 2, 'the data array length is not what expected'); assert.notProperty(data[0], 'age', 'The returned first item has too many properties'); assert.equal(data[0].name, 'Ashley', 'The returned first item name is not what expected'); assert.notProperty(data[1], 'age', 'The returned second item has too many properties'); assert.equal(data[1].name, 'Mario', 'The returned second item name is not what expected');}, xhr => { throw new Error(xhr.responseText); }).promise())",

  }, {
    // Infosec with Helmet - DONE
    "helmet installed" : "() => ($.get(window.projectUrl + '/_api/file/package.json').then(function(data){ var packJson = JSON.parse(data);     assert.property(packJson.dependencies, 'helmet'); }).promise())",
    "hidePoweredBy mounted" : "() => ($.get(window.projectUrl + '/_api/app-info').then(function(data){ assert.include(data.appStack, 'hidePoweredBy'); assert.notEqual(data.headers['x-powered-by'], 'Express')}).promise())",
    "frameguard mounted" : "() => ($.get(window.projectUrl + '/_api/app-info').then(function(data){ assert.include(data.appStack, 'frameguard'); }).promise())",
    "frameguard set to DENY" : "() => ($.get(window.projectUrl + '/_api/app-info').then(function(data){ assert.property(data.headers, 'x-frame-options'); assert.equal(data.headers['x-frame-options'], 'DENY');}).promise())",
    "xssFilter mounted" : "() => ($.get(window.projectUrl + '/_api/app-info').then(function(data){ assert.include(data.appStack, 'xXssProtection'); assert.property(data.headers, 'x-xss-protection'); }).promise())",
    "noSniff mounted" : "() => ($.get(window.projectUrl + '/_api/app-info').then(function(data){ assert.include(data.appStack, 'nosniff'); assert.equal(data.headers['x-content-type-options'], 'nosniff'); }).promise())",
    "ieNoOpen mounted" : "() => ($.get(window.projectUrl + '/_api/app-info').then(function(data){ assert.include(data.appStack, 'ienoopen'); assert.equal(data.headers['x-download-options'], 'noopen'); }).promise())",
    "hsts mounted" : "() => ($.get(window.projectUrl + '/_api/app-info').then(function(data){ assert.include(data.appStack, 'hsts'); assert.property(data.headers, 'strict-transport-security'); }).promise())",
    "hsts max-age=7776000 (90 days)" : "() => ($.get(window.projectUrl + '/_api/app-info').then(function(data){ assert.equal(data.headers['strict-transport-security'], 'max-age=7776000'); }).promise())",
    "dnsPrefetchControl mounted" : "() => ($.get(window.projectUrl + '/_api/app-info').then(function(data){ assert.include(data.appStack, 'dnsPrefetchControl'); assert.equal(data.headers['x-dns-prefetch-control'], 'off'); }).promise())",
    "noCache mounted" : "() => ($.get(window.projectUrl + '/_api/app-info').then(function(data){ assert.include(data.appStack, 'nocache'); assert.equal(data.headers['cache-control'], 'no-store, no-cache, must-revalidate, proxy-revalidate'); }).promise())",
    "csp mounted" : "() => ($.get(window.projectUrl + '/_api/app-info').then(function(data){ assert.include(data.appStack, 'csp'); }).promise())",
    "csp config ok" : "() => ($.get(window.projectUrl + '/_api/app-info').then(function(data){\
      var cspHeader = Object.keys(data.headers).filter(function(k){ return k === 'content-security-policy' || k === 'x-webkit-csp' || k === 'x-content-security-policy' })[0];\
      assert.equal(data.headers[cspHeader], \"default-src 'self'; script-src 'self' trusted-cdn.com\"); }).promise())"
  }, {
    // QA-tests / mocha-chai DONE
    "U0 - #isNull" : "() => ($.get(window.projectUrl + '/_api/get-tests?type=unit&n=0').then(function(data){assert.equal(data.state, 'passed');  assert.equal(data.assertions[0].method, 'isNull'); }).promise())",
    "U0 - #isNotNull" : "() => ($.get(window.projectUrl + '/_api/get-tests?type=unit&n=0').then(function(data){assert.equal(data.state, 'passed');  assert.equal(data.assertions[1].method, 'isNotNull'); }).promise())",
    "F0 - GET /hello with no name - status" : "() => ($.get(window.projectUrl + '/_api/get-tests?type=functional&n=0').then(function(data){ assert.equal(data.assertions[0].method, 'equal'); assert.equal(data.assertions[0].args[0], 'res.status'); assert.equal(data.assertions[0].args[1], '200');}).promise())",
    "F0 - GET /hello with no name - text": "() => ($.get(window.projectUrl + '/_api/get-tests?type=functional&n=0').then(function(data){ assert.equal(data.assertions[1].method, 'equal'); assert.equal(data.assertions[1].args[0], 'res.text'); assert.equal(data.assertions[1].args[1], '\\'hello Guest\\'');}).promise())",
    "F1 GET /hello?name=xxx": "() => ($.get(window.projectUrl + '/_api/get-tests?type=functional&n=1').then(function(data){ assert.equal(data.assertions[1].method, 'equal'); assert.equal(data.assertions[1].args[0], 'res.text'); assert.match(data.assertions[1].args[1], /hello [\\w\\d_-]/);}).promise())",
    "F2 PUT /travellers {surname: 'Colombo'} - type": "() => ($.get(window.projectUrl + '/_api/get-tests?type=functional&n=2').then(function(data){ assert.equal(data.assertions[1].method, 'equal'); assert.equal(data.assertions[1].args[0], 'res.type'); assert.equal(data.assertions[1].args[1], '\\'application/json\\'');}).promise())",
    "F2 PUT /travellers {surname: 'Colombo'} - body.name": "() => ($.get(window.projectUrl + '/_api/get-tests?type=functional&n=2').then(function(data){ assert.equal(data.assertions[2].method, 'equal'); assert.equal(data.assertions[2].args[0], 'res.body.name'); assert.equal(data.assertions[2].args[1], '\\'Cristoforo\\'');}).promise())",
    "F4-HB surname: Colombo - browser.success": "() => ($.get(window.projectUrl + '/_api/get-tests?type=functional&n=5').then(function(data){ assert.equal(data.assertions[0].method, 'browser.success'); }).promise())",
    "F4-HB surname: Colombo - browser.text span#name": "() => ($.get(window.projectUrl + '/_api/get-tests?type=functional&n=5').then(function(data){ assert.equal(data.assertions[1].method, 'browser.text'); assert.equal(data.assertions[1].args[0], '\\'span#name\\''); assert.equal(data.assertions[1].args[1], '\\'Cristoforo\\'');}).promise())",
    "F4-HB surname: Colombo - browser.element span#dates": "() => ($.get(window.projectUrl + '/_api/get-tests?type=functional&n=5').then(function(data){ assert.equal(data.assertions[3].method, 'browser.element'); assert.equal(data.assertions[3].args[0], '\\'span#dates\\''); assert.equal(data.assertions[3].args[1], 1);}).promise())",
  }, {
    // Advanced node-express
    "Advanced Express assertion test" : "assert(true)"
  },
    /** Microservice 1 - Timestamp - **WIP** **/ /*
  {
    "2016-12-25 - unix" : "getUserInput => $.get(getUserInput('url') + '/api/timestamp/2016-12-25').then(data => { assert.equal(data.unix, 1482624000000, 'Should be a valid unix timestamp'); }, xhr => { throw new Error(xhr.statusText); }).promise()",
    "2016-12-25 - utc" : "getUserInput => $.get(getUserInput('url')+ '/api/timestamp/2016-12-25').then(data => { assert.equal(data.utc, 'Sun, 25 Dec 2016 00:00:00 GMT', 'Should be a valid UTC date string'); }, xhr => { throw new Error(xhr.statusText); }).promise()",
    "ts_1482624000000 (dec 25 2106) - unix" : "getUserInput => $.get(getUserInput('url') + '/api/timestamp/1482624000000').then(data => { assert.equal(data.unix, 1482624000000) ;  }, xhr => { throw new Error(xhr.statusText); }).promise()",
    "ts_1482624000000 (dec 25 2106) - utc" : "getUserInput => $.get(getUserInput('url') + '/api/timestamp/1482624000000').then(data => { assert.equal(data.utc, 'Sun, 25 Dec 2016 00:00:00 GMT') ;  }, xhr => { throw new Error(xhr.statusText); }).promise()",
    // add tests for at least another date...
    "invalid date" : "getUserInput => $.get(getUserInput('url') + '/api/timestamp/this-is-not-a-date').then(data => { assert.equal(data.error.toLowerCase(), 'invalid date');}, xhr => { throw new Error(xhr.statusText); }).promise()",
    "empty date string - unix" : "getUserInput => $.get(getUserInput('url') + '/api/timestamp').then(data => { var now = Date.now(); assert.approximately(data.unix, now, 20000) ;}, xhr => { throw new Error(xhr.statusText); }).promise()",
    "empty date string - utc" : "getUserInput => $.get(getUserInput('url') + '/api/timestamp').then(data => { var now = Date.now(); var serverTime = (new Date(data.utc)).getTime(); assert.approximately(serverTime, now, 20000) ;}, xhr => { throw new Error(xhr.statusText); }).promise()",
  }, 
      // Microservice 2 - Header Parser - These are example tests, not accurate enough
  {
    "get a valid ip" : "getUserInput => $.get(getUserInput('url') + '/api/whoami').then(function(data){ assert.match(data.ipaddress, /^(::ffff:)?(\\d{1,3}\\.){3}\\d{1,3}$/); }, xhr => { throw new Error(xhr.statusText); }).promise()",
    "'accept-language' test 1" : "getUserInput => $.get({ url: getUserInput('url') + '/api/whoami', beforeSend: function(xhr){xhr.setRequestHeader('Accept-Language', 'lang-test-aCbLkofr89')}}).then(data => {console.log(navigator.languages); assert.equal(data.language, 'lang-test-aCbLkofr89');  }, xhr => { throw new Error(xhr.statusText); }).promise()",
    "'accept-language' test 2" : "getUserInput => $.get({ url: getUserInput('url') + '/api/whoami', beforeSend: function(xhr){xhr.setRequestHeader('Accept-Language', 'lang-test-xhKjh7865Q')}}).then(data => {console.log(navigator.languages); assert.equal(data.language, 'lang-test-xhKjh7865Q');  }, xhr => { throw new Error(xhr.statusText); }).promise()",
    "validate 'user-agent'" : "getUserInput => $.get(getUserInput('url') + '/api/whoami').then(data => { assert.equal(data.software, navigator.userAgent); }, xhr => { throw new Error(xhr.statusText); }).promise()",
  }, {
    // MS3 - URL shortener
    /** the creation and redirection need to be executed sequentially !!! **/ /*
    "check creation 1 - test service" : "getUserInput => { window.randNum = parseInt(Math.random()*1000); return $.post(getUserInput('url') + '/api/shorturl/new/', {url: 'https://shine-ear.gomix.me/rand-' + window.randNum}).then(data => { window.shurl = data.short_url; assert.isNotNull(data.short_url); assert.match(data.original_url, new RegExp('shine-ear.hyperdev.space\\/rand-' + window.randNum)); }, xhr => { throw new Error(xhr.responseText); }).promise(); }",
    "check redirection 1 - test service" : "getUserInput => $.get(getUserInput('url') + '/api/shorturl/' + window.shurl).then(data => { assert.equal(data.str, 'rand-' + window.randNum); assert.isTrue(data.red);}, xhr => { throw new Error(xhr.responseText); }).promise()",
    "check creation 2 - timestamp service" : "getUserInput => $.post(getUserInput('url') + '/api/shorturl/new/', {url: 'https://curse-arrow.gomix.me/api/timestamp'}).then(data => { window.shurl = data.short_url; assert.isNotNull(data.short_url); assert.match(data.original_url, /curse-arrow.gomix.me\\/api\\/timestamp/); }, xhr => { throw new Error(xhr.responseText); }).promise()",
    "check redirection 2 - timestamp service" : "getUserInput => $.get(getUserInput('url') + '/api/shorturl/' + window.shurl).then(data => { assert.approximately(data.unix, Date.now(), 20000); }, xhr => { throw new Error(xhr.responseText); }).promise()",
    "invalid url" : "getUserInput => $.post(getUserInput('url') + '/api/shorturl/new/', {url: 'ftp:/john-doe.org'}).then(data => { assert.equal(data.error.toLowerCase(), 'invalid url'); }, xhr => { throw new Error(xhr.responseText); }).promise()",
  }, {
    // MS4 - Image Search
    //"NOOP - test cors" : "getUserInput => $.get(getUserInput('url') + '/api/music/test').then(data => { console.log(data); assert.isOk(true);}, xhr => { throw new Error(xhr.responseText); }).promise()",
    //"nested API call test - timestamp" : "getUserInput => $.get('https://curse-arrow.gomix.me/api/timestamp').then(d1 => { return $.get('https://curse-arrow.gomix.me/api/timestamp').then( d2 => {console.log('d1', d1, 'd2', d2); assert.approximately(d1.unix, d2.unix, 500);}, xhr => { throw new Error(xhr.responseText); }) }, xhr => { throw new Error(xhr.responseText); })",
    "API results comparison ('Boston' on iTunes)" : "getUserInput => $.get(getUserInput('url') + '/api/music/boston').then(d1 => $.get({url: 'https://itunes.apple.com/search?term=boston&entity=album&country=US&callback=?', dataType: 'jsonp'}).then(d2 => {console.log('d1', d1, 'd2', d2); assert.deepEqual(d1, d2)}, xhr => { throw new Error(xhr.responseText); }), xhr => { throw new Error(xhr.responseText); })"
  },{
    // MS5 - File metadata
    "upload a BLOB 1": "getUserInput => {var fd = new FormData(); fd.append('upfile', new Blob(['abcde'], {type:'text/plain'}), 'test1.txt' ); return $.ajax({url: getUserInput('url') + '/api/fileanalyse', type: 'POST', data: fd, processData: false, contentType: false }).then(data => {console.log(data); assert.equal(data.name, 'test1.txt'); assert.equal(data.size, 5);}, xhr => {throw new Error(xhr.responseText); }).promise(); }",
    "upload a BLOB 2": "getUserInput => {var fd = new FormData(); fd.append('upfile', new Blob(['{\"a\":\"1234\"}'], {type:'application/json'}), 'test2.json' ); return $.ajax({url: getUserInput('url') + '/api/fileanalyse', type: 'POST', data: fd, processData: false, contentType: false }).then(data => {console.log(data); assert.equal(data.name, 'test2.json'); assert.equal(data.size, 12);}, xhr => {throw new Error(xhr.responseText); }).promise(); }",
  },*/
  
  
  
  {
    // MS6 - Exercise Tracker
    //test 1 doesnt pass sometimes, this is an issue with the project! It often returns thats its a duplicate user when it isnt.
    "I can create a user by <b>posting</b> form data <code>username</code> to <i>/api/exercise/new-user</i> and returned will be an object with <i>username</i> and <i>_id</i>.": `{
      var testUser = (Math.floor(Math.random()*100000)).toString()+'fcc';
      getUserInput => $.post(getUserInput('url') + '/api/exercise/new-user',
      {username: testUser} )
      .then(data => {
        console.log(data);
        assert.property(data, 'username');
        assert.property(data, '_id');
        assert.equal(data.username, testUser, 'Should respond with the same name passed in');
      }, xhr => {throw new Error(xhr.statusText); }) }`,
    "I can get an array of all users by <b>getting</b> <i>api/exercise/users</i> with the same info as when creating a user." : `{ 
    getUserInput => $.get(getUserInput('url')+ '/api/exercise/users')
    .then(data => {
      assert.isArray(data, 'Users should return in an array');
      assert.property(data[0], 'username');
      assert.property(data[0], '_id');
      window.MS6_testUser = data[0]._id;
      console.log(window.MS6_testUser);
    }, xhr => { throw new Error(xhr.statusText); }) }`,
    "I can add an exercise to any user by <b>posting</b> form data <code>userId</code>(_id), <code>description</code>, <code>duration</code>, and optionally <code>date</code> to <i>/api/exercise/add</i>. If no date supplied it will use current date. Returned will the the user object with also with the exercise fields added.": `{
      getUserInput => $.post(getUserInput('url') + '/api/exercise/add',
      {userId: window.MS6_testUser, description: 'crazyrunning', duration: '79'})
      .then(data => { 
        console.log(window.MS6_testUser);
        assert.property(data, 'username');
        assert.property(data, '_id');
        assert.property(data, 'description');
        assert.property(data, 'duration');
        assert.property(data, 'date');
        assert.equal(data.description, 'crazyrunning');
        assert.equal(data.duration, 79, 'duration incorrectly saved');
        assert.match(data.date, /20[0-9]{2}/ , 'date incorrect, no year present');
        assert.equal(data._id, window.MS6_testUser);
      }, xhr => {throw new Error(xhr.statusText); })
    }`,
    "I can retrieve a full exercise log of any user by <b>getting</b> <i>/api/exercise/log</i> with a parameter of <code>userId</code>(_id). Return will be the user object with added array <i>log</i> and <i>count</i> (total exercise count).": `
      { getUserInput => $.get(getUserInput('url') + '/api/exercise/log',
      {userId: window.MS6_testUser} )
      .then(data => { 
        assert.isArray(data.log, 'log should be array');
        assert.property(data.log[0], 'description');
        assert.property(data.log[0], 'duration');
        assert.property(data, 'count');
        assert.equal(data.count, data.log.length);
        assert.equal(data._id, window.MS6_testUser, 'log should be for the user requested');
        console.log(data);
      }, xhr => {throw new Error(xhr.statusText); }) }   
    `,
    "I can retrieve part of the log of any user by also passing along optional parameters of <code>from</code> & <code>to</code> or <code>limit</code>. (Date format yyyy-mm-dd, limit = int)": `
      { getUserInput => $.get(getUserInput('url') + '/api/exercise/log',
      {userId: window.MS6_testUser, limit: 1} )
      .then(data => { 
        assert.isArray(data.log, 'log should be array');
        assert.property(data.log[0], 'description');
        assert.property(data.log[0], 'duration');
        assert.lengthOf(data.log, 1, 'log should have supplied length')
        assert.property(data, 'count');
        assert.equal(data.count, data.log.length);
        console.log(data);
      }, xhr => {throw new Error(xhr.statusText); }) }   
    `,
  },
  
  
  
  
  
  
  
  
  
  
  /*
  * START OF IN-DEV TEST PROJECTS FOR ISQA PROJECTS
  * START OF IN-DEV TEST PROJECTS FOR ISQA PROJECTS
  * START OF IN-DEV TEST PROJECTS FOR ISQA PROJECTS
  * START OF IN-DEV TEST PROJECTS FOR ISQA PROJECTS
  */
  
  {
    //
    //--------[ISQA_1 - Personal Library]---------
    //
    //info/sample:  https://spark-cathedral.gomix.me/
    //code:         https://gomix.com/#!/project/spark-cathedral
    //
    //owner:        Joe
    //
    //note:   window.ISQA_1_testBookId created so we can store variable across tests using global scope. (Needed to reliably predict api return)
    //
    "I will not have anything cached in my client": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/app-info')
      .then(data => {
        assert.equal(data.headers['cache-control'], 'no-store, no-cache, must-revalidate, proxy-revalidate');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "I will see that the site is powered by 'PHP 4.2.0' even though it isn't": `{
      getUserInput => $.get(getUserInput('url')+ '/_api/app-info')
      .then(data => {
        assert.equal(data.headers['x-powered-by'], 'PHP 4.2.0');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "I can <b>post</b> a <code>title</code> to <i>/api/books</i> to add a book and returned will be the object with the <code>title</code> and a unique <code>_id</code>": `{
      var testTitle = 'InfoSec for Smarties';
      getUserInput => $.post(getUserInput('url') + '/api/books',
      {title: testTitle} )
      .then(data => { 
        assert.property(data, 'title', 'returned object should contain title');
        assert.equal(data.title, testTitle, 'returned object title should contain correct posted title');
        assert.property(data, '_id', 'returned object should contain _id');
      }, xhr => {throw new Error(xhr.statusText); })
    }`,
    "I can <b>get</b> <i>/api/books</i> to retrieve an aray of all books containing <code>title</code>, <code>_id</code>, & <code>commentcount</code>": `{
      getUserInput => $.get(getUserInput('url')+ '/api/books')
      .then(data => { 
        assert.isArray(data, 'Return should be an array');
        assert.property(data[0], 'commentcount', 'Books in array should contain commentcount');
        assert.property(data[0], 'title', 'Books in array should contain title');
        assert.property(data[0], '_id', 'Books in array should contain _id');
        window.ISQA_1_testBookId = data[0]._id;
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "I can <b>get</b> </i>/api/books/{_id}</i> to retrieve a single object of a book containing <code>title</code>, <code>_id</code>, & an array of <code>comments</code> (empty array if no comments present)": `{
      getUserInput => $.get(getUserInput('url')+ '/api/books/'+window.ISQA_1_testBookId)
      .then(data => {
        assert.property(data, 'comments', 'Book should contain property comments');
        assert.isArray(data.comments, 'Book should contain array of comments');
        assert.property(data, 'title', 'Book should contain property title');
        assert.property(data, '_id', 'Book should contain property _id');
        assert.equal(data._id, window.ISQA_1_testBookId, 'Returned object should contain the correct book we requested');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "I can <b>post</b> a <code>comment</code> to <i>/api/books/{_id}</i> to add a comment to a book and returned will be the books object similar to <b>get</b> <i>/api/books/{_id}</i>": `{
      var testComment = 'Quality Assurance is Key';
      getUserInput => $.post(getUserInput('url') + '/api/books/'+window.ISQA_1_testBookId,
      {comment: testComment} )
      .then(data => { 
        assert.property(data, 'comments', 'Book should contain property comments');
        assert.isArray(data.comments, 'Book should contain array of comments');
        assert.include(data.comments, testComment, 'Book should contain the comment posted')
        assert.property(data, 'title', 'Book should contain property title');
        assert.property(data, '_id', 'Book should contain property _id');
        assert.equal(data._id, window.ISQA_1_testBookId, 'Returned object should contain the correct book we commented on');
      }, xhr => {throw new Error(xhr.statusText); })
    }`,    
    "I can <b>delete</b> <i>/api/books/{_id}</i> to delete a book from the collection. Returned will be 'delete successful' if successful": `{
      getUserInput => $.ajax({url: getUserInput('url')+ '/api/books/'+window.ISQA_1_testBookId, type: 'DELETE'})
      .then(data => { 
        assert.equal(data, 'delete successful', 'Successfully deleted process should return correct string');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "If I try to request a book that doesn't exist I will get a 'no book exists' message": `{
      getUserInput => $.get(getUserInput('url')+ '/api/books/'+window.ISQA_1_testBookId)
      .then(data => { 
        assert.equal(data, 'no book exists', 'Returned message should say "no book exists"')
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "I can send a <b>delete</b> request to <i>/api/books</i> to delete all books in the database. Returned will be 'complete delete successful' if successful": `{
      getUserInput => $.ajax({url: getUserInput('url')+ '/api/books', type: 'DELETE'})
      .then(data => { 
        assert.equal(data, 'complete delete successful', 'Successfully deleted process should return correct string');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "Database will be empty after a successful delete process": `{
      getUserInput => $.get(getUserInput('url')+ '/api/books')
      .then(data => { 
        assert.equal(data,'','Database should be empty after a successful full delete process');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "Functional test 1 (POST /api/books with title)" : `{
      getUserInput => $.get(getUserInput('url')+ '/_api/get-tests?type=functional&n=0')
      .then(data => {
        var testedFor = [];
        for (var i=0; i<data.assertions.length; i++) {
          testedFor.push(data.assertions[i].args[0]);
        }
        assert.include(testedFor, 'res.status', 'Should test for response status code');
        assert.include(testedFor, 'res.body', 'Should test response body for properties required to return');
        assert.include(testedFor, 'res.body.comments', 'Should test for res.body.comments to be an array');
        assert.include(testedFor, 'res.body.title', 'Should test res.body.title for correct title posted');
        assert.equal(data.state, 'passed', 'Functional test should pass');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "Functional test 2 (POST /api/books with no title)" : `{
      getUserInput => $.get(getUserInput('url')+ '/_api/get-tests?type=functional&n=1')
      .then(data => {
        var testedFor = [];
        for (var i=0; i<data.assertions.length; i++) {
          testedFor.push(data.assertions[i].args[0]);
        }
        assert.include(testedFor, 'res.status', 'Should test for response status code');
        assert.include(testedFor, 'res.text', 'Should test res.text to equal "missing title"');
        assert.equal(data.state, 'passed', 'Functional test should pass');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "Functional test 3 (GET /api/books => array of books)" : `{
      getUserInput => $.get(getUserInput('url')+ '/_api/get-tests?type=functional&n=2')
      .then(data => {
        var testedFor = [];
        var propertyTests = 0;
        for (var i=0; i<data.assertions.length; i++) {
          testedFor.push(data.assertions[i].args[0]);
          if(data.assertions[i].method == 'property') propertyTests++;
        }
        assert.include(testedFor, 'res.status', 'Should test for response status code');
        assert.include(testedFor, 'res.body', 'Should test res.body to be an array');
        assert.isAtLeast(propertyTests, 3, 'Should be testing for atleast 3 properties of response objects')
        assert.equal(data.state, 'passed', 'Functional test should pass');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "Functional test 4 (GET /api/books/[id] with unknown id)" : `{
      getUserInput => $.get(getUserInput('url')+ '/_api/get-tests?type=functional&n=3')
      .then(data => {
        var testedFor = [];
        for (var i=0; i<data.assertions.length; i++) {
          testedFor.push(data.assertions[i].args[0]);
        }
        assert.include(testedFor, 'res.status', 'Should test for response status code');
        assert.include(testedFor, 'res.text', 'Should test res.text to equal "no book exists"');
        assert.equal(data.state, 'passed', 'Functional test should pass');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "Functional test 5 (GET /api/books/[id] with valid/known id)" : `{
      getUserInput => $.get(getUserInput('url')+ '/_api/get-tests?type=functional&n=4')
      .then(data => {
        var testedFor = [];
        var propertyTests = 0;
        for (var i=0; i<data.assertions.length; i++) {
          testedFor.push(data.assertions[i].args[0]);
          if(data.assertions[i].method == 'property') propertyTests++;
        }
        assert.include(testedFor, 'res.status', 'Should test for response status code');
        assert.isAtLeast(propertyTests, 3, 'Should be testing for atleast 3 properties of response object')
        assert.include(testedFor, 'res.body._id', 'Should test res.body._id to equal _id passed to server');
        assert.include(testedFor, 'res.body.comments', 'Should test for res.body.coments to be an array')
        assert.equal(data.state, 'passed', 'Functional test should pass');
      }, xhr => { throw new Error(xhr.statusText); })
    }`, 
    "Functional test 6 (POST /api/books/[id] with comment)" : `{
      getUserInput => $.get(getUserInput('url')+ '/_api/get-tests?type=functional&n=5')
      .then(data => {
        var testedFor = [];
        var propertyTests = 0;
        var includeTests = 0;
        for (var i=0; i<data.assertions.length; i++) {
          testedFor.push(data.assertions[i].args[0]);
          if(data.assertions[i].method == 'property') propertyTests++;
          if(data.assertions[i].method == 'property') includeTests++;
        }
        assert.include(testedFor, 'res.status', 'Should test for response status code');
        assert.isAtLeast(propertyTests, 3, 'Should be testing for atleast 3 properties of response object')
        assert.include(testedFor, 'res.body.comments', 'Should test for res.body.comments to be an array')
        assert.isAtLeast(includeTests, 1, 'Should test comments to include comment sent to server')
        assert.equal(data.state, 'passed', 'Functional test should pass');
      }, xhr => { throw new Error(xhr.statusText); })
    }`, 
  },
  {
    //
    //--------[ISQA_2 - Metric/Imp converter]---------
    //
    //info/sample:  https://hard-twilight.gomix.me/
    //code:         https://gomix.com/#!/project/hard-twilight
    //
    //owner:        Joe
    //
    "I will help prevent the client from trying to guess(sniff) the MIME type." : `{
      getUserInput => $.get(getUserInput('url')+ '/_api/app-info')
      .then(data => {
        assert.equal(data.headers['x-content-type-options'], 'nosniff');
      }, xhr => { throw new Error(xhr.statusText); })    
    }`,
    "I will prevent cross-site scripting (XSS) attacks." : `{
      getUserInput => $.get(getUserInput('url')+ '/_api/app-info')
      .then(data => {
        assert.equal(data.headers['x-xss-protection'], '1; mode=block');
      }, xhr => { throw new Error(xhr.statusText); })     
    }`,
    "I can <b>GET</b> <code>/api/convert</code> with a single query containing a number and an accepted unit and have it converted." : `{
      var testQuery = '5gal';
      var expectedInput = ['5','gal'];
      getUserInput => $.get(getUserInput('url') + '/api/convert',
      {input: testQuery} )
      .then(data => { 
        assert.property(data, 'initNum', 'returned object should contain the initNum');
        assert.equal(data.initNum, expectedInput[0], 'returned object initNum should have the correct number that was passed in');
        assert.property(data, 'initUnit', 'returned object should contain initUnit');
        assert.equal(data.initUnit, expectedInput[1], 'returned object initUnit should have the correct unit that was passed in');
      }, xhr => {throw new Error(xhr.statusText); })      
    }`,
    "My return will consist of the initNum, initUnit, returnNum, returnUnit, and string spelling out units in format <code>{initNum} {initial_Units} converts to {returnNum} {return_Units}</code> with the result rounded to 5 decimals." : `{
      var testQuery = '5gal';
      var expected = '5 gallons converts to 18.92705 liters';
      getUserInput => $.get(getUserInput('url') + '/api/convert',
      {input: testQuery} )
      .then(data => { 
        assert.property(data, 'initNum', 'returned object should contain the initNum');
        assert.property(data, 'initUnit', 'returned object should contain initUnit');
        assert.property(data, 'returnNum', 'returned object should contain the returnNum');
        assert.property(data, 'returnUnit', 'returned object should contain returnUnit');
        assert.property(data, 'string', 'returned object should contain string');
        assert.equal(data.string, expected, 'returned object.string should be formatted correctly');
      }, xhr => {throw new Error(xhr.statusText); })     
    }`,
    "I can convert 'gal' to 'L' and vice versa [with a decimal]. <b>(1 gal to 3.78541 L)</b>" : `{
      var testQuery = '18.92705L';
      var expectedInput = ['18.92705','L','5','gal'];
      getUserInput => $.get(getUserInput('url') + '/api/convert',
      {input: testQuery} )
      .then(data => { 
        assert.property(data, 'initNum', 'returned object should contain the initNum');
        assert.equal(data.initNum, expectedInput[0], 'returned object initNum should have the correct number that was passed in');
        assert.property(data, 'initUnit', 'returned object should contain initUnit');
        assert.equal(data.initUnit, expectedInput[1], 'returned object initUnit should have the correct unit that was passed in');
        assert.property(data, 'returnNum', 'returned object should contain the returnNum');
        assert.approximately(data.returnNum, 5, 0.1);
        assert.property(data, 'returnUnit', 'returned object should contain returnUnit');
        assert.equal(data.returnUnit, expectedInput[3]);
      }, xhr => {throw new Error(xhr.statusText); })   
    }`,
    "I can convert 'lbs' to 'kg' and vice versa [with a fraction and decimal]. <b>(1 lbs to 0.453592 kg)</b>" : `{
      var testQuery = '5.5/2kg';
      var expectedInput = ['2.75','kg','6.06272','lbs'];
      getUserInput => $.get(getUserInput('url') + '/api/convert',
      {input: testQuery} )
      .then(data => { 
        assert.property(data, 'initNum', 'returned object should contain the initNum');
        assert.equal(data.initNum, expectedInput[0], 'returned object initNum should have the correct number that was passed in');
        assert.property(data, 'initUnit', 'returned object should contain initUnit');
        assert.equal(data.initUnit, expectedInput[1], 'returned object initUnit should have the correct unit that was passed in');
        assert.property(data, 'returnNum', 'returned object should contain the returnNum');
        assert.approximately(data.returnNum, 6.06272, 0.1);
        assert.property(data, 'returnUnit', 'returned object should contain returnUnit');
        assert.equal(data.returnUnit, expectedInput[3]);
      }, xhr => {throw new Error(xhr.statusText); })   
    }`,
    "I can convert 'mi' to 'km' and vice versa [with no number]. <b>(1 mi to 1.60934 km)</b>" : `{
      var testQuery = 'mi';
      var expectedInput = ['1','mi','1.60934','km'];
      getUserInput => $.get(getUserInput('url') + '/api/convert',
      {input: testQuery} )
      .then(data => { 
        assert.property(data, 'initNum', 'returned object should contain the initNum');
        assert.equal(data.initNum, expectedInput[0], 'returned object initNum should have the correct number that was passed in');
        assert.property(data, 'initUnit', 'returned object should contain initUnit');
        assert.equal(data.initUnit, expectedInput[1], 'returned object initUnit should have the correct unit that was passed in');
        assert.property(data, 'returnNum', 'returned object should contain the returnNum');
        assert.approximately(data.returnNum, 1.60934, 0.1);
        assert.property(data, 'returnUnit', 'returned object should contain returnUnit');
        assert.equal(data.returnUnit, expectedInput[3]);
      }, xhr => {throw new Error(xhr.statusText); })   
    }`,
    "If my unit of measurement is invalid, returned will be 'invalid unit'." : `{
      getUserInput => $.get(getUserInput('url')+ '/api/convert',
      {input: '5megaton'} )
      .then(data => { 
        assert.equal(data, 'invalid unit', 'Returned message should say "invalid unit"');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "If my number is invalid, returned with will 'invalid number'." : `{
      getUserInput => $.get(getUserInput('url')+ '/api/convert',
      {input: '5.5/4/3mi'} )
      .then(data => { 
        assert.equal(data, 'invalid number', 'Returned message should say "invalid number"');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "If both are invalid, return will be 'invalid number and unit'." : `{
      getUserInput => $.get(getUserInput('url')+ '/api/convert',
      {input: '5.5/4/3megaton'} )
      .then(data => { 
        assert.equal(data, 'invalid number and unit', 'Returned message should say "invalid number and unit"');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "Unit Tests(6): Function convertHandler.getNum(input)" : `{
      getUserInput => $.get(getUserInput('url')+ '/_api/get-tests?type=unit')
      .then(data => {
        for (var i=0; i<6; i++) {
          assert.equal(data[i].assertions[0].method, 'equal', 'Should test result of function to equal something, Problem with test #' & i+1);
          assert.equal(data[i].state, 'passed', 'Unit test should pass');
        }
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "Unit Tests(2): Function convertHandler.getUnit(input)" : `{
      getUserInput => $.get(getUserInput('url')+ '/_api/get-tests?type=unit')
      .then(data => {
        for (var i=6; i<8; i++) {
          assert.equal(data[i].assertions[0].method, 'equal', 'Should test result of function to equal something, Problem with test #' & i+1);
          assert.equal(data[i].state, 'passed', 'Unit test should pass');
        }
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "Unit Tests(1): Function convertHandler.getReturnUnit(initUnit)" : `{
      getUserInput => $.get(getUserInput('url')+ '/_api/get-tests?type=unit')
      .then(data => {
        for (var i=8; i<9; i++) {
          assert.equal(data[i].assertions[0].method, 'equal', 'Should test result of function to equal something, Problem with test #' & i+1);
          assert.equal(data[i].state, 'passed', 'Unit test should pass');
        }
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "Unit Tests(1): Function convertHandler.spellOutUnit(unit)" : `{
      getUserInput => $.get(getUserInput('url')+ '/_api/get-tests?type=unit')
      .then(data => {
        for (var i=9; i<10; i++) {
          assert.equal(data[i].assertions[0].method, 'equal', 'Should test result of function to equal something, Problem with test #' & i+1);
          assert.equal(data[i].state, 'passed', 'Unit test should pass');
        }
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "Unit Tests(6): Function convertHandler.convert(num, unit)" : `{
      getUserInput => $.get(getUserInput('url')+ '/_api/get-tests?type=unit')
      .then(data => {
        for (var i=10; i<16; i++) {
          assert.equal(data[i].assertions[0].method, 'approximately', 'Should test result of function to be approximately something, Problem with test #' & i+1);
          assert.equal(data[i].state, 'passed', 'Unit test should pass');
        }
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "Function Tests(5): GET /api/convert => conversion object" : `{
      getUserInput => $.get(getUserInput('url')+ '/_api/get-tests?type=functional')
      .then(data => {
        var testedFor = [];
        for (var x=0; x<data.length; x++) {
          var tempArr = [];
          for (var i=0; i<data[x].assertions.length; i++) {
            tempArr.push(data[x].assertions[i].args[0]);
          }
          testedFor.push(tempArr);
        }
        assert.include(testedFor[0],'res.status','Test 1 should test res.status');
        assert.include(testedFor[0],'res.body.initNum','Test 1 should test input number');
        assert.include(testedFor[0],'res.body.initUnit','Test 1 should test input unit');
        assert.include(testedFor[0],'res.body.returnNum','Test 1 should test return number');
        assert.include(testedFor[0],'res.body.returnUnit','Test 1 should test return unit');
        assert.equal(data[0].state, 'passed', 'Test 1 should pass');
        for (var y=1; y<4; y++) {
          assert.include(testedFor[y],'res.status','Test '& y+1 &' should test res.status');
          assert.include(testedFor[y],'res.text','Test '& y+1 &' should test res.text');
          assert.equal(data[y].state, 'passed', 'Test '& y+1 &' should pass');
        }
        assert.include(testedFor[4],'res.status','Test 4 should test res.status');
        assert.include(testedFor[4],'res.body.initNum','Test 4 should test input number');
        assert.include(testedFor[4],'res.body.initUnit','Test 4 should test input unit');
        assert.include(testedFor[4],'res.body.returnNum','Test 4 should test return number');
        assert.include(testedFor[4],'res.body.returnUnit','Test 4 should test return unit');
        assert.equal(data[4].state, 'passed', 'Test 4 should pass');
      }, xhr => { throw new Error(xhr.statusText); })      
    }`,
    
  },
  {
    //
    //--------[ISQA_3 - Anon Message/Image Board]---------
    //
    //info/sample:  https://horn-celery.gomix.me/
    //code:         https://gomix.com/#!/project/horn-celery
    //
    //owner:        Joe
    //
    //notes:    window.ISQA_3_testId & window.ISQA_3_testReplyId
    //
    "Only allow your site to be loading in an iFrame on your own pages." : `{
      getUserInput => $.get(getUserInput('url')+ '/_api/app-info')
      .then(data => {
        assert.equal(data.headers['x-frame-options'], 'SAMEORIGIN');
      }, xhr => { throw new Error(xhr.statusText); })    
    }`,
    "Do not allow DNS prefetching." : `{
      getUserInput => $.get(getUserInput('url')+ '/_api/app-info')
      .then(data => {
        assert.equal(data.headers['x-dns-prefetch-control'], 'off');
      }, xhr => { throw new Error(xhr.statusText); })     
    }`,
    "Only allow your site to send the referrer for your own pages." : `{
      getUserInput => $.get(getUserInput('url')+ '/_api/app-info')
      .then(data => {
        assert.equal(data.headers['referrer-policy'], 'same-origin');
      }, xhr => { throw new Error(xhr.statusText); })     
    }`,
    "I can <b>POST</b> a thread to a specific message board by passing form data <code>text</code> and <code>delete_password</code> to <i>/api/threads/{board}</i>.": `{
      var testText = 'fcc testing thread';
      getUserInput => $.post(getUserInput('url') + '/api/threads/fcc',
      {text: testText, delete_password: 'pass'} )
      .then(data => { 
        assert.isDefined(data);
      }, xhr => {throw new Error(xhr.statusText); })
    }`,
    "I can <b>GET</b> an array of the most recent 10 bumped threads on the board with only the most recent 3 replies from <i>/api/threads/{board}</i>.": `{
      getUserInput => $.get(getUserInput('url')+ '/api/threads/fcc')
      .then(data => { 
        assert.isArray(data, 'Return should be an array');
        assert.property(data[0], 'text');
        assert.property(data[0], 'created_on');
        assert.property(data[0], '_id');
        assert.property(data[0], 'bumped_on');
        assert.notProperty(data[0], 'delete_password');
        assert.notProperty(data[0], 'reported');
        assert.isArray(data[0].replies);
        assert.isBelow(data[0].replies.length, 4, 'max replies sent should be 3');
        window.ISQA_3_testId = data[0]._id;
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "I can <b>POST</b> a reply to a thread on a specific message board by passing form data <code>text</code>, <code>thread_id</code>, and <code>delete_password</code> to <i>/api/threads/{board}</i>.": `{
      var testText = 'fcc testing reply';
      getUserInput => $.post(getUserInput('url') + '/api/replies/fcc',
      {text: testText, delete_password: 'pass', thread_id: window.ISQA_3_testId} )
      .then(data => { 
        assert.isDefined(data);
      }, xhr => {throw new Error(xhr.statusText); })
    }`,
    "I can <b>GET</b> an entire thread with all it's replies from <i>/api/replies/{board}?thread_id={thread_id}</i>.": `{
      getUserInput => $.get(getUserInput('url')+ '/api/replies/fcc?thread_id='+window.ISQA_3_testId)
      .then(data => { 
        assert.property(data, 'text');
        assert.property(data, 'created_on');
        assert.property(data, '_id');
        assert.property(data, 'bumped_on');
        assert.notProperty(data, 'delete_password');
        assert.notProperty(data, 'reported');
        assert.isArray(data.replies);
        assert.property(data.replies[0], 'text');
        assert.property(data.replies[0], 'created_on');
        assert.property(data.replies[0], '_id');
        assert.notProperty(data.replies[0], 'delete_password');
        assert.notProperty(data.replies[0], 'reported');
        assert.equal(data.replies[0].text, 'fcc testing reply', 'Our reply from last test should be here.');
        window.ISQA_3_testReplyId = data.replies[0]._id;
      }, xhr => { throw new Error(xhr.statusText); })      
    }`,
    "I can report a reply by sending a <b>PUT</b> request to <i>/api/replies/{board}</i> with the <code>reply_id</code> and <code>thread_id</code>.": `{
      getUserInput => $.ajax({url: getUserInput('url')+ '/api/replies/fcc', data: {"thread_id": window.ISQA_3_testId, "reply_id": window.ISQA_3_testReplyId}, type: 'PUT'})
      .then(data => { 
        assert.equal(data, 'success');
      }, xhr => { throw new Error(xhr.statusText); })      
    }`,
    "If I try to delete a reply with a bad password it will return 'incorrect password'.": `{
      getUserInput => $.ajax({url: getUserInput('url')+ '/api/replies/fcc', data: {"thread_id": window.ISQA_3_testId, "reply_id": window.ISQA_3_testReplyId, "delete_password":"wrongpass"}, type: 'DELETE'})
      .then(data => { 
        assert.equal(data, 'incorrect password');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "If I try to delete a reply with a good password it will return 'success'.": `{
      getUserInput => $.ajax({url: getUserInput('url')+ '/api/replies/fcc', data: {"thread_id": window.ISQA_3_testId, "reply_id": window.ISQA_3_testReplyId, "delete_password":"pass"}, type: 'DELETE'})
      .then(data => { 
        assert.equal(data, 'success');
      }, xhr => { throw new Error(xhr.statusText); })      
    }`,
    "The delete reply will now show as '[deleted]'": `{
      getUserInput => $.get(getUserInput('url')+ '/api/replies/fcc?thread_id='+window.ISQA_3_testId)
      .then(data => { 
        assert.equal(data.replies[0].text, '[deleted]');
      }, xhr => { throw new Error(xhr.statusText); })   
    }`,
    "I can report a thread by sending a <b>PUT</b> request to <i>/api/threads/{board}</i> with the <code>thread_id</code>.": `{
      getUserInput => $.ajax({url: getUserInput('url')+ '/api/threads/fcc', data: {"thread_id": window.ISQA_3_testId}, type: 'PUT'})
      .then(data => { 
        assert.equal(data, 'success');
      }, xhr => { throw new Error(xhr.statusText); })      
    }`,
    "If I try to delete a thread with a bad password it will return 'incorrect password'.": `{
      getUserInput => $.ajax({url: getUserInput('url')+ '/api/threads/fcc', data: {"thread_id": window.ISQA_3_testId, "delete_password":"wrongpass"}, type: 'DELETE'})
      .then(data => { 
        assert.equal(data, 'incorrect password');
      }, xhr => { throw new Error(xhr.statusText); })
    }`,
    "If I try to delete a thread with a good password it will return 'success'.": `{
      getUserInput => $.ajax({url: getUserInput('url')+ '/api/threads/fcc', data: {"thread_id": window.ISQA_3_testId, "delete_password":"pass"}, type: 'DELETE'})
      .then(data => { 
        assert.equal(data, 'success');
      }, xhr => { throw new Error(xhr.statusText); })      
    }`,
    "The delete thread will not be gone.": `{
      getUserInput => $.get(getUserInput('url')+ '/api/threads/fcc')
      .then(data => { 
        var deleted = true;
        data.forEach(function(ele){
          if (ele._id == window.ISQA_3_testId) {
            deleted = false;
          }
        });
        assert.equal(deleted, true);
      }, xhr => { throw new Error(xhr.statusText); })   
    }`,
    "Functional Tests" : `{
      getUserInput => $.get(getUserInput('url')+ '/_api/get-tests?type=functional')
      .then(data => {
        var testedFor = [];
        for (var x=0; x<data.length; x++) {
          var tempArr = [];
          for (var i=0; i<data[x].assertions.length; i++) {
            var y = data[x].assertions[i].args[1];
            if(typeof y === 'string') {
              y = y.replace(/['"]+/g, '');
            }
            testedFor.push(y);
            tempArr.push(data[x].assertions[i].args[0]);
          }
          assert.include(tempArr, 'res.status','Test '+x+' should test for res.status');
          assert.equal(data[x].state,'passed','Test '+x+' should be pass');
        }
        console.log(testedFor);
        var thingsThatShouldBeTested = ['_id','text','created_on','reported','bumped_on','replies','delete_password','incorrect password','success','reported']
        thingsThatShouldBeTested.forEach(function(ele){
          assert.include(testedFor,ele,'Should be testing for '+ele+' in one or more functional tests');
        });
      }, xhr => { throw new Error(xhr.statusText); })      
    }`,    
  },
  {
    //
    //--------[ISQA_4 - Issue Tracker]---------
    //
    //info/sample:  https://protective-garage.gomix.me
    //code:         https://gomix.com/#!/project/protective-garage
    //
    //owner:        Joe
    //
    //notes:    window.ISQA_4_fields, window.ISQA_4_id1, window.ISQA_4_id2
    //
    "I will prevent cross-site scripting (XSS) attacks." : `{
      getUserInput => $.get(getUserInput('url')+ '/_api/app-info')
      .then(data => {
        assert.equal(data.headers['x-xss-protection'], '1; mode=block');
      }, xhr => { throw new Error(xhr.statusText); })     
    }`,
    "I can <b>POST</b> <code>/api/issues/{projectname}</code> with form data containing required <i>issue_title</i>, <i>issue_text</i>, <i>created_by</i>, and optional <i>assigned_to</i> and <i>status_text</i>." : `{
      var testInfo = ['title1','text1','fcctester'];
      window.ISQA_4_fields = ['_id','issue_title','issue_text','created_by','assigned_to','created_on','updated_on','open','status_text']
      getUserInput => $.post(getUserInput('url') + '/api/issues/fcctest',
      {issue_title: testInfo[0], issue_text: testInfo[1], created_by: testInfo[2]} )
      .then(data => { 
        assert.isDefined(data);
        window.ISQA_4_fields.forEach(function(ele){
          assert.property(data, ele);
        });
        assert.equal(data.issue_title, testInfo[0]);
        assert.equal(data.issue_text, testInfo[1]);
        assert.equal(data.created_by, testInfo[2]);
        assert.equal(data.assigned_to, '');
        assert.equal(data.status_text, '');
        assert.isBoolean(data.open);
        assert.equal(data.open, true);
        window.ISQA_4_id1 =  data._id;
      }, xhr => {throw new Error(xhr.statusText); })
    }`,
    "Posting data without required fields will fail." : `{
      getUserInput => $.post(getUserInput('url') + '/api/issues/fcctest',
      {issue_title: 'this should be saved', issue_text: 'this shouldnt be saved'} )
      .then(data => { 
        assert.isDefined(data);
        assert.equal(data, 'missing inputs');
      }, xhr => {throw new Error(xhr.statusText); })
    }`,
    "I can post data with the optional fields." : `{
      var testInfo = ['title1','text1','fcctester','fcctester','in testing'];
      getUserInput => $.post(getUserInput('url') + '/api/issues/fcctest',
      {issue_title: testInfo[0], issue_text: testInfo[1], created_by: testInfo[2], assigned_to: testInfo[3], status_text: testInfo[4]} )
      .then(data => { 
        assert.isDefined(data);
        window.ISQA_4_fields.forEach(function(ele){
          assert.property(data, ele);
        });
        assert.equal(data.issue_title, testInfo[0]);
        assert.equal(data.issue_text, testInfo[1]);
        assert.equal(data.created_by, testInfo[2]);
        assert.equal(data.assigned_to, testInfo[3]);
        assert.equal(data.status_text, testInfo[4]);
        assert.isBoolean(data.open);
        assert.equal(data.open, true);
        window.ISQA_4_id2 =  data._id;
      }, xhr => {throw new Error(xhr.statusText); })
    }`,
    "I can <b>GET</b> <code>/api/issues/{projectname}</code> for an array of all issues on that specific project with all the information for each issue as was returned when posted." : `{
      getUserInput => $.get(getUserInput('url') + '/api/issues/fcctest',
      {} )
      .then(data => { 
        assert.isArray(data);
        window.ISQA_4_fields.forEach(function(ele){
          assert.property(data[0], ele);
        });
      }, xhr => {throw new Error(xhr.statusText); })
    }`,
    "I can <b>PUT</b> <code>/api/issues/{projectname}</code> with a <i>_id</i> and any fields in the object with a value to object said object." : `{
      getUserInput => $.ajax({url: getUserInput('url') + '/api/issues/fcctest',
      data: {_id: window.ISQA_4_id1, open: false}, type: 'PUT'})
      .then(data => { 
        assert.isDefined(data);
        assert.equal(data, 'successfully updated');
      }, xhr => {throw new Error(xhr.statusText); })
    }`,
    "I can <b>GET</b> with queries to filter the return data, including the _id. (This will also test the PUT update was actually successful)" : `{
      getUserInput => $.get(getUserInput('url') + '/api/issues/fcctest?_id='+window.ISQA_4_id1)
      .then(data => { 
        assert.isArray(data);
        window.ISQA_4_fields.forEach(function(ele){
          assert.property(data[0], ele);
        });
        assert.equal(data[0].open, false);
      }, xhr => {throw new Error(xhr.statusText); })
    }`,    
    "I can <b>PUT</b> with as many fields and values as I wish to update." : `{
      getUserInput => $.ajax({url: getUserInput('url') + '/api/issues/fcctest',
      data: {_id: window.ISQA_4_id2, open: false, assigned_to:'updated dude'}, type: 'PUT'})
      .then(data => { 
        assert.isDefined(data);
        assert.equal(data, 'successfully updated');
      }, xhr => {throw new Error(xhr.statusText); })
    }`,
    "I can <b>GET</b> with as many queries as I want. (This will also test the PUT update was actually successful)" : `{
      getUserInput => $.get(getUserInput('url') + '/api/issues/fcctest?_id='+window.ISQA_4_id2+'&open=false')
      .then(data => { 
        assert.isArray(data);
        window.ISQA_4_fields.forEach(function(ele){
          assert.property(data[0], ele);
        });
        assert.equal(data[0].open, false);
        assert.equal(data[0].assigned_to, 'updated dude');
      }, xhr => {throw new Error(xhr.statusText); })
    }`,
    "I can <b>DELETE</b> <code>/api/issues/{projectname}</code> with a <i>_id</i> to completely delete an issue." : `{
      getUserInput => $.ajax({url: getUserInput('url') + '/api/issues/fcctest',
      data: {_id: window.ISQA_4_id2}, type: 'DELETE'})
      .then(data => { 
        assert.isDefined(data);
        assert.equal(data, 'deleted '+window.ISQA_4_id2);
      }, xhr => {throw new Error(xhr.statusText); })
    }`,
    "Functional Tests(3) - POST /api/issues/{project} => object with issue data" : `{
      getUserInput => $.get(getUserInput('url')+ '/_api/get-tests?type=functional')
      .then(data => {
        var testedFor = [];
        var propertyTestsArr = [];
        for (var x=0; x<3; x++) {
          var tempArr = [];
          var propertyTests = 0;
          for (var i=0; i<data[x].assertions.length; i++) {
            tempArr.push(data[x].assertions[i].args[0]);
            if(data[x].assertions[i].method == 'property') { propertyTests++ }
          }
          assert.include(tempArr, 'res.status','Test '+x+' should test for res.status.');
          assert.equal(data[x].state,'passed','Test '+x+' should be pass.');
          testedFor.push(tempArr);
          propertyTestsArr.push(propertyTests);
        }
        assert.isAbove(propertyTestsArr[0], 8, 'For test 1 and 2, there is atleast 9 fields in the issues return object that should be tested to exist with "property".');
        assert.isAbove(propertyTestsArr[1], 8, 'For test 1 and 2, there is atleast 9 fields in the issues return object that should be tested to exist with "property".');
        assert.include(testedFor[0],'res.body.issue_title','For test 1 and 2 you should be testing for issue_title to equal what you expect.');
        assert.include(testedFor[0],'res.body.issue_text','For test 1 and 2 you should be testing for issue_text to equal what you expect.');
        assert.include(testedFor[0],'res.body.created_by','For test 1 and 2 you should be testing for created_by to equal what you expect.');
        assert.include(testedFor[0],'res.body.status_text','For test 1 and 2 you should be testing for status_text to equal what you expect.');
        assert.include(testedFor[0],'res.body.open','For test 1 and 2 you should be testing for open to equal what you expect.');
        assert.include(testedFor[0],'res.body.assigned_to','For test 1 and 2 you should be testing for assigned_to to equal what you expect.');
        assert.include(testedFor[1],'res.body.issue_title','For test 1 and 2 you should be testing for issue_title to equal what you expect.');
        assert.include(testedFor[1],'res.body.issue_text','For test 1 and 2 you should be testing for issue_text to equal what you expect.');
        assert.include(testedFor[1],'res.body.created_by','For test 1 and 2 you should be testing for created_by to equal what you expect.');
        assert.include(testedFor[1],'res.body.status_text','For test 1 and 2 you should be testing for status_text to equal what you expect.');
        assert.include(testedFor[1],'res.body.open','For test 1 and 2 you should be testing for open to equal what you expect.');
        assert.include(testedFor[1],'res.body.assigned_to','For test 1 and 2 you should be testing for assigned_to to equal what you expect.');
        assert.include(testedFor[2],'res.text', 'For test 3, you should test the res.text to equal what you expect it to equal.');
      }, xhr => { throw new Error(xhr.statusText); })      
    }`,
    "Functional Tests(3) - PUT /api/issues/{project} => text" : `{
      getUserInput => $.get(getUserInput('url')+ '/_api/get-tests?type=functional')
      .then(data => {
        var testedFor = [];
        var propertyTestsArr = [];
        for (var x=3; x<6; x++) {
          var tempArr = [];
          for (var i=0; i<data[x].assertions.length; i++) {
            tempArr.push(data[x].assertions[i].args[0]);
          }
          assert.include(tempArr,'res.status','Test '+x+' should test for res.status.');
          assert.include(tempArr,'res.text','Test '+x+' should test for res.text to equal whats expected.');
          assert.equal(data[x].state,'passed','Test '+x+' should be pass.');
        }
      }, xhr => { throw new Error(xhr.statusText); })      
    }`,
    "Functional Tests(3) - GET /api/issues/{project} => Array of objects with issue data" : `{
      getUserInput => $.get(getUserInput('url')+ '/_api/get-tests?type=functional')
      .then(data => {
        var testedFor = [];
        var propertyTestsArr = [];
        for (var x=6; x<9; x++) {
          var tempArr = [];
          var propertyTests = 0;
          for (var i=0; i<data[x].assertions.length; i++) {
            tempArr.push(data[x].assertions[i].args[0]);
            if(data[x].assertions[i].method == 'property') { propertyTests++ }
          }
          assert.include(tempArr, 'res.status','Test '+x+' should test for res.status.');
          assert.equal(data[x].state,'passed','Test '+x+' should be pass.');
          testedFor.push(tempArr);
          propertyTestsArr.push(propertyTests);
        }
        assert.isAbove(propertyTestsArr[0], 8, 'For test 1, there is atleast 9 fields in the issues return object that should be tested to exist with "property".');
        assert.isAbove(propertyTestsArr[1], 8, 'For test 2, there is atleast 9 fields in the issues return object that should be tested to exist with "property".');
        assert.isAbove(propertyTestsArr[2], 8, 'For test 3, there is atleast 9 fields in the issues return object that should be tested to exist with "property".');
      }, xhr => { throw new Error(xhr.statusText); })    
    }`,
    "Functional Tests(2) - DELETE /api/issues/{project} => text" : `{
      getUserInput => $.get(getUserInput('url')+ '/_api/get-tests?type=functional')
      .then(data => {
        for (var x=9; x<11; x++) {
          var tempArr = [];
          for (var i=0; i<data[x].assertions.length; i++) {
            tempArr.push(data[x].assertions[i].args[0]);
          }
          assert.include(tempArr,'res.status','Test '+x+' should test for res.status.');
          assert.include(tempArr,'res.text','Test '+x+' should test for res.text to equal whats expected.');
          assert.equal(data[x].state,'passed','Test '+x+' should be pass.');
        }
      }, xhr => { throw new Error(xhr.statusText); })   
    }`,
    
  },
  {
    //
    //--------[ISQA_5 - Nasdaq Stock Prices]---------
    //
    //info/sample:  https://giant-chronometer.gomix.me/
    //code:         https://gomix.com/#!/project/giant-chronometer
    //
    //owner:        Joe
    //
    //notes:    window.ISQA_5_likes
    //
    "Set the content security policies to only allow loading of scripts and css from your server." : `{
      getUserInput => $.get(getUserInput('url')+ '/_api/app-info')
      .then(data => {
        assert.equal(data.headers['content-security-policy'], "default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'");
      }, xhr => { throw new Error(xhr.statusText); })    
    }`,
    "I can GET /api/stock-prices with 1 stock and be returned the object as defined in user stories." : `{
      getUserInput => $.get(getUserInput('url') + '/api/stock-prices',
      {stock: 'goog'} )
      .then(data => { 
        assert.isDefined(data.stockData);
        assert.property(data.stockData, 'stock');
        assert.property(data.stockData, 'price');
        assert.property(data.stockData, 'likes');
        assert.equal(data.stockData.stock, 'GOOG');
      }, xhr => {throw new Error(xhr.statusText); })         
    }`,
    "I can GET /api/stock-prices with 1 stock and like it." : `{
      getUserInput => $.get(getUserInput('url') + '/api/stock-prices',
      {stock: 'msft', like: true} )
      .then(data => { 
        assert.isDefined(data.stockData);
        assert.property(data.stockData, 'stock');
        assert.property(data.stockData, 'price');
        assert.property(data.stockData, 'likes');
        assert.equal(data.stockData.stock, 'MSFT');
        assert.isAbove(data.stockData.likes, 0);
        window.ISQA_5_likes = data.stockData.likes;
      }, xhr => {throw new Error(xhr.statusText); })  
    }`,
    "It will only count 1 like per IP." : `{
      getUserInput => $.get(getUserInput('url') + '/api/stock-prices',
      {stock: 'msft', like: true} )
      .then(data => { 
        assert.isDefined(data.stockData);
        assert.property(data.stockData, 'stock');
        assert.property(data.stockData, 'price');
        assert.property(data.stockData, 'likes');
        assert.equal(data.stockData.stock, 'MSFT');
        assert.equal(window.ISQA_5_likes, data.stockData.likes, 'We should not have multiple votes count for our IP.');
      }, xhr => {throw new Error(xhr.statusText); })        
    }`,
    "I can GET /api/stock-prices with 2 stock and be returned the object as defined in user stories." : `{
      getUserInput => $.get(getUserInput('url') + '/api/stock-prices',
      {stock: ['goog','msft'], like: true} )
      .then(data => { 
        assert.isArray(data.stockData);
        assert.property(data.stockData[0], 'stock');
        assert.property(data.stockData[0], 'price');
        assert.property(data.stockData[0], 'rel_likes');
        assert.property(data.stockData[1], 'stock');
        assert.property(data.stockData[1], 'price');
        assert.property(data.stockData[1], 'rel_likes');
        assert.oneOf(data.stockData[0].stock, ['GOOG','MSFT']);
        assert.oneOf(data.stockData[1].stock, ['GOOG','MSFT']);
        assert.notEqual(data.stockData[0].price,data.stockData[1].price);
        assert.notEqual(data.stockData[0].stock,data.stockData[1].stock);
        assert.equal(data.stockData[0].rel_likes + data.stockData[1].rel_likes, 0);
      }, xhr => {throw new Error(xhr.statusText); })         
    }`,    
    "Functional Tests(5)" : `{
      getUserInput => $.get(getUserInput('url')+ '/_api/get-tests?type=functional')
      .then(data => {
         //console.log('First step');
        var testedFor = [];
        var propertyTestsArr = [];
        for (var x=0; x<data.length; x++) {
          var tempArr = [];
          var propertyTests = 0;
          //console.log('1.'+ x);
          for (var i=0; i<data[x].assertions.length; i++) {
            //console.log('1.'+ x+'.' + i);
            tempArr.push(data[x].assertions[i].args[0]);
            //console.log('1.'+ x+'.' + i+'.1');
//console.log(data[x].assertions[i]);
            if(data[x].assertions[i].method == 'property') propertyTests++;
            
            //console.log('1.'+ x+'.' + i+'.2');
          }
          //console.log('Second step');
          assert.include(tempArr, 'res.status','Test '+x+' should test for res.status.');
          assert.equal(data[x].state,'passed','Test '+x+' should be pass.');
          testedFor.push(tempArr);
          propertyTestsArr.push(propertyTests);
        }
        //console.log('Third step');
        for(var y=0; y < 3; y++) {
          assert.isAbove(propertyTestsArr[y], 2, 'Test '+y+' should have at least 3 property tests to test response body.');
          assert.include(testedFor[y], 'res.body.stockData.stock', 'Test '+y+' should test the stock returned to be the one sent.')
        };
        //console.log('Fourth step');
        for(var y=3; y < 5; y++) {
          assert.isAbove(propertyTestsArr[y], 5, 'Test '+y+' should have at least 6 property tests to test response body for properties of BOTH stocks in array.');
          assert.include(testedFor[y], 'res.body.stockData[0].stock', 'Test '+y+' should test both stocks returned to be the one of the ones sent.')
          assert.include(testedFor[y], 'res.body.stockData[1].stock', 'Test '+y+' should test both stocks returned to be the one of the ones sent.')
        };
      }, xhr => { throw new Error(xhr.statusText); })      
    }`, 
    
  },
  
];