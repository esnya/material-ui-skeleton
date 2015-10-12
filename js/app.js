'use strict';

import { AppBar } from 'material-ui';
import React, { PropTypes } from 'react';

let App = React.createClass({
    propTypes: {
    },

    render: function() {
        return (
                <div>
                    <AppBar title="React Skeleton" />
                    <div className="message">with Material UI</div>
                </div>
               );
    },
});

module.exports = App;
