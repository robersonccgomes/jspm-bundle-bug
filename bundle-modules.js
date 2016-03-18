var jspm = require('jspm');
jspm.setPackagePath('.');

jspm.bundle('another_dependency/login', 'another_dependency/bundle.js');
jspm.bundle('import_default/login', 'import_default/bundle.js');
jspm.bundle('import_multiple/login', 'import_multiple/bundle.js');
