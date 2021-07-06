import React, {useContext, useEffect, useRef, useState} from "react";
import {ActivityIndicator, FlatList, TouchableOpacity, View} from "react-native";
import {Ionicons} from '@expo/vector-icons';
import {LocalizationContext} from "../../../contexts/LocalizationContext";
import {useDispatch, useSelector} from "react-redux";
import {ApplicationState} from "../../../store";
import {onGetPredictions} from "../../../store/actions/browseActions";
import {styles} from "./styles";
import BrowseItem from "../../../components/Browse/Item/BrowseItem";
import Colors from "../../../constants/Colors";
import {Modalize} from "react-native-modalize";
import BrowseFilter from "../../../components/Browse/Filter/BrowseFilter";

const BrowseScreen = () => {
    const {t} = useContext(LocalizationContext)
    const modalRef = useRef<Modalize>()
    const [filterType, setFilterType] = useState<'all' | 'pneumonia' | 'normal'>('all')
    const [filterUser, setFilterUser] = useState<boolean>(false)
    const dispatch = useDispatch()

    const {
        nextPage,
        totalPages,
        predictions,
        isLoadingMore,
        isLoading
    } = useSelector((state: ApplicationState) => state.browseReducer)

    useEffect(() => {
        dispatch(onGetPredictions())
    }, [])

    useEffect(() => {
        dispatch(onGetPredictions({user: filterUser, type: filterType}))
    }, [filterUser, filterType])

    const renderItem = ({item}: any) => <BrowseItem item={item}/>

    const renderSeparator = () => <View style={styles.separator}/>

    const handleRefresh = () => dispatch(onGetPredictions({user: filterUser, type: filterType}))

    const renderFooter = () => {
        if (isLoadingMore)
            return <ActivityIndicator size={'large'} style={styles.listFooter} color={Colors.main1}/>
        return null
    }

    const loadMore = () => {
        if (nextPage <= totalPages && !isLoadingMore)
            dispatch(onGetPredictions({page: nextPage, user: filterUser, type: filterType}, false))
    }

    const onOpenModal = () =>
        modalRef?.current?.open()


    const onCloseModal = () => modalRef?.current?.close()

    return (
        <View style={styles.container}>
            <Modalize
                ref={modalRef}
                modalStyle={styles.modalize}
                adjustToContentHeight
            >
                <BrowseFilter
                    filterType={filterType}
                    filterUser={filterUser}
                    setFilterType={setFilterType}
                    setFilterUser={setFilterUser}
                    t={t}
                />
            </Modalize>

            <TouchableOpacity style={styles.filterContainer} onPress={onOpenModal}>
                <Ionicons name="filter" size={24} color="white"/>
            </TouchableOpacity>

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
