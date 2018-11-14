import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <p>
        &copy; {1900 + new Date().getYear()} , proudly made in Australia by
        Renan Sigolo.
      </p>
    );
  }
}
