module.exports = function(application) {
    application.get('/contatos', function(req, res) {
        application.app.controllers.contatos.contatos(application, req, res);
    });
    application.get('/contato', function(req, res) {
        application.app.controllers.contatos.contato(application, req, res);
    });
}