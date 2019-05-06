import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getGot, deleteGot } from "../../actions/got";

export class Got extends Component {
  static porpTypes = {
    got: PropTypes.array.isRequired,
    getGot: PropTypes.func.isRequired,
    deleteGot: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getGot();
  }

  render() {
    return (
      <Fragment>
        <h2>Got</h2>
        <table className="table table-stripped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.got.map(got => (
              <tr key={got.id}>
                <td>{got.id}</td>
                <td>{got.name}</td>
                <td>{got.email}</td>
                <td>{got.message}</td>
                <td>
                  <button
                    onClick={this.props.deleteGot.bind(this, got.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  got: state.got.got
});

export default connect(
  mapStateToProps,
  { getGot, deleteGot }
)(Got);
