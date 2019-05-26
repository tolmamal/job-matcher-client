import React, {Component} from 'react';
import "./UploadFile.css";
import axiosInstance from '../../utils/axios';


class UploadFile extends Component {


    getUserId = () => this.props.match.params.id;


    componentWillMount = async () => {

        console.log("componentWillMount()");


        const response = await axiosInstance.get(`/user/${this.getUserId()}/update`);

        if(response.data[0] === 1) {
            console.log("User has only 1 CV FILE as should be!");

            let info = document.getElementsByClassName("file-info")[0];
            this.delteTextNameFile();
            // // var div = document.getElementById('show-text');
            // if (info.children.length != 0)
            // {
            //     while(info.firstChild){
            //         info.removeChild(info.firstChild);
            //     }
            // }
            let display = document.createElement("div");
            display.innerHTML = '<i class="fa fa-file-pdf-o" aria-hidden="true" style="font-size: 40px"></i>';
            let file_title = document.createTextNode("  " + response.data[1]);
            file_title.classname = "file-title";
            display.appendChild(file_title);
            info.appendChild(display);


        }

        else
            console.log("User has " + response.data[0] + " CV files");

    };

    deleteIDshowText() {
        var div = document.getElementById('show-text');
        if (div.children.length != 0)
        {
            while(div.firstChild){
                div.removeChild(div.firstChild);
            }
        }
    }

    showElementInNewDivForMsg(text)
    {
        var div = document.getElementById('show-text');
        var note = document.createElement("p");
        // var text = document.createTextNode("Failed! No cv file in your profile details");
        var br = document.createElement("br");
        note.appendChild(text);
        div.appendChild(br);
        div.appendChild(note);
    }

    delteTextNameFile()
    {
        let info = document.getElementsByClassName("file-info")[0];
        if (info.children.length != 0)
        {
            while(info.firstChild){
                info.removeChild(info.firstChild);
            }
        }
    }

    showFile = async (event) => {

        const {files} = event.target;
        const file = files[0];

        const reader = new FileReader();
        const textFile = /text.*/;

        if (!file.type.match(textFile)) {
            alert('NOT A TEXT FILE');
            return;
        } else {
            // preview.innerHTML = "<span class='error'>It doesn't seem to be a text file!</span>";
        }


        reader.onload = async (event) => {
            const {target: {result}} = event;

            const body = {
              file_name: file.name
            };
            const response = await axiosInstance.post(`/user/${this.getUserId()}/update`,{data: result,body});
            //////////////////////////////////////////////////////
            console.log('response from UploadFile ', response)
            if (response.data == 'cv')
            {
                this.deleteIDshowText();
                var text = document.createTextNode("Already exist a cv file, first delete!");
                this.showElementInNewDivForMsg(text);
            }
            else
            {
                this.deleteIDshowText();
                var text = document.createTextNode("Upload cv file success!");
                this.showElementInNewDivForMsg(text);
                this.componentWillMount();
            }
            //////////////////////////////////////////////////////

        };

        reader.readAsText(file);
        event.target.value = null;
    };


    deleteFileHandler = async () => {
        this.deleteIDshowText();
        var txt;
        if (window .confirm("Are you sure you want to delete the file?")) {
            txt = "You pressed OK!";
            const response = await axiosInstance.delete(`/user/${this.getUserId()}/update`);
            //////////////////////////////////////////////////////
            // if (response.data == 'failed' )
            // {
            //     this.deleteIDshowText();
            //     var text = document.createTextNode("Failed! No cv file in your profile details");
            //     this.showElementInNewDivForMsg(text);
            // }
            if (response.data == 'success')
            {
                var text = document.createTextNode("success!  now you can upload the new cv file");
                this.showElementInNewDivForMsg(text);
                this.delteTextNameFile();
            }
            else  // if esponse.data == 'failed' or esponse.data == 'error'
            {
                var text = document.createTextNode("Failed! No cv file in your profile details");
                this.showElementInNewDivForMsg(text);
            }
            //////////////////////////////////////////////////////
        }
        // else {
        //     txt = "You pressed Cancel!";
        // }
        // document.getElementById("demo").innerHTML = txt;


    };


    render() {
        return(

            <div className="main-file">
                <div className="file-inst">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h2>How does it work?</h2>
                    <br/>
                    <p>In order to get customized job's matches you need to upload a cv file.<br/>
                        Our system analyse it and using our special algorithm, based on your resume we offer you <br/>the matches results with a score to each match that indicates how much the job suit you.
                    </p>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <h3>Please load your CV file</h3>
                <br/>
                <input type="file" onChange={this.showFile}/>
                <div id="show-text"></div>
                <br/>
                <div className="file-info">

                </div>
                <br/>
                <br/>
                <div className="delete-file">
                    <button className="delete-btn" onClick={this.deleteFileHandler}>
                        <i className="fa fa-trash"></i>  Delete File
                    </button>
                    {/*<p id="demo"></p>*/}
                </div>

            </div>
        );
    }

}

export default UploadFile;