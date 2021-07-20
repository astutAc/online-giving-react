import React from 'react';
import { connect } from 'react-redux';
import {Button} from 'reactstrap';
import {loader } from '../actions';
//import createPmpMater from '../apis/postMasterPmp';
class buttonCreatePmp extends React.Component {
    onSubmit=()=>{
        // this.props.loader(true)
        // createPmpMater(this.props.loader)
    }
    render(){
       // const {loader,show} = this.props.toggle
        // const buttonName=this.props.buttonName?:"CREATE 1PMP FOR FREE";
        return(
            <React.Fragment>
                {/* <a href="javascript:void(0)" className="nav-link"  onClick={this.onSubmit} outline title="Create 1PMP"><i className="fa fa-plus"></i> <span>Create 1PMP</span></a> */}
            </React.Fragment>
        )
    }
};
function mapStateToProps(state) {
    return  {
      toggle: state.toggle,
    };
  }
export default connect(mapStateToProps,{loader})(buttonCreatePmp);
 

