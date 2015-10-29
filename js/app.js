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
        } = this.props;

        return (
                <div>
                    <AppBar showMenuIconButton={false} title="React Skeleton" />
                    <div className="message">with Material UI</div>
                    <FlatButton ref="button" label="Button" onTouchTap={onButton} />
                </div>
               );
    },
});

module.exports = App;
