module.exports = function(application) {
    application.get('/comercio', function(req, res) {
        application.app.controllers.comercio.comercio(application, req, res);
    });
}