var ReactRouter =  require("react-router");
var Routes = ReactRouter.Routes;
var Route = ReactRouter.Route;


//视图
var IndexView = require("./view/index");
var DetailView = require("./view/detail");


//定义整个页面的路由结构
var routes = (

    <Routes location="hash">
        <Route path="/" handler={IndexView}>
            <Route path="index" name="index" handler={IndexView}/>
            <Route path="detail" name="detail" handler={DetailView}/>
            <ReactRouter.DefaultRoute handler={IndexView}/>
        </Route>
    </Routes>

);



React.render(<IndexView/>,document.body);
