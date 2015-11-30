var Header = require('../../components/header.jsx'),
      ListTools = require('./listTools.jsx'),
      ListTable = require('./ListTable.jsx'),
      User = require('./../../components/user.jsx');

var SponsorList = React.createClass({
	render: function(){
		return (
			<div id="sponsorList" className="sponsorList-w jpanel" ref="idw">
				<Header />
				<User />
				<ListTools />
				<ListTable />
			</div>
		);
	}
});

module.exports = SponsorList;