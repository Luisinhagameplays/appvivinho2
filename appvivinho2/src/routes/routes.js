import {createNativeStackNavigator} from '@react-navigation/native-stack'

import login from './pages/login';
import Home from './pages/Home';
import Pedidos from './pages/Pedidos';

const Stack = createNativeStackNavigator();

function Routes(){
    return(
        <Stack.Navigator>
            <Stack.screen name="Login" component={Login}/>
            <Stack.screen name="Home" component={Home}/>
            <Stack.screen name="Pedidos" component={Pedidos}/>
        </Stack.Navigator>
    );
}

export default Routes;

const connection = require ('../database/connection')
const express = require ('express')
const router = express.Router()
const GenreController = require('../controllers/controller')

router.post('/newGenre',GenreController.newGenre)

module.exports = router
