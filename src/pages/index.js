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
        <div className={this.props.terpilih === this.props.name ? "card mb-3 bg-light border-primary" : "card mb-3"}>
          <div className="card-header h3 font-weight-bold text-center">{this.props.norut}</div>
          <img src={this.props.img} />
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

const Card = ({ children }) => (
  <div className="container py-3">
    <div className="card">
      <div className="card-body">
        {children}
      </div>
    </div>
  </div>
)

class Pemilu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      successSubmitted: false,
      alreadySubmitted: false
    }
  }

  render() {
    return (
      <>
        <Formik
          initialValues={{
            memilih: '',
            pemilih: ""
          }}
          onSubmit={(values, actions) => {
            const apiName = 'api66db2874';
            const path = '/coblos';
            const data = {
              pemilih: values.pemilih,
              memilih: values.memilih
            }
            const myInit = { body: data };
            API.get(apiName, path + "/" + data.pemilih, myInit)
              .then(response => {
                console.log(response)
                if (!response?.length) {
                  API.post(apiName, path, myInit)
                    .then(response => {
                      console.log(response)
                      actions.setSubmitting(false)
                      this.setState({ successSubmitted: true })
                    })
                    .catch(error => {
                      console.error(error.response)
                      actions.setSubmitting(false)
                    })
                } else {
                  actions.setSubmitting(false)
                  this.setState({ alreadySubmitted: true })
                }
              })
              .catch(error => {
                console.error(error.response)
                actions.setSubmitting(false)
              })
          }}
        >
          {({ values, isSubmitting, submitCount }) => (
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
                    <Candidate terpilih={values.memilih} norut="1" name="Wildan Taupiqur Rahman Chudory" img={wt} />
                    <Candidate terpilih={values.memilih} norut="2" name="Mu`tazamullah Al Faris" img={mutazam} />
                    <Candidate terpilih={values.memilih} norut="3" name="M. Fathan Zaki Mubarok" img={barok} />
                    <Candidate terpilih={values.memilih} norut="4" name="Muhammad Hafiz" img={piscool} />
                    <Candidate terpilih={values.memilih} norut="5" name="Muhammad Fathin Fadhlullah A" img={bacol} />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <div className="spinner-border spinner-border-sm align-items-center" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>) : "Simpan permanen"}
                  </button>
                </div>
                {this.state.successSubmitted ? (
                  <div className="alert alert-success" role="alert">
                    Selamat! Anda telah menggunakan hak pilih anda. Tunggu kelanjutannya di <a href="https://instagram.com/reunitez_/">Instagram Angkatan</a>
                  </div>) : ""
                }
                {this.state.alreadySubmitted ? (
                  <div className="alert alert-danger" role="alert">
                  Anda sudah menggunakan hak pilih anda. Tunggu kelanjutannya di <a href="https://instagram.com/reunitez_/">Instagram Angkatan</a>
                </div>
                ) : ""}
              </Card>
            </Form>)}
        </Formik>
      </>
    )
  }
}

export default Pemilu