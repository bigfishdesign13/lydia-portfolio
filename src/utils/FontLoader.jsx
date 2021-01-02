import React from "react";
import GoogleFontLoader from 'react-google-font-loader'

const FontLoader = (...props) => (
    <GoogleFontLoader
        fonts={[
        {
            font: 'Shadows Into Light',
            weights: [400],
        },
        {
            font: 'Barlow Semi Condensed',
            weights: [400],
        },
        {
            font: 'Montserrat',
            weights: [900, 300],
        },
        ]}
        subsets={['cyrillic-ext', 'greek']}
    />
)

FontLoader.propTypes = {

}

export default FontLoader;