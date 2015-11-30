var Tr = React.createClass({
    render: function() {
        var state = this.props.datas.status,
            des = this.props.datas.des,
            cname1 = "",
            cname2 = "",
            cname3 = "",
            cname4 = "";
        if ( state == 1 ) {
            cname2 = "hide";
            cname4 = "hide";
        }else if( state == 2 ) {
            cname1 = "hide";
            cname3 = "hide";
            cname4 = "hide";
        }else {
            cname1 = "hide";
            cname2 = "hide";
        }
        return (
            <tr>
                <td><a href="#">{this.props.datas.team}</a></td>
                <td>{this.props.datas.phone}</td>
                <td>{this.props.datas.sponsor_time}</td>
                <td>{ des && des }</td>
                <td>
                    <span className={ cname1 + " cred s-refuse" }>已拒绝</span>
                    <span className={ cname2 + " cgreen s-allowed" }>已批准</span>
                    <a href="#" id="allowBtn" className={ cname3 + " allowBtn" }>批准</a>
                    <a href="#" id="refuseBtn" className={ cname4 + " refuseBtn"}>拒绝</a>
                </td>
            </tr>
        );
    }

});

module.exports = Tr;