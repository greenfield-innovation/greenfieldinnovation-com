import { createElement, Node } from 'react';
import PropTypes from 'prop-types';


/**
 * Convenience component for declaring a flexbox layout.
 */
const Flex = ({
                basis = 'auto',
                children,
                direction = 'row',
                grow = 0,
                halign = 'flex-start',
                shrink = 1,
                type = 'div',
                valign = 'flex-start',
              }) =>
  createElement(
    type,
    {
      css: {
        display: 'flex',
        flexDirection: direction,
        flexGrow: grow,
        flexShrink: shrink,
        flexBasis: basis,
        justifyContent: direction === 'row' ? halign : valign,
        alignItems: direction === 'row' ? valign : halign,
      },
    },
    children,
  );

Flex.propTypes = {
  basis: PropTypes.string,
  children: PropTypes.array,
  direction: PropTypes.string,
  grow: PropTypes.number,
  halign: PropTypes.string,
  shrink: PropTypes.number,
  type: PropTypes.string,
  valign: PropTypes.string,
};

export default Flex;
