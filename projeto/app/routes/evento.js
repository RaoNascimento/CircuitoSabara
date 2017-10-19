module.exports = function(application) {
    application.get('/evento', function(req, res) {
        application.app.controllers.evento.evento(application, req, res);
    });
}