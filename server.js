var express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
path = require('path'),
port = 3000,
app = express();

app.use(express.static( __dirname + '/Angular-app/dist' ));

// Set up body-parser to parse form data
app.use(bodyParser.urlencoded({extended: true}));
// JSON
app.use(bodyParser.json());
// Set up database connection, Schema, model

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/Shinto_coin');

var TaskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, default: ""},
    completed: {type: Boolean, default: false},
    },{timestamps: true});

var Task = mongoose.model('task', TaskSchema);

// Here are our routes!

//Angular routes:
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./Angular-app/dist/index.html"))
  });

//server routes
app.get('/task', function(req, res){
    Task.find({}, function(err, results){
        if(err) {
            res.json(err);
        } else {
            res.json(results);
        }
    });
});

app.post('/task', function(req, res){
    var tasks = new Task(req.body)
    console.log('creating Task:', tasks);
    tasks.save(function(err, results){
        if(err) {
            res.json(err);
        }else {
            res.json(results);
        }
    });
});

app.delete('/remove/:id', function(req, res){
    Task.remove({_id: req.params.id}, function(err, results){
        if(err) {
            res.json(err);
        } else {
            res.json(results);
        }
    });
});

app.get('/task/:id', function(req, res){
    Task.find({_id: req.params.id}, function(err, results){
        if(err) {
            res.json(err);
        } else {
            res.json(results);
        }
    });
});

app.put('/task/:id', function(req, res){
    Task.update({_id: req.params.id}, req.body, function(err, results){
        if(err) {
            res.json(err);
        } else {
            res.json(results);
        }
    });
});
// END OF ROUTING...

app.listen(port, function() {
    console.log("listening on port: ", port);
    });
