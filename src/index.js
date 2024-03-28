import React from 'react';
import ReactDom from 'react-dom';

import App from './App';
import GlobalStyle from "./globalstyles"



ReactDom.render(
<>
    <App />, <GlobalStyle />
</>,
    
   document.getElementById('root'));

     



