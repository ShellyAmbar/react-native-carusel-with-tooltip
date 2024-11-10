import React, {useState} from "react";
import {View, LayoutChangeEvent, ViewStyle} from "react-native";
import Svg, {Defs, LinearGradient, Stop, Path} from "react-native-svg";
import styles from "./styles";
interface NotchedContainerProps {
  children: React.ReactNode;
  startColor: string;
  endColor: string;
  borderColor: string;
  contentStyle?: ViewStyle;
  wraperStyle?: ViewStyle;
  borderWidth?: number;
  cornerRadius?: number;
  arrowHeight?: number;
  showGradiant?: boolean;
  backgroundColor?: string;
}

const NotchedContainer: React.FC<NotchedContainerProps> = ({
  children,
  startColor = "white",
  endColor = "pink",
  borderColor,
  borderWidth = 1,
  contentStyle,
  wraperStyle,
  cornerRadius = 10,
  arrowHeight = 10,
  showGradiant = false,
  backgroundColor = "white",
}) => {
  const [tooltipHeight, setTooltipHeight] = useState(150);
  const [tooltipWidth, setTooltipWidth] = useState(150);

  const handleLayout = (event: LayoutChangeEvent) => {
    const {height, width} = event.nativeEvent.layout;
    setTooltipHeight(height); // Adding padding for SVG height
    setTooltipWidth(width);
  };

  return (
    <View style={{...styles.wrapper, ...{...wraperStyle}}}>
      <Svg
        width={tooltipWidth + borderWidth * 2}
        height={tooltipHeight + borderWidth * 2}
        viewBox={`0 0 ${tooltipWidth} ${tooltipHeight}`}
      >
        {showGradiant && (
          <Defs>
            <LinearGradient id="tooltipGradient" x1="0" y1="0" x2="1" y2="1">
              <Stop offset="0.38" stopColor={startColor} />
              <Stop offset="1.82" stopColor={endColor} />
            </LinearGradient>
          </Defs>
        )}

        {/* Tooltip arrow with gradient */}
        <Path
          d={`
            M ${cornerRadius} ${arrowHeight} 
            h ${tooltipWidth - 2 * cornerRadius} 
            a ${cornerRadius} ${cornerRadius} 0 0 1 ${cornerRadius} ${cornerRadius} 
            v ${tooltipHeight - arrowHeight - 2 * cornerRadius} 
            a ${cornerRadius} ${cornerRadius} 0 0 1 -${cornerRadius} ${cornerRadius} 
            h -${tooltipWidth - 2 * cornerRadius} 
            a ${cornerRadius} ${cornerRadius} 0 0 1 -${cornerRadius} -${cornerRadius} 
            v -${tooltipHeight - arrowHeight - 2 * cornerRadius} 
            a ${cornerRadius} ${cornerRadius} 0 0 1 ${cornerRadius} -${cornerRadius} 
            z 
            M ${tooltipWidth / 2 - 10} ${arrowHeight} 
            L ${tooltipWidth / 2} 0
            L ${tooltipWidth / 2 + 10} ${arrowHeight} 
            
            Z
          `}
          fill={showGradiant ? "url(#tooltipGradient)" : backgroundColor}
          stroke={borderColor}
          strokeWidth={borderWidth}
        />
      </Svg>

      <View
        style={{
          ...styles.content,
          ...{...contentStyle},
          top: arrowHeight,
          borderRadius: cornerRadius,
        }}
        onLayout={handleLayout}
      >
        {children}
      </View>
    </View>
  );
};
export default NotchedContainer;
