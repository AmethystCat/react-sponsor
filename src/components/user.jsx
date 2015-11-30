var User = React.createClass({
	logout: function () {
		window.location.href = "index.html";
	},
	render: function() {
		return (
			<div className="user-w">
				<div className="btn-group">
				  <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				    HC <span className="caret"></span>
				  </button>
				  <ul className="dropdown-menu">
				    <li><a href="#">我的资料</a></li>
				    <li><a href="#" onClick={this.logout}>退出登录</a></li>
				  </ul>
				</div>		
			</div>
		);
	}

});

module.exports = User;