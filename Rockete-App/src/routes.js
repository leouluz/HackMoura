import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Login from './pages/Login';
import Home from './pages/Home';
import Noticia from './pages/Noticias';

export default createAppContainer(
  createSwitchNavigator({
    Noticia,
    Login,
    Home
  }),
);
