import { StyleSheet } from "react-native"
import { lightGray } from "./style-variables.js"

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  loginScreenLogo: {
    height: 300,
    width: 300,
    resizeMode: "contain",
    marginBottom: 100
  },
  loginButton: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: lightGray,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  loginButtonText: {
    color: lightGray,
    fontSize: 16
  },
  googleIcon: {
    color: lightGray,
    fontSize: 24,
    marginRight: 15
  }
})

export default styles