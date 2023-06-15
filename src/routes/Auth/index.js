import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../../pages/Dashboard';
import ForgotPassword from '../../pages/ForgotPassword';
import Login from '../../pages/Login';
import Register from '../../pages/register';

const Stack = createStackNavigator();

export default function AuthorizationRoute() {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}