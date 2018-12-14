import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Fighter from './Fighter';
import '../styles/tier.css';

const Tier = props => {
  return (
    <div className='tier'>
      <h1
        style={{
          fontWeight: 'bold',
          fontSize: 64,
          webKitTextStroke: '2 black',
          margin: 5,
          minWidth: '4.5rem',
        }}
        id={`${props.header}-header`}
      >
        {props.header}
      </h1>
      {props.editable ? (
        <Droppable droppableId={`droppable${props.header}`}>
          {provided => (
            <div
              ref={provided.innerRef}
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: '80%',
              }}
            >
              {props.fighters
                ? props.fighters.map((f, index) => (
                    <Draggable
                      key={f.id}
                      draggableId={`fighter-${f.id}`}
                      index={index}
                    >
                      {provided => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Fighter {...f} />
                        </div>
                      )}
                    </Draggable>
                  ))
                : ''}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ) : (
        props.fighters.map((f, index) => <Fighter {...f} />)
      )}
    </div>
  );
};

export default Tier;
