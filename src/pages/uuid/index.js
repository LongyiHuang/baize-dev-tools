

import React from 'react';
import {Button, Col, Icon, Input, Row} from "antd";
import {CopyToClipboard} from "react-copy-to-clipboard";
import withBuilder from '../../components/hoc/withBuilder';
import {getUUID} from '../../utils'



const UUIDComponent = withBuilder(getUUID(32,16))(props => {
    const {text,copied,onCopy,onBuild} = props;
    return (
        <Row type="flex" align="middle" justify="center" gutter={10}>
            <Col>
                <label style={{textAlign:"center"}}>UUID：</label>
            </Col>

            <Col span={12} >
                <Input
                    placeholder="生成UUID"
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

export default UUIDComponent;