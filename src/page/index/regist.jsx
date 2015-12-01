var Error = require("./errorTip.jsx");
var Regist = React.createClass({
      getInitialState: function(){
        return {
          error:''
        }
      },
	registBtnHandler: function(){
		$registPanel = $('.registPanel');
		$registPanel.show();
	},
	closeHandler: function(){
		$closeBtn = $('#registClose');
		$('.registPanel').hide();
	},
      goList: function(){
        var server = H.server,
            _this = this;
        var params = {
          name: $('#sname').val(),
          password: $('#spass').val(),
          email: $('#email').val(),
          _token: $('input[name="_token"]').val()
        };
        this.setState({error:' '});
        /*if ( !parents.name ) {
          this.setState({error:"赞助方名称不能为空。"});
        }
        if ( !params.password ) {
          this.setState({error:"密码不能为空。"});
        }
        if ( !H.isEmail( params.email )) {
          this.setState({error:"邮箱错误。"});
        }
        if ( params.password != $('#confirmpass').val() ) {
          this.setState({error:"两次输入的密码不同，请重新输入"});
        }*/
        server.regist(params , function(resp){
          if ( resp.code == 0 ) {
            _this.setState({error: resp.message });
            setTimeout(function(){
               window.location.href="list";
             }, 1000);
          } else {
            _this.setState({error: resp.message});
          }
        });
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
                          <Error error={this.state.error}></Error>
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
                          <a href="javascript:;" className="btn btn-default btn-block" onClick={this.goList}>提交</a>
                        </form>
                    </div>
               </div>
		);
	}
});


module.exports = Regist;