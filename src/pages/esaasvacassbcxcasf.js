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


async function postData(data) {
    const apiName = 'api66db2874';
    const path = '/coblos';
    const myInit = { // OPTIONAL
        body: data, // replace this with attributes you need
        headers: {}, // OPTIONAL
    };

    return await API.post(apiName, path, myInit);
}



class Hasil extends React.Component {
    constructor(props) {
        super(props)
        this.state = { data: "" }
    }

    componentDidMount() {
        API
            .get("api66db2874", "/coblos/Hisbu")
            .then(response => {
                this.setState({ data: response })
            })
            .catch(error => {
                console.log(error.response);
            });
    }
    render() {
    return (
        <>
        {this.state.data}
        </>
    )
}
}

export default Hasil