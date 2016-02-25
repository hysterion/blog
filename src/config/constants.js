(function (angular) {
	'use strict';

	var BLOG_CONF = {
		version: '0.0.1',
		name: 'Elhebert blog',
		author: 'Elhebert <elhebert@hotmail.be>',
		staticFiles: '/posts',
	};

	angular.module('config').constant('BLOG_CONF', BLOG_CONF);

})(window.angular);
