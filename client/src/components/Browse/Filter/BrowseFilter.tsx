import React, {useContext} from "react";
import {Switch, Text, View} from "react-native";
import {styles} from "./styles";
import {LocalizationContext} from "../../../contexts/LocalizationContext";

type BrowseFilterParams = {
    t: (string: string) => string,
    filterType: 'all' | 'pneumonia' | 'normal',
    setFilterType: (filter: 'all' | 'pneumonia' | 'normal') => void,
    filterUser: boolean,
    setFilterUser: (bool: boolean | ((prev: boolean) => boolean)) => void,
}

const BrowseFilter = ({filterType, filterUser, setFilterType, setFilterUser}: BrowseFilterParams) => {
    const {t} = useContext(LocalizationContext)

    return (
        <View style={styles.container}>
            <Text style={styles.filterText}>{t('browse.filter')}</Text>
            <View style={styles.flexRow}>
                <View style={styles.flex1}>
                    <Text style={styles.text}>{t('browse.yourself')}</Text>
                </View>
                <View style={styles.flex1}>
                    <Switch
                        value={filterUser}
                        onValueChange={() => setFilterUser(prev => !prev)}
                    />
                </View>
            </View>
            <View style={styles.flexRow}>
                <View style={styles.flex1}>
                    <Text style={styles.text}>{t('browse.all')}</Text>
                </View>
                <View style={styles.flex1}>
                    <Switch
                        value={filterType === 'all'}
                        onValueChange={() => setFilterType('all')}
                    />
                </View>
            </View>
            <View style={styles.flexRow}>
                <View style={styles.flex1}>
                    <Text style={styles.text}>{t('browse.pneumonia')}</Text>
                </View>
                <View style={styles.flex1}>
                    <Switch
                        value={filterType === 'pneumonia'}
                        onValueChange={() => setFilterType('pneumonia')}
                    />
                </View>
            </View>
            <View style={styles.flexRow}>
                <View style={styles.flex1}>
                    <Text style={styles.text}>{t('browse.normal')}</Text>
                </View>
                <View style={styles.flex1}>
                    <Switch
                        value={filterType === 'normal'}
                        onValueChange={() => setFilterType('normal')}
                    />
                </View>
            </View>
        </View>
    )
}

export default BrowseFilter
