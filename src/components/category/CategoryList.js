import babyImage from './baby.png';
import antiImage from './anti.png';
import sportImage from './sport.png';
import cosmeticsImage from './cosmetics.png';

// category 
const category = [
    {
        image: cosmeticsImage,
        name: 'beauty',
        displayName: 'Eco-Friendly Beauty'
    },
    {
        image: sportImage,
        name: 'activewear',
        displayName: 'Activewear'

    },
    {
        image: antiImage,
        name: 'antiaging',
        displayName: 'Anti-Aging Skincare'

    },   
    {
        image: babyImage, // A mother and baby icon for Maternity Care
        name: 'maternity',
        displayName: 'Maternity & Postpartum Care'

    }
]
export default category;