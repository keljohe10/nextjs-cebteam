import React from 'react';
import moment from 'moment-timezone';

class CoursesBasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.courses,
    };
  }
  render() {
    return (
      <div className="container pt-5">
        <div className="row">
          <div className="col-12">
            <div className="card-columns">
              {this.state.data.map((i) => (
                <div key={i.COURSEID} className="card">
                  <div className="card-body">
                    <h5 className="card-title">{`20-${i.COURSEID}`}</h5>
                    <p className="card-text">
                      <span className="badge badge-success">
                        {i.COMPLETIONSCOUNT} Completions
                      </span>
                    </p>
                    <p className="card-text">
                      <span className="badge badge-danger">
                        {i.REJECTIONSCOUNT} Rejections
                      </span>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        <span>Last updated </span>
                        {moment(i.LASTCOMPLETION)
                          .tz('America/New_York')
                          .format('MM/DD/YYYY')}
                      </small>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CoursesBasicInfo;
