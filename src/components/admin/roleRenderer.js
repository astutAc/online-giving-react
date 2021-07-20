import React, {Component} from 'react';
import { connect } from 'react-redux';
import { putAllUsers, loader } from '../../actions';

class RoleRenderer extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        if(this.props.value === 1){
            return 'Admin';
        } else {
            return 'User';
        }
      
    }
}


function mapStateToProps(state){
    return {
        
    }
}

export default connect(mapStateToProps,{ putAllUsers, loader })(RoleRenderer);


