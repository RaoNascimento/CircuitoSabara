module.exports = function(application) {
    application.get('/eventos', function(req, res) {
        application.app.controllers.eventos.eventos(application, req, res);
    });
    application.get('/evento', function(req, res) {
        application.app.controllers.eventos.evento(application, req, res);
    });
}