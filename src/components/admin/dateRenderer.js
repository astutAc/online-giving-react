import React, {Component} from 'react';
import { connect } from 'react-redux';
import dateFormat from 'dateformat';
import { putAllUsers, loader } from '../../actions';


class DateRenderer extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        if(this.props.value === undefined){
            return null;
        } else {
            return dateFormat(this.props.value, "dddd, mmmm dS, yyyy, h:MM:ss TT");
        }
      
    }
}


function mapStateToProps(state){
    return {
        
    }
}

export default connect(mapStateToProps,{ putAllUsers, loader })(DateRenderer);


