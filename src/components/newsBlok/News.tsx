import React, { FC } from 'react'
import { INewsList, NewsList } from './NewsList'

export interface INewsProps {
  items: INewsList[]
}

export const News: FC<INewsProps> = (props) => {
   const { items } = props
  return (
    <ul>
        {items && items.map((item: INewsList) => <NewsList key={item.icon} item={item}/>)}
    </ul>
  )
}
