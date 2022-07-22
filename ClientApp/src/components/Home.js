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

              <div class="container " >
                <div class="row form-group pb-5">
                  <div class="col" >
                    <label class="form-label">Name</label>
                    <Field type="text" name="fullName" class="form-control" autoomplete="off" />
                  </div>
                  <div class="col" >
                    <label class="form-label">Date</label>
                    <Field type="date" name="date" class="form-control" autocomplete="off" />
                  </div>
                </div>

                <div class="row form-group">
                  <div class="col">
                    <div>
                      <label class="form-label">Top Priorities</label>
                      <Field type="text" name="goal1" class="form-control mb-1" autocomplete="off" />
                      <Field type="text" name="goal2" class="form-control mb-1" autocomplete="off" />
                      <Field type="text" name="goal3" class="form-control mb-1" autocomplete="off" />
                    </div>

                    <div>
                      <label class="form-label">Braindump</label>
                      <Field as="textarea" name="braindump" class="form-control mb-1" rows="13" />
                    </div>
                  </div>
                  <div class="col form-group">
                    <div class="row ">
                      <div class=" col">
                        <label class="form-label">Hrs</label>
                      </div>
                      <div class=" col">
                        <label class="form-label">:00</label>
                      </div>
                      <div class="col">
                        <label class="form-label">:30</label>
                      </div>
                    </div>

                    <div class="row ">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="">06</span>
                        </div>
                        <Field type="text" name="timebox1" class="form-control mb-1" autocomplete="off" />
                        <Field type="text" name="timebox2" class="form-control mb-1" autocomplete="off" />
                      </div>
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
