import { Document, Page, Text, View, StyleSheet, PDFViewer, Tspan } from "@react-pdf/renderer";
import axios from "axios";
import { useEffect, useState } from "react";
// Create styles

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    color: "black",
    fontSize: "10px",
  },
  section: {
    margin: 10,
    padding: "5 5 5 50",
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
});

// Create Document Component
function BasicDocument() {
  const [details, setDetails] = useState([]);


  const GetResponse = async () => {
    try {
      const response = await axios.get("http://localhost:4000/productdescription");
      const data = response.data;
      setDetails(data);
      // console.log(data);
    } catch (error) {
      console.error("error while fetching data");
    }
  }
  useEffect(() => {
    GetResponse();
  }, [])
  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}

        <Page size="A4" style={styles.page}>
          {details.map((element) => {
            return(
              <View style={styles.section}>
              <Text>St Code: &nbsp;&nbsp;&nbsp;&nbsp; {element.stone_code}</Text>
              <Text>Size: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {element.dimension}</Text>
              <Text>Shape: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {element.shape}</Text>
              <Text>Cts: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {element.cts}</Text>
              <Text>P.Id: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {element.p_id}</Text>
            </View>
            )
          })}
        </Page>
        {/* <Page size="A4" style={styles.page}>
          {details.map((element) => {
            return (
              <View style={styles.section}>
                <Text>St Code:&nbsp;{element.stone_code}</Text>
                <Text>Size:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{element.dimension}</Text>
                <Text>Shape:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{element.shape}</Text>
                <Text>Cts:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{element.cts}</Text>
                <Text>P.Id:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{element.p_id}</Text>
              </View>
            )
          })}
        </Page> */}
      </Document>
    </PDFViewer>
  );
}
export default BasicDocument;
