import React, { Component } from 'react';

export default class MultipleImageUploadComponent extends Component {

    fileObj = [];
    fileArray = [];

    constructor(props) {
        super(props)
        this.state = {
            file: [null],
            prediction: null
        }
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        // this.uploadFiles = this.uploadFiles.bind(this)
        this.getPrediction = this.getPrediction.bind(this)
    }

    uploadMultipleFiles(e) {
        this.fileObj.push(e.target.files)
        for (let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
        this.setState({ file: this.fileArray })
    }

    // uploadFiles(e) {
    getPrediction(e) {
        e.preventDefault()
        const file = this.state.file[0]
        // const upload = (file) => {

        // }
        // // console.log(this.state.file)
        // const myHeaders = new Headers({
        //   "Content-Type": "multipart/form-data",
        // });
        fetch("https://prediction.dev.raptorapps.com/api/multi", {
            method: "POST",
            body: file,
            mode: "cors",
            headers: new Headers({
                "Content-Type": "multipart/form-data",
                "Accept": "application/json",
            }),
        })
        .then((res) => {
            console.log(res);
            this.setState({ prediction: res.prediction[0] });
        });
    }

    render() {
        return (
            <form>
                <div className="form-group multi-preview">
                    {(this.fileArray || []).map(url => (
                        <img src={url} alt="..." />
                    ))}
                </div>

                <div className="form-group">
                    <input type="file" className="form-control" onChange={this.uploadMultipleFiles} multiple />
                </div>
                <button type="button" className="btn btn-success btn-block" onClick={this.getPrediction}>Submit</button>
                <br/>
                <h1>Prediction: {this.state.prediction}</h1>
            </form >
        )
    }
}