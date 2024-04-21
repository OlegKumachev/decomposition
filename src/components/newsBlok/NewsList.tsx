import React, { FC }from 'react'

// новостной блок 

export interface INewsList {
  icon: string
  link: string
  text: string
}

export interface INewsListProps {
  item: INewsList
}
export const NewsList: FC<INewsListProps> = ({ item }) => {
    const {icon, link, text} = item
  return (

    <li>
        <a href={link}>{icon}{text}</a>
    </li>
  )
}
