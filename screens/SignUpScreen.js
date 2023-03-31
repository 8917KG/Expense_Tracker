import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native";

export function SignUpScreen ( props ){
    return(
        <View style= {styles.page}>
            <Text>Welcome to Expense Tracker!</Text>
            <Text style = {styles.title}>Sign Up for an Account</Text>
            <View style = {styles.inputGroup}>
                <Text >Email Address:</Text>
                <TextInput 
                    style = {styles.input}
                    placeholder = "you@domain.com"
                />
            </View>
            <View style = {styles.inputGroup}>
                <Text>Password:</Text>
                <TextInput 
                    style = {styles.input}
                    placeholder = "minimum 8 characters"
                />
            </View>
            <TouchableOpacity style= {styles.button}>
                <Text>Sign up</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    page:{
        marginHorizontal:20,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
        //paddingBottom:20,
        marginBottom: 10,
    },
    input: {
        backgroundColor: '#bac0c5',
        padding:10,
        // textAlign: 'center',
    },
    inputGroup: {
        marginVertical: 5,
        //textAlign: 'center',
    },
    button: {
        textAlign: 'center',
        padding: 10,
        backgroundColor: '#4fee69',
        marginVertical: 5,
    },
})