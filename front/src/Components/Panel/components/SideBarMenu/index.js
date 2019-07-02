import React from 'react';
import * as S from './style';
import Tab from './Tab';

export default class SideBarMenu extends React.Component {
  state = {
    showTabs: false,
    active: 0,
  }

  onChange = (view, active) => {
    const { onChange } = this.props;
    this.setState({active})
    onChange(view);
  }

  handleShow = () => {
    this.setState({
      showTabs: !this.state.showTabs
    }, () => {
      if (this.state.showTabs) {
        console.log('document true');
        document.onclick = () => {
          this.handleShow();
          console.log('click true');
        };
      } else {
        console.log('document false');
        document.onclick = () => {
          console.log('click false');
        };
      }
    });
  }

  getTabs = () => {
    const { tabs } = this.props;
    const { active } = this.state;

    return tabs.map((tab, key) => (
      <Tab 
        className={key === active ? 'active' : ''}
        key={key}
        label={tab.label}
        icon={tab.icon}
        onClick={() => this.onChange(tab.view, key)}
      />
    ))
  }

  render() {
    const { showTabs } = this.state;

    return (
      <S.Container>
        {
          showTabs
            ? (<S.ShowButton className="fas fa-bars show" onClick={this.handleShow}/>)
            : (<S.ShowButton className="fas fa-bars" onClick={this.handleShow}/>)
        }
        <S.TabsContainer>
          { 
            showTabs
              ? this.getTabs()
              : (null)
          }
        </S.TabsContainer>
      </S.Container>
    )
  }
}