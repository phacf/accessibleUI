import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'
import Styled from 'react-styleguidist/lib/client/rsg-components/Styled'
import Heading from 'react-styleguidist/lib/client/rsg-components/Heading'
// Import default implementation from react-styleguidist using the full path
import DefaultSectionsRenderer from 'react-styleguidist/lib/client/rsg-components/Sections/SectionsRenderer'

const styles = ({ fontFamily, space }: any) => ({
  headingSpacer: {
    marginBottom: space[2],
  },
  descriptionText: {
    marginTop: space[0],
    fontFamily: fontFamily.base,
  },
});

interface SectionsRendererProps {
  classes: { [key: string]: string };
  children?: ReactNode[] | null;
}

export function SectionsRenderer({ classes, children }: SectionsRendererProps) {
  return (
    <div>
      {children && children.length > 0 && (
        <header className={classes.headingSpacer}>
          <Heading level={1}>Example Components</Heading>
          <p className={classes.descriptionText}>These are the greatest components</p>
        </header>
      )}
      <DefaultSectionsRenderer>{children}</DefaultSectionsRenderer>
    </div>
  );
}

SectionsRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default Styled(styles)(SectionsRenderer)
