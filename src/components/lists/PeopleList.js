import React from 'react'
import { people } from './data';
import { getImageUrl } from './utils';


  //https://codepen.io/gopinav/pen/gQpepq
  //https://react.dev/learn/rendering-lists

function PeopleList() {
    const chemists = people.filter(person =>
        person.profession === 'chemist'
      );
      const listItems = chemists.map(person =>
        <li key={person.id}>
          <img
            src={getImageUrl(person)}
            alt={person.name}
          />
          <p>
            <b>{person.name}:</b>
            {' ' + person.profession + ' '}
            known for {person.accomplishment}
          </p>
        </li>
      );
      return <ul>{listItems}</ul>;
   }

export default PeopleList