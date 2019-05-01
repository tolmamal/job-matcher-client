import React, {Component} from 'react';
import "./UploadFile.css";
import axiosInstance from '../../utils/axios';


class UploadFile extends Component {


    getUserId = () => this.props.match.params.id;

    // showFile = async (event) => {
    //
    //     const {files} = event.target;
    //     const file = files[0];
    //     // var preview = document.getElementById('show-text');
    //     // var file = document.querySelector('input[type=file]').files[0];
    //     const reader = new FileReader()
    //
    //     const textFile = /text.*/;
    //
    //     if (!file.type.match(textFile)) {
    //         alert('NOT A TEXT FILE')
    //         return;
    //     } else {
    //         // preview.innerHTML = "<span class='error'>It doesn't seem to be a text file!</span>";
    //     }
    //
    //
    //     reader.onload = async (event) => {
    //         const {target: {result}} = event;
    //         console.log(result)
    //
    //
    //
    //         // preview.innerHTML = event.target.result;
    //         const response = await axiosInstance.post(`/user/${this.getUserId()}/update`, {data: result});
    //     };
    //
    //     reader.readAsText(file);
    //     event.target.value = null;
    //     //console.log(response.data);
    // };



    showFile = async (event) => {

        const success = false; //flag True will indicate that user doesn't already have CV file
        const {files} = event.target;
        const file = files[0];

        const reader = new FileReader()
        const textFile = /text.*/;

        if (!file.type.match(textFile)) {
            alert('NOT A TEXT FILE')
            return;
        } else {
            // preview.innerHTML = "<span class='error'>It doesn't seem to be a text file!</span>";
        }

        reader.onload = async (event) => {
            const {target: {result}} = event;
            console.log(result)

            const response = await axiosInstance.post(`/user/${this.getUserId()}/update`, {data: result});
            if (response.data === false)
                // alert("WARNING: CV file exist already!")
                alert("WARNING: CV file exist already!");



        };

        reader.readAsText(file);
        event.target.value = null;


    };


    render() {
        return(
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <h3>Please load your CV file</h3>
                <input type="file" onChange={this.showFile}/>
                <div id="show-text"></div>

            </div>
        );
    }

}

export default UploadFile;