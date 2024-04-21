import { useState } from 'react'
import './App.css'
import { News } from './components/newsBlok/News';
import { Widget } from './components/Widget/Widget';
import { Content } from './components/Content';
import { Navig } from './components/navigator/navigator';
import { Informers } from './components/informers/informers';
import { Search } from './components/search/search';


function App() {
  const news = [
    {icon: '11', link: '#', text: 'New News 1'},
    {icon: '12', link: '#', text: 'New News 2'},
    {icon: '13', link: '#', text: 'New News 3'}
  ]

  const navigator = [
    {label: 'Поиск', link: '#'},
    {label: 'Картинки', link: '#'},
    {label: 'карты', link: '#'}
    
  ]
  const inform = [
    {label:'https://yastatic.net/s3/home/div/new_app/bender/weather/weather_new_2023/bkn_d.svg', link: '#' }
  ]

  return (
    <div className='container'>
      <header></header>

      <Content>
        <Widget title='Новости'>
          <News items={news}></News>
        </Widget>
        <Widget title='навигация'>
          <Navig items={navigator}></Navig>
        </Widget>
        <Widget title=''>
          <Informers items={inform}></Informers>
        </Widget>
        <Widget title=''>
          <Search></Search>
        </Widget>
      </Content>

            
    </div>
  );
}

export default App
