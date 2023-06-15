import { StyleSheet, View, TextInput, Text } from "react-native";
import { Link } from "@react-navigation/native";
import { useState } from "react";

export default function Register() {

    let [username, onChangeUsername] = useState("");
    let [email, onChangeEmail] = useState("");
    let [password, onChangePassword] = useState("");
    let [confirmPassword, onChangeConfirmPassword] = useState("");

    return (
        <View style={signup.container}>
            <Text style={signup.title}>Crie sua conta!</Text>
            <View style={signup.textInput__container}>
            <TextInput
                    style={signup.input}
                    value={username}
                    placeholder="Usuário"
                    onChangeText={onChangeUsername}
                />
                <TextInput
                    style={signup.input}
                    value={email}
                    placeholder="E-mail"
                    onChangeText={onChangeEmail}
                />
                <TextInput
                    style={signup.input}
                    value={password}
                    placeholder="senha"
                    onChangeText={onChangePassword}
                    secureTextEntry
                />
                <TextInput
                    style={signup.input}
                    value={confirmPassword}
                    placeholder="Confirmar senha"
                    onChangeText={onChangeConfirmPassword}
                    secureTextEntry
                />
            </View>
            <View>
                <Link
                    style={signup.signup__link}
                    to={{ screen: 'Dashboard' }}>
                    Login
                </Link>
                <Link
                    style={signup.forgotPassword__link}
                    to={{ screen: 'ForgotPassword' }}>
                    Esqueceu sua senha?
                </Link>
            </View>
        </View>
    );
}

const signup = StyleSheet.create({
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
    signup__link: {
        padding: "calc(0.8rem + 0.4vw)",
        marginBottom: "calc(1rem + 1vw)",
        borderRadius: 50,

        textAlign: "center",
        fontSize: "calc(1rem + 1vw)",
        backgroundColor: "#467EAF",
        color: "#EEF1F7",
    },
    forgotPassword__link: {
        textAlign: "center",
        fontSize: "calc(1rem + 1vw)",
        color: "white",
    },
});