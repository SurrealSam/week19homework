import React from 'react'
import { Menu } from 'semantic-ui-react'

const SortSelection = (props) => (
  
   // const { activeItem } = this.state
    
      <Menu text vertical>
        <Menu.Item header>Sort By</Menu.Item>
        <Menu.Item
          name='first name'
          active={props.activeItem === 'first name'}
          onClick={props.handleItemClick}
        />
        <Menu.Item
          name='last name'
          active={props.activeItem === 'last name'}
          onClick={props.handleItemClick}
        />
        <Menu.Item
          name='username'
          active={props.activeItem === 'username'}
          onClick={props.handleItemClick}
        />
        <Menu.Item
          name='join date'
          active={props.activeItem === 'join date'}
          onClick={props.handleItemClick}
        />
        <Menu.Item
          name='age'
          active={props.activeItem === 'age'}
          onClick={props.handleItemClick}
        />
        <Menu.Item
          name='gender'
          active={props.activeItem === 'gender'}
          onClick={props.handleItemClick}
        />
        <Menu.Item
          name='city'
          active={props.activeItem === 'city'}
          onClick={props.handleItemClick}
        />
        <Menu.Item
          name='state'
          active={props.activeItem === 'state'}
          onClick={props.handleItemClick}
        />
        <Menu.Item
          name='country'
          active={props.activeItem === 'country'}
          onClick={props.handleItemClick}
        />
      </Menu>
    
  
);

export default SortSelection;
