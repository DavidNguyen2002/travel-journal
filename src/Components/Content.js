import React from 'react'
import data from '../data'
import Card from './Card'

function Content() {
    const content = data.map(
        (item) => {
            return <Card 
                key={item.title}
                item={item}
            />
        }
    )

    return (
        <div className="content">
            {content}
        </div>
    )
}

export default Content