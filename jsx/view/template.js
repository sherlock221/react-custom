/**
 * Created by abjia on 15-6-24.
 */
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var  ExpansionMenuView = require("./expansionMenuView");

var TemplateView = React.createClass({


    render : function(){

        return (
            <div>
                {this._renderHeader()}
                <RouteHandler />
                {this._renderFooter()}
            </div>

        );

    },
    _renderHeader : function(){

        return (

            <header >
            111
            </header>

        );

    },

    _renderFooter : function(){
        return (
            <footer className={"footer-util base"}>
                <ExpansionMenuView/>
            </footer>

        );
    }


});



module.exports  = TemplateView;