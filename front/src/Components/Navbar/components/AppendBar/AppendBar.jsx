import React from 'react';
import DropDownCategorie from '../DropDownCategorie/DropDownCategorie';
import ClassService from '../../../../Service/ClassService.js';
import { css }  from 'emotion';
import style from './style';


export default class AppendBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  async componentDidMount(){
    var allData = await ClassService.getAll();
    await this.setState({allData: allData});
  }

  render(){
    return(
      <div className={css(style.appendBar)}>
        <DropDownCategorie allData={this.state.allData} />
      </div>
    );
  }
}
