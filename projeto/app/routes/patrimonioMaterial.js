module.exports = function(application) {
    application.get('/patrimonioMaterial', function(req, res) {
        application.app.controllers.patrimonioMaterial.patrimonioMaterial(application, req, res);
    });
}