import 'skatejs-web-components';
import Modaloid from './skatejs/modaloid';

import Reactify from 'skatejs-react-integration';
import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

const ReactModaloid = Reactify(Modaloid);

const SnowPiercer = ({message, className}) => {
    return (
        <div className={className}>{message}</div>
    )
};

SnowPiercer.propTypes = {
    message: PropTypes.string
};

ReactDOM.render(
    <ReactModaloid name="react-o-rific webcomponent example">
        <SnowPiercer className="header" message="Some sort of react header"/>
        <div className="body">Some sort of react body</div>
        <div className="footer">Some sort of react footer</div>
    </ReactModaloid>
    , document.getElementById('root')
);
