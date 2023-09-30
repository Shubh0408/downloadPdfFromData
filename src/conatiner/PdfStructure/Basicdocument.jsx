import { Document, Page, Text, View, StyleSheet, PDFViewer } from "@react-pdf/renderer";
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
              <Text>Stone Code: {element.stone_code}</Text>
              <Text>Size: {element.dimension}</Text>
              <Text>Shape: {element.shape}</Text>
              <Text>Cts: {element.cts}</Text>
              <Text>P.Id: {element.p_id}</Text>
            </View>
            )
          })}
        </Page>
        {/* <Page size="A4" style={styles.page}>
          {details.map((element) => {
            return(
              <View style={styles.section}>
              <Text><table style="width:50%">
                  <tr>
                    <td>Emil</td>
                    <td>Tobias</td>
                  </tr>
                </table></Text>
            </View>
            )
          })}
        </Page> */}
      </Document>
    </PDFViewer>
  );
}
export default BasicDocument;
