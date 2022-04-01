import React from 'react'
import { Button } from 'antd';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
      <Outlet />
    </div>
  )
}
