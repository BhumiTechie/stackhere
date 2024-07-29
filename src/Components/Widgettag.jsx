import React from 'react'

const Widgettag = () => {
  const tags = [
    "c",
    "css",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "NextJS",
    "NodeJS",
    "Express",
    "MongoDB",
    "MYSQL",
    "python",
    "SQLite",
  ]
  return (
    <div>
      <h4>Watched tags</h4>
      {
        tags.map((tag) => (
           <p key={tag}>{tag}</p>
        
     )) }
    </div>
  )
}

export default Widgettag