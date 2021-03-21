import * as React from "react"

import SEO from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div class="container wd-xl-40p wd-lg-40p ws-md-70p wd-sm-100p wd-xs-100p">
      <div class="card">
        <div class="card-header">
          <div class="logo-container tx-center mb-2">
            <img src="https://portal.ltmpt.ac.id/assets/media/img/logo.png" class="img-fluid" alt="LTMPT" />
          </div>
          <div class="tx-center tx-medium tx-xs-16 tx-sm-22 tx-md-24">Selamat Datang di Portal LTMPT</div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col">
              <p class="text-justify">Masukkan kombinasi <strong>email</strong> dan <strong>password</strong> yang telah terdaftar untuk masuk ke portal LTMPT. Jika belum memiliki akun LTMPT, silahkan melakukan registrasi akun LTMPT. <a href="https://portal.ltmpt.ac.id/reg">Daftar di sini</a>.</p>
            </div>
          </div>
          <form id="form-login" method="post" action="https://portal.ltmpt.ac.id/login" autocomplete="off">
            <div class="form-group mb-3">
              <label>Email</label>
              <div class="input-group">
                <input id="username" type="text" class="form-control form-control-lg" required="" autocomplete="off" />
                <span class="input-group-append">
                  <span class="input-group-text">
                    <i class="fas fa-at"></i>
                  </span>
                </span>
              </div>
            </div>

            <div class="form-group mb-3">
              <div class="clearfix">
                <label class="float-left">Password</label>
              </div>
              <div class="input-group">
                <input id="password" type="password" class="form-control form-control-lg" required="" />
                <span class="input-group-append">
                  <span class="input-group-text">
                    <i class="fas fa-lock"></i>
                  </span>
                </span>
              </div>
            </div>


            <input type="hidden" id="pubkey" value="-----BEGIN PUBLIC KEY-----
                                    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC89DZ+PsgXBgoXLtlvnRrnNuRy
                                    R+wvjG8gYyLYASisYowc+ucrKOiodR0EPpM6p3fY/u344JFaJgu/uGTwClXtNS7R
                                    EMZ5wNN8TbLJgCKNbU8DZmXMImNDc2JOfHLdG5Y8LFJv9krwlOirXSrneHUuIvZe
                                    rbS+jb1NL0HkvaCuJQIDAQAB
                                    -----END PUBLIC KEY-----"/>
            <input type="hidden" name="content" value="" id="encrypted" />

            <input type="hidden" name="client_id" value="89DB8BD0-EA96-44AF-A6C3-3C50EA05F8A5" />
            <input type="hidden" name="response_type" value="code" />
            <input type="hidden" name="scope" value="openid profile email phone group" />
            <input type="hidden" name="state" value="e705ab3231da558dcd39fd2e40700c6d" />
            <input type="hidden" name="prompt" value="" />
            <input type="hidden" name="redirect_uri" value="https://portal.ltmpt.ac.id/sso/auth" />
            <input type="hidden" name="nonce" value="b743e47850b1f8bc975d0544fb6eaff8" />

            <div class="row">
              <div class="col">
                <a href="https://portal.ltmpt.ac.id/sso/forgot-password">Lupa Password?</a>
              </div>
            </div>

            <div class="row mt-3">
              <div class="col text-right">
                <button id="btn-login" type="submit" class="btn btn-primary btn-block mt-2">Masuk</button>
              </div>
            </div>

          </form>
        </div>
        <div class="card-footer tx-center">
          <img src="https://portal.ltmpt.ac.id/assets/media/img/sponsor.png" class="img-fluid" alt="Sponsor" />
        </div>
      </div>
    </div>
  </>
)

export default IndexPage
