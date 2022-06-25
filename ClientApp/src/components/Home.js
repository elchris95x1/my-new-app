import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Pomodore Timebox</h1>
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
              <div class="container row">
                <div class="form-group, col">

                  <div class="form-group, row">
                    <label>Top Priorities</label>
                    <Field type="text" name="goal1" class="form-control" />
                    <Field type="text" name="goal2" class="form-control" />
                    <Field type="text" name="goal3" class="form-control" />
                  </div>

                  <div class="form-group, row">
                    <label>Braindump</label>
                    <Field type="textarea" name="braindump" class="form-control" />
                  </div>
                </div>


                <div class="form-group, col">
                  <div class="form-group, col">
                    <label>:00</label>
                    <label>:30</label>
                    <Field type="text" name="timebox1" class="form-control" />
                    <Field type="text" name="timebox2" class="form-control" />
                  </div>

                  
                  <Field type="text" name="timebox3" class="form-control" />
                  <Field type="text" name="timebox4" class="form-control" />
                  <Field type="text" name="timebox5" class="form-control" />
                  <Field type="text" name="timebox6" class="form-control" />
                  <Field type="text" name="timebox7" class="form-control" />
                  <Field type="text" name="timebox8" class="form-control" />
                  <Field type="text" name="timebox9" class="form-control" />
                  <Field type="text" name="timebox10" class="form-control" />
                  <Field type="text" name="timebox11" class="form-control" />
                  <Field type="text" name="timebox12" class="form-control" />
                  <Field type="text" name="timebox13" class="form-control" />
                  <Field type="text" name="timebox14" class="form-control" />
                  <Field type="text" name="timebox15" class="form-control" />
                  <Field type="text" name="timebox16" class="form-control" />
                </div>
                <button type="submit" disabled={isSubmitting} class="btn btn-primary">
                  Submit
                </button>

              </div>
            </Form>
          )}
        </Formik>


      </div >
    );
  }
}
