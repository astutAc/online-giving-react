import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AgGridReact, AgGridColumn } from '@ag-grid-community/react';

import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { InfiniteRowModelModule } from '@ag-grid-community/infinite-row-model';
import {
  fetchAllUsers,
 // putAllUsers,
  loader,
  toggleShow,
  toggleHide,
  adminPanelRightSideBar,
  adminPanelRightSideBarOff,
} from "../../actions";
import { fetchUsers } from '../../apis/allUsers';
import ButtonCellRendrer from './gridButtonRenderer';
import LoadingRendrer from './loadingRendrer';
import RoleRenderer from './roleRenderer';
import DateRenderer from './dateRenderer';
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';
import Header from '../header';

import Footer from '../footer';
class AllUsers extends Component {
  
  constructor(params) {
    super(params);
    this.onCellValueChanged.bind(this);
    //this.onGridReady = this.onGridReady.bind(this);
  }
  async componentDidMount() {
    //this.props.loader(true);
    //await this.props.fetchAllUsers('',this.props.limit,this.props.offset,loader);
    //this.props.loader(false);
  }
  async onCellValueChanged(params) {
    console.log(params);
  }
  async getRowNodeId(item) {
    return item.id;
  }
  closeNavbars() {
    this.props.toggleHide();
    this.props.adminPanelRightSideBarOff();
  }
  sortData(sortModel, data) {
    var sortPresent = sortModel && sortModel.length > 0;
    if (!sortPresent) {
      return data;
    }
    var resultOfSort = data.slice();
    resultOfSort.sort(function (a, b) {
      for (var k = 0; k < sortModel.length; k++) {
        var sortColModel = sortModel[k];
        var valueA = a[sortColModel.colId];
        var valueB = b[sortColModel.colId];
        if (valueA == valueB) {
          continue;
        }
        var sortDirection = sortColModel.sort === "asc" ? 1 : -1;
        if (valueA > valueB) {
          return sortDirection;
        } else {
          return sortDirection * -1;
        }
      }
      return 0;
    });
    return resultOfSort;
  }

  async onGridReady(params, thisProps) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    const sortData = this.sortData;
    const pageSize = this.gridApi.paginationProxy.pageSize;
    const masterCount = this.props.offset;
    const query = this.props.query;

    var dataSource = {
      rowCount: null,
      getRows: async function (params) {
        var rep = params;
        var data = await fetchUsers(
          query,
          params.endRow - params.startRow,
          params.startRow,
          params.sortModel,
          loader
        );
console.log(data);
        var dataAfterSortingAndFiltering = data.users.data;
        
        // sortData(

        //   params.sortModel,
        //   data.users,
        // );
        // var rowsThisPage = dataAfterSortingAndFiltering.slice(
        //   params.startRow,
        //   params.endRow
        // );
        var lastRow = -1;
        if (data.rowCount < pageSize) {
          lastRow = 1;
        } else if (data.rowCount === pageSize) {
          if (data.users.total <= params.endRow) {
            lastRow = data.users.total;
          }
        } else if (data.users.total >= params.endRow) {
          lastRow = data.users.total;
        } else {
          lastRow = -1;
        }
        params.successCallback(dataAfterSortingAndFiltering, data.users.total);
      },
    };
    params.api.setDatasource(dataSource);
  }
  render() {
    return (
      <div className="rootDivPage" onClick={() => this.closeNavbars()}>
        <div className="contentH">
          <div style={{ width: "100%", height: "100%" }}>
            <Header />
            <div
              id="myGrid"
              style={{
                width: "100%",
              }}
              className="ag-theme-alpine mt-80 d-inline-block"
            >
              <AgGridReact
                modules={this.props.agGridData.modules}
                columnDefs={this.props.agGridData.columnDefs}
                defaultColDef={this.props.agGridData.defaultColDef}
                // components={this.props.agGridData.components}
                rowSelection={this.props.agGridData.rowSelection}
                rowModelType={this.props.agGridData.rowModelType}
                cacheOverflowSize={this.props.agGridData.cacheOverflowSize}
                maxConcurrentDatasourceRequests={
                  this.props.agGridData.maxConcurrentDatasourceRequests
                }
                infiniteInitialRowCount={
                  this.props.agGridData.infiniteInitialRowCount
                }
                maxBlocksInCache={this.props.agGridData.maxBlocksInCache}
                pagination={true}
                paginationPageSize={this.props.agGridData.paginationPageSize}
                cacheBlockSize={this.props.agGridData.cacheBlockSize}
                getRowNodeId={this.props.agGridData.getRowNodeId}
                onGridReady={this.onGridReady.bind(this)}
                frameworkComponents={{
                  buttonCellRendrer: ButtonCellRendrer,
                  roleRenderer: RoleRenderer,
                  dateRenderer: DateRenderer,
                }}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>

      //     <div className="ag-theme-alpine" style={ {height: '200px', width: '600px'} }>
      //     <AgGridReact
      //         frameworkComponents={{buttonCellRendrer:ButtonCellRendrer}}
      //         components={
      //             {
      //                 loadingRenderer: LoadingRendrer
      //             }
      //         }
      //         getRowNodeId={this.getRowNodeId}
      //         onGridReady={this.onGridReady.bind(this)}
      //         modules={[AllCommunityModules, InfiniteRowModelModule]}
      //         onCellValueChanged={this.onCellValueChanged}
      //         pagination={true}
      //         rowData={this.props.users}
      //         rowSelection= {'multiple'}
      //         rowModelType= {'infinite'}
      //         paginationPageSize = {100}
      //         cacheOverflowSize = {2}
      //         maxConcurrentDatasourceRequests= {2}
      //         infiniteInitialRowCount= {1}
      //         maxBlocksInCache= {2}
      //         cacheBlockSize= {100}
      //         >
      //         <AgGridColumn field="id"
      //         autoHeight={true}
      //         sortable={true}
      //         editable={true}
      //         ></AgGridColumn>
      //         <AgGridColumn field="ontraportId"></AgGridColumn>
      //         <AgGridColumn field="fullName"
      //         autoHeight={true}
      //         sortable={true}
      //         editable={true}
      //         filter={true}
      //         ></AgGridColumn>
      //         <AgGridColumn field="email"></AgGridColumn>
      //         <AgGridColumn field="is_verified"></AgGridColumn>
      //         <AgGridColumn field="is_disabled"></AgGridColumn>
      //         <AgGridColumn field="createdAt"></AgGridColumn>
      //         <AgGridColumn field="updatedAt"></AgGridColumn>
      //         <AgGridColumn field="roleId"></AgGridColumn>
      //         <AgGridColumn field="Save"
      //         cellRenderer={"buttonCellRendrer"}
      //         ></AgGridColumn>
      //     </AgGridReact>
      // </div>
    );
  }
}

function mapStateToProps(state){
    return {
        users: state.allUserData.allUsers,
        limit: state.allUserData.limit,
        offset: state.allUserData.offset,
        agGridData: state.allUserData.agGridData
    }
}

export default connect(mapStateToProps, {
  fetchAllUsers,
  loader,
  toggleShow,
  toggleHide,
  adminPanelRightSideBar,
  adminPanelRightSideBarOff,
})(AllUsers);

