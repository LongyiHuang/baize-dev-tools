import React from 'react';
import {getProductCode} from '../../utils'
import {Button, Col, Icon, Input, Row} from "antd";
import {CopyToClipboard} from "react-copy-to-clipboard";
import withBuilder from '../../components/hoc/withBuilder';



const ProductCodeComponent = withBuilder(getProductCode())(props => {
    const {text,copied,onCopy,onBuild} = props;
    return (
        <Row type="flex" align="middle" justify="center" gutter={10}>
            <Col>
                <label style={{textAlign:"center"}}>货品码：</label>
            </Col>

            <Col span={8} >
                <Input
                    placeholder="生成货品码"
                    defaultValue={text}
                    readOnly
                    addonAfter={
                        <Col>
                            <CopyToClipboard text={text} onCopy={onCopy}>
                                <Icon  type={copied?"check":"copy"}/>
                            </CopyToClipboard>
                        </Col>
                    }/>
            </Col>

            <Col>
                <Button type="primary" onClick={onBuild} >生成</Button>
            </Col>
        </Row>
    );
});


export default ProductCodeComponent;