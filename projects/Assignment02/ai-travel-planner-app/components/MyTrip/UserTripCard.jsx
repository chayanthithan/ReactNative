import { View, Text, Image } from 'react-native'
import React from 'react'
import moment from 'moment'

export default function UserTripCard({ trip }) {

    const formatData = (data) => {
        return JSON.parse(data)
    }
    return (
        <View style={{
            marginTop: 15,
            display:'flex',
            flexDirection:'row',
            gap:10,
            alignItems:'center'
        }}>
            <Image source={require('./../../assets/images/pexels-pixabay-531035.jpg')}
                style={{
                    height: 100,
                    width: 100,
                    borderRadius:15
                }}
            />
            <View>
                <Text style={{
                    fontWeight:'medium',
                    fontSize:25
                }}>{JSON.parse(trip.tripData)?.locationInfo?.country}</Text>
                <Text style={{
                    fontWeight:'medium',
                    fontSize:20,
                    color:'gray'
                }}>{moment(formatData(trip.tripData).startDate).format('DD MMM yyyy')}</Text>
                <Text style={{
                    fontWeight:'medium',
                    fontSize:18,
                    color:'gray'
                }}>{JSON.parse(trip.tripData)?.traveler?.title}</Text>
            </View>
        </View>
    )
}