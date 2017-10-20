module.exports = function(application) {
    application.get('/patrimoniosImateriais', function(req, res) {
        application.app.controllers.patrimoniosImateriais.patrimoniosImateriais(application, req, res);
    });
    application.get('/patrimonioImaterial', function(req, res) {
        application.app.controllers.patrimoniosImateriais.patrimonioImaterial(application, req, res);
    });
}