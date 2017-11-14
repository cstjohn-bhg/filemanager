import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './ConfirmDialog.less';
import Dialog from '../Dialog';

const propTypes = {
  headerText: PropTypes.string,
  submitButtonText: PropTypes.string,
  onHide: PropTypes.func,
  onSubmit: PropTypes.func
};
const defaultProps = {
  headerText: 'Do you really want to remove the file?',
  submitButtonText: 'Ok',
  autofocus: false,
  onHide: () => {},
  onSubmit: () => {}
};

export default
class CancelOkDialog extends Component {
  constructor(props) {
    super(props);
  }

  handleKeyDown = async (e) => {
    if (e.which === 13) { // Enter key
      this.handleSubmit();
    }
  };

  handleSubmit = async () => {
    this.props.onSubmit();
  };

  render() {
    let { onHide, headerText, submitButtonText } = this.props;

    return (
      <Dialog onHide={onHide}>
        <div className="oc-fm--dialog__content" onKeyDown={this.handleKeyDown}>
          <div className="oc-fm--dialog__header">
            {headerText}
          </div>

          <div className="oc-fm--dialog__horizontal-group oc-fm--dialog__horizontal-group--to-right">
            <button type="button" className="oc-fm--dialog__button oc-fm--dialog__button--default" onClick={onHide}>
              Cancel
            </button>
            <button
              type="button"
              className={`oc-fm--dialog__button oc-fm--dialog__button--primary`}
              onClick={this.handleSubmit}
            >
              {submitButtonText}
            </button>
          </div>
        </div>
      </Dialog>
    );
  }
}

CancelOkDialog.propTypes = propTypes;
CancelOkDialog.defaultProps = defaultProps;
