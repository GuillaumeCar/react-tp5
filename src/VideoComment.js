import { Component } from 'react';
import { createRef } from 'react';
import VideoThumbnail from './VideoThumbnail';

export default class VideoComment extends Component {
	state = {
		commentInput: '',
        comments: []
	};

    componentDidMount() {
		this.getComments();
	}

    handleCommentChange(event) {
        this.setState({ commentInput: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        
        if (this.state.commentInput != '') {
            const body = {content: this.state.commentInput};
            fetch(`http://localhost:8080/api/videos/${this.props.videoId}/comments`, {
                method: "POST",
                body: JSON.stringify(body)
            })
            .then( () => this.getComments());
            
            this.setState({commentInput: ''})
        }

    }

    render() {
		return (
            <aside className="commentList">
                <h2>{this.state.comments.length} commentaires</h2>
                <form className="commentForm" onSubmit={event => this.handleSubmit(event)}>
                    <textarea
                        name="content"
                        rows="2"
                        placeholder="Ajouter un commentaire public"
                        onChange={e => this.handleCommentChange(e)}
                        value={this.state.commentInput}
                    ></textarea>
                    <button type="submit">Envoyer</button>
                </form>

                {this.state.comments.map(comment => (
                    <article key={comment.id} className="commentRenderer">
                        <time dateTime={comment.created_at}>{this.formatDate(comment)}</time>
                        <p>{comment.content}</p>
                    </article>
					))}
                
            </aside>
		);
	}

    getComments() {
        fetch(`http://localhost:8080/api/videos/${this.props.videoId}/comments`)
            .then( response => response.json() )
            .then( data => this.setState({comments: data}))
            .then(() => console.log(this.state));
    }

    // TODO: cleaning
    formatDate(comment) {
        const date = new Date(comment.created_at);

        return `Le ${date.toLocaleDateString()} à ${date.toLocaleTimeString()}`
    }
}
