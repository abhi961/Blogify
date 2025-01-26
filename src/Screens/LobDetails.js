import { SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native'
import React from 'react'
import { useDarkMode } from '../Components/DarkModeProvider';
import { COLORS } from '../theme/color';
import { Fonts } from '../theme/fonts';
import { normalize } from '../utlities/helpers/normalize';
import Header from '../Components/Header';
import { jobData } from '../theme/Data'
import { Table, Rows, Row } from 'react-native-table-component'



const LobDetails = () => {
    const TableHead = ['Post Name', 'Total Post', 'Exam Eligibility']
    const isDarkMode = useDarkMode();
    return (
        <>
            <View style={[styles.container, { backgroundColor: isDarkMode ? COLORS.black : COLORS.white }]}>
                <Header mainTitle={'Job Details'} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.contentContainer}>
                        <View style={styles.contentInfo}>
                            <Text style={[styles.postName, { color: isDarkMode ? COLORS.white : COLORS.black }]}>Post Name : </Text>
                            <Text style={[styles.postDesc, { color: isDarkMode ? COLORS.white : COLORS.black }]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac auctor orci. Nullam sodales vehicula </Text>
                        </View>
                        <View style={[styles.contentInfo, { marginTop: normalize(10) }]}>
                            <Text style={[styles.postName, { color: isDarkMode ? COLORS.white : COLORS.black }]}>Post Date : </Text>
                            <Text style={[styles.postDesc, { color: isDarkMode ? COLORS.white : COLORS.black }]}>16/1/2025</Text>
                        </View>
                        <View style={[styles.contentInfo, { marginTop: normalize(10) }]}>
                            <Text style={[styles.postName, { color: isDarkMode ? COLORS.white : COLORS.black }]}>Post Description : </Text>
                            <Text style={[styles.postDesc, { color: isDarkMode ? COLORS.white : COLORS.black }]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac auctor orci. Nullam sodales vehicula </Text>
                        </View>
                    </View>
                    <View style={[styles.contentContainer, { marginTop: normalize(15) }]}>
                        <Text style={styles.descText}>Lorem ipsum dolor sit amet, consectetur adipiscing </Text>
                        <Text style={[styles.descText, { color: isDarkMode ? COLORS.white : COLORS.black, marginTop: normalize(10), }]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </Text>
                        <Text style={[styles.descText, { marginTop: normalize(10) }]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla</Text>
                    </View>
                    <View style={styles.flexContainer}>
                        <View style={styles.importantDateContainer}>
                            <Text style={styles.imptDate}>Important Dates</Text>
                            <Text style={[styles.date, { color: isDarkMode ? COLORS.white : COLORS.black, }]}>Application Begain : 16/1/2025</Text>
                            <Text style={[styles.date, { color: isDarkMode ? COLORS.white : COLORS.black, }]}>Last Date of Application : 28/1/2025</Text>
                            <Text style={[styles.date, { color: isDarkMode ? COLORS.white : COLORS.black, }]}>Last Date Pay Exam Fee : 28/1/2025</Text>
                            <Text style={[styles.date, { color: isDarkMode ? COLORS.white : COLORS.black, }]}>Correction form : 30/1/2025</Text>
                            <Text style={[styles.date, { color: isDarkMode ? COLORS.white : COLORS.black, }]}>Exam Date : 5/5/2025</Text>
                            <Text style={[styles.date, { color: isDarkMode ? COLORS.white : COLORS.black, }]}>Admit Card Date : 16/4/2025</Text>
                        </View>
                        <View style={styles.fessContainer}>
                            <Text style={styles.imptDate}>Application Fee </Text>
                            <Text style={[styles.date, { color: isDarkMode ? COLORS.white : COLORS.black, }]}>General / OBC / EWS : 1000</Text>
                            <Text style={[styles.date, { color: isDarkMode ? COLORS.white : COLORS.black, }]}>Sc / ST / : 0</Text>
                            <Text style={[styles.date, { color: isDarkMode ? COLORS.white : COLORS.black, }]}>All category female :0/ NIL</Text>
                            <Text style={[styles.date, { color: isDarkMode ? COLORS.white : COLORS.black, }]}>Pay the Examination Fee Through Debit cards / Credit cards / Netbanking</Text>
                        </View>
                    </View>
                    <View style={styles.AgeConatiner}>

                        <Text style={styles.imptDate}>Lorem ipsum dolor sit amet, consectetur adipiscing : Age Limit as on 1/1/2025</Text>
                        <Text style={[styles.date, { color: isDarkMode ? COLORS.white : COLORS.black, }]}>Minimum Age : 18</Text>
                        <Text style={[styles.date, { color: isDarkMode ? COLORS.white : COLORS.black, }]}>Maximum Age : 60</Text>
                        <Text style={[styles.date, { color: isDarkMode ? COLORS.white : COLORS.black, }]}>Age Relaxation</Text>
                    </View>
                    <View style={styles.PostContainer}>
                        <Text style={styles.PostDetails}>UPSC Civil Services Recruitment 2025 Vacancy Debits : Total Post 1199 </Text>
                    </View>
                    <View style={{ marginHorizontal: normalize(16) }}>
                        <Table borderStyle={{ borderWidth: 1, borderColor: isDarkMode ? COLORS.lightBack : COLORS.black, }}  >
                            <Row data={TableHead} style={[styles.row1]} textStyle={[styles.text1, { color: isDarkMode ? COLORS.white : COLORS.black, }]} />
                            {/* <Rows data={jobData} /> */}
                        </Table>
                    </View>


                </ScrollView>
            </View>

        </>
    )
}

export default LobDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    contentContainer: {
        borderColor: COLORS.lightBack,
        borderWidth: normalize(1),
        borderRadius: normalize(8),
        padding: normalize(16),
        marginHorizontal: normalize(16),
    },
    contentInfo: {
        flexDirection: 'row',
        // justifyContent:'space-between',

    },
    postName: {
        fontSize: normalize(13),
        fontFamily: Fonts.Poppins_Medium
    },
    postDesc: {
        fontSize: normalize(13),
        fontFamily: Fonts.Poppins_Medium,
        width: normalize(260),
        marginLeft: normalize(8)
        // paddingHorizontal:normalize(8)
    },
    descText: {
        textAlign: 'center',
        fontSize: normalize(15),
        fontFamily: Fonts.Poppins_bold,
        color: COLORS.orange
    },
    flexContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: COLORS.lightBack,
        borderWidth: normalize(1),
        borderRadius: normalize(8),
        marginHorizontal: normalize(16),
        marginTop: normalize(30),

    },
    importantDateContainer: {
        flex: 1
    },
    imptDate: {
        fontSize: normalize(14),
        fontFamily: Fonts.Poppins_Medium,
        color: COLORS.orange,
        margin: normalize(6)
    },
    fessContainer: {
        flex: 1,


    },
    date: {
        fontSize: normalize(13),
        fontFamily: Fonts.Poppins_Medium,
        paddingHorizontal: normalize(10),
        marginVertical: normalize(5)
    },
    AgeConatiner: {
        borderColor: COLORS.lightBack,
        borderWidth: normalize(1),
        borderRadius: normalize(8),
        marginHorizontal: normalize(16),
        marginTop: normalize(30),
        padding: normalize(10),
        marginBottom: normalize(10),
    },
    PostContainer: {
        borderColor: COLORS.lightBack,
        borderWidth: normalize(1),
        borderRadius: normalize(8),
        marginHorizontal: normalize(16),
        marginTop: normalize(30),
        padding: normalize(10),
        marginBottom: normalize(10),
    },
    PostDetails: {
        fontSize: normalize(15),
        fontFamily: Fonts.Poppins_SemiBold,
        paddingHorizontal: normalize(10),
        marginVertical: normalize(5),
        color: COLORS.orange
    },
    // TableContainer:{
    //     marginTop: normalize(30),
       
       
    // },
   
    text1: {
        fontSize: normalize(13),
        fontFamily: Fonts.Poppins_Medium,
        paddingHorizontal: normalize(10),
        paddingVertical: normalize(10)
        // marginVertical: normalize(5)
    }

})