/**
 * Created by 叶子 on 2017/8/13.
 */
import React, { Component } from 'react';
// import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import Wysiwyg from 'bundle-loader?lazy!../components/ui/Wysiwyg';  // 按需加载富文本配置
import { Route, Redirect, Switch } from 'react-router-dom';
// import Dashboard from '../components/dashboard/Dashboard';
// import BasicForm from '../components/forms/BasicForm';
// import BasicTable from '../components/tables/BasicTables';
// import AdvancedTable from '../components/tables/AdvancedTables';
// import AsynchronousTable from '../components/tables/AsynchronousTable';
// import Echarts from '../components/charts/Echarts';
// import Recharts from '../components/charts/Recharts';
// import Icons from '../components/ui/Icons';
// import Buttons from '../components/ui/Buttons';
// import Spins from '../components/ui/Spins';
// import Modals from '../components/ui/Modals';
// import Notifications from '../components/ui/Notifications';
// import Tabs from '../components/ui/Tabs';
// import Banners from '../components/ui/banners';
// import Drags from '../components/ui/Draggable';
// import Gallery from '../components/ui/Gallery';
// import BasicAnimations from '../components/animation/BasicAnimations';
// import ExampleAnimations from '../components/animation/ExampleAnimations';
// import AuthBasic from '../components/auth/Basic';
// import RouterEnter from '../components/auth/RouterEnter';
// import Bundle from '../components/widget/Bundle';


function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();
      console.log(1110000000000000)
      this.setState({
        component: component
      });
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}

// const Dashboard = r => require.ensure([], () => r(require('../components/dashboard/Dashboard')), 'dashboard')

const Dashboard = asyncComponent(() => import("components/dashboard/Dashboard"))
const BasicForm = asyncComponent(() => import("components/forms/BasicForm"))
const BasicTable = asyncComponent(() => import("components/tables/BasicTables"))
const AdvancedTable = asyncComponent(() => import("components/tables/AdvancedTables"))
const AsynchronousTable = asyncComponent(() => import("components/tables/AsynchronousTable"))
const Echarts = asyncComponent(() => import("components/charts/Echarts"))
const Recharts = asyncComponent(() => import("components/charts/Recharts"))
const Icons = asyncComponent(() => import("components/ui/Icons"))
const Buttons = asyncComponent(() => import("components/ui/Buttons"))
const Spins = asyncComponent(() => import("components/ui/Spins"))
const Modals = asyncComponent(() => import("components/ui/Modals"))
const Notifications = asyncComponent(() => import("components/ui/Notifications"))
const Tabs = asyncComponent(() => import('components/ui/Tabs'))
const Banners = asyncComponent(() => import('components/ui/banners'))
const Drags = asyncComponent(() => import('components/ui/Draggable'))
const Gallery = asyncComponent(() => import('components/ui/Gallery'))
const BasicAnimations = asyncComponent(() => import('components/animation/BasicAnimations'))
const ExampleAnimations = asyncComponent(() => import('components/animation/ExampleAnimations'))
const AuthBasic = asyncComponent(() => import('components/auth/Basic'))
const RouterEnter = asyncComponent(() => import('components/auth/RouterEnter'))
const Bundle = asyncComponent(() => import('components/widget/Bundle'))
console.log(JSON.stringify(AsynchronousTable), 'AsynchronousTable')
// router 3 代码切割
// const Dashboard = (location, cb) => {
//   require.ensure([], require => {
//     cb(null, require('components/dashboard/Dashboard').default)
//   })
// }
// const BasicForm = (location, cb) => { require.ensure([], require => { cb(null, require('components/forms/BasicForm').default) }) }
// const BasicTable = (location, cb) => { require.ensure([], require => { cb(null, require('components/tables/BasicTables').default) }) }
// const AdvancedTable = (location, cb) => { require.ensure([], require => { cb(null, require('components/tables/AdvancedTables').default) }) }
// const AsynchronousTable = (location, cb) => { require.ensure([], require => { cb(null, require('components/tables/AsynchronousTable').default) }) }
// const Echarts = (location, cb) => { require.ensure([], require => { cb(null, require('components/charts/Echarts').default) }) }
// const Recharts = (location, cb) => { require.ensure([], require => { cb(null, require('components/charts/Recharts').default) }) }
// const Icons = (location, cb) => { require.ensure([], require => { cb(null, require('components/ui/Icons').default) }) }
// const Buttons = (location, cb) => { require.ensure([], require => { cb(null, require('components/ui/Buttons').default) }) }
// const Spins = (location, cb) => { require.ensure([], require => { cb(null, require('components/ui/Spins').default) }) }
// const Modals = (location, cb) => { require.ensure([], require => { cb(null, require('components/ui/Modals').default) }) }
// const Notifications = (location, cb) => { require.ensure([], require => { cb(null, require('components/ui/Notifications').default) }) }
// const Tabs = (location, cb) => { require.ensure([], require => { cb(null, require('components/ui/Tabs').default) }) }
// const Banners = (location, cb) => { require.ensure([], require => { cb(null, require('components/ui/banners').default) }) }
// const Drags = (location, cb) => { require.ensure([], require => { cb(null, require('components/ui/Draggable').default) }) }
// const Gallery = (location, cb) => { require.ensure([], require => { cb(null, require('components/ui/Gallery').default) }) }
// const BasicAnimations = (location, cb) => { require.ensure([], require => { cb(null, require('components/animation/BasicAnimations').default) }) }
// const ExampleAnimations = (location, cb) => { require.ensure([], require => { cb(null, require('components/animation/ExampleAnimations').default) }) }
// const AuthBasic = (location, cb) => { require.ensure([], require => { cb(null, require('components/auth/Basic').default) }) }
// const RouterEnter = (location, cb) => { require.ensure([], require => { cb(null, require('components/auth/RouterEnter').default) }) }
// const Bundle = (location, cb) => { require.ensure([], require => { cb(null, require('components/widget/Bundle').default) }) }


const WysiwygBundle = (props) => (
  <Bundle load={Wysiwyg}>
    {(Component) => <Component {...props} />}
  </Bundle>
);

export default class CRouter extends Component {
  requireAuth = (permission, component) => {
    const { auth } = this.props;
    const { permissions } = auth.data;
    console.log(permissions, 'permissions11111111111111111');
    // const { auth } = store.getState().httpData;
    if (!permissions || !permissions.includes(permission)) return <Redirect to={'404'} />;
    return component;
  };
  render() {
    return (

      <Switch>
        <Route exact path="/app/dashboard/index" component={Dashboard} />
        <Route exact path="/app/form/basicForm" component={BasicForm} />
        <Route exact path="/app/table/basicTable" component={BasicTable} />
        <Route exact path="/app/table/advancedTable" component={AdvancedTable} />
        <Route exact path="/app/table/asynchronousTable" component={AsynchronousTable} />
        <Route exact path="/app/chart/echarts" component={Echarts} />
        <Route exact path="/app/chart/recharts" component={Recharts} />

        <Route exact path="/app/ui/icons" component={Icons} />
        <Route exact path="/app/ui/buttons" component={Buttons} />
        <Route exact path="/app/ui/spins" component={Spins} />
        <Route exact path="/app/ui/modals" component={Modals} />
        <Route exact path="/app/ui/notifications" component={Notifications} />
        <Route exact path="/app/ui/tabs" component={Tabs} />
        <Route exact path="/app/ui/banners" component={Banners} />
        <Route exact path="/app/ui/wysiwyg" component={WysiwygBundle} />
        <Route exact path="/app/ui/drags" component={Drags} />
        <Route exact path="/app/ui/gallery" component={Gallery} />

        <Route exact path="/app/animation/basicAnimations" component={BasicAnimations} />
        <Route exact path="/app/animation/exampleAnimations" component={ExampleAnimations} />

        <Route exact path="/app/auth/basic" component={AuthBasic} />
        <Route exact path="/app/auth/routerEnter" component={(props) => this.requireAuth('auth/testPage', <RouterEnter {...props} />)} />

        <Route render={() => <Redirect to="/404" />} />
      </Switch>

    )
  }
}