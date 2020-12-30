import React from 'react';

import { MenuItem } from '../MenuItem/MenuItem';
import { sections } from '../../DirectoryData';
import './Directrory.scss';

export const Directory = () => (
  <div className='directory-menu'>
    {sections.map(({ title, imageUrl, id, size }) => (
      <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
    ))}
  </div>
)