import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Convert from './components/Convert';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end JavaScript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite among many engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  }
];

const options = [
  {
    label: 'The color red',
    value: 'red'
  },
  {
    label: 'A nice green',
    value: 'green'
  },
  {
    label: 'Some shade of blue',
    value: 'blue'
  }
]

const App = () => {

  return (
    <div>
      <Translate />
    </div>
  );
};

export default App;