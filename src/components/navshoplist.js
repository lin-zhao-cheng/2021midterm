import {  Menu, Dropdown, Button, Space  } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);


export default function NavBar() {
    return (
        <Space wrap>
    
      <Dropdown overlay={menu} placement="bottomCenter">
        <Button>bottomCenter</Button>
      </Dropdown>
      
    </Space>
 
    );
}
