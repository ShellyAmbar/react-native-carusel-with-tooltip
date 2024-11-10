import React, {useEffect, useRef, useState} from "react";
import {
  View,
  Animated,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  Text,
} from "react-native";
import createStyle from "./styles";
import NotchedContainer from "./notch";

interface CaruselProps {
  data: any[];
  tooltipContentView: React.ReactNode;
  selectetItemIndex: number;
  setSelectetItemIndex: (index: number) => void;
  numOfVisibleItems?: number;
  spacing?: number;
  rectStyle?: ViewStyle;
  tooltipGradiant?: string[];
  tooltipBorderColor?: string;
  tooltipBorderRadius?: number;
  tooltipBorderWidth?: number;
  tooltipBackgroundColor?: string;
  showGradiant?: boolean;
  tooltiPwraperDetailes?: ViewStyle;
  itemLableStyle?: TextStyle;
  showLable?: boolean;
}
const Carousel = ({
  data,
  tooltipContentView,
  selectetItemIndex = 0,
  setSelectetItemIndex,
  numOfVisibleItems = 7,
  spacing = 10,
  rectStyle,
  tooltipGradiant = ["white", "pink"],
  tooltipBorderColor = "blue",
  tooltipBorderRadius = 10,
  tooltipBorderWidth = 1,
  tooltipBackgroundColor = "white",
  showGradiant = false,
  tooltiPwraperDetailes,
  itemLableStyle,
  showLable = true,
}: CaruselProps) => {
  const styles = createStyle({spacing});
  const [viewportWidth, setViewportWidth] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef();

  const ITEM_WIDTH = viewportWidth / numOfVisibleItems;
  const CENTER_OFFSET = (viewportWidth - ITEM_WIDTH) / 2;

  useEffect(() => {
    const timeout = setTimeout(() => {
      scrollToIndex(selectetItemIndex);
      clearTimeout(timeout);
    }, 100);
  }, []);

  const scrollToIndex = (index) => {
    // Calculate the current position of the item in the viewport
    const offset = index * (ITEM_WIDTH + spacing);

    // Scroll to calculated offset
    flatListRef.current.scrollToOffset({
      offset,
      animated: true,
    });
  };

  return (
    <View
      onLayout={(event) => setViewportWidth(event.nativeEvent.layout.width)}
    >
      {viewportWidth > 0 && (
        <Animated.FlatList
          ref={flatListRef}
          data={data}
          keyExtractor={(item, index) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: CENTER_OFFSET}}
          snapToOffsets={Array.from(
            {length: data.length},
            (_, i) => i * (ITEM_WIDTH + spacing)
          )}
          decelerationRate="fast"
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: true}
          )}
          onMomentumScrollEnd={(event) => {
            const offsetX = event.nativeEvent.contentOffset.x;
            const index = Math.round(offsetX / (ITEM_WIDTH + spacing));
            console.log(index);

            setSelectetItemIndex(index);
          }}
          renderItem={({item, index}) => {
            const inputRange = [
              (index - 1) * (ITEM_WIDTH + spacing),
              index * (ITEM_WIDTH + spacing),
              (index + 1) * (ITEM_WIDTH + spacing),
            ];

            const scale = scrollX.interpolate({
              inputRange,
              outputRange: [0.8, 1, 0.8],
              extrapolate: "clamp",
            });

            return (
              <TouchableOpacity
                onPress={() => {
                  setSelectetItemIndex(index);
                  scrollToIndex(index);
                }}
              >
                <Animated.View
                  style={[
                    styles.itemContainer,
                    {transform: [{scale}], width: ITEM_WIDTH},
                    {...rectStyle},
                  ]}
                >
                  <View style={styles.itemContent}></View>
                </Animated.View>
                {showLable && (
                  <Text style={{...styles.itemLable, ...itemLableStyle}}>
                    {index + 1}
                  </Text>
                )}
              </TouchableOpacity>
            );
          }}
        />
      )}

      <NotchedContainer
        showGradiant={showGradiant}
        wraperStyle={{...styles.wraperDetailes, ...{...tooltiPwraperDetailes}}}
        borderColor={tooltipBorderColor}
        endColor={tooltipGradiant[1]}
        startColor={tooltipGradiant[0]}
        borderWidth={tooltipBorderWidth}
        cornerRadius={tooltipBorderRadius}
        backgroundColor={tooltipBackgroundColor}
      >
        {tooltipContentView}
      </NotchedContainer>
    </View>
  );
};

export default Carousel;
