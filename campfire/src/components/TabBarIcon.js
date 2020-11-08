import React from 'react';
import { Icon } from 'expo';

import { TAB_ICON_SELECTED, TAB_ICON_DEFAULT } from '../styles/colors';

const TabBarIcon = ({ name, focused }) => (
  <Icon.Ionicons
    name={name}
    size={26}
    style={{ marginBottom: -3 }}
    color={focused ? TAB_ICON_SELECTED : TAB_ICON_DEFAULT}
  />
);

export default TabBarIcon;
