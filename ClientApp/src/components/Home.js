import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Pomodoro from "./Pomodoro"



export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div class="container shadow-lg p-3 mb-5 bg-white rounded col-10 justify-content-center">

        <Pomodoro />

        <Formik
          initialValues={{ goal1: '', goal2: '', goal3: '' }}
          validate={values => {
            //validation goes here
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div class="row" >

                <div class="col form-group p-5">
                  <div class="row pb-3">
                    <label class="form-label">Top Priorities</label>
                    <Field type="text" name="goal1" class="form-control mb-1" autocomplete="off" />
                    <Field type="text" name="goal2" class="form-control mb-1" autocomplete="off" />
                    <Field type="text" name="goal3" class="form-control mb-1" autocomplete="off" />
                  </div>

                  <div class="row pb-3">
                    <label class="form-label">Braindump</label>
                    <Field as="textarea" name="braindump" class="form-control" rows="13" />
                  </div>
                </div>


                <div class="col form-group p-5">
                  <div class="row ">
                    <div class=" col-2 px-0 float-right">
                      <label class="form-label">Hrs</label>
                    </div>
                    <div class=" col px-0 float-right">
                      <label class="form-label">:00</label>
                    </div>
                    <div class="col px-0">
                      <label class="form-label">:30</label>
                    </div>
                  </div>

                  <div class="row">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="">03</span>
                      </div>
                      <Field type="text" name="timebox1" class="form-control mb-1" autocomplete="off" />
                      <Field type="text" name="timebox2" class="form-control mb-1" autocomplete="off" />
                    </div>
                  </div>


                </div>
              </div>

              {/* <button type="submit" disabled={isSubmitting} class="btn, btn-primary">
                Submit
              </button> */}
            </Form>
          )}
        </Formik>


      </div >
    );
  }
}
