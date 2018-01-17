import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux'; // 引入connect

import Header from './section_header.jsx';
import Main from './section_main.jsx';
import Footer from './section_footer.jsx';


class featureA extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillReceiveProps(nextProps) {
  }

  componentDidMount() {
  }

  render() {
    const { name, size } = this.state;
    const { storeA } = this.props;
    return (
      <div style={{border:'1px solid #bd2636', backgroundColor: '#fabeb9', margin: 10, padding: 10}}>
        this is featureA component!
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}
const propertys = state => {
  return { storeA: state.rootData.featureA };
}
featureA = connect(propertys, {})(featureA);
module.exports = featureA;
