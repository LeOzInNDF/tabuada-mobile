import React, { useState } from "react";
import { View, Text, Button, TextInput, ImageBackground } from "react-native";
import { validarResposta, gerarNumero } from "./funcoes";
import styles from './style';
import fundo from '../../assets/fundo.png';



const TelaInicio = (props) => {
    const [primeiroNumero, setPrimeiroNumero] = useState(1);
    const [segundoNumero, setSegundoNumero] = useState(1);
    const [respostaUsuario, setRespostaUsuario] = useState("");

    const criarQuestao = () => {
        setPrimeiroNumero(gerarNumero());
        setSegundoNumero(gerarNumero());
        setRespostaUsuario("");
    }

    const responder = () => {
        if (validarResposta(primeiroNumero, segundoNumero, respostaUsuario)) {
            props.navigation.navigate('RespostaCorreta');
        } else {
            props.navigation.navigate('RespostaErrada');
        }

        criarQuestao();
    }

    const abrirTelaTabuada = () => {
        props.navigation.navigate('Tabuada');
    }
    return (
        <ImageBackground source={fundo} style={styles.imagemFundo}>
            <View style={styles.tela}>
                <View style={styles.boxPergunta}>
                    <Text style={styles.titulo}>
                        Duvido Você acertar!
                    </Text>
                    <View style={styles.boxQuestao}>
                        <Text style={styles.texto}>
                            {primeiroNumero}
                        </Text>
                        <Text style={styles.texto}>
                            X
                        </Text>
                        <Text style={styles.texto}>
                            {segundoNumero}
                        </Text>
                        <Text style={styles.texto}>
                            =
                        </Text>
                        <TextInput
                            textAlign="center"
                            onChangeText={setRespostaUsuario}
                            keyboardType="numeric"
                            value={respostaUsuario.toString()}
                            autoFocus={true}
                            maxLength={3}
                            style={styles.input} />
                    </View>
                    <View style={styles.opcoes}>
                        <View style={styles.boxBotao}>
                            <Button title="Pular" onPress={criarQuestao} color="#e53b62" />
                        </View>

                        <View style={styles.boxBotao}>
                            <Button title="Responder" onPress={responder} color="#a0df52" />
                        </View>
                    </View>

                </View>

                <View style={styles.boxBotaoTabuada}>
                    <Button title="Ver tabuada"
                        onPress={abrirTelaTabuada} color="#1f4f66" />
                </View>
            </View>

        </ImageBackground>
    )
}

export default TelaInicio;