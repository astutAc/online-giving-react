import { ALL_USERS_FETCH } from '../actions/types';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { InfiniteRowModelModule } from '@ag-grid-community/infinite-row-model';

export default (state=initialStateForGrid,action) => {
    switch(action.type){
        case ALL_USERS_FETCH:
            return { ...state, 
                'allUsers':action.payload.users, 
                'limit':action.payload.limit, 
                'offset':action.payload.offset 
            };
        default:
            return state;
    }
}


const initialStateForGrid = {
    'allUsers':[], 
    'limit':100,
    'offset':0,
    'query':'',


    agGridData:{
        modules: [
          InfiniteRowModelModule,
          AllCommunityModules
        ],
        columnDefs: [
          {
            headerName: 'id',
            field: 'id',
            maxWidth: 100,
            valueGetter: 'node.id',
          //  cellRenderer: 'loadingRenderer',
            sortable: false,
            suppressMenu: true,
          },
          {
            headerName: 'Full Name',
            field: 'full_name',
            editable: true,
            filter: 'agTextColumnFilter'
            //filter: 'agNumberColumnFilter',
            // filterParams: {
            //   filterOptions: ['equals', 'lessThan', 'greaterThan'],
            // },
          },
          {
            headerName: 'Email',
            field: 'email',
            filter: 'agTextColumnFilter',
            //filterParams: filterParams,
          },
          { 
            field: 'created_at',
            cellRenderer: 'dateRenderer',
            //filter: 'agDateColumnFilter',
          },
          {
            field: 'updated_at',
            cellRenderer: 'dateRenderer',
            //filter: 'agDateColumnFilter',
          },
          {
            headerName: 'Role',
            field: 'role',
            // editable: true,
            // sortable: false,
           // cellRenderer: 'roleRenderer',
            
          },
          {
              headerName: 'Save Button',
              cellRenderer: 'buttonCellRendrer',
              sortable: false,
          }
        ],
        defaultColDef: {
          flex: 1,
          minWidth: 150,
          sortable: true,
          resizable: true,
          //floatingFilter: true,
        },
        // components: {
        //   loadingRenderer: function (params) {
        //     if (params.value !== undefined) {
        //       return params.value;
        //     } else {
        //       return '<img src="https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/images/loading.gif">';
        //     }
        //   },
        // },
        rowSelection: 'multiple',
        rowModelType: 'infinite',
        cacheOverflowSize: 2,
        maxConcurrentDatasourceRequests: 2,
        infiniteInitialRowCount: 1,
        maxBlocksInCache: 2,
        paginationPageSize: 10,
        cacheBlockSize: 10,
        // rowSelection: 'multiple',
        // rowModelType: 'infinite',
        // paginationPageSize: 100,
        // cacheOverflowSize: 2,
        // maxConcurrentDatasourceRequests: 2,
        // infiniteInitialRowCount: 1,
        // maxBlocksInCache: 2,
        getRowNodeId: function (item) {
          return item.id;
        },
    }
  };