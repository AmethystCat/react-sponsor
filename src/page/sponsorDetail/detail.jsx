var BaseForm = require('./baseForm.jsx'),
    Sponsor = require('./sponsor.jsx'),
    Ac = require('./ac.jsx');

var DetailPanel = React.createClass({

	render: function() {
		return (
            <div className="detail-tab-panel">
                <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active"><a href="#baseInfo" aria-controls="home" role="tab" data-toggle="tab">基本信息</a></li>
                    <li role="presentation"><a href="#sponsor" aria-controls="profile" role="tab" data-toggle="tab">申请</a></li>
                    <li role="presentation"><a href="#activity" aria-controls="messages" role="tab" data-toggle="tab">活动</a></li>
                </ul>

                <div className="tab-content">
                    <BaseForm />
                    <Sponsor />
                    <Ac />
                </div>
            </div>
		);
	}

});

module.exports = DetailPanel;