import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id} className="item">
        <img src={post.thumbnailUrl} alt="thumbnail" />
        <p style={{ color: '#00efc4' }}>{post.title}</p>
      </div>
    ));
    return <div className="content">{postItems}</div>;
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

// export default Posts; <- was without react-Redux

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
