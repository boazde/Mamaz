/**
 * EmojiController
 *
 * @description :: Server-side logic for managing emojis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    associateWithUser: function(req, res) {
            //console.log('hello')
            Emoji.update({
                id: req.param('id')
            }, {
                owner: req.param('owner')
            }).exec(function(err) {
                if (err) return res.negotiate(err);
                res.json({
                    hello: 'world'
                });
            });

        }
        /*    find: function(req, res) {},
            findOne: function(req, res) {},
            create: function(req, res) {},
            update: function(req, res) {},
            destroy: function(req, res) {},*/
};