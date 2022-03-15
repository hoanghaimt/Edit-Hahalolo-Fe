const ghpages = require('gh-pages');

ghpages.publish(
	'docs',
	{
		
	},
	function(err) {
		if (err) {
			console.error(err);
		} else {
			console.log('');
		}
	},
);
