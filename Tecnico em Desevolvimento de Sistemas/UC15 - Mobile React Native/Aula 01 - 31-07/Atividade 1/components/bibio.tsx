import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const bibio = () => {
  return (
    <View>
      <Text style={styles.bio}>Bio:</Text>
      <Text style={styles.textbio}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nobis at natus aspernatur vel dolores inventore totam exercitationem tenetur odio enim     laboriosam consequuntur nesciunt, odit rem magni alias placeat. Facilis!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nobis at natus aspernatur vel dolores inventore totam exercitationem tenetur odio enim laboriosam consequuntur nesciunt, odit rem magni alias placeat. Facilis!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptas recusandae, temporibus corrupti modi atque alias itaque eum veniam reprehenderit est, blanditiis vero! Facilis sapiente voluptates dolore consequuntur, eaque nemo?
      </Text>
    </View>
  )
}

export default bibio

const styles = StyleSheet.create({
    bio:{
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 30,
    color: 'black',
    fontWeight: 900
    },
    textbio:{
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 15,
    color: 'black'
    }
})