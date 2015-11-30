var Header = require('../../components/header.jsx'),
    User = require('../../components/user.jsx'),
    Title = require('./title.jsx'),
    DetailPanel = require('./detail.jsx');

var SponsorPublish = React.createClass({
    render: function(){
        return (
            <div id="sponsorDetail" className="sponsorDetail-w jpanel" ref="idw">
                <Header />
                <User />
                <Title />
                <DetailPanel />
            </div>
        );
    }
});

module.exports = SponsorPublish;