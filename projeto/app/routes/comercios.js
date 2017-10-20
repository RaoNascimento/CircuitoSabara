module.exports = function(application) {
    application.get('/comercios', function(req, res) {
        application.app.controllers.comercios.comercios(application, req, res);
    });
    application.get('/comercio', function(req, res) {
        application.app.controllers.comercios.comercio(application, req, res);
    });
}