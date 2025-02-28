import {View} from "react-native";
import {Image, ImageSource} from "expo-image";


type EmojiStickerProps = {
    stickerSource: ImageSource,
    imageSize: number,

}

const EmojiSticker = ({imageSize, stickerSource}: EmojiStickerProps) => {
    return (
        <View style={{top: -350}}>
            <Image source={stickerSource} style={{width: imageSize, height: imageSize}}/>
        </View>
    )
}
export default EmojiSticker;