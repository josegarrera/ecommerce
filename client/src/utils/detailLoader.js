import ContentLoader from 'react-content-loader';

const DetailLoader = (props) => (
	<ContentLoader
		speed={2}
		width={600}
		height={460}
		viewBox='0 0 600 460'
		backgroundColor='#ecebeb'
		foregroundColor='#f3f3f3'
		{...props}
	>
		<rect x='25' y='30' rx='0' ry='0' width='30' height='30' />
		<rect x='25' y='65' rx='0' ry='0' width='30' height='30' />
		<rect x='70' y='30' rx='0' ry='0' width='280' height='291' />
		<rect x='369' y='30' rx='13' ry='13' width='194' height='296' />
		<rect x='25' y='100' rx='0' ry='0' width='30' height='30' />
		<rect x='80' y='40' rx='0' ry='0' width='280' height='291' />
	</ContentLoader>
);

export default DetailLoader;
