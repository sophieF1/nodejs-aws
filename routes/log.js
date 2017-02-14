/**
 * Created by sophie on 14/02/2017.
 */
exports.index = function(req, res) {
    res.render('log', {title: 'My AWS Log'});
};

exports.add_log = function(req, res) {
};