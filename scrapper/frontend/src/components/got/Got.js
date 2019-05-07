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
              <th>Name</th>
              <th>Price</th>
              <th>Img</th>
            </tr>
          </thead>
          <tbody>
            {this.props.got.map(got => (
              <tr key={got.id}>
                <td>{got.name}</td>
                <td>{got.price}</td>
                <td>
                  <img src={got.img} height="300" />
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
