import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import Styled from 'react-styleguidist/lib/client/rsg-components/Styled';

const styles = ({ fontFamily, color }: any) => ({
	logo: {
		display: 'flex',
		alignItems: 'center',
		margin: 0,
		fontFamily: fontFamily.base,
		fontSize: 18,
		fontWeight: 'normal',
		color: color.baseBackground,
	},
	image: {
		width: '2.5em',
		marginLeft: '-0.5em',
	},
});

interface LogoRendererProps {
  classes: Record<string, string>;
  children: ReactNode;
}

export function LogoRenderer({ classes, children }: LogoRendererProps) {
	return (
		<h1 className={classes.logo}>
			{children}
		</h1>
	);
}

LogoRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	children: PropTypes.node,
};

export default Styled(styles)(LogoRenderer);
