'use strict';

import { AppBar, FlatButton } from 'material-ui';
import React, { PropTypes } from 'react';

let App = React.createClass({
    propTypes: {
        onButton: PropTypes.func,
    },

    render: function() {
        let {
            onButton,
            ...otherProps,
        } = this.props;

        return (
                <div {...otherProps}>
                    <AppBar showMenuIconButton={false} title="React Skeleton" />
                    <div className="message">with Material UI</div>
                    <FlatButton ref="button" label="Button" onTouchTap={onButton} />
                </div>
               );
    },
});

module.exports = App;
