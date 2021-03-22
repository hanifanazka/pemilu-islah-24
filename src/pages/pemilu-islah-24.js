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
import { SelectField } from "../components/selectfield"

import 'bootstrap/dist/css/bootstrap.min.css';

import wt from "../images/wt.png"
import mutazam from "../images/mutazam.png"
import bacol from "../images/bacol.png"
import piscool from "../images/piscool.png"
import barok from "../images/barok.png"

Amplify.configure(awsconfig);


class Candidate extends React.Component {
  camelCase(str) {
    if (str) {
      return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      }).replace(/\s+/g, '');
    }
  }

  render() {
    return (
      <div className="col-lg-4 col-sm-6">
        <div className={this.props.memilih === this.props.name ? "card mb-3 bg-light border-primary" : "card mb-3"}>
          <img className="card-img-top" src={this.props.img} />
          <div className="card-body">
            <div className="form-check">
              <Field type="radio" name="memilih" value={this.props.name} className="form-check-input" />
              <label className="form-check-label">{this.props.name}</label>
            </div >
          </div>
        </div>
      </div>
    );
  }
}

Candidate.propTypes = {
  name: PropTypes.string.isRequired
}

async function postData(data) {
  const apiName = 'api66db2874';
  const path = '/coblos';
  const myInit = { // OPTIONAL
    body: data, // replace this with attributes you need
    headers: {}, // OPTIONAL
  };

  return await API.post(apiName, path, myInit);
}

const Card = ({ children }) => (
  <div className="container py-3">
    <div className="card">
      <div className="card-body">
        {children}
      </div>
    </div>
  </div>
)

const Pemilu = () => (
  <>
    <Formik
      initialValues={{
        memilih: '',
        pemilih: ""
      }}
      onSubmit={(values) => {
        postData({
          pemilih: values.pemilih,
          memilih: values.memilih
        })
      }}
    >
      {({ values, isSubmitting, handleChange, handleBlur }) => (
        <Form>
          <Card>
            <div className="form-group">
              <h5 className="card-title">Nama Lengkap</h5>
              {/* <Select isSearchable={true} placeholder="🔍 Cari" name="pemilih" options={groupedOptions} onChange={handleChange} onBlur={handleBlur} value={values.pemilih} inputValue={values.pemilih} /> */}
              <Field name="pemilih" component={SelectField} options={groupedOptions} />
            </div>
          </Card>
          <Card>
            <div className="form-group">
              <h5 className="card-title">Coblos Ketua Islah 24!</h5>
              <div className="form-row">
                <Candidate picked={values.memilih} name="Wildan Taupiqur Rahman Chudory" img={wt} />
                <Candidate picked={values.memilih} name="Mu`tazamullah Al Faris" img={mutazam} />
                <Candidate picked={values.memilih} name="Muhammad Fathin Fadhlullah A" img={bacol} />
                <Candidate picked={values.memilih} name="Muhammad Hafiz" img={piscool} />
                <Candidate picked={values.memilih} name="M. Fathan Zaki Mubarok" img={barok} />
              </div>
              <div>Pemilih: {values.pemilih}</div>
              <div>Picked: {values.memilih}</div>
              <button type="submit" className="btn btn-primary d-block" disabled={isSubmitting}>Simpan permanen</button>
            </div>
          </Card>
        </Form>)}
    </Formik>
  </>
)

export default Pemilu