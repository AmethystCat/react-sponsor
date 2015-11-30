var Search = React.createClass({

	render: function() {
		return (
			<div className="search-w">
				<div className="input-group">
					<input type="text" className="form-control" placeholder="Search for..."/>
					<span className="input-group-btn">
							<button className="btn btn-default" type="button">搜索</button>
					</span>
				</div>
			</div>
		);
	}
});

module.exports = Search;