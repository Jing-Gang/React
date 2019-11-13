import React, { Component } from 'react';
import { Menu, Icon } from "antd";
import { NavLink,withRouter } from "dva/router";
// 引入路由的配置表
import routes from "../routers/router.config.js";
const { SubMenu } = Menu

function createMenu(ary) {
    return ary.map((item,index)=>{
        if(item.path){
            console.log(item.title)
            return item.show&&<Menu.Item key={item.path}>
                        <NavLink to={item.path}>{item.title}</NavLink>
                    </Menu.Item>
        }else{
            return <SubMenu
                    key={item.title}
                    title={
                    <span>
                        <Icon type="mail" />
                        <span>{item.title}</span>
                    </span>
                    }>{createMenu(item.children)
                }</SubMenu>
        }
    })
}

class MyMenu extends Component {
    render() {
        console.log('MenujsX',routes)
        let {path} = this.props.match;
        return <Menu
                onClick={this.handleClick}
                defaultSelectedKeys={[path]}
                defaultOpenKeys={[routes.pages[0].title]}
                mode="inline"
                >{
                createMenu(routes.pages)
                }
                </Menu>
    }
}
export default withRouter(MyMenu);