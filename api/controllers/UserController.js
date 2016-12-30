/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    //localhost:/133
    findOne: function(req, res) {
        User.findOne({
            id: req.param('id')
        }).exec(function(err, user) {
            if (err) return res.negotiate(err);

            //subscribe to changes this particular user
            //will send socket event
            //  User.subscribe(req, user.id);

            return res.view('profile', {
                user: user
            });

        });
    }
};