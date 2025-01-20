import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Based on iPhone 11's scale
const scale = SCREEN_WIDTH / 375;

export function normalize(size) {
    const newSize = size * scale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
}