var Regist = React.createClass({
	registBtnHandler: function(){
		$registPanel = $('.registPanel');
		$registPanel.show();
	},
	closeHandler: function(){
		$closeBtn = $('#registClose');
		$('.registPanel').hide();
	},
    goList: function(){
      console.log(123);
      window.location.href="sponsorList.html";
      return false;
    },
	render: function  () {
		return (
		      <div>
                    <button type="button" className="btn btn-success registBtn" onClick={this.registBtnHandler}>注册</button>
                    <div className="registPanel form-w" style={{display:"none"}}>
                        <span className="closeBtn" id="registClose" onClick={this.closeHandler}>x</span>
                        <h3>注册coopreration witness</h3>
                        <form>
                        <div className="error-mess">asdj</div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="username" placeholder="用户名"/>
                          </div>
                          <div className="form-group">
                            <input type="password" className="form-control" id="pass" placeholder="密码"/>
                          </div>
                          <div className="form-group">
                            <input type="password" className="form-control" id="confirmpass" placeholder="确认密码"/>
                          </div>
                          <a href="javascript:;" className="btn btn-default btn-block" onClick={this.goList}>提交</a>
                        </form>
                    </div>
               </div>
		);
	}
});


module.exports = Regist;