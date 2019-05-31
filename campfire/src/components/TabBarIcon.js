import React from 'react';
import { Icon } from 'expo';

import colors from '../styles/colors';

const TabBarIcon = ({ name, focused }) => (
  <Icon.Ionicons
    name={name}
    size={26}
    style={{ marginBottom: -3 }}
    color={focused ? colors.TAB_ICON_SELECTED : colors.TAB_ICON_DEFAULT}
  />
);

export default TabBarIcon;
