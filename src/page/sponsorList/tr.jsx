var Tr = React.createClass({
	render: function() {
        console.log(this.props.datas);
		var state = this.props.datas.states,
			des = this.props.datas.des,
			stateDes = null,
            cname = null;
		if ( state == 1 ) {
			stateDes = "开放申请 ";
            cname = "cgreen";
		}else if( state == 2 ) {
			stateDes = "申请截止 ";
            cname = "cgreen";
		}else {
			stateDes = "未发布 ";
            cname = "cred";
		}
		return (
			<tr>
				<td><a href="sponsorDetail.html">{this.props.datas.name}</a></td>
				<td>{this.props.datas.date}</td>
				<td>{this.props.datas.intro}</td>
				<td>{this.props.datas.condition}</td>
				<td><span className={cname}>{stateDes}</span>{des && des}</td>
			</tr>
		);
	}

});

module.exports = Tr;