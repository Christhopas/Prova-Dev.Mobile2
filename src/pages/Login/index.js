import { StyleSheet, View, TextInput, Text } from "react-native";
import { Link } from "@react-navigation/native";
import { useState } from "react";

export default function Login() {

    let [username, onChangeUsername] = useState("");
    let [password, onChangePassword] = useState("");

    return (
        <View style={signin.container}>
            <Text style={signin.title}>Bem-vindo novamente!</Text>
            <View style={signin.textInput__container}>
                <TextInput
                    style={signin.input}
                    value={username}
                    placeholder="Usuário"
                    onChangeText={onChangeUsername}
                />
                <TextInput
                    style={signin.input}
                    value={password}
                    placeholder="Senha"
                    onChangeText={onChangePassword}
                    secureTextEntry
                />
            </View>
            <View>
                <Link
                    style={signin.signin__link}
                    to={{ screen: 'Dashboard' }}>
                    Login
                </Link>
                <View style={signin.line__container}>
                    <View style={signin.line}></View>
                    <Text style={signin.line__text}>ou</Text>
                    <View style={signin.line}></View>
                </View>
                <Link
                    style={signin.signin__link}
                    to={{ screen: 'Register' }}>
                    Registre - se
                </Link>
                <Link
                    style={signin.forgotPassword__link}
                    to={{ screen: 'ForgotPassword' }}>
                    Esqueceu sua senha?
                </Link>
            </View>
        </View>
    );
}

const signin = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",

        padding: 20,
        backgroundColor: "#2E3038",
    },
    title: {
        fontSize: "calc(2rem + 2vw)",
        fontWeight: 200,
        color: "#EEF1F7",
    },
    input: {
        padding: "calc(0.8rem + 0.4vw)",
        marginBottom: "calc(1rem + 1vw)",
        borderRadius: 50,

        fontSize: "calc(1rem + 1vw)",
        backgroundColor: "#454955",
        color: "#EEF1F7",
    },
    signin__link: {
        padding: "calc(0.8rem + 0.4vw)",
        borderRadius: 50,

        textAlign: "center",
        fontSize: "calc(1rem + 1vw)",
        backgroundColor: "#467EAF",
        color: "#EEF1F7",
    },
    forgotPassword__link: {
        marginTop: "calc(1rem + 1vw)",

        textAlign: "center",
        fontSize: "calc(1rem + 1vw)",
        color: "white",
    },
    line__container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        marginTop: "calc(0.5rem + 0.5vw)",
        marginBottom: "calc(0.5rem + 0.5vw)",
    },
    line: {
        width: "40%",
        height: 0.5,
        backgroundColor: "white",
    },
    line__text: {
        fontSize: "calc(1rem + 1vw)",
        textAlign: "center",
        color: "white",
    },
});