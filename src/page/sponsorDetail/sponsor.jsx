var Tr = require('./tr.jsx');
var Sponsor = React.createClass({
    getDefaultProps: function () {
        return {
            resp:[
                {
                    id:1,
                    team:"跑男团",
                    phone:13211112222,
                    sponsor_time:"2015/11/28 13:00",
                    des:"奔跑吧兄弟！",
                    status:0
                },
                {
                    id:2,
                    team:"全员加速跑团",
                    phone:13211112222,
                    sponsor_time:"2015/11/28 13:30",
                    des:"全员加速，等你来战！",
                    status:1
                },
                {
                    id:3,
                    team:"全职猎人跑团",
                    phone:13211112222,
                    sponsor_time:"2015/11/28 13:50",
                    des:"最强！",
                    status:2
                }
            ]
        };
    },
	render: function() {
        var data = this.props.resp;
		return (
            <div role="tabpanel" className="tab-pane" id="sponsor">
                <div className="section-state">
                    <div className="checkbox confirm-state-w">
                        <label>
                            <input type="checkbox" /> 我已审批完所有申请
                        </label>
                        <span className="sponsor-state">赞助意向未达成，取消赞助</span>
                    </div>
                    <div className="search-w">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search for..."/>
					        <span className="input-group-btn">
							    <button className="btn btn-default" type="button">搜索</button>
					        </span>
                        </div>
                    </div>
                </div>
                <div className="section-table-w">
                    <table className="table table-bordered table-striped table-hover">
                        <thead>
                        <tr>
                            <th>社团</th>
                            <th>联系电话</th>
                            <th>申请时间</th>
                            <th>备注</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            data.map(function (contents) {
                                console.log(contents);
                                return <Tr key={contents.id} datas={contents} />;
                            })
                        }
                        </tbody>
                    </table>
                    <div className="pageNation-w">
                        <span>共15页赞助&nbsp;</span>
                        <a href="#">上一页</a>&nbsp;
                        <a href="#">下一页</a>
                    </div>
                </div>
            </div>
		);
	}

});

module.exports = Sponsor;