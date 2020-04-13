import React from 'react'
import { Menu, Button, Icon } from 'semantic-ui-react'

const FilterMethod = (props) => (
  
   // const { activeMethod } = this.state
    
      <Menu text vertical>
        <Menu.Item header>Filter Method (case sensitive)</Menu.Item>
        <Menu.Item
          name='first name'
          active={props.activeMethod === 'first name'}
          onClick={props.handleMethodClick}
        />
        <Menu.Item
          name='last name'
          active={props.activeMethod === 'last name'}
          onClick={props.handleMethodClick}
        />
        <Menu.Item
          name='username'
          active={props.activeMethod === 'username'}
          onClick={props.handleMethodClick}
        />
        <Menu.Item
          name='join date'
          active={props.activeMethod === 'join date'}
          onClick={props.handleMethodClick}
        />
        <Button name='join date before'
          active={props.activeMethod === 'join date before'}
          onClick={props.handleMethodClick} >Before</Button>
          <Button name='join date after'
          active={props.activeMethod === 'join date after'}
          onClick={props.handleMethodClick} >After</Button>
        <Menu.Item
          name='age'
          active={props.activeMethod === 'age'}
          onClick={props.handleMethodClick}
        />
        <Button name='older than'
          active={props.activeMethod === 'older than'}
          onClick={props.handleMethodClick} icon>
          <Icon name="chevron right"/>  </Button>
          <Button name='younger than'
          active={props.activeMethod === 'younger than'}
          onClick={props.handleMethodClick} icon>
              <Icon name="chevron left"/>  </Button>
        <Menu.Item
          name='gender'
          active={props.activeMethod === 'gender'}
          onClick={props.handleMethodClick}
        />
        <Menu.Item
          name='city'
          active={props.activeMethod === 'city'}
          onClick={props.handleMethodClick}
        />
        <Menu.Item
          name='state'
          active={props.activeMethod === 'state'}
          onClick={props.handleMethodClick}
        />
        <Menu.Item
          name='country'
          active={props.activeMethod === 'country'}
          onClick={props.handleMethodClick}
        />
      </Menu>
    
  
);

export default FilterMethod;
