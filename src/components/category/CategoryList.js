import babyImage from './baby.png';
import antiImage from './anti.png';
import sportImage from './sport.png';
import cosmeticsImage from './cosmetics.png';

// category 
const category = [
    {
        image: cosmeticsImage,
        name: 'beauty',
        displayName: 'Beauty'
    },
    {
        image: sportImage,
        name: 'period',
        displayName: 'Periods'

    },
    {
        image: antiImage,
        name: 'antiaging',
        displayName: 'Anti-aging'

    },   
    {
        image: babyImage, // A mother and baby icon for Maternity Care
        name: 'maternity',
        displayName: 'Maternity'

    }
]
export default category;