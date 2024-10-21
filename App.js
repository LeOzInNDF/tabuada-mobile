import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicio from './src/screens/TelaInicio';
import TelaRespostaCorreta from './src/screens/TelaRespostaCorreta';
import TelaRespostaErrada from './src/screens/TelaRespostaErrada';
import TelaTabuada from './src/screens/TelaTabuada';

const Navegacao = createStackNavigator();

const App = () => (

	<NavigationContainer>
		<StatusBar style="auto" />
		<Navegacao.Navigator screenOptions={{ headerShown: false }}>
			<Navegacao.Screen name='Inicio' component={TelaInicio} />
			<Navegacao.Screen name='Tabuada' component={TelaTabuada} />
			<Navegacao.Screen name='RespostaCorreta' component={TelaRespostaCorreta} />
			<Navegacao.Screen name='RespostaErrada' component={TelaRespostaErrada} />
		</Navegacao.Navigator>
	</NavigationContainer>

);


export default App;
