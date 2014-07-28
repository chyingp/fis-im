/**
 * Created by a on 14-7-28.
 */
'use strict';

var fis = module.exports = require('fis');
fis.cli.name = 'im';
fis.cli.info = fis.util.readJSON(__dirname + '/package.json');

fis.config.merge({
	roadmap : {
		ext : {
			md : 'html'
		}
	},
	modules : {
		parser : {
			md : 'marked'
		}
	}
});