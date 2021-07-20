import React, {Component} from 'react';
import { connect } from 'react-redux';
import { putAllUsers, loader } from '../../actions';


class ButtonCellRendrer extends Component {
    constructor(props) {
      super(props);
      this.btnClickedHandler = this.btnClickedHandler.bind(this);
    }





    async btnClickedHandler() {
        console.log(this.props.data);
        this.props.loader(true);
        await this.props.putAllUsers(this.props.data,loader);
        this.props.loader(false);
    }
    render() {
      return (
        <button onClick={this.btnClickedHandler}>Save</button>
      )
    }
  }


function mapStateToProps(state){
    return {
        
    }
}

export default connect(mapStateToProps,{ putAllUsers, loader })(ButtonCellRendrer);


