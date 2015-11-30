var BaseForm = React.createClass({

	render: function() {
		return (
			<div role="tabpanel" className="tab-pane active" id="baseInfo">
				<div className="form-w publish-form">
					<form className="form-horizontal">
						<div className="form-group">
							<label className="col-sm-2 control-label">申请日期<i className="cred">*</i></label>
							<div className="col-sm-10">
								<input type="text" className="form-control form-control-inline" id="begin_time" placeholder="选择起始日期"/>&nbsp;~&nbsp;
								<input type="text" className="form-control form-control-inline" id="end_time" placeholder="选择结束日期"/>
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="condition" className="col-sm-2 control-label">申请条件</label>
							<textarea name="condition" id="condition" cols="55" rows="4" placeholder="请简要描述申请此赞助需要满足的条件，供社团参与评估。"></textarea>
						</div>
						<div className="form-group">
							<label htmlFor="intro" className="col-sm-2 control-label">简介 <i className="cred">*</i></label>
							<textarea name="intro" id="intro" cols="55" rows="4" placeholder="请简要描述可提供的赞助。"></textarea>
						</div>
						<div className="form-group">
							<label className="col-sm-2 control-label"></label>
							<a href="javascript:;" id="saveBtn" className="btn btn-default">保存为草稿</a>
							<a href="javascript:;" id="publishBtn" className="btn btn-default publishBtn">发布</a>
						</div>
					</form>
				</div>
			</div>
		);
	}

});

module.exports = BaseForm;