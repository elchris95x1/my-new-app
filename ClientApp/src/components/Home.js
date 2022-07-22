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

                    <div class="pt-2">
                      <label class="form-label">Braindump</label>
                      <Field as="textarea" name="braindump" class="form-control mb-1" rows="15" />
                    </div>
                  </div>


                  <div class="col form-group">
                    <div class="row ">
                      <div class=" col-1">
                        <label class="form-label">Hrs</label>
                      </div>
                      <div class=" col ">
                        <label class="form-label">:00</label>
                      </div>
                      <div class="col ">
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
                    <div class="row ">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="">07</span>
                        </div>
                        <Field type="text" name="timebox3" class="form-control mb-1" autocomplete="off" />
                        <Field type="text" name="timebox4" class="form-control mb-1" autocomplete="off" />
                      </div>
                    </div>
                    <div class="row ">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="">08</span>
                        </div>
                        <Field type="text" name="timebox5" class="form-control mb-1" autocomplete="off" />
                        <Field type="text" name="timebox6" class="form-control mb-1" autocomplete="off" />
                      </div>
                    </div>
                    <div class="row ">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="">09</span>
                        </div>
                        <Field type="text" name="timebox7" class="form-control mb-1" autocomplete="off" />
                        <Field type="text" name="timebox8" class="form-control mb-1" autocomplete="off" />
                      </div>
                    </div>
                    <div class="row ">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="">10</span>
                        </div>
                        <Field type="text" name="timebox9" class="form-control mb-1" autocomplete="off" />
                        <Field type="text" name="timebox10" class="form-control mb-1" autocomplete="off" />
                      </div>
                    </div>
                    <div class="row ">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="">11</span>
                        </div>
                        <Field type="text" name="timebox11" class="form-control mb-1" autocomplete="off" />
                        <Field type="text" name="timebox12" class="form-control mb-1" autocomplete="off" />
                      </div>
                    </div>
                    <div class="row ">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="">12</span>
                        </div>
                        <Field type="text" name="timebox13" class="form-control mb-1" autocomplete="off" />
                        <Field type="text" name="timebox14" class="form-control mb-1" autocomplete="off" />
                      </div>
                    </div>
                    <div class="row ">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="">01</span>
                        </div>
                        <Field type="text" name="timebox15" class="form-control mb-1" autocomplete="off" />
                        <Field type="text" name="timebox16" class="form-control mb-1" autocomplete="off" />
                      </div>
                    </div>
                    <div class="row ">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="">02</span>
                        </div>
                        <Field type="text" name="timebox17" class="form-control mb-1" autocomplete="off" />
                        <Field type="text" name="timebox18" class="form-control mb-1" autocomplete="off" />
                      </div>
                    </div>
                    <div class="row ">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="">03</span>
                        </div>
                        <Field type="text" name="timebox19" class="form-control mb-1" autocomplete="off" />
                        <Field type="text" name="timebox20" class="form-control mb-1" autocomplete="off" />
                      </div>
                    </div>
                    <div class="row ">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="">04</span>
                        </div>
                        <Field type="text" name="timebox21" class="form-control mb-1" autocomplete="off" />
                        <Field type="text" name="timebox22" class="form-control mb-1" autocomplete="off" />
                      </div>
                    </div>
                    <div class="row ">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="">05</span>
                        </div>
                        <Field type="text" name="timebox23" class="form-control mb-1" autocomplete="off" />
                        <Field type="text" name="timebox24" class="form-control mb-1" autocomplete="off" />
                      </div>
                    </div>
                    <div class="row ">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="">06</span>
                        </div>
                        <Field type="text" name="timebox25" class="form-control mb-1" autocomplete="off" />
                        <Field type="text" name="timebox26" class="form-control mb-1" autocomplete="off" />
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
