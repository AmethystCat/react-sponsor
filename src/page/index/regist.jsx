var Error = require("./errorTip.jsx");
var Regist = React.createClass({
      getInitialState: function(){
        return {
          error:''
        }
      },
	registBtnHandler: function(){
		$registPanel = $('.registPanel');
		$registPanel.fadeIn('fast');
	},
	closeHandler: function(){
		$closeBtn = $('#registClose');
		$('.registPanel').fadeOut('fast');
	},
      registToList: function(){
        var server = H.server,
            _this = this;
        var params = {
          name: $('#sname').val(),
          password: $('#spass').val(),
          email: $('#email').val(),
          captcha: $('#captcha-input').val(),
          _token: $('input[name="_token"]').val()
        };
        this.setState({error:' '});
        if ( !params.name ) {
          this.setState({error:"赞助方名称不能为空。"});
          return;
        }
        if ( !params.password ) {
          this.setState({error:"密码不能为空。"});
          return;
        }
        if ( !H.isEmail( params.email )) {
          this.setState({error:"邮箱错误。"});
          return;
        }
        if ( !params.captcha ) {
          this.setState({error:"验证码不能为空。"});
          return;
        }
        if ( params.password != $('#confirmpass').val() ) {
          this.setState({error:"两次输入的密码不同，请重新输入"});
          return;
        }
        server.regist(params , function(resp){
          if ( resp.code == 0 ) {
            _this.setState({error: resp.message });
            setTimeout(function(){
               window.location.href="list";
             }, 800);
          } else {
            _this.setState({error: resp.message});
            _this.captchaRefresh();
            return false;
          }
        });
          return false;
      },
      captchaChange: function(){
        this.captchaRefresh();
        this.setState({error:""});
      },
      captchaRefresh: function(){
        $(".captcha-loading").show();
        $("#captcha-img").attr("src","/captcha?"+Math.random());
        $("#captcha-input").val("");
      },
      componentDidMount: function(){
        $("#captcha-img")[0].onload = function(){
          console.log("captcha has loaded.");
          $(".captcha-loading").hide();
        }
      },
	render: function  () {
		return (
		      <div>
                    <button type="button" className="btn btn-success registBtn" onClick={this.registBtnHandler}>注册</button>
                    <div className="registPanel form-w" style={{display:"none"}}>
                        <span className="closeBtn" id="registClose" onClick={this.closeHandler}>x</span>
                        <h3>注册coopreration witness</h3>
                        <form>
                          <Error error={this.state.error} />
                          <div className="form-group">
                            <input type="text" className="form-control" id="sname" placeholder="赞助方名称"/>
                          </div>
                          <div className="form-group">
                            <input type="text" className="form-control" id="email" placeholder="邮箱"/>
                          </div>
                          <div className="form-group">
                            <input type="password" className="form-control" id="spass" placeholder="密码"/>
                          </div>
                          <div className="form-group">
                            <input type="password" className="form-control" id="confirmpass" placeholder="确认密码"/>
                          </div>
                          <div className="form-group captcha-w">
                            <input type="text" className="form-control captcha-input" id="captcha-input" placeholder="验证码"/>
                            <img className="captcha-img" id="captcha-img" src="/captcha" alt=""/>
                            <div className="captcha-loading"><img src="/static/assets/images/loading.gif"/></div>
                            <a href="javascript:;" className="changed-btn" onClick={this.captchaChange}>换一换</a>
                          </div>
                          <a href="javascript:;" className="btn btn-default btn-block" onClick={this.registToList}>提交</a>
                        </form>
                    </div>
               </div>
		);
	}
});


module.exports = Regist;