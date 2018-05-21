const React = require('react');
const createReactClass = require('create-react-class');
const nj = require('nornj').default;
require('nornj-react');

module.exports = createReactClass({
  render: function () {
    return (
      <if condition={this.props.condition === 'testIf'}>
        <span>IfBlock</span>
        <else>
          <span>ElseBlock</span>
        </else>
      </if>
    );
  }
});