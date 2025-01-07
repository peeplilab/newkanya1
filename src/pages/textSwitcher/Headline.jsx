import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TextSwitcher = () => {
    const [index, setIndex] = useState(0);
    const taglines = [
        "Fast, Reliable, Affordable.",
        "तेज़, विश्वसनीय, किफायती।",
        "விரைவாக, நம்பகமானது, குறைந்த செலவில்.",
        "ઝડપી, વિશ્વસનીય, અને કિફાયતી.",
        "వేగంగా, నమ్మకంగా, సరసమైన ధరలో.",
        "দ্রুত, নির্ভরযোগ্য, সাশ্রয়ী।",
        "तेज़, भरोसेमंद, और सस्ता।",
        "ತ್ವರಿತ, ನಂಬಿಕೆಗೆ ಯೋಗ್ಯ, ಮತ್ತು ಅಗ್ಗದ ಬೆಲೆಗೆ.",
        "ਤੇਜ਼, ਭਰੋਸੇਯੋਗ, ਅਤੇ ਕਿਫਾਇਤੀ।",
        "വേഗം, വിശ്വസനീയവും, വിലകുറഞ്ഞതും.",
    ];


    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prev) => (prev + 1) % taglines.length);
        }, 3000); // Change tagline every 3 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="container text-center">
            {/* <h2>Expert Advice at Your Fingertips</h2> */}

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
