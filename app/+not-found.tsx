import {Link, Stack} from "expo-router";
import {View} from "react-native";
import BasicStyles from "@/utils/BasicStyles";

const NotFound = () => {
    return (
        <>
            <Stack.Screen options={{title: "Not Found"}}/>
            <View style={BasicStyles.container}>
                <Link href="/" style={BasicStyles.routeBtn}>Go back to Home Screen</Link>
            </View>
        </>

    )
}


export default NotFound;