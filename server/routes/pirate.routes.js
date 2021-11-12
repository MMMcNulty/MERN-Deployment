const PirateController = require('../controllers/pirate.controller');


module.exports = function(app) {
    app.get('/api', PirateController.index);
    app.get('/api/pirates/:id', PirateController.findOne);
    app.get('/api/pirates', PirateController.getAllPirates);
    app.post('/api/pirates', PirateController.createPirate);
    app.put('/api/pirates/:id', PirateController.updatePirate);
    app.delete("/api/pirates/:id", PirateController.delete)
}