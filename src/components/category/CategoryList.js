import babyImage from './baby.png';
import antiImage from './anti.png';
import sportImage from './sport.png';
import cosmeticsImage from './cosmetics.png';

// category 
const category = [
    {
        image: cosmeticsImage,
        name: 'beauty',
        displayName: 'RTI Filing'
    },
    {
        image: sportImage,
        name: 'activewear',
        displayName: 'Legal Advice'

    },
    {
        image: antiImage,
        name: 'antiaging',
        displayName: 'Tax Filing'

    },   
    {
        image: babyImage, // A mother and baby icon for Maternity Care
        name: 'maternity',
        displayName: 'Financial Consultation'

    }
]
export default category;