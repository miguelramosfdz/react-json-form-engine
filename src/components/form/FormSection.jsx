import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormSubsection from './FormSubsection';
import TabbedSubsections from './TabbedSubsections';

const style = { display: 'flex', height: '100%', flexShrink: 0 };

class FormSection extends Component {
    static propTypes = {
        section: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            subsections: PropTypes.array.isRequired
        }).isRequired
    };
    render() {
        const { section } = this.props;
        return (
            <div style={style}>
                {section.subsections.length > 1 ? (
                    <TabbedSubsections section={section} />
                ) : (
                    <FormSubsection subsection={section.subsections[0]} />
                )}
            </div>
        );
    }
}

export default FormSection;
