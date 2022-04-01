import React from 'react';
import { createRoot } from 'react-dom/client';
import Router from './router'
import './assets/base.css'


createRoot(document.getElementById('root'))
  .render(
    <Router />
  );
