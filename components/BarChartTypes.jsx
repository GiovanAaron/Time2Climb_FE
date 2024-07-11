import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { G, Rect, Text, Line } from 'react-native-svg';
import * as d3 from 'd3';

const data = [10, 20, 30, 40];
const xlabels = ['Boulder', 'Lead', 'Top Rope', 'Auto Belay'];
const ylabels = ['10', '20', '30', '40'];

const BarChartTypes = () => {
    const scale = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, 150]);

    return (
        <View style={{borderColor: 'white', borderWidth: 1}}>
            <Svg height="200" width="275">
                <G x={50}>
                    {data.map((value, index) => (
                        <G key={index}>
                            <Rect
                                y={index * 50} 
                                x={45}
                                height={40}
                                width={scale(value)}
                                fill="#FF481A"
                            />
                            <Text
                                y={index * 50 + 25}
                                x={-45}
                                fontSize="14"
                                fill="black"
                                textAnchor="start" 
                            >
                                {xlabels[index]}
                            </Text>
                            <Text
                                y={index * 50 + 25}
                                x={scale(value) + 55}
                                fontSize="14"
                                fill="black"
                                textAnchor="start" 
                            >
                                {ylabels[index]}
                            </Text>
                        </G>
                    ))}
                </G>
            </Svg>
        </View >
    );
};

export default BarChartTypes;