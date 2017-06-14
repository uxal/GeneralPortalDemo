import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/navigation'
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import JqxGrid from './react_jqxgrid';

import PageContainer from '../../components/pageContainer/pageContainer';

import styles from '../commonPages.css';

//import '../../../thirdParty/jqGrid/jquery.jqGrid.min';
//import '../../../thirdParty/jqGrid/grid.locale-en';

const paperStyle = {
    padding: '20px'
}

class Customers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listOfCustomers: null,
            dataAdapter: null,
        }
    }

    componentDidMount() {
        setTimeout(()=>{
            this.refreshGridData();
        },1000);

    }

    refreshGridData() {
        this.props.displayAjaxLoader(true);

        //use some dummy data
        const dummyCustomersData = [
            {CustomerId:1, RegisteredName:"First customer", ContactPerson:"Joe Doe", Email:"joe.doe@yahoo.com"},
            {CustomerId:2, RegisteredName:"Second customer", ContactPerson:"Mike Lee", Email:"mike.lee@yahoo.com"},
            {CustomerId:3, RegisteredName:"Third customer", ContactPerson:"Anthony Williams", Email:"anthony.williams@yahoo.com"}
        ]

        let source =
            {
                datatype: "json",
                datafields: [
                    {name: 'CustomerId', type: 'int'},
                    {name: 'RegisteredName', type: 'string'},
                    {name: 'ContactPerson', type: 'string'},
                    {name: 'Email', type: 'string'}
                ],
                localdata:dummyCustomersData,
                pagesize:10
            };
        let dataAdapter = new $.jqx.dataAdapter(source);
        this.setState({dataAdapter});
        this.props.displayAjaxLoader(false);

    }


    render() {

        let cellsrenderer = (row, columnfield, value, defaulthtml, columnproperties, rowdata) => {
            if (value < 20) {
                return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;">' + value + '</span>';
            }
            else {
                return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;">' + value + '</span>';
            }
        }


        let columns =
            [

                {text: 'Registered Name', datafield: 'RegisteredName', width: '50%'},
                {text: 'Contact Person', datafield: 'ContactPerson',  width: '25%'},
                {text: 'Email', datafield: 'Email', width: '25%'},
            ];

        let columngroups =
            [
                {text: 'Product Details', align: 'center', name: 'ProductDetails'}
            ];

        return (
            <PageContainer>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Paper zDepth={2} style={paperStyle}>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <RaisedButton label="New customer" primary={true}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className={styles.emptyLine + " col-xs-12 col-sm-12 col-md-12 col-lg-12"}></div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    {this.state.dataAdapter ?
                                        <JqxGrid
                                            width={'100%'} source={this.state.dataAdapter} pageable={true}
                                            sortable={true} altrows={true} enabletooltips={true}
                                            autoheight={true} editable={true} columns={columns}
                                            theme={'ui-redmond'}
                                            selectionmode={'multiplecellsadvanced'} columngroups={columngroups}
                                        /> : ''
                                    }

                                </div>
                            </div>
                        </Paper>
                    </div>
                </div>
            </PageContainer>
        )
    }

}

export default connect(null, actions)(Customers);
