import React, {useContext, useEffect} from "react";
import {ActivityIndicator, FlatList, View} from "react-native";
import {LocalizationContext} from "../../../contexts/LocalizationContext";
import {useDispatch, useSelector} from "react-redux";
import {ApplicationState} from "../../../store";
import {onGetPredictions} from "../../../store/actions/browseActions";
import {styles} from "./styles";
import BrowseItem from "../../../components/Browse/Item/BrowseItem";
import Colors from "../../../constants/Colors";

const BrowseScreen = () => {
    const {t} = useContext(LocalizationContext)
    const dispatch = useDispatch()

    const {
        nextPage,
        totalPages,
        predictions,
        isLoadingMore,
        isLoading
    } = useSelector((state: ApplicationState) => state.browseReducer)

    console.log(predictions)

    useEffect(() => {
        dispatch(onGetPredictions())
    }, [])

    const renderItem = ({item}: any) => <BrowseItem item={item}/>

    const renderSeparator = () => <View style={styles.separator}/>

    const handleRefresh = () => dispatch(onGetPredictions())

    const renderFooter = () => {
        if (isLoadingMore)
            return <ActivityIndicator size={'large'} style={styles.listFooter} color={Colors.main1}/>
        return null
    }

    const loadMore = () => {
        if (nextPage <= totalPages && !isLoadingMore)
            dispatch(onGetPredictions({page: nextPage}, false))
    }

    return (
        <View style={styles.container}>

            

            <FlatList
                style={styles.containerFlatList}
                data={predictions}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={item => item._id}
                ItemSeparatorComponent={renderSeparator}
                refreshing={isLoading}
                onRefresh={handleRefresh}
                ListFooterComponent={renderFooter}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
            />
        </View>
    )
}

export default BrowseScreen
