import { Component } from 'react';
import { createRef } from 'react';
import VideoThumbnail from './VideoThumbnail';

export default class VideoForm extends Component {
	state = {
		title: '',
        description: '',
        image: '',
        newId: null
	};

    
    titleInput = createRef();
    descriptionInput = createRef();
    imageInput = createRef();

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.titleInput.current.value);
        console.log(this.descriptionInput.current.value);
        console.log(this.imageInput.current.value);

        const formData = {
            title: this.titleInput.current.value,
            description: this.descriptionInput.current.value,
            thumbnail: this.imageInput.current.value
        }

        fetch('http://localhost:8080/api/videos', {
            method: "POST",
            body: JSON.stringify(formData)
        })
            .then( response => response.json() )
            .then(( data => this.setState({newId: data.id})))
            .then(() => this.props.push('detail', {id: this.state.newId}));


        // this.props.push('detail', {id: 10});
    }
       

    render() {
		return (
			<form className="videoForm" onSubmit={event => this.handleSubmit(event)}>
                <label htmlFor="title">Titre</label>
                <input
                    required
                    type="text"
                    id="title"
                    ref={ this.titleInput }
                />
                <label htmlFor="description">Description</label>
                <textarea
                    required
                    id="description"
                    cols="30"
                    rows="10"
                    ref={ this.descriptionInput }
                ></textarea>
                <label htmlFor="thumbnail">
                    Vignette
                    <small>
                        &nbsp;id de l'image sur &nbsp;
                        <a href="https://unsplash.com" target="_blank">
                            https://unsplash.com
                        </a>
                    </small>
                </label>
                <input
                    required
                    type="text"
                    id="thumbnail"
                    ref={ this.imageInput }
                />
                <button type="submit">Envoyer</button>
            </form>

		);
	}
}
