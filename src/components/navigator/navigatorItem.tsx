import React, { FC } from 'react'

export interface INavigatorItem {
    label: string
    link: string   
}

export interface INavigatorItemProps {
    item: INavigatorItem
}

export const NavigatorItem: FC<INavigatorItemProps> = ({ item }) => {
    const {label, link} = item
  return (
    <nav>
        <a href={link}>{label}</a>

    </nav>
  )
}
