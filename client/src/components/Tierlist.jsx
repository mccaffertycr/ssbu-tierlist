import React from 'react';
import Tier from './Tier';
import TierlistInfo from './TierlistInfo';
import NewTierlistForm from './NewTierlistForm';
import '../styles/tierlist.css';

const getFighters = (props, tier) => {
  switch (true) {
    case tier === 'S':
      return props.sTier;
    case tier === 'A':
      return props.aTier;
    case tier === 'B':
      return props.bTier;
    case tier === 'C':
      return props.cTier;
    case tier === 'D':
      return props.dTier;
    default:
      break;
  }
};

const Tierlist = props => {
  return (
    <div id='tierlist' className='tierlist'>
      {props.editable ? (
        <NewTierlistForm
          name={props.name}
          title={props.title}
          onInputChange={() => props.onInputChange}
          onHandleSubmit={() => props.onHandleSubmit}
        />
      ) : (
        <TierlistInfo />
      )}
      {props.editable
        ? props.tiers.map(t => (
            <Tier
              key={t}
              header={t}
              editable={true}
              fighters={getFighters(props, t)}
            />
          ))
        : props.tiers.map(t => (
            <Tier
              key={t}
              header={t}
              editable={false}
              fighters={getFighters(props, t)}
            />
          ))}
    </div>
  );
};

export default Tierlist;
