import React, {Component} from 'react';
import { connect } from 'react-redux';
import { putAllUsers, loader } from '../../actions';

class LoadingRendrer extends Component {
    constructor(props) {
      super(props);
    }





    
    render() {
        if(this.props.value !== undefined){
            return this.props.value;
        } else {
            return (
                <img src="https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/images/loading.gif"/>
              );
        }
      
    }
  }


function mapStateToProps(state){
    return {
        
    }
}

export default connect(mapStateToProps,{ putAllUsers, loader })(LoadingRendrer);


