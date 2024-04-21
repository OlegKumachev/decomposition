import React, { FC } from 'react'
import { IInformersItem, InformersItem } from './informersItem'
// дополнительная информация
export interface IInformersProps {
    items: IInformersItem
}
export const Informers: FC<IInformersProps> = (props) => {
    const {items} = props
  return (
    <div>{items && items.map((item: IInformersItem) => <InformersItem key={item.label} item={item}/>)}</div>
  )
}
