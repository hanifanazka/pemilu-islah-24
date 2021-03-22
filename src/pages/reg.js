import * as React from "react"
import PropTypes from 'prop-types';
import Select from "react-select";

import SEO from "../components/seo"
import { groupedOptions } from "../data/santri"

import 'bootstrap/dist/css/bootstrap.min.css';

const Daftar = () => (
    <div className="container py-3">
        <div className="form-group">
            <label>Nama Lengkap</label>
            <Select isSearchable={true} placeholder="🔍 Cari" name="pemilih" options={groupedOptions} />
        </div>
        <div className="form-group">
            <label>Email</label>
            <div className="input-group">
                <input type="email" className="form-control" />
                <span className="input-group-append">
                    <span className="input-group-text">@</span>
                </span>
            </div>
        </div>
        <button type="submit" className="btn btn-primary d-block">Daftar</button>
    </div>
)

export default Daftar