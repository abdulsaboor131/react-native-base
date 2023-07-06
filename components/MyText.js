import React from 'react'
import {View , Text} from "react-native"
import Colors from '../constants/Colors'

const MyText = ({children,size,color,weight}) => {
  return (
    <Text
        style={{
            fontSize:size || 14,
            color : color || Colors.primary,
            weight : weight || "600"
        }}
    >
        {children}
    </Text>
  )
}

export default MyText