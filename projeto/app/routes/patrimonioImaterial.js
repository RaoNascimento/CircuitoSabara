module.exports = function(application) {
    application.get('/patrimonioImaterial', function(req, res) {
        application.app.controllers.patrimonioImaterial.patrimonioImaterial(application, req, res);
    });
}