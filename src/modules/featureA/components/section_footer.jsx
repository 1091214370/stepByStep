import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux'; // 引入connect
import { Button, Radio, Icon } from 'antd'
import {} from 'antd';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentWillReceiveProps(nextProps) {
  }

  componentDidMount() {
  }

  render() {
    const {name, size} = this.state;
    return (
      <div style={{border:'1px solid #00707f', backgroundColor: '#a7dfe3', margin: 10, padding: 10}}>
        this is Footer component!
      </div>
    )
  }
}
const propertys = state => {
  return { storeA: state.rootData.featureA };
}
Footer = connect(propertys, {})(Footer);
module.exports = Footer;
