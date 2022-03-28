import { Button } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Theme from '../themes/Theme';

export function FavButton() {
    return( 
        <Button>
            <Ionicons name='star-outline' size={12} color={Theme.colors.backgroundColor} />
        </Button>
    )
}

export default FavButton;