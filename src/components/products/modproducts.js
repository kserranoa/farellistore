import React, { Component } from 'react'
import axios from 'axios'
export default class createProduct extends Component {
    state = {
        prodtype: '',
        products: []
    }

    async componentDidMount() {
        this.getProduct();
    }

    getProduct = async () => {
        const res = await axios.get('http://localhost:4000/api/product');
        this.setState({
            products: res.data
        });
    }

    onChangeProdtype = e => {
        this.setState({
            prodtype: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/product', {
            prodtype: this.state.prodtype
        });
        this.setState({ prodtype: '' });
        this.getProduct();
    }

    deleteUser = async (productId) => {
        const response = window.confirm('are you sure you want to delete it?');
        if (response) {
            await axios.delete('http://localhost:4000/api/product' + productId);
            this.getProduct();
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Create New Product</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    value={this.state.prodtype}
                                    type="text"
                                    onChange={this.onChangeProdtype}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Save
                    </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.products.map(product => (
                                <li className="list-group-item list-group-item-action" key={product._id} onDoubleClick={() => this.deleteProduct(product._id)}>
                                    {product.prodtype}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
