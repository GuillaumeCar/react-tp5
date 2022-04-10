const VideoThumbnail = ({
	video: { title, description, thumbnail, file },
	onClick,
}) => (
	<a
		href={`./uploads/${file}`}
		onClick={event => {
			event.preventDefault();
			onClick();
		}}
	>
		<img src={`https://source.unsplash.com/${thumbnail}/600x340`} />
		<section className="infos">
			<h4>{title}</h4>
			<p>{description}</p>
		</section>
	</a>
);

export default VideoThumbnail;
