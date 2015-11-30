var Header = require('../../components/header.jsx'),
    User = require('../../components/user.jsx'),
    Title = require('./title.jsx'),
    PublishForm = require('./publishForm.jsx');

var SponsorPublish = React.createClass({
    render: function(){
        return (
            <div id="sponsorPublish" className="sponsorPublish-w jpanel" ref="idw">
                <Header />
                <User />
                <Title />
                <PublishForm />
            </div>
        );
    }
});

module.exports = SponsorPublish;