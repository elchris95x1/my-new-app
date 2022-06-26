import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div class="container shadow-lg p-3 mb-5 bg-white rounded col-10">
        <h2>Pomodore Timebox</h2>
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
                    <Field type="text" name="goal1" class="form-control mb-1" />
                    <Field type="text" name="goal2" class="form-control mb-1" />
                    <Field type="text" name="goal3" class="form-control mb-1" />
                  </div>

                  <div class="row pb-3">
                    <label class="form-label">Braindump</label>
                    <Field as="textarea" name="braindump" class="form-control" rows="10"/>
                  </div>
                </div>


                <div class="col form-group p-5">
                  <div class="row">
                    <div class=" col px-0">
                      <label class="form-label">:00</label>
                      <Field type="text" name="timebox1" class="form-control" />
                      <Field type="text" name="timebox2" class="form-control" />
                      <Field type="text" name="timebox3" class="form-control" />
                      <Field type="text" name="timebox4" class="form-control" />
                      <Field type="text" name="timebox5" class="form-control" />
                      <Field type="text" name="timebox6" class="form-control" />
                      <Field type="text" name="timebox7" class="form-control" />
                      <Field type="text" name="timebox8" class="form-control" />
                    </div>

                    <div class="col px-0">
                      <label class="form-label">:30</label>
                      <Field type="text" name="timebox9" class="form-control" />
                      <Field type="text" name="timebox10" class="form-control" />
                      <Field type="text" name="timebox11" class="form-control" />
                      <Field type="text" name="timebox12" class="form-control" />
                      <Field type="text" name="timebox13" class="form-control" />
                      <Field type="text" name="timebox14" class="form-control" />
                      <Field type="text" name="timebox15" class="form-control" />
                      <Field type="text" name="timebox16" class="form-control" />
                    </div>
                  </div>
                </div>
              </div>

                <button type="submit" disabled={isSubmitting} class="btn, btn-primary">
                  Submit
                </button>
            </Form>
          )}
        </Formik>


      </div >
    );
  }
}
