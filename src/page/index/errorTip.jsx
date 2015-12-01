var Error = React.createClass({
	render: function() {
		var errorMess = this.props.error || '';
		return (
			<div className="error-mess">
				{ errorMess }
			</div>
		);
	}

});

module.exports = Error;