import React, {Component} from 'react';
import './UserPage.css';
import UserMenu from '../UserMenu/UserMenu';
import axiosInstance from '../../utils/axios';




class UserPage extends Component {




    componentDidMount() {
        console.log(`calling /api/user/${this.getUserId()}`);

    }

    getUserId = () => this.props.match.params.id;

    showFile = async (event) => {
        console.log("   function ===> showFile()   ")



        const {files} = event.target;
        const file = files[0];
        // var preview = document.getElementById('show-text');
        // var file = document.querySelector('input[type=file]').files[0];
        var reader = new FileReader()

        var textFile = /text.*/;

        if(!file.type.match(textFile)) {
            alert('NOT A TEXT FILE')
            return;
        }
        else {
            // preview.innerHTML = "<span class='error'>It doesn't seem to be a text file!</span>";
        }

        //${data.id}

        reader.onload = async (event) => {
            const {target: {result}} = event;
            console.log(result)
            // preview.innerHTML = event.target.result;
            const response = await axiosInstance.post(`/user/${this.getUserId()}/update`, { data: result });
        };

        reader.readAsText(file);

        event.target.value = null;


        //console.log(response.data);





    };

    render() {

        return (
            <div>
                <UserMenu/>
                <br></br>
                <br></br>


                <p>Hello User!</p>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <input type="file" onChange={this.showFile}/>
                <div id="show-text"></div>





            </div>

        );
    }
}


export default UserPage;