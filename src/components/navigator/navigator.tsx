import React, { FC } from 'react'
import { INavigatorItem, NavigatorItem } from './navigatorItem'
// навигация по сайту
export interface INavigatorProps {
    items: INavigatorItem[]
}
export const Navig: FC<INavigatorProps> = ({items}) => {
  return (
    <ul>
        {items.map((item: INavigatorItem) => (<NavigatorItem key={item.label} item={item}/>))}
    </ul>
  )
}
