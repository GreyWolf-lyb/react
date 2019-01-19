import React from 'react';
import  RouteConfig from './router';
import RouteMap from './map';

class ReactView extends React.Component{
    render(){
        const {routes}=this.props;
        return <RouteMap routes={routes===undefined?RouteConfig:routes}/>
    }
}
export default ReactView;