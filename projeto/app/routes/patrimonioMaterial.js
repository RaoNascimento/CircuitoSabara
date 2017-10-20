module.exports = function(application) {
    application.get('/patrimoniosMateriais', function(req, res) {
        application.app.controllers.patrimoniosMateriais.patrimoniosMateriais(application, req, res);
    });
    application.get('/patrimonioMaterial', function(req, res) {
        application.app.controllers.patrimoniosMateriais.patrimonioMaterial(application, req, res);
    });
}