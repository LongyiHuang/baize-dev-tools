import React from 'react';
import './index.css';
import { Layout, Menu, Icon} from 'antd';
import {Link} from 'react-router-dom';
import logo from '../../resource/baize.jpg';
import PropTypes from "prop-types";
const { Sider } = Layout;


class SiderMenu extends React.Component {

    static contextTypes = {
        router:PropTypes.object
    }


    render() {
        const { collapsed } = this.props;
        return (
            <Sider
                className="sider"
                trigger={null}
                collapsible
                breakpoint="lg"
                collapsed={collapsed}
                width={256}
            >
                <div className="logo" >
                    <img src={logo} alt="logo" />
                    <h1>Dev Tools</h1>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" >
                        <Icon type="key" />
                        <span>UUID</span>
                        <Link to={"/uuid"}></Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="barcode" />
                        <span>Product Code</span>
                        <Link to={"/product"}></Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default SiderMenu;