import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TextSwitcher = () => {
    const [index, setIndex] = useState(0);
    const taglines = [
        "Pure, Calming, Nourishing.",
        "शुद्ध, सुकूनभरा, पोषणयुक्त।",
        "தூய, அமைதியளிக்கக்கூடியது, ஊட்டச்சத்து நிறைந்தது.",
        "શુદ્ધ, શાંતિદાયક, પોષકતત્ત્વયુક્ત.",
        "శుద్ధమైనది, ప్రశాంతతనిచ్చేది, పోషకమైనది.",
        "বিশুদ্ধ, প্রশান্তিকর, পুষ্টিকর।",
        "शुद्ध, शांति देने वाला, और पौष्टिक।",
        "ಶುದ್ಧ, ಶಾಂತಿದಾಯಕ, ಮತ್ತು ಪೌಷ್ಟಿಕ.",
        "ਸ਼ੁੱਧ, ਸ਼ਾਂਤ, ਅਤੇ ਪੋਸ਼ਣਕਰ।",
        "ശുദ്ധം, ശാന്തവും, പോഷകവുമാണ്."
    ];
    


    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prev) => (prev + 1) % taglines.length);
        }, 3000); // Change tagline every 3 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="container text-center">
            {/* <h2>Most Loved</h2> */}

            <motion.div
                className="text-center mt-10"
                initial={{ opacity: 0, y: 20 }}  // Initial state
                animate={{ opacity: 1, y: 0 }}  // Final state
                transition={{ duration: 1 }}  // Smooth transition effect
                key={index}
            >
                <h3 className="text-xl font-bold text-pink-600">
                    {taglines[index]}
                </h3>
            </motion.div>
        </div>
    );
};

export default TextSwitcher;
