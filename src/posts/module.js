(function (angular) {
	'use strict';

	angular.module('posts', ['ui.router']);

	angular.module('posts')
		.config(function($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise('/state1');
			$stateProvider
				.state('posts', {
					url: '/',
					templateUrl: 'posts/posts.html',
				})
				.state('posts.view', {
					url: '/view/:slug-:id',
					templateUrl: 'posts/posts.view.html',
				});
		});
})(window.angular);
