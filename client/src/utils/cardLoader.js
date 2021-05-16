import ContentLoader from 'react-content-loader';
const cardLoder = (props) => (
	<ContentLoader
		speed={2}
		width={600}
		height={600}
		viewBox='0 0 600 600'
		backgroundColor='#ecebeb'
		foregroundColor='#f3f3f3'
		{...props}
	>
		<rect x='0' y='50' rx='0' ry='0' width='224' height='255' />
		<rect x='0' y='314' rx='0' ry='0' width='224' height='30' />
		<rect x='0' y='351' rx='0' ry='0' width='224' height='30' />
		<rect x='0' y='388' rx='0' ry='0' width='224' height='30' />
	</ContentLoader>
);
export default cardLoder;
