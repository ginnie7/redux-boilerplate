import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postAction';

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      thumbnailUrl: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // without onChange cannot type into form fields
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      thumbnailUrl: this.state.thumbnailUrl
    };

    // call action
    this.props.createPost(post);
  }

  render() {
    let styles = {
      backgroundColor: '#6c7a89',
      padding: '3rem',
      width: '90%',
      borderRadius: '5px'
    };
    return (
      <div style={styles}>
        <h1>Add Image</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form__group">
            <div className="form__group__item">
              <label>Title: </label>
              <br />
              <input
                type="text"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>
            <div className="form__group__item">
              <label>Image URL: </label>
              <br />
              <input
                name="thumbnailUrl"
                onChange={this.onChange}
                value={this.state.thumbnailUrl}
              />
            </div>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

// export default Postform; <- was without react-redux

Postform.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(Postform);
