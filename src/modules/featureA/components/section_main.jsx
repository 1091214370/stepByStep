import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux'; // 引入connect
import { setNum,setIcon} from '../action.js';
import { Rate, Icon } from 'antd';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.changeNum=this.changeNum.bind(this);
    this.changeIcon=this.changeIcon.bind(this);
  }

  componentWillReceiveProps(nextProps) {
  }

  componentDidMount() {
  }
  changeNum(value){
    value = value * 2;
    const { setNum } = this.props;
    setNum(value)
  }
  changeIcon(event){
    const { setIcon } = this.props;
    setIcon(event.target.value);
  }
  render() {
    const {name, size} = this.state;
    const {theNumber,theIcon} = this.props.dataA;
    return (
      <div style={{border:'1px solid #533eb4', backgroundColor: '#cfcaf6', margin: 10, padding: 10, height: '50vh'}}>
        this is Main component!
        <Rate character={<Icon type={theIcon} />}  allowHalf count={10} value={theNumber/2} onChange={this.changeNum}/>
        <span style={{margin:"0 10px", display:"inline-block"}}>{theNumber}</span>
        问题2：怎样创建一个自定义图标的Rate组件？
          <input type="text" onChange={this.changeIcon}/>
      </div>
    )
  }
}

const propertys = state => {
  return { dataA: state.rootData.featureA.pageData };
}
Main = connect(propertys, {setNum,setIcon})(Main);
module.exports = Main;
