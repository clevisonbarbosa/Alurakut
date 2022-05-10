import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AluraKutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/profileRelation';

function ProfileSideBar(propriedade) {

  return (
    <Box>
      <img src={`https://github.com/${propriedade.gitHubUser}.png`} style={{ borderRadius: '8px' }}></img>
    </Box>
  )
}

export default function Home() {

  const gitHubUser = 'clevisonbarbosa';
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto', 
    'peas', 
    'rafaballerini', 
    'marcobrunodev',
    'felipefialho'
  ]

  return (
    <>
      <AlurakutMenu />
      <MainGrid>

        <div className='profileArea' style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar gitHubUser={gitHubUser} />
        </div>

        <div className='welcomeArea' style={{ gridArea: 'welcomeArea' }}>
          <Box className='title'>
            <h1>
              Bem Vindo(a)
            </h1>
          </Box>

          <OrkutNostalgicIconSet />
        </div>

        <div className='profileRelationsArea' style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className='smallTitle'>
              Pessoas da Comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual)=> {
                return (
                 <li>
                    <a href={`/users/${itemAtual}`} key={{itemAtual}}>
                    <img src={`https://github.com/${itemAtual}.png`} />
                    <spam>{itemAtual}</spam>
                  </a>
                 </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
