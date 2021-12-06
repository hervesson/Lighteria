import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import  Background  from './componentes/background'
import  DescricaoItem  from './componentes/descricaoItem'

const DetalhesProduto = ({route}) => {
	const { imagem, titulo, estudio, itemDesc, itemName, preco, id } = route.params;
	return (
		<View style={styles.container}>
			<Background />
			<DescricaoItem 
				imagem={imagem}
				estudio={estudio}
				itemDesc={itemDesc}
				itemName={itemName}
				titulo={titulo}
				preco={preco}
				id={id}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//backgroundColor: "green"
	}
})

export default DetalhesProduto