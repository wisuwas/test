import React from 'react';
import Responsive from 'react-responsive';

export const Desktop = props => <Responsive {...props} minWidth={1024} />;
export const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={1023} />;
export const MobileDevice = props => <Responsive {...props} minWidth={0} maxWidth={1023} />;
export const Mobile = props => <Responsive {...props} maxWidth={767} />;
