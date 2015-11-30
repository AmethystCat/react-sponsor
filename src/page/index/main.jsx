var PageIntro = require('./pageintro.jsx'),
      Header = require('../../components/header.jsx'),
      Contents = require('./contents.jsx'),
      Login = require('./login.jsx'),
      Regist = require('./regist.jsx');

var Index = React.createClass({
	componentDidMount: function(){
		var $body = $('#index');
		$body.height($(window).height());
	},
	render: function(){
		return (
			<div id="index" className="index-w jpanel" ref="idw">
				<Header />
				<Contents />
				<Login />
				<Regist />
			</div>
		);
	}
});

module.exports = Index;