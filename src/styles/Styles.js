import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },

    ImagesStyles:{
        width: 200,
        height: 200,
        borderRadius: 50,
    },

    h1: {
        fontSize: 25,
        marginTop: 20,
        marginBottom: 50,
    },

    label:{
        fontSize: 15,
        color: 'white',
        textAlign: 'left',
        marginTop: 15,
        fontWeight: 'bold',
    },

    Inputs: {
        backgroundColor: 'white',
        borderWidth: 5,
        borderRadius: 10,
        borderColor: 'white',
        color: 'black',
        padding: 5,
        width: 305,
        margin: 1.5,
    },

    Touch: {
        borderWidth: 5,
        borderRadius: 10,
        width: 305,
        margin: 36.5,
    },

    TouchText: {
        textAlign: 'center',
        fontSize: 20,
        padding: 3,
    },

    Values: {
      color: 'white',
    },
  });

  export default styles;