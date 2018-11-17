import React,{Component} from 'react';
import './Home.css';
import {Layout,Icon} from 'antd';
import SiderMenu from '../components/SiderMemu'
import Routes from '../routes';

const {Header,Content} = Layout;

class Home extends Component{

    // true 的时候默认不可见, false 的时候可见
    state = {
        collapsed:false,
    };

    // 切换布尔值，true 变成 false，false 变成 true
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    onClose = () => {
        this.setState({
            collapsed: true,
        });
    };

    render() {
        const { collapsed } = this.state;
        return (
            <Layout>
                <SiderMenu
                    collapsed={collapsed}
                    onClose={this.onClose}
                />
                <Header style={{ background: '#fff', padding: 0 }}>
                    <Icon
                        className="trigger"
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                    />
                </Header>
                <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                    {Routes}
                </Content>
            </Layout>
        );
    }
}

export default Home;