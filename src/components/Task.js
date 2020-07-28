import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import commonStyles from '../commonStyles';

export default props => {
	const isDoneStyle = props.doneAt != null ? {textDecorationLine: 'line-through'} : {};
	return (
		<View style={styles.container}>
			<View style={styles.check}>{getCheckView(props.doneAt)}</View>
			<View>
				<Text style={[styles.desc, isDoneStyle]}>{props.desc}</Text>
				<Text>{props.estimateAt + ''}</Text>
			</View>
		</View>
	);
};

function getCheckView(doneAt) {
	if (doneAt != null) {
		return (
			<View style={styles.done}>
				<Icon name="check" size={20} color="#FFF" />
			</View>
		);
	} else {
		return <View style={styles.pending} />;
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		borderColor: '#AAA',
		borderBottomWidth: 1,
		alignItems: 'center',
		paddingVertical: 10,
	},
	check: {
		width: '20%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	pending: {
		height: 25,
		width: 25,
		borderRadius: 13,
		borderWidth: 1,
		borderColor: '#555',
	},
	done: {
		height: 25,
		width: 25,
		borderRadius: 13,
		backgroundColor: '#32a852',
		alignItems: 'center',
		justifyContent: 'center',
	},
	desc: {
		fontFamily: commonStyles.fontFamily,
		color: commonStyles.colors.mainText,
		fontSize: 15,
	},
});
