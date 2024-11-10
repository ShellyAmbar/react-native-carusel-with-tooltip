import {View, Text} from "react-native";
import React, {useState} from "react";
import CircularCarousel from "./carusel";
import styles from "./example.styles";
const example = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const data = [
    {
      id: 0,
      date: "10/02/2024",
      amount: 100,
      principal: 10,
      interest: 10,
      interestAmount: 10,
    },
    {
      id: 1,
      date: "10/03/2024",
      amount: 100,
      principal: 10,
      interest: 10,
      interestAmount: 10,
    },
    {
      id: 2,
      date: "10/04/2024",
      amount: 100,
      principal: 10,
      interest: 10,
      interestAmount: 10,
    },
    {
      id: 3,
      date: "10/05/2024",
      amount: 100,
      principal: 10,
      interest: 10,
      interestAmount: 10,
    },
    {
      id: 4,
      date: "10/06/2024",
      amount: 100,
      principal: 10,
      interest: 10,
      interestAmount: 10,
    },
  ];

  return (
    <View style={styles.container}>
      <CircularCarousel
        numOfVisibleItems={7}
        spacing={10}
        tooltipContentView={
          <View style={styles.conteinerContent}>
            <View style={styles.row}>
              <Text style={styles.date}>{`${data[selectedIndex].date}`}</Text>
              <Text style={styles.mainAmount}>{`₪${data[
                selectedIndex
              ].amount.toFixed(2)}`}</Text>
            </View>
          </View>
        }
        selectetItemIndex={selectedIndex}
        setSelectetItemIndex={setSelectedIndex}
        data={data}
        rectStyle={{backgroundColor: "blue"}}
      />
    </View>
  );
};

export default example;
