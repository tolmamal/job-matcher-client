import React, {Component} from 'react';
import "./Instructions.css"
import auth from "./auth";
import Modal from '../Modal/Modal'

class Instructions extends Component {
    constructor(props){
        super(props)
       
    }
    state = {
        show: false
    }

    showModal = (event) => {
        console.log(event.currentTarget.name)
        this.setState( {  //update the state - change the state
            ...this.state,  // takes all the values of state
            show: !this.state.show  // change the value of show: if show = true we change show = false and opposite
        });
    }


    render () {
        return <div className="instructions" >
                <h2>Instructions</h2>
                <p> לנוחיותך קיימות מספר אפשרויות ולכל אפשרות מצורף סרטון הדרכה</p>
                <h3>על מנת להתחיל בתהליך התאמת משרות של אתרנו עלייך להרשם לאתר</h3>
                <button onClick={
                    () => {
                        auth.registeration( () => {
                            this.props.history.push("/register");
                        })
                    }
                }>הרשמה</button>
                <h4>עבור משתמש רשום</h4>
                <ul>
                <li> סינון משרות לפי: מיקום/אחוזים/סוג משרה/תחום/הגשת קו"ח</li>
                <input type="button" name="sort_video" onClick={this.showModal} value="Show Modal" />
                <Modal
                    onClose={this.showModal} 
                    show={this.state.show}>
                    This massage is from Modal!  // children 
                    כאן יוצג וידיאו 
                </Modal>
                <li>באפשרותך לסמן את המשרות המוצעות לפי משרות: מועדפות/שהוגשו קו"ח/מעסיקים שחזרו</li>
                <input type="button" onClick={this.showModal} value="Show Modal" />
                <Modal
                    onClose={this.showModal} 
                    show={this.state.show}>
                    This massage is from Modal!  // children
                    כאן יוצג וידיאו 
                </Modal>
                <li>באפשרותך להפיק דו"ח אודות המשרות</li>
                <input type="button" onClick={this.showModal} value="Show Modal" />
                <Modal
                    onClose={this.showModal} 
                    show={this.state.show}>
                    This massage is from Modal!  // children
                    כאן יוצג וידיאו 
                </Modal>
                <li>באפשרותך לעדכן את הפרטים האיישים </li>
                <input type="button" onClick={this.showModal} value="Show Modal" />
                <Modal
                    onClose={this.showModal} 
                    show={this.state.show}>
                    This massage is from Modal!  // children
                    כאן יוצג וידיאו 
                </Modal>
                <li>במידה ומצאתי עבודה באפשרותך לעדכן את הסטטוס הקיים באתרנו "מצאתי עבודה "</li>

                <input type="button" onClick={this.showModal} value="Show Modal" />
                <Modal
                    onClose={this.showModal} 
                    show={this.state.show}>
                    This massage is from Modal!  // children
                    כאן יוצג וידיאו 
                </Modal>
                </ul>
                
            </div>
    }
}

export default Instructions