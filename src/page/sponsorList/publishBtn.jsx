var PublishBtn = React.createClass({
	publishHandler: function(){
		window.location.href = "sponsorPublish.html";
	},
	render: function() {
		return (
			<button className="btn btn-default" onClick={this.publishHandler}>发布新赞助</button>
		);
	}

});

module.exports = PublishBtn;