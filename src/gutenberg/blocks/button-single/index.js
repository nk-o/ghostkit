/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

/**
 * Internal dependencies
 */
import getIcon from '../../utils/get-icon';
import deprecated from './deprecated';
import metadata from './block.json';
import edit from './edit';
import save from './save';

const { name } = metadata;

export { metadata, name };

export const settings = {
    ...metadata,
    title: __( 'Button', '@@text_domain' ),
    description: __( 'A single button within a buttons wrapper block.', '@@text_domain' ),
    icon: getIcon( 'block-button', true ),
    ghostkit: {
        customStylesCallback( attributes ) {
            const result = {
                '--gkt-button__background-color': attributes.color,
                '--gkt-button__color': attributes.textColor,
                '--gkt-button__border-radius': `${ attributes.borderRadius }px`,
                '--gkt-button-hover__background-color': attributes.hoverColor,
                '--gkt-button-hover__color': attributes.hoverTextColor,
                '--gkt-button-focus__background-color': attributes.hoverColor,
                '--gkt-button-focus__color': attributes.hoverTextColor,
            };

            // Border.
            if ( attributes.borderWeight && attributes.borderColor ) {
                result[ '--gkt-button__border-width' ] = `${ attributes.borderWeight }px`;
                result[ '--gkt-button__border-color' ] = attributes.borderColor;

                if ( attributes.hoverBorderColor ) {
                    result[ '--gkt-button-hover__border-color' ] = attributes.hoverBorderColor;
                }
            }

            // Box Shadow.
            if ( attributes.focusOutlineWeight && attributes.focusOutlineColor ) {
                result[ '--gkt-button-focus__box-shadow' ] = `0 0 0 ${ attributes.focusOutlineWeight }px ${ attributes.focusOutlineColor }`;
            }

            return result;
        },
        supports: {
            styles: true,
            spacings: true,
            display: true,
            scrollReveal: true,
            customCSS: true,
        },
    },
    edit,
    save,
    deprecated,
};
