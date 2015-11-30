var Tr = require('./tr.jsx');
var ListTable = React.createClass({
    getDefaultProps: function(){
        return {
            resp: [
                {
                    id:1,
                    name:"奔驰周年庆",
                    date:"2015/10/10-2015/10/10",
                    intro:"奔驰一周年庆典，新车发布会",
                    condition:"驾龄5年以上，无心脏病，高血压等疾病",
                    states:0,
                    des:""
                },
                {
                    id:2,
                    name:"百事餐饮",
                    date:"2015/10/10-2015/10/10",
                    intro:"休闲交友还有免费下午茶。",
                    condition:"年满18周岁，人数50人以上",
                    states:1,
                    des:"4/10"
                },
                {
                    id:3,
                    name:"唯品会周年庆",
                    date:"2015/10/10-2015/10/10",
                    intro:"爽购乐翻天。",
                    condition:"驾龄5年以上，无心脏病，高血压等疾病",
                    states:2,
                    des:"4/10"
                }
            ]
        };
    },
	render: function() {
        var data = this.props.resp;
		return (
			<div className="section-table-w">
				<table className="table table-bordered table-striped table-hover">
					<thead>
						<tr>
                            <th>项目</th>
                            <th>申请日期</th>
                            <th>简介</th>
                            <th>申请条件</th>
                            <th>状态</th>
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
		);
	}

});

module.exports = ListTable;