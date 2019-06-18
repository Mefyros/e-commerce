import React from 'react';
import MaterialTable from 'material-table';
import TextField from '@material-ui/core/TextField';
import { Img } from "./style";
import {css} from 'emotion';

const columns = [
        { title: '', field: 'img' },
        { title: '', field: 'name' },
        { title: 'Quantity', field: 'quantity' },
        { title: 'Price', field: 'price'},
        ];

const data = [
        { img: <Img src="http://www.eldiariodecoahuila.com.mx/u/fotografias/fotosnoticias/2018/10/15/695930.jpg" alt=""/>,
            name: 'SSD Cat',
            quantity: '1',
            price: '63$' },

    ];

export default class MaterialTableDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns,
            data,
        }
    }

    render() {
        const { columns, data } = this.props;

        return (
            <MaterialTable
                title="Your Basket"
                data={data}
                columns={columns}
                editable={{
                    onRowDelete: oldData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                const data = [...data];
                                data.splice(data.indexOf(oldData), 1);
                                // setState({ ...state, data });
                            }, 600);
                        }),
                }}
            />
        );
    }
}