
// 第三方导入
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

// 自己配置导入
import App from './App';
import "normalize.css"
import store from './store';
// 这里导入的时候，到组件内部就不用每次都需要导入
import '@/assets/css/index.less'
import theme from './assets/theme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Suspense fallback='loading'>
        <HashRouter>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <App />
                </Provider>
            </ThemeProvider>
        </HashRouter>
    </Suspense>
);


