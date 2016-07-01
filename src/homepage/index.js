var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function(ctx, next){
	title('AlberGram');
	var main = document.getElementById('main-container');
	
	var pictures = [
	{
		user:{
			username: 'AlbertoCalles',
			avatar: 'https://avatars1.githubusercontent.com/u/19253294?v=3&s=460'
		},
		url: 'office.jpg',
		likes: 10,
		liked: true
	},
	{
		user:{
			username: 'AlbertoCalles',
			avatar: 'https://avatars1.githubusercontent.com/u/19253294?v=3&s=460'
		},
		url: 'office.jpg',
		likes: 2,
		liked: true
	}
	];
	
	empty(main).appendChild(template(pictures));
})