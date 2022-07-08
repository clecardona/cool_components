import 'components/Battles/Carousel.sass';
import 'components/Battles/Carousel_expand.sass';
import './App.sass';
import './styles/base.sass';

import { Button } from 'cardo-ui';
import Apple from 'components/Battles/Apple/Apple';
import IceCream from 'components/Battles/IceCream/IceCream';
import Pirate from 'components/Battles/Pirate/Pirate';
import Sayan from 'components/Battles/Sayan/Sayan';
import Sceptre from 'components/Battles/Sceptre/Sceptre';
import Carousel from 'components/Carousel';
import GQL from 'components/GQL';
import { CgComponents } from 'react-icons/cg';

import MagicMenu from './components/MagicMenu';

function App() {
  const battles = [
    <Sayan />,
    <Apple />,
    <Pirate />,
    <IceCream />,
    <Sceptre />,
    <Pirate />,
    <IceCream />,
    <Sceptre />,
  ]
  const BOX_WIDTH = 800
  return (
    <div className='App'>
      <header>
        <div className='icon'>
          <CgComponents size={40} />
        </div>

        <h1>
          Some cool <b>components</b>
        </h1>
      </header>
      <main>
        <MagicMenu />
        <div className='content-battle'>
          <h2 className='float'>
            <b>Galeries</b> (CSS Battles)
          </h2>
          <Carousel Battles={battles} width={BOX_WIDTH} type={1} />
          <Carousel Battles={battles} type={2} />
        </div>
        <div className='content-gql'>
          <h2 className='float'>
            Graph<b>QL</b>
          </h2>
          <GQL />
        </div>
        <Button text='This is a Big Button' onClick={() => {}} />
        <Button
          text='Button with icon'
          size='md'
          IconLeft={<CgComponents />}
          onClick={() => {}}
        />
      </main>
    </div>
  )
}

export default App
