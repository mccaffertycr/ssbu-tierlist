import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Fighter from './Fighter';

const FightersContainer = props => (
  <Droppable droppableId='droppable'>
    {provided => (
      <div
        ref={provided.innerRef}
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          backgroundColor: 'black',
          width: '40%',
          margin: '10px 0',
          padding: 10,
          borderRadius: 5,
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
);

export default FightersContainer;
