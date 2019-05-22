import React, { Component } from 'react';
import { View } from 'react-native';
import ActionButton from "react-native-circular-action-menu";
import Icon from "react-native-vector-icons/FontAwesome5";

 import styles from './styles';

export default class ActionButtonMenu extends Component {
  render() {
    return(       
            <ActionButton buttonColor="rgba(231,76,60,1)" position='right'>
                <ActionButton.Item buttonColor='#9b59b6' title='Home'>
                    <Icon name='utensils' style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#9b59b6' title='Home'>
                    <Icon name='dumbbell' style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#9b59b6' title='Home'>
                    <Icon name='history' style={styles.actionButtonIcon} />
                </ActionButton.Item>
            </ActionButton>  
    );
  }
}

