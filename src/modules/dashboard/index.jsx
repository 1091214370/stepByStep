import React, {Component} from 'react';
import {} from 'antd';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"incognito",
      size:0,
    }
  }

  componentWillReceiveProps(nextProps) {
  }

  componentDidMount() {
  }
  render() {
    const {name, size} = this.state;
    return (
      <div>这里就是JSX，属性里面的名字是：{name}，size是：{size}。
      </div>
    )
  }
}
module.exports = Dashboard;
