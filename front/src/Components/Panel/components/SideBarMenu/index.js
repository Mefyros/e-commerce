import React from 'react';
import * as S from './style';
import Tab from './Tab';

export default class SideBarMenu extends React.Component {
  render() {
    const { onChange, tabs } = this.props;

    return (
      <S.Container>
        {
          tabs.map((tab, key) => (
            <Tab 
              key={key}
              label={tab.label}
              icon={tab.icon}
              onClick={() => onChange(tab.view)}
            />
          ))
        }
      </S.Container>
    )
  }
}