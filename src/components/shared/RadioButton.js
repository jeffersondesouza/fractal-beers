import React, { Component } from 'react';

export default class RadioButton extends Component {
  render() {
    return (
      <label htmlFor={this.props.id} className={this.props.className}>
        <input  {...this.props} onChange={this.props.onChange} />
        {this.props.label}
      </label>
    );
  }
}