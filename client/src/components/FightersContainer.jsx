import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Fighter from './Fighter';
import '../styles/fighterscontainer.css';

const FightersContainer = props => (
  <Droppable droppableId='droppable'>
    {provided => (
      <div ref={provided.innerRef} className='fighters-container'>
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
