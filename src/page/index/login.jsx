var Login = React.createClass({
	loginBtnHandler: function(){
		$loginPanel = $('.loginPanel');
		$loginPanel.show();
	},
	closeHandler: function(){
		$closeBtn = $('#loginClose');
		$('.loginPanel').hide();
	},
    goList: function(){
      console.log(123);
      window.location.href="sponsorList.html";
      return false;
    },
	render: function(){
		return (
		      <div>
                    <button type="button" id="loginBtn" className="btn btn-success loginBtn" onClick={this.loginBtnHandler}>登录</button>
                    <div className="loginPanel form-w" style={{display:"none"}}>
                     <span className="closeBtn" id="loginClose" onClick={this.closeHandler}>x</span>
                        <h3>登录coopreration witness</h3>
                        <form>
                        <div className="form-group">
                            <input type="password" className="form-control" id="username" placeholder="用户名"/>
                          </div>
                          <div className="form-group">
                            <input type="password" className="form-control" id="pass" placeholder="密码"/>
                          </div>
                          <div className="checkbox">
                            <label>
                              <input type="checkbox"/> 下次自动登录
                            </label>
                          </div>
                         {/*<button type="submit" className="btn btn-default btn-block">提交</button>*/}
                          <a href="javascript:;" className="btn btn-default btn-block" onClick={this.goList}>提交</a>
                        </form>
                    </div>
               </div>
		);
	}
});

module.exports = Login;