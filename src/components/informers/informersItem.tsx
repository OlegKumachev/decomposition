import React, { FC } from 'react'


// дополнительная информация
export interface IInformersItem {
    map(arg0: (item: IInformersItem) => React.JSX.Element): React.ReactNode
    label: string
    link: string   
}

export interface IInformersItemProps {
    item: IInformersItem
}

export const InformersItem: FC<IInformersItemProps> = ({ item }) => {
  const {label, link} = item 
    return (
        <a href={link}>
        <img src={label} alt="Informers Image" />
      </a>
  )
}
