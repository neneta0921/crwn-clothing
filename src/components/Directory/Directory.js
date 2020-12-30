import React from 'react';

import MenuItem from '../MenuItem/MenuItem';
import { sections } from '../../data/DirectoryData';
import './Directrory.scss';

export const Directory = () => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
)