import React from 'react';
import { View } from 'react-native';
import Svg, { G, Rect, Text, Line } from 'react-native-svg';
import * as d3 from 'd3';

const data = [10, 20, 30, 20, 40];
const xlabels = ['B(V)', 'B(F)', 'L', 'TR', 'AB'];
const ylabels = ['10', '20', '30', '20', '40'];

const BarChartOutcomes = () => {
    const scale = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, 150]);

    return (
        <View style={{borderColor: 'red', borderWidth: 0}}>
            <Svg height="210" width="275">
                <G y={65}>
                    {data.map((value, index) => (
                        <G key={index}>
                            <Rect
                                x={index * 50 + 20} 
                                y={110}
                                width={40}
                                height={-scale(value)}
                                fill="green"
                            />
                            <Text
                                x={index * 53 + 25}
                                y={140}
                                fontSize="14"
                                fill="black"
                                textAnchor="start" 
                            >
                                {xlabels[index]}
                            </Text>
                            <Text
                                x={index * 50 + 31}
                                y={-scale(value) + 100}
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

export default BarChartOutcomes;