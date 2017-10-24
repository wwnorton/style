const fs = require('fs');
const config = require('./');

fs.writeFile(
	'.stylelintrc.json',
	JSON.stringify(config, null, '\t'),
	(err) => { if (err) throw new Error(err); }
);
