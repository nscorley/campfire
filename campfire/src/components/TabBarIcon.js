import React from 'react';
import { Icon } from 'expo';

import colors from '../constants/colors';

const TabBarIcon = ({ name, focused }) => (
  <Icon.Ionicons
    name={name}
    size={26}
    style={{ marginBottom: -3 }}
    color={focused ? colors.tabIconSelected : colors.tabIconDefault}
  />
);

export default TabBarIcon;
