import * as React from "react"
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import Select from "react-select";
import Amplify, { Auth, API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import awsconfig from '../data/aws-exports'
import SEO from "../components/seo"
import { groupedOptions } from "../data/santri"
import signUp from "../functions/signup"

import 'bootstrap/dist/css/bootstrap.min.css';

Amplify.configure(awsconfig);


class Hasil extends React.Component {
    constructor(props) {
        super(props)
        this.state = { data: [] }
    }

    componentDidMount() {
        API
            .get("api66db2874", "/coblos", {})
            .then(response => {
                console.log({ response: response })
                let pilihan = []
                for (const iterator of response) {
                    if (pilihan.filter(nama => Object.keys(nama)[0] === iterator.memilih).length === 0) {
                        const a = {}
                        a[iterator.memilih] = 1
                        pilihan.push(a)
                    } else {
                        pilihan.filter(nama => Object.keys(nama)[0] === iterator.memilih)[0][iterator.memilih] += 1
                    }
                }
                this.setState({ data: pilihan })
            })
            .catch(error => {
                console.log(error.response);
            });
    }

    render() {
        return (
            <table className="table">
                <tbody>
                    {this.state.data.map(datum => (
                        <tr>
                            <td>{Object.keys(datum)[0]}</td><td>{Object.values(datum)[0]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default Hasil