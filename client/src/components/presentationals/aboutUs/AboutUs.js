import React from 'react';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {RiPagesLine} from 'react-icons/ri';
import AboutUsStyled from './styled';

const AboutUs = () => {
	let aboutUs = [
		{
			fullName: 'Bruno Paveglio',
			image:
				'https://res.cloudinary.com/dlexbrcrv/image/upload/v1622386784/Proyects/pic_profile_lktftw.png',
			linkedin: 'https://www.linkedin.com/in/pavegliobruno/',
			github: 'https://github.com/Pavegliobruno',
			cv: 'https://drive.google.com/drive/folders/1ltpZjk-YCHUSK4JWtLGcPSjjm98nLtOa?usp=sharing',
		},
		{
			fullName: 'Alonso Diaz',
			image:
				'https://media-exp1.licdn.com/dms/image/C4E03AQEbNZN6IcGIuA/profile-displayphoto-shrink_800_800/0/1620350023982?e=1628121600&v=beta&t=hbbJQIMDIVMJQ4huD5-pPYwG32Iu7CItGPaS4PBoHhQ',
			linkedin: 'https://www.linkedin.com/in/alonsojesusdiaz/   ',
			github: 'https://github.com/Alonxx/',
			cv: 'https://alonsodiaz.dev/',
		},
		{
			fullName: 'Facundo Cordoba',
			image:
				'https://media-exp1.licdn.com/dms/image/C4E03AQEpO8N-PGdoKA/profile-displayphoto-shrink_800_800/0/1619619418159?e=1628121600&v=beta&t=itqZomDH36Ltyba19sSwhKNPoJh4SrAB5l1HDVhtqBk',
			linkedin: 'https://www.linkedin.com/in/facundocordobaperez/',
			github: 'https://github.com/Facundo2210',
			cv: 'https://res.cloudinary.com/facu/image/upload/v1621971466/Github/Facundo_Nicolas_Cordoba_Perez_nn02qy.jpg',
		},
		{
			fullName: 'José Garrera',
			image:
				'https://media-exp1.licdn.com/dms/image/C5603AQFKPV4Vi96sWQ/profile-displayphoto-shrink_800_800/0/1516323614474?e=1628121600&v=beta&t=AGZCWGytQsOujPQpXn9jAfiFWREIyUoL_GxaQEmD_AA',
			linkedin: 'https://www.linkedin.com/in/josegarrera/',
			github: 'https://github.com/josegarrera',
			cv: '',
		},
		{
			fullName: 'Pedro Contreras',
			image:
				'https://media-exp1.licdn.com/dms/image/C4D03AQGuCYMpdbcOFg/profile-displayphoto-shrink_800_800/0/1621346044376?e=1628121600&v=beta&t=rF195tbbzrjEkn5PjYJvSwGK4y8oGI8MNhmy-49GOW4',
			linkedin: 'https://www.linkedin.com/in/pedrocontreras-js/',
			github: 'https://github.com/pedro030',
			cv: 'https://drive.google.com/file/d/13PsUVdphif23kDXlNvQYb6cSBYMgqCSs/view',
		},
		{
			fullName: 'Camila Álvarez',
			image:
				'https://media-exp1.licdn.com/dms/image/C4D03AQGBNJGBwrOA1w/profile-displayphoto-shrink_800_800/0/1621425093159?e=1628121600&v=beta&t=DomDycyMRlwqSadzN7WVQ4KtlJYGCeiALhjzq00bVyM',
			linkedin: 'https://www.linkedin.com/in/camila-alexandra-alvarez/',
			github: 'https://github.com/C0A0A',
			cv: 'https://drive.google.com/file/d/1ngvDeE9eFkx9RL_Xkr1Pyp7e9kXvPNvH/view?usp=sharing',
		},
		{
			fullName: 'Gregorio Martocci',
			image:
				'https://media-exp1.licdn.com/dms/image/C4D03AQEp6wx_IwyudQ/profile-displayphoto-shrink_800_800/0/1621385069868?e=1628121600&v=beta&t=G8zDQyk6moT_fU-A3vajHYQSnQ4OTV-s3DowY7oQIsU',
			linkedin: '',
			github: '',
			cv: '',
		},
	];

	return (
		<AboutUsStyled>
			{aboutUs.map((el, i) => (
				<div className='card' key={i + el + 'div'}>
					<div className='imageDiv' key={i + el + 'div2'}>
						<img
							className='image'
							src={el.image}
							alt='profile pic'
							key={i + el + 'img'}
						/>
					</div>
					<div className='nameDiv' key={i + el + 'div3'}>
						{el.fullName}
					</div>
					<div className='iconsDiv' key={i + el + 'div4'}>
						{el.linkedin ? (
							<a
								target='_blank'
								href={el.linkedin}
								rel='noopener noreferrer'
								key={i + el + 'a'}
							>
								<AiFillLinkedin className='icon' key={i + el + 'icon'} />
							</a>
						) : null}

						{el.github ? (
							<a
								target='_blank'
								href={el.github}
								rel='noopener noreferrer'
								key={i + el + 'a2'}
							>
								<AiFillGithub className='icon' key={i + el + 'icon2'} />
							</a>
						) : null}

						{el.cv ? (
							<a
								target='_blank'
								href={el.cv}
								rel='noopener noreferrer'
								key={i + el + 'a3'}
							>
								<RiPagesLine className='icon' key={i + el + 'icon3'} />
							</a>
						) : null}
					</div>
				</div>
			))}
		</AboutUsStyled>
	);
};

export default AboutUs;
