import React from 'react';
import ReactLoading from 'react-loading';

class BasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    this.setState({
      data: this.props.provider,
    });
  }

  render() {
    if (this.state.data) {
      return (
        <div className="container pt-5">
          <div className="card">
            <img
              className="card-img-top"
              src="/logo.png"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{this.state.data.name}</h5>
              <p className="card-text">
                ProviderId: <span>{`50-${this.state.data.providerId}`} </span>
              </p>
              <p className="card-text">
                Email: <span>{this.state.data.users[0].email} </span>
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <ReactLoading type="spin" color="#343a40" height={'3%'} width={'3%'} />
      );
    }
  }
}

export default BasicInfo;
