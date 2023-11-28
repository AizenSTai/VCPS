// // // services/reportGenerator.js
// import jsPDF from "jspdf";
// import "jspdf-autotable";
// import userProfile from "src/Userprofile/userProfile";
// // Date Fns is used to format the dates we receive
// // from our API call
// ///
// import { format } from "date-fns";

// // define a generatePDF function that accepts a tickets argument
// const Export = async (items) => {
//     // initialize jsPDF
//     const doc = new jsPDF();
//     let count = 0
//     // define the columns we want and their titles
//     const tableColumn = ["شماره", "توضیحات", "تعداد", "قیمت واحد", "قیمت کل"];
//     // define an empty array of rows
//     const tableRows = [];

//     // for each ticket pass all its data into an array
//     items.map((itm) => {
//         if (itm.Val != '0') {
//             count++
//             const row = [count.toString(), itm.Name, '1', itm.Val, itm.Val]
//             tableRows.push(row);
//         }
//     })
//     // startY is basically margin-top
//     let name = await userProfile()
//     doc.autoTable(tableColumn, tableRows, { startY: 20 });
//     doc.setLanguage('af')
//     console.log(doc.getFontList())
//     doc.setFont('Symbol', 'Bold')
//     const date = Date().split(" ");
//     // we use a date string to generate our filename.
//     const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
//     // ticket title. and margin-top + margin-left
//     doc.text(`date : ${new Date().getFullYear() + "/" + new Date().getMonth() + "/" + new Date().getDay() + "-" + new Date().getHours() + ":" + new Date().getUTCMinutes()}`, 15, 10);
//     doc.text(`name : ${(name.Namefa).toString()}`, 15, 15);
//     // we define the name of our PDF file.
//     doc.save(`FactorList_${dateStr}.pdf`);
// };

// export default Export;
// services/reportGenerator.js
// import userProfile from "src/Userprofile/userProfile";
// import React from "react";
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
// // Date Fns is used to format the dates we receive
// // from our API call
// ///
// import { format } from "date-fns";

// const styles = StyleSheet.create({
//     page: {
//         flexDirection: 'row',
//         backgroundColor: '#E4E4E4'
//     },
//     section: {
//         margin: 10,
//         padding: 10,
//         flexGrow: 1
//     }
// });

// // define a generatePDF function that accepts a tickets argument
// const Export = (items) => {
//     { console.log('im in'); }
//     return (

//         <Document>
//             <Page size="A4" style={styles.page}>
//                 <View style={styles.section}>
//                     <Text>Section #1</Text>
//                 </View>
//                 <View style={styles.section}>
//                     <Text>Section #2</Text>
//                 </View>
//             </Page>
//         </Document>
//     )
// };

// export default Export;
// // services/reportGenerator.js
import jsPDF from "jspdf";
import "jspdf-autotable";
import userProfile from "src/Userprofile/userProfile";
// Date Fns is used to format the dates we receive
// from our API call
///
import { format } from "date-fns";

// define a generatePDF function that accepts a tickets argument
const Export = async (items) => {
    // initialize jsPDF
    const report = new jsPDF('portrait', 'pt', 'a4');
    report.html(items).then(() => {
        report.save('report.pdf');
    });

}

export default Export;