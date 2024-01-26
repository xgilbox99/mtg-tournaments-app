import { Dimensions, StyleSheet } from 'react-native';

const win = Dimensions.get('window')

export const darkColor  = "#22272E"
export const whiteColor = "#ffffff"
export const lightColor = "#ffffff4f"

export const core = StyleSheet.create({
    // Layout
    appContainerDark: {
        flex: 1, 
        backgroundColor: darkColor
    },
    appContainerLight: {
        flex: 1,
        backgroundColor: whiteColor
    },

    // Single styles
    alignCenter: { textAlign: 'center' },
    alignLeft: { textAlign: 'left' },
    alignRight: { textAlign: 'center' },
    
    marginBottom1: { marginBottom: 10 },
    marginTop1: { marginTop: 10 },
    marginLeft1: { marginLeft: 10 },
    marginRight1: { marginRight: 10 },
    
    marginBottom2: { marginBottom: 20 },
    marginTop2: { marginTop: 20 },
    marginLeft2: { marginLeft: 20 },
    marginRight2: { marginRight: 20 },

    // Components styles
    textInputDark: {
        fontSize: 18,
        marginBottom: 10, 
        color: whiteColor
    },
    centeredColumnView: {
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    centeredRowView: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    cardImageListSize: {
        width: 120,
        height: 170,
    },
})
