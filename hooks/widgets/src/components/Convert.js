import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  // Using this debounce, cancel api call can save money by not
  // making a million api requests every character typed.

  useEffect(() => {
    // If 500ms go by and no cancel/text update
    const timerId = setTimeout(() => {
      // Update debounced text to text (will call API)
      setDebouncedText(text);
    }, 500);

    // Clear our timer
    return () => {
      clearTimeout(timerId);
    };
      // Run hook whenever text changes
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };

    doTranslation();
     // Only run when our debounced text changes or if the user changes language
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  )
}

export default Convert;