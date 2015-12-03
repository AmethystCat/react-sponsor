var Error = require("./errorTip.jsx");
var Login = React.createClass({
      getInitialState: function(){
        return {
          error:""
        };
      },
	loginBtnHandler: function(){
		$loginPanel = $('.loginPanel');
		$loginPanel.fadeIn('fast');
	},
	closeHandler: function(){
		$closeBtn = $('#loginClose');
		$('.loginPanel').fadeOut('fast');
	},
      loginToList: function(){
           var server = H.server,
            _this = this;
            var params = {
              email: $('#username').val(),
              password: $('#pass').val(),
              _token: $('input[name="_token"]').val()
            };
            this.setState({error:' '});

            if ( !params.email ) {
              this.setState({error:"邮箱不能为空。"});
              return;
            }
            if ( !params.password ) {
              this.setState({error:"密码不能为空。"});
              return;
            }

            server.login(params , function(resp){
              if ( resp.code == 0 ) {
                _this.setState({error: resp.message });
                setTimeout(function(){
                   window.location.href="list";
                 }, 800);
              } else {
                _this.setState({error: resp.message});
                return false;
              }
            });
          return false; 
    },
	render: function(){
		return (
		      <div>
                    <button type="button" id="loginBtn" className="btn btn-success loginBtn" onClick={this.loginBtnHandler}>登录</button>
                    <div className="loginPanel form-w" style={{display:"none"}}>
                     <span className="closeBtn" id="loginClose" onClick={this.closeHandler}>x</span>
                        <h3>登录coopreration witness</h3>
                        <Error error={this.state.error} />
                        <form>
                        <div className="form-group">
                            <input type="text" className="form-control" id="username" placeholder="邮箱"/>
                          </div>
                          <div className="form-group">
                            <input type="password" className="form-control" id="pass" placeholder="密码"/>
                          </div>
                          <div className="checkbox login-checkbox">
                            <label>
                              <input type="checkbox"/> 下次自动登录
                            </label>
                          </div>
                         {/*<button type="submit" className="btn btn-default btn-block">提交</button>*/}
                          <a href="javascript:;" className="btn btn-default btn-block" onClick={this.loginToList}>提交</a>
                        </form>
                    </div>
               </div>
		);
	}
});

module.exports = Login;