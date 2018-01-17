import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux'; // 引入connect
import { Button, Radio, Icon } from 'antd'
import { addNum, reduceNum } from '../action.js';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.add = this.add.bind(this);
        this.reduceValue = this.reduceValue.bind(this);
    }
    add() {
        let { addNum } = this.props;
        addNum();
    }
    reduceValue() {
        let { reduceNum } = this.props;
        reduceNum();
    }
    componentWillReceiveProps(nextProps) {}

    componentDidMount() {}

    render() {
        const { name, size } = this.state;
        let { theNumber } = this.props.storeA.pageData;
        return ( <div style = {{ border: '1px solid #0c60aa', backgroundColor: '#add8f7', margin: 10, padding: 10 } } >
            this is Header component! & nbsp; & nbsp; & nbsp; & nbsp; <Button.Group >
            <Button type = "primary" disabled = { theNumber>19?true:false } onClick = { this.add } >
            <Icon type = "plus" /> Plus </Button>
            <Button type = "primary" disabled = { theNumber<1?true:false } onClick = { this.reduceValue } >
            Minus < Icon type = "minus" />
            </Button> </Button.Group>
            问题1： 怎样限制区间数字在0~20 之间？ </div>
        )
    }
}

const propertys = state => {
    return { storeA: state.rootData.featureA };
}
Header = connect(propertys, { addNum, reduceNum })(Header);
module.exports = Header;