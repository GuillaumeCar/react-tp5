import { createRef, Component } from 'react';
import VideoComment from './VideoComment'

export default class VideoDetail extends Component {
	state = {
		video: null,
	};
	player = createRef();

	componentDidMount() {
		this.updateVideo();
	}

	render() {
		if (!this.state.video) {
			return <div className="videoDetail is-loading"></div>;
		}
		const { title, description, file, likes, dislikes } = this.state.video;
		return (
			<div className="videoDetail">
				<button className="backButton" onClick={() => this.props.push('list')}>
					&lt; Retour
				</button>
				<video
					style={{ width: '100%', backgroundColor: 'black' }}
					height="400"
					controls
					src={'./uploads/' + file}
					ref={this.player}
				></video>
				<button onClick={() => this.player.current.play()}>play</button>
				<button onClick={() => this.player.current.pause()}>pause</button>
				<header>
					<h1>{title}</h1>
					<div className="likesContainer">
						<button className="like" onClick={() => this.handleLikeClick()}>
							{likes}
						</button>
						<button
							className="dislike"
							onClick={() => this.handleDislikeClick()}
						>
							{dislikes}
						</button>
					</div>
				</header>
				{description && <p>{description}</p>}
				<VideoComment videoId={this.state.video.id}/>
			</div>
		);
	}

	handleLikeClick() {
		fetch(`http://localhost:8080/api/videos/${this.props.params.id}/likes`, {
			method: "POST"
		})
		.then( () => this.updateVideo());
	}

	handleDislikeClick() {
		fetch(`http://localhost:8080/api/videos/${this.props.params.id}/dislikes`, {
			method: "POST"
		})
		.then( () => this.updateVideo());
	}

	updateVideo() {
		fetch(`http://localhost:8080/api/videos/${this.props.params.id}`)	
		.then( response => response.json() )
		.then( data => this.setState({video: data}));
	}
}
